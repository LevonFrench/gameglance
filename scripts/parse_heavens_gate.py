#!/usr/bin/env python3
"""Parse Heaven's Gate move list into character JSON files."""
import json, os, re

RAW = r"""
<<A HAU>>

<<--Throwing Arts-->>
HAU-PRESS|GP
HAU-FIST|B, F+GP, then P repeatedly
HOLLY ANMER|(Next to floored opponent) F, D, B+GP
HAU-STRANGLE|F, B+GP
HAU-LOBSTER|(During HAU-STRANGLE) P, K, GPK
HAU-MALLET|(During HAU-LOBSTER) K, P, GPK
HAU-FALL|DF+GP (Opponent crouching)
HAU-BACK|GP (Behind opponent)

<<--Standard Attacks-->>
1-2-UPPER|P, P, P
HAU-COMBO|P, P, DF+P
HAU-COMBO LOW|P, P, B+K
HAU-UPPER|DF+P
HAU-BODY|F+P
HAU-TACKLE|B, F, F+P
HAU-ROLLING|B, D, F+P, B, D, F+P
HAU-HEAD|F+PK
HAU-PRESS|F, F+P
HAU-FLYING KNEEL|F, F+K
HAU-ASTRIDE|D+PK
HAU-LOW|B+K
HAU-MISTAKE|U+PK
HAU-BUTT|F+K
HAU-HIP DOWN|F, D+K

<<--Pursuit Attacks-->>
DROP IRON HEAD|DF+P

<<--SOL-Power Attacks-->>
HAU-DANCE|D, D+GPK
HAU-DANCE Cancel|GPK
HAU-WARP|F, D, DF+PK
HAU-WARP Cancel|D, DF, F+GPK
HAU-DROP|(During HAU-WARP) U, D+PK
MARVELLOUS HOLY ANMER|(During HAU-MALLET) GPK, G, P, K, GPK

<<SASA>>

<<--Throwing Arts-->>
ROLL SHOULDER THROW|GP
NECK THROW|D, DF, F+GP
LEG WRENCH|D, DF, F+G (High kick reversal)

<<--Standard Attacks-->>
COMBO KNEE|P, P, P, F+K
TACKLE|B, F, F+P
CYCLONE|B+P
SHAKE DOWN|F+P, P
NEEDLE|DF+P
FIST STRIKE|B, F+P
RISING PALM|(From crouching) F+P
BRUSH|DB+P
SCORPION ROUND KICK|B+PK, F+PK
HEEL|D+K
KNEE|F+K
SLIDE KICK|F, F+K
BACK TURN KICK|UB+K

<<--Pursuit Attacks-->>
KNEE DOWN|DF+K

<<--PLANT-Power Attacks-->>
PINE NEEDLE|D, D+GPK
PINE NEEDLE Cancel|GPK
ENERGY DRAIN|(Next to opponent) F, DF, D, DB, B+GPK

<<NANASE>>

<<--Throwing Arts-->>
NANASE Flip|GP
NANASE-Steiner|F, D+K

<<--Standard Attacks-->>
NANASE-Combo|P, P, P, D+K
NANASE-Rash|P, B+P, P
1-2-ELBOW CRESCENT|P, P, F+P, K
BODY BLOW|B+P
UPPER|DF+P
TORNADO UPPER|F, D, DF+P
ELBOW CRESCENT|F+P, K
ELBOW UPPER|D, DF, F+P
UPPER + TORNADO UPPER|DF+P, DB, DF+P
LOW SPIN KICK|D+GK
CRESCENT HEEL|D, DB, B+K
CONTINUAL KICK|DB+K, K, K
DASH DOUBLE KICK|F, F+K, K

<<--Pursuit Attacks-->>
TOE KICK|DF+K

<<--SOL-Power Attacks-->>
SHINING UPPER|D, D+GPK
SHINING UPPER Cancel|GPK
SOLID GUN|DB, F, DF, D, DB, B, DF+PK
SOLID GUN Cancel|D, DF, F+GPK

<<VERNY>>

<<--Throwing Arts-->>
BELLY 2 BELLY SUPLEX|GP
ARM LOCK THROW|F, D+GP

<<--Standard Attacks-->>
COMBO SOMERSAULT KICK|P, P, P, UB+K
LOW BACK KNUCKLE|DB+P
KNUCKLE COMBO|B+P, P, D+K
HOOK COMBO|F+P, B+P, P, D+K
DOWN ELBOW UPPER|D, D+P, U+P
SMASH UPPER|DF+P
DOWN UPPER|(From crouching) Hold DF+P
SLIDING KICK|D, D+K
FACE CRASH|F, D, DF+K
BACK SOMERSAULT KICK|(With back turned) D, DB, B+K
MIDDLE SPIN KICK|F, F+GK
DOUBLE SPIN KICK|F, F+K, DF+K
HEEL + TOE KICK|GK, D+K
SLASH KICK|DB, F+K
TOE KICK|D+K
SOMERSAULT KICK|UB+K

<<--Pursuit Attacks-->>
KAWARA-CRASH|DF+P

<<--LUNAR-Power Attacks-->>
ENERGY RAY|D, D+GPK
ENERGY RAY Cancel|GPK
EVIL RAY|(Next to opponent) F, B, F+PK

<<KURARA>>

<<--Throwing Arts-->>
KURARA Flip|GP
KURARA-Steiner|F, D+K

<<--Standard Attacks-->>
KURARA-Combo|P, P, P, D+K
KURARA-Rash|P, B+P, P
1-2-ELBOW CRESCENT|P, P, F+P, K
BODY BLOW|B+P
UPPER|DF+P
TORNADO UPPER|F, D, DF+P
ELBOW CRESCENT|F+P, K
ELBOW UPPER|D, DF, F+P
UPPER + TORNADO UPPER|DF+P, DB, DF+P
MIRACLE HAMMER|D, DB, B+P
LOW SPIN KICK|D+GK
CRESCENT HEEL|D, DB, B+K
CONTINUAL KICK|DB+K, K, K
DASH DOUBLE KICK|F, F+K, K

<<--Pursuit Attacks-->>
TOE KICK|DF+K

<<--MIRACLE-Power Attacks-->>
SHINING UPPER|D, D+GPK
SHINING UPPER Cancel|GPK
MIRACLE ATTACK|DB, F, DF, D, DB, B, DF+PK
MIRACLE ATTACK Cancel|D, DF, F+GPK

<<KYOHA>>

<<--Throwing Arts-->>
PUSH CHOKE|GP
ARM LOCK RISE THROW|B, F+GP

<<--Standard Attacks-->>
JAB LOW KICK|P, D+K
COMBO ELBOW SPIN KICK|P, P, F+P, K
DOUBLE BACK KNUCKLE|B+P, P
BACK KNUCKLE FEINT|B+P, D+K
LOW BACK KNUCKLE|DB+P
BODY BLOW SPIN KICK|F+P, K
DOUBLE SPIN KICK|K, K
HIGH + LOW SPIN KICK|GK, D+GK
KICK COMBO|D+K, F+K, K
HEEL DOWN|B+K
KNEE KICK|F+K
KENKA-KICK|F, F+K
SOMERSAULT KICK|UB+K

<<--Pursuit Attacks-->>
STEP ON|DF+K

<<--SOL-Power Attacks-->>
NONE AVAILABLE|N/A

<<DYBYD>>

<<--Throwing Arts-->>
ROLL THROW|GP
THRUST|GP (From behind opponent)
COUNTER THROW|D, DF, F+G (High Kick reversal)
TWIN LAZER|D, DF, F+GP

<<--Standard Attacks-->>
RASH KNEE|P, P, P, F+K
STEP ELBOW|F+P
STEP STRAIGHT|Hold F+P
LARIAT|F, F+P
CHOPPING STRAIGHT|D+P, F+P
TACKLE|B, F, F+P
LIGHTNING NEEDLE|DF+P
RISING PALM|(From crouching) F+P
BRUSH|DB+P
TURN KICK|D, DB, B+K, K
DROP KICK|B, F+K
MIDDLE KICK|B+K
FLYING KNEEL KICK|F, F+K
SKID KICK|DB, F+K
KNEE|F+K
HIGH TOE KICK|D+K

<<--Pursuit Attacks-->>
FALL KNEE|DF+K

<<--SOL-Power Attacks-->>
NONE AVAILABLE|N/A

<<UNKNOWN>>

<<--Throwing Arts-->>
GOD FLIP|GP
STREAM|F, D+P
GOD'S FIST|B, F+GP, then P repeatedly

<<--Standard Attacks-->>
HIGH COMBO|P, P, P, K
LOW COMBO|P, P, P, D+K
SOMERSAULT COMBO|P, P, P, UB+K
GALE HAND STRAIGHT|B, F+P, D+P
KNUCKLE SOMERSAULT|B+P, P, UB+K
SKY EDGE|F, D, DF+P
SUPER TACKLE|B, F, F+PK
LOW STRAIGHT|(From crouching) Hold DF+P
LOW BACK KNUCKLE|DB+P
MIDDLE WHIRLWIND KICK|F, F+GK
DOUBLE WHIRLWIND KICK|F, F+K, DF+K
CONTINUAL KICK|DB+K, K, K
BACK EYE|(When back turned) D, DB, B+K
AERIAL KICK|UB+K

<<--Pursuit Attacks-->>
TOE KICK|DF+K

<<--SOL-Power Attacks-->>
SHINING FORCE|D, D+GPK
IMPULSE|(Close to opponent) F, B, F+PK
SHINING UPPER|D, DF, F+PK
SHINING UPPER Cancel|GPK
SOUL SPARKLE|DB, F, DF, D, DB, B, DF+PK
SOUL SPARKLE Cancel|D, DF, F+GPK

<<GEEZER>>

<<--Throwing Arts-->>
BEAR HUG|PG
IRON HEAD|B, F+GP
TITAN HEAD|(During ROCK HEAD) P, GPK
BOMB HEAD|(During IRON HEAD) K, GPK

<<--Standard Attacks-->>
COMBO LARIAT|P, P, P, F, F+P
COMBO MIDDLE|P, P, P, F, F+K
COMBO LOW KICK|P, P, P, D+K
MEGA TACKLE|B, F, F+P
POWER LARIAT|F, F+P
VISIOS STRIKE|Hold F+P
FLAME CHOPPER|DF+P
ELBOW TACKLE|D, D+P, F, D, DF+P
HAMMER DIP|D, DF, F+P
JACK KNIFE|F, D, DF+P
MIDDLE KICK|F, F+K
DROP KICK|B, F+K
TORNADE KICK|GK
HELL HEEL|D+K
POISON KICK|DB, F+K
HELL SAW|F, F+GK
KNEE|F+K

<<--Pursuit Attacks-->>
HELL STAMP|DF+K

<<--LUNAR-Power Attacks-->>
HELL FLAME|D, D+GPK
HELL FLAME Cancel|GPK
BLOODY CUTTER|F, D, DF+PK
BLOODY CUTTER Cancel|D, DF, F+GPK
"""

