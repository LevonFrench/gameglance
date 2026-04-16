import re

def main():
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    blocks = re.findall(r'name:\s*[\'"]([^\'"]+)[\'"].*?characters:\s*\[(.*?)\]', ts_content, re.DOTALL)
    
    games = []
    
    for game_name, chars_block in blocks:
        char_names = re.findall(r'name:\s*[\'"]([^\'"]+)[\'"]', chars_block)
        if game_name and char_names:
            games.append({
                'name': game_name.strip(),
                'characters': [c.strip() for c in char_names]
            })

    games.sort(key=lambda x: x['name'].lower())

    with open('master_rosters.txt', 'w', encoding='utf-8') as f:
        for g in games:
            f.write(f"**{g['name']}**\n")
            f.write(", ".join(g['characters']) + ".\n\n")

    with open('games_list.md', 'w', encoding='utf-8') as f:
        f.write("# Supported Games\n\nGameGlance currently supports the following titles:\n\n")
        for g in games:
            f.write(f"- {g['name']}\n")
            
    print(f"Updated master_rosters.txt and games_list.md with {len(games)} games.")

if __name__ == "__main__":
    main()
