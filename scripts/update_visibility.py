import os
import json
import re

# 1. First, compute which characters are underpopulated
underpopulated_cids = set()
underpopulated_by_game = {}

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

# We need to parse exactly blocks. Let's do it carefully.
game_blocks = re.finditer(r"(id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*['\"]([^'\"]+)['\"].*?characters:\s*\[(.*?)\])", ts_txt, re.DOTALL)

updated_ts = ts_txt

for g_match in game_blocks:
    full_block = g_match.group(1)
    gid = g_match.group(2)
    gname = g_match.group(3)
    char_array = g_match.group(4)
    
    underpopulated_by_game[gid] = []
    
    new_char_array = char_array
    
    # Process each char individually in this chunk
    for c_match in re.finditer(r"id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*['\"]([^'\"]+)['\"]", char_array):
        cid = c_match.group(1)
        cname = c_match.group(2)
        
        # Don't double add
        cname_clean = cname.replace(' (Coming Soon)', '')
        
        json_path = os.path.join('public', 'data', gid, f"{cid}.json")
        is_underpopulated = False
        
        if not os.path.exists(json_path):
            is_underpopulated = True
        else:
            try:
                with open(json_path, 'r', encoding='utf-8') as jf:
                    data = json.load(jf)
                moves = data.get('movesList', [])
                if len(moves) < 2:
                    is_underpopulated = True
            except:
                is_underpopulated = True

        if is_underpopulated:
            underpopulated_by_game[gid].append(cid)
            underpopulated_cids.add(f"{gid}/{cid}")
            # Replace exactly the name in this char_array
            if ' (Coming Soon)' not in cname: # add it
                # Make sure to replace exactly this match
                old_str = f"id: '{cid}', name: '{cname}'"
                new_str = f"id: '{cid}', name: '{cname_clean} (Coming Soon)'"
                
                # fallback for double quotes
                old_str_double = f'id: "{cid}", name: "{cname}"'
                new_str_double = f'id: "{cid}", name: "{cname_clean} (Coming Soon)"'
                
                if old_str in new_char_array:
                    new_char_array = new_char_array.replace(old_str, new_str)
                elif old_str_double in new_char_array:
                    new_char_array = new_char_array.replace(old_str_double, new_str_double)
        else:
            # It IS populated! If it has Coming Soon, remove it
            if ' (Coming Soon)' in cname:
                old_str = f"id: '{cid}', name: '{cname}'"
                new_str = f"id: '{cid}', name: '{cname_clean}'"
                
                old_str_double = f'id: "{cid}", name: "{cname}"'
                new_str_double = f'id: "{cid}", name: "{cname_clean}"'
                
                if old_str in new_char_array:
                    new_char_array = new_char_array.replace(old_str, new_str)
                elif old_str_double in new_char_array:
                    new_char_array = new_char_array.replace(old_str_double, new_str_double)
    
    # We replaced characters inside new_char_array. Now we must replace the whole char array block inside updated_ts
    updated_ts = updated_ts.replace(char_array, new_char_array)

# Hide games where EVERY character is underpopulated
# We will just split by `{ id: ` and update properties.
# wait, better to use RegExp!

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(updated_ts)

# Now we need to update the game blocks visibility!
# Run a quick nodejs script or do it in python!
