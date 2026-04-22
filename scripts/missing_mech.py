#!/usr/bin/env python3
"""List games missing systemMechanics."""
import re
with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()
array_start = content.index('export const SUPPORTED_GAMES')
blocks = re.findall(r'\n  \{(.*?)\n  \}', content[array_start:], re.DOTALL)
for block in blocks:
    has_mech = 'systemMechanics:' in block and 'systemMechanics: []' not in block
    if has_mech: continue
    id_m = re.search(r"id: '([^']+)'", block)
    name_m = re.search(r"name:\s*[\"']([^\"']+)", block)
    if id_m:
        print(f"{name_m.group(1) if name_m else '?':50s} | {id_m.group(1)}")
