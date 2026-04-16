import os
import json
import re
from difflib import get_close_matches

def slugify(v):
    return re.sub(r'[^a-z0-9-]', '', str(v).lower().replace(' ', '-').replace('_', '-'))

def classify_type(array_name):
    low = str(array_name).lower()
    if 'normal' in low: return 'normal'
    if 'super' in low or 'distortion' in low or 'critical' in low or 'meteor' in low: return 'super'
    if 'special' in low or 'skill' in low or 'blast' in low: return 'special'
    if 'throw' in low or 'grab' in low: return 'throw'
    if 'unique' in low: return 'unique'
    return 'common'

def extract_moves(obj):
    moves = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k in ['name', 'character', 'game', 'id', 'description', 'bio']: continue
            if isinstance(v, list):
                for item in v:
                    if isinstance(item, dict) and ('input' in item or 'command' in item or 'numpad_input' in item):
                        moves.append({
                            'name': item.get('name', item.get('move_name', '')),
                            'input': item.get('input', item.get('command', item.get('numpad_input', ''))),
                            'type': item.get('type', item.get('move_type', classify_type(k))).lower()
                        })
                    elif isinstance(item, str):
                        if ':' in item:
                            parts = item.split(':', 1)
                            if len(parts) == 2:
                                moves.append({'name': parts[1].strip(), 'input': parts[0].strip(), 'type': classify_type(k)})
                        elif '-' in item and not item.startswith('-'):
                            parts = item.split('-', 1)
                            if len(parts) == 2:
                                moves.append({'name': parts[1].strip(), 'input': parts[0].strip(), 'type': classify_type(k)})
                        elif '(' in item and ')' in item:
                            n = item.split('(')[0].strip()
                            i = item.split('(')[1].replace(')', '').strip()
                            moves.append({'name': n, 'input': i, 'type': classify_type(k)})
            elif isinstance(v, dict):
                if 'input' in v or 'command' in v or 'numpad_input' in v:
                    moves.append({
                        'name': v.get('name', v.get('move_name', '')),
                        'input': v.get('input', v.get('command', v.get('numpad_input', ''))),
                        'type': v.get('type', v.get('move_type', classify_type(k))).lower()
                    })
                else:
                    moves.extend(extract_moves(v))
    return moves

# 1. Parse src/games.ts index
with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

index = []
game_chunks = ts_txt.split('characters: [')
for i in range(1, len(game_chunks)):
    prev_chunk = game_chunks[i-1]
    curr_chunk = game_chunks[i]
    
    id_match = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", prev_chunk)
    name_match = re.findall(r"name:\s*(['\"])(.*?)\1", prev_chunk)
    
    if not id_match or not name_match: continue
    
    gid = id_match[-1]
    gname = name_match[-1][1]
    
    char_array_end = curr_chunk.find(']')
    char_array = curr_chunk[:char_array_end] if char_array_end != -1 else curr_chunk
    
    chars = []
    for c_match in re.finditer(r"id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*(['\"])(.*?)\2", char_array):
        cid = c_match.group(1)
        cname = c_match.group(3).replace(' (Coming Soon)', '')
        chars.append({'cid': cid, 'cname': cname})
        
    index.append({'gid': gid, 'gname': gname, 'chars': chars})

print(f"Loaded {len(index)} games from src/games.ts")
# Create dictionary for quick name matching
game_names = {g['gname'] : g for g in index}
game_names_lower = {g['gname'].lower() : g for g in index}

# 2. Iterate faqs/old
files = [f for f in os.listdir('faqs/old') if f.endswith('.json')]
total_written = 0

