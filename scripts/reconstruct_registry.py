import os
import json
import re
import shutil

def slugify(s):
    return re.sub(r'[^a-z0-9]+', '-', str(s).lower()).strip('-')

def load_master_roster():
    # Map normalized character name to list of game slugs
    roster = {}
    with open('master_rosters.txt', 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    current_game_slug = None
    
    for line in lines:
        line = line.strip()
        if not line: continue
        
        match = re.match(r'\*\*(.+?)\*\*', line)
        if match:
            current_game_slug = slugify(match.group(1))
            continue
            
        if current_game_slug:
            # Lines like: "Albiole, Behemoth, Chilli Billy."
            # Or "1996 - Arcade - Amakusa, Basara..."
            chars_str = line
            if ' - ' in line:
                chars_str = line.split(' - ')[-1]
                
            chars = [c.strip('. ') for c in chars_str.split(',')]
            for c in chars:
                if not c: continue
                c_norm = c.lower()
                if c_norm not in roster:
                    roster[c_norm] = []
                roster[c_norm].append(current_game_slug)
                
    return roster

def main():
    roster_map = load_master_roster()
    
    ts_path = 'src/games.ts'
    with open(ts_path, 'r', encoding='utf-8') as f:
        ts_content = f.read()
        
    parts = re.split(r'(\n  \{\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)
    
    game_blocks = {}
    game_order = []
    prefix = parts[0]
    
    for i in range(1, len(parts), 2):
        delim = parts[i]
        body = parts[i+1]
        id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", delim)
        if id_match:
            gid = id_match.group(1)
            game_blocks[gid] = delim + body
            game_order.append(gid)
            
    # Iterate faqs/old
    for f in os.listdir('faqs/old'):
        if not f.endswith('.json'): continue
        
        path = os.path.join('faqs/old', f)
        try:
            data = json.load(open(path, 'r', encoding='utf-8'))
        except:
            continue
            
        # Is this an array of characters?
        char_list = data if isinstance(data, list) else [data]
        
        for cdata in char_list:
            if not isinstance(cdata, dict): continue
            
            cname = cdata.get('name') or cdata.get('character')
            if not cname: continue
            
            c_norm = cname.lower()
            
            # Find game_slug
            target_game = None
            if c_norm in roster_map:
                possible_games = roster_map[c_norm]
                # Pick the first one that exists in game_blocks
                for pg in possible_games:
                    if pg in game_blocks:
                        target_game = pg
                        break
            
            if not target_game:
                # Fallback to file name guess or skip
                print(f"WARNING: Character {cname} from {f} not found in master roster!")
                continue
                
            char_slug = slugify(cname)
            
            # Write JSON payload
            dest_dir = os.path.join('public/data', target_game)
            os.makedirs(dest_dir, exist_ok=True)
            dest_path = os.path.join(dest_dir, f"{char_slug}.json")
            
            # Normalize movesList
            movesList = cdata.get('movesList') or cdata.get('moves') or cdata.get('move_list') or []
            normalized = []
            for m in movesList:
                if isinstance(m, dict):
                    inp = m.get('inputs') or m.get('input', [])
                    if isinstance(inp, str): inp = [inp]
                    normalized.append({
                        "name": m.get("name", "Unknown Move"),
                        "type": m.get("type", "Special Move"),
                        "inputs": inp
                    })
                elif isinstance(m, str):
                    normalized.append({
                        "name": m,
                        "type": "Special Move",
                        "inputs": []
                    })
            
            final_data = {
                "character": cname,
                "name": cname,
                "movesList": normalized
            }
            with open(dest_path, 'w', encoding='utf-8') as outf:
                json.dump(final_data, outf, indent=2)
                
            # Inject into games.ts
            block_text = game_blocks[target_game]
            
            if f"id: '{char_slug}'" not in block_text and f'id: "{char_slug}"' not in block_text:
                mcount = len(normalized)
                char_line = f"      {{ id: '{char_slug}', isHidden: true, name: '{cname} (Coming Soon)', moveCount: {mcount} }}"
                
                char_start = block_text.find('characters: [')
                if char_start != -1:
                    char_end = block_text.find(']', char_start)
                    array_inner = block_text[char_start + 13:char_end]
                    
                    if array_inner.strip():
                        new_inner = array_inner.rstrip() + ",\n" + char_line + "\n    "
                    else:
                        new_inner = "\n" + char_line + "\n    "
                        
                    block_text = block_text[:char_start + 13] + new_inner + block_text[char_end:]
                    game_blocks[target_game] = block_text
                    print(f"Added {cname} into {target_game} in games.ts!")
            else:
                # If it already exists, maybe update moveCount? (omitted for safety, run master_report later)
                print(f"Updated JSON payload for existing character {cname} in {target_game}!")

    final_content = prefix + "".join([game_blocks[gid] for gid in game_order])
    if not final_content.strip().endswith('];'):
        final_content = re.sub(r'\}\s*$', '}\n];\n', final_content.strip())
        
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("Done reconstructing registry from master_rosters.txt!")

if __name__ == '__main__':
    main()
