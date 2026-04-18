import zipfile
import xml.etree.ElementTree as ET
import os
import json
import re
import glob
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from scripts.lib.validator import is_valid_notation

TS_FILE = 'src/games.ts'
DATA_DIR = 'public/data'

def get_docx_text(path):
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
    except:
        return ""

def process_file(docx_path):
    txt = get_docx_text(docx_path)
    txt = txt.replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
    s, e = txt.find('{'), txt.rfind('}')
    
    if s != -1 and e != -1:
        try:
            data = json.loads(txt[s:e+1])
            if isinstance(data, dict):
                return data
            if isinstance(data, list):
                # if it's a list, check if it's a list of Characters and pull game from the first one
                flat = []
                for j in data:
                    if isinstance(j, list): flat.extend(j)
                    else: flat.append(j)
                game_title = ""
                for c in flat:
                    if "game" in c: game_title = c["game"]
                return {"game": game_title, "roster": flat}
        except Exception as ex:
            print(f"Error parsing {docx_path}: {ex}")
            pass
            
    return None

def main():
    docs = glob.glob('faqs/*.docx')
    parsed_docs = []
    for d in docs:
        res = process_file(d)
        if res and ("game" in res or "game_title" in res):
            parsed_docs.append(res)
            print(f"Parsed {d}")
            
    with open(TS_FILE, 'r', encoding='utf-8') as f:
        ts_text = f.read()

    prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)(.*)', ts_text, re.DOTALL)
    if not prefix_match:
        print("Could not find start of games block")
        return
        
    prefix = prefix_match.group(1)
    rest = prefix_match.group(2)

    games = []
    current_block = ""
    brace_count = 0
    in_game = False

    i = 0
    while i < len(rest):
        char = rest[i]
        if not in_game:
            if char == '{':
                in_game = True
                brace_count = 1
                current_block = char
            elif char == ']':
                break
        else:
            current_block += char
            if char == '{':
                brace_count += 1
            elif char == '}':
                brace_count -= 1
                if brace_count == 0:
                    games.append(current_block)
                    in_game = False
        i += 1
        
    postfix = rest[i:]

    merged_blocks = []
    matched_doc_indices = set()
    
    for g in games:
        m_name = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', g)
        m_id = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', g)
        if not m_name or not m_id:
            merged_blocks.append(g)
            continue
            
        gname = m_name.group(1).replace('_', ' ').replace(':', '')
        gid = m_id.group(1)
        
        matched_doc = None
        for idx, d in enumerate(parsed_docs):
            dgame = d.get('game') or d.get('game_title')
            if not dgame:
                continue
            norm_gname = gname.lower().replace('-', '').replace(' ', '').replace(':', '')
            norm_dgame = dgame.lower().replace('-', '').replace(' ', '').replace(':', '')
            if norm_dgame in norm_gname or norm_gname in norm_dgame:
                matched_doc = d
                matched_doc_indices.add(idx)
                break
                
        if not matched_doc:
            merged_blocks.append(g)
            continue
            
        print(f"Merge: {gname}")
        game_data_dir = os.path.join(DATA_DIR, gid)
        os.makedirs(game_data_dir, exist_ok=True)
        
        c_list = []
        for roster_char in matched_doc.get('roster', []):
            if "name" not in roster_char:
                if "character" in roster_char: roster_char["name"] = roster_char["character"]
                else: continue
                
            cname = roster_char.get('name', 'Unknown')
            cid = cname.lower().replace(' ', '-').replace("'", "").replace('/', '-')
            
            movesList = roster_char.get('movesList')
            if not movesList:
                movesList = []
                for m in roster_char.get('command_normals', []):
                    if is_valid_notation(m['input']):
                        movesList.append({"name": m['name'], "type": "command_normal", "input": m['input']})
                for m in roster_char.get('special_moves', []):
                    if is_valid_notation(m['input']):
                        movesList.append({"name": m['name'], "type": "special", "input": m['input']})
                for m in roster_char.get('super_moves', []) + roster_char.get('desperation_moves', []) + roster_char.get('super_combos', []):
                    if is_valid_notation(m['input']):
                        movesList.append({"name": m['name'], "type": "super", "input": m['input']})
                for m in roster_char.get('unique_attacks', []):
                    if is_valid_notation(m['input']):
                        movesList.append({"name": m['name'], "type": "unique", "input": m['input']})
                
            out_doc = {
                "game": matched_doc.get('game') or matched_doc.get('game_title'),
                "character": cname,
                "movesList": movesList
            }
            with open(os.path.join(game_data_dir, f"{cid}.json"), 'w', encoding='utf-8') as f:
                json.dump(out_doc, f, indent=2)
                
            c_list.append((cid, cname))
        
        char_block_match = re.search(r'(characters:\s*\[\s*)([\s\S]*?)(\s*\])', g)
        if char_block_match:
            c_str = ",\n      ".join([f"{{ id: '{c[0]}', name: '{c[1]}' }}" for c in c_list])
            new_block = g[:char_block_match.start()] + char_block_match.group(1).strip() + "\n      " + c_str + "\n    " + char_block_match.group(3).strip() + g[char_block_match.end():]
            new_block = re.sub(r'rosterCount:\s*\d+', f'rosterCount: {len(c_list)}', new_block)
            merged_blocks.append(new_block)
        else:
            merged_blocks.append(g)

    for idx, d in enumerate(parsed_docs):
        if idx not in matched_doc_indices:
            dgame = d.get('game') or d.get('game_title')
            if not dgame: continue
            gid = dgame.lower().replace(' ', '-').replace("'", "").replace(':', '')
            print(f"Creating NEW GAME entry for {dgame}")
            game_data_dir = os.path.join(DATA_DIR, gid)
            os.makedirs(game_data_dir, exist_ok=True)
            
            c_list = []
            for roster_char in d.get('roster', []):
                if "name" not in roster_char:
                    if "character" in roster_char: roster_char["name"] = roster_char["character"]
                    else: continue
                    
                cname = roster_char.get('name', 'Unknown')
                cid = cname.lower().replace(' ', '-').replace("'", "").replace('/', '-')
                
                movesList = roster_char.get('movesList')
                if not movesList:
                    movesList = []
                    for m in roster_char.get('command_normals', []):
                        movesList.append({"name": m['name'], "type": "command_normal", "inputs": [m['input']]})
                    for m in roster_char.get('special_moves', []):
                        movesList.append({"name": m['name'], "type": "special", "inputs": [m['input']]})
                    for m in roster_char.get('super_moves', []) + roster_char.get('desperation_moves', []) + roster_char.get('super_combos', []):
                        movesList.append({"name": m['name'], "type": "super", "inputs": [m['input']]})
                    for m in roster_char.get('unique_attacks', []):
                        movesList.append({"name": m['name'], "type": "unique", "inputs": [m['input']]})
                    
                out_doc = {
                    "game": dgame,
                    "character": cname,
                    "movesList": movesList
                }
                with open(os.path.join(game_data_dir, f"{cid}.json"), 'w', encoding='utf-8') as f:
                    json.dump(out_doc, f, indent=2)
                    
                c_list.append((cid, cname))
            
            c_str = ",\n      ".join([f"{{ id: '{c[0]}', name: '{c[1]}' }}" for c in c_list])
            new_block = f"""{{
    id: '{gid}',
    name: '{dgame}',
    developer: 'Unknown',
    releaseYear: 2024,
    platform: 'Various',
    rosterCount: {len(c_list)},
    characters: [
      {c_str}
    ]
  }}"""
            merged_blocks.append(new_block)

    full_ts = prefix + ",\n  ".join(merged_blocks) + "\n" + postfix

    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(full_ts)

if __name__ == '__main__':
    main()
