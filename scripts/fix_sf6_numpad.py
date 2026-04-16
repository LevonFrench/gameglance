import glob, json, re

numpad_map = {
    '1': 'down-back',
    '2': 'down',
    '3': 'down-forward',
    '4': 'back',
    '6': 'forward',
    '7': 'up-back',
    '8': 'up',
    '9': 'up-forward'
}

def split_numpad(input_str):
    res = []
    i = 0
    while i < len(input_str):
        c = input_str[i]
        if c in numpad_map:
            res.append(numpad_map[c])
        else:
            # check for PP, KK or LP, MP, HP etc
            # But wait, we can just append the character or word
            # Let's collect alpha characters as one element: 'P' or 'PP'
            if c.isalpha():
                buf = c
                while i + 1 < len(input_str) and input_str[i+1].isalpha():
                    buf += input_str[i+1]
                    i += 1
                res.append(buf)
            else:
                res.append(c)
        i += 1
    return res

jsons = glob.glob('public/data/street-fighter-6/*.json')
for f in jsons:
    with open(f, 'r', encoding='utf-8') as file:
        data = json.load(file)
    changed = False
    
    for m in data.get('movesList', []):
        new_inputs = []
        for inp in m.get('inputs', []):
            if type(inp) == str and any(char.isdigit() for char in inp):
                # it's a string with digits, let's process it
                new_inp_arr = split_numpad(inp)
                new_inputs.extend(new_inp_arr)
                changed = True
            else:
                new_inputs.append(inp)
                
        # deduplicate pluses if they exist? SF6 docx has "236P" not "236+P"
        if changed:
            m['inputs'] = new_inputs

    if changed:
        with open(f, 'w', encoding='utf-8') as file:
            json.dump(data, file, indent=2)

print("Fixed SF6 numpad inputs!")
