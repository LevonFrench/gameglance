import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# let's find the mk1 object
m = re.search(r'\{\s*id:\s*[\'"]mk1[\'"][\s\S]*?\}', text)
if m:
    print("Found mk1:")
    print(m.group(0))

m2 = re.search(r'\{\s*id:\s*[\'"]mvc2[\'"][\s\S]*?\}', text)
if m2:
    print("Found mvc2:")
    print(m2.group(0))
