import os
import re

def main():
    if not os.path.exists('src/games.ts'):
        return

    with open('src/games.ts', 'r', encoding='utf-8') as f:
        content = f.read()
        
    games = set()
    # Match ONLY the top level game blocks, not character blocks
    blocks = re.finditer(r'(\n\s*\{\s*\n\s*id:\s*[\'"]([a-z0-9-]+)[\'"].*?\n\s*\})', content, re.DOTALL)
    
    for match in blocks:
        block_text = match.group(1)
        gid = match.group(2)
        
        # Safely capture strings up to the identical boundary quote
        name_m = re.search(r'name:\s*(["\'])(.*?)\1', block_text)
        if name_m:
            name = name_m.group(2)
            # escape backslashes back
            name = name.replace("\\'", "'").replace('\\"', '"')
            games.add((gid, name))

    missing = []
    for gid, name in games:
        path = os.path.join('public', 'data', gid)
        if not os.path.exists(path):
            missing.append(name)
            continue
            
        json_files = [f for f in os.listdir(path) if f.endswith('.json')]
        if len(json_files) == 0:
            missing.append(name)

    missing.sort()
    
    with open('missing_games.md', 'w', encoding='utf-8') as f:
        f.write('# Missing Move Lists\n\n')
        f.write('The following games are registered in `games.ts` but have zero parsed character JSONs inside `public/data`:\n\n')
        for m in missing:
            f.write(f'- {m}\n')
            
    print(f"Generated missing_games.md with {len(missing)} missing games.")

if __name__ == '__main__':
    main()
