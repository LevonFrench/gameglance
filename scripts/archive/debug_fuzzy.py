import json
import re
from difflib import get_close_matches

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

index = []
for chunk in ts_txt.split('characters: [')[1:]:
    prev_chunk = ts_txt.split('characters: [')[ts_txt.split('characters: [').index(chunk)-1]
    id_match = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", prev_chunk)
    name_match = re.findall(r"name:\s*(['\"])(.*?)\1", prev_chunk)
    if not id_match: continue
    gid, gname = id_match[-1], name_match[-1][1]
    
    chars = []
    end = chunk.find(']')
    arr = chunk[:end] if end != -1 else chunk
    for c_match in re.finditer(r"id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*(['\"])(.*?)\2", arr):
        chars.append(c_match.group(3))
    index.append({'gname': gname, 'chars': chars})

bm_index = [g for g in index if 'Battle Monsters' in g['gname']][0]
print('MASTER ROSTER:', bm_index['chars'])

data = json.load(open('faqs/old/Battle Monsters Complete Move List.json'))
cnames = [c.get('name') for c in data['characters']]
print('JSON ROSTER:', cnames)

for cn in cnames:
    matches = get_close_matches(cn, bm_index['chars'], n=1, cutoff=0.3)
    print(f'{cn} -> {matches}')
