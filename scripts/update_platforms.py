import re

data_text = open('scratch/dates_and_platforms.txt', encoding='utf-8').read().strip()
ts_path = 'src/games.ts'
ts_text = open(ts_path, encoding='utf-8').read()

def slugify(text):
    text = str(text).lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

updates = []

for line in data_text.split('\n'):
    line = line.strip()
    if not line: continue
    
    match = re.search(r'^(.*?)\s*-\s*(\d{4})\s*-\s*(.*)$', line)
    if match:
        name = match.group(1).strip()
        year = match.group(2).strip()
        plats = match.group(3).strip()
        
        plats = re.sub(r'\s+', ' ', plats).replace('"', '\\"')
        
        # Build fuzzy target by finding all names in TS
        updates.append({
            'name': name,
            'slug': slugify(name),
            'year': year,
            'plats': plats
        })

blocks = re.finditer(r'(\{\s*id:\s*[\'"](?:[^\'"]+)[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\})', ts_text)
ts_blocks = [b.group(0) for b in blocks]

new_ts_blocks = []

for block in ts_blocks:
    name_m = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', block)
    if not name_m: 
        new_ts_blocks.append(block)
        continue
    gname = name_m.group(1)
    
    # Check if this TS game is in our updates list using slug OR substring
    matched_u = None
    for u in updates:
        # direct match
        if slugify(gname) == u['slug'] or slugify(gname).startswith(u['slug']) or u['slug'].startswith(slugify(gname)[:10]):
            matched_u = u
            break
            
    if matched_u:
        u = matched_u
        if "releaseYear:" in block:
            block = re.sub(r'releaseYear:\s*(\d+|undefined)', f'releaseYear: {u["year"]}', block)
        else:
            block = re.sub(r'(rosterCount:)', f'releaseYear: {u["year"]},\n    \\1', block)
            
        if "platform:" in block:
            block = re.sub(r'platform:\s*[\'"].*?[\'"]', f'platform: "{u["plats"]}"', block)
        else:
            block = re.sub(r'(releaseYear:\s*\d+,?)', f'\\1\n    platform: "{u["plats"]}",', block)
            
    new_ts_blocks.append(block)

prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)', ts_text, re.DOTALL)
postfix_match = re.search(r'(\];\s*)$', ts_text)

final_ts = prefix_match.group(1) + ",\n  ".join(new_ts_blocks) + "\n" + postfix_match.group(1)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(final_ts)
    
print("Updated fuzzy games blocks.")
