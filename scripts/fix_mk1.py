with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()
import re
text = re.sub(r'name:\s+[\'"]Mortal Kombat 1[\'"]', 'name: "Mortal Kombat 1 (1992)"', text)
with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(text)
