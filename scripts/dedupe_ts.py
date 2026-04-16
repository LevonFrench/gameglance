import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)(.*)', text, re.DOTALL)
prefix = prefix_match.group(1)
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
    
postfix = rest[i:]

seen_names = set()
unique_games = []

for g in games:
    m = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', g)
    if m:
        name = m.group(1).strip()
        if name in seen_names:
            pass # skip duplicate
        else:
            seen_names.add(name)
            unique_games.append(g)
    else:
        unique_games.append(g)

full_text = prefix + ",\n  ".join(unique_games) + "\n" + postfix

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(full_text)

print(f"Removed {len(games) - len(unique_games)} duplicates.")