# Category mapping
CAT_MAP = {
    "Throwing Arts": "Command Throws",
    "Standard Attacks": "Special Moves",
    "Pursuit Attacks": "Unique Attacks",
    "SOL-Power Attacks": "Super Combos",
    "LUNAR-Power Attacks": "Super Combos",
    "PLANT-Power Attacks": "Super Combos",
    "MIRACLE-Power Attacks": "Super Combos",
}

os.makedirs("public/data/heavens-gate", exist_ok=True)

# Parse
characters = {}
current_char = None
current_cat = None

for line in RAW.strip().split('\n'):
    line = line.strip()
    if not line:
        continue
    
    # Character header
    char_match = re.match(r'^<<(\w+)>>$', line)
    if char_match:
        current_char = char_match.group(1).lower()
        characters[current_char] = {"name": char_match.group(1).title(), "moves": []}
        # Fix specific names
        name_map = {
            "a hau": "A Hau", "sasa": "Sasa", "nanase": "Nanase",
            "verny": "Verny", "kurara": "Kurara", "kyoha": "Kyoha",
            "dybyd": "Dybyd", "unknown": "Unknown", "geezer": "Geezer"
        }
        characters[current_char]["name"] = name_map.get(current_char, char_match.group(1).title())
        continue
    
    # Category header
    cat_match = re.match(r'^<<--(.+?)-->>$', line)
    if cat_match:
        raw_cat = cat_match.group(1)
        current_cat = CAT_MAP.get(raw_cat, "Special Moves")
        continue
    
    # Move entry: NAME|INPUT
    if '|' in line and current_char:
        parts = line.split('|', 1)
        name = parts[0].strip()
        inp = parts[1].strip()
        if name == "NONE AVAILABLE":
            continue
        characters[current_char]["moves"].append({
            "name": name,
            "input": inp,
            "category": current_cat or "Special Moves"
        })

# Write JSON files
for char_id, data in characters.items():
    moves_list = []
    for m in data["moves"]:
        moves_list.append({
            "id": f"move-{char_id}-{len(moves_list)}",
            "name": m["name"],
            "input": m["input"],
            "category": m["category"]
        })
    
    char_data = {
        "character": char_id,
        "name": data["name"],
        "movesList": moves_list,
        "combosList": []
    }
    
    path = f"public/data/heavens-gate/{char_id}.json"
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(char_data, f, indent=2)
    print(f"  {char_id}.json: {len(moves_list)} moves")

# Remove old _roster.json if exists
roster_path = "public/data/heavens-gate/_roster.json"
if os.path.exists(roster_path):
    os.remove(roster_path)
    print("  Removed _roster.json")

print(f"\nCreated {len(characters)} character files")
