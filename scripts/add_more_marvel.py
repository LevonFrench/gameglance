import os
import json
import re

game_dir = 'public/data/marvel-toukon-fighting-souls-beta-version'
os.makedirs(game_dir, exist_ok=True)

chars_data = {
    "star-lord": {
        "character": "Star-Lord",
        "movesList": [
            {"name": "Element Blast", "input": "U (Press U to Reload) [Mid-Air OK]", "type": "Unique"},
            {"name": "Groove Switch", "input": "2U [Mid-Air OK]", "type": "Unique"},
            {"name": "Quad Blasters", "input": "236 + L/M/H (QS) [Mid-Air OK]", "type": "Skills"},
            {"name": "Gravity Mine", "input": "214 + L/M/H (4QS) [Mid-Air OK]", "type": "Skills"},
            {"name": "Ravager Rush", "input": "623 + L/M/H (2QS) [Mid-Air OK]", "type": "Skills"},
            {"name": "Rocket Step", "input": "22 + L/M/H (22QS)", "type": "Skills"},
            {"name": "Elemental Outlaw", "input": "236 + M + H (QS + M + H) [Cost: 50] [Mid-Air OK]", "type": "Super Skill"},
            {"name": "Dance Off", "input": "214 + M + H (4QS + M + H) [Cost: 100]", "type": "Ultimate Skill"}
        ]
    },
    "iron-man": {
        "character": "Iron Man",
        "movesList": [
            {"name": "Repulsor Shot", "input": "U OR 6U (Press repeatedly for additional hits) [Mid-Air OK]", "type": "Unique"},
            {"name": "Repulsor Blast", "input": "Hold H OR Down or Right + H IN MID-AIR", "type": "Unique"},
            {"name": "Unibeam", "input": "236 + L/M/H (QS) [Mid-Air OK]", "type": "Skills"},
            {"name": "Iron Flash", "input": "214 + L/M/H (4QS) [Mid-Air OK]", "type": "Skills"},
            {"name": "Iron Avenger", "input": "623 + L/M/H (2QS) [Mid-Air OK]", "type": "Skills"},
            {"name": "Smart Missiles", "input": "22 + L/M/H (22QS) [Mid-Air OK]", "type": "Skills"},
            {"name": "Unibeam Max", "input": "236 + M + H (QS + M + H) [Cost: 50] [Mid-Air OK]", "type": "Super Skill"},
            {"name": "Hulkbuster", "input": "214 + M + H (4QS + M + H) [Cost: 100]", "type": "Ultimate Skill"},
            {"name": "Buster Beam", "input": "Hold ATK* during Hulkbuster [Cost: 50]", "type": "Ultimate Skill"}
        ]
    },
    "captain-america": {
        "character": "Captain America",
        "movesList": [
            {"name": "Trick Shield", "input": "U (+ D-pad/stick to change trajectory) [Mid-Air OK]", "type": "Unique"},
            {"name": "Ricochet Volley", "input": "U ON THROWN SHIELD [Mid-Air OK]", "type": "Unique"},
            {"name": "Shield Guard", "input": "2U", "type": "Unique"},
            {"name": "Shield Strike", "input": "236 + L/M/H (QS) (+ M to change trajectory) [Mid-Air OK]", "type": "Skills"},
            {"name": "Soaring Justice", "input": "214 + L/M/H (4QS)", "type": "Skills"},
            {"name": "Freedom Charge", "input": "623 + L/M/H (2QS)", "type": "Skills"},
            {"name": "Shield Shock", "input": "22 + L/M/H (22QS)", "type": "Skills"},
            {"name": "Living Legend", "input": "236 + M + H (QS + M + H) [Cost: 50]", "type": "Super Skill"},
            {"name": "Sentinel of Liberty", "input": "214 + M + H (4QS + M + H) [Cost: 100]", "type": "Ultimate Skill"}
        ]
    },
    "storm": {
        "character": "Storm",
        "movesList": [
            {"name": "Tempest", "input": "U (+ D-pad/stick to change trajectory) [Mid-Air OK]", "type": "Unique"},
            {"name": "Lightning Strike", "input": "236 + L/M/H (QS) [Mid-Air OK]", "type": "Skills"},
            {"name": "Cold Embrace", "input": "214 + L/M/H (4QS)", "type": "Skills"},
            {"name": "Whirlwind", "input": "623 + L/M/H (2QS) [Mid-Air OK]", "type": "Skills"},
            {"name": "Tornado", "input": "22 + L/M/H (22QS)", "type": "Skills"},
            {"name": "Hailstone", "input": "22 + L/M/H MID-AIR (22QS MID-AIR)", "type": "Skills"},
            {"name": "Hurricane", "input": "236 + M + H (QS + M + H) [Cost: 50] [Mid-Air OK]", "type": "Super Skill"},
            {"name": "Eye of the Storm", "input": "214 + M + H (4QS + M + H) [Cost: 100]", "type": "Ultimate Skill"}
        ]
    },
    "doctor-doom": {
        "character": "Doctor Doom",
        "movesList": [
            {"name": "Nullify Shield", "input": "U OR 6U TO PLACE SHIELD FURTHER AWAY (Hold U to make stronger) [Mid-Air OK]", "type": "Unique"},
            {"name": "Auric Ray", "input": "236 + L/M/H (QS) (+ M to change trajectory) [Mid-Air OK]", "type": "Skills"},
            {"name": "Mystic Cage", "input": "214 + L/M/H (4QS) [Mid-Air OK]", "type": "Skills"},
            {"name": "Diplomacy", "input": "623 + L/M/H (2QS)", "type": "Skills"},
            {"name": "Merciful Smite", "input": "22 + L/M/H (22QS)", "type": "Skills"},
            {"name": "Antimatter Extrapolator", "input": "236 + M + H (QS + M + H) [Cost: 50] [Mid-Air OK]", "type": "Super Skill"},
            {"name": "Latverian Legion", "input": "214 + M + H (4QS + M + H) [Cost: 100]", "type": "Ultimate Skill"}
        ]
    }
}

for char_id, payload in chars_data.items():
    path = f"{game_dir}/{char_id}.json"
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(payload, f, indent=2)
    print(f"Updated {char_id}.json")

# Now add missing ones to src/games.ts
with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

game_regex = r"(id:\s*['\"]marvel-toukon-fighting-souls-beta-version['\"].*?characters:\s*\[\s*)(.*?)(\s*\])"
gmatch = re.search(game_regex, ts_content, re.DOTALL)
if gmatch:
    chars = gmatch.group(2)
    
    new_chars = []
    if 'doctor-doom' not in chars:
        new_chars.append("      { id: 'doctor-doom', name: 'Doctor Doom' },")
    if 'star-lord' not in chars:
        new_chars.append("      { id: 'star-lord', name: 'Star-Lord' },")
    if 'storm' not in chars:
        new_chars.append("      { id: 'storm', name: 'Storm' },")
        
    if new_chars:
        # Just append them to the end of the character list
        chars_updated = chars + "\n" + "\n".join(new_chars)
        ts_content = ts_content[:gmatch.start()] + gmatch.group(1) + chars_updated + gmatch.group(3) + ts_content[gmatch.end():]
        with open('src/games.ts', 'w', encoding='utf-8') as f:
            f.write(ts_content)
        print("Added new characters to games.ts")
