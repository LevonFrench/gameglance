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
    'faqs/JoJo’s Bizarre Adventure_ HFTF - Complete Move List (Exhaustive).docx',
    'faqs/Savage Reign - Exhaustive JSON Move List.docx',
    'faqs/Voltage Fighter Gowcaizer - Exhaustive JSON Move List.docx'
]

game_payloads = []
for file in files:
    if not os.path.exists(file):
        print("Missing", file)
        continue
    text = extract_docx(file)
    if text:
        # the text is likely a json string. Find json block
        start = text.find('[')
        end = text.rfind(']')
        if start != -1 and end != -1:
            try:
                # Some docx uses smart quotes or weird whitespace
                clean_text = text[start:end+1].replace('\u201c', '"').replace('\u201d', '"').replace('\u2018', "'").replace('\u2019', "'")
                # Try to parse
                data = json.loads(clean_text)
                game_payloads.append((file, data))
            except Exception as e:
                print(f"Failed to parse JSON in {file}: {e}")
        else:
            print("No JSON array found in", file)

print(f"Loaded {len(game_payloads)} game payloads.")

# Dump them to public/data 
for file, data in game_payloads:
    if len(data) == 0: continue
    # Derive game ID from the first char's game property, or from the file name
    # e.g., 'Voltage Fighter Gowcaizer'
    first_char = data[0]
    game_name = first_char.get('game', '')
    if not game_name:
        game_name = os.path.basename(file).split('-')[0].strip()
    
    # We strip exhaustive, etc
    game_name = game_name.replace(' - Exhaustive JSON Move List', '')
    game_id = re.sub(r'[^a-z0-9]+', '-', game_name.lower()).strip('-')
    
    os.makedirs(f'public/data/{game_id}', exist_ok=True)
    
    char_list = []
    for char in data:
        char_name = char.get('character', 'Unknown')
        char_id = re.sub(r'[^a-z0-9]+', '-', char_name.lower()).strip('-')
        char_list.append({'id': char_id, 'name': char_name})
        
        # Write character JSON
        with open(f'public/data/{game_id}/{char_id}.json', 'w', encoding='utf-8') as f:
            json.dump(char, f, indent=2)
            
    print(f"Processed {game_name} ({len(char_list)} characters)")
    
    # Update src/games.ts array specifically since we know the list of games
    # Load games.ts
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_text = f.read()
    
    # Inject if missing
    if f"id: '{game_id}'" not in ts_text:
        # Build block
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
        # Insert before the last closing bracket of the array
        ts_text = re.sub(r'(\n\];\s*$)', f',{block}\\1', ts_text, flags=re.MULTILINE)
        
        with open('src/games.ts', 'w', encoding='utf-8') as f:
            f.write(ts_text)
        print(f"Added {game_name} to src/games.ts")
