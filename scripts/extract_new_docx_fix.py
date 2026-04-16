import zipfile
import xml.etree.ElementTree as ET
import os
import json
import re

def extract_docx(path):
    try:
        document = zipfile.ZipFile(path)
        xml_content = document.read('word/document.xml')
        document.close()
        tree = ET.XML(xml_content)
        NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        paragraphs = []
        for paragraph in tree.iter(NAMESPACE + 'p'):
            texts = [node.text for node in paragraph.iter(NAMESPACE + 't') if node.text]
            if texts:
                paragraphs.append("".join(texts))
        return "\n".join(paragraphs)
    except Exception as e:
        print(f"Error reading {path}: {e}")
        return None

files = [
    'faqs/Savage Reign - Exhaustive JSON Move List.docx',
    'faqs/Voltage Fighter Gowcaizer - Exhaustive JSON Move List.docx'
]

game_payloads = []
for file in files:
    text = extract_docx(file)
    if text:
        clean_text = text.replace('\u201c', '"').replace('\u201d', '"').replace('\u2018', "'").replace('\u2019', "'")
        
        # If it's a series of objects not in an array, wrap them
        clean_text = clean_text.strip()
        if clean_text.startswith('{') and clean_text.endswith('}'):
            # It might have contiguous objects without commas!
            # e.g., "}\n{"
            clean_text = re.sub(r'\}\s*\{', '},{', clean_text)
            clean_text = f"[{clean_text}]"
            
        try:
            data = json.loads(clean_text)
            if isinstance(data, dict):
                data = [data]
            game_payloads.append((file, data))
        except Exception as e:
            print(f"Failed to parse JSON in {file}: {e}")

print(f"Loaded {len(game_payloads)} game payloads.")

for file, data in game_payloads:
    if len(data) == 0: continue
    first_char = data[0]
    game_name = first_char.get('game', '')
    if not game_name:
        game_name = os.path.basename(file).split('-')[0].strip()
    
    game_name = game_name.replace(' - Exhaustive JSON Move List', '')
    game_id = re.sub(r'[^a-z0-9]+', '-', game_name.lower()).strip('-')
    
    os.makedirs(f'public/data/{game_id}', exist_ok=True)
    
    char_list = []
    for char in data:
        char_name = char.get('character', 'Unknown')
        char_id = re.sub(r'[^a-z0-9]+', '-', char_name.lower()).strip('-')
        char_list.append({'id': char_id, 'name': char_name})
        
        with open(f'public/data/{game_id}/{char_id}.json', 'w', encoding='utf-8') as f:
            json.dump(char, f, indent=2)
            
    print(f"Processed {game_name} ({len(char_list)} characters)")
    
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_text = f.read()
    
    if f"id: '{game_id}'" not in ts_text:
        char_str = ",\n      ".join([f"{{ id: '{c['id']}', name: '{c['name']}' }}" for c in char_list])
        block = f"""
  {{
    id: '{game_id}',
    name: "{game_name}",
    developer: "Unknown",
    releaseYear: 1995,
    rosterCount: {len(char_list)},
    characters: [
      {char_str}
    ],
    tabs: ['Special Moves', 'Super Combos', 'Normal Moves', 'Throws']
  }}"""
        ts_text = re.sub(r'(\n\];\s*$)', f',{block}\\1', ts_text, flags=re.MULTILINE)
        with open('src/games.ts', 'w', encoding='utf-8') as f:
            f.write(ts_text)
        print(f"Added {game_name} to src/games.ts")
