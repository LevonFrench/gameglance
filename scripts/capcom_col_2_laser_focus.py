import os
import json
import re

GAMES = {
    'capcom-vs-snk-2-mark-of-the-millennium-2001': {
        'normals': ['LP', 'MP', 'HP', 'LK', 'MK', 'HK'],
        'throws': ['LP+LK'],
        'roster': ['ryu', 'ken', 'chun-li', 'guile', 'zangief', 'dhalsim', 'ehonda', 'blanka', 'balrog', 'vega', 'sagat', 'mbison', 'sakura', 'cammy', 'akuma', 'dan', 'morrigan', 'maki', 'eagle', 'yun', 'kyosuke', 'rolento', 'evil-ryu', 'shin-akuma', 'kyo', 'iori', 'terry', 'ryo', 'mai', 'kim', 'geese', 'yamazaki', 'raiden', 'rugal', 'vice', 'benimaru', 'yuri', 'king', 'joe', 'athena', 'nakoruru', 'hibiki', 'haohmaru', 'rock', 'chang', 'blood-iori', 'god-rugal']
    },
    'capcom-vs-snk-millennium-fight-2000-pro': {
        'normals': ['LP', 'MP', 'HP', 'LK', 'MK', 'HK'],
        'throws': ['LP+LK'],
        'roster': ['ryu', 'ken', 'chun-li', 'guile', 'zangief', 'dhalsim', 'ehonda', 'blanka', 'balrog', 'vega', 'sagat', 'mbison', 'sakura', 'cammy', 'akuma', 'dan', 'morrigan', 'kyo', 'iori', 'terry', 'ryo', 'mai', 'kim', 'geese', 'yamazaki', 'raiden', 'rugal', 'vice', 'benimaru', 'yuri', 'king', 'joe', 'nakoruru', 'blood-iori']
    },
    'street-fighter-alpha-3': {
        'normals': ['LP', 'MP', 'HP', 'LK', 'MK', 'HK'],
        'throws': ['LP+LK'],
        'roster': ['ryu', 'ken', 'chun-li', 'guile', 'zangief', 'dhalsim', 'ehonda', 'blanka', 'balrog', 'vega', 'sagat', 'mbison', 'sakura', 'cammy', 'akuma', 'dan', 'rose', 'birdie', 'charlie', 'sodom', 'guy', 'adon', 'gen', 'rollo', 'cody', 'karin', 'r-mika', 'juli', 'juni', 'evil-ryu', 'shin-akuma', 't-hawk', 'fei-long', 'deejay', 'maki', 'eagle', 'yun', 'ingrid']
    },
    'capcom-fighting-jam': {
        'normals': ['LP', 'MP', 'HP', 'LK', 'MK', 'HK'],
        'throws': ['LP+LK'],
        'roster': ['ryu', 'guile', 'chun-li', 'mbison', 'zangief', 'alex', 'urien', 'yun', 'chun-li-3s', 'felicia', 'demitri', 'jedah', 'anakaris', 'leo', 'hauzer', 'mukuro', 'nool', 'guy', 'karin', 'sakura', 'rose', 'ingrid', 'shin-akuma']
    },
    'projectjustice': {
        'normals': ['LP', 'HP', 'LK', 'HK'],
        'throws': ['LP+LK'],
        'roster': ['batsu', 'hinata', 'kyosuke', 'hayato', 'shoma', 'natsu', 'roberto', 'akira', 'edge', 'gan', 'zaki', 'yurika', 'kurow', 'hideo', 'kyoko', 'bowman', 'ran', 'chairman', 'roy', 'tiffany', 'momo', 'boman', 'natsu', 'roberto']
    },
    'plasma-sword-nightmare-of-bilstein': {
        'normals': ['LP', 'HP', 'LK', 'HK'],
        'throws': ['LP+LK'],
        'roster': ['hayato', 'june', 'saturn', 'gamof', 'vector', 'gore', 'blood', 'shaker', 'zelkin', 'bilstein', 'rain', 'byakko', 'gantetsu', 'claire', 'ele', 'raiga', 'omega', 'gori', 'luka', 'luca']
    }
}

