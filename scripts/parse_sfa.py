import json
import os
import re
from datetime import date

JSON_FILE = 'faqs/sfa_movelists.json'
OUT_DATA_DIR = 'public/data'
WIKI_GAMES_DIR = 'wiki/pages/games'
WIKI_CHARS_DIR = 'wiki/pages/characters'
WIKI_OVERVIEW = 'wiki/pages/overview.md'

GAME_MAP = {
    "Street Fighter Alpha 1": "sfa1",
    "Street Fighter Alpha 2": "sfa2",
    "Street Fighter Alpha 3": "sfa3"
}

def slugify(name):
    # Handle specific names
    name = re.sub(r'\s*\(.*?\)', '', name) # Remove anything in parentheses
    name = name.strip().lower()
    name = name.replace(' ', '-')
    name = name.replace('.', '')
    return name

def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)

with open(JSON_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

today_str = date.today().isoformat()

for game_name, chars in data.items():
    game_slug = GAME_MAP.get(game_name, slugify(game_name))
    
    # Ensure game data dir
    game_data_dir = os.path.join(OUT_DATA_DIR, game_slug)
    ensure_dir(game_data_dir)
    ensure_dir(WIKI_GAMES_DIR)
    ensure_dir(WIKI_CHARS_DIR)
    
    # 1. Update Game Wiki Page
    game_wiki_path = os.path.join(WIKI_GAMES_DIR, f"{game_slug}.md")
    
    char_list_names = [c["name"] for c in chars]
    char_list_str = ", ".join(char_list_names)
    
    if not os.path.exists(game_wiki_path):
        with open(game_wiki_path, 'w', encoding='utf-8') as f:
            f.write(f'''---
title: "{game_name}"
type: game
tags: [{game_slug}, classic, capcom]
games: [{game_slug}]
created: {today_str}
updated: {today_str}
sources: 1
---

# {game_name}

A classic Capcom fighting game.

## Roster ({len(chars)} characters)

{char_list_str}

## Move Categories

**Special Moves**, **Super Combos**.

## Data Source

Character data: `public/data/{game_slug}/{{character}}.json` — {len(chars)} characters parsed from `faqs/sfa_movelists.json`.

## See Also

- [[sf2]]
- [[sfa3]]
''')

    # 2. Add characters
    for char in chars:
        char_name = char["name"]
        char_slug = slugify(char_name)
        
        # Write app data JSON
        # Transform moves slightly to fit a generic structure if needed, or just dump it
        # Actually in GameGlance, data is often just standard json.
        char_data_path = os.path.join(game_data_dir, f"{char_slug}.json")
        with open(char_data_path, 'w', encoding='utf-8') as f:
            json.dump(char, f, indent=4)
        
        # Write/Update Char Wiki Page
        char_wiki_path = os.path.join(WIKI_CHARS_DIR, f"{char_slug}.md")
        
        if os.path.exists(char_wiki_path):
            with open(char_wiki_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # If game_slug not in games array, add it.
            # Very basic text manipulation for now.
            if f"games: " in content and game_slug not in content:
                content = content.replace("games: [", f"games: [{game_slug}, ")
            if game_slug not in content:
                content += f"\n## {game_name}\n\nAdded from `faqs/sfa_movelists.json`.\n"
                
            with open(char_wiki_path, 'w', encoding='utf-8') as f:
                f.write(content)
        else:
            with open(char_wiki_path, 'w', encoding='utf-8') as f:
                f.write(f'''---
title: "{char_name}"
type: character
tags: [character]
games: [{game_slug}]
created: {today_str}
updated: {today_str}
---

# {char_name}

{char_name} is a character in {game_name}.

## {game_name}

Moves added from `faqs/sfa_movelists.json`.
(data: {game_slug}/{char_slug}.json)
''')

print("Parsed successfully!")
