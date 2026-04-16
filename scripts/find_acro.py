import re
ts = open('src/games.ts', encoding='utf-8').read()
prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)(.*)', ts, re.DOTALL)
rest = prefix_match.group(2)
games = []
current_block = ""
brace_count = 0
in_game = False

i = 0
while i < len(rest):
    char = rest[i]
    if not in_game:
        if char == '{':
            in_game = True
            brace_count = 1
            current_block = char
        elif char == ']':
            break
    else:
        current_block += char
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                games.append(current_block)
                in_game = False
    i += 1

print("Games with short IDs or names:")
for g in games:
    m_id = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', g)
    m_name = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', g)
    if m_id and m_name:
        gid = m_id.group(1)
        gname = m_name.group(1)
        if len(gid) <= 5 or len(gname) <= 5:
            print(f"ID: {gid}, Name: {gname}")
