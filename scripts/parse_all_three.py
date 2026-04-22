#!/usr/bin/env python3
"""Parse all three games' move lists into character JSONs."""
import json, os, re

def write_char(game_id, char_id, name, moves):
    os.makedirs(f"public/data/{game_id}", exist_ok=True)
    path = f"public/data/{game_id}/{char_id}.json"
    data = {"character": char_id, "name": name, "movesList": moves, "combosList": []}
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    print(f"  {game_id}/{char_id}.json: {len(moves)} moves")

# ============ A HAU (missing from previous parse) ============
ahau_moves = [
    ("HAU-PRESS", "GP", "Command Throws"), ("HAU-FIST", "B, F+GP, then P repeatedly", "Command Throws"),
    ("HOLLY ANMER", "F, D, B+GP", "Command Throws"), ("HAU-STRANGLE", "F, B+GP", "Command Throws"),
    ("HAU-LOBSTER", "(During HAU-STRANGLE) P, K, GPK", "Command Throws"),
    ("HAU-MALLET", "(During HAU-LOBSTER) K, P, GPK", "Command Throws"),
    ("HAU-FALL", "DF+GP", "Command Throws"), ("HAU-BACK", "GP (Behind opponent)", "Command Throws"),
    ("1-2-UPPER", "P, P, P", "Special Moves"), ("HAU-COMBO", "P, P, DF+P", "Special Moves"),
    ("HAU-COMBO LOW", "P, P, B+K", "Special Moves"), ("HAU-UPPER", "DF+P", "Special Moves"),
    ("HAU-BODY", "F+P", "Special Moves"), ("HAU-TACKLE", "B, F, F+P", "Special Moves"),
    ("HAU-ROLLING", "B, D, F+P, B, D, F+P", "Special Moves"), ("HAU-HEAD", "F+PK", "Special Moves"),
    ("HAU-PRESS", "F, F+P", "Special Moves"), ("HAU-FLYING KNEEL", "F, F+K", "Special Moves"),
    ("HAU-ASTRIDE", "D+PK", "Special Moves"), ("HAU-LOW", "B+K", "Special Moves"),
    ("HAU-MISTAKE", "U+PK", "Special Moves"), ("HAU-BUTT", "F+K", "Special Moves"),
    ("HAU-HIP DOWN", "F, D+K", "Special Moves"), ("DROP IRON HEAD", "DF+P", "Unique Attacks"),
    ("HAU-DANCE", "D, D+GPK", "Super Combos"), ("HAU-WARP", "F, D, DF+PK", "Super Combos"),
    ("HAU-DROP", "(During HAU-WARP) U, D+PK", "Super Combos"),
    ("MARVELLOUS HOLY ANMER", "(During HAU-MALLET) GPK, G, P, K, GPK", "Super Combos"),
]
ml = [{"id": f"move-ahau-{i}", "name": n, "input": inp, "category": c} for i,(n,inp,c) in enumerate(ahau_moves)]
write_char("heavens-gate", "a-hau", "A Hau", ml)

