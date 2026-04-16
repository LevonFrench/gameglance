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

# Load src/games.ts index
with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

index = []
blocks = ts_txt.split('characters: [')

for i in range(1, len(blocks)):
    prev = blocks[i-1]
    chunk = blocks[i]
    
    id_m = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", prev)
    name_m = re.findall(r"name:\s*(['\"])(.*?)\1", prev)
    if not id_m or not name_m: continue
    
    gid = id_m[-1]
    gname = name_m[-1][1]
    
    cnames = []
    end = chunk.find(']')
    arr = chunk[:end] if end != -1 else chunk
    
    for c_m in re.finditer(r"\{\s*id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*(['\"])(.*?)\2\s*\}", arr):
        cnames.append({'cid': c_m.group(1), 'cname': c_m.group(3).replace(' (Coming Soon)', '')})
        
    index.append({'gid': gid, 'gname': gname, 'chars': cnames})

game_names = {g['gname'].lower() : g for g in index}
total_mapped_chars = 0

for file in os.listdir('faqs/old'):
    if not file.endswith('.json'): continue
    path = os.path.join('faqs/old', file)
    try:
        data = json.load(open(path, 'r', encoding='utf-8'))
    except:
        continue
        
    t_raw = data.get('game_metadata', {}).get('title', data.get('game_title', data.get('title', data.get('game', ''))))
    if not t_raw:
        t_raw = file.replace('.json', '').replace(' Complete Move List', '').replace(' Exhaustive JSON Move List', '').replace('_Move_List', '')
    
    t_raw = t_raw.lower().replace('_', ' ')
    
    # Custom mapping for Battle Monsters because their `.json` title might be mismatched
    if 'battle monsters' in t_raw: target_game = game_names.get('battle monsters')
    elif 'fatal fury' in t_raw and 'ambition' in t_raw: target_game = game_names.get('fatal fury: wild ambition')
    else:
        target_game = game_names.get(t_raw)
        if not target_game:
            matches = get_close_matches(t_raw, list(game_names.keys()), n=1, cutoff=0.6)
            if matches: target_game = game_names[matches[0]]
            
    if not target_game: continue
    
    roster = data.get('roster', data.get('characters', data.get('fighters', [])))
    if isinstance(roster, dict):
        roster = [{'character': k, **v} for k,v in roster.items() if isinstance(v, dict)]
    if isinstance(data, list) and len(data) > 0 and ('name' in data[0] or 'character' in data[0]):
        roster = data
        
    if not isinstance(roster, list): continue
    
    master_cnames = {c['cname'].lower(): c for c in target_game['chars']}
    
    for char in roster:
        if not isinstance(char, dict): continue
        cname = char.get('character', char.get('name', char.get('character_name', '')))
        if not cname: continue
        
        target_char = None
        lower_cname = cname.lower()
        
        # 1. Exact map
        if lower_cname in master_cnames:
            target_char = master_cnames[lower_cname]
            
        # 2. Hardcoded fallback rules
        if not target_char:
            for mc in master_cnames:
                # E.g. "Chilli" in "Chilli & Billy" maps to "Chilli & Pepper"
                if "chilli" in lower_cname and "chilli" in mc: target_char = master_cnames[mc]; break
                if "death" in lower_cname and "death" in mc: target_char = master_cnames[mc]; break
                # First 4 letters match (Kapuru vs Kapila)
                if len(lower_cname) >= 4 and len(mc) >= 4 and lower_cname[:4] == mc[:4]: target_char = master_cnames[mc]; break
                if lower_cname in mc or mc in lower_cname: target_char = master_cnames[mc]; break
                
        # 3. Aggressive substring fuzzy
        if not target_char:
            for mc in master_cnames:
                parts1 = lower_cname.replace('-', ' ').split()
                parts2 = mc.replace('-', ' ').split()
                if set(parts1).intersection(set(parts2)):
                    target_char = master_cnames[mc]
                    break
                    
        # 4. Difflib cutoff 0.3
        if not target_char:
            matches = get_close_matches(lower_cname, list(master_cnames.keys()), n=1, cutoff=0.3)
            if matches: target_char = master_cnames[matches[0]]
            
        if not target_char:
            print(f"[{target_game['gname']}] FAIL mapping: {cname}")
            continue
            
        # PRINT MAPPING FOR DEBUG
        print(f"[{target_game['gname']}] Mapped '{cname}' -> '{target_char['cname']}'")
            
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
            gid = target_game['gid']
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
            total_mapped_chars += 1

print(f"Successfully mapped and populated {total_mapped_chars} master characters from JSONs!")
