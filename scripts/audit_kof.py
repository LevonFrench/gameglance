#!/usr/bin/env python3
"""Audit all KOF games."""
import re, os

with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

array_start = content.index('export const SUPPORTED_GAMES')
blocks = re.findall(r'\n  \{(.*?)\n  \}', content[array_start:], re.DOTALL)

for block in blocks:
    id_m = re.search(r"id: '([^']+)'", block)
    if not id_m: continue
    gid = id_m.group(1)
    if 'king-of-fighters' not in gid: continue
    
    name_m = re.search(r"name:\s*[\"']([^\"']+)", block)
    name = name_m.group(1) if name_m else gid
    chars = block.count('moveCount:')
    has_mech = 'systemMechanics:' in block and 'systemMechanics: []' not in block
    has_year = 'releaseYear:' in block
    
    data_dir = f'public/data/{gid}'
    jsons = 0
    if os.path.isdir(data_dir):
        jsons = len([f for f in os.listdir(data_dir) if f.endswith('.json') and f != '_roster.json'])
    
    status = 'OK' if has_mech else 'NEEDS MECH'
    print(f"{status:12s} | {name:50s} | {gid}")
    print(f"             | chars={chars} jsons={jsons} year={has_year} mech={has_mech}")
