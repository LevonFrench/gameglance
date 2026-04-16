import os, re
ts=open('src/games.ts', encoding='utf-8').read()
games=set(re.findall(r'id:\s*[\'"]([^\'"]+)[\'"]', ts))
guides=set(os.listdir('wiki/raw/guides'))
intersect = games & guides
print(f"Intersecting directly: {len(intersect)}\n{intersect}")
