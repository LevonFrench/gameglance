import re

ts = open('src/games.ts', encoding='utf-8').read()

def clean_block(match):
    prefix = match.group(0)[:match.start(1)-match.start(0)]
    chars_content = match.group(1)
    
    # filter out unknown
    cleaned = []
    for c in re.finditer(r'\{\s*id:\s*[\'"][^\'"]+[\'"][^\}]+\}', chars_content):
        if 'unknown-' not in c.group(0):
            cleaned.append(c.group(0))
            
    return prefix + '\n      ' + ',\n      '.join(cleaned) + '\n    '

new_ts = re.sub(r'rosterCount: 999,[\s\S]*?characters:\s*\[([\s\S]*?)\]', clean_block, ts)

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(new_ts)
