import email
import glob
import os
import json
import re
from bs4 import BeautifulSoup
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Game directory configuration
PROJECT_ROOT = r'J:\projects\GameGlance'
DATA_DIR = os.path.join(PROJECT_ROOT, 'public', 'data', 'jojos-bizarre-adventure-all-star-battle-r')
MHTML_FILES = glob.glob(os.path.join(PROJECT_ROOT, '*.mhtml'))

if not MHTML_FILES:
    print('Error: No MHTML file found in the project root.')
    sys.exit(1)

mhtml_file = MHTML_FILES[0]
print(f'Using MHTML file: {mhtml_file}')

if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

# Parse MHTML into HTML
with open(mhtml_file, 'r', encoding='utf-8') as f:
    msg = email.message_from_file(f)

html_content = ''
for part in msg.walk():
    if part.get_content_type() == 'text/html':
        payload = part.get_payload(decode=True)
        if payload is not None:
            html_content = payload.decode(part.get_content_charset() or 'utf-8', errors='replace')
        break

soup = BeautifulSoup(html_content, 'html.parser')

img_map = {
    'Arcade-Button-LPunch.png': 'L',
    'Arcade-Button-MPunch.png': 'M',
    'Arcade-Button-HPunch.png': 'H',
    'Arcade-Button-Special.png': 'S',
    'Arcade-Button-Punch.png': 'Atk',
    'Arcade-Button-2xPunch.png': '2 Atk',
    'Arcade-Button-3xPunch.png': '3 Atk',
    'Arcade-Stick-Right.png': '6',
    'Arcade-Stick-Left.png': '4',
    'Arcade-Stick-Up.png': '8',
    'Arcade-Stick-Down.png': '2',
    'Arcade-Stick-UR.png': '9',
    'Arcade-Stick-UL.png': '7',
    'Arcade-Stick-DR.png': '3',
    'Arcade-Stick-DL.png': '1',
    'Arcade-Stick-Qcf.png': '236',
    'Arcade-Stick-Qcb.png': '214',
    'Arcade-Stick-Dp.png': '623',
    'Arcade-Stick-RDp.png': '421',
    'Arcade-Stick-Hcf.png': '41236',
    'Arcade-Stick-Hcb.png': '63214',
    'Arcade-Stick-CB.png': '[4]',
    'Arcade-Stick-CF.png': '[6]',
    'Arcade-Stick-Neutral.png': '5',
    'Arcade-Stick-LR.png': '4 6'
}

def parse_input(td):
    import copy
    my_td = copy.copy(td)
    for img in my_td.find_all('img'):
        src = img.get('src', '')
        filename = src.split('/')[-1]
        mapped = img_map.get(filename, filename)
        img.replace_with(f' {mapped} ')
    
    text = my_td.text.replace('\n', ' ').strip()
    return ' '.join(text.split())

headers = soup.find_all(['h2', 'h3'])
total_processed = 0

for i, header in enumerate(headers):
    raw_name = header.text.replace('[edit | edit source]', '').strip()
    
    # Filter out non-character headers
    if raw_name in ['Contents', 'Navigation menu', 'Namespaces', 'Views', 'Personal tools', 'Search', 'Navigation', 'Tools', 'DLC characters', ''] or 'JoJo' in raw_name:
        continue
    
    # Keep the (Part 4) etc. so that filenames are unique
    filename = re.sub(r'[^a-zA-Z0-9]+', '-', raw_name).lower().strip('-')
    
    next_header = headers[i+1] if i + 1 < len(headers) else None
    
    moves = []
    sibling = header.find_next_sibling()
    while sibling and sibling != next_header:
        # Ignore nested headers inside, stop only at the next known character header
        if sibling in headers:
            break
            
        outer_tables = sibling.find_all('table', recursive=False) if hasattr(sibling, 'find_all') else []
        if sibling.name == 'table':
            outer_tables.append(sibling)
            
        for outer in outer_tables:
            type_td = outer.find('td')
            if not type_td: continue
            
            # Extract just the text from type_td, ignore the inner nested tables text
            move_type = ''.join([str(c) for c in type_td.contents if isinstance(c, str)]).strip()
            if not move_type:
                move_type = type_td.text.strip().split('\n')[0].strip()
            
            # Each inner table corresponds to a single move
            for inner_table in outer.find_all('table'):
                for tr in inner_table.find_all('tr'):
                    tds = tr.find_all('td')
                    if len(tds) >= 2:
                        m_name = tds[0].text.strip()
                        m_input = parse_input(tds[1])
                        if m_name:
                            moves.append({'name': m_name, 'input': m_input, 'type': move_type})
                            
        sibling = sibling.find_next_sibling()
        
    if moves:
        char_data = {
            'name': raw_name,
            'movesList': moves
        }
        
        out_path = os.path.join(DATA_DIR, f'{filename}.json')
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump(char_data, f, indent=2)
        total_processed += 1
        print(f'Processed {raw_name} -> {filename}.json ({len(moves)} moves)')

print(f'\nSuccess: Generated {total_processed} character JSON files.')
