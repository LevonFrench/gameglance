import re
import collections

ts = open('src/games.ts', encoding='utf-8').read()

# Extract games based on id block matching
block_matches = re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"],\s*name:\s*[\'"]([^\'"]+)[\'"]', ts)

games = []
for m in block_matches:
    ids = m.group(1)
    name = m.group(2)
    # Exclude character items. Assume top level games are not indented more than 4 spaces or have certain characteristics.
    # Actually, characters have id and name but no "developer:" or "releaseYear:". So we can find real games.
    
real_games = re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"],\s*name:\s*[\'"]([^\'"]+)[\'"],\s*developer:\s*[\'"]([^\'"]+)[\'"]', ts)
seen_ids = set()
duplicates = []

print("Extracting games with developer field...")
for m in real_games:
    gid = m.group(1)
    gname = m.group(2)
    if gid in seen_ids:
        duplicates.append((gid, gname))
    seen_ids.add(gid)

print(f"Total Unique Games: {len(seen_ids)}")
print(f"Total Duplicates: {len(duplicates)}")
for gid, gname in duplicates:
    print(f"Dup: {gid} - {gname}")

# Let's check duplicate names as well
real_games = re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"],\s*name:\s*[\'"]([^\'"]+)[\'"],\s*developer:\s*[\'"]([^\'"]+)[\'"]', ts)
names = [m.group(2) for m in real_games]
print("Duplicate Names:")
for name, c in collections.Counter(names).items():
    if c > 1:
        print(f"Name: {name} (x{c})")

