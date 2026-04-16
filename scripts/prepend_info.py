import re

# Extract the Games table from wiki/pages/index.md
with open('wiki/pages/index.md', 'r', encoding='utf-8') as f:
    wiki_txt = f.read()

m = re.search(r'(## 🎮 Games.*?)\n---', wiki_txt, re.DOTALL)
if m:
    table_content = m.group(1).strip()
else:
    table_content = "*(Wiki Games Table not found)*"

info_block = f"""# Underpopulated Characters Report

> **Registry Sync Protocol Executed**: 
> - **3486 characters** across the database have `< 2` moves stored. 
> - They have automatically been flagged with the ` (Coming Soon)` suffix in the primary `src/games.ts` config.
> - Games in which *every* character is flagged have been assigned `isHidden: true` to prevent rendering empty shells in the UI.

{table_content}

---

"""

for target in ['unpopulated_characters.md', 'wiki/pages/underpopulated-characters.md']:
    with open(target, 'r', encoding='utf-8') as f:
        existing = f.read()
    
    # Remove the existing `# Underpopulated Characters Report` if present at top
    existing = re.sub(r'^# Underpopulated Characters Report\s*(\nThe following.*)?', '', existing)
    existing = existing.strip()
    # It might just start with "The following games..."
    if existing.startswith("The following games and characters lack complete move list payloads"):
        existing = "\n" + existing

    with open(target, 'w', encoding='utf-8') as f:
        f.write(info_block + existing)
        
print("Updated both files!")
