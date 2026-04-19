import os
import json

dbfz_dir = 'public/data/dragon-ball-fighterz'

type_map_reverse = {
    'Special Moves': 'special',
    'Super Combos': 'super',
    'Unique Attacks': 'unique',
    'Common Moves': 'common',
    'Normal Moves': 'normal',
    'Throws': 'throw'
}

count = 0
for filename in os.listdir(dbfz_dir):
    if not filename.endswith('.json') or filename == '_roster.json':
        continue
        
    filepath = os.path.join(dbfz_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    moves_list = []
    
    # If the file still has movesList, we can keep it
    if 'movesList' in data:
        moves_list.extend(data['movesList'])
        
    if 'moves' in data:
        for tab, moves in data['moves'].items():
            for m in moves:
                m['type'] = type_map_reverse.get(tab, 'normal')
                moves_list.append(m)
        del data['moves']
        
    data['movesList'] = moves_list
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
        
    count += 1
    
print(f"Reverted {count} files to movesList schema!")
