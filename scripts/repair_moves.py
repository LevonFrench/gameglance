import glob, json, zipfile, xml.etree.ElementTree as ET, os

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
    s_brace, s_bracket = txt.find('{'), txt.find('[')
    s = s_brace if s_bracket == -1 else (s_bracket if s_brace == -1 else min(s_brace, s_bracket))
    e_brace, e_bracket = txt.rfind('}'), txt.rfind(']')
    e = max(e_brace, e_bracket)
    if s != -1 and e != -1:
        try:
            data = json.loads(txt[s:e+1])
            if isinstance(data, dict): return [data]
            if isinstance(data, list):
                # if list of chars
                return data
        except Exception as e:
            pass
    return None

def main():
    docs = glob.glob('faqs/*.docx')
    parsed_docs = []
    for d in docs:
        res = process_file(d)
        if res:
            if isinstance(res, list):
                for item in res:
                    parsed_docs.append(item)

    # find broken JSONs
    jsons = glob.glob('public/data/**/*.json', recursive=True)
    broken_count = 0
    fixed_count = 0
    missing_moves = 0
    
    for f in jsons:
        broken = False
        try:
            with open(f, 'r', encoding='utf-8') as file:
                data = json.load(file)
            if not data.get('movesList'):
                broken = True
        except:
            broken = True
            
        if broken:
            broken_count += 1
            # try to find character via path
            base = os.path.basename(f)
            cid = base.replace('.json', '')
            gid = os.path.basename(os.path.dirname(f))
            
            # search through parsed_docs
            found = False
            for doc in parsed_docs:
                dgame = doc.get('game', doc.get('game_title', ''))
                norm_dgame = dgame.lower().replace('-', '').replace(' ', '').replace("'", "").replace(':', '')
                norm_gid = gid.lower().replace('-', '').replace(' ', '').replace("'", "").replace(':', '')
                
                if norm_dgame in norm_gid or norm_gid in norm_dgame:
                    # check roster
                    for roster_char in doc.get('roster', []):
                        cname = roster_char.get('name', roster_char.get('character', ''))
                        norm_cid = cname.lower().replace(' ', '-').replace("'", "").replace('/', '-')
                        
                        if norm_cid == cid or (cname and norm_cid in cid):
                            # build move list
                            movesList = roster_char.get('movesList') or roster_char.get('moves')
                            if not movesList:
                                movesList = []
                                for typ, k in [('command_normal', 'command_normals'), ('special', 'special_moves'), ('super', 'super_moves'), ('super', 'desperation_moves'), ('super', 'super_combos'), ('unique', 'unique_attacks')]:
                                    for m in roster_char.get(k, []):
                                        movesList.append({"name": m['name'], "type": typ, "inputs": [m['input']]})
                            
                            if movesList:
                                # Normalize
                                normalized = []
                                for m in movesList:
                                    n_move = dict(m)
                                    if 'input' in n_move and 'inputs' not in n_move:
                                        n_move['inputs'] = [n_move.pop('input')]
                                    if 'id' not in n_move:
                                        n_move['id'] = n_move['name'].lower().replace(' ', '-').replace("'", "")
                                    if 'type' in n_move:
                                        t = n_move['type'].lower()
                                        if 'super' in t: n_move['type'] = 'super'
                                        elif 'special' in t: n_move['type'] = 'special'
                                        elif 'normal' in t: n_move['type'] = 'normal'
                                        elif 'unique' in t: n_move['type'] = 'unique'
                                        elif 'throw' in t: n_move['type'] = 'throw'
                                    normalized.append(n_move)
                                
                                out_doc = {
                                    "game": dgame,
                                    "character": cname,
                                    "movesList": normalized
                                }
                                with open(f, 'w', encoding='utf-8') as out_f:
                                    json.dump(out_doc, out_f, indent=2)
                                fixed_count += 1
                                found = True
                                break
                if found: break
                
            if not found:
                missing_moves += 1

    print(f"Scanned jsons. Found {broken_count} empty/broken. Fixed {fixed_count}. Still missing: {missing_moves}")

if __name__ == '__main__':
    main()
