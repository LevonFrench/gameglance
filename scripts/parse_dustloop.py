import json
import os
import uuid

raw_file = 'scratch/dustloop_raw_full.json'
output_dir = 'public/data/guilty-gear-strive'

os.makedirs(output_dir, exist_ok=True)

with open(raw_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

moves = data.get('cargoquery', [])

characters = {}

# type map
type_map = {
    'normal': 'Normal Moves',
    'special': 'Special Moves',
    'super': 'Overdrives',
    'other': 'System'
}

for item in moves:
    move = item.get('title', {})
    chara = move.get('chara')
    if not chara: continue
    
    chara_id = chara.lower().replace('.', '').replace(' ', '-').replace(':', '').replace("'", "")
    if chara_id not in characters:
        characters[chara_id] = {
            'name': chara,
            'character': chara_id,
            'game': 'Guilty Gear -Strive-',
            'movesList': []
        }
    
    name = move.get('name')
    inp = move.get('input')
    if not name: name = inp
    
    # Just clean up the input string a bit for GlyphSequence, but preserve it as a string
    # E.g. "236P" is fine. We can just use the original string.
    clean_input = str(inp).strip()
    
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
        'type': type_map.get(move.get('type', 'other'), 'System')
    }
    characters[chara_id]['movesList'].append(move_obj)

for chara_id, chara_data in characters.items():
    out_path = os.path.join(output_dir, f"{chara_id}.json")
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(chara_data, f, indent=2)

print(f"Parsed {len(characters)} characters with correct SF6 schema!")
