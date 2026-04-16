with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()
import re
# Let's find all Mortal Kombat game names
for match in re.finditer(r"name:\s*['\"]Mortal Kombat[^'\"]*['\"]", text):
    print(match.group(0))
