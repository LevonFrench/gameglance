import json
import re
import os

with open('public/data/guilty-gear-strive/_roster.json', 'r', encoding='utf-8') as f:
    roster = json.load(f)

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts = f.read()

char_str = "[\n"
for c in roster:
    char_str += f"      {{ id: '{c['id']}', name: '{c['name'].replace(chr(39), chr(92)+chr(39))}', moveCount: 0 }},\n"
char_str += "    ]"

# Find GGST block
pattern = r"(id:\s*'guilty-gear-strive'[\s\S]*?characters:\s*)\[\]"
if re.search(pattern, ts):
    ts = re.sub(pattern, r"\1" + char_str, ts)
    with open('src/games.ts', 'w', encoding='utf-8') as f:
        f.write(ts)
    print("Populated GGST characters!")
else:
    print("Could not find GGST block in games.ts")
