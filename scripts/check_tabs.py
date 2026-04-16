import re
ts = open('src/games.ts', encoding='utf-8').read()
m = re.search(r'id:\s*[\'"]street-fighter-iii-3rd-strike[\'"][\s\S]*?tabs:\s*\[([^\]]+)\]', ts)
if m:
    print(m.group(1))
else:
    print("Not found")
    
m2 = re.search(r'id:\s*[\'"]street-fighter-iii-new-generation[\'"][\s\S]*?tabs:\s*\[([^\]]+)\]', ts)
if m2:
    print(m2.group(1))
