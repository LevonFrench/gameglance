import os
import json

directory = 'public/data/marvel-toukon-fighting-souls-beta-version'

if os.path.exists(directory):
    for filename in os.listdir(directory):
        if filename.endswith('.json'):
            path = os.path.join(directory, filename)
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # Wipe the moves list
            data['movesList'] = []
            
            with open(path, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)
                
    print("Wiped moves from Marvel Toukon.")
else:
    print("Directory not found.")