# ============ BIO F.R.E.A.K.S. ============
bio_chars = {
    "bullzeye": ("Bullzeye", [
        ("Dive, Roll & Shoot", "B, F+FR", "Special Moves"), ("Skull Bomb", "Roll Back, RK", "Special Moves"),
        ("Left Grenade", "B+LP", "Special Moves"), ("Right Grenade", "B+RP", "Special Moves"),
        ("Shoulder Charge", "B, F+LP", "Special Moves"), ("Plasma Storm", "D, U+RP+LP", "Super Combos"),
        ("Triple Grenade", "Roll Back+LP+LK", "Special Moves"), ("Dance Freak Dance", "F, B+LK", "Special Moves"),
        ("Energy Drain", "F, B+LP", "Special Moves"), ("Rocket Climb", "Roll Forward+FR", "Special Moves"),
        ("Hi-Low Attack", "Roll Forward+RP+LP", "Special Moves"), ("Plasma Rain", "RP+LP+U", "Special Moves"),
        ("Charge Forward & Shoot", "B, F, RP+LP", "Special Moves"), ("Slide Away & Shoot", "B, B+RP+LP", "Special Moves"),
        ("Air Chop Gun Attack", "D, U+RK+LK", "Special Moves"), ("Nuke Bomb", "F, Roll Forward+RP", "Super Combos"),
        ("Foot Stomp", "Roll Forward+RK", "Special Moves"),
        ("Forearm Slam", "Roll Forward+LP", "Finishers"), ("Double-Arm Chop", "B, B, F+RP+LP", "Finishers"),
        ("Decapitation", "F, B+RP", "Finishers"),
    ]),
    "delta": ("Delta", [
        ("Razor Spin", "Roll Back+LP", "Special Moves"), ("Rising Turbo Top", "B, F+RK", "Special Moves"),
        ("Sword Spout", "Roll Forward+FR", "Special Moves"), ("Energy Demon", "B, B+RK+RP", "Super Combos"),
        ("Energy Stab", "B, F+RP+LP", "Special Moves"), ("Scissor Sword", "B, F+LP, RP", "Special Moves"),
        ("Turbo Top II", "B, F+RP", "Special Moves"), ("Plasma Dome", "RP+LP+D", "Super Combos"),
        ("Spirit Fire", "F, B, F+LP", "Special Moves"), ("Raised Sword Attack", "B, F+FR", "Special Moves"),
        ("Fly By Wing Attack", "B, B+RP+LP", "Special Moves"), ("Spin Strike", "B, B+RK+LK", "Special Moves"),
        ("Laser Swipe", "B, F, B+LP", "Special Moves"), ("Mystic Rumble", "Roll Forward+LK+LP", "Special Moves"),
        ("Life Stealer", "B, B+LK+LP", "Special Moves"), ("Laser Spin", "Roll Forward+RK+LP", "Special Moves"),
        ("Death Web", "B, B+RP", "Finishers"), ("Torso Chop", "F, B+LK", "Finishers"),
    ]),
    "minatek": ("Minatek", [
        ("Jet Uppercut", "B, F+LP", "Special Moves"), ("Mouth Cannon Barrage", "LK+RP+LP", "Special Moves"),
        ("Guided Salvo", "B, Roll Back+LP", "Special Moves"), ("Spinning Hammer", "Roll Back+RP", "Special Moves"),
        ("Rocket Salvo", "RP+LP+D", "Special Moves"), ("Single Guided Missile", "Roll Forward+FR", "Special Moves"),
        ("Wrecking Ball", "F, B+RP", "Special Moves"), ("Ram 'N Slide", "B, F+FR", "Special Moves"),
        ("Triple Shot Battle Cannon", "Roll Forward+LK", "Special Moves"),
        ("M.R.V.", "RK+LK+D", "Super Combos"), ("Ground Shockwave", "Roll Forward+RP", "Special Moves"),
        ("Nuke Canister", "F, Roll Forward+FR", "Super Combos"), ("Mace Cannon", "B, F+RP", "Special Moves"),
        ("Chain Sweep", "B, B, F, F+RP", "Special Moves"), ("Gas Breath", "B, F+RP+LP", "Special Moves"),
        ("Charge 'N Ram", "F, Roll Forward+LP", "Special Moves"), ("Bull Bellow", "B, F+RK+RP", "Special Moves"),
        ("Spinning Shockwave", "B, F+RK+LK", "Super Combos"),
        ("Lunging Bite", "B, B+LP", "Finishers"), ("Meat Spike", "B+LP+LK", "Finishers"),
    ]),
    "psyclown": ("Psyclown", [
        ("Bouncing Ball", "Roll Forward+RP", "Special Moves"), ("Shield Skip", "F, B+LP", "Special Moves"),
        ("Hammer Uppercut", "D, U+RP", "Special Moves"), ("Zorrocut", "Roll Back+RP", "Special Moves"),
        ("Sliding Flea Trail", "B, F+RK+LK", "Special Moves"), ("Big Wheel Slide", "B+RK+LK", "Special Moves"),
        ("Foot Smash", "D, D+RP", "Special Moves"), ("Hammer Glove", "RK+RP+LP", "Special Moves"),
        ("Shield Throw", "B, F+LP", "Special Moves"), ("Chattering Teeth", "D, U+LP", "Special Moves"),
        ("Flea Attack", "Roll Back+LP", "Special Moves"), ("Boomerang Shield", "Roll Forward+LP", "Special Moves"),
        ("Hammer Throw", "B, F+RP", "Special Moves"), ("Golf Swing", "F, B+LK", "Special Moves"),
        ("Dyno Balloons", "F, B+RK", "Special Moves"),
        ("Zorro Cut", "Roll Back+RP", "Finishers"), ("Buzz Cut", "F, B+LP+LK", "Finishers"),
    ]),
    "purge": ("Purge", [
        ("Flame Pillars", "B, F+LP", "Special Moves"), ("Phoenix Attack", "Roll Forward+RP+LP", "Super Combos"),
        ("Blender", "RK+LK+D", "Special Moves"), ("Fire Ring", "FR+U", "Special Moves"),
        ("Burning Top", "B, F+FR", "Special Moves"), ("Flame Blast", "Roll Forward+FR", "Special Moves"),
        ("Fan Deflect", "F, B+RK+RP", "Special Moves"), ("Cutting Top", "Roll Back+RP", "Special Moves"),
        ("Multi-Fireballs", "B+LK+LP", "Special Moves"), ("Napalm Canister", "B, F+RP+LP", "Super Combos"),
        ("Fan Charge", "F, B+LP", "Special Moves"), ("Fanning Flames", "B, F+RK", "Special Moves"),
        ("Lawn Mower", "B, F+RP", "Special Moves"),
        ("Helicopter Attack", "Roll Back+RK", "Finishers"), ("Meat Blender", "B, F+RP+RK", "Finishers"),
    ]),
    "sabotage": ("Sabotage", [
        ("Tazer Shot", "Roll Back+RP", "Special Moves"), ("Teleport", "RK+LK+D", "Special Moves"),
        ("Javelin Toss", "B, F+RP", "Special Moves"), ("3 Javelin Toss", "F, Roll Forward+RP", "Special Moves"),
        ("Spinning Bola Shot", "F, B+RP+LP", "Special Moves"), ("Floating Mines", "B+RK+RP", "Special Moves"),
        ("Poison Dart", "Roll Back, F+LP", "Special Moves"), ("Blind Slug", "B, F+FR", "Special Moves"),
        ("Flame Ammo Change", "Roll Forward+FR", "Special Moves"),
        ("Short Circuit", "B, F, B+LP", "Super Combos"), ("Shield Breaker Ammo Change", "D, U+RP+LP", "Special Moves"),
        ("Exploding Javelin", "F, B+RP", "Finishers"), ("Head Spike", "B, B+RP+RK", "Finishers"),
    ]),
    "ssapo": ("Ssapo", [
        ("Gas Bubble", "B, B+LK+LP", "Special Moves"), ("Swamp Attack", "D, U+FR", "Special Moves"),
        ("Swamp Teleport", "D, U+LP", "Special Moves"), ("Stink Attack", "LK+RP+D", "Special Moves"),
        ("J.A.W.S.", "B, F+RP", "Special Moves"), ("Energy Spread", "F, B+LK", "Special Moves"),
        ("Puke Fireball", "Roll Forward+FR", "Special Moves"), ("Fire Blast", "B, F+FR", "Special Moves"),
        ("Bad Breath Attack", "B, F+RK", "Special Moves"), ("Triple Shockwave", "RK+LK+LP", "Super Combos"),
        ("Electrical Shockwave", "LK+RP+LP", "Super Combos"), ("Cannon Puke Fireball", "Roll Back+RK", "Special Moves"),
        ("Maul Attack", "B, F+RP+LP", "Special Moves"), ("Sinister Stomp", "RK+LK+D", "Special Moves"),
        ("Crippling Harpoon", "F, B+RP", "Special Moves"),
        ("Harpoon Chain", "F, B+LP", "Finishers"), ("Head Chomp", "F, B+RP+RK", "Finishers"),
    ]),
    "zipperhead": ("Zipperhead", [
        ("Tornado Vortex", "F, B+LK", "Special Moves"), ("Triple Buzzsaw", "D, D+FR", "Special Moves"),
        ("Gunfighter", "D, U+FR", "Special Moves"), ("Boot Leg", "F+RK+LK", "Special Moves"),
        ("Buzz Strafe", "B, F+RK", "Special Moves"), ("Mitt Shockwave", "LK+RP+LP", "Super Combos"),
        ("Ram & Slam", "B, F, B+LP", "Special Moves"), ("Running Clothesline", "Roll Forward+RP", "Special Moves"),
        ("Twist Again", "B+LK+RP", "Special Moves"), ("Tumble & Slam", "Roll Forward+LP", "Special Moves"),
        ("Spike Grenade", "B, F+FR", "Special Moves"), ("Maul Attacker", "F, B+RK", "Special Moves"),
        ("Spinning Top", "B, F+LK", "Special Moves"), ("Arm Chop", "B, F+RP+LP", "Special Moves"),
        ("Arm Chop", "B, F+RP+LP", "Finishers"), ("Spike Punch", "F, B+RP", "Finishers"),
    ]),
}

