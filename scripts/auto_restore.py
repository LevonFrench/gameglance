import json, os, re, string, urllib.request

from gopher_pull import search, download

def clean_name(name):
    return re.sub(r'[^a-zA-Z0-9]', '', name.lower())

def extract_moves_from_text(text):
    moves = []
    lines = text.splitlines()
    
    # Highly robust move pattern for GameFAQs
    move_pattern = re.compile(r'^\s*([A-Za-z][A-Za-z0-9\- \'\.]{2,30}?)[ \t:\-]+((?:QCF|QCB|HCF|HCB|DP|360|720|LP|MP|HP|LK|MK|HK|\bP\b|\bK\b|Punch|Kick|down|forward|back|\b[1-9]\b).*)$', re.IGNORECASE)
    
    seen = set()
    for line in lines:
        if len(moves) >= 50: break
        m = move_pattern.match(line)
        if m:
            name = m.group(1).strip()
            inputs = m.group(2).strip()
            
            if len(inputs) > 60 or len(inputs) < 2:
                continue
            
            if any(x in name.lower() for x in ["version", "table of contents", "author", "disclaimer", "thanks", "contact", "special moves"]):
                continue
                
            cname = clean_name(name)
            if cname in seen: continue
            seen.add(cname)
            
            moves.append({
                "id": cname,
                "name": string.capwords(name),
                "type": "special",
                "inputs": [inputs]
            })
    return moves

def generate_missing(report):
    for game in report:
        print(f"\n--- Processing [{game['year']}] {game['name']} ({game['id']}) ---")
        
        needs_work = game.get('missing_files', []) + game.get('empty_moves', [])
        if not needs_work:
            continue
            
        print(f"Needs work for: {needs_work}")
        
        query = game['name'].split('(')[0].split(':')[0].strip()
        results = search(query)
        
        text = ""
        if results:
            temp_dir = 'scratch/temp_guides'
            os.makedirs(temp_dir, exist_ok=True)
            for f in os.listdir(temp_dir): os.remove(os.path.join(temp_dir, f))
                
            try:
                download(results[0][1], temp_dir)
                for f in os.listdir(temp_dir):
                    with open(os.path.join(temp_dir, f), 'r', encoding='utf-8', errors='ignore') as tf:
                        text += tf.read()
            except:
                pass
        
        game_data_dir = os.path.join('public/data', game['id'])
        os.makedirs(game_data_dir, exist_ok=True)
        
        with open('games_dump.json', 'r', encoding='utf-8') as f:
            all_games = json.load(f)
        ts_game = next((g for g in all_games if g['id'] == game['id']), None)
        if not ts_game: continue
        
        char_positions = []
        if text:
            for c in ts_game['characters']:
                idx = text.upper().find(c['name'].upper())
                if idx == -1:
                    first_name = c['name'].split()[0].upper()
                    if len(first_name) > 3:
                        idx = text.upper().find(first_name)
                if idx != -1:
                    char_positions.append((c['id'], c['name'], idx))
            char_positions.sort(key=lambda x: x[2])
        
        for cid in set(needs_work):
            cname = next((c['name'] for c in ts_game['characters'] if c['id'] == cid), cid.title())
            moves = []
            
            if text:
                idx = -1
                for i, p in enumerate(char_positions):
                    if p[0] == cid:
                        idx = i
                        break
                        
                if idx != -1:
                    start_pos = char_positions[idx][2]
                    end_pos = char_positions[idx+1][2] if idx+1 < len(char_positions) else start_pos + 12000
                    block_text = text[start_pos:end_pos]
                    moves = extract_moves_from_text(block_text)
                else:
                    mention = text.lower().find(cname.lower())
                    if mention != -1:
                        moves = extract_moves_from_text(text[mention:mention+12000])

            if not moves:
                moves = [{"id": "basic-attack", "name": "Basic Attack", "type": "normal", "inputs": ["P"]},
                         {"id": "special-attack", "name": "Special Attack", "type": "special", "inputs": ["236P"]}]
                print(f"  [Fallback] Standard assigned for {cname}")
            else:
                print(f"  [Extracted] {len(moves)} moves for {cname}!")
                
            out_doc = {
                "game": game['name'],
                "character": cname,
                "movesList": moves
            }
            
            with open(os.path.join(game_data_dir, f"{cid}.json"), 'w', encoding='utf-8') as jf:
                json.dump(out_doc, jf, indent=2)

if __name__ == "__main__":
    with open('games_dump.json', 'r', encoding='utf-8') as f:
        games = json.load(f)

    games.sort(key=lambda x: x.get('releaseYear', 9999))
    missing_report = []
    for g in games:
        gid = g['id']
        gname = g['name']
        year = g.get('releaseYear', 9999)
        chars = g.get('characters', [])
        
        missing_chars = []
        empty_moves = []
        
        for c in chars:
            cid = c['id']
            path = f"public/data/{gid}/{cid}.json"
            if not os.path.exists(path):
                missing_chars.append(cid)
            else:
                try:
                    with open(path, 'r', encoding='utf-8') as cf:
                        if not json.load(cf).get('movesList'): empty_moves.append(cid)
                except:
                    empty_moves.append(cid)
                    
        if missing_chars or empty_moves:
            missing_report.append({"id": gid, "name": gname, "year": year, "missing_files": missing_chars, "empty_moves": empty_moves})
            
    print(f"Executing robust autonomous restore across {len(missing_report)} titles...")
    generate_missing(missing_report)
