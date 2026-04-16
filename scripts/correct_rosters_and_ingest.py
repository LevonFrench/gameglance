import os
import re
import json

WIKI_GUIDES = 'wiki/raw/guides'
DATA_DIR = 'public/data'
TS_FILE = 'src/games.ts'
ROSTER_TXT = 'parsed_roster.txt'

def get_tokens(name):
    # remove text in parentheses
    name = re.sub(r'\(.*?\)', '', name)
    words = re.findall(r'[a-zA-Z0-9]+', name.lower())
    return set([w for w in words if len(w) > 1 and w not in ['the', 'of', 'and', 'in', 'ver', 'edition', 'champion', 'arcade', 'ultimate', 'super', 'new', 'alpha']])

def fuzzy_match_name(name, roster_dict):
    clean_name = re.sub(r'[^a-zA-Z0-9]', '', name.lower())
    for r_name, r_count in roster_dict.items():
        if re.sub(r'[^a-zA-Z0-9]', '', r_name.lower()) == clean_name:
            return r_count
    return None

def main():
    # 1. Load correct roster counts
    roster_dict = {}
    with open(ROSTER_TXT, 'r', encoding='utf-8') as rf:
        for line in rf:
            if ':' in line:
                parts = line.split(':')
                rname = ":".join(parts[:-1]).strip()
                rcount = int(parts[-1].strip())
                roster_dict[rname] = rcount
                
    # 2. Parse games.ts
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

    game_objs = []
    for g in games:
        m_id = re.search(r'id:\s*([\'"])(.*?)\1', g)
        m_name = re.search(r'name:\s*([\'"])(.*?)\1', g)
        if m_id and m_name:
            gid = m_id.group(2)
            gname = m_name.group(2)
            
            # Apply TRUE roster count!
            true_roster = fuzzy_match_name(gname, roster_dict)
            if not true_roster:
                true_roster = 999
            
            char_block_match = re.search(r'(characters:\s*\[\s*)([\s\S]*?)(\s*\])', g)
            chars = []
            c_pre = "characters: [\n      "
            c_post = "\n    ]"
            if char_block_match:
                c_pre = char_block_match.group(1)
                c_post = char_block_match.group(3)
                for cm in re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"],\s*name:\s*[\'"]([^\'"]+)[\'"]\s*\}', char_block_match.group(2)):
                    # Clear out the previously generated 'unknown' garbage if any exists, and keep actual valid chars
                    if not cm.group(1).startswith('unknown-'):
                        chars.append({'id': cm.group(1), 'name': cm.group(2)})
            
            game_objs.append({
                'block': g,
                'id': gid,
                'name': gname,
                'tokens': get_tokens(gname),
                'rosterCount': true_roster,
                'characters': chars,
                'c_pre': c_pre,
                'c_post': c_post,
            })

    # Sort games by token length descending to try connecting to the most specific game title first
    sorted_games = sorted(game_objs, key=lambda x: len(x['tokens']), reverse=True)
    all_gids = set([g['id'] for g in game_objs])

    # 3. Process Gopher Guides safely! Discard any directory that directly matches a game ID!
    for char_slug in os.listdir(WIKI_GUIDES):
        if char_slug in all_gids:
            continue # This is a game overview folder, NOT a character!
            
        char_path = os.path.join(WIKI_GUIDES, char_slug)
        if not os.path.isdir(char_path): continue
        
        char_name_pretty = char_slug.replace('-', ' ').title()
        
        for file in os.listdir(char_path):
            if not file.endswith('.txt'): continue
            file_path = os.path.join(char_path, file)
            try:
                with open(file_path, 'r', encoding='latin1') as f:
                    lines = f.readlines()
            except:
                continue
                
            chunk = "".join(lines[:500]).lower()
            
            # Find which games this text belongs to
            matched_games = []
            for g in sorted_games:
                if not g['tokens']: continue
                if all(re.search(r'\b' + re.escape(t) + r'\b', chunk) for t in g['tokens']):
                    matched_games.append(g)

            if not matched_games:
                gfrancs = [g for g in sorted_games if "guilty" in g['tokens'] and "gear" in g['tokens']]
                if "guilty gear" in chunk and gfrancs:
                    matched_games.extend(gfrancs)
                kfrancs = [g for g in sorted_games if "king" in g['tokens'] and "fighters" in g['tokens']]
                if "king of fighters" in chunk and kfrancs:
                    matched_games.extend(kfrancs)
                sfrancs = [g for g in sorted_games if "street" in g['tokens'] and "fighter" in g['tokens'] and "iii" in g['tokens']]
                if ("street fighter iii" in chunk or "sf3" in chunk or "street fighter 3" in chunk) and sfrancs:
                    matched_games.extend(sfrancs)

            for bg in matched_games:
                if any(c['id'] == char_slug for c in bg['characters']):
                    continue
                
                # Check roster limit accurately
                if len(bg['characters']) >= bg['rosterCount']:
                    continue
                
                bg['characters'].append({'id': char_slug, 'name': char_name_pretty})
                
                # Create basic JSON structure
                game_data_dir = os.path.join(DATA_DIR, bg['id'])
                os.makedirs(game_data_dir, exist_ok=True)
                json_path = os.path.join(game_data_dir, f"{char_slug}.json")
                
                moves = []
                move_pattern = re.compile(r'^\s*([A-Za-z\- \']+?)\s{2,}(.*(?:QCF|QCB|HCF|HCB|DP|360|720|[UBDF]+[\s\+,]+|LP|MP|HP|LK|MK|HK|P|K).*)$', re.IGNORECASE)
                for line in lines:
                    if len(moves) > 30: break
                    m = move_pattern.match(line)
                    if m:
                        moves.append({
                            "id": re.sub(r'[^a-z0-9]', '', m.group(1).lower().replace(' ', '')),
                            "name": m.group(1).strip(),
                            "type": "special",
                            "inputs": [m.group(2).strip()]
                        })
                
                if not os.path.exists(json_path) or len(moves) > 0:
                    try:
                        with open(json_path, 'w', encoding='utf-8') as jf:
                            json.dump({
                                "game": bg['name'],
                                "character": char_name_pretty,
                                "movesList": moves if moves else [{"id":"unknown-1", "name":"Coming Soon", "type":"special", "inputs":["?"]}],
                                "combosList": []
                            }, jf, indent=2)
                    except:
                        pass
                        
    # 4. Add placeholders for missing rosterCount!
    for g in game_objs:
        while len(g['characters']) < g['rosterCount']:
            ukn = f"unknown-{len(g['characters'])+1}"
            g['characters'].append({'id': ukn, 'name': 'Unknown'})
            
    # Write back to TS_FILE
    new_ts_blocks = []
    
    def clean_name(n):
        return n.replace("'", "\\'")

    for g in game_objs:
        char_str = g['c_pre'] + ",\n      ".join([f"{{ id: '{c['id']}', name: '{clean_name(c['name'])}' }}" for c in g['characters']]) + g['c_post']
        
        block = g['block']
        if "rosterCount:" in block:
            block = re.sub(r'rosterCount:\s*\d+', f'rosterCount: {g["rosterCount"]}', block)
        else:
            block = re.sub(r'(releaseYear:\s*\d+,?)', f'\\1\n    rosterCount: {g["rosterCount"]},', block)

        
        old_char_block_match = re.search(r'(characters:\s*\[[\s\S]*?\])', block)
        if old_char_block_match:
            new_block = block.replace(old_char_block_match.group(1), char_str)
            new_ts_blocks.append(new_block)
        else:
            new_ts_blocks.append(block)
            
    final_ts = prefix + ",\n  ".join(new_ts_blocks) + postfix
    
    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(final_ts)
    print("DONE! Fixed rosters and injected missing characters securely.")

if __name__ == "__main__":
    main()
