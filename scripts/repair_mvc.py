import urllib.request
import json
import ssl
import os
import re
import time

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

GAME_PREFIXES = {
    'marvel-vs-capcom-clash-of-super-heroes': 'Marvel_vs_Capcom',
    'marvel-vs-capcom-2': 'Marvel_vs_Capcom_2',
    'ultimate-marvel-vs-capcom-3': 'Ultimate_Marvel_vs_Capcom_3',
    'marvel-vs-capcom-infinite': 'Marvel_vs_Capcom_Infinite',
}

def get_roster(game_id):
    path = f"public/data/{game_id}/_roster.json"
    if not os.path.exists(path):
        return []
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def fetch_wikitext(title):
    url = f"https://wiki.supercombo.gg/api.php?action=query&prop=revisions&rvprop=content&rvslots=main&titles={title}&format=json"
    url = url.replace(' ', '_')
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode('utf-8'))
            pages = data['query']['pages']
            for page_id in pages:
                if page_id == '-1':
                    return None
                text = pages[page_id]['revisions'][0]['slots']['main']['*']
                if text.upper().startswith('#REDIRECT'):
                    redirect_title = re.search(r'\[\[(.*?)\]\]', text).group(1)
                    # supercombo might have nested redirects but one is enough
                    return fetch_wikitext(redirect_title.split('#')[0])
                return text
    except Exception as e:
        print(f"Error fetching {title}: {e}")
        return None

def standardize_input(raw):
    raw = re.sub(r'\(.*?\)', '', raw)
    raw = raw.split(' when ')[0]
    raw = raw.split(' during ')[0]
    raw = raw.split(' if ')[0]
    raw = raw.replace('Charge', '').replace('charge', '').strip()
    raw = raw.replace(' or ', '/')
    
    replacements = {
        '{{b}}': '[4]', '{{f}}': '6', '{{d}}': '[2]', '{{u}}': '8',
        '{{db}}': '1', '{{df}}': '3', '{{uf}}': '9', '{{ub}}': '7',
        '{{qcf}}': '236', '{{qcb}}': '214', '{{dp}}': '623', '{{rdp}}': '421',
        '{{hcf}}': '41236', '{{hcb}}': '63214', '{{360}}': '360', '{{720}}': '720',
        '{{p}}': 'P', '{{k}}': 'K', '{{lp}}': 'LP', '{{mp}}': 'MP', '{{hp}}': 'HP',
        '{{lk}}': 'LK', '{{mk}}': 'MK', '{{hk}}': 'HK',
        '{{s}}': 'S', '{{l}}': 'L', '{{m}}': 'M', '{{h}}': 'H',
        '{{a1}}': 'A1', '{{a2}}': 'A2',
        '{{mash}}': 'MASH', '{{hold}}': 'HOLD', '{{release}}': 'RELEASE', '{{atk}}': 'ATK',
        '{{aironly}}': '', '{{air}}': '', ' ': '', '+': '', ',': '',
        '*': '', 'Assist:': '', 'XX': 'PP', 'xx': 'PP',
    }
    for k, v in replacements.items():
        raw = raw.replace(k, v)
        raw = raw.replace(k.upper(), v)
        
    return raw.strip()

def parse_mvc_wikitext(text):
    moves = {}
    lines = text.split('\n')
    current_move = None
    for line in lines:
        line = line.strip()
        if line.startswith(';'):
            current_move = line[1:].replace('{{aironly}}', '').replace('{{Air}}', '').replace('{{air}}', '').strip()
        elif line.startswith('*') and current_move:
            input_line = line[1:].strip()
            # Only take the first line of input if it has multiple bullets
            if current_move not in moves:
                moves[current_move] = standardize_input(input_line)
            current_move = None
            
    # Cargo table parser
    blocks = text.split('{{')[1:]
    for block in blocks:
        if 'MoveTableItem' in block or 'ComboTableItem' in block or 'Data/Special' in block or 'MoveData' in block or 'AttackData' in block:
            name_match = re.search(r'\|\s*name\s*=(.*?)(?:\||\n)', block, re.IGNORECASE)
            input_match = re.search(r'\|\s*input\s*=(.*?)(?:\||\n)', block, re.IGNORECASE)
            if name_match and input_match:
                name = name_match.group(1).strip()
                inp = input_match.group(1).strip()
                moves[name] = standardize_input(inp)
                
    return moves

def main():
    dump_dir = 'wiki/raw/supercombo_dump'
    os.makedirs(dump_dir, exist_ok=True)
    
    for game_id, prefix in GAME_PREFIXES.items():
        print(f"\n=== {game_id} ===")
        game_dump_dir = os.path.join(dump_dir, game_id)
        os.makedirs(game_dump_dir, exist_ok=True)
        
        roster = get_roster(game_id)
        for char in roster:
            char_id = char['id']
            char_name = char['name']
            
            name_formatted = char_name.replace(' ', '_')
            
            # Special exceptions
            if char_name == 'Doctor Doom': name_formatted = 'Dr._Doom'
            if char_name == 'M. Bison': name_formatted = 'M._Bison'
            if char_name == 'C. Viper': name_formatted = 'C._Viper'
            
            title = f"{prefix}/{name_formatted}"
            
            dump_file = os.path.join(game_dump_dir, f"{char_id}.txt")
            if os.path.exists(dump_file):
                with open(dump_file, 'r', encoding='utf-8') as f:
                    content = f.read()
            else:
                content = fetch_wikitext(title)
                if content:
                    with open(dump_file, 'w', encoding='utf-8') as f:
                        f.write(content)
                time.sleep(1.5) # Throttle to prevent Cloudflare/Wiki bans
                        
            if not content:
                print(f"  [!] Failed to get data for {char_name}")
                continue
                
            parsed_moves = parse_mvc_wikitext(content)
            
            if not parsed_moves:
                continue
                
            json_path = f"public/data/{game_id}/{char_id}.json"
            if not os.path.exists(json_path):
                continue
                
            with open(json_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                
            updated = 0
            for move in data.get('movesList', []):
                move_name = move.get('name', '')
                
                # Check match
                found_inp = None
                if move_name in parsed_moves:
                    found_inp = parsed_moves[move_name]
                else:
                    for k, v in parsed_moves.items():
                        if k.lower() == move_name.lower() or k.lower() in move_name.lower():
                            if len(k) > 4:
                                found_inp = v
                                break
                                
                if found_inp:
                    # Update input
                    move['input'] = found_inp
                    updated += 1
                                
            with open(json_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)
                
            if updated > 0:
                print(f"  Updated {updated} moves for {char_name}")

if __name__ == "__main__":
    main()
