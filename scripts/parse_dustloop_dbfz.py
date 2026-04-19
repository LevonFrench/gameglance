import json
import os
import uuid

raw_file = 'scratch/dustloop_dbfz_raw.json'
output_dir = 'public/data/dragon-ball-fighterz'

os.makedirs(output_dir, exist_ok=True)

with open(raw_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

moves = data.get('cargoquery', [])

characters = {}

# type map for DBFZ
type_map = {
    'normal': 'Normal Moves',
    'unique': 'Normal Moves',
    'special': 'Special Moves',
    'super': 'Supers',
    'assist': 'Assists',
    'assis;;t': 'Assists',
    'absorbed': 'System',
    'other': 'System'
}

for item in moves:
    move = item.get('title', {})
    chara = move.get('chara')
    if not chara: continue
    
    chara_id = chara.lower().replace('.', '').replace(' ', '-').replace(':', '').replace("'", "").replace("(", "").replace(")", "")
    if chara_id not in characters:
        characters[chara_id] = {
            'name': chara,
            'character': chara_id,
            'game': 'Dragon Ball FighterZ',
            'movesList': []
        }
    
    name = move.get('name')
    inp = move.get('input')
    if not name: name = inp
    
    clean_input = str(inp).strip()
    
    # Try to map type gracefully
    raw_type = move.get('type', 'other')
    mapped_type = 'System'
    if raw_type:
        mapped_type = type_map.get(raw_type.lower().strip(), 'System')
        
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
        'type': mapped_type
    }
    characters[chara_id]['movesList'].append(move_obj)

for chara_id, chara_data in characters.items():
    out_path = os.path.join(output_dir, f"{chara_id}.json")
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(chara_data, f, indent=2)

print(f"Parsed {len(characters)} DBFZ characters with correct SF6 schema!")

# Create _roster.json
roster = []
for chara_id, chara_data in characters.items():
    roster.append({
        'id': chara_id,
        'name': chara_data['name']
    })

with open(os.path.join(output_dir, '_roster.json'), 'w', encoding='utf-8') as f:
    json.dump(roster, f, indent=2)

print("Created _roster.json for DBFZ")
