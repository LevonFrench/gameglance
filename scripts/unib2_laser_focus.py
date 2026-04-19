import os
import json

DATA_DIR = "public/data/under-night-in-birth-ii-[sysceles]"

def main():
    if not os.path.exists(DATA_DIR):
        print(f"Directory {DATA_DIR} not found.")
        return
        
    for filename in os.listdir(DATA_DIR):
        if not filename.endswith('.json') or filename == '_roster.json':
            continue
            
        filepath = os.path.join(DATA_DIR, filename)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except Exception as e:
                print(f"Error reading {filename}: {e}")
                continue
                
        if 'movesList' not in data:
            continue
            
        new_moves = []
        for move in data['movesList']:
            # Strip out the anime normals injected by previous script
            if move.get('type') == 'normal' and move.get('name') in ['Punch', 'Kick', 'Slash', 'Heavy Slash', 'Dust']:
                continue
            # Strip out the anime throws
            if move.get('type') == 'throw' and move.get('name') in ['Forward Throw', 'Back Throw']:
                continue
            new_moves.append(move)
            
        # Re-inject the correct UNIB2 normals
        unib_normals = [
            {"id": "n_0", "name": "Light Attack", "type": "normal", "input": "A"},
            {"id": "n_1", "name": "Medium Attack", "type": "normal", "input": "B"},
            {"id": "n_2", "name": "Heavy Attack", "type": "normal", "input": "C"},
            {"id": "n_3", "name": "EX / Action", "type": "normal", "input": "D"},
            {"id": "t_0", "name": "Forward Throw", "type": "throw", "input": "A+D"},
            {"id": "t_1", "name": "Back Throw", "type": "throw", "input": "4A+D"}
        ]
        
        # Ensure we don't have ID collisions if n_0 already exists from something else
        existing_ids = {m.get('id') for m in new_moves}
        for sm in unib_normals:
            safe_id = sm['id']
            counter = 0
            while safe_id in existing_ids:
                safe_id = f"{sm['id']}_{counter}"
                counter += 1
            sm['id'] = safe_id
            new_moves.append(sm)
            existing_ids.add(safe_id)
            
        data['movesList'] = new_moves
        
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
            
        print(f"Fixed {filename}")

if __name__ == "__main__":
    main()
