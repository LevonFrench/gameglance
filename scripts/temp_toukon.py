import re
with open('src/games.ts', 'r', encoding='utf-8') as f: content = f.read()
match = re.search(r"(id:\s*['\"]marvel-toukon-fighting-souls-beta-version['\"].*?characters:\s*\[\s*)(.*?)(\s*\])", content, re.DOTALL)
if match: print(match.group(2))
