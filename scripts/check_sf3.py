import re
ts = open('src/games.ts', encoding='utf-8').read()
matches = re.finditer(r'id:\s*[\'"](street-fighter-iii[^\'"]*)[\'"][\s\S]*?name:\s*[\'"]([^\'"]+)[\'"][\s\S]*?characters:\s*\[([\s\S]*?)\]', ts)
for m in matches:
    name = m.group(2)
    chars = len(re.findall(r'id:\s*[\'"]', m.group(3)))
    print(f"{name}: {chars} characters")
