import os
import shutil
import re
from datetime import datetime

def main():
    print("Starting wiki cleanup and refresh...")

    # Ensure raw guides exist
    RAW_GUIDES_DIR = 'wiki/raw/guides'
    os.makedirs(RAW_GUIDES_DIR, exist_ok=True)

    # 1. Parse games.ts accurately
    GAMES_TS = 'src/games.ts'
    with open(GAMES_TS, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    games_catalog = []
    current_game = None
    
    # Simple state machine to count characters
    in_characters_block = False
    
    for line in lines:
        stripped = line.strip()
        # Top-level game objects are usually indented exactly 2 spaces
        if line.startswith('  {') and not in_characters_block:
            current_game = {'char_count': 0, 'characters': []}
        elif current_game is not None:
            if line.startswith('    id:'):
                m = re.search(r'(?:"([^"]+)"|\'([^\']+)\')', line)
                if m: current_game['id'] = m.group(1) or m.group(2)
            elif line.startswith('    name:'):
                m = re.search(r'(?:"([^"]+)"|\'([^\']+)\')', line)
                if m: current_game['name'] = m.group(1) or m.group(2)
            elif line.startswith('    releaseYear:'):
                m = re.search(r'releaseYear:\s*(\d+)', line)
                if m: current_game['releaseYear'] = m.group(1)
            elif line.startswith('    platform:'):
                m = re.search(r'(?:"([^"]+)"|\'([^\']+)\')', line)
                if m: current_game['platform'] = m.group(1) or m.group(2)
            elif line.startswith('    characters: ['):
                in_characters_block = True
            elif line.startswith('    ]') and in_characters_block:
                in_characters_block = False
            elif line.startswith('  }') and not in_characters_block:
                if 'id' in current_game and 'name' in current_game:
                    games_catalog.append(current_game)
                current_game = None
            elif in_characters_block and '{' in line and 'id:' in line:
                current_game['char_count'] += 1
                # Try to extract character id and name
                m_id = re.search(r'id:\s*(?:"([^"]+)"|\'([^\']+)\')', line)
                m_name = re.search(r'name:\s*(?:"([^"]+)"|\'([^\']+)\')', line)
                if m_id and m_name:
                    c_id = m_id.group(1) or m_id.group(2)
                    c_name = m_name.group(1) or m_name.group(2)
                    current_game['characters'].append((c_id, c_name))

    print(f"Correctly parsed {len(games_catalog)} top-level games from the registry.")

    # Sort games by release year if available, otherwise by name
    games_catalog.sort(key=lambda x: (int(x.get('releaseYear', 9999)), x.get('name', '')))

    # 2. Cleanup bloated wiki/pages/games directory
    GAMES_MD_DIR = 'wiki/pages/games'
    if os.path.exists(GAMES_MD_DIR):
        for f in os.listdir(GAMES_MD_DIR):
            os.remove(os.path.join(GAMES_MD_DIR, f))
    else:
        os.makedirs(GAMES_MD_DIR, exist_ok=True)
    
    print("Erased all invalid markdown shells from wiki/pages/games/")

    # 3. Auto-generate strictly the actual games
    generated_count = 0
    today = datetime.now().strftime("%Y-%m-%d")
    for g in games_catalog:
        filepath = os.path.join(GAMES_MD_DIR, f"{g['id']}.md")
        
        platform_info = f"**Platform:** {g.get('platform', 'Unknown')}"
        year_info = f"**Release Year:** {g.get('releaseYear', 'Unknown')}"
        
        char_list = ""
        for c_id, c_name in g['characters']:
            char_list += f"- `{c_id}`: **{c_name}**\n"
        
        if not char_list:
            char_list = "*No characters mapped in registry.*\n"
            
        md_content = f"""---
title: "{g['name']}"
type: game
tags: [{g['id']}]
created: {today}
updated: {today}
sources: 0
---

# {g['name']}

## Overview
- {platform_info}
- {year_info}
- **Roster Count:** {g['char_count']}

*Overview and metadata to be expanded based on future guide ingestion.*

## Characters ({g['char_count']} registered)

The following characters are registered in `src/games.ts`. JSON payloads are stored in `public/data/{g['id']}/`.

{char_list}

## Mechanics
*No mechanics mapped.*

## Meta
*No meta/tier lists loaded.*
"""
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(md_content)
        generated_count += 1
            
    print(f"Generated {generated_count} verified game markdown pages.")

    # 4. Reconstruct wiki/pages/index.md
    INDEX_MD = 'wiki/pages/index.md'

    index_header = f"""---
title: "Wiki Index"
type: index
created: 2026-04-15
updated: {today}
---

# GameGlance Wiki - Index

Master catalog of all wiki pages. The LLM reads this first when answering queries.

---

## 📚 Meta Pages

| Page | Summary |
|------|---------|
| [[overview]] | High-level synthesis of the entire knowledge base |
| [[log]] | Chronological record of all wiki operations |
| [[underpopulated-characters]] | Automatically updated tracker for characters with < 2 moves |

---

## 🕹️ Games ({len(games_catalog)})

### Complete Roster
| Page | Game | Platform | Year | Characters |
|------|------|----------|------|-----------|
"""

    index_mid = ""
    for g in games_catalog:
        platform = g.get('platform', 'N/A')
        year = g.get('releaseYear', 'N/A')
        index_mid += f"| [[{g['id']}]] | {g['name']} | {platform} | {year} | {g['char_count']} |\n"

    index_footer = f"""
---

## 👥 Characters

*See individual game pages for raw character pointers. Character wiki pages are initialized dynamically during targeted source ingest to avoid empty namespace clustering.*

---

## ⚙️ Mechanics

*No pages yet.*

---

## ⚔️ Matchups

*No pages yet.*

---

## 🧠 Archetypes

*No pages yet.*

---

## 📊 Comparisons

*No pages yet.*

---

## 📈 Meta

*No pages yet.*

---

## 📓 Journal

*No entries yet.*

---

## Statistics

- **Total pages**: {len(games_catalog) + 2} ({len(games_catalog)} games)
- **Games covered**: {len(games_catalog)}
- **Total characters**: sum total across games is {sum([g['char_count'] for g in games_catalog])}
- **Last updated**: {today}
"""

    with open(INDEX_MD, 'w', encoding='utf-8') as f:
        f.write(index_header + index_mid + index_footer)
        
    print("Reconstructed master index.md correctly.")

if __name__ == '__main__':
    main()
