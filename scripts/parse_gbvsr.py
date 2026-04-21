import json
import os
import uuid

raw_file = 'dustloop_gbvsr_raw.json'
output_dir = 'public/data/granblue-fantasy-versus-rising'

os.makedirs(output_dir, exist_ok=True)

with open(raw_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

moves = data.get('cargoquery', [])
characters = {}

type_map = {
    'normal': 'Normal Moves',
    'special': 'Special Moves',
    'super': 'Skybound Arts',
    'other': 'System'
}

for item in moves:
    move = item.get('title', {})
    chara = move.get('chara')
    if not chara: continue
    
    # E.g. "Avatar Belial" -> "avatar-belial"
    chara_id = chara.lower().replace('.', '').replace(' ', '-').replace(':', '').replace("'", "")
    
    if chara_id not in characters:
        characters[chara_id] = {
            'name': chara,
            'character': chara_id,
            'game': 'Granblue Fantasy Versus: Rising',
            'movesList': []
        }
    
    name = move.get('name')
    inp = move.get('input')
    if not name: name = inp
    
    # Filter out generic normals that dustloop includes but we want to standardize
    if move.get('type') == 'normal' and name in ['Punch', 'Kick', 'Slash', 'Heavy Slash', 'Dust', 'Light Attack', 'Medium Attack', 'Heavy Attack', 'EX / Action', 'Unique Action', 'Guard', 'Skill', 'L', 'M', 'H', 'U']:
        continue
    if move.get('type') == 'throw' and name in ['Forward Throw', 'Back Throw', 'Throw']:
        continue
        
    clean_input = str(inp).strip()
    
    move_type_str = move.get('type', 'other')
    if name and ('Super Skybound Art' in name):
        move_type_str = 'super'
        
    move_obj = {
        'id': str(uuid.uuid4()),
        'name': name,
        'input': clean_input,
        'damage': move.get('damage', '-'),
        'frameData': {
            'startup': move.get('startup', '-'),
            'active': move.get('active', '-'),
            'recovery': move.get('recovery', '-'),
            'advantage': '-'
        },
        'guard': move.get('guard', '-'),
        'invuln': move.get('invuln', '-'),
        'type': type_map.get(move_type_str, 'System')
    }
    characters[chara_id]['movesList'].append(move_obj)

# Inject standard normals
gbvsr_normals = [
    {"name": "Light Attack", "type": "Normal Moves", "input": "L"},
    {"name": "Medium Attack", "type": "Normal Moves", "input": "M"},
    {"name": "Heavy Attack", "type": "Normal Moves", "input": "H"},
    {"name": "Unique Action", "type": "Normal Moves", "input": "U"},
    {"name": "Skill", "type": "Normal Moves", "input": "S"},
    {"name": "Guard", "type": "Normal Moves", "input": "G"},
    {"name": "Forward Throw", "type": "Normal Moves", "input": "L+U"},
    {"name": "Back Throw", "type": "Normal Moves", "input": "4L+U"}
]

for chara_id, chara_data in characters.items():
    # Prepend normals
    final_moves = []
    for norm in gbvsr_normals:
        final_moves.append({
            'id': str(uuid.uuid4()),
            'name': norm['name'],
            'input': norm['input'],
            'damage': '-',
            'frameData': {'startup': '-', 'active': '-', 'recovery': '-', 'advantage': '-'},
            'guard': '-',
            'invuln': '-',
            'type': norm['type']
        })
        
    final_moves.extend(chara_data['movesList'])
    chara_data['movesList'] = final_moves
    
    out_path = os.path.join(output_dir, f"{chara_id}.json")
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(chara_data, f, indent=2)

print(f"Parsed {len(characters)} characters for GBVSR!")
