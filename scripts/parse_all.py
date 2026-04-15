import json
import os
import re
from datetime import date

FAQS_DIR = 'faqs'
OUT_DATA_DIR = 'public/data'
WIKI_GAMES_DIR = 'wiki/pages/games'
WIKI_CHARS_DIR = 'wiki/pages/characters'

def slugify(text):
    text = text.lower().replace(" ", "-").replace(":", "").replace("'", "").replace(".", "").replace("!", "")
    text = text.replace("/", "").replace("\\", "")
    return text

def ensure_dir(path):
    if not os.path.exists(path):
        os.makedirs(path)

GAME_DEVS = {
    "Tatsunoko vs Capcom Ultimate All-Stars": "Capcom",
    "Ultimate Marvel vs Capcom 3": "Capcom",
    "Marvel vs Capcom Infinite": "Capcom",
    "BlazBlue Central Fiction": "Arc System Works",
    "BlazBlue Cross Tag Battle": "Arc System Works",
    "Dragon Ball FighterZ": "Arc System Works",
    "DNF Duel": "Arc System Works",
    "Granblue Fantasy Versus Rising": "Arc System Works",
    "Persona 4 Arena Ultimax": "Arc System Works",
}
# A lot of these are SNK. We'll fallback to SNK.

today_str = date.today().isoformat()

def parse_input_string(input_str):
    # This takes "236 + Attack" and makes ['down', 'down-forward', 'forward', 'P']
    # If it's a simple split by ' + ' or ' , ', we return an array.
    # We won't map strings to inputs natively if we just split by +/,. We can just split.
    inps = []
    # If there's a + or ,, split them up
    # A bit naive but close enough to the simple structure.
    parts = re.split(r' \+ ', input_str)
    if len(parts) == 1:
        parts = re.split(r', ', input_str)
    
    for p in parts:
        inps.append(p.strip())
    return inps

