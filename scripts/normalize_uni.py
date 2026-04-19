import os
import json

dir_path = 'public/data/under-night-in-birth-ii-[sysceles]'
if not os.path.exists(dir_path):
    print("Not found")
    exit()
    
type_aliases = {
    'normal moves': 'normal', 'attack': 'normal', 'light': 'normal', 'medium': 'normal',
    'crouching light': 'normal', 'crouching medium': 'normal', 'low': 'normal', 'strike': 'normal',
    'string': 'normal', 'combo': 'normal', 'move': 'normal', 'aerial': 'normal',
    'special moves': 'special', 'special (air ok)': 'special', 'special (buffable)': 'special',
    'skill': 'special', 'mp skill': 'special', 'neutral skill': 'special', 'forward skill': 'special',
    'down skill': 'special', 'back skill': 'special', 'aerial skill': 'special', 'neutral mp skill': 'special',
    'forward mp skill': 'special', 'down mp skill': 'special', 'back mp skill': 'special', 'aerial mp skill': 'special',
    'ability': 'special', 'counter special': 'special', 'counter': 'special', 'sp skill': 'special',
    'moon skill': 'special', 'trap': 'special', 'electric strike': 'special', 'defensive': 'special',
    'projectile': 'special', 'armor break': 'special', 'beast special': 'special', 'eddie': 'special',
    'special / guard reversal': 'special', 'special (teleport)': 'special', 'stance': 'special',
    'special action': 'special', 'beast': 'special', 'beast move': 'special', 'smash': 'special',
    'unblockable': 'special', 'charge': 'special', 'instant-motion': 'special', 'deflect': 'special',
    'super arts': 'super', 'super combos': 'super', 'supers': 'super', 'super': 'super',
    'critical art': 'super', 'hyper combo': 'super', 'meteor combo': 'super', 'meteor': 'super',
    'super special move': 'super', 'super special': 'super', 'neo max': 'super', 'climax super special': 'super',
    'climax': 'super', 'overdrive': 'super', 'distortion drive': 'super', 'astral heat': 'super',
    'skybound art': 'super', 'super skybound art': 'super', 'fatal cense': 'super',
    'infinite worth': 'super', 'infinite worth exs': 'super', 'ex special': 'super',
    'beast drive': 'super', 'hyper beast drive': 'super', 'fatal attack': 'super',
    'critical edge': 'super', 'plasma strike': 'super', 'stress shot': 'super', 'ippatsu ougi': 'super',
    'magic': 'super', 'chi': 'super', 'psychic': 'super', 'super (level 1)': 'super',
    'super (level 2)': 'super', 'super (low hp)': 'super', 'install (low hp)': 'super',
    'super move': 'super', 'special throw': 'super', 'desperation': 'super', 'super desperation': 'super',
    'star special': 'super', 'drive': 'special', 'super art': 'super', 'ultimate art': 'super',
    'hidden super': 'super', 'instinct': 'super', 'shadow': 'special', 'anti-air': 'special',
    'final attack': 'super', 'team up': 'super', 'boss/special': 'special', 'boss': 'special',
    'command normal': 'unique', 'command_normal': 'unique', 'unique': 'unique',
    'hold': 'unique', 'launcher': 'unique',
    'command grab': 'throw', 'command throw': 'throw', 'ground throw': 'throw', 'throw': 'throw',
    'system': 'common', 'movement': 'common', 'wild assault': 'common', 'dash': 'common',
    'armor dash': 'common', 'assist call': 'common', 'assists': 'common', 'assist': 'common',
    'grab': 'common', 'beam': 'common', 'pursuit (on downed opponent)': 'common', 'common': 'common',
    'fatality': 'finisher', 'babality': 'finisher', 'friendship': 'finisher', 'stage fatality': 'finisher',
    'no mercy': 'finisher', 'death move': 'finisher', 'extinction': 'finisher', 'finisher': 'finisher'
}

count = 0
for filename in os.listdir(dir_path):
    if not filename.endswith('.json') or filename == '_roster.json':
        continue
        
    filepath = os.path.join(dir_path, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        
    if 'movesList' in data:
        for m in data['movesList']:
            raw_type = m.get('type', 'normal')
            if isinstance(raw_type, str):
                raw_lower = raw_type.lower().strip()
                m['type'] = type_aliases.get(raw_lower, raw_lower)
                
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    count += 1
print(f"Normalized {count} files in UNI2")