for cid, (name, moves) in bio_chars.items():
    ml = [{"id": f"move-{cid}-{i}", "name": n, "input": inp, "category": c} for i,(n,inp,c) in enumerate(moves)]
    write_char("bio-freaks", cid, name, ml)

# Remove old _roster
for f in ["public/data/bio-freaks/_roster.json"]:
    if os.path.exists(f): os.remove(f); print(f"  Removed {f}")

# ============ WAR GODS ============
wg_chars = {
    "ahau-kin": ("Ahau Kin", [
        ("Clothesline", "F, F, HK+LK", "Special Moves"), ("Sunburst", "B, F, LP", "Special Moves"),
        ("Teleport Gate", "D, U, LK", "Special Moves"), ("Sword Swipe", "F, DF, D, DB, B, HP", "Special Moves"),
        ("Dagger Stab", "B, DB, D, DF, F, LP", "Special Moves"), ("Blow Dart", "B, F, HP", "Special Moves"),
        ("2 Blow Darts", "B, B, F, HP", "Special Moves"), ("3 Blow Darts", "B, B, B, F, HP", "Special Moves"),
        ("Fatality", "[BL] U, D, U, ]BL[, BL, 3D, HK", "Finishers"),
    ]),
    "anubis": ("Anubis", [
        ("Staff Chop", "D, DF, F, HK", "Special Moves"), ("Staff Sweep", "F, DF, D, DB, B, LK", "Special Moves"),
        ("Double Staff Chop", "F, F during Staff Sweep", "Special Moves"),
        ("Telestaff", "B, F, LK", "Special Moves"), ("Pyramid Trap", "D, DB, B, LP", "Special Moves"),
        ("Staff Bolt", "D, DF, F, HP", "Special Moves"), ("Horn Charge", "F, DF, D, DB, B, HK+LK", "Super Combos"),
        ("Fatality", "F, D, U, D, HP+LK+3D", "Finishers"),
    ]),
    "cy-5": ("CY-5", [
        ("The Blender", "F, DF, D, DB, B, HP", "Special Moves"), ("Ground Laser", "B, DB, D, DF, F, LP", "Special Moves"),
        ("Overhead Laser", "[3D] B, U, F, HP", "Special Moves"), ("Teleport", "D, DB, B, LK", "Special Moves"),
        ("Gain Orbital", "B, B, LP", "Special Moves"), ("Fire Orbital", "HP+LP", "Special Moves"),
        ("Fatality", "F, F, B, D, D, U, 3D+BL+LK, HP, HP", "Finishers"),
    ]),
    "kabuki-jo": ("Kabuki Jo", [
        ("Dragon Breath", "B, F, LP", "Special Moves"), ("2X Dragon Breath", "B, B, F, LP", "Special Moves"),
        ("3X Dragon Breath", "B, B, B, F, LP", "Special Moves"), ("Fire Trap", "B, DB, D, DF, F, LK", "Special Moves"),
        ("Dragon Staff", "F, DF, D, DB, B, HP, LP, LK", "Special Moves"), ("Dragon Star", "D, DF, F, HP", "Special Moves"),
        ("3D Star Spread #1", "[3D], D, DF, F, HP", "Special Moves"),
        ("Sword Flurry", "F, F, HP+LP", "Special Moves"),
        ("Fatality", "[3D] B, F, B, F, 3D+LK, HK, HK", "Finishers"),
    ]),
    "maximus": ("Maximus", [
        ("The Hammer", "D, DF, F, LP", "Special Moves"), ("Ground Slam", "[3D] U, D, LP", "Special Moves"),
        ("Hammer Throw", "F, DF, D, DB, B, HP", "Special Moves"), ("Noogie", "F, F, HP", "Command Throws"),
        ("Net", "B, F, HP+LP", "Special Moves"), ("Head Butt", "B, F, LP", "Special Moves"),
        ("Reversal Throw", "F, B, HP", "Command Throws"),
        ("Fatality", "[BL], D, D, U, D, D, HP+LP+HK+LK", "Finishers"),
    ]),
    "pagan": ("Pagan", [
        ("Skeleton Trap", "B, D, F, LP", "Special Moves"), ("Smoke Teleport", "D, D, LK", "Special Moves"),
        ("Electric Shock", "D, DB, B, HP", "Special Moves"), ("Heli Kick", "B, DB, D, DF, F, HK+LK", "Special Moves"),
        ("Leg Throw", "F, F, HK", "Command Throws"),
        ("Fatality", "[3D+BL], U, U, D, U, D, LP, LP", "Finishers"),
    ]),
    "tak": ("Tak", [
        ("Rock Crush", "D, DB, B, HP", "Special Moves"), ("Boulder", "B, DB, D, DF, F, LP", "Special Moves"),
        ("Earthquake Stomp", "[3D], B, UB, U, UF, F, LK", "Special Moves"),
        ("Overhead Throw", "F, B, LP", "Command Throws"), ("Overhead Backbreaker", "U, U, D (During Throw)", "Command Throws"),
        ("Suplex", "F, B, HP", "Command Throws"),
        ("Fatality", "B, D, B, F, F, 3D+LP+HK", "Finishers"),
    ]),
    "vallah": ("Vallah", [
        ("Gator Skull Trap", "F, DF, D, DB, B, LP", "Special Moves"), ("Shield Slice", "D, DB, B, LP", "Special Moves"),
        ("Axe Throw", "B, DB, D, DF, F, LP", "Special Moves"), ("Double 3D Axe", "[3D], B, DB, D, DF, F, LP", "Special Moves"),
        ("Axe Chop", "B, B, HP", "Special Moves"), ("Sword Slicer", "B, F, HP+LP", "Special Moves"),
        ("Shield Dash", "B, F, LK+HK", "Special Moves"), ("Double Sword Slice", "[LP] F, B, HP", "Special Moves"),
        ("Fatality", "F, F, F, D, B, BL, 3D, LK", "Finishers"),
    ]),
    "voodoo": ("Voodoo", [
        ("High Skullwing", "D, DB, B, HP", "Special Moves"), ("Low Skullwing", "D, DB, B, LP", "Special Moves"),
        ("Snake Trap", "B, B, LP", "Special Moves"), ("Funnel Teleport", "B, F, LK", "Special Moves"),
        ("Spinning Claw", "B, DB, D, DF, F, HP+LP", "Special Moves"),
        ("Nails From The Sky", "[3D], B, U, F, HP", "Super Combos"), ("Grab and Slap", "B, F, LP", "Command Throws"),
        ("Fatality", "U, U, F, HK, BL, LP", "Finishers"),
    ]),
    "warhead": ("Warhead", [
        ("Straight Missiles", "D, DB, B, LP", "Special Moves"), ("3D Seeking Missiles", "[3D], D, DB, B, LP", "Special Moves"),
        ("Shock Wave", "[3D], B, UB, U, UF, F, HP", "Super Combos"), ("Cannonball", "B, F, HK+LK", "Special Moves"),
        ("Skull Crusher", "F, B, HP", "Command Throws"),
        ("Fatality", "D, D, LP, LK, HK", "Finishers"),
    ]),
}

for cid, (name, moves) in wg_chars.items():
    ml = [{"id": f"move-{cid}-{i}", "name": n, "input": inp, "category": c} for i,(n,inp,c) in enumerate(moves)]
    write_char("war-gods", cid, name, ml)

for f in ["public/data/war-gods/_roster.json"]:
    if os.path.exists(f): os.remove(f); print(f"  Removed {f}")

print("\nDone — all 3 games parsed")
