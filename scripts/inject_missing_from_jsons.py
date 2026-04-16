import os
import re
import json

TS_FILE = 'src/games.ts'
DATA_DIR = 'public/data'

def main():
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
    total_added = 0
    
    for g in games:
        m_id = re.search(r'id:\s*[\'"]([^\'"]+)[\'"]', g)
        m_roster = re.search(r'rosterCount:\s*(\d+)', g)
        
        if not m_id:
            merged_blocks.append(g)
            continue
            
        gid = m_id.group(1)
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
        
        game_data_dir = os.path.join(DATA_DIR, gid)
        if os.path.isdir(game_data_dir):
            for file in os.listdir(game_data_dir):
                if file.endswith('.json'):
                    cid = file.replace('.json', '')
                    if cid not in existing_ids:
                        # Attempt to read the character name from the json
                        try:
                            with open(os.path.join(game_data_dir, file), 'r', encoding='utf-8') as f:
                                j_data = json.load(f)
                                cname = j_data.get('character', cid.replace('-', ' ').title())
                        except:
                            cname = cid.replace('-', ' ').title()
                            
                        existing_chars.append({'id': cid, 'name': cname})
                        total_added += 1
                        
        # Restrict up to roster count
        existing_chars = existing_chars[:groster]
        
        char_str = ",\n      ".join([f"{{ id: '{c['id']}', name: '{c['name']}' }}" for c in existing_chars])
        new_block = g[:char_block_match.start()] + c_pre + char_str + c_post + g[char_block_match.end():]
        merged_blocks.append(new_block)

    full_ts = prefix + ",\n  ".join(merged_blocks) + "\n" + postfix

    with open(TS_FILE, 'w', encoding='utf-8') as f:
        f.write(full_ts)

    print(f"Added {total_added} characters from existing JSON files.")

if __name__ == '__main__':
    main()
