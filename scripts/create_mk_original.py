"""
Create Mortal Kombat (1992) original game data.
7 playable characters + Reptile (secret) + Goro and Shang Tsung (bosses).
Inputs use MK notation: HP, LP, HK, LK, BL, U, D, F, B
"""
import os
import json

DIR = 'public/data/mortal-kombat'
os.makedirs(DIR, exist_ok=True)

CHARACTERS = {
    'johnny-cage': {
        'name': 'Johnny Cage',
        'moves': [
            {"name": "Shadow Kick", "input": "b f LK", "type": "special"},
            {"name": "Low Fireball", "input": "b b LP", "type": "special"},
            {"name": "Split Punch", "input": "BL+LP", "type": "special", "notes": "Close"},
            {"name": "Uppercut", "input": "d HP", "type": "normal"},
            {"name": "Foot Sweep", "input": "b LK", "type": "normal"},
            {"name": "Roundhouse", "input": "b HK", "type": "normal"},
            {"name": "Throw", "input": "f LP", "type": "throw", "notes": "Close"},
            {"name": "Fatality (Decapitation)", "input": "f f f HP", "type": "finisher", "notes": "Close"},
        ]
    },
    'kano': {
        'name': 'Kano',
        'moves': [
            {"name": "Knife Throw", "input": "Hold BL b f", "type": "special"},
            {"name": "Cannonball", "input": "f d b u f", "type": "special"},
            {"name": "Uppercut", "input": "d HP", "type": "normal"},
            {"name": "Foot Sweep", "input": "b LK", "type": "normal"},
            {"name": "Roundhouse", "input": "b HK", "type": "normal"},
            {"name": "Throw", "input": "f LP", "type": "throw", "notes": "Close"},
            {"name": "Fatality (Heart Rip)", "input": "b d f LP", "type": "finisher", "notes": "Close"},
        ]
    },
    'liu-kang': {
        'name': 'Liu Kang',
        'moves': [
            {"name": "Fireball", "input": "f f HP", "type": "special"},
            {"name": "Flying Kick", "input": "f f HK", "type": "special"},
            {"name": "Uppercut", "input": "d HP", "type": "normal"},
            {"name": "Foot Sweep", "input": "b LK", "type": "normal"},
            {"name": "Roundhouse", "input": "b HK", "type": "normal"},
            {"name": "Throw", "input": "f LP", "type": "throw", "notes": "Close"},
            {"name": "Fatality (360 Uppercut)", "input": "f d b u f", "type": "finisher", "notes": "Anywhere"},
        ]
    },
    'raiden': {
        'name': 'Raiden',
        'moves': [
            {"name": "Torpedo", "input": "b b f", "type": "special"},
            {"name": "Lightning", "input": "d f LP", "type": "special"},
            {"name": "Teleport", "input": "d u", "type": "special"},
            {"name": "Uppercut", "input": "d HP", "type": "normal"},
            {"name": "Foot Sweep", "input": "b LK", "type": "normal"},
            {"name": "Roundhouse", "input": "b HK", "type": "normal"},
            {"name": "Throw", "input": "f LP", "type": "throw", "notes": "Close"},
            {"name": "Fatality (Electrocution)", "input": "f b b b HP", "type": "finisher", "notes": "Close"},
        ]
    },
    'scorpion': {
        'name': 'Scorpion',
        'moves': [
            {"name": "Spear", "input": "b b LP", "type": "special"},
            {"name": "Teleport Punch", "input": "d b HP", "type": "special"},
            {"name": "Uppercut", "input": "d HP", "type": "normal"},
            {"name": "Foot Sweep", "input": "b LK", "type": "normal"},
            {"name": "Roundhouse", "input": "b HK", "type": "normal"},
            {"name": "Throw", "input": "f LP", "type": "throw", "notes": "Close"},
            {"name": "Fatality (Toasty!)", "input": "BL u u", "type": "finisher", "notes": "Sweep distance"},
        ]
    },
    'sonya-blade': {
        'name': 'Sonya Blade',
        'moves': [
            {"name": "Ring Toss", "input": "f f LP", "type": "special"},
            {"name": "Square Wave", "input": "f b HP", "type": "special"},
            {"name": "Leg Grab", "input": "d LP+BL", "type": "special"},
            {"name": "Uppercut", "input": "d HP", "type": "normal"},
            {"name": "Foot Sweep", "input": "b LK", "type": "normal"},
            {"name": "Roundhouse", "input": "b HK", "type": "normal"},
            {"name": "Throw", "input": "f LP", "type": "throw", "notes": "Close"},
            {"name": "Fatality (Kiss of Death)", "input": "f f b b BL", "type": "finisher", "notes": "Sweep distance"},
        ]
    },
    'sub-zero': {
        'name': 'Sub-Zero',
        'moves': [
            {"name": "Freeze", "input": "d f LP", "type": "special"},
            {"name": "Slide", "input": "b LP+LK+BL", "type": "special"},
            {"name": "Uppercut", "input": "d HP", "type": "normal"},
            {"name": "Foot Sweep", "input": "b LK", "type": "normal"},
            {"name": "Roundhouse", "input": "b HK", "type": "normal"},
            {"name": "Throw", "input": "f LP", "type": "throw", "notes": "Close"},
            {"name": "Fatality (Spine Rip)", "input": "f d f HP", "type": "finisher", "notes": "Close"},
        ]
    },
    'reptile': {
        'name': 'Reptile',
        'moves': [
            {"name": "Acid Spit", "input": "f f HP", "type": "special", "notes": "Same as Liu Kang fireball"},
            {"name": "Force Ball", "input": "b b LP", "type": "special", "notes": "Same as Scorpion spear visual"},
            {"name": "Slide", "input": "b LP+LK+BL", "type": "special", "notes": "Same as Sub-Zero"},
            {"name": "Uppercut", "input": "d HP", "type": "normal"},
            {"name": "Foot Sweep", "input": "b LK", "type": "normal"},
            {"name": "Roundhouse", "input": "b HK", "type": "normal"},
            {"name": "Throw", "input": "f LP", "type": "throw", "notes": "Close"},
        ]
    },
    'goro': {
        'name': 'Goro',
        'moves': [
            {"name": "Fireball", "input": "b b b HP", "type": "special"},
            {"name": "Chest Pound", "input": "b b b LP", "type": "special"},
            {"name": "Stomp", "input": "d d d HK", "type": "special"},
            {"name": "Grab and Pound", "input": "f f HP", "type": "special", "notes": "Close"},
            {"name": "Uppercut", "input": "d HP", "type": "normal"},
        ]
    },
    'shang-tsung': {
        'name': 'Shang Tsung',
        'moves': [
            {"name": "Flaming Skull", "input": "b b HP", "type": "special"},
            {"name": "Morph into Johnny Cage", "input": "b b b LP", "type": "special"},
            {"name": "Morph into Kano", "input": "b f BL", "type": "special"},
            {"name": "Morph into Liu Kang", "input": "f f f BL", "type": "special"},
            {"name": "Morph into Raiden", "input": "d b f LK", "type": "special"},
            {"name": "Morph into Scorpion", "input": "u u", "type": "special"},
            {"name": "Morph into Sonya", "input": "d d d d BL", "type": "special"},
            {"name": "Morph into Sub-Zero", "input": "f d f HP", "type": "special"},
            {"name": "Uppercut", "input": "d HP", "type": "normal"},
        ]
    },
}


def create():
    roster = []
    for char_id, data in CHARACTERS.items():
        # Build roster entry
        roster.append({"id": char_id, "name": data['name']})

        # Build character file
        moves = []
        for m in data['moves']:
            move = dict(m)
            move['id'] = m['name'].lower().replace(' ', '-').replace('(', '').replace(')', '').replace("'", "").replace(",", "").replace("!", "")
            moves.append(move)

        char_data = {
            "id": char_id,
            "name": data['name'],
            "movesList": moves
        }

        filepath = os.path.join(DIR, f"{char_id}.json")
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(char_data, f, indent=2, ensure_ascii=False)

        print(f"  {data['name']}: {len(moves)} moves")

    # Write roster
    roster_path = os.path.join(DIR, '_roster.json')
    with open(roster_path, 'w', encoding='utf-8') as f:
        json.dump(roster, f, indent=2, ensure_ascii=False)

    print(f"\nCreated {len(CHARACTERS)} characters in {DIR}/")


if __name__ == '__main__':
    create()
