import os
import re
import subprocess

# 1. First, fix the 4 Tekken 8 characters in src/games.ts
print("Fixing src/games.ts Tekken 8 characters...")
with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

ts_content = ts_content.replace("{ id: 'alisa', name: 'Alisa' }", "{ id: 'alisa-bosconovitch', name: 'Alisa Bosconovitch' }")
ts_content = ts_content.replace("{ id: 'azucena', name: 'Azucena' }", "{ id: 'azucena-ortiz', name: 'Azucena Ortiz' }")
ts_content = ts_content.replace("{ id: 'lars', name: 'Lars' }", "{ id: 'lars-alexandersson', name: 'Lars Alexandersson' }")
ts_content = ts_content.replace("{ id: 'leo', name: 'Leo' }", "{ id: 'leo-kliesen', name: 'Leo Kliesen' }")

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

# 2. Now run the orphan script again, but this time use git rm to properly stage the deletions
print("Finding remaining orphans...")
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
                to_delete.append(os.path.join(root, file).replace('\\', '/'))

print(f"Found {len(to_delete)} orphaned JSON files. Deleting via git rm...")
# Git rm can take multiple files, but powershell command line limits length. We'll do it in chunks.
chunk_size = 100
for i in range(0, len(to_delete), chunk_size):
    chunk = to_delete[i:i+chunk_size]
    subprocess.run(['git', 'rm', '-f', '--ignore-unmatch'] + chunk)

print("Cleanup complete!")
