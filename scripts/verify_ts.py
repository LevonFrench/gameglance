import re
ts=open('src/games.ts', encoding='utf-8').read()
m=re.finditer(r'name:\s*[\'"](The King of Fighters[^\'"]*)[\'"][\s\S]*?rosterCount:\s*(\d+)', ts)
for x in m:
    name = x.group(1)
    chars = len(re.findall(r'id:\s*[\'"]', re.search(r'characters:\s*\[([\s\S]*?)\]', x.group(0) + ts[x.end():x.end()+1000]).group(1)))
    print(f"{name}: {x.group(2)} - chars: {chars}")
