import os
import json
import re

def main():
    ts_path = 'src/games.ts'
    with open(ts_path, 'r', encoding='utf-8') as f:
        ts_content = f.read()
        
    data_dir = 'public/data'
    
    # We will split the ts_content by '  {', which usually begins a game block.
    # But a much safer way is to build a dictionary of game_id -> text block, and then recombine.
    # Let's split using a token that splits exactly at the game boundary.
    parts = re.split(r'(\n  \{\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)
    
    # parts[0] is everything before the first game.
    # parts[1] is the delimiter: "\n  {\n    id: 'game-id'"
    # parts[2] is the body of the game block.
    # and so on...
    
    game_blocks = {}
    game_order = []
    
    prefix = parts[0]
    
    for i in range(1, len(parts), 2):
        delim = parts[i]
        body = parts[i+1]
        
        # Extract ID from delim
        id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", delim)
        if not id_match:
            continue
            
        gid = id_match.group(1)
        game_blocks[gid] = delim + body
        game_order.append(gid)
        
    # Now crawl public/data
    for gid in os.listdir(data_dir):
        game_dir = os.path.join(data_dir, gid)
        if not os.path.isdir(game_dir): continue
        
        if gid not in game_blocks:
            # We don't have this game registered at all.
            # We need to create a new game block!
            print(f"Adding completely new game: {gid}")
            
            # Read one of the chars to guess the title, or format from slug
            new_title = gid.replace('-', ' ').title()
            for cf in os.listdir(game_dir):
                if cf.endswith('.json'):
                    try:
                        cdata = json.load(open(os.path.join(game_dir, cf), 'r', encoding='utf-8'))
                        if cdata.get('game_title'): new_title = cdata['game_title']
                        elif cdata.get('game'): new_title = cdata['game']
                        break
                    except: pass
                    
            new_block = f"""
  {{
    id: '{gid}',
    name: "{new_title}",
    developer: "Unknown",
    releaseYear: 2000,
    platform: "Various",
    rosterCount: 0,
    characters: [
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  }}"""
            if game_order:
                # remove the trailing ]; from the last game if we are appending
                game_blocks[game_order[-1]] = re.sub(r'\];\s*$', '', game_blocks[game_order[-1]])
                # We can just add it to game_blocks
                # But wait, it's easier to just add it as a new game in the dictionary
                game_blocks[gid] = new_block
                game_order.append(gid)
            
        # Find characters to inject
        block_text = game_blocks[gid]
        
        for cf in os.listdir(game_dir):
            if not cf.endswith('.json'): continue
            
            cid = cf.replace('.json', '')
            
            # Check if this character is already in the game's text block
            if f"id: '{cid}'" in block_text or f'id: "{cid}"' in block_text:
                continue
                
            # If not, we need to append it!
            # Find the characters array
            try:
                cdata = json.load(open(os.path.join(game_dir, cf), 'r', encoding='utf-8'))
                cname = cdata.get('name', cid.replace('-', ' ').title())
                mcount = len(cdata.get('movesList', []))
            except:
                continue
                
            char_line = f"      {{ id: '{cid}', isHidden: true, name: '{cname} (Coming Soon)', moveCount: {mcount} }}"
            
            # Inject it just before the closing ] of the characters array
            # Find `characters: [`
            char_start = block_text.find('characters: [')
            if char_start != -1:
                char_end = block_text.find(']', char_start)
                
                # Extract the array content
                array_inner = block_text[char_start + 13:char_end]
                
                if array_inner.strip():
                    new_inner = array_inner.rstrip() + ",\n" + char_line + "\n    "
                else:
                    new_inner = "\n" + char_line + "\n    "
                    
                block_text = block_text[:char_start + 13] + new_inner + block_text[char_end:]
            else:
                 print(f"WARNING: Game {gid} is missing a characters array entirely!")
                 
        game_blocks[gid] = block_text
        
    # Reassemble ts_content
    # For the newly added games, we must ensure the file ends with ];
    final_content = prefix + "".join([game_blocks[gid] for gid in game_order])
    if not final_content.strip().endswith('];'):
        final_content = re.sub(r'\}\s*$', '}\n];\n', final_content.strip())
        
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
        
    print("Safely injected all characters from public/data/ into src/games.ts!")

if __name__ == '__main__':
    main()
