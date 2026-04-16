import json
import re
import os

def clean_id(name):
    # Same as what typescript would expect for ID: lowercase, hyphens instead of spaces, remove special chars
    cid = name.lower()
    cid = re.sub(r'[^a-z0-9\s-]', '', cid)
    cid = re.sub(r'\s+', '-', cid)
    return cid

def main():
    with open('scratch/truth_roster.json', 'r', encoding='utf-8') as f:
        truth = json.load(f)
        
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    blocks = re.findall(r'(name:\s*[\'"]([^\'"]+)[\'"].*?characters:\s*\[)(.*?)(\])', ts_content, re.DOTALL)
    
    missing_chars = []
    extra_chars = []
    
    total_added = 0
    total_removed = 0
    
    new_ts_content = ts_content
    
    for prefix, game_name, chars_block, suffix in blocks:
        db_game_name = game_name.strip()
        
        # Fuzzy match to truth game
        truth_game = None
        for tg in truth.keys():
            if db_game_name.lower() == tg.lower():
                truth_game = tg
                break
        
        # fallback fuzzy
        if not truth_game:
            for tg in truth.keys():
                if db_game_name.lower() in tg.lower() or tg.lower() in db_game_name.lower():
                    truth_game = tg
                    break
                    
        if not truth_game:
            continue
            
        t_chars = truth[truth_game]
        t_chars_clean = {clean_id(c): c for c in t_chars}
        
        # current chars
        char_matches = re.findall(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"]\s*,\s*name:\s*[\'"]([^\'"]+)[\'"]\s*\}', chars_block)
        c_chars_clean = {c_id: c_name for c_id, c_name in char_matches}
        
        # Compare
        # Extra
        game_extras = []
        for c_id in c_chars_clean.keys():
            if c_id not in t_chars_clean:
                game_extras.append(c_id)
                # Keep track of ones we need to delete from the text
                
        # Missing
        game_missing = []
        for t_id, t_name in t_chars_clean.items():
            if t_id not in c_chars_clean.keys():
                game_missing.append({"id": t_id, "name": t_name})
                
        # Now rebuild the characters block
        new_chars = []
        for t_id, t_name in t_chars_clean.items():
            new_chars.append(f"      {{ id: '{t_id}', name: '{t_name}' }}")
        
        new_chars_block = ",\n".join(new_chars) + "\n    "
        
        # Replace in ts
        old_full_block = prefix + chars_block + suffix
        new_full_block = prefix + "\n" + new_chars_block + suffix
        new_ts_content = new_ts_content.replace(old_full_block, new_full_block)
        
        total_added += len(game_missing)
        total_removed += len(game_extras)
        
        if game_missing: missing_chars.append((db_game_name, len(game_missing)))
        if game_extras: extra_chars.append((db_game_name, len(game_extras)))
        
        # Create empty json payloads for missing characters so the filesystem is 100% compliant
        # First we need the game's ID
        game_id_match = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]\s*,\s*name:\s*[\'"]' + re.escape(game_name), ts_content)
        if game_id_match and game_missing:
            gid = game_id_match.group(1)
            game_folder = f"public/data/{gid}"
            os.makedirs(game_folder, exist_ok=True)
            for m in game_missing:
                p = f"{game_folder}/{m['id']}.json"
                if not os.path.exists(p):
                    with open(p, 'w', encoding='utf-8') as f:
                        json.dump({"character": m['name'], "movesList": []}, f, indent=2)
                        
        # Delete extra json payloads
        if game_id_match and game_extras:
            gid = game_id_match.group(1)
            game_folder = f"public/data/{gid}"
            for c_id in game_extras:
                p = f"{game_folder}/{c_id}.json"
                if os.path.exists(p):
                    os.remove(p)

    with open('src/games.ts', 'w', encoding='utf-8') as f:
        f.write(new_ts_content)

    print(f"Alignment Complete.")
    print(f"Added {total_added} missing characters across {len(missing_chars)} games.")
    print(f"Removed {total_removed} extra characters across {len(extra_chars)} games.")

if __name__ == "__main__":
    main()
