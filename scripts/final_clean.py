import json
import re
import os

def clean_id(name):
    cid = name.lower()
    cid = re.sub(r'[^a-z0-9\s-]', '', cid)
    cid = re.sub(r'\s+', '-', cid)
    return cid

def main():
    with open('scratch/truth_roster.json', 'r', encoding='utf-8') as f:
        truth = json.load(f)
        
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    blocks = re.findall(r'(\n\s*\{\s*\n\s*id:\s*[\'"][^\'"]+[\'"].*?tabs:\s*\[.*?\]\s*\n\s*\})', ts_content, re.DOTALL)
    
    seen_game_ids = set()
    cleaned_blocks = []
    
    for game_block in blocks:
        id_match = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', game_block)
        name_match = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', game_block)
        
        if not id_match or not name_match: continue
        
        gid = id_match.group(1).strip()
        gname = name_match.group(1).strip()
        
        if gid in seen_game_ids:
            continue
        seen_game_ids.add(gid)
        
        truth_game = None
        for tg in truth.keys():
            if gname.lower() == tg.lower():
                truth_game = tg
                break
        
        if not truth_game:
            for tg in truth.keys():
                if gname.lower() in tg.lower() or tg.lower() in gname.lower():
                    truth_game = tg
                    break
        
        cb_match = re.search(r'(characters:\s*\[\s*)(.*?)(\s*\])', game_block, re.DOTALL)
        if cb_match:
            game_folder = f"public/data/{gid}"
            os.makedirs(game_folder, exist_ok=True)
                
            old_chars = re.findall(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"]\s*,\s*name:\s*[\'"]([^\'"]+)[\'"]\s*\}', cb_match.group(2))
            c_chars_clean = {c[0]: c[1] for c in old_chars}
            
            if truth_game:
                # Constrain characters strictly to the truth doc equivalent
                t_chars = truth[truth_game]
                t_chars_clean = {clean_id(c): c for c in t_chars}
            else:
                # Free-range game not in DOCX (like SF3 Third Strike)
                # Just deduplicate characters internally
                t_chars_clean = c_chars_clean
                
            for t_id, t_name in t_chars_clean.items():
                p = f"{game_folder}/{t_id}.json"
                if not os.path.exists(p):
                    with open(p, 'w', encoding='utf-8') as f:
                        json.dump({"character": t_name, "movesList": []}, f, indent=2)
            
            for c_id in c_chars_clean.keys():
                if c_id not in t_chars_clean:
                    p = f"{game_folder}/{c_id}.json"
                    if os.path.exists(p):
                        os.remove(p)
            
            new_chars = []
            for t_id, t_name in t_chars_clean.items():
                esc_name = t_name.replace("'", "\\'")
                new_chars.append(f"      {{ id: '{t_id}', name: '{esc_name}' }}")
            
            new_cb = cb_match.group(1) + "\n" + ",\n".join(new_chars) + "\n    " + cb_match.group(3)
            game_block = game_block[:cb_match.start()] + new_cb + game_block[cb_match.end():]
        
        cleaned_blocks.append((gname, game_block))

    # Clean the arrays of duplicate spaces etc.
    cleaned_blocks.sort(key=lambda x: x[0].lower())
    
    header = "import type { GameDefinition } from './types';\n\nexport const SUPPORTED_GAMES: GameDefinition[] = ["
    footer = "\n];"
    
    final_output = header + ",".join([c[1] for c in cleaned_blocks]) + footer
    
    with open('src/games.ts', 'w', encoding='utf-8') as f:
        f.write(final_output)

    print(f"Done aligning. Games: {len(cleaned_blocks)}")

if __name__ == "__main__":
    main()
