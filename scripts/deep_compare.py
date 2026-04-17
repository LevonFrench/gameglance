import os
import re
import json

def main():
    print("Parsing src/games.ts...")
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    parts = re.split(r'(\n  \{\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)

    registry = {} # {game_id: {char_id: char_name}}

    for i in range(1, len(parts), 2):
        delim = parts[i]
        body = parts[i+1]
        
        id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", delim)
        if not id_match: continue
        game_id = id_match.group(1)
        
        name_match = re.search(r"name:\s*['\"]([^'\"]+)['\"]", body)
        game_name = name_match.group(1) if name_match else game_id
        
        registry[game_id] = {'_name': game_name, 'chars': {}}
        
        char_start = body.find('characters: [')
        if char_start == -1: continue
        char_end = body.find(']', char_start)
        char_array = body[char_start:char_end]
        
        for c_match in re.finditer(r"\{\s*id:\s*['\"]([^'\"]+)['\"][^}]*?name:\s*['\"]([^'\"]+)['\"][^}]*?\}", char_array):
            c_id = c_match.group(1)
            c_name = c_match.group(2)
            registry[game_id]['chars'][c_id] = c_name

    print("Scanning public/data/...")
    file_system = {} # {game_id: [char_id1, char_id2]}
    
    for root, dirs, files in os.walk('public/data'):
        # Skip the root folder itself
        if root == 'public/data':
            continue
            
        game_id = os.path.basename(root)
        file_system[game_id] = []
        for file in files:
            if file.endswith('.json'):
                char_id = file[:-5]
                file_system[game_id].append(char_id)

    missing_files = [] # Characters in registry but missing JSON
    orphaned_files = [] # JSON files not in registry
    untracked_games = [] # Game folders not in registry
    malformed_json = [] # JSON files that fail to parse

    print("Comparing...")
    
    # 1. Check Registry -> FileSystem (Missing files)
    for game_id, game_data in registry.items():
        if game_id not in file_system:
            # Whole game folder is missing
            for char_id in game_data['chars']:
                missing_files.append(f"- {game_id}/{char_id}.json (Missing Folder)")
            continue
            
        for char_id in game_data['chars']:
            if char_id not in file_system[game_id]:
                missing_files.append(f"- {game_id}/{char_id}.json")

    # 2. Check FileSystem -> Registry (Orphans, Untracked, Malformed)
    for game_id, char_ids in file_system.items():
        if game_id not in registry:
            untracked_games.append(f"- {game_id}/ ({len(char_ids)} files)")
            # All these files are orphans
            for char_id in char_ids:
                orphaned_files.append(f"- {game_id}/{char_id}.json (Untracked Game)")
        else:
            for char_id in char_ids:
                if char_id not in registry[game_id]['chars']:
                    orphaned_files.append(f"- {game_id}/{char_id}.json")
                    
        # Check JSON validity for every file
        for char_id in char_ids:
            path = f"public/data/{game_id}/{char_id}.json"
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    if not isinstance(data, dict):
                        malformed_json.append(f"- {game_id}/{char_id}.json (Root is not an object)")
                    elif 'movesList' not in data and 'character' not in data:
                        # Be a bit lenient, but usually movesList is required
                        malformed_json.append(f"- {game_id}/{char_id}.json (Missing 'movesList' key)")
            except Exception as e:
                malformed_json.append(f"- {game_id}/{char_id}.json (Parse Error: {str(e)})")

    # Generate Report
    print("Writing Report...")
    with open('data_health_report.md', 'w', encoding='utf-8') as f:
        f.write("# Data Health & Junk Report\n\n")
        f.write("Deep comparison between `src/games.ts` (Registry) and `public/data/` (File System).\n\n")
        
        f.write(f"## 1. Untracked Game Folders ({len(untracked_games)})\n")
        f.write("*Folders in `public/data/` that are entirely missing from `src/games.ts`.*\n")
        if untracked_games:
            f.write("\n".join(untracked_games) + "\n\n")
        else:
            f.write("> No untracked game folders found.\n\n")
            
        f.write(f"## 2. Orphaned / Junk JSON Files ({len(orphaned_files)})\n")
        f.write("*Files in `public/data/` that have no matching character entry in `src/games.ts`.*\n")
        if orphaned_files:
            f.write("\n".join(sorted(orphaned_files)) + "\n\n")
        else:
            f.write("> No orphaned files found.\n\n")
            
        f.write(f"## 3. Missing JSON Files ({len(missing_files)})\n")
        f.write("*Characters registered in `src/games.ts` but missing their corresponding `.json` file.*\n")
        if missing_files:
            f.write("\n".join(sorted(missing_files)) + "\n\n")
        else:
            f.write("> No missing files found.\n\n")
            
        f.write(f"## 4. Malformed JSON / Schema Issues ({len(malformed_json)})\n")
        f.write("*Files that either failed to parse or are missing standard schemas like `movesList`.*\n")
        if malformed_json:
            f.write("\n".join(sorted(malformed_json)) + "\n\n")
        else:
            f.write("> All JSON files are valid and well-formed.\n\n")
            
    print("Done! Saved to data_health_report.md")

if __name__ == '__main__':
    main()
