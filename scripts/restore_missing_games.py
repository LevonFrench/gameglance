import re
import os

ts_path = 'src/games.ts'
ts_content = open(ts_path, encoding='utf-8').read()

def slugify(text):
    text = str(text).lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

# Parse all current games in TS
existing_games = re.findall(r'name:\s*[\'"]([^\'"]+)[\'"]', ts_content)
existing_slugs = [slugify(g) for g in existing_games]

# Check parsed_roster.txt
roster_lines = [l.strip() for l in open('parsed_roster.txt', encoding='utf-8').readlines() if ':' in l]

missing = []

for line in roster_lines:
    parts = line.split(':')
    gname = ':'.join(parts[:-1]).strip()
    count = int(parts[-1].strip())
    
    slug = slugify(gname)
    
    # Check if slug exists
    if slug not in existing_slugs and f"id: '{slug}'" not in ts_content:
        missing.append((gname, slug, count))

print(f"Found {len(missing)} missing games from registry:")
for m in missing:
    print(f"- {m[0]}")
    
    # Append it mapping unknown characters
    new_block = f"""  {{
    id: '{m[1]}',
    name: "{m[0]}",
    developer: "Unknown",
    releaseYear: 2000,
rosterCount: {m[2]},
        characters: [
      {', '.join([f"{{ id: 'unknown-{i}', name: 'unknown-{i}' }}" for i in range(1, m[2]+1)])}
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  }}"""     
    
    # Replace safely
    ts_content = re.sub(r'\}\s*\];\s*$', '},\n' + new_block + '\n];', ts_content)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Restored missing games directly to src/games.ts!")
