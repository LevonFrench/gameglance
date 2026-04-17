import os
import shutil
import re

ts_path = 'src/games.ts'
data_dir = 'public/data'

with open(ts_path, 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Extract all game IDs from src/games.ts using a robust regex that ONLY matches the main game objects
game_ids = set()
for match in re.finditer(r"\s*\{\s*id:\s*['\"]([^'\"]+)['\"]\s*,", ts_content):
    game_ids.add(match.group(1))

# Now remove any directory in public/data that is not in game_ids
for entry in os.listdir(data_dir):
    path = os.path.join(data_dir, entry)
    if os.path.isdir(path):
        if entry not in game_ids:
            print(f"Removing garbage directory: {entry}")
            shutil.rmtree(path)
