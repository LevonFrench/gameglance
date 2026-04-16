import re
with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Grab games blocks
blocks = re.finditer(r'(\n\s*\{\s*\n\s*id:\s*[\'"]([a-z0-9-]+)[\'"].*?\n\s*\})', text, re.DOTALL)
for b in blocks:
    if 'capcom-fighting' in b.group(2):
        print(b.group(1))
