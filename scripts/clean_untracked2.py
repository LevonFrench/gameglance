import os
import shutil
import re

ts_path = 'src/games.ts'
data_dir = 'public/data'

with open(ts_path, 'r', encoding='utf-8') as f:
    ts_content = f.read()

parts = re.split(r'(\n  \{\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)
game_ids = set()

for i in range(1, len(parts), 2):
    delim = parts[i]
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", delim)
    if id_match:
        game_ids.add(id_match.group(1))

# Now remove any directory in public/data that is not in game_ids
count = 0
for entry in os.listdir(data_dir):
    path = os.path.join(data_dir, entry)
    if os.path.isdir(path):
        if entry not in game_ids:
            print(f"Removing garbage directory: {entry}")
            shutil.rmtree(path)
            count += 1
print(f"Removed {count} garbage directories.")
