import os
import json
import re

dir_path = 'public/data/mortal-kombat-1/'
files = [f for f in os.listdir(dir_path) if f.endswith('.json') and f != 'system.json']

NUMPAD_WORDS = {
    '1': 'db',
    '2': 'd',
    '3': 'df',
    '4': 'b',
    '6': 'f',
    '7': 'ub',
    '8': 'u',
    '9': 'uf'
}

def convert_numpad(input_str):
    # If the input contains numbers and looks like a numpad sequence
    # For example: 2622, 6463
    match = re.search(r'^([1-9]{2,})', input_str)
    if match:
        digits = match.group(1)
        words = []
        for digit in digits:
            if digit in NUMPAD_WORDS:
                words.append(NUMPAD_WORDS[digit])
            else:
                words.append(digit)
        
        replacement = ' '.join(words)
        return input_str.replace(digits, replacement, 1)
    return input_str

for f in files:
    filepath = os.path.join(dir_path, f)
    with open(filepath, 'r', encoding='utf-8') as file:
        data = json.load(file)
        
    modified = False
    if 'movesList' in data:
        for move in data['movesList']:
            if move.get('type') == 'finisher':
                original = move.get('input', '')
                new_input = convert_numpad(original)
                if new_input != original:
                    move['input'] = new_input
                    modified = True
                    print(f"[{f}] Converted {original} -> {new_input}")

    if modified:
        with open(filepath, 'w', encoding='utf-8') as file:
            json.dump(data, file, indent=2)

print("Done converting fatalities.")
