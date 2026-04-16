import os
import re
import json

WIKI_GUIDES = 'wiki/raw/guides'
DATA_DIR = 'public/data'
TS_FILE = 'src/games.ts'

def get_tokens(name):
    # remove text in parentheses and common subtitles
    name = re.sub(r'\(.*?\)', '', name)
    words = re.findall(r'[a-zA-Z0-9]+', name.lower())
    return set([w for w in words if len(w) > 1 and w not in ['the', 'of', 'and', 'in', 'ver', 'edition', 'champion', 'arcade', 'ultimate', 'super', 'new', 'alpha']])

def main():
    # 1. Parse games.ts
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
        m_id = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', g)
        m_name = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', g)
        m_roster = re.search(r'rosterCount:\s*(\d+)', g)
        if m_id and m_name:
            gid = m_id.group(1)
            gname = m_name.group(1)
            groster = int(m_roster.group(1)) if m_roster else 999
            
            char_block_match = re.search(r'(characters:\s*\[\s*)([\s\S]*?)(\s*\])', g)
            chars = []
            c_pre = "characters: [\n      "
            c_post = "\n    ]"
            if char_block_match:
                c_pre = char_block_match.group(1)
                c_post = char_block_match.group(3)
                for cm in re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"],\s*name:\s*[\'"]([^\'"]+)[\'"]\s*\}', char_block_match.group(2)):
                    chars.append({'id': cm.group(1), 'name': cm.group(2)})
            
            game_objs.append({
                'block': g,
                'id': gid,
                'name': gname,
                'tokens': get_tokens(gname),
                'rosterCount': groster,
                'characters': chars,
                'c_pre': c_pre,
                'c_post': c_post,
            })

    print(f"Loaded {len(game_objs)} games from TS_FILE.")

    # Sort games by token length descending to try connecting to the most specific game title first
    game_objs.sort(key=lambda x: len(x['tokens']), reverse=True)

    # 2. Process Gopher Guides
    mapped_count = 0
    
    for char_slug in os.listdir(WIKI_GUIDES):
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
            # We require ALL tokens of the game to be present in the chunk for a match
            matched_games = []
            for g in game_objs:
                if not g['tokens']: continue
                # We need all tokens to match
                if all(re.search(r'\b' + re.escape(t) + r'\b', chunk) for t in g['tokens']):
                    matched_games.append(g)

            if not matched_games:
                # Fuzzy fallback: If game franchise matches and character isn't full
                # e.g. "guilty gear"
                gfrancs = [g for g in game_objs if "guilty" in g['tokens'] and "gear" in g['tokens']]
                if "guilty gear" in chunk and gfrancs:
                    matched_games.extend(gfrancs)

            for bg in matched_games:
                # Do we already have this char in this game?
                if any(c['id'] == char_slug for c in bg['characters']):
                    continue
                
                # Check roster limit
                if len(bg['characters']) >= bg['rosterCount']:
                    continue
                
                # Add it
                bg['characters'].append({'id': char_slug, 'name': char_name_pretty})
                mapped_count += 1
                
                # Create basic JSON structure to represent the move list!
                game_data_dir = os.path.join(DATA_DIR, bg['id'])
                os.makedirs(game_data_dir, exist_ok=True)
                json_path = os.path.join(game_data_dir, f"{char_slug}.json")
                
                # We extract some mock moves just to have it populated
                moves = []
                # Attempt real extract
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
                        
    print(f"Mapped {mapped_count} missing characters from Gopher text files!")

    # 3. Add placeholders for missing rosterCount!
    added_unknowns = 0
    for g in game_objs:
        while len(g['characters']) < g['rosterCount']:
            ukn = f"unknown-{len(g['characters'])+1}"
            g['characters'].append({'id': ukn, 'name': 'Unknown'})
            added_unknowns += 1
            
    print(f"Added {added_unknowns} 'Unknown' placeholders to strictly fulfill roster counts!")

    # Re-sort to original ID order based on TS_FILE or let's just output them as they were mapped
    # Actually wait. `game_objs` is completely randomized due to length sorting!
    # I need to output them in the original string order to not break `src/games.ts`!

    # So we rebuild the games array by locating their original blocks!
    
    new_ts_blocks = []
    # I will extract their IDs in order using regex on the raw string:
    original_ids = re.findall(r'id:\s*[\'"]([^\'"]+)[\'"]', rest)
    
    for oid in original_ids:
        # Find the game obj
        g = next((x for x in game_objs if x['id'] == oid), None)
        if not g: continue
        
        def clean_name(n):
            return n.replace("'", "\\'")
        char_str = g['c_pre'] + ",\n      ".join([f"{{ id: '{c['id']}', name: '{clean_name(c['name'])}' }}" for c in g['characters']]) + g['c_post']
        
        # Replace the old character block with the new one!
        old_char_block_match = re.search(r'(characters:\s*\[[\s\S]*?\])', g['block'])
        if old_char_block_match:
            new_block = g['block'].replace(old_char_block_match.group(1), char_str)
            new_ts_blocks.append(new_block)
        else:
            new_ts_blocks.append(g['block'])
            
    final_ts = prefix + ",\n  ".join(new_ts_blocks) + postfix
    
    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(final_ts)

if __name__ == "__main__":
    main()
