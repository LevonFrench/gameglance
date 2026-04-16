import re

ts=open('src/games.ts', encoding='utf-8').read()
games = re.finditer(r'id:\s*[\'"]([^\'"]+)[\'"][\s\S]*?(?=id:\s*[\'"]|$)', ts)
missing = 0
for m in games:
    match = m.group(0)
    gid = m.group(1)
    rc = re.search(r'rosterCount:\s*(\d+)', match)
    if not rc:
        continue
    rcount = int(rc.group(1))
    
    chars = re.findall(r'id:\s*[\'"]([^\'"]+)[\'"]\s*,\s*name:\s*[\'"]', match)
    # The first id matched might be the game id itself in my lazy regex, let's just count occurrences of `id: ` inside `characters: [`
    char_block = re.search(r'characters:\s*\[([\s\S]*?)\]', match)
    if char_block:
        real_chars = re.findall(r'id:\s*[\'"]([^\'"]+)[\'"]', char_block.group(1))
        current_len = len(real_chars)
    else:
        current_len = 0
        
    name_match = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', match)
    if name_match:
        gname = name_match.group(1)
        if current_len < rcount:
            diff = rcount - current_len
            missing += diff
            print(f"{gname} ({gid}) needs {diff} characters (has {current_len}, expects {rcount})")

print(f"\nTotal missing characters: {missing}")
