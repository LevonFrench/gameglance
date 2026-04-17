import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Fix Capcom Fighting Jam
game_cfj_regex = r"(id:\s*['\"]capcom-fighting-jam['\"].*?characters:\s*\[\s*)(.*?)(\s*\])"
gmatch = re.search(game_cfj_regex, ts_content, re.DOTALL)
if gmatch:
    chars = gmatch.group(2)
    chars = chars.replace("{ id: 'leo-kliesen', name: 'Leo Kliesen' }", "{ id: 'leo', name: 'Leo' }")
    ts_content = ts_content[:gmatch.start()] + gmatch.group(1) + chars + gmatch.group(3) + ts_content[gmatch.end():]

# Fix Red Earth
game_redearth_regex = r"(id:\s*['\"]red-earth-warzard['\"].*?characters:\s*\[\s*)(.*?)(\s*\])"
gmatch = re.search(game_redearth_regex, ts_content, re.DOTALL)
if gmatch:
    chars = gmatch.group(2)
    chars = chars.replace("{ id: 'leo-kliesen', name: 'Leo Kliesen' }", "{ id: 'leo', name: 'Leo' }")
    ts_content = ts_content[:gmatch.start()] + gmatch.group(1) + chars + gmatch.group(3) + ts_content[gmatch.end():]

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Fixed Leo Kliesen duplicates in Capcom Fighting Jam and Red Earth!")
