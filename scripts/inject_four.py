import os
import json
import re

def slugify(text):
    text = str(text).lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")

def to_title_case(s):
    if '-' in s:
        s = s.replace('-', ' ')
    return ' '.join(word.capitalize() if word.islower() else word for word in s.split())

def process_schema_1(game_id, json_path):
    print(f"Schema 1: {game_id}")
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    roster = data.get('roster', [])
    for c in roster:
        cname = c.get('character_name', '')
        if not cname: continue
        
        cid = slugify(cname)
        cname = to_title_case(cname)
        
        moves = []
        for m in c.get('move_list', []):
            mname = m.get('move_name', '')
            inp = m.get('numpad_input', m.get('input', ''))
            mtype = str(m.get('move_type', 'special')).lower()
            
            moves.append({
                'name': mname,
                'type': mtype,
                'inputs': [inp]
            })
            
        c_obj = {
            'character': cname,
            'name': cname,
            'movesList': moves
        }
        
        os.makedirs(f"public/data/{game_id}", exist_ok=True)
        with open(f"public/data/{game_id}/{cid}.json", 'w', encoding='utf-8') as out:
            json.dump(c_obj, out, indent=2)


def process_schema_2(game_id, json_path):
    print(f"Schema 2: {game_id}")
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    roster = data.get('roster', {})
    for cname, cats in roster.items():
        if not cname: continue
        
        cid = slugify(cname)
        cname = to_title_case(cname)
        
        moves = []
        for cat_name, items in cats.items():
            if type(cat_name) == str:
                mtype = 'super' if 'super' in cat_name.lower() or 'art' in cat_name.lower() else 'special'
            else:
                mtype = 'special'
                
            for i in items:
                if type(i) == str:
                    parts = i.split(':', 1)
                    if len(parts) == 2:
                        inp = parts[0].strip()
                        mname = parts[1].strip()
                    else:
                        inp = ''
                        mname = parts[0].strip()
                else:    
                    mname = i.get('move', '')
                    inp = i.get('input', '')
                moves.append({
                    'name': mname,
                    'type': mtype,
                    'inputs': [inp]
                })
                
        c_obj = {
            'character': cname,
            'name': cname,
            'movesList': moves
        }
        
        os.makedirs(f"public/data/{game_id}", exist_ok=True)
        with open(f"public/data/{game_id}/{cid}.json", 'w', encoding='utf-8') as out:
            json.dump(c_obj, out, indent=2)

try:
    process_schema_1('breakers-revenge', 'faqs/old/Breakers_Revenge_Move_List.json')
    process_schema_1('capcom-fighting-jam', 'faqs/old/Capcom_Fighting_Jam_Move_List.json')
    process_schema_2('capcom-vs-snk-2', 'faqs/old/Capcom vs. SNK 2 Move List.json')
    process_schema_2('capcom-vs-snk-pro', 'faqs/old/Capcom vs. SNK Pro Move List.json')
except FileNotFoundError as e:
    print(e)