def format_name(id_str):
    return ' '.join(word.capitalize() for word in id_str.replace('-', ' ').split())

def update_games_ts():
    filepath = 'src/games.ts'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # For each game, find its block and replace characters array
    for game_id, info in GAMES.items():
        # build characters array string
        chars_str = "[\n"
        for i, char_id in enumerate(info['roster']):
            chars_str += f"        {{ id: '{char_id}', name: '{format_name(char_id)}', moveCount: 0 }}"
            if i < len(info['roster']) - 1:
                chars_str += ",\n"
            else:
                chars_str += "\n      ]"
                
        # Regex to match the characters: [] array for this specific game
        import re
        pattern = r"(id:\s*'" + game_id + r"'.*?characters:\s*\[).*?(\])"
        content = re.sub(pattern, r"\1" + chars_str[1:] + r"\2", content, flags=re.DOTALL)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Updated games.ts rosters.")

def laser_focus_data():
    for game_id, info in GAMES.items():
        data_dir = f"public/data/{game_id}"
        if not os.path.exists(data_dir):
            os.makedirs(data_dir)
            
        for char_id in info['roster']:
            filepath = os.path.join(data_dir, f"{char_id}.json")
            
            data = {"movesList": []}
            if os.path.exists(filepath):
                with open(filepath, 'r', encoding='utf-8') as f:
                    try:
                        data = json.load(f)
                    except Exception:
                        pass
                        
            if 'movesList' not in data:
                data['movesList'] = []
                
            new_moves = []
            for move in data['movesList']:
                # Strip out generic normals
                if move.get('type') == 'normal' and move.get('name') in ['Punch', 'Kick', 'Slash', 'Heavy Slash', 'Dust', 'Light Attack', 'Medium Attack', 'Heavy Attack', 'EX / Action', 'Unique Action', 'Guard', 'Skill', 'Light Punch', 'Medium Punch', 'Heavy Punch', 'Light Kick', 'Medium Kick', 'Heavy Kick', 'Horizontal Slash', 'Vertical Slash', 'Plasma', 'Action', 'Jump']:
                    continue
                if move.get('type') == 'throw' and move.get('name') in ['Forward Throw', 'Back Throw', 'Throw']:
                    continue
                new_moves.append(move)
                
            # Create the custom normals
            custom_normals = []
            for idx, n in enumerate(info['normals']):
                name = format_name(n)
                if n == 'A': name = 'Horizontal Slash'
                elif n == 'B': name = 'Vertical Slash'
                elif n == 'P': name = 'Plasma'
                elif n == 'K' and game_id == 'plasma-sword-nightmare-of-bilstein': name = 'Kick'
                
                if n == 'LP': name = 'Light Punch'
                if n == 'MP': name = 'Medium Punch'
                if n == 'HP': name = 'Heavy Punch'
                if n == 'LK': name = 'Light Kick'
                if n == 'MK': name = 'Medium Kick'
                if n == 'HK': name = 'Heavy Kick'

                custom_normals.append({"id": f"n_{idx}", "name": name, "type": "normal", "input": n})
                
            for idx, t in enumerate(info['throws']):
                custom_normals.append({"id": f"t_{idx}", "name": "Forward Throw", "type": "throw", "input": t})
            
            existing_ids = {m.get('id') for m in new_moves}
            for sm in custom_normals:
                safe_id = sm['id']
                counter = 0
                while safe_id in existing_ids:
                    safe_id = f"{sm['id']}_{counter}"
                    counter += 1
                sm['id'] = safe_id
                new_moves.append(sm)
                existing_ids.add(safe_id)
                
            data['movesList'] = new_moves
            
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2)
                
        print(f"Laser focused {game_id} ({len(info['roster'])} chars)")

if __name__ == "__main__":
    update_games_ts()
    laser_focus_data()
