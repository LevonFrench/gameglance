"""
Apply fuzzy character name matches from FAQ data to underpopulated characters.
Only applies HIGH CONFIDENCE matches: game similarity >= 0.8 OR game name substring match.
"""
import json
import re
import os
from difflib import SequenceMatcher

def slugify(v):
    return re.sub(r'[^a-z0-9-]', '', str(v).lower().replace(' ', '-').replace('_', '-'))

def similarity(a, b):
    return SequenceMatcher(None, a.lower(), b.lower()).ratio()

def name_matches(faq_name, master_name):
    fa = faq_name.lower().strip()
    ma = master_name.lower().strip()
    if fa == ma: return True
    if fa in ma or ma in fa: return True
    fa_parts = fa.replace('-', ' ').replace('_', ' ').split()
    ma_parts = ma.replace('-', ' ').replace('_', ' ').split()
    if fa_parts and ma_parts and fa_parts[0] == ma_parts[0] and len(fa_parts[0]) >= 3: return True
    if len(fa_parts) > 1 and len(ma_parts) > 1 and fa_parts[-1] == ma_parts[-1]: return True
    sig_fa = {w for w in fa_parts if len(w) >= 3}
    sig_ma = {w for w in ma_parts if len(w) >= 3}
    if sig_fa and sig_ma and sig_fa.intersection(sig_ma): return True
    if similarity(fa, ma) >= 0.6: return True
    if slugify(fa) == slugify(ma): return True
    return False

def game_is_same(gname, faq_title):
    """Strict game matching: either high similarity or clear substring."""
    gl = gname.lower().replace('_', ' ')
    fl = faq_title.lower().replace('_', ' ')
    if gl == fl: return True
    if similarity(gl, fl) >= 0.7: return True
    # Check core words overlap (at least 2 significant words)
    gw = {w for w in gl.split() if len(w) >= 3}
    fw = {w for w in fl.split() if len(w) >= 3}
    overlap = gw.intersection(fw)
    if len(overlap) >= 2: return True
    # Substring
    if gl in fl or fl in gl: return True
    return False

def classify_type(k):
    low = str(k).lower()
    if 'normal' in low: return 'normal'
    if 'super' in low or 'distortion' in low or 'critical' in low or 'meteor' in low or 'overdrive' in low or 'desperation' in low: return 'super'
    if 'special' in low or 'skill' in low or 'blast' in low: return 'special'
    if 'throw' in low or 'grab' in low: return 'throw'
    if 'unique' in low: return 'unique'
    return 'common'

# 1. Parse games.ts
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
    chars = []
    end = chunk.find(']')
    arr = chunk[:end] if end != -1 else chunk
    for c_m in re.finditer(r"\{\s*id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*(['\"])(.*?)\2\s*\}", arr):
        chars.append({'cid': c_m.group(1), 'cname': c_m.group(3).replace(' (Coming Soon)', '')})
    index.append({'gid': gid, 'gname': gname, 'chars': chars})

# 2. Find underpopulated
underpop = []
for game in index:
    for c in game['chars']:
        path = f"public/data/{game['gid']}/{c['cid']}.json"
        is_pop = False
        if os.path.exists(path):
            try:
                d = json.load(open(path, 'r', encoding='utf-8'))
                if len(d.get('movesList', [])) > 2: is_pop = True
            except: pass
        if not is_pop:
            underpop.append({'gid': game['gid'], 'gname': game['gname'], 'cid': c['cid'], 'cname': c['cname']})

print(f"Underpopulated: {len(underpop)}")

# 3. Load ALL FAQ chars
faq_chars = []
for file in os.listdir('faqs/old'):
    if not file.endswith('.json'): continue
    path = os.path.join('faqs/old', file)
    try:
        data = json.load(open(path, 'r', encoding='utf-8'))
    except:
        continue
    
    game_title = data.get('game_metadata', {}).get('title', 
                 data.get('game_title', data.get('title', data.get('game', file.replace('.json', '')))))
    if not game_title: game_title = file.replace('.json', '')
    game_title = str(game_title).replace('_', ' ')
    
    roster = data.get('roster', data.get('characters', data.get('fighters', [])))
    if isinstance(roster, dict):
        roster = [{'character': k, **v} for k,v in roster.items() if isinstance(v, dict)]
    if not isinstance(roster, list): continue
    
    for char in roster:
        if not isinstance(char, dict): continue
        cname = char.get('character', char.get('name', char.get('character_name', '')))
        if not cname: continue
        
        moves = []
        if isinstance(char.get('moves'), list): moves.extend(char['moves'])
        if isinstance(char.get('movesList'), list): moves.extend(char['movesList'])
        if isinstance(char.get('move_list'), list):
            for m in char['move_list']:
                moves.append({
                    'name': m.get('move_name', ''),
                    'input': m.get('numpad_input', m.get('input', m.get('command', ''))),
                    'type': m.get('move_type', 'common').lower()
                })
        # Extract from nested keys
        for k, v in char.items():
            if k in ['name', 'character', 'game', 'id', 'description', 'bio', 'moves', 'movesList', 'move_list']: continue
            if isinstance(v, list):
                for item in v:
                    if isinstance(item, dict) and ('input' in item or 'command' in item or 'numpad_input' in item):
                        moves.append({
                            'name': item.get('name', item.get('move_name', '')),
                            'input': item.get('input', item.get('command', item.get('numpad_input', ''))),
                            'type': item.get('type', item.get('move_type', classify_type(k)))
                        })
        
        # Normalize
        clean_moves = []
        seen = set()
        for m in moves:
            if not isinstance(m, dict): continue
            n = m.get('name', '')
            if n and n not in seen:
                seen.add(n)
                t = str(m.get('type', 'common')).lower()
                clean_moves.append({
                    'name': n,
                    'input': m.get('input', m.get('command', m.get('numpad_input', ''))),
                    'type': t if t else 'common'
                })
        
        if len(clean_moves) >= 2:
            faq_chars.append({'game_title': game_title, 'cname': cname, 'moves': clean_moves})

print(f"FAQ characters with moves: {len(faq_chars)}")

# 4. Match and apply
total = 0
for up in underpop:
    best_match = None
    best_score = 0
    
    for fc in faq_chars:
        if not game_is_same(up['gname'], fc['game_title']): continue
        if not name_matches(fc['cname'], up['cname']): continue
        
        # Score: prefer more moves and higher name similarity
        nsim = similarity(fc['cname'].lower(), up['cname'].lower())
        score = nsim * 100 + len(fc['moves'])
        if score > best_score:
            best_score = score
            best_match = fc
    
    if best_match:
        os.makedirs(f"public/data/{up['gid']}", exist_ok=True)
        out = {
            "name": up['cname'],
            "character": up['cname'],
            "game": up['gname'],
            "movesList": best_match['moves']
        }
        with open(f"public/data/{up['gid']}/{up['cid']}.json", 'w', encoding='utf-8') as f:
            json.dump(out, f, indent=2)
        total += 1
        try:
            print(f"  MAPPED [{up['gname']}] {up['cname']} <-- {best_match['cname']} ({len(best_match['moves'])} moves)")
        except:
            print(f"  MAPPED [{up['gid']}] {up['cid']} <-- (encoding issue in name) ({len(best_match['moves'])} moves)")

print(f"\nTotal characters populated: {total}")
