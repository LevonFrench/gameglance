import os
import json
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

game_chunks = ts_txt.split('characters: [')

results = {}
total_chars = 0

for i in range(1, len(game_chunks)):
    prev_chunk = game_chunks[i-1]
    curr_chunk = game_chunks[i]
    
    id_match = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", prev_chunk)
    name_match = re.findall(r"name:\s*(['\"])(.*?)\1", prev_chunk)
    
    if not id_match or not name_match: continue
    
    gid = id_match[-1]
    gname = name_match[-1][1]
    
    char_array_end = curr_chunk.find(']')
    char_array = curr_chunk[:char_array_end] if char_array_end != -1 else curr_chunk
    
    underpopulated_names = []
    
    for c_match in re.finditer(r"id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*(['\"])(.*?)\2", char_array):
        cid = c_match.group(1)
        cname = c_match.group(3).replace(' (Coming Soon)', '')
        
        json_path = os.path.join('public', 'data', gid, f"{cid}.json")
        is_under = False
        
        if not os.path.exists(json_path):
            is_under = True
        else:
            try:
                with open(json_path, 'r', encoding='utf-8') as jf:
                    data = json.load(jf)
                moves = data.get('movesList', [])
                if len(moves) < 2:
                    is_under = True
            except:
                is_under = True

        if is_under:
            underpopulated_names.append(cname)
            total_chars += 1
            
    if underpopulated_names:
        results[gname] = sorted(underpopulated_names)

output_lines = [
    "# Underpopulated Characters (Clean)",
    "",
    f"Total Underpopulated Characters: {total_chars}",
    ""
]

# Sort alphabetically by game name
for gname in sorted(results.keys()):
    output_lines.append(f"## {gname}")
    for name in results[gname]:
        output_lines.append(name)
    output_lines.append("")

with open('underpopulated_clean.md', 'w', encoding='utf-8') as f:
    f.write("\n".join(output_lines))

print("Created underpopulated_clean.md (Sorted Alphabetically)")
