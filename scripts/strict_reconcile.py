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

    # Split ts_content by "  {\n    id:" or similar
    # Safer: split by "  },\n  {" or "  }\n]"
    
    parts = re.split(r'(\n\s*\{\s*\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)
    
    # parts[0] is the prefix "import type { ... export const SUPPORTED_GAMES = ["
    new_ts_content = parts[0]
    
    for i in range(1, len(parts), 2):
        game_prefix = parts[i]
        game_body = parts[i+1]
        
        # Extract game name
        name_match = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', game_body)
        if not name_match:
            new_ts_content += game_prefix + game_body
            continue
            
        db_game_name = name_match.group(1).strip()
        
        truth_game = None
        for tg in truth.keys():
            if db_game_name.lower() == tg.lower():
                truth_game = tg
                break
                
        if not truth_game:
            for tg in truth.keys():
                if db_game_name.lower() in tg.lower() or tg.lower() in db_game_name.lower():
                    truth_game = tg
                    break
        
        if not truth_game:
            new_ts_content += game_prefix + game_body
            continue
            
        t_chars = truth[truth_game]
        t_chars_clean = {clean_id(c): c for c in t_chars}
        
        # Find the character block boundaries exclusively within this game_body
        char_block_match = re.search(r'(characters:\s*\[\s*)(.*?)(\s*\])', game_body, re.DOTALL)
        if not char_block_match:
            new_ts_content += game_prefix + game_body
            continue
            
        prefix_chars = char_block_match.group(1)
        chars_str = char_block_match.group(2)
        suffix_chars = char_block_match.group(3)
        
        # Build completely new chars str
        new_chars = []
        for t_id, t_name in t_chars_clean.items():
            new_chars.append(f"      {{ id: '{t_id}', name: '{t_name}' }}")
        
        new_chars_block = prefix_chars + "\n" + ",\n".join(new_chars) + "\n    " + suffix_chars
        
        # Replace only that part in game_body
        new_game_body = game_body[:char_block_match.start()] + new_chars_block + game_body[char_block_match.end():]
        
        # We should also handle filesystem for missing characters and extra characters inside game_body
        # But this time cautiously
        id_match = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', game_prefix)
        if id_match:
            gid = id_match.group(1)
            game_folder = f"public/data/{gid}"
            
            # Extract old chars to see what to delete
            old_char_matches = re.findall(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"]\s*,\s*name:\s*[\'"]([^\'"]+)[\'"]\s*\}', chars_str)
            c_chars_clean = {c_id: c_name for c_id, c_name in old_char_matches}
            
            os.makedirs(game_folder, exist_ok=True)
            
            for t_id, t_name in t_chars_clean.items():
                if t_id not in c_chars_clean:
                    p = f"{game_folder}/{t_id}.json"
                    if not os.path.exists(p):
                        with open(p, 'w', encoding='utf-8') as f:
                            json.dump({"character": t_name, "movesList": []}, f, indent=2)
                            
            for c_id in c_chars_clean.keys():
                if c_id not in t_chars_clean:
                    p = f"{game_folder}/{c_id}.json"
                    if os.path.exists(p):
                        os.remove(p)
        
        new_ts_content += game_prefix + new_game_body

    with open('src/games.ts', 'w', encoding='utf-8') as f:
        f.write(new_ts_content)

    print("Strict alignment complete.")

if __name__ == "__main__":
    main()
