import os
import json

dbfz_dir = 'public/data/dragon-ball-fighterz'

type_map = {
    'special moves': 'Special Moves',
    'special': 'Special Moves',
    'supers': 'Super Combos',
    'super': 'Super Combos',
    'assists': 'Unique Attacks',
    'assist': 'Unique Attacks',
    'unique': 'Unique Attacks',
    'system': 'Common Moves',
    'other': 'Common Moves',
    'normal': 'Normal Moves',
    'throw': 'Throws'
}

garbage_names = ['Punch', 'Kick', 'Slash', 'Heavy Slash', 'Dust', 'Forward Throw', 'Back Throw']

count = 0
for filename in os.listdir(dbfz_dir):
    if not filename.endswith('.json') or filename == '_roster.json':
        continue
        
    filepath = os.path.join(dbfz_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    if 'movesList' not in data:
        continue
        
    legacy_moves = data.get('movesList', [])
    modern_moves = data.get('moves', {})
    
    # Initialize tabs if they don't exist
    for move in legacy_moves:
        raw_type = move.get('type', 'other').lower().strip()
        mapped_tab = type_map.get(raw_type, 'Common Moves')
        
        name = move.get('name', '')
        if name in garbage_names and move.get('input') in ['P', 'K', 'S', 'H', 'D', '6D', '4D']:
            continue # Skip legacy guilty gear garbage
            
        if mapped_tab not in modern_moves:
            modern_moves[mapped_tab] = []
            
        # Avoid duplicate pushes
        existing_ids = [m.get('id') for m in modern_moves[mapped_tab]]
        if move.get('id') not in existing_ids:
            modern_moves[mapped_tab].append(move)
            
    data['moves'] = modern_moves
    del data['movesList'] # Remove legacy schema
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
        
    count += 1
    
print(f"Migrated {count} DBFZ character files successfully!")
