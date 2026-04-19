import os
import json

dir_path = 'public/data/mortal-kombat-1'

for filename in os.listdir(dir_path):
    if not filename.endswith('.json') or filename == '_roster.json' or filename == 'system.json':
        continue
        
    filepath = os.path.join(dir_path, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    moves = data.get('movesList', [])
    moves_str = ', '.join([m.get('name', 'Unknown') for m in moves[:3]])
    print(f"{filename.replace('.json', '')}: {moves_str}")
