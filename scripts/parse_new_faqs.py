import os
import re
import json
import zipfile
import shutil

def slugify(text):
    text = str(text).lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def to_title_case(s):
    if '-' in s:
        s = s.replace('-', ' ')
    return ' '.join(word.capitalize() if word.islower() else word for word in s.split())

def get_all_characters(data):
    all_chars = []
    roster_keys = ['characters', 'roster', 'character_roster', 'base_roster', 'dlc_roster', 'fighters', 'unlockable_characters', 'secret_characters', 'roster_additions', 'new_characters']
    for key in roster_keys:
        if isinstance(data, dict) and key in data and isinstance(data[key], list):
            all_chars.extend(data[key])
    if isinstance(data, list):
        all_chars.extend(data)
    return all_chars

faqs_dir = 'faqs'
old_dir = os.path.join(faqs_dir, 'old')
if not os.path.exists(old_dir):
    os.makedirs(old_dir)

ts_path = 'src/games.ts'
with open(ts_path, 'r', encoding='utf-8') as f:
    ts_content = f.read()

docs = [f for f in os.listdir(faqs_dir) if f.endswith('.docx')]

for doc_file in docs:
    print(f"Processing {doc_file}...")
    doc_path = os.path.join(faqs_dir, doc_file)
    
    try:
        with zipfile.ZipFile(doc_path) as z:
            xml_content = z.read('word/document.xml')
            import xml.etree.ElementTree as ET
            root = ET.fromstring(xml_content)
            raw_text = ''.join([node.text for node in root.iter() if node.text])
            
            raw_text = raw_text.replace('\u201c', '"').replace('\u201d', '"')
            raw_text = raw_text.replace('\u2018', "'").replace('\u2019', "'")
            
            # extract json block
            match = re.search(r'(\{[\s\S]*\}|\[[\s\S]*\])', raw_text)
            
        # Outside zipfile WITH block now!
        if not match:
            print(f"No JSON block found in {doc_file}, extracting as plain markdown...")
            base_name = doc_file.replace('.docx', '')
            if not base_name.endswith('.md'): base_name += '.md'
            dest_path = os.path.join(old_dir, base_name)
            with open(dest_path, 'w', encoding='utf-8') as f:
                f.write(raw_text)
            os.remove(doc_path)
            continue
        
        json_text = match.group(1)
        try:
            data = json.loads(json_text)
        except Exception as e:
            print(f"Failed to parse JSON in {doc_file}: {e}")
            base_name = doc_file.replace('.docx', '')
            if not base_name.endswith('.md'): base_name += '.md'
            dest_path = os.path.join(old_dir, base_name)
            with open(dest_path, 'w', encoding='utf-8') as f:
                f.write(raw_text)
            os.remove(doc_path)
            continue
            
                
    except Exception as e:
         print(f"Zipfile error on {doc_file}: {e}")
         continue
         
    # We successfully parsed it! Let's write the real .json to old/
    formatted_json = json.dumps(data, indent=2)
    base_name = doc_file.replace('.docx', '')
    if not base_name.endswith('.json'):
        base_name += '.json'
    json_path = os.path.join(old_dir, base_name)
    with open(json_path, 'w', encoding='utf-8') as f:
        f.write(formatted_json)
        
    os.remove(doc_path) # Remove original .docx from faqs/ Since we put it in old/ as .json
    
    # Process game registration and data extraction
    game_title = ""
    if isinstance(data, dict):
        game_title = data.get('game_title') or data.get('game')
    if not game_title:
        game_title = doc_file.replace('.docx', '').replace('.json', '').replace('Complete Move List', '').replace('Exhaustive', '').replace('JSON', '').strip(' -_')
        
    game_id = slugify(game_title)
    chars = get_all_characters(data)
    
    if not chars:
        print(f"No characters found in {doc_file}!")
        continue
        
    os.makedirs(f"public/data/{game_id}", exist_ok=True)
    
    # Inject characters into src/games.ts safely
    # Check if game exists
    game_block_regex = r"(id:\s*['\"]" + re.escape(game_id) + r"['\"].*?characters:\s*\[\s*)(.*?)(\s*\])"
    gmatch = re.search(game_block_regex, ts_content, re.DOTALL)
    
    new_char_strings = []
    existing_cids = set()
    
    if gmatch:
         # Extract existing cids
         char_inner = gmatch.group(2)
         existing_cids = set(re.findall(r"id:\s*['\"]([^'\"]+)['\"]", char_inner))
    
    for c in chars:
        cname_raw = c.get('name') or c.get('character')
        if not cname_raw: 
            continue
            
        cid = slugify(cname_raw)
        
        # Ensure proper name capitalization
        cname = to_title_case(cname_raw)
        
        # Apply name fix back to the object for dumping
        c['character'] = cname
        if 'name' in c:
             c['name'] = cname
        
        # Write payload
        with open(f"public/data/{game_id}/{cid}.json", "w", encoding='utf-8') as cf:
             json.dump(c, cf, indent=2)
             
        if cid not in existing_cids:
             new_char_strings.append(f"{{ id: '{cid}', isHidden: true, name: '{cname} (Coming Soon)', moveCount: {len(c.get('movesList', []))} }}")
             existing_cids.add(cid)
             
    if new_char_strings:
        if gmatch:
             # Append to existing
             prefix = gmatch.group(1)
             inner = gmatch.group(2)
             suffix = gmatch.group(3)
             
             if '\n' in inner and inner.strip():
                 # has existing
                 new_inner = inner + ",\n      " + ",\n      ".join(new_char_strings)
             else:
                 new_inner = "      " + ",\n      ".join(new_char_strings) + "\n    "
                 
             ts_content = ts_content[:gmatch.start()] + prefix + new_inner + suffix + ts_content[gmatch.end():]
        else:
             # New game!
             print(f"New game discovered: {game_title}")
             char_block = "      " + ",\n      ".join(new_char_strings) + "\n    "
             new_block = f"""  {{
    id: '{game_id}',
    name: "{game_title}",
    developer: "Unknown",
    releaseYear: 2000,
    platform: "Various",
rosterCount: {len(chars)},
        characters: [
{char_block}],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  }}"""     
             ts_content = re.sub(r'\}\s*\];\s*$', '},\n' + new_block + '\n];', ts_content)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Parsed new FAQS to raw JSON, integrated roster to games.ts, and populated payloads!")

# Also run the master report regenerating script
os.system("python scripts/master_report.py")
