import re
ts = open('src/games.ts', encoding='utf-8').read()
matches = re.finditer(r'id:\s*[\'"](the-king-of-fighters-94)[\'"][\s\S]*?\]\n    \]', ts)
for m in matches:
    print(m.group(0))
