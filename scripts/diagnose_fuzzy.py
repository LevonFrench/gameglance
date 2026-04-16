"""
Diagnostic: For every underpopulated character, check ALL faq data files
to see if there's a character with moves that fuzzy-matches.
This catches cases where the game title matched but character names diverged,
AND cases where the game title itself didn't match but the character exists
in a differently-named FAQ file.
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
    """Check if faq_name could be a match for master_name using multiple strategies."""
    fa = faq_name.lower().strip()
    ma = master_name.lower().strip()
    
    # Exact
    if fa == ma: return True
    
    # One contains the other
    if fa in ma or ma in fa: return True
    
    # First name match: "Eiji" matches "Eiji Shinjo"
    fa_parts = fa.replace('-', ' ').replace('_', ' ').split()
    ma_parts = ma.replace('-', ' ').replace('_', ' ').split()
    if fa_parts and ma_parts and fa_parts[0] == ma_parts[0] and len(fa_parts[0]) >= 3: return True
    
    # Last name match: "Shinjo" matches "Eiji Shinjo"  
    if len(fa_parts) > 1 and len(ma_parts) > 1 and fa_parts[-1] == ma_parts[-1]: return True
    
    # Any significant word overlap (words >= 3 chars)
    sig_fa = {w for w in fa_parts if len(w) >= 3}
    sig_ma = {w for w in ma_parts if len(w) >= 3}
    if sig_fa and sig_ma and sig_fa.intersection(sig_ma): return True
    
    # Sequence similarity
    if similarity(fa, ma) >= 0.6: return True
    
    # Slug match
    if slugify(fa) == slugify(ma): return True
    
    return False

# 1. Parse src/games.ts
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

# 2. Identify underpopulated characters
underpop = []
for game in index:
    gid = game['gid']
    for c in game['chars']:
        cid = c['cid']
        path = f"public/data/{gid}/{cid}.json"
        is_pop = False
        if os.path.exists(path):
            try:
                d = json.load(open(path, 'r', encoding='utf-8'))
                if len(d.get('movesList', [])) > 2:
                    is_pop = True
            except: pass
        if not is_pop:
            underpop.append({'gid': gid, 'gname': game['gname'], 'cid': cid, 'cname': c['cname']})

print(f"Total underpopulated: {len(underpop)}")

# 3. Load ALL faq data into a flat list of (game_title, char_name, moves[])
faq_chars = []
for file in os.listdir('faqs/old'):
    if not file.endswith('.json'): continue
    path = os.path.join('faqs/old', file)
    try:
        data = json.load(open(path, 'r', encoding='utf-8'))
    except:
        # Try node-style eval for malformed JSON
        try:
            import subprocess
            result = subprocess.run(['node', '-e', f'const fs=require("fs"); try {{ const d=eval("("+fs.readFileSync("{path.replace(chr(92), "/")}", "utf8")+")"); console.log(JSON.stringify(d)); }} catch(e) {{ console.log("FAIL"); }}'], 
                capture_output=True, text=True, timeout=5)
            if result.stdout.strip() != 'FAIL':
                data = json.loads(result.stdout.strip())
            else:
                continue
        except:
            continue
    
    game_title = data.get('game_metadata', {}).get('title', 
                 data.get('game_title', data.get('title', data.get('game', file.replace('.json', '')))))
    
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
        if isinstance(char.get('move_list'), list): moves.extend(char['move_list'])
        
        # Also extract from nested keys
        for k, v in char.items():
            if k in ['name', 'character', 'game', 'id', 'description', 'bio']: continue
            if isinstance(v, list):
                for item in v:
                    if isinstance(item, dict) and ('input' in item or 'command' in item or 'numpad_input' in item):
                        moves.append(item)
        
        if len(moves) >= 2:
            faq_chars.append({'game_title': game_title, 'cname': cname, 'moves': moves, 'file': file})

print(f"Total FAQ characters with moves: {len(faq_chars)}")

# 4. For each underpopulated character, find fuzzy matches in faq_chars
matches_found = []
for up in underpop:
    # First try: match game name AND character name
    for fc in faq_chars:
        game_sim = similarity(up['gname'], fc['game_title'].replace('_', ' '))
        if game_sim < 0.4: continue  # game must be at least somewhat similar
        
        if name_matches(fc['cname'], up['cname']):
            matches_found.append({
                'master_game': up['gname'],
                'master_char': up['cname'],
                'master_cid': up['cid'],
                'master_gid': up['gid'],
                'faq_game': fc['game_title'],
                'faq_char': fc['cname'],
                'faq_file': fc['file'],
                'move_count': len(fc['moves']),
                'game_sim': round(game_sim, 2)
            })
            break

print(f"\nFuzzy matches found: {len(matches_found)}")
print("=" * 80)
for m in matches_found:
    print(f"  [{m['master_game']}] {m['master_char']} <-- [{m['faq_game']}] {m['faq_char']} ({m['move_count']} moves, game_sim={m['game_sim']}, file={m['faq_file']})")
