import os
import re
import json

def slugify(text):
    text = str(text).lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def get_all_characters(data):
    all_chars = []
    roster_keys = ['characters', 'roster', 'character_roster', 'base_roster', 'dlc_roster', 'fighters', 'unlockable_characters', 'secret_characters', 'roster_additions', 'new_characters', 'moves']
    for key in roster_keys:
        if isinstance(data, dict) and key in data and isinstance(data[key], list):
            all_chars.extend(data[key])
    if isinstance(data, list):
        all_chars.extend(data)
    return all_chars

# 1. Revert the "Coming Soon" entries from src/games.ts
print("Cleaning up (Coming Soon) duplicates from registry...")
with open('src/games.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if "(Coming Soon)" not in line:
        new_lines.append(line)

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)


# 2. Get list of all characters in the registry
with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

parts = re.split(r'(\n  \{\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)
registry = {}
for i in range(1, len(parts), 2):
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", parts[i])
    if id_match:
        game_id = id_match.group(1)
        registry[game_id] = {}
        body = parts[i+1]
        char_start = body.find('characters: [')
        if char_start != -1:
            char_end = body.find(']', char_start)
            char_array = body[char_start:char_end]
            for c_match in re.finditer(r"\{\s*id:\s*['\"]([^'\"]+)['\"][^}]*?name:\s*['\"]([^'\"]+)['\"]", char_array):
                registry[game_id][c_match.group(1)] = c_match.group(2)

# Load all FAQ characters
print("Loading all FAQ data...")
faq_data = []
faq_dir = 'faqs/old'
for f in os.listdir(faq_dir):
    if f.endswith('.json') or f.endswith('.md'):
        # Just grab the json if it's there
        if f.endswith('.md') and not 'moves' in f.lower(): continue # skip plain mds
        try:
            with open(os.path.join(faq_dir, f), 'r', encoding='utf-8') as jf:
                content = jf.read()
                # find json block
                match = re.search(r'(\{[\s\S]*\}|\[[\s\S]*\])', content)
                if match:
                    data = json.loads(match.group(1))
                    chars = get_all_characters(data)
                    for c in chars:
                        if isinstance(c, dict) and ('character' in c or 'name' in c):
                            faq_data.append(c)
        except Exception as e:
            pass

# Now cross reference
print("Cross referencing unpopulated registry characters with FAQ data...")
for game_id, chars in registry.items():
    for char_id, char_name in chars.items():
        path = f"public/data/{game_id}/{char_id}.json"
        
        # Check if it has 0 moves
        has_moves = False
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as pf:
                try:
                    pdata = json.load(pf)
                    if 'movesList' in pdata and len(pdata['movesList']) > 0:
                        has_moves = True
                    if 'moves' in pdata and len(pdata['moves']) > 0:
                        has_moves = True
                except:
                    pass
                    
        if not has_moves:
            # Look for a match in faq_data
            for fc in faq_data:
                fc_name = fc.get('character') or fc.get('name')
                if fc_name:
                    fc_slug = slugify(fc_name)
                    # if the slug matches exactly, or char_id is inside the slug (like "leroy" in "leroy-smith")
                    # but make sure we don't accidentally match "leo" into "leonardo"
                    if fc_slug == char_id or char_id == fc_slug or f"-{char_id}-" in f"-{fc_slug}-" or fc_slug.startswith(char_id + "-"):
                        # Ensure it's not a crazy mismatch (like leo vs leonardo)
                        print(f"Matched {char_id} ({char_name}) to FAQ character {fc_name}!")
                        with open(path, 'w', encoding='utf-8') as pf:
                            json.dump(fc, pf, indent=2)
                        break

print("Done mapping! Regenerating master report...")
os.system("python scripts/master_report.py")
