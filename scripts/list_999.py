import re

ts_path = 'src/games.ts'
ts = open(ts_path, encoding='utf-8').read()

games = re.finditer(r'\{\s*id:\s*([\'"])([^\'"]+)\1,\s*name:\s*([\'"])(.*?)\3,\s*developer:.*?\s*rosterCount:\s*(\d+)', ts)

items = []
for m in games:
    game_id = m.group(2)
    name = m.group(4)
    count = m.group(5)
    if count == "999":
        items.append(f"{game_id}: {name}")

for i in items:
    print(i)
