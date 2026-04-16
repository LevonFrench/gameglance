import os
import re
import json

WIKI_CHARS = 'wiki/pages/characters'
WIKI_GUIDES = 'wiki/raw/guides'
DATA_DIR = 'public/data'
TS_FILE = 'src/games.ts'

MOVE_PATTERN = re.compile(r'^\s*([A-Za-z\- \']+?)\s{2,}(.*(?:QCF|QCB|HCF|HCB|DP|360|720|[UBDF]+[\s\+,]+|LP|MP|HP|LK|MK|HK|P|K).*)$', re.IGNORECASE)

def parse_markdown_frontmatter(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    title_match = re.search(r'title:\s*["\']?(.*?)["\']?\s*\n', content)
    games_match = re.search(r'games:\s*\[(.*?)\]', content)
    
    title = title_match.group(1).strip() if title_match else ""
    games = [g.strip().strip("'\"") for g in games_match.group(1).split(',')] if games_match and games_match.group(1).strip() else []
    
    return title, games

def main():
    # 1. Gather true mapped characters from Wiki Frontmatter
    wiki_char_map = {} # mapped by char_id (filename without .md)
    for root, _, files in os.walk(WIKI_CHARS):
        for file in files:
            if not file.endswith('.md'): continue
            char_id = file[:-3]
            file_path = os.path.join(root, file)
            title, games = parse_markdown_frontmatter(file_path)
            
            wiki_char_map[char_id] = {
                'id': char_id,
                'name': title,
                'games': games
            }
            
    print(f"Loaded {len(wiki_char_map)} characters from local wiki.")

    # 2. Extract valid moves for them from Gopher texts
    for char_id, char_info in wiki_char_map.items():
        char_path = os.path.join(WIKI_GUIDES, char_id)
        if not os.path.isdir(char_path):
            char_info['moves'] = []
            continue
            
        char_moves = []
        for g_file in os.listdir(char_path):
            if not g_file.endswith('.txt'): continue
            file_path = os.path.join(char_path, g_file)
            try:
                with open(file_path, 'r', encoding='latin1') as f:
                    lines = f.readlines()
                    
                current_section = "special"
                for line in lines:
                    line = line.strip()
                    if not line: continue
                    if "super" in line.lower() and len(line) < 30:
                        current_section = "super"
                    elif "special" in line.lower() and len(line) < 30:
                        current_section = "special"
                        
                    match = MOVE_PATTERN.match(line)
                    if match:
                        name = match.group(1).strip()
                        inputs = match.group(2).strip()
                        if len(name) < 3 or len(name) > 35: continue
                        if "http" in inputs or "www" in inputs: continue
                        char_moves.append({
                            "name": name,
                            "type": current_section,
                            "inputs": [inputs]
                        })
            except:
                pass
        
        char_info['moves'] = char_moves

    # 3. Inject them into src/games.ts up to rosterCount
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
    added_to_games = 0
    
    for g in games:
        m_id = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', g)
        m_name = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', g)
        m_roster = re.search(r'rosterCount:\s*(\d+)', g)
        
        if not m_id:
            merged_blocks.append(g)
            continue
            
        gid = m_id.group(1)
        gname = m_name.group(1) if m_name else gid
        groster = int(m_roster.group(1)) if m_roster else 999
        
        char_block_match = re.search(r'(characters:\s*\[\s*)([\s\S]*?)(\s*\])', g)
        if not char_block_match:
            merged_blocks.append(g)
            continue
            
        c_pre = char_block_match.group(1)
        c_content = char_block_match.group(2)
        c_post = char_block_match.group(3)
        
        existing_chars = []
        for cm in re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"],\s*name:\s*[\'"]([^\'"]+)[\'"]\s*\}', c_content):
            existing_chars.append({'id': cm.group(1), 'name': cm.group(2)})
            
        existing_ids = [c['id'] for c in existing_chars]
        
        # Find characters mapped to this game in Wiki
        missing_count = groster - len(existing_chars)
        if missing_count > 0:
            for char_id, char_info in wiki_char_map.items():
                if gid in char_info['games'] and char_id not in existing_ids:
                    # Append it
                    existing_chars.append({'id': char_id, 'name': char_info['name']})
                    existing_ids.append(char_id)
                    added_to_games += 1
                    missing_count -= 1
                    
                    # Create the JSON
                    game_data_dir = os.path.join(DATA_DIR, gid)
                    os.makedirs(game_data_dir, exist_ok=True)
                    json_path = os.path.join(game_data_dir, f"{char_id}.json")
                    
                    doc = {
                        "game": gname,
                        "character": char_info['name'],
                        "movesList": char_info['moves']
                    }
                    with open(json_path, 'w', encoding='utf-8') as jf:
                        json.dump(doc, jf, indent=2)
                        
                if missing_count <= 0:
                    break
        
        # Re-build chars
        char_str = ",\n      ".join([f"{{ id: '{c['id']}', name: '{c['name']}' }}" for c in existing_chars])
        if existing_chars:
            char_str = "\n      " + char_str + "\n    "
        new_block = g[:char_block_match.start()] + c_pre.strip() + char_str + c_post.strip() + g[char_block_match.end():]
        merged_blocks.append(new_block)

    full_ts = prefix + ",\n  ".join(merged_blocks) + "\n" + postfix

    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(full_ts)

    print(f"Added {added_to_games} character connections and their moves based on Wiki schema!")

if __name__ == '__main__':
    main()
