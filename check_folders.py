import os
import re

text = open('src/games.ts', encoding='utf-8').read()
games = []
for m in re.finditer(r'(\n\s*\{\s*\n\s*id:\s*[\'"]([a-z0-9-]+)[\'"].*?\n\s*\})', text, re.DOTALL):
    games.append(m.group(2))

dirs = os.listdir('public/data')
orphans = [d for d in dirs if d not in games]
print("Orphan folders:", orphans)

bad_characters = {}
for g in games:
    path = os.path.join('public', 'data', g)
    if not os.path.exists(path): continue
    
    # Get valid cast for this game from games.ts
    block_m = re.search(r'id:\s*[\'"]' + g + r'[\'"].*?tabs:\s*\[', text, re.DOTALL)
    if block_m:
        cast = []
        for c in re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"]', block_m.group(0)):
            cast.append(c.group(1))
            
        files = os.listdir(path)
        invalid = [f for f in files if f.replace('.json', '') not in cast]
        if invalid:
            bad_characters[g] = invalid
            
print("Bad character files inside valid folders:")
for k, v in bad_characters.items():
    print(k, ":", v)
