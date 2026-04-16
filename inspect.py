import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# find all games
games = []
for match in re.finditer(r'\{\s*id:\s*\'([^\']+)\',\s*name:\s*\"([^\"]+)\"[\s\S]*?\},?', text):
    games.append((match.group(1), match.group(2)))

# Print ones with same name
name_counts = {}
for g in games:
    name_counts[g[1]] = name_counts.get(g[1], 0) + 1

print("Duplicates:")
for g in games:
    if name_counts[g[1]] > 1:
        print(f"ID: {g[0].ljust(40)} Configured Name: {g[1]}")

print("\nAliases to check:")
for g in games:
    if any(alias in g[0].lower() for alias in ['xmcoa', 'roster', 't8', 'mk1', 'mk2', 'mvc2', 'vf2', 'vf3', 'vf4', 'toshinden']):
        print(f"ID: {g[0].ljust(40)} Configured Name: {g[1]}")
