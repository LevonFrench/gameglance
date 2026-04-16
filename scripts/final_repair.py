import re

ts_path = 'src/games.ts'
ts_text = open(ts_path, encoding='utf-8').read()

# 1. KOF title fixes (safe regexes)
kof_names = {
    'the-king-of-fighters-94': "The King of Fighters '94",
    'the-king-of-fighters-95': "The King of Fighters '95",
    'the-king-of-fighters-96': "The King of Fighters '96",
    'the-king-of-fighters-97': "The King of Fighters '97",
    'the-king-of-fighters-98': "The King of Fighters '98",
    'the-king-of-fighters-98-ultimate-match': "The King of Fighters '98 Ultimate Match",
    'the-king-of-fighters-99': "The King of Fighters '99",
    'the-king-of-fighters-maximum-impact-regulation-a': "The King of Fighters: Maximum Impact Regulation 'A'",
    'the-king-of-fighters-2002': "The King of Fighters 2002",
}

for k_id, k_name in kof_names.items():
    # Only replace if name is literally "The King of Fighters" or similar
    pattern = r'(id:\s*[\'"]' + re.escape(k_id) + r'[\'"][\s\S]*?name:\s*[\'"])(?:The King [Oo]f Fighters[^\'"]*)([\'"])'
    def replacer(m):
        return m.group(1) + k_name + m.group(2)
    ts_text = re.sub(pattern, replacer, ts_text)

# 2. Revert bad '1994' releaseYear for KOF games
pattern_kof = r'(\{\s*id:\s*[\'"]the-king-of-fighters[^\'"]*[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\})'
blocks = list(re.finditer(pattern_kof, ts_text))
for m in blocks:
    block = m.group(0)
    if "releaseYear: 1994" in block or "Platform: " in block or "platform: " in block:
        # replace year
        new_block = re.sub(r'releaseYear:\s*\d+', 'releaseYear: 2000', block)
        # remove platform line
        new_block = re.sub(r'\n\s*platform:\s*[\'"][^\'"]+[\'"],?', '', new_block)
        ts_text = ts_text.replace(block, new_block, 1)

# 3. Add the 5 new dates from the user
new_dates = """Fist of the North Star (Hokuto no Ken) - 2005 - Arcade PlayStation 2
Kakuto Chojin: Back Alley Brutal - 2002 - Xbox
Kasumi Ninja - 1994 - Atari Jaguar
Tao Feng: Fist of the Lotus - 2003 - Xbox
Way of the Warrior - 1994 - 3DO"""

def slugify(text):
    text = str(text).lower()
    return re.sub(r'[^a-z0-9]+', '-', text).strip('-')

updates = []
for line in new_dates.split('\n'):
    if not line.strip(): continue
    match = re.search(r'^(.*?)\s*-\s*(\d{4})(?:\s*-\s*(.*))?$', line)
    if match:
        name = match.group(1).strip()
        year = match.group(2).strip()
        plats = match.group(3).strip() if match.group(3) else ""
        updates.append({'slug': slugify(name), 'year': year, 'plats': plats})

# Apply these dates
all_blocks = re.finditer(r'(\{\s*id:\s*[\'"](?:[^\'"]+)[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\})', ts_text)
ts_blocks = [b.group(0) for b in all_blocks]
new_ts_blocks = []

for block in ts_blocks:
    name_m = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', block)
    if not name_m: 
        new_ts_blocks.append(block)
        continue
    gname = name_m.group(1)
    
    matched_u = None
    for u in updates:
        if slugify(gname) == u['slug'] or slugify(gname).startswith(u['slug']):
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

ts_text = prefix_match.group(1) + ",\n  ".join(new_ts_blocks) + "\n" + postfix_match.group(1)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_text)
    
print("Successfully overhauled TS!")
