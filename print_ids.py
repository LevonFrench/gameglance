import re
text=open('src/games.ts', encoding='utf-8').read()
for m in re.finditer(r'id:\s*[\'"]([^\'"]*?(asuka|killer|mortal|samurai|sysceles)[^\'"]*?)[\'"]', text):
    print(m.group(1))
