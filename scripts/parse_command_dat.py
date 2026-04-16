import json, os, re, string

# We will parse command.dat into a structured python dict
def parse_dat(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    games = []
    
    # Split by $info=
    blocks = content.split('$info=')
    for block in blocks[1:]:
        lines = block.split('\n')
        info_line = lines[0]
        
        # Next line is $cmd or similar
        # Find the title (usually the first non-empty line after $cmd)
        title = ""
        for i, line in enumerate(lines):
            if line.strip() == '$cmd':
                if i + 1 < len(lines):
                    title = lines[i+1].split('©')[0].strip()
                break
                
        if not title: continue
        
        # Characters are separated by - CHAR NAME -
        chars = []
        current_char = None
        
        # Regex for character header: ^- (.*?) -$
        char_pattern = re.compile(r'^- ([A-Za-z0-9 \.\-\']+?) -$')
        
        
        for line in lines:
            line = line.strip()
            if not line: continue
            
            # Check if it's a character header
            m = char_pattern.match(line)
            if m:
                # ignore - CONTROLS -, - HOW TO PLAY -, - BASIC MOVES -
                header = m.group(1).lower()
                if header not in ['controls', 'how to play', 'basic moves', 'common commands', 'system', 'rules', 'items', 'cheats']:
                    current_char = {"name": m.group(1).title(), "moves": []}
                    chars.append(current_char)
                else:
                    current_char = None
                continue
                
            if current_char:
                # Parse move: usually starts with special chars like _@, _(, _A
                # e.g. _@ Hadou Ken                                                             _2_3_6_+_P
                if line.startswith('_(') or line.startswith('_@') or line.startswith('_A') or line.startswith('_)') or line.startswith('_-'):
                    # The first two chars are category
                    cat_char = line[:2]
                    cat_map = {
                        '_(': 'throw',
                        '_)': 'normal',  # command move
                        '_@': 'special',
                        '_A': 'super',
                        '_-': 'special'
                    }
                    mtype = cat_map.get(cat_char, 'special')
                    
                    # rest of line: move name and inputs separated by many spaces
                    rest = line[2:].strip()
                    parts = re.split(r'\s{3,}', rest)
                    if len(parts) >= 2:
                        mname = parts[0]
                        minputs = parts[-1]
                        
                        current_char["moves"].append({
                            "name": string.capwords(mname),
                            "type": mtype,
                            "raw_input": minputs
                        })

        if chars:
            games.append({"title": title, "characters": chars})
            
    return games

def clean_name(name):
    return re.sub(r'[^a-zA-Z0-9]', '', name.lower())

def translate_inputs(raw_str):
    mapping = {
        '_1': 'down-back', '_2': 'down', '_3': 'down-forward',
        '_4': 'back', '_5': 'neutral', '_6': 'forward',
        '_7': 'up-back', '_8': 'up', '_9': 'up-forward',
        '_+': '', # ignored
        '_P': 'P', '_K': 'K',
        '^E': 'LP', '^F': 'MP', '^G': 'HP',
        '^H': 'LK', '^I': 'MK', '^J': 'HK',
        '_S': 'START', '^s': 'SELECT',
        ' / ': ' or '
    }
    
    # We want to tokenize it by _X or ^X since MAME codes are 2 chars
    # However there might be raw text
    res = []
    i = 0
    while i < len(raw_str):
        if i+1 < len(raw_str) and (raw_str[i] in ['_', '^']):
            code = raw_str[i:i+2]
            if code in mapping:
                val = mapping[code]
                if val: res.append(val)
            else:
                res.append(code) # unknown code
            i += 2
        else:
            # Handle standard " / " or just arbitrary chars
            if raw_str[i:i+3] == " / ":
                # res.append("or")
                i += 3
            else:
                if raw_str[i] != ' ':
                    res.append(raw_str[i])
                i += 1
                
    return res

if __name__ == "__main__":
    games = parse_dat('scratch/mame/dats/command.dat')
    print(f"Parsed {len(games)} games from command.dat!")
    
    # Dump it so we can inspect
    with open('scratch/mame/mame_parsed.json', 'w', encoding='utf-8') as f:
        json.dump(games[:5], f, indent=2)
