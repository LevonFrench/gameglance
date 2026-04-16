import re

ts_path = 'src/games.ts'
ts_text = open(ts_path, encoding='utf-8').read()

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
    # Replace the *entire* name line
    pattern = r'(id:\s*[\'"]' + re.escape(k_id) + r'[\'"][\s\S]*?\n\s*name:\s*)([\'"].*?[\'"]),'
    def replacer(m):
        return m.group(1) + f'"{k_name}",'
    ts_text = re.sub(pattern, replacer, ts_text)

# We must also re-run the roster hydration for all games because our previous regex 
# `re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', block)` was flawed.
# Let's fix that regex here and re-hydrate everything!

with open("master_rosters.txt", "r", encoding="utf-8") as f:
    master_text = f.read()

def slugify(text):
    text = str(text).lower()
    return re.sub(r'[^a-z0-9]+', '-', text).strip('-')

roster_map = {}
for match in re.finditer(r'\*\*([^\*]+)\*\*\n(.*)', master_text):
    game_title = match.group(1).strip()
    char_list_str = match.group(2).strip()
    if char_list_str.endswith('.'):
        char_list_str = char_list_str[:-1]
    char_names = [c.strip() for c in char_list_str.split(',')]
    roster_map[slugify(game_title)] = char_names

all_blocks = re.finditer(r'(\{\s*id:\s*[\'"]([^\'"]+)[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\})', ts_text)
ts_blocks = [b.group(0) for b in all_blocks]
new_ts_blocks = []

for block in ts_blocks:
    # Correct string literal regex
    name_m = re.search(r'name:\s*(?:\"(.*?)\"|\'(.*?)\')', block)
    if not name_m: 
        new_ts_blocks.append(block)
        continue
    
    gname = name_m.group(1) if name_m.group(1) is not None else name_m.group(2)
    gslug = slugify(gname)
    
    matched_chars = None
    if gslug in roster_map:
        matched_chars = roster_map[gslug]
    else:
        for key in roster_map:
            # Only fuzzy match if it's very close or exact
            if gslug == key or gslug.startswith(key + '-') or key.startswith(gslug + '-'):
                matched_chars = roster_map[key]
                break
                
    if matched_chars:
        # Rebuild characters completely (whether unknown or not, since KOF got overwritten with '95!)
        char_lines = []
        for cname in matched_chars:
            cslug = slugify(cname)
            s_name = cname.replace("'", "\\'")
            char_lines.append(f"      {{ id: '{cslug}', name: '{s_name}' }}")
        new_chars_block = "characters: [\n" + ",\n".join(char_lines) + "\n    ]"
        block = re.sub(r'characters:\s*\[[\s\S]*?\]', new_chars_block, block)
        block = re.sub(r'rosterCount:\s*\d+', f'rosterCount: {len(matched_chars)}', block)
    new_ts_blocks.append(block)

prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)', ts_text, re.DOTALL)
postfix_match = re.search(r'(\];\s*)$', ts_text)
final_ts = prefix_match.group(1) + ",\n  ".join(new_ts_blocks) + "\n" + postfix_match.group(1)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(final_ts)
    
print("Flawless Victory: KOF & Roster Names Hard-Fixed.")
