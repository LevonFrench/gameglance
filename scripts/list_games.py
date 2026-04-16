import re

ts_path = 'src/games.ts'
ts = open(ts_path, encoding='utf-8').read()

# We can split the file by "  {\n    id:" or by using a regex to isolate each game block
matches = re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"][\s\S]*?name:\s*([\'"])(.*?)\2', ts)

games = []
for m in matches:
    gid = m.group(1)
    gname = m.group(3)
    if "-" in gid and len(gid) > 4: # basic heuristic for top level games, wait top level games have 'developer:'
        games.append((gid, gname))

# better way
games = []
real_games = re.finditer(r'\{\s*id:\s*([\'"])([^\'"]+)\1,\s*name:\s*([\'"])(.*?)\3,\s*developer:\s*([\'"])([^\'"]+)\5', ts)
for m in real_games:
    games.append(m.group(4))

games.sort()
for i, g in enumerate(games):
    print(g)
