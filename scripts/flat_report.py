import os
import json
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

game_blocks = re.finditer(r"(id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*['\"]([^'\"]+)['\"].*?characters:\s*\[(.*?)\])", ts_txt, re.DOTALL)

output_lines = []
output_lines.append("# Underpopulated Characters (Clean)")
output_lines.append("")

total_chars = 0

for g_match in game_blocks:
    gid = g_match.group(2)
    gname = g_match.group(3)
    char_array = g_match.group(4)
    
    underpopulated_names = []
    
    for c_match in re.finditer(r"id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*['\"]([^'\"]+)['\"]", char_array):
        cid = c_match.group(1)
        cname = c_match.group(2).replace(' (Coming Soon)', '')
        
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
        output_lines.append(f"## {gname}")
        for name in underpopulated_names:
            output_lines.append(name)
        output_lines.append("")

output_lines.insert(2, f"Total Underpopulated Characters: {total_chars}")
output_lines.insert(3, "")

with open('underpopulated_clean.md', 'w', encoding='utf-8') as f:
    f.write("\n".join(output_lines))

print("Created underpopulated_clean.md")
