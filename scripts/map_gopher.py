import os
import re
import json

WIKI_GUIDES = 'wiki/raw/guides'
DATA_DIR = 'public/data'
TS_FILE = 'src/games.ts'

MOVE_PATTERN = re.compile(r'^\s*([A-Za-z\- \']+?)\s{2,}(.*(?:QCF|QCB|HCF|HCB|DP|360|720|[UBDF]+[\s\+,]+|LP|MP|HP|LK|MK|HK|P|K).*)$', re.IGNORECASE)

def main():
    # Load games
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
            
            char_block_match = re.search(r'(characters:\s*\[\s*)([\s\S]*?)(\s*\])', g)
            chars = []
            if char_block_match:
                for cm in re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"],\s*name:\s*[\'"]([^\'"]+)[\'"]\s*\}', char_block_match.group(2)):
                    chars.append({'id': cm.group(1), 'name': cm.group(2)})
            
            game_objs.append({
                'block': g,
                'id': gid,
                'name': gname,
                'rosterCount': groster,
                'characters': chars,
                'c_pre': char_block_match.group(1) if char_block_match else "characters: [\n      ",
                'c_post': char_block_match.group(3) if char_block_match else "\n    ]",
            })

    # Sort games by length descending so "Street Fighter Alpha 3" matches before "Street Fighter Alpha"
    game_objs.sort(key=lambda x: len(x['name']), reverse=True)

    # Scrape characters and map to game
    found_chars_by_game = {g['id']: [] for g in game_objs}
    
    for char_slug in os.listdir(WIKI_GUIDES):
        char_path = os.path.join(WIKI_GUIDES, char_slug)
        if not os.path.isdir(char_path): continue
        
        best_game = None
        char_moves = []
        
        for file in os.listdir(char_path):
            if not file.endswith('.txt'): continue
            file_path = os.path.join(char_path, file)
            try:
                with open(file_path, 'r', encoding='latin1') as f:
                    lines = f.readlines()
                    
                chunk = "".join(lines[:300]).lower()
                
                # Try finding the exact game name with word boundaries
                for g in game_objs:
                    gn = g['name'].lower()
                    escaped_gn = re.escape(gn)
                    # allow matching "Street Fighter III: 3rd Strike" if text says "street fighter iii 3rd strike"
                    escaped_gn = escaped_gn.replace('\\:', ':?').replace('\\-', '\\-?')
                    
                    if re.search(r'\b' + escaped_gn + r'\b', chunk):
                        best_game = g['id']
                        break
                        
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
                        if "http" in inputs or "www" in inputs: continue
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

    # Restore original order of games
    game_objs.sort(key=lambda x: ts_text.find(f"id: '{x['id']}'"))

    # Inject
    merged_blocks = []
    total_injected = 0
    
    for g in game_objs:
        missing_count = g['rosterCount'] - len(g['characters'])
        existing_ids = [c['id'] for c in g['characters']]
        
        if missing_count > 0:
            candidates = found_chars_by_game.get(g['id'], [])
            for c in candidates:
                if c['id'] not in existing_ids:
                    g['characters'].append({'id': c['id'], 'name': c['name']})
                    existing_ids.append(c['id'])
                    missing_count -= 1
                    total_injected += 1
                    
                    # Create JSON
                    os.makedirs(os.path.join(DATA_DIR, g['id']), exist_ok=True)
                    json_path = os.path.join(DATA_DIR, g['id'], f"{c['id']}.json")
                    doc = {
                        "game": g['name'],
                        "character": c['name'],
                        "movesList": c['moves']
                    }
                    with open(json_path, 'w', encoding='utf-8') as jf:
                        json.dump(doc, jf, indent=2)
                        
                if missing_count <= 0:
                    break
        
        char_str = ",\n      ".join([f"{{ id: '{c['id']}', name: '{c['name']}' }}" for c in g['characters']])
        if g['characters']:
            char_str = "\n      " + char_str + "\n    "
            
        char_block_match = re.search(r'(characters:\s*\[\s*)([\s\S]*?)(\s*\])', g['block'])
        if char_block_match:
            new_block = g['block'][:char_block_match.start()] + g['c_pre'].strip() + char_str + g['c_post'].strip() + g['block'][char_block_match.end():]
        else:
            new_block = g['block']
            
        merged_blocks.append(new_block)

    full_ts = prefix + ",\n  ".join(merged_blocks) + "\n" + postfix

    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(full_ts)

    print(f"Injected {total_injected} characters correctly from raw Gopher guides via boundary-strict name matching!")

if __name__ == '__main__':
    main()
