import re
with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'name:\s*[\'"]Street Fighter Alpha 2[\'"].*?characters:\s*\[(.*?)\]', text, re.DOTALL)
if m:
    print(m.group(1))
else:
    print("Not found")
