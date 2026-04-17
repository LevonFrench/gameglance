import os
import json
import re

def normalize_character_json(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except:
            return False, 0
            
    # Find moves array
    moves_arr = data.get('movesList') or data.get('moves') or data.get('move_list') or []
    
    normalized_moves = []
    
    for m in moves_arr:
        if isinstance(m, str):
            normalized_moves.append({
                'name': m,
                'type': 'special',
                'inputs': []
            })
            continue
            
        if not isinstance(m, dict):
            continue
            
        # Normalize name
        mname = m.get('name') or m.get('move_name') or m.get('command_name') or 'Unknown Move'
        
        # Normalize type
        mtype = str(m.get('type') or m.get('move_type') or 'special').lower()
        
        # Normalize inputs
        minputs = []
        if 'inputs' in m and isinstance(m['inputs'], list):
            minputs = m['inputs']
        else:
            raw_input = m.get('input') or m.get('numpad_input') or m.get('command') or ''
            if isinstance(raw_input, list):
                minputs = [str(x) for x in raw_input]
            else:
                minputs = [str(raw_input)] if raw_input else []
                
        normalized_moves.append({
            'name': mname,
            'type': mtype,
            'inputs': minputs
        })
        
    data['movesList'] = normalized_moves
    if 'moves' in data: del data['moves']
    if 'move_list' in data: del data['move_list']
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
        
    return True, len(normalized_moves)

def main():
    data_dir = 'public/data'
    updated_counts = {} # cid -> count
    
    for game_id in os.listdir(data_dir):
        game_path = os.path.join(data_dir, game_id)
        if not os.path.isdir(game_path): continue
        
        for char_file in os.listdir(game_path):
            if not char_file.endswith('.json'): continue
            
            filepath = os.path.join(game_path, char_file)
            success, count = normalize_character_json(filepath)
            if success:
                cid = char_file.replace('.json', '')
                updated_counts[cid] = count
                
    # Now update games.ts
    ts_path = 'src/games.ts'
    with open(ts_path, 'r', encoding='utf-8') as f:
        ts_content = f.read()
        
    def replace_movecount(match):
        cid = match.group(1)
        rest = match.group(2)
        if cid in updated_counts:
            # rest contains moveCount: X
            return f"id: '{cid}'{re.sub(r'moveCount:\s*\d+', f'moveCount: {updated_counts[cid]}', rest)}"
        return match.group(0)
        
    # Match an entire character block
    ts_content = re.sub(r"id:\s*['\"]([^'\"]+)['\"]([^}]+moveCount:\s*\d+[^}]*)", replace_movecount, ts_content)
    
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"Normalized {len(updated_counts)} character JSONs and updated games.ts")

if __name__ == '__main__':
    main()
