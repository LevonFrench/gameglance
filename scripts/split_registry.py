import os
import re
import json

def process():
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = re.compile(r"id:\s*['\"]([^'\"]+)['\"][\s\S]*?characters:\s*\[([\s\S]*?)\n\s*\]")
    
    count = 0
    for match in pattern.finditer(content):
        game_id = match.group(1)
        chars_text = match.group(2)
        
        char_pattern = re.compile(r"\{\s*id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*['\"]([^'\"]+)['\"](?:\s*,\s*isHidden:\s*(true|false))?(?:\s*,\s*moveCount:\s*(\d+))?\s*\}")
        
        chars = []
        for c in char_pattern.finditer(chars_text):
            char_obj = {
                "id": c.group(1),
                "name": c.group(2)
            }
            if c.group(3):
                char_obj["isHidden"] = c.group(3) == 'true'
            if c.group(4):
                char_obj["moveCount"] = int(c.group(4))
            chars.append(char_obj)
            
        out_dir = f"public/data/{game_id}"
        os.makedirs(out_dir, exist_ok=True)
        with open(f"{out_dir}/_roster.json", 'w', encoding='utf-8') as f:
            json.dump(chars, f, indent=2)
        count += 1
            
    # Replace characters array
    new_content = re.sub(r"characters:\s*\[[\s\S]*?\n\s*\]", "characters: []", content)
    
    with open('src/games.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Successfully extracted {count} rosters and updated src/games.ts!")

if __name__ == '__main__':
    process()
