import os
import json
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# For every game, find the characters array
game_pattern = re.compile(r"(id:\s*['\"]([^'\"]+)['\"]\s*,.*?characters:\s*\[(.*?)\])", re.DOTALL)

updated_content = content
last_end = 0

for g_match in game_pattern.finditer(content):
    full_block = g_match.group(1)
    gid = g_match.group(2)
    char_array = g_match.group(3)
    
    new_char_array = char_array
    
    # Within this array, find character objects
    # It might be { id: 'x', name: 'y', isHidden: z, moveCount: w } or multi-line
    char_pattern = re.compile(r"(\{\s*id:\s*['\"]([^'\"]+)['\"].*?\})", re.DOTALL)
    
    for c_match in char_pattern.finditer(char_array):
        full_char_obj = c_match.group(1)
        cid = c_match.group(2)
        
        # Determine moveCount
        json_path = os.path.join('public', 'data', gid, f"{cid}.json")
        move_count = 0
        if os.path.exists(json_path):
            try:
                with open(json_path, 'r', encoding='utf-8') as jf:
                    data = json.load(jf)
                move_count = len(data.get('movesList', []))
            except:
                pass
                
        # Inject moveCount if not exists, or replace if exists
        # simplest way is to strip the right brace, and whatever moveCount matched
        replaced_obj = full_char_obj
        if 'moveCount:' in replaced_obj:
            replaced_obj = re.sub(r"moveCount:\s*\d+", f"moveCount: {move_count}", replaced_obj)
        else:
            replaced_obj = re.sub(r"(\s*\})$", f", moveCount: {move_count}\\1", replaced_obj)
            
        if full_char_obj in new_char_array:
            new_char_array = new_char_array.replace(full_char_obj, replaced_obj)

    if char_array in updated_content:
        updated_content = updated_content.replace(char_array, new_char_array)

with open('src/games_updated.ts', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Injected move counts into src/games_updated.ts!")