for file in files:
    path = os.path.join('faqs/old', file)
    try:
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except:
        continue
        
    # Determine base game name
    t_raw = data.get('game_metadata', {}).get('title', data.get('game_title', data.get('title', data.get('game', ''))))
    if not t_raw:
        t_raw = file.replace('.json', '').replace(' Complete Move List', '').replace(' Exhaustive JSON Move List', '').replace('_Move_List', '')
    
    t_raw = t_raw.replace('_', ' ')
    
    # Fuzzy match game
    target_game = None
    if t_raw in game_names: target_game = game_names[t_raw]
    elif t_raw.lower() in game_names_lower: target_game = game_names_lower[t_raw.lower()]
    else:
        # Try difflib on names
        matches = get_close_matches(t_raw, list(game_names.keys()), n=1, cutoff=0.6)
        if matches:
            target_game = game_names[matches[0]]
        else:
            # Try matching by gid against the slugified filename
            sgid = slugify(t_raw)
            for g in index:
                if g['gid'] == sgid or g['gid'] in sgid or sgid in g['gid']:
                    target_game = g
                    break
                    
    if not target_game:
        continue
        
    roster = data.get('roster', data.get('characters', data.get('fighters', [])))
    if isinstance(roster, dict):
        roster = [{'character': k, **v} for k,v in roster.items() if isinstance(v, dict)]
        
    if isinstance(data, list) and len(data) > 0 and ('name' in data[0] or 'character' in data[0]):
        roster = data
        
    if not isinstance(roster, list): continue
    
    # We have target_game['chars'] List containing cid and cname
    master_cnames = {c['cname']: c for c in target_game['chars']}
    master_cnames_lower = {c['cname'].lower(): c for c in target_game['chars']}
    
    gid = target_game['gid']
    
    for char in roster:
        if not isinstance(char, dict): continue
        cname = char.get('character', char.get('name', char.get('character_name', '')))
        if not cname: continue
        
        target_char = None
        if cname in master_cnames: target_char = master_cnames[cname]
        elif cname.lower() in master_cnames_lower: target_char = master_cnames_lower[cname.lower()]
        else:
            # Fuzzy match character
            c_matches = get_close_matches(cname, list(master_cnames.keys()), n=1, cutoff=0.5)
            if c_matches:
                target_char = master_cnames[c_matches[0]]
            else:
                # Fuzzy match by parts, e.g. "Terry" vs "Terry Bogard"
                for tc in target_game['chars']:
                    if cname.lower() in tc['cname'].lower() or tc['cname'].lower() in cname.lower():
                        target_char = tc
                        break
                        
        if not target_char:
            # If still no match, rely on slug
            ccid = slugify(cname)
            for tc in target_game['chars']:
                if tc['cid'] == ccid:
                    target_char = tc
                    break
                    
        if not target_char:
            print(f"Skipping {cname} in {file}: Could not fuzzy match to any character in {target_game['gname']}")
            continue
            
        cid = target_char['cid']
        
        movesList = []
        if isinstance(char.get('moves'), list): movesList.extend(char.get('moves'))
        if isinstance(char.get('movesList'), list): movesList.extend(char.get('movesList'))
        if isinstance(char.get('move_list'), list):
            for m in char['move_list']:
                movesList.append({
                    'name': m.get('move_name', ''),
                    'input': m.get('numpad_input', m.get('input', m.get('command', ''))),
                    'type': m.get('move_type', 'common').lower()
                })
                
        movesList.extend(extract_moves(char))
        
        # Dedupe
        seen = set()
        deduped = []
        for m in movesList:
            if not isinstance(m, dict): continue
            n = m.get('name')
            if n and n not in seen:
                seen.add(n)
                if 'type' not in m or not m['type']: m['type'] = classify_type(n)
                deduped.append(m)
                
        if len(deduped) >= 2:
            os.makedirs(f"public/data/{gid}", exist_ok=True)
            out_path = f"public/data/{gid}/{cid}.json"
            out_data = {
                "name": target_char['cname'],
                "character": target_char['cname'],
                "game": target_game['gname'],
                "movesList": deduped
            }
            with open(out_path, 'w', encoding='utf-8') as f:
                json.dump(out_data, f, indent=2)
            total_written += 1

print(f"Successfully processed and fuzzy matched {total_written} characters!")
