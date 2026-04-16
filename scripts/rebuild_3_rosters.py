import os
import json
import re

gids = ['breakers-revenge', 'capcom-fighting-jam', 'capcom-vs-snk-2-mark-of-the-millennium-2001', 'capcom-vs-snk-millennium-fight-2000-pro']

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts = f.read()

for gid in gids:
    folder = os.path.join('public', 'data', gid)
    if not os.path.exists(folder): continue
    
    jsons = [f for f in os.listdir(folder) if f.endswith('.json')]
    
    char_strings = []
    
    for j in jsons:
        cid = j.replace('.json', '')
        with open(os.path.join(folder, j), 'r', encoding='utf-8') as json_f:
            data = json.load(json_f)
            cname = data.get('name', cid)
            moves = len(data.get('movesList', []))
            
            if moves >= 2:
                char_strings.append(f"      {{ id: '{cid}', isHidden: false, name: '{cname}', moveCount: {moves} }}")
            else:
                cname = cname.replace(' (Coming Soon)', '')
                char_strings.append(f"      {{ id: '{cid}', isHidden: true, name: '{cname} (Coming Soon)', moveCount: {moves} }}")
                
    # Sort them by name
    char_strings.sort()
    
    gmatch = re.search(r"(id:\s*['\"]" + re.escape(gid) + r"['\"].*?characters:\s*\[\s*)(.*?)(\s*\])", ts, re.DOTALL)
    if gmatch:
        prefix = gmatch.group(1)
        suffix = gmatch.group(3)
        inner = '\n' + ',\n'.join(char_strings) + '\n    '
        ts = ts[:gmatch.start()] + prefix + inner + suffix + ts[gmatch.end():]

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(ts)
