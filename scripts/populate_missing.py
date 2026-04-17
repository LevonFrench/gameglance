import os
import re
import json

def slugify(text):
    text = str(text).lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def get_all_characters(data):
    all_chars = []
    roster_keys = ['characters', 'roster', 'character_roster', 'base_roster', 'dlc_roster', 'fighters', 'unlockable_characters', 'secret_characters', 'roster_additions', 'new_characters']
    for key in roster_keys:
        if isinstance(data, dict) and key in data and isinstance(data[key], list):
            all_chars.extend(data[key])
    if isinstance(data, list):
        all_chars.extend(data)
    return all_chars

def main():
    print("Parsing src/games.ts...")
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    parts = re.split(r'(\n  \{\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)
    registry = {}
    
    for i in range(1, len(parts), 2):
        id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", parts[i])
        if id_match:
            game_id = id_match.group(1)
            registry[game_id] = {}
            body = parts[i+1]
            char_start = body.find('characters: [')
            if char_start != -1:
                char_end = body.find(']', char_start)
                char_array = body[char_start:char_end]
                for c_match in re.finditer(r"\{\s*id:\s*['\"]([^'\"]+)['\"][^}]*?name:\s*['\"]([^'\"]+)['\"]", char_array):
                    c_id = c_match.group(1)
                    c_name = c_match.group(2)
                    registry[game_id][c_id] = c_name

    # Compute missing characters
    missing = []
    for game_id, chars in registry.items():
        for char_id, char_name in chars.items():
            path = f"public/data/{game_id}/{char_id}.json"
            if not os.path.exists(path):
                missing.append((game_id, char_id, char_name))

    print(f"Found {len(missing)} missing characters.")
    
    # Load all FAQs
    faq_data = []
    faq_dir = 'faqs/old'
    if os.path.exists(faq_dir):
        for f in os.listdir(faq_dir):
            if f.endswith('.json'):
                try:
                    with open(os.path.join(faq_dir, f), 'r', encoding='utf-8') as jf:
                        data = json.load(jf)
                        chars = get_all_characters(data)
                        if chars:
                            faq_data.extend(chars)
                        elif isinstance(data, dict) and ('character' in data or 'name' in data):
                            faq_data.append(data)
                except Exception as e:
                    print(f"Failed to load FAQ {f}: {e}")

    # Process missing
    found_count = 0
    empty_count = 0
    for game_id, char_id, char_name in missing:
        os.makedirs(f"public/data/{game_id}", exist_ok=True)
        path = f"public/data/{game_id}/{char_id}.json"
        
        # Try to find in FAQs
        match = None
        for fc in faq_data:
            fc_name = fc.get('character') or fc.get('name')
            if fc_name:
                # Fuzzy matching: check slug
                if slugify(fc_name) == char_id or char_id in slugify(fc_name):
                    match = fc
                    break
        
        if match:
            print(f"Found data for {char_name} ({char_id}) in FAQs!")
            with open(path, 'w', encoding='utf-8') as f:
                json.dump(match, f, indent=2)
            found_count += 1
        else:
            print(f"No FAQ data for {char_name} ({char_id}). Creating empty skeleton.")
            skel = {
                "character": char_name,
                "movesList": []
            }
            with open(path, 'w', encoding='utf-8') as f:
                json.dump(skel, f, indent=2)
            empty_count += 1

    print(f"Done! Populated {found_count} with data, {empty_count} with empty skeletons.")
    
    # Run the master report regenerating script
    os.system("python scripts/master_report.py")

if __name__ == '__main__':
    main()
