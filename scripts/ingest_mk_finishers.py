import json
import os
import glob
import re

def slugify(name):
    return name.lower().replace(' ', '-').replace("'", "").replace(".", "")

def ingest_finishers_for_game(game_id):
    raw_file = f"wiki/raw/finishers/{game_id}.txt"
    if not os.path.exists(raw_file):
        print(f"Skipping {game_id}, no raw file at {raw_file}")
        return

    with open(raw_file, 'r', encoding='utf-8') as f:
        content = f.read()

    blocks = re.split(r'\[(.*?)\]', content)
    
    # blocks[0] is everything before the first [Char], usually empty.
    # blocks[1] is Char 1 name, blocks[2] is Char 1 content, etc.
    
    if len(blocks) < 3:
        print(f"No valid data found in {raw_file}")
        return

    for i in range(1, len(blocks), 2):
        char_name = blocks[i].strip()
        char_content = blocks[i+1].strip()
        
        char_id = slugify(char_name)
        
        # Hardcode some manual mappings if needed
        if char_id == "johnny-cage": char_id = "johnny-cage"
        
        json_path = f"public/data/{game_id}/{char_id}.json"
        
        if not os.path.exists(json_path):
            # Try removing hyphens or other common aliases
            alt_path = f"public/data/{game_id}/{char_id.replace('-', '')}.json"
            if os.path.exists(alt_path):
                json_path = alt_path
            else:
                print(f"  Warning: JSON not found for {char_name} ({char_id}) in {game_id}")
                continue
                
        with open(json_path, 'r', encoding='utf-8') as f:
            char_data = json.load(f)
            
        if 'movesList' not in char_data:
            char_data['movesList'] = []
            
        # Parse lines
        lines = [line.strip() for line in char_content.split('\n') if line.strip()]
        
        added = 0
        for line in lines:
            if ':' not in line:
                continue
            
            parts = line.split(':', 1)
            move_name = parts[0].strip()
            move_input = parts[1].strip()
            
            if not move_name or not move_input:
                continue
                
            # Create move object
            new_move = {
                "name": move_name,
                "input": move_input,
                "type": "finisher"
            }
            
            # Check if exists
            exists = False
            for m in char_data['movesList']:
                if m.get('name') == move_name and m.get('type') == 'finisher':
                    m['input'] = move_input  # update
                    exists = True
                    break
                    
            if not exists:
                char_data['movesList'].append(new_move)
                added += 1
                
        if added > 0:
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(char_data, f, indent=2)
            print(f"  [{game_id}] Added {added} finishers to {char_name}")

if __name__ == '__main__':
    games = ['mortal-kombat-1', 'mortal-kombat-11', 'mortal-kombat-x']
    for g in games:
        ingest_finishers_for_game(g)
