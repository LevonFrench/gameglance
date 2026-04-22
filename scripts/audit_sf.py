#!/usr/bin/env python3
"""Audit all Street Fighter games in the registry."""
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all SF-related game IDs
pattern = r"id: '((?:street-fighter|super-street|ultra-street|hyper-street|street-fighter-ex)[^']*?)'"
ids = re.findall(pattern, content)

print(f"Found {len(ids)} Street Fighter games:\n")
for gid in ids:
    pos = content.find(f"id: '{gid}'")
    block_end = content.find('\n  {', pos + 10)
    if block_end == -1:
        block_end = content.find('\n];', pos)
    block = content[pos:block_end]
    
    has_dev = 'developer:' in block
    has_mech = 'systemMechanics:' in block and 'systemMechanics: []' not in block
    has_links = 'links:' in block and 'links: []' not in block
    has_stores = 'stores:' in block and 'stores: []' not in block
    has_aliases = 'searchAliases:' in block
    has_year = 'releaseYear:' in block
    chars = block.count('moveCount:')
    
    issues = []
    if not has_dev: issues.append('NO developer')
    if not has_mech: issues.append('NO mechanics')
    if not has_links: issues.append('NO links')
    if not has_stores: issues.append('NO stores')
    if not has_aliases: issues.append('NO aliases')
    if not has_year: issues.append('NO year')
    if chars == 0: issues.append('NO characters')
    
    status = 'OK' if not issues else 'FIX'
    print(f"{status} {gid}")
    print(f"  chars={chars} dev={has_dev} mech={has_mech} links={has_links} stores={has_stores} aliases={has_aliases}")
    if issues:
        print(f"  ISSUES: {', '.join(issues)}")
    print()
