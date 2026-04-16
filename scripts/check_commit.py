import subprocess
import re

commits = ['HEAD', '7d91c24', '4381b44', '560bd31', 'f8d3568', 'f612dbf', '8f7e2ce', 'd4d309b', 'd529b37', '635b822', '5e336d8', '95aa078', 'e94d723']

gid = 'fatal-fury-city-of-the-wolves'

for c in commits:
    try:
        ts = subprocess.check_output(['git', 'show', f"{c}:src/games.ts"], encoding='utf-8')
        m = re.search(r'\{\s*id:\s*[\'"]' + re.escape(gid) + r'[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\}', ts)
        if m:
            block = m.group(0)
            chars = re.findall(r'id:\s*[\'"]([^\'"]+)[\'"]', block)
            print(f"{c}: {len(chars) - 1} characters") # -1 because the game id itself matches
    except Exception as e:
        print(f"Error checking {c}")
