import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("'Throws'", "'Command Throws', 'Normal Throws'")

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated tabs in games.ts")
