import re

ts_path = 'src/games.ts'
ts_content = open(ts_path, encoding='utf-8').read()

real_games = re.finditer(r'\{\s*id:\s*([\'"])([^\'"]+)\1,\s*name:\s*([\'"])(.*?)\3,\s*developer:\s*([\'"])([^\'"]+)\5', ts_content)
games = []
for m in real_games:
    games.append(m.group(4))

games.sort()

md_content = "# Supported Games\n\nGameGlance currently supports the following titles:\n\n"
for g in games:
    md_content += f"- {g}\n"

with open('games_list.md', 'w', encoding='utf-8') as f:
    f.write(md_content)

print(f"games_list.md updated with {len(games)} titles.")
