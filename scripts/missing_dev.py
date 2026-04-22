#!/usr/bin/env python3
"""List games missing developer field."""
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

array_start = content.index('export const SUPPORTED_GAMES')
blocks = re.findall(r'\n  \{(.*?)\n  \}', content[array_start:], re.DOTALL)

missing = []
for block in blocks:
    if 'developer:' in block:
        continue
    id_m = re.search(r"id: '([^']+)'", block)
    name_m = re.search(r"name:\s*[\"']([^\"']+)", block)
    if id_m:
        gid = id_m.group(1)
        name = name_m.group(1) if name_m else gid
        missing.append((name, gid))

for name, gid in sorted(missing):
    print(f"{name}  |  {gid}")
print(f"\nTotal: {len(missing)}")
