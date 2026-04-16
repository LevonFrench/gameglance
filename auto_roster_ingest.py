import os
import re
import json

WIKI_GUIDES = 'wiki/raw/guides'
DATA_DIR = 'public/data'
TS_FILE = 'src/games.ts'

MOVE_PATTERN = re.compile(r'^\s*([A-Za-z\- \']+?)\s{2,}(.*(?:QCF|QCB|HCF|HCB|DP|360|720|[UBDF]+[\s\+,]+|LP|MP|HP|LK|MK|HK|P|K).*)$', re.IGNORECASE)

def normalize_text(text):
    return re.sub(r'[^a-z0-9]', '', text.lower())

def main():
    # 1. Load existing games
    with open(TS_FILE, 'r', encoding='utf-8') as f:
        ts_text = f.read()

    prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)(.*)', ts_text, re.DOTALL)
    prefix = prefix_match.group(1)
    rest = prefix_match.group(2)

    games = []
    current_block = ""
    brace_count = 0
    in_game = False

    i = 0
    while i < len(rest):
        char = rest[i]
        if not in_game:
            if char == '{':
                in_game = True
                brace_count = 1
                current_block = char
            elif char == ']':
                break
        else:
            current_block += char
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    games.append(current_block)
                    in_game = False
        i += 1
        
    postfix = rest[i:]

    game_objs = []
    for g in games:
        m_id = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', g)
        m_name = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', g)
        m_roster = re.search(r'rosterCount:\s*(\d+)', g)
        if m_id and m_name:
            gid = m_id.group(1)
            gname = m_name.group(1)
            groster = int(m_roster.group(1)) if m_roster else 999
            
            char_block_match = re.search(r'characters:\s*\[([\s\S]*?)\]', g)
            chars = []
            if char_block_match:
                for cm in re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"],\s*name:\s*[\'"]([^\'"]+)[\'"]\s*\}', char_block_match.group(1)):
                    chars.append({'id': cm.group(1), 'name': cm.group(2)})
            
            game_objs.append({
                'block': g,
                'id': gid,
                'name': gname,
                'rosterCount': groster,
                'characters': chars,
                'char_names_lower': [c['name'].lower() for c in chars],
                'norm_name': normalize_text(gname)
            })

    # Find characters in raw wiki
    found_chars_by_game = {g['id']: [] for g in game_objs}
    moves_by_char = {} # key: (game_id, char_id)
    
    for char_slug in os.listdir(WIKI_GUIDES):
        char_path = os.path.join(WIKI_GUIDES, char_slug)
        if not os.path.isdir(char_path): continue
        
        # Read the first few txt files in the char's guide
        best_game = None
        char_moves = []
        
        for file in os.listdir(char_path):
            if not file.endswith('.txt'): continue
            file_path = os.path.join(char_path, file)
            try:
                with open(file_path, 'r', encoding='latin1') as f:
                    lines = f.readlines()
                    
                # Look for game hints in first 150 lines
                chunk = "".join(lines[:150]).lower()
                chunk_norm = normalize_text(chunk)
                
                # Match to game
                for g in game_objs:
                    if g['norm_name'] in chunk_norm:
                        best_game = g['id']
                        break
                        
                # If we still don't have a game, we will fallback later
                current_section = "special"
                
                for line in lines:
                    line = line.strip()
                    if not line: continue
                    if "super" in line.lower() and len(line) < 30:
                        current_section = "super"
                    elif "special" in line.lower() and len(line) < 30:
                        current_section = "special"
                        
                    match = MOVE_PATTERN.match(line)
                    if match:
                        name = match.group(1).strip()
                        inputs = match.group(2).strip()
                        if len(name) < 3 or len(name) > 35: continue
                        char_moves.append({
                            "name": name,
                            "type": current_section,
                            "inputs": [inputs]
                        })
            except:
                pass
                
        if best_game and len(char_moves) > 0:
            char_name = char_slug.replace('-', ' ').title()
            found_chars_by_game[best_game].append({
                'id': char_slug,
                'name': char_name,
                'moves': char_moves
            })

    # Now inject the missing characters into game_objs
    for g in game_objs:
        missing_count = g['rosterCount'] - len(g['characters'])
        if missing_count > 0:
            candidates = found_chars_by_game[g['id']]
            # filter out existing
            new_chars = [c for c in candidates if c['name'].lower() not in g['char_names_lower']]
            
            # Add up to missing_count
            for c in new_chars[:missing_count]:
                g['characters'].append({'id': c['id'], 'name': c['name']})
                
                # Create/Update JSON
                os.makedirs(os.path.join(DATA_DIR, g['id']), exist_ok=True)
                json_path = os.path.join(DATA_DIR, g['id'], f"{c['id']}.json")
                doc = {
                    "game": g['name'],
                    "character": c['name'],
                    "movesList": c['moves']
                }
                with open(json_path, 'w', encoding='utf-8') as jf:
                    json.dump(doc, jf, indent=2)

    # Rebuild games.ts
    merged_blocks = []
    for g in game_objs:
        char_str = ",\n      ".join([f"{{ id: '{c['id']}', name: '{c['name']}' }}" for c in g['characters']])
        # replace the existing characters string
        new_block = re.sub(r'(characters:\s*\[\s*)([\s\S]*?)(\s*\])', f'\\1\n      {char_str}\n    \\3', g['block'])
        merged_blocks.append(new_block)

    full_ts = prefix + ",\n  ".join(merged_blocks) + "\n" + postfix

    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(full_ts)

    print("Completed autonomous ingestion protocol.")

if __name__ == '__main__':
    main()
