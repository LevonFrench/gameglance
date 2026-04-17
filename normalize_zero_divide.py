import json
import glob
import re

dir_map = {
    'down': '2',
    'down-forward': '3',
    'forward': '6',
    'down-back': '1',
    'back': '4',
    'up': '8',
    'up-forward': '9',
    'up-back': '7'
}

for file in glob.glob('public/data/zero-divide-2-the-secret-wish/*.json'):
    with open(file, 'r') as f:
        data = json.load(f)
    
    modified = False
    for move in data.get('movesList', []):
        if 'inputs' in move:
            # Array format like ["down", "down-forward", "forward", "P"]
            input_str = ""
            for token in move['inputs']:
                if token in dir_map:
                    input_str += dir_map[token]
                elif token == "D": # Sometimes 'D' is down? But usually numpad. Wait, in hypershell it had 'down', 'D'. Maybe D is an attack button?
                    input_str += "D"
                else:
                    input_str += token
            move['input'] = input_str
            del move['inputs']
            modified = True
            
        elif 'input' in move and isinstance(move['input'], str):
            # String format like "P, 8, P" or "236P"
            original = move['input']
            # Remove commas and spaces
            cleaned = re.sub(r'[\s,]+', '', original)
            if cleaned != original:
                move['input'] = cleaned
                modified = True
                
    if modified:
        with open(file, 'w') as f:
            json.dump(data, f, indent=2)
        print(f"Normalized {file}")
