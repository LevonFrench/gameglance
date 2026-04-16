import re
m = re.search(r'id:\s*[\'"]street-fighter-6[\'"].*?\}', open('src/games.ts', encoding='utf-8').read(), re.DOTALL)
print(m.group(0))
