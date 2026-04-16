import glob, json, re

numpad_map = {
    '1': 'down-back',
    '2': 'down',
    '3': 'down-forward',
    '4': 'back',
    '5': 'neutral',
    '6': 'forward',
    '7': 'up-back',
    '8': 'up',
    '9': 'up-forward'
}

def split_numpad(input_str):
    res = []
    i = 0
    # Special check: if the string contains '0' or is just a regular word containing a number (like "Level 2")
    # we don't want to blindly parse it. Most numpad notations like "236P" or "236236K" don't have spaces or letters scattered inside the numbers.
    # We will only parse if all digits in the string map to numpad_map.
    
    # If it length > 10, likely not a strict numpad motion.
    if len(input_str) > 15:
        return [input_str]
        
    for c in input_str:
        if c.isdigit() and c not in numpad_map:
            # Contains '0', so skip
            return [input_str]

    while i < len(input_str):
        c = input_str[i]
        if c in numpad_map:
            res.append(numpad_map[c])
        else:
            if c.isalpha() or c in ['+', '-']:
                # Group alphabetic characters together or stand-alone
                buf = c
                while i + 1 < len(input_str) and (input_str[i+1].isalpha() or input_str[i+1] in ['+', '-']):
                    buf += input_str[i+1]
                    i += 1
                res.append(buf)
            else:
                res.append(c)
        i += 1
    return [r for r in res if r] # filter empties

jsons = glob.glob('public/data/**/*.json', recursive=True)
count = 0
for f in jsons:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            data = json.load(file)
            
        changed = False
        
        for m in data.get('movesList', []):
            new_inputs = []
            for inp in m.get('inputs', []):
                if isinstance(inp, str) and any(char.isdigit() for char in inp):
                    new_inp_arr = split_numpad(inp)
                    # if split returned something different
                    if len(new_inp_arr) != 1 or new_inp_arr[0] != inp:
                        new_inputs.extend(new_inp_arr)
                        changed = True
                    else:
                        new_inputs.append(inp)
                else:
                    new_inputs.append(inp)
                    
            if changed:
                m['inputs'] = new_inputs

        if changed:
            with open(f, 'w', encoding='utf-8') as file:
                json.dump(data, file, indent=2)
            count += 1
    except Exception as e:
        pass

print(f"Fixed numpad inputs for {count} json files across all games!")
