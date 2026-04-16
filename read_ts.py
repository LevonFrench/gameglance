import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'\{\s*id:\s*[\'"]tekken-8[\'"][\s\S]*?\}', text)
if m:
    print("Found tekken-8:")
    print(m.group(0))

m2 = re.search(r'\{\s*id:\s*[\'"]marvel-vs-capcom-2[\'"][\s\S]*?\}', text)
if m2:
    print("Found marvel-vs-capcom-2:")
    print(m2.group(0))
