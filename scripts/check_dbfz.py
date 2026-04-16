import re

ts_path = 'src/games.ts'
ts_content = open(ts_path, encoding='utf-8').read()

m = re.search(r'id:\s*[\'"]dragon-ball-fighterz[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]', ts_content)
if m:
    print(m.group(0))
else:
    print("Not found")
