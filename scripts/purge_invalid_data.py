import os
import re

def main():
    ts_file_path = 'src/games.ts'
    data_dir = 'public/data'

    # 1. Parse games.ts to build a strict registry map: { gid: set(cids) }
    with open(ts_file_path, 'r', encoding='utf-8') as f:
        ts_content = f.read()

    registry = {}
    
    # Extract each GameDefinition block
    blocks = re.findall(r'(\n\s*\{\s*\n\s*id:\s*[\'"][^\'"]+[\'"].*?tabs:\s*\[.*?\]\s*\n\s*\})', ts_content, re.DOTALL)
    for b in blocks:
        id_m = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', b)
        if id_m:
            gid = id_m.group(1).strip()
            
            # Find the characters array
            char_block_match = re.search(r'characters:\s*\[([\s\S]*?)\]', b)
            valid_cids = set()
            if char_block_match:
                # Find all { id: '...' } inside the block
                char_entries = re.findall(r'id:\s*[\'"]([^\'"]+)[\'"]', char_block_match.group(1))
                for cid in char_entries:
                    valid_cids.add(cid.strip())
            
            registry[gid] = valid_cids

    if not registry:
        print("Failed to parse registry from games.ts")
        return

    # 2. Iterate public/data/
    total_removed = 0
    total_kept = 0
    
    if not os.path.exists(data_dir):
        print(f"{data_dir} does not exist.")
        return

    for game_folder in os.listdir(data_dir):
        game_path = os.path.join(data_dir, game_folder)
        if not os.path.isdir(game_path):
            continue
            
        gid = game_folder
        if gid not in registry:
            import shutil
            print(f"Removing unmapped game folder entirely: {gid}")
            shutil.rmtree(game_path)
            continue
            
        valid_cids = registry[gid]
        
        # Scan character jsons
        for char_file in os.listdir(game_path):
            if not char_file.endswith('.json'):
                continue
                
            cid = char_file[:-5] # remove .json
            file_path = os.path.join(game_path, char_file)
            
            if cid not in valid_cids:
                # Invalid character found
                print(f"Removing invalid character: {gid} / {char_file}")
                os.remove(file_path)
                total_removed += 1
            else:
                total_kept += 1

    print("=" * 40)
    print(f"Data directory successfully pruned!")
    print(f"Removed {total_removed} invalid character files.")
    print(f"Kept {total_kept} valid character files.")

if __name__ == "__main__":
    main()
