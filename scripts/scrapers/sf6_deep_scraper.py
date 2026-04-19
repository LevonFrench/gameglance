import json
import re
import os
import time
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

def get_move_type(heading):
    h = heading.lower()
    if 'standing' in h or 'crouching' in h or 'jumping' in h or 'normals' in h:
        return 'normal'
    if 'command' in h or 'target' in h:
        return 'unique'
    if 'throw' in h:
        return 'throw'
    if 'drive' in h:
        return 'common'
    if 'special' in h:
        return 'special'
    if 'super' in h:
        return 'super'
    return 'normal'

CHARS = ['Elena', 'Sagat', 'C._Viper', 'Alex', 'Ingrid']
BASE_URL = "https://wiki.supercombo.gg/w/Street_Fighter_6/"

def sanitize_filename(char_name):
    name = char_name.lower().replace('_', '-').replace('.', '').replace(' ', '-')
    return re.sub(r'-+', '-', name).strip('-')

def parse_html(html, char_name):
    soup = BeautifulSoup(html, 'html.parser')
    moves = []
    
    for m in soup.select('.movedata-container'):
        # Determine type
        heading = 'normal'
        for prev in m.find_all_previous(['h2', 'h3']):
            text = prev.text.strip()
            if text and text not in ['Introduction', 'Classic & Modern Versions Comparison']:
                heading = text
                break
        move_type = get_move_type(heading)
        
        # Name & Input
        name_items = m.select('.movedata-flex-framedata-name-item')
        name = "Unknown"
        move_input = ""
        
        if len(name_items) >= 2:
            move_input = name_items[0].text.strip().replace('\n', ' ')
            name = ""
            for child in name_items[1].descendants:
                if child.name == 'img' and child.get('alt'):
                    name += child['alt'] + ' '
                elif isinstance(child, str) and child.strip():
                    name += child.strip() + ' '
            name = name.strip()
            # In SF6 SuperCombo, sometimes the image alt is used in the name, but usually it's just text.
            # Wait, if name_items[1] is the name, it's usually just text. Let's just use text.
            name = name_items[1].text.strip().replace('\n', ' ')
            
            # Now let's get the proper input from name_items[0] which might have images
            move_input = ""
            for child in name_items[0].descendants:
                if child.name == 'img' and child.get('alt'):
                    move_input += child['alt'] + ' '
                elif isinstance(child, str) and child.strip():
                    move_input += child.strip() + ' '
            move_input = move_input.strip()
        elif len(name_items) == 1:
            name = name_items[0].text.strip().replace('\n', ' ')
            move_input = name
            
        move_input = move_input.strip().replace('  ', ' ')
        if not move_input: move_input = name
        
        # ID
        move_id = re.sub(r'[^a-z0-9]', '-', name.lower())
        move_id = re.sub(r'-+', '-', move_id).strip('-')
        
        # Frame Data
        table = m.select_one('table.wikitable')
        frame_data = {}
        damage = ""
        if table:
            headers = [th.text.strip() for th in table.select('th')]
            tds = [td.text.strip() for td in table.select('td')[:len(headers)]]
            raw_fd = dict(zip(headers, tds))
            
            # Map to our schema
            if 'Startup' in raw_fd: frame_data['startup'] = raw_fd['Startup']
            if 'Active' in raw_fd: frame_data['active'] = raw_fd['Active']
            if 'Recovery' in raw_fd: frame_data['recovery'] = raw_fd['Recovery']
            if 'On Block' in raw_fd: frame_data['advantage'] = raw_fd['On Block']
            if 'Damage' in raw_fd: damage = raw_fd['Damage']
            
        moves.append({
            "id": move_id,
            "name": name,
            "type": move_type,
            "input": move_input,
            "frameData": frame_data,
            "damage": damage
        })
        
    return moves

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()
        
        for char in CHARS:
            url = f"{BASE_URL}{char}"
            print(f"Navigating to {url}...")
            try:
                page.goto(url)
                print(f"Waiting for Cloudflare bypass for {char}...")
                time.sleep(8)
                
                html = page.content()
                
                moves = parse_html(html, char)
                print(f"Parsed {len(moves)} moves for {char}.")
                
                if len(moves) > 0:
                    json_name = sanitize_filename(char)
                    json_path = f"public/data/street-fighter-6/{json_name}.json"
                    
                    if os.path.exists(json_path):
                        with open(json_path, 'r', encoding='utf-8') as f:
                            char_data = json.load(f)
                    else:
                        char_data = {"game": "Street Fighter 6", "character": char.replace('_', ' '), "movesList": [], "combosList": [], "ramId": "-1"}
                        
                    char_data['movesList'] = moves
                    
                    with open(json_path, 'w', encoding='utf-8') as f:
                        json.dump(char_data, f, indent=2)
                    print(f"Injected data into {json_path}")
                else:
                    print(f"No moves found for {char}. Might be a Cloudflare block or different structure.")
                
                # Rate limit to avoid 429
                print("Waiting 2.5 seconds before next scrape...")
                time.sleep(2.5)
                
            except Exception as e:
                print(f"Error scraping {url}: {e}")
                
        browser.close()

if __name__ == "__main__":
    main()
