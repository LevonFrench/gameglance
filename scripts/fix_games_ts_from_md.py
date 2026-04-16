import re
import os

def clean_id(name):
    cid = name.lower()
    cid = re.sub(r'[^a-z0-9\s-]', '', cid)
    cid = re.sub(r'\s+', '-', cid)
    cid = re.sub(r'-+', '-', cid)
    return cid.strip('-')

def main():
    if not os.path.exists('master_list.md'):
        print("master_list.md not found.")
        return

    with open('master_list.md', 'r', encoding='utf-8') as f:
        lines = f.readlines()

    master_data = {}
    for line in lines:
        line = line.strip()
        if not line or line.startswith('#'): continue
        
        parts = line.split(' - ')
        if len(parts) >= 4:
            title = parts[0].strip()
            year_idx = -1
            for i in range(1, len(parts)-2):
                if parts[i].strip().isdigit() and len(parts[i].strip()) == 4:
                    year_idx = i
                    break
                    
            if year_idx == -1: year_idx = 1
                
            title = ' - '.join(parts[:year_idx]).strip()
            year = parts[year_idx].strip()
            platform = parts[year_idx+1].strip()
            
            chars_str = ' - '.join(parts[year_idx+2:])
            chars_str = chars_str.split('[cite')[0].strip()
            
            chars = [c.strip().replace(' - ', '-') for c in chars_str.split(',') if c.strip()]
            
            master_data[clean_id(title)] = {
                'title': title,
                'year': year,
                'platform': platform,
                'chars': chars
            }

    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    blocks = re.finditer(r'(\n\s*\{\s*\n\s*id:\s*([\'"])(.*?)\2.*?\n\s*\})', ts_content, re.DOTALL)
    new_ts_content = ts_content
    updates = 0
    
    for match in blocks:
        block_text = match.group(1)
        gid = match.group(3)
        
        if gid in master_data:
            data = master_data[gid]
            y_str = data['year']
            p_str = data['platform'].replace('"', '\\"')
            c_count = len(data['chars'])
            
            char_entries = []
            for c in data['chars']:
                cid = clean_id(c)
                c_clean = c.replace("'", "\\'")
                char_entries.append(f"      {{ id: '{cid}', name: '{c_clean}' }}")
                
            chars_joined = ",\n".join(char_entries)
            new_block = block_text
            
            if 'releaseYear:' in new_block:
                new_block = re.sub(r'releaseYear:\s*\d+,?', f'releaseYear: {y_str},', new_block)
            else:
                new_block = re.sub(r'(id:\s*[\'"].*?[\'"],\n)', r'\1    releaseYear: ' + y_str + ',\n', new_block)
                
            if 'platform:' in new_block:
                new_block = re.sub(r'platform:\s*[\'"].*?[\'"],?', f'platform: "{p_str}",', new_block)
            else:
                new_block = re.sub(r'(releaseYear:\s*\d+,\n)', r'\1    platform: "' + p_str + '",\n', new_block)
                
            if 'rosterCount:' in new_block:
                new_block = re.sub(r'rosterCount:\s*\d+,?', f'rosterCount: {c_count},', new_block)
            else:
                new_block = re.sub(r'(platform:\s*".*?",\n)', r'\1    rosterCount: ' + str(c_count) + ',\n', new_block)
                
            if 'characters:' in new_block:
                new_block = re.sub(r'characters:\s*\[[\s\S]*?\n\s*\]', f'characters: [\n{chars_joined}\n    ]', new_block)
            else:
                new_block = re.sub(r'(rosterCount:\s*\d+,\n)', r'\1\n    characters: [\n' + chars_joined + '\n    ],\n', new_block)

            
            new_ts_content = new_ts_content.replace(block_text, new_block)
            updates += 1

    with open('src/games.ts', 'w', encoding='utf-8') as f:
        f.write(new_ts_content)
        
    print(f"Successfully repaired metadata and rosters for {updates} games in games.ts")

if __name__ == '__main__':
    main()
