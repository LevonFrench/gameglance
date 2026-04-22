#!/usr/bin/env python3
"""Generate sorted list of isDraft games."""
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

current_id = None
current_name = None
current_year = None
drafts = []

for line in lines:
    m = re.search(r"id:\s*'([^']+)'", line)
    if m and 'moveCount' not in line:
        current_id = m.group(1)
        current_name = None
        current_year = None
    nm = re.search(r'name:\s*["\']([^"\']+)', line)
    if nm:
        current_name = nm.group(1)
    ym = re.search(r'releaseYear:\s*(\d+)', line)
    if ym:
        current_year = ym.group(1)
    if 'isDraft: true' in line and current_id:
        drafts.append((current_name or current_id, current_id, current_year or '?'))

with open('DRAFT_GAMES.md', 'w', encoding='utf-8') as f:
    f.write("# Draft Games (Hidden from UI)\n\n")
    f.write(f"**{len(drafts)} games** are flagged `isDraft: true` and hidden from the game select screen.\n\n")
    f.write("| # | Game | ID | Year |\n")
    f.write("|---|------|-------|------|\n")
    for i, (name, gid, year) in enumerate(sorted(drafts), 1):
        f.write(f"| {i} | {name} | `{gid}` | {year} |\n")

print(f"Wrote {len(drafts)} draft games to DRAFT_GAMES.md")
