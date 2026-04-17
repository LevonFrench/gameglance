import os
import re
import shutil

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

parts = re.split(r'(\n  \{\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)
registry = set()
for i in range(1, len(parts), 2):
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", parts[i])
    if id_match:
        registry.add(id_match.group(1))

to_delete = []
for root, dirs, files in os.walk('public/data'):
    if root == 'public/data':
        for d in dirs:
            if d not in registry:
                to_delete.append(os.path.join(root, d))
        break

print(f"Found {len(to_delete)} untracked game folders.")
for d in to_delete:
    print(f"Deleting {d}...")
    shutil.rmtree(d)
    
print("Cleanup complete.")
