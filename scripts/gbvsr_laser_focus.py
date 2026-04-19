import os
import json

DATA_DIR = "public/data/granblue-fantasy-versus-rising"

ROSTER = [
    '2b', 'anila', 'anre', 'avatar-belial', 'beatrix', 'beelzebub', 'belial',
    'cagliostro', 'charlotta', 'djeeta', 'eustace', 'ferry', 'gran', 'grimnir',
    'katalina', 'ladiva', 'lancelot', 'lowain', 'lucilius', 'metera', 'narmaya',
    'nier', 'percival', 'sandalphon', 'seox', 'siegfried', 'soriz', 'vane',
    'vaseraga', 'versusia', 'vikala', 'vira', 'yuel', 'zeta', 'zooey'
]

def main():
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
        
    for char_id in ROSTER:
        filepath = os.path.join(DATA_DIR, f"{char_id}.json")
        
        data = {"movesList": []}
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                try:
                    data = json.load(f)
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
                    pass
                    
        if 'movesList' not in data:
            data['movesList'] = []
            
        new_moves = []
        for move in data['movesList']:
            # Strip out generic normals or incorrect names
            if move.get('type') == 'normal' and move.get('name') in ['Punch', 'Kick', 'Slash', 'Heavy Slash', 'Dust', 'Light Attack', 'Medium Attack', 'Heavy Attack', 'EX / Action', 'Unique Action', 'Guard', 'Skill']:
                continue
            if move.get('type') == 'throw' and move.get('name') in ['Forward Throw', 'Back Throw']:
                continue
            new_moves.append(move)
            
        # Re-inject the correct GBVSR normals
        gbvsr_normals = [
            {"id": "n_0", "name": "Light Attack", "type": "normal", "input": "L"},
            {"id": "n_1", "name": "Medium Attack", "type": "normal", "input": "M"},
            {"id": "n_2", "name": "Heavy Attack", "type": "normal", "input": "H"},
            {"id": "n_3", "name": "Unique Action", "type": "normal", "input": "U"},
            {"id": "n_4", "name": "Skill", "type": "normal", "input": "S"},
            {"id": "n_5", "name": "Guard", "type": "normal", "input": "G"},
            {"id": "t_0", "name": "Forward Throw", "type": "throw", "input": "L+U"},
            {"id": "t_1", "name": "Back Throw", "type": "throw", "input": "4L+U"}
        ]
        
        existing_ids = {m.get('id') for m in new_moves}
        for sm in gbvsr_normals:
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
            
        print(f"Laser focused {char_id}")

if __name__ == "__main__":
    main()
