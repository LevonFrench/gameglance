import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

parts = re.split(r'\s*{\s*id:\s*[\'"]', ts_txt)
games = []
for p in parts[1:]:
    text = "id: '" + p
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", text)
    if id_match:
        if 'batsu' in text.lower():
            print("Found batsu in game:", id_match.group(1))
        if 'haohmaru' in text.lower():
            print("Found haohmaru in game:", id_match.group(1))
