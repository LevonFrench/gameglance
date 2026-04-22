#!/usr/bin/env python3
"""Scrape HNK character data from Dustloop Cargo API and write proper JSON files."""
import json
import os
import uuid
import urllib.request

OUTPUT_DIR = 'public/data/hokuto-no-ken'
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Dustloop Cargo query for HNK move data
API_URL = (
    "https://www.dustloop.com/wiki/index.php?"
    "title=Special:CargoExport&tables=MoveData_HNK&"
    "fields=chara,input,name,type,damage,guard,startup,active,recovery,onBlock,onHit,images&"
    "where=&limit=500&format=json"
)

print("Fetching HNK move data from Dustloop...")
req = urllib.request.Request(API_URL, headers={'User-Agent': 'GameGlance/1.0'})
resp = urllib.request.urlopen(req)
raw = json.loads(resp.read())

# Map Dustloop character names to our IDs
CHAR_MAP = {
    'Kenshiro': 'kenshiro',
    'Raoh': 'raoh',
    'Toki': 'toki',
    'Rei': 'rei',
    'Juda': 'juda',
    'Shin': 'shin',
    'Souther': 'souther',
    'Mamiya': 'mamiya',
    'Jagi': 'jagi',
    'Heart': 'heart',
    'Mr.Heart': 'heart',
    'Mr. Heart': 'heart',
    'P1Heart': 'heart',
    'P2Heart': 'heart',
}

# HNK-specific type mapping
TYPE_MAP = {
    'normal': 'normal',
    'special': 'special',
    'super': 'super',
    'Fatal KO': 'finisher',
    'fatal ko': 'finisher',
    'fatal': 'finisher',
    'system': 'common',
    'movement': 'common',
    'throw': 'throw',
    'command throw': 'throw',
    'other': 'common',
    'unique': 'unique',
}

characters = {}

for item in raw:
    chara_raw = item.get('chara', '')
    if not chara_raw:
        continue
    
    chara_id = CHAR_MAP.get(chara_raw, chara_raw.lower().replace(' ', '-').replace('.', ''))
    
    if chara_id not in characters:
        characters[chara_id] = {
            'name': chara_raw,
            'character': chara_id,
            'movesList': [],
            'combosList': []
        }
    
    name = item.get('name', '') or item.get('input', '')
    inp = item.get('input', '') or ''
    raw_type = (item.get('type', '') or 'normal').strip()
    
    # Classify: if name contains "(Fatal)" it's a Fatal KO / finisher
    move_type = TYPE_MAP.get(raw_type.lower(), raw_type.lower())
    if '(fatal)' in name.lower() or 'fatal ko' in name.lower():
        move_type = 'finisher'
    
    # Build frame data
    frame_data = {}
    for field in ['startup', 'active', 'recovery', 'onBlock', 'onHit']:
        val = item.get(field, '')
        if val:
            frame_data[field] = str(val)
    
    move_obj = {
        'id': str(uuid.uuid4()),
        'name': name,
        'input': inp,
        'type': move_type,
    }
    if frame_data:
        move_obj['frameData'] = frame_data
    if item.get('damage'):
        move_obj['damage'] = str(item['damage'])
    if item.get('guard'):
        move_obj['guard'] = str(item['guard'])
    
    characters[chara_id]['movesList'].append(move_obj)

# Write character files
for chara_id, data in characters.items():
    # Fix display names
    name_map = {
        'kenshiro': 'Kenshiro',
        'raoh': 'Raoh',
        'toki': 'Toki',
        'rei': 'Rei',
        'juda': 'Juda',
        'shin': 'Shin',
        'souther': 'Souther',
        'mamiya': 'Mamiya',
        'jagi': 'Jagi',
        'heart': 'Heart',
    }
    data['name'] = name_map.get(chara_id, data['name'])
    
    # Count types
    type_counts = {}
    for m in data['movesList']:
        t = m.get('type', 'unknown')
        type_counts[t] = type_counts.get(t, 0) + 1
    
    out_path = os.path.join(OUTPUT_DIR, f"{chara_id}.json")
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    
    print(f"  {chara_id}: {len(data['movesList'])} moves — {type_counts}")

print(f"\nDone! Wrote {len(characters)} characters")
