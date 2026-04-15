import os
import re
import json

games_ts_path = 'src/games.ts'
data_dir = 'public/data'

# Read existing games.ts
with open(games_ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find existing slugs
existing_slugs = re.findall(r"id:\s*'([^']+)'", content)

# Read all slugs from data dir
all_slugs = [d for d in os.listdir(data_dir) if os.path.isdir(os.path.join(data_dir, d))]

missing_slugs = [s for s in all_slugs if s not in existing_slugs]

if not missing_slugs:
    print("No missing games to add.")
    exit(0)

# Helper to get game title from wiki page
def get_title(slug):
    wiki_path = f'wiki/pages/games/{slug}.md'
    if os.path.exists(wiki_path):
        with open(wiki_path, 'r', encoding='utf-8', errors='ignore') as f:
            for line in f:
                if line.startswith('title:'):
                    return line.replace('title:', '').strip().strip('"')
    
    # fallback
    return slug.replace('-', ' ').title()

# Developer helper
def get_dev(slug, title):
    if 'capcom' in title.lower() or 'street fighter' in title.lower() or 'vampire' in title.lower() or 'darkstalkers' in title.lower() or 'marvel' in title.lower() or 'tatsunoko' in title.lower() or slug in ['cota', 'msh', 'xmvsf', 'mshvsf', 'cyberbots', 'cfj']:
        return "Capcom"
    if 'blazblue' in title.lower() or 'dragon ball' in title.lower() or 'dnf' in title.lower() or 'granblue' in title.lower() or 'persona' in title.lower() or 'guilty gear' in title.lower():
        return "Arc System Works"
    if 'virtua fighter' in title.lower() or 'fighting vipers' in title.lower() or 'megamix' in title.lower() or 'last bronx' in title.lower() or 'golden axe' in title.lower():
        return "Sega"
    if 'dead or alive' in title.lower():
        return "Tecmo"
    if 'toshinden' in title.lower():
        return "Tamsoft"
    if 'zero divide' in title.lower():
        return "ZOOM"
    if 'mortal kombat' in title.lower() or 'mk' in title.lower().split():
        return "NetherRealm Studios"
    if 'killer instinct' in title.lower():
        return "Rare"
    if 'bloody roar' in title.lower():
        return "Hudson Soft"
    return "SNK"

new_entries = []
for slug in missing_slugs:
    title = get_title(slug)
    dev = get_dev(slug, title)
    
    # Pre-read characters to populate them
    char_list = []
    char_dir = os.path.join(data_dir, slug)
    if os.path.exists(char_dir):
        for f in os.listdir(char_dir):
            if f.endswith('.json'):
                char_slug = f.replace('.json', '')
                try:
                    with open(os.path.join(char_dir, f), 'r', encoding='utf-8') as jsonf:
                        cdata = json.load(jsonf)
                        cname = cdata.get('character', char_slug.replace('-', ' ').title())
                        # Escape single quotes in name
                        cname = cname.replace("'", "\\'")
                        char_list.append(f"      {{ id: '{char_slug}', name: '{cname}' }}")
                except:
                    pass
    
    chars_str = ",\n".join(char_list)
    entry = f"""
  {{
    id: '{slug}',
    name: "{title}",
    developer: "{dev}",
    characters: [
{chars_str}
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  }}"""
    new_entries.append(entry)

# Insert before the last ];
insert_idx = content.rfind('];')
if insert_idx == -1:
    print("Could not find '];' in games.ts!")
    exit(1)

new_content = content[:insert_idx] + ",\n  " + ",\n  ".join(new_entries) + "\n" + content[insert_idx:]

with open(games_ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Added {len(missing_slugs)} games to games.ts.")
