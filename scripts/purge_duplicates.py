import re
import json

with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# games are between SUPPORTED_GAMES: GameDefinition[] = [ and ];
match = re.search(r'export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*(.*)\s*\];?', text, re.DOTALL)
if match:
    array_content = match.group(1)
    
    # We can just split by "characters: [" and look at the id/name before it
    blocks = array_content.split('characters: [')
    
    games = []
    for b in blocks[:-1]:
        # get the id and name from the END of the previous block
        m_id = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', b)
        m_name = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', b)
        if m_id and m_name:
            games.append((m_id.group(1), m_name.group(1)))
            
    games.sort(key=lambda x: x[1].lower())
    
    by_name = {}
    for g_id, g_name in games:
        by_name.setdefault(g_name.lower(), []).append((g_id, g_name))
        
    print("Exact Name Duplicates:")
    for name, entries in by_name.items():
        if len(entries) > 1:
            print(f"Name '{name}' has duplicates: {entries}")

    print("\nFuzzy Name Duplicates (Similar prefixes):")
    for i in range(len(games)):
        for j in range(i+1, len(games)):
            name1 = games[i][1].lower().replace(':', '').replace('-', ' ')
            name2 = games[j][1].lower().replace(':', '').replace('-', ' ')
            if name1 in name2 and len(name1) > 5 and name1 != name2:
                print(f"Possible match: {games[i][1]}  ~  {games[j][1]}")
                
    # Also I need to check if there are any trailing Mk2, mvc2 in the names
    for id_val, name_val in games:
        if name_val.lower() in ['mk1', 'mk2', 'mvc2', 't8']:
            print(f"FOUND ALIAS NAME: {name_val} under {id_val}")
