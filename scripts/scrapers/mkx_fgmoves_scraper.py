import os
import re
import json
import requests
from bs4 import BeautifulSoup

def get_mkx_characters():
    games_ts_path = r'j:\projects\GameGlance\src\games.ts'
    with open(games_ts_path, 'r', encoding='utf-8') as f:
        content = f.read()

    mkx_idx = content.find("id: 'mortal-kombat-x',")
    if mkx_idx == -1:
        return []
    
    chars_start = content.find('characters: [', mkx_idx)
    chars_end = content.find(']', chars_start)
    block = content[chars_start:chars_end]
    
    chars = re.findall(r"id:\s*'([^']+)'", block)
    return chars

def translate_inputs(inputs):
    # FGMoves raw string to MK notation mapping
    mapping = {
        "Left": "b",
        "Right": "f",
        "Up": "u",
        "Down": "d",
        "Down Left": "d b",
        "Down Right": "d f",
        "Up Left": "u b",
        "Up Right": "u f",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "Block": "BL"
    }
    
    mapped = []
    for inp in inputs:
        inp_str = inp.strip()
        # Some inputs might be combinations like 'Left + 1', FGMoves usually separates them in span/svgs
        if inp_str in mapping:
            mapped.append(mapping[inp_str])
        else:
            mapped.append(inp_str.lower())
    
    # join with spaces for MK notation
    return " ".join(mapped)

def guess_move_type(mapped_input):
    # If it has directions then a button, usually special. If it has multiple buttons, string. Else normal.
    if len(mapped_input.split(' ')) == 1:
        return 'normal'
    elif any(b in mapped_input for b in ['1', '2', '3', '4']) and mapped_input.count(' ') >= 1:
        # Check if there are multiple attack buttons
        buttons = sum(1 for x in mapped_input.split(' ') if x in ['1','2','3','4'])
        if buttons > 1:
            return 'string'
        else:
            # Contains one button and some directions -> special or command normal
            if 'b f' in mapped_input or 'd b' in mapped_input or 'd f' in mapped_input:
                return 'special'
            else:
                return 'normal'
    return 'normal'

def scrape_character(slug):
    url = f'https://fgmoves.com/games/mkx/moves/{slug}'
    print(f"Scraping {url}...")
    r = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    if r.status_code != 200:
        print(f"Failed to fetch {slug} (Status: {r.status_code})")
        return None
        
    soup = BeautifulSoup(r.text, 'html.parser')
    moves = []
    
    # Try finding moves
    for row in soup.find_all('div', class_=re.compile(r'grid grid-cols-2')):
        name_el = row.find('span', class_=re.compile(r'whitespace-nowrap'))
        if not name_el:
            continue
        name = name_el.get_text(strip=True)
        
        input_container = row.find('div', class_='move-input')
        inputs = []
        if input_container:
            for child in input_container.children:
                if child.name == 'span':
                    svg = child.find('svg')
                    if svg:
                        title = svg.find('title')
                        if title:
                            inputs.append(title.get_text(strip=True))
                    else:
                        text = child.get_text(strip=True)
                        if text:
                            # Sometimes FGMoves has text like "or" or ","
                            if text == ',':
                                continue # we don't need literal commas, we format with spaces
                            inputs.append(text)
                            
        if inputs and name:
            mapped_input = translate_inputs(inputs)
            
            # create id
            move_id = name.lower().replace(' ','-').replace('(','').replace(')','').replace("'",'').replace(',','').replace('!','').replace('/','')
            move_type = guess_move_type(mapped_input)
            
            # FGMoves often includes basic Jump/Hop moves, we keep them
            notes = ""
            if "Jump" in name:
                notes = "Air"
                
            move_obj = {
                "name": name,
                "input": mapped_input,
                "type": move_type,
                "id": move_id
            }
            if notes:
                move_obj["notes"] = notes
                
            moves.append(move_obj)
            
    return moves

def main():
    chars = get_mkx_characters()
    print(f"Found {len(chars)} MKX characters in games.ts")
    
    data_dir = r'j:\projects\GameGlance\public\data\mortal-kombat-x'
    
    for char in chars:
        moves = scrape_character(char)
        if moves and len(moves) > 0:
            print(f" -> Found {len(moves)} moves for {char}")
            json_path = os.path.join(data_dir, f"{char}.json")
            
            # Load existing
            if os.path.exists(json_path):
                with open(json_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    if len(data.get('movesList', [])) > 20:
                        print(f" -> Skipping {char}, already has {len(data['movesList'])} moves.")
                        continue
            else:
                data = {
                    "character": char.replace('-', ' ').title(),
                    "game": "Mortal Kombat X",
                    "movesList": []
                }
                
            data['movesList'] = moves
            
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)
        else:
            print(f" -> No moves found for {char}")

if __name__ == '__main__':
    main()
