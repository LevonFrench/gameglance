import json
import os

with open('needy.json', 'r', encoding='utf-8') as f:
    needy = json.load(f)

games = {}
for entry in needy:
    gname = entry.get('game_name', 'Unknown Game')
    cname = entry.get('char_name', 'Unknown Character')
    
    if gname not in games:
        games[gname] = []
    games[gname].append(cname)

with open('unpopulated_characters.md', 'w', encoding='utf-8') as f:
    f.write("# Unpopulated Characters Report\n\n")
    f.write("The following games and characters have 0, 1, or 2 moves populated after attempting `.docx` extraction and `command.dat` parsing. They could not be automatically synthesized or reliably fetched via bulk web scraping.\n\n")
    
    for gname in sorted(games.keys()):
        f.write(f"## {gname}\n")
        f.write(f"- {', '.join(sorted(games[gname]))}\n\n")

print("Created unpopulated_characters.md")
