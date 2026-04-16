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
            current_game = {'char_count': 0}
        elif current_game is not None:
            if line.startswith('    id:'):
                m = re.search(r'(?:"([^"]+)"|\'([^\']+)\')', line)
                if m: current_game['id'] = m.group(1) or m.group(2)
            elif line.startswith('    name:'):
                m = re.search(r'(?:"([^"]+)"|\'([^\']+)\')', line)
                if m: current_game['name'] = m.group(1) or m.group(2)
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

    print(f"Correctly parsed {len(games_catalog)} top-level games from the registry.")

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
*No overview generated yet.*

## Characters ({g['char_count']} registered)
*(Data mapped from registry but wiki character pages remain uninitialized - run specific character ingestion to flesh out connections).*

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

# GameGlance Wiki — Index

Master catalog of all wiki pages. The LLM reads this first when answering queries.

---

## 📋 Meta Pages

| Page | Summary |
|------|---------|
| [[overview]] | High-level synthesis of the entire knowledge base |
| [[log]] | Chronological record of all wiki operations |

---

## 🎮 Games ({len(games_catalog)})

### Complete Roster
| Page | Game | Characters |
|------|------|-----------|
"""

    index_mid = ""
    for g in games_catalog:
        index_mid += f"| [[{g['id']}]] | {g['name']} | {g['char_count']} |\n"

    index_footer = f"""
---

## 🥊 Characters

*See individual game pages for raw character pointers. Character wiki pages are initialized dynamically during targeted source ingest to avoid empty namespace clustering.*

---

## ⚙️ Mechanics

*No pages yet.*

---

## 🗡️ Matchups

*No pages yet.*

---

## 🏛️ Archetypes

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
- **Last updated**: {today}
"""

    with open(INDEX_MD, 'w', encoding='utf-8') as f:
        f.write(index_header + index_mid + index_footer)
        
    print("Reconstructed master index.md correctly.")

if __name__ == '__main__':
    main()
