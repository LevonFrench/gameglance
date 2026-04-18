from bs4 import BeautifulSoup
import json

with open('ryu_page.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

moves = soup.select('.movedata-container')
for i, m in enumerate(moves[25:35]): 
    name_items = m.select('.movedata-flex-framedata-name-item')
    name = "Unknown"
    if len(name_items) >= 2:
        name = name_items[0].text.strip().replace('\n', ' ')
        
    input_str = ""
    if len(name_items) >= 2:
        for child in name_items[1].descendants:
            if child.name == 'img' and child.get('alt'):
                input_str += child['alt'] + ' '
            elif isinstance(child, str) and child.strip():
                input_str += child.strip() + ' '
                
    print(f'Move {i}: {name} -> Input: {input_str.strip().replace("  ", " ")}')
