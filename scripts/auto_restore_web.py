import json, os, re, string, time
import requests
from bs4 import BeautifulSoup
import urllib.parse

def clean_name(name):
    return re.sub(r'[^a-zA-Z0-9]', '', name.lower())

def guess_wiki_domains(game_tokens):
    gstr = " ".join(game_tokens).lower()
    if any(x in gstr for x in ['marvel', 'capcom', 'street fighter', 'vampire', 'darkstalkers', 'snk']):
        return ["supercombo.gg"]
    if any(x in gstr for x in ['guilty gear', 'blazblue', 'persona', 'under night', 'dnf', 'granblue']):
        return ["dustloop.com"]
    if any(x in gstr for x in ['melty', 'samurai shodown', 'kof', 'king of fighters', 'fatal fury', 'art of fighting', 'world heroes']):
        return ["dreamcancel.com", "mizuumi.wiki", "supercombo.gg"]
    if 'mortal kombat' in gstr:
        return ["mortalkombat.fandom.com"]
    if 'virtua fighter' in gstr:
        return ["virtuafighter.com"]
    if 'tekken' in gstr:
        return ["tekken.fandom.com", "wavu.wiki"]
    return ["supercombo.gg", "dustloop.com", "mizuumi.wiki"]

def scrape_fandom(domain, char_name):
    url = f"https://{domain}/api.php?action=query&prop=revisions&rvprop=content&titles={urllib.parse.quote(char_name)}&format=json"
    moves = []
    try:
        data = requests.get(url, timeout=5).json()
        pages = data['query']['pages']
        val = list(pages.values())[0]
        content = val['revisions'][0]['*']
        pattern = re.compile(r"'''(.*?)''':?\s*([A-Za-z0-9\+\-\*\/, \(\)]+)")
        seen = set()
        for m in pattern.finditer(content):
            name = m.group(1).replace('[[', '').replace(']]', '').strip()
            inputs = m.group(2).strip()
            if len(inputs) > 30 or len(name) < 3: continue
            
            cname = clean_name(name)
            if cname in seen: continue
            seen.add(cname)
            moves.append({"id": cname, "name": string.capwords(name), "type": "special", "inputs": [inputs]})
    except:
        pass
    return moves

def scrape_wiki_tables(domain, game_name, char_name):
    moves = []
    paths = [
        f"https://wiki.{domain}/w/{game_name.replace(' ', '_')}/{char_name.replace(' ', '_')}",
        f"https://www.{domain}/w/{game_name.replace(' ', '_')}/{char_name.replace(' ', '_')}",
        f"https://wiki.{domain}/w/{char_name.replace(' ', '_')}"
    ]
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    html = None
    for url in paths:
        try:
            res = requests.get(url, headers=headers, timeout=5)
            if res.status_code == 200:
                html = res.text
                break
        except:
            pass
            
    if not html: return []
    
    soup = BeautifulSoup(html, 'html.parser')
    for table in soup.find_all('table'):
        rows = table.find_all('tr')
        if not rows: continue
        headers = [th.text.strip().lower() for th in rows[0].find_all(['th', 'td'])]
        
        name_idx, input_idx = -1, -1
        for i, h in enumerate(headers):
            if 'name' in h or 'move' in h: name_idx = i
            if 'input' in h or 'command' in h or h == 'motion': input_idx = i
            
        if name_idx == -1 and input_idx == -1: continue
        if input_idx != -1 and name_idx == -1: name_idx = 0
            
        seen = set()
        for row in rows[1:]:
            cols = row.find_all(['td', 'th'])
            if len(cols) <= max(name_idx, input_idx): continue
            
            name = cols[name_idx].text.strip()
            inputs = cols[input_idx].text.strip()
            if not name: name = f"Move {len(moves)+1}"
            if not inputs or len(inputs) > 30: continue
            
            name = name.replace('\\n', ' ')
            inputs = inputs.replace('\\n', ' ')
            cname = clean_name(name)
            if cname in seen: continue
            seen.add(cname)
            moves.append({"id": cname, "name": string.capwords(name), "type": "special", "inputs": [inputs]})
            if len(moves) > 40: break
    return moves

def search_ddg(game, char):
    if 'mortal' in game.lower(): return scrape_fandom("mortalkombat.fandom.com", char)
    elif 'tekken' in game.lower(): return scrape_fandom("tekken.fandom.com", char)
    
    domains = guess_wiki_domains([game])
    for dom in domains:
        moves = scrape_wiki_tables(dom, game, char)
        if moves: return moves
    return []

def generate_missing(report):
    with open('games_dump.json', 'r', encoding='utf-8') as f:
        all_games = json.load(f)
        
    for game in report:
        print(f"\n--- Web Fetching [{game['year']}] {game['name']} ({game['id']}) ---")
        needs_work = game.get('missing_files', []) + game.get('empty_moves', [])
        
        ts_game = next((g for g in all_games if g['id'] == game['id']), None)
        if not ts_game: continue
        
        game_data_dir = os.path.join('public/data', game['id'])
        os.makedirs(game_data_dir, exist_ok=True)
        
        for cid in set(needs_work):
            cname = next((c['name'] for c in ts_game['characters'] if c['id'] == cid), cid.title())
            print(f"Scraping wiki databanks for {cname} from {game['name']}...")
            moves = search_ddg(game['name'], cname)
            
            if not moves:
                moves = [{"id": "generic-neutral", "name": "Neutral Attack", "type": "normal", "inputs": ["P"]}]
                print(f"  -> Failed to find reliable web data. Inserted generics.")
            else:
                print(f"  -> Found {len(moves)} moves from web sources!")
                
            out_doc = {"game": game['name'], "character": cname, "movesList": moves}
            with open(os.path.join(game_data_dir, f"{cid}.json"), 'w', encoding='utf-8') as jf:
                json.dump(out_doc, jf, indent=2)

if __name__ == "__main__":
    with open('games_dump.json', 'r', encoding='utf-8') as f:
        games = json.load(f)

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
                        data = json.load(cf)
                        ml = data.get('movesList', [])
                        # We must catch standard fallbacks from the earlier script or empty arrays:
                        if not ml or len(ml) <= 2: 
                            is_default = False
                            for m in ml:
                                if "basic" in m.get('id', '') or "unknown" in m.get('id', '') or "generic" in m.get('id', ''):
                                    is_default = True
                            if len(ml) == 0 or is_default:
                                empty_moves.append(cid)
                except:
                    empty_moves.append(cid)
                    
        if missing_chars or empty_moves:
            missing_report.append({"id": gid, "name": gname, "year": year, "missing_files": missing_chars, "empty_moves": empty_moves})
            
    print(f"Executing web restoration across {len(missing_report)} titles...")
    generate_missing(missing_report)
