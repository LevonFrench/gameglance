
import os
import json
def extract_moves(obj):
    moves = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k in ['name', 'character', 'game', 'id']: continue
            if isinstance(v, list):
                for item in v:
                    if isinstance(item, dict) and ('input' in item or 'command' in item or 'numpad_input' in item):
                        moves.append(item)
                    elif isinstance(item, str) and (':' in item or '-' in item or '(' in item):
                        moves.append(item)
            elif isinstance(v, dict):
                if 'input' in v or 'command' in v or 'numpad_input' in v:
                    moves.append(v)
                else:
                    moves.extend(extract_moves(v))
    return moves

files = [f for f in os.listdir('faqs/old') if f.endswith('.json')]
for file in files:
    path = os.path.join('faqs/old', file)
    try:
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except:
        print(f'ERR: {file} is invalid JSON')
        continue
        
    roster = data.get('roster', data.get('characters', []))
    if isinstance(roster, dict):
        roster = [v for k, v in roster.items() if isinstance(v, dict)]
        
    if not isinstance(roster, list) or len(roster) == 0:
        print(f'EMPTY/NO ROSTER: {file}')
        continue
    
    total = sum(len(extract_moves(c)) for c in roster)
    print(f'Total {total} moves extracted from {file}')

