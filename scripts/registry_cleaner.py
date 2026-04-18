import json
import glob
import re
import os

BLACKLIST_GAMES = [
    # 'blazblue-cross-tag-battle'  # We now have a clean payload for this!
]

# We also skip characters if the average move name length is extremely high
MAX_AVG_NAME_LENGTH = 40

DIRECTION_MAP = {
    'up': '8',
    'down': '2',
    'left': '4',
    'right': '6',
    'forward': '6',
    'back': '4',
    'up-forward': '9',
    'up-back': '7',
    'down-forward': '3',
    'down-back': '1',
    'up-right': '9',
    'up-left': '7',
    'down-right': '3',
    'down-left': '1',
    'neutral': '5'
}

def clean_name(name):
    original = name
    # Strip ^! prefix
    name = re.sub(r'^\^!\s*', '', name)
    
    # Strip specifically matching ASCII garbage prefixes
    # This matches parens containing ONLY the characters: ─, %, w, c, h, n, e, s, and spaces
    name = re.sub(r'^\([─%wchnes\s]+\)\s*', '', name)
    
    # Strip any remaining weird characters anywhere in the name as requested by user
    name = re.sub(r'[★◆="_*^%─]+', '', name).strip()
    
    # If the name starts with a lowercase after stripping, capitalize it
    if len(name) > 0 and name[0].islower():
        name = name[0].upper() + name[1:]
    return name, original != name

def flatten_inputs(inputs_arr):
    # e.g. ["down", "forward", "+A"] -> "26A"
    res = ""
    for token in inputs_arr:
        # lower it, strip spaces
        t_clean = token.lower().strip()
        t_clean = re.sub(r'^\+', '', t_clean) # strip leading +
        if t_clean in DIRECTION_MAP:
            res += DIRECTION_MAP[t_clean]
        else:
            # If there's a + symbol, try stripping it
            res += token.replace('+', '').replace(' ', '')
    return res

def clean_input_string(inp):
    return inp

def process_file(filepath, dry_run=True):
    if filepath.endswith('_roster.json'):
        return False, 0
    with open(filepath, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError:
            return False, 0
            
    game_dir = os.path.basename(os.path.dirname(filepath))
    if game_dir in BLACKLIST_GAMES:
        return False, 0
        
    moves = data.get('movesList', [])
    if not moves:
        return False, 0
        
    # Check avg name length
    total_len = sum(len(m.get('name', '')) for m in moves)
    avg_len = total_len / len(moves)
    if avg_len > MAX_AVG_NAME_LENGTH:
        print(f"Skipping {filepath} due to high avg name length: {avg_len}")
        return False, 0
        
    changed = False
    anomalies_fixed = 0
    
    for i, move in enumerate(moves):
        # 1. Clean Name
        name = move.get('name', '')
        new_name, name_changed = clean_name(name)
        if name_changed:
            moves[i]['name'] = new_name
            changed = True
            anomalies_fixed += 1
            if dry_run:
                print(f"[NAME] {filepath}: '{name}' -> '{new_name}'")
                
        # 2. Clean Input
        if 'inputs' in move:
            new_input = flatten_inputs(move['inputs'])
            moves[i]['input'] = new_input
            del moves[i]['inputs']
            changed = True
            anomalies_fixed += 1
            if dry_run:
                print(f"[INPUT-ARR] {filepath}: {move.get('inputs', '[]')} -> '{new_input}'")
        elif 'input' in move:
            orig_input = move['input']
            new_input = clean_input_string(orig_input)
            if orig_input != new_input:
                moves[i]['input'] = new_input
                changed = True
                anomalies_fixed += 1
                if dry_run:
                    print(f"[INPUT-STR] {filepath}: '{orig_input}' -> '{new_input}'")
                    
    if changed and not dry_run:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
            
    return changed, anomalies_fixed

def main():
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    dry_run = '--execute' not in sys.argv
    
    files = glob.glob('public/data/*/*.json')
    total_fixed = 0
    files_changed = 0
    
    for f in files:
        changed, fixed = process_file(f, dry_run=dry_run)
        if changed:
            files_changed += 1
            total_fixed += fixed
            
    print(f"\nCompleted pass. Dry Run: {dry_run}")
    print(f"Files modified: {files_changed}")
    print(f"Total anomalies fixed: {total_fixed}")

if __name__ == '__main__':
    main()