for filename in os.listdir(FAQS_DIR):
    if not filename.endswith('.json'): continue
    if filename in ['sfa_movelists.json', 'sf_cps2_movelists.json', 'sf4_sf5_movelists.json', 'sf3_series_movelists.json']:
        continue # Ignore old ones or process them again if needed? Let's just process all to be safe, but wait, sf4_sf5_movelists is new too. Let's process ALL.

    path = os.path.join(FAQS_DIR, filename)
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Normalize data into a flat list of (game_name, character_list) tuples
    games_to_process = []
    
    # Check if the root has "title" and "characters"
    if "title" in data and "characters" in data:
        games_to_process.append((data["title"], data))
    else:
        for key, value in data.items():
            if key == "button_nomenclature": continue
            if isinstance(value, dict) and "games" in value:
                # Nested games structure (e.g. MK Classic)
                for nested_game_name, nested_data in value["games"].items():
                    games_to_process.append((nested_game_name, nested_data))
            elif isinstance(value, list) or (isinstance(value, dict) and "characters" in value):
                games_to_process.append((key, value))

    for game_name, chars in games_to_process:
        game_slug = slugify(game_name)
        
        dev = "Capcom" if "Capcom" in game_name or "Street Fighter" in game_name else "SNK"
        if "BlazBlue" in game_name or "Guilty Gear" in game_name or "Persona" in game_name or "Granblue" in game_name or "DNF" in game_name or "Dragon Ball" in game_name:
            dev = "Arc System Works"
        if "Virtua Fighter" in game_name or "Fighting Vipers" in game_name or "Fighters Megamix" in game_name or "Last Bronx" in game_name or "Golden Axe" in game_name:
            dev = "Sega"
        if "Dead or Alive" in game_name:
            dev = "Tecmo"
        if "Toshinden" in game_name:
            dev = "Tamsoft"
        if "Zero Divide" in game_name:
            dev = "ZOOM"
        if "Mortal Kombat" in game_name or "MK" in game_name:
            dev = "NetherRealm Studios"
        if "Killer Instinct" in game_name:
            dev = "Rare"
        if "Bloody Roar" in game_name:
            dev = "Hudson Soft"
        
        game_data_dir = os.path.join(OUT_DATA_DIR, game_slug)
        ensure_dir(game_data_dir)
        ensure_dir(WIKI_GAMES_DIR)
        ensure_dir(WIKI_CHARS_DIR)
        
        # 1. Update Game Wiki Page
        game_wiki_path = os.path.join(WIKI_GAMES_DIR, f"{game_slug}.md")
        
        # ArcSys JSONs often have { "button_nomenclature": {...}, "characters": [...] }
        char_list_raw = chars
        if isinstance(chars, dict):
            char_list_raw = chars.get("characters", [])
            # Also capture system_mechanics as a faux character
            sys_mech = chars.get("system_mechanics", [])
            if sys_mech:
                char_list_raw = char_list_raw + [{"name": "System Mechanics", "unique_mechanics": sys_mech}]

        char_list_names = [c.get("name", "Unknown") for c in char_list_raw]
        char_list_str = ", ".join(char_list_names)
        
        if not os.path.exists(game_wiki_path):
            with open(game_wiki_path, 'w', encoding='utf-8') as f:
                f.write(f'''---
title: "{game_name}"
type: game
tags: [{game_slug}, {dev.lower()}]
games: [{game_slug}]
created: {today_str}
updated: {today_str}
sources: 1
---

# {game_name}

A classic fighting game by {dev}.

## Roster ({len(char_list_raw)} characters)

{char_list_str}

## Data Source

Character data: `public/data/{game_slug}/{{character}}.json` — parsed from `{filename}`.
''')

        # 2. Process characters
        for char in char_list_raw:
            char_name = char.get("name", "Unknown")
            char_slug = slugify(char_name)
            char_data_path = os.path.join(game_data_dir, f"{char_slug}.json")
            
            # Map into the CharacterExport format (id, name, type, inputs, frameData)
            moves_list = []
            
            if "special_moves" in char or "super_special_moves" in char or "desperation_moves" in char or "weapon_flipping_attacks" in char or "distortion_drives" in char or "super_attacks" in char or "ultimate_skills" in char or "mana_skills" in char or "overdrives" in char or "unique_mechanics" in char or "instant_kills" in char or "force_breaks" in char:
                # new format
                sm = char.get("special_moves", [])
                hc = char.get("hyper_combos", [])
                
                # New categories
                ex = char.get("ex_moves", [])
                ssm = char.get("super_special_moves", [])
                dm = char.get("desperation_moves", [])
                nmm = char.get("neo_max_moves", [])
                mssm = char.get("max_super_special_moves", [])
                cssm = char.get("climax_super_special_moves", [])
                wfa = char.get("weapon_flipping_attacks", [])
                df = char.get("dream_finishes", [])
                
                # ArcSys Categories
                dd = char.get("distortion_drives", [])
                ah = char.get("astral_heats", [])
                sa = char.get("super_attacks", [])
                us = char.get("ultimate_skills", [])
                sba = char.get("skybound_arts", [])
                ms = char.get("mana_skills", [])
                as_ = char.get("awakening_skills", [])
                ska = char.get("skills", [])
                sa2 = char.get("super_arts", []) # Generic
                od = char.get("overdrives", [])
                ik = char.get("instant_kills", [])
                fb = char.get("force_breaks", [])
                
                # Tecmo Categories
                pb = char.get("power_blows", [])
                
                um = char.get("unique_mechanics", [])
                th = char.get("throws", [])
                
                # Misc Categories
                br = char.get("brutalities", [])
                ftl = char.get("fatalities", [])
                bbt = char.get("babalities", [])
                stg = char.get("stage_fatalities", [])
                anm = char.get("animalities", [])
                xray = char.get("x_ray", []) if isinstance(char.get("x_ray", []), list) else [char["x_ray"]] if "x_ray" in char else []
                fb_mk = char.get("fatal_blow", []) if isinstance(char.get("fatal_blow", []), list) else [char["fatal_blow"]] if "fatal_blow" in char else []
                kmb = char.get("kameo_moves", [])
                
                for i, m in enumerate(sm + ms + ska + fb + kmb):
                    moves_list.append({ "id": f"sp_{i}", "name": m["name"], "type": "special", "inputs": parse_input_string(m.get("input", "")) })
                for i, m in enumerate(ex):
                    moves_list.append({ "id": f"ex_{i}", "name": m["name"], "type": "special", "inputs": parse_input_string(m.get("input", "")) })
                    
                for i, m in enumerate(hc + ssm + dm + nmm + mssm + cssm + wfa + df + dd + ah + sa + us + sba + as_ + sa2 + od + ik + pb + xray + fb_mk):
                    moves_list.append({ "id": f"sup_{i}", "name": m["name"], "type": "super", "inputs": parse_input_string(m.get("input", "")) })
                    
                for i, m in enumerate(um + th):
                    moves_list.append({ "id": f"um_{i}", "name": m["name"], "type": "unique", "inputs": parse_input_string(m.get("input", "")) })
                    
                for i, m in enumerate(ftl + br + bbt + stg + anm):
                    moves_list.append({ "id": f"fin_{i}", "name": m["name"], "type": "unique", "inputs": parse_input_string(m.get("input", "")) })
            else:
                # it's possible it is already in standard format (movesList)? NO, looking at previous parse_sfa, it dumped raw format. Let's do raw format dump if it doesn't match above.
                pass
                
            export_data = {
                "game": game_name,
                "character": char_name,
                "movesList": moves_list if len(moves_list) > 0 else char.get("movesList", []),
                "combosList": char.get("combosList", [])
            }
            if len(export_data["movesList"]) == 0 and ("moves" in char):
                 export_data["movesList"] = char["moves"]
            
            with open(char_data_path, 'w', encoding='utf-8') as f:
                json.dump(export_data, f, indent=4)
            
            # Write/Update Char Wiki Page
            char_wiki_path = os.path.join(WIKI_CHARS_DIR, f"{char_slug}.md")
            if os.path.exists(char_wiki_path):
                with open(char_wiki_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                if f"games: " in content and game_slug not in content:
                    content = content.replace("games: [", f"games: [{game_slug}, ")
                if game_slug not in content:
                    content += f"\n## {game_name}\n\nAdded from `{filename}`.\n"
                with open(char_wiki_path, 'w', encoding='utf-8') as f:
                    f.write(content)
            else:
                with open(char_wiki_path, 'w', encoding='utf-8') as f:
                    f.write(f'''---
title: "{char_name}"
type: character
tags: [character]
games: [{game_slug}]
created: {today_str}
updated: {today_str}
---

# {char_name}

{char_name} is a character in {game_name}.

## {game_name}

Moves added from `{filename}`.
''')

print("Done")
