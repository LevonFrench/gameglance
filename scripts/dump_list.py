import re
ts = open('src/games.ts', encoding='utf-8').read()
prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)(.*)', ts, re.DOTALL)
rest = prefix_match.group(2)
out = open('games_list_dump.txt', 'w', encoding='utf-8')
for m in re.finditer(r'id:\s*[\'"]([^\'"]+)[\'"],\s*name:\s*[\'"]([^\'"]+)[\'"]', rest):
    out.write(f"id: {m.group(1)}, name: {m.group(2)}\n")
out.close()
