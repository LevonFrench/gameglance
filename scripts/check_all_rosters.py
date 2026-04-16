import re
from collections import Counter

ts_path = 'src/games.ts'
ts_text = open(ts_path, encoding='utf-8').read()

all_blocks = re.finditer(r'(\{\s*id:\s*[\'"]([^\'"]+)[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\})', ts_text)

errors = []
for block_m in all_blocks:
    block = block_m.group(0)
    gid = block_m.group(2)
    name_m = re.search(r'name:\s*(?:\"(.*?)\"|\'(.*?)\')', block)
    gname = name_m.group(1) or name_m.group(2) if name_m else gid
    
    char_m = re.search(r'characters:\s*\[([\s\S]*?)\]', block)
    if char_m:
        chars_text = char_m.group(1)
        # find all IDs
        char_ids = re.findall(r'id:\s*[\'"]([^\'"]+)[\'"]', chars_text)
        
        # Check for duplicates
        counts = Counter(char_ids)
        dupes = [k for k, v in counts.items() if v > 1]
        if dupes:
            errors.append(f"{gname} has Duplicate Characters: {dupes}")
            
        # Check if rosterCount matches actual count
        rc_m = re.search(r'rosterCount:\s*(\d+)', block)
        if rc_m:
            rc = int(rc_m.group(1))
            if rc != len(char_ids):
                errors.append(f"{gname} has rosterCount {rc} but actually has {len(char_ids)} characters!")
                
        # Check for alphabetic outliers? Hard to do algorithmically without external knowledge.
        
if not errors:
    print("No errors found in any game roster.")
else:
    for e in errors:
        print(e)
