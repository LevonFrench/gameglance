import os
import json
import glob
import re

DATA_DIR = 'public/data'

def categorize_move(name, current_type):
    name_lower = name.lower()
    
    # 1. Normal Moves
    normal_keywords = ['light punch', 'medium punch', 'heavy punch', 'light kick', 'medium kick', 'heavy kick', 
                       'lp', 'mp', 'hp', 'lk', 'mk', 'hk', 'crouching', 'standing', 'jumping', 'close', 'far', 'neutral']
    # If the name is literally just "Standing Heavy Punch" or "Crouching LK"
    if any(re.search(r'\b' + k + r'\b', name_lower) for k in normal_keywords):
        # Could be a command normal if it has directional inputs in name?
        # Let's just group them as 'normal' to separate from special fireball inputs
        return 'normal'
        
    # 2. Throws
    throw_keywords = ['throw', 'suplex', 'nage', 'toss', 'slam', 'choke', 'drop', 'piledriver']
    if any(k in name_lower for k in throw_keywords):
        return 'throw'
        
    # 3. Finishers
    finisher_keywords = ['fatality', 'brutality', 'animality', 'babality', 'friendship', 'hara-kiri']
    if any(k in name_lower for k in finisher_keywords):
        return 'finisher'
        
    # 4. Super / Desperation
    super_keywords = ['super', 'shinkuu', 'metsu', 'denjin', 'desperation', 'hyper', 'climax', 'neo max', 'astral heat', 'distortion drive']
    if any(k in name_lower for k in super_keywords):
        return 'super'
        
    # Defaults
    if current_type in ['', None, 'unknown', 'moves']:
        return 'special'
        
    return current_type

def main():
    files = glob.glob(f'{DATA_DIR}/**/*.json', recursive=True)
    
    total_moves_before = 0
    total_moves_after = 0
    deduped_count = 0
    categorized_count = 0
    
    for file in files:
        if file.endswith('meta.json'): continue
        
        try:
            with open(file, 'r', encoding='utf-8') as f:
                data = json.load(f)
                
            moves = data.get('movesList', [])
            if not moves: continue
            
            seen_signatures = set()
            new_moves = []
            
            for index, m in enumerate(moves):
                total_moves_before += 1
                name = m.get('name', 'Unknown')
                inputs = m.get('inputs', [])
                if not isinstance(inputs, list):
                    inputs = [inputs]
                    
                # Create signature
                # E.g. "Hadouken|down, forward, punch"
                sig = f"{name.lower().strip()}|{''.join(str(i).lower().strip() for i in inputs)}"
                
                if sig in seen_signatures:
                    deduped_count += 1
                    continue
                    
                seen_signatures.add(sig)
                
                # Recategorize
                current_type = m.get('type', '')
                new_type = categorize_move(name, current_type)
                
                if new_type != current_type:
                    m['type'] = new_type
                    categorized_count += 1
                    
                new_moves.append(m)
                
            data['movesList'] = new_moves
            total_moves_after += len(new_moves)
            
            with open(file, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=4)
                
        except Exception as e:
            print(f"Error processing {file}: {str(e)}")

    print(f"--- Deep Dive Stats ---")
    print(f"Moves Evaluated: {total_moves_before}")
    print(f"Duplicates Purged: {deduped_count}")
    print(f"Moves Recategorized: {categorized_count}")
    print(f"Final Move Count: {total_moves_after}")

if __name__ == '__main__':
    main()
