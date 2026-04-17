import re
with open('src/games.ts', 'r', encoding='utf-8') as f: ts_content = f.read()
game_block_regex = r"(id:\s*['\"]capcom-fighting-jam['\"].*?characters:\s*\[\s*)(.*?)(\s*\])"
gmatch = re.search(game_block_regex, ts_content, re.DOTALL)
if gmatch:
    print(gmatch.group(2))
