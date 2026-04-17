import os
import json
import re

game_dir = 'public/data/marvel-toukon-fighting-souls-beta-version'
os.makedirs(game_dir, exist_ok=True)

ms_marvel_payload = {
  "character": "Ms. Marvel",
  "movesList": [
    {
      "name": "Elasti-Grab",
      "input": "U (+ D-pad/stick to change trajectory) [Mid-Air OK]",
      "type": "Unique"
    },
    {
      "name": "Flex On 'Em",
      "input": "2U",
      "type": "Unique"
    },
    {
      "name": "Zoom Knuckle",
      "input": "236 + L/M/H (QS)",
      "type": "Skills"
    },
    {
      "name": "Rubber Band",
      "input": "214 + L/M/H (4QS)",
      "type": "Skills"
    },
    {
      "name": "Karate Chop!",
      "input": "623 + L/M/H (2QS)",
      "type": "Skills"
    },
    {
      "name": "Jersey Lariat",
      "input": "22 + L/M/H (22QS) (+ M to change trajectory) [Mid-Air OK]",
      "type": "Skills"
    },
    {
      "name": "Growing Pains",
      "input": "236 + M + H (QS + M + H) [Cost: 50]",
      "type": "Super Skill"
    },
    {
      "name": "Embiggen!",
      "input": "214 + M + H (4QS + M + H) [Cost: 100]",
      "type": "Ultimate Skill"
    }
  ]
}

with open(f'{game_dir}/ms-marvel.json', 'w', encoding='utf-8') as f:
    json.dump(ms_marvel_payload, f, indent=2)

print("Created ms-marvel.json")

# Now add to src/games.ts
with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

game_regex = r"(id:\s*['\"]marvel-toukon-fighting-souls-beta-version['\"].*?characters:\s*\[\s*)(.*?)(\s*\])"
gmatch = re.search(game_regex, ts_content, re.DOTALL)
if gmatch:
    chars = gmatch.group(2)
    if 'ms-marvel' not in chars:
        # Append alphabetically. She goes between Iron Man and Spider-Man.
        new_char = "      { id: 'ms-marvel', name: 'Ms. Marvel' },\n"
        # We can just append to the end and let standard sort fix it later if we want,
        # but let's insert it correctly.
        # Simplest is append and let the user sort if needed, or I can insert before spider-man
        chars = chars.replace("{ id: 'spider-man'", new_char + "      { id: 'spider-man'")
        
        ts_content = ts_content[:gmatch.start()] + gmatch.group(1) + chars + gmatch.group(3) + ts_content[gmatch.end():]
        with open('src/games.ts', 'w', encoding='utf-8') as f:
            f.write(ts_content)
        print("Added Ms. Marvel to registry")
else:
    print("Could not find game block in games.ts")
