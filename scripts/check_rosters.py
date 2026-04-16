import re
import json

ts = open('src/games.ts', encoding='utf-8').read()

missing_games = []
for m in re.finditer(r'name:\s*[\'\"]([^\'\"]+)[\'\"][\s\S]*?(characters:\s*\[[\s\S]*?\])[\s\S]*?rosterCount:\s*(\d+)', ts):
    gname = m.group(1)
    chars_text = m.group(2)
    rcount = int(m.group(3))
    
    actual_count = len(re.findall(r'\{\s*id:', chars_text))
    if actual_count < rcount:
        missing_games.append(f"{gname}: {actual_count}/{rcount}")

print("Missing roosters:")
for mg in missing_games:
    print(mg)
