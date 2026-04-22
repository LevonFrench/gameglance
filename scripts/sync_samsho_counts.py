import json, os, re

data_dir = 'public/data/samurai-shodown-(2019)'
counts = {}
for f in os.listdir(data_dir):
    if f.endswith('.json') and f != '_roster.json':
        with open(os.path.join(data_dir, f)) as fh:
            d = json.load(fh)
            char_id = f.replace('.json','')
            counts[char_id] = len(d.get('movesList', []))

with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

for cid, cnt in counts.items():
    pattern = r"\{\s*id:\s*'" + re.escape(cid) + r"',\s*name:\s*'[^']*',\s*moveCount:\s*\d+\s*\}"
    old = re.search(pattern, content)
    if old:
        new_text = re.sub(r'moveCount:\s*\d+', f'moveCount: {cnt}', old.group(0))
        content = content.replace(old.group(0), new_text)
        print(f"  {cid}: {cnt}")

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done')
