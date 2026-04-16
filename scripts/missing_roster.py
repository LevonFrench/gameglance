import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract blocks
prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)(.*)', text, re.DOTALL)
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

missing_info = []

for g in games:
    m_id = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', g)
    m_name = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', g)
    m_roster = re.search(r'rosterCount:\s*(\d+)', g)
    if m_id and m_name and m_roster:
        game_id = m_id.group(1)
        game_name = m_name.group(1)
        expected_roster = int(m_roster.group(1))
        
        # count characters lines
        # The characters array looks like:
        # characters: [\n { id: '...', name: '...' },\n ...]
        char_block_match = re.search(r'characters:\s*\[([\s\S]*?)\]', g)
        if char_block_match:
            char_block = char_block_match.group(1)
            actual_count = len(re.findall(r'\{\s*id:', char_block))
            if actual_count < expected_roster:
                missing_info.append((game_id, game_name, expected_roster, actual_count))

print(f"Found {len(missing_info)} games with incomplete rosters.")
for idx, (gid, gname, exp, act) in enumerate(missing_info):
    print(f"{gname} ({gid}): {act}/{exp}")
