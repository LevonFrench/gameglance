import os
import json

dir_path = 'public/data/mortal-kombat-1/'

def remove_stage_fatalities():
    for filename in os.listdir(dir_path):
        if not filename.endswith('.json') or filename == '_roster.json' or filename == 'system.json':
            continue
            
        filepath = os.path.join(dir_path, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        if 'movesList' not in data:
            continue
            
        original_length = len(data['movesList'])
        data['movesList'] = [m for m in data['movesList'] if 'stage fatality' not in m.get('name', '').lower()]
        
        if len(data['movesList']) != original_length:
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)
            print(f"Removed Stage Fatality from {filename}")

if __name__ == "__main__":
    remove_stage_fatalities()
    print("Done removing Stage Fatalities.")
