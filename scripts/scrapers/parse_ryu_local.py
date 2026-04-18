import json
from bs4 import BeautifulSoup
import re

def get_move_type(heading):
    h = heading.lower()
    if 'standing' in h or 'crouching' in h or 'jumping' in h or 'normals' in h:
        return 'normal'
    if 'command' in h or 'target' in h:
        return 'unique'
    if 'throw' in h:
        return 'throw'
    if 'drive' in h:
        return 'common'
    if 'special' in h:
        return 'special'
    if 'super' in h:
        return 'super'
    return 'normal'

with open('ryu_page.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

moves = []
for m in soup.select('.movedata-container'):
    # Determine type
    heading = 'normal'
    for prev in m.find_all_previous(['h2', 'h3']):
        text = prev.text.strip()
        if text and text not in ['Introduction', 'Classic & Modern Versions Comparison']:
            heading = text
            break
    move_type = get_move_type(heading)
    
    # Name & Input
    name_items = m.select('.movedata-flex-framedata-name-item')
    name = "Unknown"
    move_input = ""
    
    if len(name_items) >= 2:
        name = name_items[0].text.strip().replace('\n', ' ')
        for child in name_items[1].descendants:
            if child.name == 'img' and child.get('alt'):
                move_input += child['alt'] + ' '
            elif isinstance(child, str) and child.strip():
                move_input += child.strip() + ' '
    elif len(name_items) == 1:
        name = name_items[0].text.strip().replace('\n', ' ')
        move_input = name
        
    move_input = move_input.strip().replace('  ', ' ')
    if not move_input: move_input = name
    
    # ID
    move_id = re.sub(r'[^a-z0-9]', '-', name.lower())
    move_id = re.sub(r'-+', '-', move_id).strip('-')
    
    # Frame Data
    table = m.select_one('table.wikitable')
    frame_data = {}
    damage = ""
    if table:
        headers = [th.text.strip() for th in table.select('th')]
        tds = [td.text.strip() for td in table.select('td')[:len(headers)]]
        raw_fd = dict(zip(headers, tds))
        
        # Map to our schema
        if 'Startup' in raw_fd: frame_data['startup'] = raw_fd['Startup']
        if 'Active' in raw_fd: frame_data['active'] = raw_fd['Active']
        if 'Recovery' in raw_fd: frame_data['recovery'] = raw_fd['Recovery']
        if 'On Block' in raw_fd: frame_data['advantage'] = raw_fd['On Block']
        if 'Damage' in raw_fd: damage = raw_fd['Damage']
        
    moves.append({
        "id": move_id,
        "name": name,
        "type": move_type,
        "input": move_input,
        "frameData": frame_data,
        "damage": damage
    })

print(f"Parsed {len(moves)} moves.")
with open('ryu_scraped.json', 'w', encoding='utf-8') as f:
    json.dump(moves, f, indent=2)
