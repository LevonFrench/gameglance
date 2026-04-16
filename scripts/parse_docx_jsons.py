import zipfile
import xml.etree.ElementTree as ET
import os
import json
import re

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

def clean_json_string(s):
    s = s.replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
    s = s.replace('\n', ' ')
    idx_s = s.find('{')
    idx_e = s.rfind('}')
    if idx_s != -1 and idx_e != -1:
        return s[idx_s:idx_e+1]
    return s

def process_file(docx_path):
    txt = get_docx_text(docx_path)
    jtxt = clean_json_string(txt)
    try:
        data = json.loads(jtxt)
        return data
    except Exception as e:
        print(f"Failed to parse {docx_path}: {e}")
        return None

def main():
    docs = [
        "faqs/Art of Fighting 2 - Exhaustive JSON Move List.docx",
        "faqs/JoJo’s Bizarre Adventure_ HFTF - Complete Move List (Exhaustive).docx",
        "faqs/Savage Reign - Exhaustive JSON Move List.docx",
        "faqs/Voltage Fighter Gowcaizer - Exhaustive JSON Move List.docx",
    ]
    
    parsed_docs = []
    for d in docs:
        if not os.path.exists(d): continue
        res = process_file(d)
        if res:
            parsed_docs.append(res)
            
    with open(TS_FILE, 'r', encoding='utf-8') as f:
        ts_text = f.read()

    prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)(.*)', ts_text, re.DOTALL)
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
    
    for g in games:
        m_name = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', g)
        m_id = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', g)
        if not m_name or not m_id:
            merged_blocks.append(g)
            continue
            
        gname = m_name.group(1).replace('_', ' ').replace(':', '')
        gid = m_id.group(1)
        
        matched_doc = None
        for d in parsed_docs:
            dgame = d.get('game') or d.get('game_title')
            if not dgame:
                continue
            if 'jojo' in gname.lower() and 'jojo' in dgame.lower() or dgame.lower().replace(':', '') in gname.lower() or gname.lower() in dgame.lower().replace(':', ''):
                matched_doc = d
                break
                
        if not matched_doc:
            merged_blocks.append(g)
            continue
            
        print(f"Merging perfectly for {gname}")
        game_data_dir = os.path.join(DATA_DIR, gid)
        os.makedirs(game_data_dir, exist_ok=True)
        
        c_list = []
        for roster_char in matched_doc.get('roster', []):
            cname = roster_char.get('name', 'Unknown')
            cid = cname.lower().replace(' ', '-').replace("'", "").replace('/', '-')
            
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
            merged_blocks.append(new_block)
        else:
            merged_blocks.append(g)

    full_ts = prefix + ",\n  ".join(merged_blocks) + "\n" + postfix

    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(full_ts)

if __name__ == '__main__':
    main()
