import os
import json
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

game_blocks = re.finditer(r"(id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*['\"]([^'\"]+)['\"].*?characters:\s*\[(.*?)\])", ts_txt, re.DOTALL)

clean_lines = []
verbose_lines = []

total_chars = 0

for g_match in game_blocks:
    gid = g_match.group(2)
    gname = g_match.group(3)
    char_array = g_match.group(4)
    
    underpopulated = []
    
    for c_match in re.finditer(r"id:\s*['\"]([^'\"]+)['\"][^}]*?name:\s*['\"]([^'\"]+)['\"]", char_array, re.DOTALL):
        cid = c_match.group(1)
        cname = c_match.group(2).replace(' (Coming Soon)', '')
        
        json_path = os.path.join('public', 'data', gid, f"{cid}.json")
        is_under = False
        status_text = ""
        
        if not os.path.exists(json_path):
            is_under = True
            status_text = "**Missing File**"
        else:
            try:
                with open(json_path, 'r', encoding='utf-8') as jf:
                    data = json.load(jf)
                moves = data.get('movesList', [])
                if len(moves) < 2:
                    is_under = True
                    status_text = f"**{len(moves)} Moves**"
            except:
                is_under = True
                status_text = "**Parse Error**"

        if is_under:
            underpopulated.append((cid, cname, status_text))
            total_chars += 1
            
    if underpopulated:
        # For clean
        clean_lines.append(f"## {gname}")
        for _, cname, _ in underpopulated:
            clean_lines.append(cname)
        clean_lines.append("")
        
        # For verbose
        verbose_lines.append(f"## {gname}")
        for cid, cname, status in underpopulated:
            verbose_lines.append(f"- [ ] {cname} (`{cid}`) - {status}")
        verbose_lines.append("")

# Prepend the headers
wiki_game_table = ""
try:
    with open('wiki/pages/index.md', 'r', encoding='utf-8') as f:
        wiki_txt = f.read()
    m = re.search(r'(## 🎮 Games.*?)\n---', wiki_txt, re.DOTALL)
    if m:
        wiki_game_table = m.group(1).strip()
except:
    pass

info_block = f"""# Underpopulated Characters Report

> **Registry Sync Protocol Executed**: 
> - **{total_chars} characters** across the database have `< 2` moves stored. 
> - They have automatically been flagged with the `(Coming Soon)` suffix in the primary `src/games.ts` config.
> - Games in which *every* character is flagged have been assigned `isHidden: true` to prevent rendering empty shells in the UI.

{wiki_game_table}

---

The following games and characters lack complete move list payloads (fewer than 2 moves) or are missing entirely:

"""

# Write verbose
with open('unpopulated_characters.md', 'w', encoding='utf-8') as f:
    f.write(info_block + "\n".join(verbose_lines))
    
# Write Clean
clean_header = f"# Underpopulated Characters (Clean)\n\nTotal Underpopulated: {total_chars}\n\n"
with open('underpopulated_clean.md', 'w', encoding='utf-8') as f:
    f.write(clean_header + "\n".join(clean_lines))

print("Both reports completely regenerated from src/games.ts ground truth!")
