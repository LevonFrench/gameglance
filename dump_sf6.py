import re
text = open('src/games.ts', encoding='utf-8').read()
for m in re.finditer(r'id:\s*[\'"]([a-z0-9-]+)[\'"].*?tabs:\s*\[', text, re.DOTALL):
    if m.group(1) in ('street-fighter-6', 'vampiresavior'):
        print(m.group(0))
