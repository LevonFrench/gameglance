#!/usr/bin/env python3
"""Generate full registry health report — proper block parsing."""
import re, os

with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find game blocks by matching top-level { ... } inside the array
# Each game starts with "\n  {" at indent level 2 and ends with "\n  }"
array_start = content.index('export const SUPPORTED_GAMES')
blocks_raw = re.findall(r'\n  \{(.*?)\n  \}', content[array_start:], re.DOTALL)

games = []
for raw in blocks_raw:
    block = raw
    id_m = re.search(r"id: '([^']+)'", block)
    if not id_m:
        continue
    gid = id_m.group(1)
    
    name_m = re.search(r"name:\s*[\"']([^\"']+)", block)
    name = name_m.group(1) if name_m else gid
    year_m = re.search(r'releaseYear:\s*(\d+)', block)
    year = year_m.group(1) if year_m else '?'
    
    has_dev = 'developer:' in block
    has_mech = 'systemMechanics:' in block and 'systemMechanics: []' not in block
    has_links = 'links:' in block and 'links: []' not in block
    has_stores = 'stores:' in block and 'stores: []' not in block
    has_aliases = 'searchAliases:' in block
    has_year = year != '?'
    chars = block.count('moveCount:')
    
    has_data = os.path.isdir(f'public/data/{gid}')
    json_count = 0
    if has_data:
        json_count = len([f for f in os.listdir(f'public/data/{gid}') if f.endswith('.json') and f != '_roster.json'])
    
    issues = []
    if not has_dev: issues.append('dev')
    if not has_mech: issues.append('mech')
    if not has_links: issues.append('links')
    if not has_stores: issues.append('stores')
    if not has_aliases: issues.append('aliases')
    if not has_year: issues.append('year')
    if chars == 0: issues.append('chars')
    
    games.append({
        'id': gid, 'name': name, 'year': year, 'chars': chars,
        'json': json_count, 'issues': issues,
        'dev': has_dev, 'mech': has_mech, 'links': has_links,
        'stores': has_stores, 'aliases': has_aliases,
    })

# Write report
total = len(games)
perfect = sum(1 for g in games if not g['issues'])
no_dev = sum(1 for g in games if not g['dev'])
no_mech = sum(1 for g in games if not g['mech'])
no_stores = sum(1 for g in games if not g['stores'])
no_aliases = sum(1 for g in games if not g['aliases'])
no_chars = sum(1 for g in games if g['chars'] == 0)
no_year = sum(1 for g in games if 'year' in g['issues'])

with open('DRAFT_GAMES.md', 'w', encoding='utf-8') as f:
    f.write("# GameGlance Registry Health Report\n\n")
    f.write(f"**{total} games** | **{perfect} perfect** | **{total - perfect} need work**\n\n")
    
    f.write("## Coverage\n\n")
    f.write(f"| Field | Missing | Coverage |\n")
    f.write(f"|-------|---------|----------|\n")
    f.write(f"| Developer | {no_dev} | {100*(total-no_dev)//total}% |\n")
    f.write(f"| System Mechanics | {no_mech} | {100*(total-no_mech)//total}% |\n")
    f.write(f"| Store Links | {no_stores} | {100*(total-no_stores)//total}% |\n")
    f.write(f"| Search Aliases | {no_aliases} | {100*(total-no_aliases)//total}% |\n")
    f.write(f"| Release Year | {no_year} | {100*(total-no_year)//total}% |\n")
    f.write(f"| Characters | {no_chars} | {100*(total-no_chars)//total}% |\n")
    
    needs_work = sorted([g for g in games if g['issues']], key=lambda x: len(x['issues']), reverse=True)
    if needs_work:
        f.write(f"\n## Needs Work ({len(needs_work)})\n\n")
        f.write("| # | Game | ID | Year | Chars | Missing |\n")
        f.write("|---|------|----|------|-------|--------|\n")
        for i, g in enumerate(needs_work, 1):
            f.write(f"| {i} | {g['name']} | `{g['id']}` | {g['year']} | {g['chars']} | {', '.join(g['issues'])} |\n")
    
    perfect_games = sorted([g for g in games if not g['issues']], key=lambda x: x['name'])
    f.write(f"\n## Perfect ({perfect})\n\n")
    f.write("| # | Game | Year | Chars |\n")
    f.write("|---|------|------|-------|\n")
    for i, g in enumerate(perfect_games, 1):
        f.write(f"| {i} | {g['name']} | {g['year']} | {g['chars']} |\n")

print(f"Registry: {total} games, {perfect} perfect, {total-perfect} need work")
print(f"Missing: dev={no_dev} mech={no_mech} stores={no_stores} aliases={no_aliases} chars={no_chars}")
