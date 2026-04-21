import os
import json
import re

TARGET_GAMES = [
    'street-fighter-6',
    'marvel-vs-capcom-clash-of-super-heroes',
    'marvel-vs-capcom-2',
    'ultimate-marvel-vs-capcom-3',
    'marvel-vs-capcom-infinite'
]

def extract_tags(name):
    """Extract (DL2), (DL4), etc from name."""
    match = re.search(r'\((.*?)\)', name)
    return match.group(1).lower() if match else None

def link_stances(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    if 'movesList' not in data:
        return 0
        
    moves = data['movesList']
    updated = 0
    
    # Pre-index moves by input
    input_map = {}
    for m in moves:
        inp = m.get('input', '').strip()
        if inp not in input_map:
            input_map[inp] = []
        input_map[inp].append(m)
        
    for m in moves:
        inp = m.get('input', '').strip()
        if '~' not in inp:
            continue
            
        parts = inp.split('~')
        parent_inp = '~'.join(parts[:-1])
        
        potential_parents = input_map.get(parent_inp, [])
        if not potential_parents:
            # Fallback: maybe the parent input has [Cancel] instead of ~?
            # Or maybe the parent is 236P but the follow up is 236LP~...
            # We will just print a warning for now
            print(f"  [!] No parent found for {m.get('name')} with input {inp} (looked for {parent_inp})")
            continue
            
        parent = None
        if len(potential_parents) == 1:
            parent = potential_parents[0]
        else:
            # Multiple parents found, use tag matching
            m_tag = extract_tags(m.get('name', ''))
            for p in potential_parents:
                p_tag = extract_tags(p.get('name', ''))
                if m_tag == p_tag:
                    parent = p
                    break
            
            # If still not found, just pick the first one
            if not parent:
                parent = potential_parents[0]
                
        if parent:
            m['parentMoveId'] = parent['id']
            updated += 1
            
    if updated > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
            
    return updated

def main():
    total_updated = 0
    for game in TARGET_GAMES:
        dir_path = f"public/data/{game}"
        if not os.path.exists(dir_path):
            continue
            
        for file in os.listdir(dir_path):
            if file.endswith('.json') and not file.startswith('_'):
                filepath = os.path.join(dir_path, file)
                updated = link_stances(filepath)
                if updated > 0:
                    print(f"Updated {updated} stances in {game}/{file}")
                    total_updated += updated
                    
    print(f"\nTotal stances linked: {total_updated}")

if __name__ == '__main__':
    main()
