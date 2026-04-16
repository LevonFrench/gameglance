import re

def slugify(text):
    text = str(text).lower()
    return re.sub(r'[^a-z0-9]+', '-', text).strip('-')

with open("master_rosters.txt", "r", encoding="utf-8") as f:
    master_text = f.read()

# Build a dictionary of game names to arrays of character names
roster_map = {}
for match in re.finditer(r'\*\*([^\*]+)\*\*\n(.*)', master_text):
    game_title = match.group(1).strip()
    char_list_str = match.group(2).strip()
    # remove trailing period
    if char_list_str.endswith('.'):
        char_list_str = char_list_str[:-1]
    
    char_names = [c.strip() for c in char_list_str.split(',')]
    roster_map[slugify(game_title)] = char_names

# Modify src/games.ts
ts_path = 'src/games.ts'
with open(ts_path, 'r', encoding='utf-8') as f:
    ts_text = f.read()

all_blocks = re.finditer(r'(\{\s*id:\s*[\'"]([^\'"]+)[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\})', ts_text)
ts_blocks = [b.group(0) for b in all_blocks]
new_ts_blocks = []
rosters_updated = 0

for block in ts_blocks:
    name_m = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', block)
    if not name_m: 
        new_ts_blocks.append(block)
        continue
    
    gname = name_m.group(1)
    gslug = slugify(gname)
    
    # Check if there are unknown characters
    if "unknown-" not in str(block).lower():
        new_ts_blocks.append(block)
        continue
        
    # See if we have this game in our master roster!
    matched_chars = None
    if gslug in roster_map:
        matched_chars = roster_map[gslug]
    else:
        # Fuzzy match
        for key in roster_map:
            if gslug.startswith(key) or key.startswith(gslug):
                matched_chars = roster_map[key]
                break
                
    if matched_chars:
        # Rebuild characters array completely
        char_lines = []
        for cname in matched_chars:
            cslug = slugify(cname)
            s_name = cname.replace("'", "\\'")
            char_lines.append(f"      {{ id: '{cslug}', name: '{s_name}' }}")
            
        new_chars_block = "characters: [\n" + ",\n".join(char_lines) + "\n    ]"
        
        # Replace existing characters array
        block = re.sub(r'characters:\s*\[[\s\S]*?\]', new_chars_block, block)
        # Fix rosterCount
        block = re.sub(r'rosterCount:\s*\d+', f'rosterCount: {len(matched_chars)}', block)
        rosters_updated += 1
        print(f"Updated {gname} with {len(matched_chars)} characters.")
        
    new_ts_blocks.append(block)

prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)', ts_text, re.DOTALL)
postfix_match = re.search(r'(\];\s*)$', ts_text)

final_ts = prefix_match.group(1) + ",\n  ".join(new_ts_blocks) + "\n" + postfix_match.group(1)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(final_ts)
    
print(f"\nDone! Overhauled {rosters_updated} game rosters.")
