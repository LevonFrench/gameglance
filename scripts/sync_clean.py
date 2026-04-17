import re

# Parse the master unpopulated report
with open('unpopulated_characters.md', 'r', encoding='utf-8') as f:
    master_lines = f.readlines()

master_unpop = {}
current_game = None

for line in master_lines:
    gmatch = re.match(r'## (.*) \((.*)\)', line)
    if gmatch:
        current_game = gmatch.group(1).strip()
        master_unpop[current_game] = set()
    
    cmatch = re.match(r'- (.*) \(0 moves\)', line)
    if cmatch and current_game:
        c_name = cmatch.group(1).strip()
        master_unpop[current_game].add(c_name)

# Parse the user's manual list
with open('underpopulated_clean.md', 'r', encoding='utf-8') as f:
    clean_lines = f.readlines()

clean_list = {}
current_clean_game = None

for line in clean_lines:
    line = line.strip()
    if not line:
        continue
    
    if line.startswith('## '):
        current_clean_game = line[3:].strip()
        clean_list[current_clean_game] = set()
    elif line.startswith('#'):
        continue
    else:
        if current_clean_game:
            # Strip list markings if any
            char_name = re.sub(r'^-\s+', '', line).strip()
            clean_list[current_clean_game].add(char_name)

# Reconciliation
synced_list = {}

for game, chars in clean_list.items():
    # Attempt to find the true game name in master
    # We will do an exact or case-insensitive match
    matched_game = None
    for m_game in master_unpop.keys():
        if m_game.lower() == game.lower():
            matched_game = m_game
            break
            
    if not matched_game:
        # Check if the game is completely populated now!
        # If it's not in master_unpop, it means it has 0 unpopulated characters.
        continue
        
    synced_list[matched_game] = set()
    
    for char in chars:
        # Check if char is in master unpop for this game
        matched_char = None
        for m_char in master_unpop[matched_game]:
            if m_char.lower() == char.lower():
                matched_char = m_char
                break
                
        if matched_char:
            synced_list[matched_game].add(matched_char)

# Format the output
output = ["# Underpopulated Characters Quick List\n\n"]

for game in sorted(synced_list.keys()):
    if not synced_list[game]:
        continue
    output.append(f"## {game}\n")
    for char in sorted(list(synced_list[game])):
        output.append(f"{char}\n")
    output.append("\n")

with open('underpopulated_clean.md', 'w', encoding='utf-8') as f:
    f.writelines(output)

print("Synced underpopulated_clean.md")
