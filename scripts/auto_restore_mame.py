import json, os, re, string

def clean_name(name):
    return re.sub(r'[^a-zA-Z0-9]', '', name.lower())

def translate_inputs(raw_str):
    mapping = {
        '_1': 'down-back', '_2': 'down', '_3': 'down-forward',
        '_4': 'back', '_5': 'neutral', '_6': 'forward',
        '_7': 'up-back', '_8': 'up', '_9': 'up-forward',
        '_+': '', 
        '_P': 'P', '_K': 'K',
        '^E': 'LP', '^F': 'MP', '^G': 'HP',
        '^H': 'LK', '^I': 'MK', '^J': 'HK',
        '_S': 'START', '^s': 'SELECT',
        '_A': 'P', '_B': 'K', '_C': 'HP', '_D': 'HK',
        ' / ': ' or '
    }

    res = raw_str
    for k, v in mapping.items():
        if k == '_+':
            res = res.replace(k, '')
        elif k == ' / ':
            res = res.replace(k, ' or ')
        else:
            if v: res = res.replace(k, f" {v} ")

    res = re.sub(r'\s+', ' ', res).strip()
    split_res = [x for x in res.split(' ') if x]
    return split_res

def check_mame():
    print("Loading MAME data...")
    from parse_command_dat import parse_dat
    mame_games = parse_dat('scratch/mame/dats/command.dat')
    
    with open('games_dump.json', 'r', encoding='utf-8') as f:
        all_games = json.load(f)

    upgraded = 0
    
    # Pre-tokenize mame game titles for speed
    for mg in mame_games:
        mg['toks'] = set(re.findall(r'\w+', mg['title'].lower()))
        for c in mg['characters']:
            c['toks'] = set(re.findall(r'\w+', c['name'].lower()))

    for root, dirs, files in os.walk('public/data'):
        for file in files:
            if not file.endswith('.json'): continue
            
            path = os.path.join(root, file)
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
            except: continue
                
            gid = os.path.basename(root)
            cid = file.replace('.json', '')
            
            ml = data.get('movesList', [])
            is_weak = False
            if len(ml) <= 3:
                is_weak = True
                
            for m in ml:
                if not isinstance(m, dict): continue
                name_l = str(m.get('name', '')).lower()
                id_l = str(m.get('id', '')).lower()
                if 'generic' in id_l or 'unknown' in id_l or 'basic attack' in name_l or 'special attack' in name_l:
                    is_weak = True
                    
            if not is_weak:
                continue
                
            ts_game = next((g for g in all_games if g['id'] == gid), None)
            if not ts_game: continue
            
            gtok = set(re.findall(r'\w+', ts_game['name'].lower()))
            best_mame = None
            best_score = 0
            for mg in mame_games:
                intersect = len(gtok.intersection(mg['toks']))
                if intersect > best_score and intersect >= len(gtok) - 1:
                    best_mame = mg
                    best_score = intersect
                    
            if not best_mame: continue
            
            cname = data.get('character', cid)
            cname_clean = clean_name(str(cname))
            
            best_mchar = None
            for mc in best_mame['characters']:
                if clean_name(str(mc['name'])) == cname_clean:
                    best_mchar = mc
                    break
                    
            if not best_mchar:
                ctok = set(re.findall(r'\w+', str(cname).lower()))
                for mc in best_mame['characters']:
                    if ctok.intersection(mc['toks']) and len(ctok.intersection(mc['toks'])) > best_score:  
                        if len(ctok.intersection(mc['toks'])) >= len(ctok) - 1:
                            best_mchar = mc
                            break
                        
            if best_mchar and best_mchar['moves']:
                print(f"MAME upgraded >> [{ts_game['name']}] {cname} ({len(best_mchar['moves'])} moves)")
                new_moves = []
                for mm in best_mchar['moves']:
                    new_moves.append({
                        "id": clean_name(str(mm['name'])),
                        "name": mm['name'],
                        "type": mm['type'],
                        "inputs": translate_inputs(mm['raw_input'])
                    })
                
                data['movesList'] = new_moves
                with open(path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2)
                upgraded += 1
                
    print(f"Total weak characters upgraded via MAME: {upgraded}")

if __name__ == "__main__":
    check_mame()
