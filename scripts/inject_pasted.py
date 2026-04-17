import json
import os

pasted_data = [
{ "game": "Aggressors of Dark Kombat", "characters": [ { "name": "Joe Kusanagi", "notation": "Numpad (1-9), P=Punch, K=Kick", "special_moves": [ { "name": "Shinkuu Midan Keri (Rising Triple Kick)", "input": "62123K" }, { "name": "Joe's Special (Rush Combo)", "input": "41236P" }, { "name": "Kattobi Hyakuretsu Kyaku (Rapid Kicks)", "input": "214K" } ], "super_moves": [ { "name": "Yuujou No Gattai Nekketsu Punch (Gan-Gan Attack)", "input": "8746P" } ] } ] },
{ "game": "TMNT Tournament Fighters (Genesis)", "characters": [ { "name": "Leonardo", "special_moves": [ { "name": "Spinning Cutter", "input": "236A" }, { "name": "Ground Shock", "input": "214A" }, { "name": "Rising Slash", "input": "621A" } ], "desperation": [ { "name": "Rolling Stab", "input": "41236C" } ] }, { "name": "Donatello", "special_moves": [ { "name": "Ground Spark", "input": "236A" }, { "name": "Somersault Staff", "input": "28A" }, { "name": "Repeated Staff", "input": "646A" } ], "desperation": [ { "name": "Air Stab Frenzy", "input": "621C" } ] }, { "name": "Raphael", "special_moves": [ { "name": "Sai Spark", "input": "236A" }, { "name": "Sai Drill", "input": "214A" }, { "name": "Sai Spin", "input": "28A" } ], "desperation": [ { "name": "Beast Attack", "input": "621C" } ] }, { "name": "Michelangelo", "special_moves": [ { "name": "Hurricane", "input": "236A" }, { "name": "Nunchaku Crash", "input": "16A" }, { "name": "Kangaroo Kick", "input": "28A" } ], "desperation": [ { "name": "Dragon Breath", "input": "621C" } ] } ] },
{ "game": "TMNT Tournament Fighters (SNES)", "characters": [ { "name": "Leonardo", "special_moves": [ { "name": "Shining Cutter", "input": "236P" }, { "name": "Endless Screw", "input": "214P" }, { "name": "Roto Cutter", "input": "623P" } ], "super": [ { "name": "Millenial Wave", "input": "236236P" } ] }, { "name": "Michelangelo", "special_moves": [ { "name": "Dragon Breath", "input": "41236P" }, { "name": "Dynamite Bomber", "input": "46P" }, { "name": "Rising Thunder", "input": "28P" } ], "super": [ { "name": "Dance of Fury", "input": "236236P" } ] }, { "name": "Raphael", "special_moves": [ { "name": "Jamboree", "input": "41236P" }, { "name": "Power Drill", "input": "46P" }, { "name": "Chest Buster", "input": "46K" } ], "super": [ { "name": "Flame Blast", "input": "236236P" } ] } ] },
{ "game": "Chaos Code: New Sign of Catastrophe", "characters": [ { "name": "Hikaru Oghami", "notation": "Numpad (1-9), A=LP, B=LK, C=HP, D=HK", "special_moves": [ { "name": "Gouen (Rekka)", "input": "236A/C (up to 3 times)" }, { "name": "Soukyu (Projectile)", "input": "214A/C" }, { "name": "Shoryu (Anti-Air)", "input": "623A/C" }, { "name": "Shippu (Flash Kick)", "input": "236B/D" } ], "ultimate_chaos": [ { "name": "Guren-Senhou", "input": "236236A/C" }, { "name": "Soukyu-Senhou", "input": "214214A/C" } ], "destruction_chaos": [ { "name": "Hikaru Special", "input": "222B+C" } ] } ] }
]

import re
def slugify(text):
    text = str(text).lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

for block in pasted_data:
    game_title = block["game"]
    game_id = slugify(game_title)
    if game_id == "chaos-code-new-sign-of-catastrophe":
        game_id = "chaos-code-new-sign-of-catastrophe"
        
    for c in block["characters"]:
        name = c["name"]
        cid = slugify(name)
        if cid == "hikaru-oghami":
            cid = "hikaru"
        
        path = f"public/data/{game_id}/{cid}.json"
        
        # We need to map it to our format
        moves = []
        for key in ["special_moves", "super_moves", "desperation", "super", "ultimate_chaos", "destruction_chaos"]:
            if key in c:
                for m in c[key]:
                    m['type'] = key.replace('_', ' ').title()
                    moves.append(m)
                    
        payload = {
            "character": name,
            "movesList": moves
        }
        
        os.makedirs(f"public/data/{game_id}", exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            json.dump(payload, f, indent=2)
            
        print(f"Wrote {path}")
