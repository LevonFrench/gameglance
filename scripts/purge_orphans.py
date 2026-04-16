import os
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Build a master set of authorized paths: { 'game_id/char_id' }
authorized = set()
game_blocks = re.finditer(r"(id:\s*['\"]([^'\"]+)['\"]\s*,.*?characters:\s*\[(.*?)\])", ts_content, re.DOTALL)

for g_match in game_blocks:
    gid = g_match.group(2)
    char_array = g_match.group(3)
    cids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", char_array)
    for cid in cids:
        authorized.add(f"{gid}/{cid}")

# Now traverse public/data
deleted = 0
data_dir = os.path.join('public', 'data')
for root_dir, dirs, files in os.walk(data_dir):
    for fn in files:
        if fn.endswith('.json'):
            game_id = os.path.basename(root_dir)
            char_id = fn.replace('.json', '')
            key = f"{game_id}/{char_id}"
            
            if key not in authorized:
                path = os.path.join(root_dir, fn)
                os.remove(path)
                deleted += 1

print(f"Purged {deleted} orphaned nonsense JSON blocks!")
