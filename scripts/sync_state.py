import os
import re
import json

with open('src/games.ts', 'r', encoding='utf-8') as f:
    games_content = f.read()

game_pattern = re.compile(r"(id:\s*['\"]([^'\"]+)['\"]\s*,.*?characters:\s*\[(.*?)\])", re.DOTALL)
updated_content = games_content

for g_match in game_pattern.finditer(games_content):
    full_block = g_match.group(1)
    gid = g_match.group(2)
    char_array = g_match.group(3)
    new_char_array = char_array
    
    char_pattern = re.compile(r"(\{\s*id:\s*['\"]([^'\"]+)['\"][^}]*?\})", re.DOTALL)
    for c_match in char_pattern.finditer(char_array):
        full_char_obj = c_match.group(1)
        cid = c_match.group(2)
        
        json_path = os.path.join('public', 'data', gid, f"{cid}.json")
        move_count = 0
        if os.path.exists(json_path):
            try:
                with open(json_path, 'r', encoding='utf-8') as jf:
                    data = json.load(jf)
                move_count = len(data.get('movesList', []))
            except:
                pass
                
        is_populated = move_count >= 2
        
        # We rewrite the ENTIRE object to be clean so we don't deal with messy regex injection
        # Extract the base name
        base_name_match = re.search(r"name:\s*['\"]([^'\"]+)['\"]", full_char_obj)
        base_name = base_name_match.group(1).replace(' (Coming Soon)', '') if base_name_match else cid
        
        if is_populated:
            new_obj = f"{{ id: '{cid}', isHidden: false, name: '{base_name}', moveCount: {move_count} }}"
        else:
            new_obj = f"{{ id: '{cid}', isHidden: true, name: '{base_name} (Coming Soon)', moveCount: {move_count} }}"
            
        new_char_array = new_char_array.replace(full_char_obj, new_obj)
        
    updated_content = updated_content.replace(char_array, new_char_array)

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Synchronized all character metadata states natively across games.ts based on JSON schemas!")
