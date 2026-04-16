import os
import re
import json
import docx

def slugify(text):
    text = str(text).lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def get_all_characters(data):
    # Search common keys for roster arrays
    all_chars = []
    
    # Try multiple roster keys
    roster_keys = ['characters', 'roster', 'base_roster', 'dlc_roster', 'fighters', 'unlockable_characters', 'secret_characters', 'roster_additions', 'new_characters']
    
    for key in roster_keys:
        if key in data and isinstance(data[key], list):
            all_chars.extend(data[key])
            
    # If the JSON itself is the array of characters
    if isinstance(data, list):
        all_chars.extend(data)
        
    return all_chars

faqs_dir = 'faqs'
if not os.path.exists(faqs_dir):
    print("faqs dir missing")
    exit(0)
    
docs = [f for f in os.listdir(faqs_dir) if f.endswith('.docx') and f != 'FGC Playable Character Registry.docx']

ts_path = 'src/games.ts'
ts_content = open(ts_path, encoding='utf-8').read()

new_games = []

for doc_file in docs:
    print(f"Processing {doc_file}...")
    doc_path = os.path.join(faqs_dir, doc_file)
    try:
        doc = docx.Document(doc_path)
    except Exception as e:
        print(f"Failed to load docx: {e}")
        continue
    
    text = '\n'.join([p.text for p in doc.paragraphs])
    
    match = re.search(r'(\{[\s\S]*\}|\[[\s\S]*\])', text)
    if not match:
        print(f"No JSON found in {doc_file}")
        continue
        
    try:
        json_text = match.group(1).replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
        data = json.loads(json_text)
    except Exception as e:
        print(f"Failed to parse JSON in {doc_file}: {e}")
        continue
        
    game_title = ""
    if isinstance(data, dict):
        game_title = data.get('game_title') or data.get('game')
        
    if not game_title:
        game_title = doc_file.replace('.docx', '').replace('.json', '').replace('Complete Move List', '').replace('Exhaustive', '').replace('JSON', '').strip(' -_')
        
    game_id = slugify(game_title)
    
    chars = get_all_characters(data)
    if not chars:
         print(f"No characters found in {doc_file}! keys were {data.keys() if isinstance(data, dict) else 'list'}")
         continue
         
    game_exists = f"id: '{game_id}'" in ts_content or f'id: "{game_id}"' in ts_content
    
    if not game_exists:
        print(f"New game discovered: {game_title}")
        new_games.append({
            'id': game_id,
            'name': game_title,
            'count': len(chars)
        })
        
        new_block = f"""  {{
    id: '{game_id}',
    name: "{game_title}",
    developer: "Unknown",
    releaseYear: 2000,
rosterCount: {len(chars)},
        characters: [
      {', '.join([f"{{ id: '{slugify(c.get('name', 'unknown'))}', name: '{c.get('name', 'unknown').replace(chr(39), '')}' }}" for c in chars])}
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  }}"""     
        # Insert properly before the very last ]
        ts_content = re.sub(r'\}\s*\];\s*$', '},\n' + new_block + '\n];', ts_content)
    else:
        print(f"Game already exists: {game_title}. Updating characters... ({len(chars)})")
        def replace_chars(m):
            block = m.group(0)
            char_array_str = ',\n      '.join([f"{{ id: '{slugify(c.get('name', 'unknown'))}', name: '{c.get('name', 'unknown').replace(chr(39), '')}' }}" for c in chars])
            block = re.sub(r'characters:\s*\[[\s\S]*?\]', f"characters: [\n      {char_array_str}\n    ]", block)
            block = re.sub(r'rosterCount:\s*\d+', f"rosterCount: {len(chars)}", block)
            return block
            
        ts_content = re.sub(r'\{\s*id:\s*[\'"]' + re.escape(game_id) + r'[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\}', replace_chars, ts_content)
        
    os.makedirs(f"public/data/{game_id}", exist_ok=True)
    
    for c in chars:
        cname = c.get('name', 'unknown')
        cid = slugify(cname)
        
        formatted_moves = []
        c_moves = c.get('moves', [])
        
        # If 'moves' is empty or missing, aggregate from Categorical keys
        if not c_moves:
            categorical_keys = ['command_normals', 'special_moves', 'super_moves', 'supers', 'specials', 'ultimate', 'boosted_specials', 'unique_attacks', 'normals', 'throws']
            for k in categorical_keys:
                if k in c and isinstance(c[k], list):
                    for item in c[k]:
                        if isinstance(item, dict):
                            # Ensure we set a type based on the key if missing
                            if 'type' not in item:
                                if 'super' in k or 'ultimate' in k:
                                    item['type'] = 'super'
                                elif 'normal' in k:
                                    item['type'] = 'normal'
                                else:
                                    item['type'] = 'special'
                            c_moves.append(item)
                        elif isinstance(item, str):
                            c_moves.append({"name": item, "input": "?", "type": "special"})
        
        for i, mv in enumerate(c_moves):
            if isinstance(mv, str):
                mv = {"name": mv, "input": "?"}
                
            mv_type = str(mv.get('type', 'special')).lower() if isinstance(mv, dict) else 'special'
            if 'super' in mv_type or 'ultimate' in mv_type:
                t = 'super'
                mid = f"sup_{i}"
            elif 'norm' in mv_type or 'throw' in mv_type:
                t = 'normal'
                mid = f"nm_{i}"
            else:
                t = 'special'
                mid = f"sp_{i}"
                
            formatted_moves.append({
                "id": mid,
                "name": str(mv.get('name', 'Unknown')) if isinstance(mv, dict) else "Unknown",
                "type": t,
                "inputs": [x.strip() for x in str(mv.get('input', '')).split('+')] if isinstance(mv, dict) and mv.get('input') else ["?"]
            })
            
        char_payload = {
            "game": game_title,
            "character": cname,
            "movesList": formatted_moves,
            "combosList": []
        }
        
        with open(f"public/data/{game_id}/{cid}.json", 'w', encoding='utf-8') as f:
            json.dump(char_payload, f, indent=2)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Successfully ingested all FAQs JSON data. Updated {ts_path}.")
