import os
import glob
import json
import zipfile
import xml.etree.ElementTree as ET
import re

def clean_id(name):
    cid = name.lower()
    cid = re.sub(r'[^a-z0-9\s-]', '', cid)
    cid = re.sub(r'\s+', '-', cid)
    return cid

def get_docx_text(path):
    try:
        document = zipfile.ZipFile(path)
        xml_content = document.read('word/document.xml')
        document.close()
        tree = ET.XML(xml_content)
        NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        texts = []
        for paragraph in tree.iter(NAMESPACE + 'p'):
            for node in paragraph.iter(NAMESPACE + 't'):
                if node.text:
                    texts.append(node.text)
        return "".join(texts)
    except Exception as e:
        print(f"Error reading docx: {e}")
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
        print(f"Failed to parse JSON from {docx_path}")
        return None

def main():
    docx_files = glob.glob("faqs/old/*.docx") + glob.glob("faqs/*.json.docx")
    if not docx_files:
        print("No .docx files found in faqs/old/ or faqs/")
        return

    # To map properly, let's load truth_roster.json or parse src/games.ts purely for gid mapping
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    games = []
    blocks = re.findall(r'(\s*\{\s*\n\s*id:\s*[\'"][^\'"]+[\'"].*?tabs:\s*\[.*?\]\s*\n\s*\})', ts_content, re.DOTALL)
    for b in blocks:
        id_m = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', b)
        name_m = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', b)
        if id_m and name_m:
            gid = id_m.group(1).strip()
            gname = name_m.group(1).strip()
            # extract characters to map their exact clean_id correctly!
            char_list = []
            chars = re.findall(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"]\s*,\s*name:\s*[\'"]([^\'"]+)[\'"]\s*\}', b)
            for cid, cname in chars:
                char_list.append((cid, cname))
            games.append({
                'id': gid,
                'name': gname,
                'chars': char_list
            })

    modified_count = 0
    for path in docx_files:
        data = process_file(path)
        if not data: continue
        
        dgame = data.get('game') or data.get('game_title')
        if not dgame:
            dgame = os.path.basename(path).replace('_Move_List.json.docx', '').replace('_', ' ')
        
        # find matching game
        matched_game = None
        c_dgame = clean_id(dgame)
        
        # 1. Try Exact match
        for g in games:
            if clean_id(g['name']) == c_dgame:
                matched_game = g
                break
                
        # 2. Try longest substring match
        if not matched_game:
            best_match = None
            longest_len = -1
            for g in games:
                c_gname = clean_id(g['name'])
                if c_dgame in c_gname or c_gname in c_dgame:
                    if len(c_gname) > longest_len:
                        longest_len = len(c_gname)
                        best_match = g
            matched_game = best_match
                
        if not matched_game:
            print(f"Game '{dgame}' is new/missing from games.ts. Auto-adding as draft.")
            gid = clean_id(dgame)
            matched_game = {'id': gid, 'name': dgame, 'chars': []}
            games.append(matched_game)
            
            # append to games.ts statically
            char_list_entries = []
            roster_source = data.get('roster', []) or data.get('characters', []) or data.get('characterList', []) or []
            for roster_char in roster_source:
                cname_new = roster_char.get('character') or roster_char.get('name', 'Unknown')
                cid_new = clean_id(cname_new)
                char_list_entries.append(f"      {{ id: '{cid_new}', name: '{cname_new.replace(chr(39), chr(92)+chr(39))}' }}")
                matched_game['chars'].append((cid_new, cname_new))
            
            c_str = ",\n".join(char_list_entries)
            b = f"""  {{
    id: '{gid}',
    name: "{dgame.replace('"', '\\"')}",
    isDraft: true,
    characters: [
{c_str}
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  }}"""
            with open('src/games.ts', 'r', encoding='utf-8') as fts:
                ts_txt = fts.read()
            m = re.search(r']\s*;?\s*$', ts_txt)
            if m:
                i_pt = m.start()
                prefix = ts_txt[:i_pt]
                if prefix.endswith('}') or '\n}' in prefix[-5:]:
                    prefix += ','
                with open('src/games.ts', 'w', encoding='utf-8') as fts:
                    fts.write(prefix + "\n" + b + "\n" + ts_txt[i_pt:])
                    
        print(f"Matched {os.path.basename(path)} -> {matched_game['name']}")
        gid = matched_game['id']
        game_folder = f"public/data/{gid}"
        os.makedirs(game_folder, exist_ok=True)
        
        roster_list = data.get('roster', []) or data.get('characters', []) or data.get('characterList', []) or []
        
        # map characters
        for roster_char in roster_list:
            cname = roster_char.get('character') or roster_char.get('name', 'Unknown')
            # fuzzy match against expected characters
            matched_cid = None
            for ecid, ecname in matched_game['chars']:
                if ecname.lower() == cname.lower() or clean_id(ecname) == clean_id(cname):
                    matched_cid = ecid
                    break
            
            if not matched_cid:
                # If character is not found, fallback to generated ID
                matched_cid = clean_id(cname)
                print(f"  Warning: Character '{cname}' not perfectly matched in games.ts for {matched_game['name']}. Using '{matched_cid}'")

            movesList = []
            # some jsons use camelCase, some snake_case
            
            def add_moves(source_list, mtype):
                if not source_list: return
                for m in source_list:
                    if isinstance(m, str):
                        movesList.append({"name": m, "type": mtype, "inputs": ["Unknown"]})
                        continue
                        
                    keys = list(m.keys()) if isinstance(m, dict) else []
                    name_key = next((k for k in keys if 'name' in k.lower() or 'move' in k.lower() or 'attack' in k.lower() or 'action' in k.lower()), None)
                    input_key = next((k for k in keys if 'input' in k.lower() or 'command' in k.lower()), None)
                    
                    if not name_key:
                        name_key = keys[0] if keys else None
                        
                    if not name_key or name_key not in m: continue
                    m_name = m[name_key]
                    m_input = m[input_key] if input_key and input_key in m else "Unknown"
                    if isinstance(m_input, str):
                        m_input = [m_input]
                        
                    movesList.append({"name": m_name, "type": mtype, "inputs": m_input})

            add_moves(roster_char.get('command_normals', []) or roster_char.get('commandNormals', []) or roster_char.get('common_strings', []), "command_normal")
            
            specials = (roster_char.get('special_moves', []) or roster_char.get('specialMoves', []) or 
                        roster_char.get('specials', []) or roster_char.get('stand_off_specials', []) or 
                        roster_char.get('stand_on_specials', []) or roster_char.get('blast_1', []) or 
                        roster_char.get('blast_2', []) or roster_char.get('moves', []) or 
                        roster_char.get('boosted_specials', []) or roster_char.get('abc_special', []) or 
                        roster_char.get('aura_arts', []))
            add_moves(specials, "special")
            
            supers = (roster_char.get('super_moves', []) or roster_char.get('superMoves', []) or 
                      roster_char.get('super_combos', []) or roster_char.get('desperation_moves', []) or 
                      roster_char.get('supers', []) or roster_char.get('super', []) or 
                      roster_char.get('ultimate', []) or roster_char.get('super_desperation_moves', []) or 
                      roster_char.get('overdrives', []) or roster_char.get('ultimate_power_attack', []) or 
                      roster_char.get('super_power_attacks', []) or roster_char.get('blockbusters', []))
            add_moves(supers, "super")
            
            uniques = (roster_char.get('unique_attacks', []) or roster_char.get('uniqueAttacks', []) or 
                       roster_char.get('trait', []) or roster_char.get('stylish_moves', []) or 
                       roster_char.get('overdrive_power', []))
            add_moves(uniques, "unique")
            
            add_moves(roster_char.get('normals', []) or roster_char.get('normal_moves', []), "normal")
            add_moves(roster_char.get('throws', []), "throw")
            
            finishers = (roster_char.get('fatalities', []) or roster_char.get('finishers', []) or 
                         roster_char.get('fatal_attack', []) or roster_char.get('fatal_ko', []))
            add_moves(finishers, "finisher")

            out_doc = {
                "game": matched_game['name'],
                "character": cname,
                "movesList": movesList
            }
            
            p = os.path.join(game_folder, f"{matched_cid}.json")
            with open(p, 'w', encoding='utf-8') as f:
                json.dump(out_doc, f, indent=2)
            modified_count += 1
            
    print(f"Successfully processed and updated {modified_count} character move lists.")

if __name__ == '__main__':
    main()
