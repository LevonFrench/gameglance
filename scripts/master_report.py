import os
import re
import json

def get_moves_count(game_id, char_id):
    path = f"public/data/{game_id}/{char_id}.json"
    if not os.path.exists(path):
        return 0
    try:
        data = json.load(open(path, 'r', encoding='utf-8'))
        return len(data.get('movesList', []))
    except:
        return 0

def main():
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    parts = re.split(r'(\n  \{\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)

    total_chars = 0
    unpopulated_chars = 0

    unpopulated_lines = ["# Unpopulated Characters Registry\n"]
    clean_lines = ["# Underpopulated Characters Quick List\n"]

    for i in range(1, len(parts), 2):
        delim = parts[i]
        body = parts[i+1]
        
        id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", delim)
        if not id_match: continue
        game_id = id_match.group(1)
        
        name_match = re.search(r"name:\s*['\"]([^'\"]+)['\"]", body)
        game_name = name_match.group(1) if name_match else game_id
        
        # find characters array
        char_start = body.find('characters: [')
        if char_start == -1: continue
        char_end = body.find(']', char_start)
        char_array = body[char_start:char_end]
        
        game_unpop = []
        
        for c_match in re.finditer(r"\{\s*id:\s*['\"]([^'\"]+)['\"][^}]*?name:\s*['\"]([^'\"]+)['\"][^}]*?\}", char_array):
            c_id = c_match.group(1)
            c_name = c_match.group(2)
            
            c_block = c_match.group(0)
            
            # Check move count
            count_match = re.search(r"moveCount:\s*(\d+)", c_block)
            reg_count = int(count_match.group(1)) if count_match else 0
            
            actual_count = get_moves_count(game_id, c_id)
            
            total_chars += 1
            if actual_count == 0:
                unpopulated_chars += 1
                game_unpop.append(c_name)
                
        if game_unpop:
            unpopulated_lines.append(f"\n## {game_name} ({game_id})")
            clean_lines.append(f"\n## {game_name}")
            for c in game_unpop:
                unpopulated_lines.append(f"- {c} (0 moves)")
                clean_lines.append(c)

    # Write full report
    unpopulated_lines.insert(1, f"\n**Total Unpopulated:** {unpopulated_chars} / {total_chars}\n")
    
    with open('unpopulated_characters.md', 'w', encoding='utf-8') as f:
        f.write('\n'.join(unpopulated_lines))
        
    with open('underpopulated_clean.md', 'w', encoding='utf-8') as f:
        f.write('\n'.join(clean_lines))

    print(f"Generated reports! Unpopulated: {unpopulated_chars}/{total_chars}")

if __name__ == '__main__':
    main()
