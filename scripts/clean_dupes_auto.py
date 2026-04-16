import os
import re
import shutil

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

js_ids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", ts_txt)
js_id_set = set(js_ids)

data_dir = 'public/data'
duplicates = []

for root, dirs, files in os.walk(data_dir):
    game = os.path.basename(root)
    if game == 'data': continue
    
    char_files = [f for f in files if f.endswith('.json')]
    chars_no_hyphen = {}
    
    for cfile in char_files:
        cname = cfile[:-5]
        clean_cname = cname.replace('-', '').lower()
        
        if clean_cname in chars_no_hyphen:
            existing = chars_no_hyphen[clean_cname]
            duplicates.append({'game': game, 'files': [existing, cname]})
        else:
            chars_no_hyphen[clean_cname] = cname

print(f'Found {len(duplicates)} sets of duplicates.')

for d in duplicates:
    f1 = f"public/data/{d['game']}/{d['files'][0]}.json"
    f2 = f"public/data/{d['game']}/{d['files'][1]}.json"
    
    id1, id2 = d['files'][0], d['files'][1]
    
    s1 = os.path.exists(f1) and os.path.getsize(f1) or 0
    s2 = os.path.exists(f2) and os.path.getsize(f2) or 0
    
    larger = f1 if s1 > s2 else f2
    
    correct_id = id1 if id1 in js_id_set else (id2 if id2 in js_id_set else id1)
    wrong_id = id2 if correct_id == id1 else id1
    
    dest = f"public/data/{d['game']}/{correct_id}.json"
    wrong_dest = f"public/data/{d['game']}/{wrong_id}.json"
    
    if larger != dest and os.path.exists(larger):
        shutil.copy2(larger, dest)
        
    if os.path.exists(wrong_dest) and dest != wrong_dest:
        os.remove(wrong_dest)
        print(f"Removed redundant duplicate: {wrong_dest}")

with open('.gitignore', 'a') as f:
    f.write('\n# Ignore raw ingested documents\nfaqs/\n')

