import os
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

parts = re.split(r'(\n  \{\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)
registry = {}
for i in range(1, len(parts), 2):
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", parts[i])
    if id_match:
        game_id = id_match.group(1)
        registry[game_id] = set()
        
        body = parts[i+1]
        char_start = body.find('characters: [')
        if char_start != -1:
            char_end = body.find(']', char_start)
            char_array = body[char_start:char_end]
            
            for c_match in re.finditer(r"\{\s*id:\s*['\"]([^'\"]+)['\"]", char_array):
                registry[game_id].add(c_match.group(1))

to_delete = []
for root, dirs, files in os.walk('public/data'):
    if root == 'public/data': continue
    game_id = os.path.basename(root)
    for file in files:
        if file.endswith('.json'):
            char_id = file[:-5]
            if game_id not in registry or char_id not in registry[game_id]:
                to_delete.append(os.path.join(root, file))

print(f"Found {len(to_delete)} orphaned JSON files.")
for f in to_delete:
    print(f"Deleting {f}...")
    os.remove(f)
print("Cleanup complete.")
