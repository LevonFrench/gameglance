import json
import os
import re

def slugify(s):
    return re.sub(r'[^a-z0-9]+', '-', str(s).lower()).strip('-')

for f in os.listdir('faqs/old'):
    if not f.endswith('.json'): continue
    path = os.path.join('faqs/old', f)
    with open(path, 'r', encoding='utf-8') as jf:
        data = json.load(jf)
    game_title = ""
    if isinstance(data, dict):
        game_title = data.get('game_title') or data.get('game')
    if not game_title:
        game_title = f.replace('.json', '')
    print(f"{f} -> {slugify(game_title)}")
