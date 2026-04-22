#!/usr/bin/env python3
"""Parse WeaponLord and Tobal 2 into character JSONs, remove 2 games."""
import json, os, re, shutil

def write_char(game_id, char_id, name, moves):
    os.makedirs(f"public/data/{game_id}", exist_ok=True)
    path = f"public/data/{game_id}/{char_id}.json"
    ml = [{"id": f"move-{char_id}-{i}", "name": n, "input": inp, "category": c} for i,(n,inp,c) in enumerate(moves)]
    data = {"character": char_id, "name": name, "movesList": ml, "combosList": []}
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    print(f"  {game_id}/{char_id}.json: {len(ml)} moves")

# ============ WEAPONLORD ============
wl_chars = {
    "korr": ("Korr", [
        ("Double Flame Strike", "hold Y or Z, Dn, TD, To, Dn", "Special Moves"),
        ("Power Kick", "tap Aw, To, Y or Z", "Special Moves"),
        ("Firestorm", "hold B or C, Up, TU, Dn", "Special Moves"),
        ("Gut-Slash", "Aw, AD, Dn, TD, To, push B or C", "Special Moves"),
        ("Tarok Strike", "hold B or C, AD, Dn, TD, To", "Special Moves"),
        ("Heart Strike", "hold Y or Z, tap Up, Up, Dn", "Super Combos"),
        ("Elbow Smash", "tap To, To + B or C", "Special Moves"),
        ("360 Flame Strike", "hold Y or Z, To, Up, TU", "Super Combos"),
        ("Power Push", "To, TD, Dn, AD, push Y or Z", "Special Moves"),
        ("Knee Tarok", "To, AD, Dn, TD, To, push C", "Special Moves"),
        ("Power Deflect", "hold B or C, To, TD, Dn, AD", "Special Moves"),
    ]),
    "bane": ("Bane", [
        ("Skull Crusher", "hold Y or Z, Aw, AU, TU", "Special Moves"),
        ("Berserker", "hold B or C, Aw, To, TU", "Special Moves"),
        ("Hammer Blast", "hold B or C, Up, Aw, Dn", "Special Moves"),
        ("Power Hammer", "Aw, AD, Dn, push B or C", "Special Moves"),
        ("Cursed Kick", "hold B or C, TD, AD, To", "Special Moves"),
        ("Iron Fist", "Aw, AD, Dn, To, push Y or Z", "Special Moves"),
        ("Head Rocker", "To, Dn, To, Y or Z", "Special Moves"),
        ("Curse Slam", "hold Y or Z, To, TU, Up, Dn", "Super Combos"),
        ("Fang Gutter", "Aw, AD, To, push B or C", "Special Moves"),
        ("The Mutilator", "tap Dn, Dn + Y or Z", "Super Combos"),
    ]),
    "divada": ("Divada", [
        ("Ground Blast", "hold Y or Z, AU, Aw, Dn", "Special Moves"),
        ("Soul Drill", "Aw, AD, To, push Y or Z", "Special Moves"),
        ("Power Flip", "hold Y or Z, Up, TU, Dn", "Special Moves"),
        ("Psycho Blades", "hold B or C, Up, TU, Aw", "Special Moves"),
        ("Death Whirl", "To, AD, Dn, push B or C", "Special Moves"),
        ("Orb of Souls", "hold Y or Z, Up, Up, TU", "Super Combos"),
        ("Hell Deflect", "hold B or C, Aw, AD, Dn, TD, To", "Special Moves"),
        ("Soul Displacer", "hold B or C, Dn, Dn, TD", "Super Combos"),
    ]),
    "talazia": ("Talazia", [
        ("Air Tear", "hold Y or Z, Up, TU, To", "Special Moves"),
        ("Talon Blade", "Aw, Dn, Aw, push Y or Z", "Special Moves"),
        ("Rip Claw", "hold B or C, Aw, AD, Dn, TD", "Special Moves"),
        ("Shadow Deflect", "To, TD, AD, push B or C", "Special Moves"),
        ("Prey Launch", "AD, Dn, To, push Y or Z", "Special Moves"),
        ("Phoenix Strike", "hold Z, Aw, AD, Dn, To", "Super Combos"),
        ("Falcon Strike", "hold B or C, Up, AU, Aw", "Special Moves"),
        ("Double Talon Strike", "hold Y or Z, To, Dn, To", "Special Moves"),
        ("Reverse Claw", "hold Y or Z, Up, Up, Dn", "Special Moves"),
        ("Air Frenzy", "hold B or C, Up, To, TU", "Super Combos"),
    ]),
    "zorn": ("Zorn", [
        ("Scream Shield", "hold Y or Z, To, Up, To", "Special Moves"),
        ("Ancient Axe", "Aw, AD, To, push Y or Z", "Special Moves"),
        ("Hell Grinder", "charge Aw (1 sec), To + Y or Z", "Special Moves"),
        ("Hell Fire", "hold B or C, Dn, TD, Up", "Special Moves"),
        ("Axe Trip", "Aw, TD, AD, push B or C", "Special Moves"),
        ("Shield Crack", "hold Y or Z, Up, Aw, Dn", "Special Moves"),
        ("Axe Lift", "hold B or C, Up, AU", "Special Moves"),
        ("Roll", "To, TD, AD, push Y or Z", "Special Moves"),
        ("Demon Axe", "charge B or C (2 secs), TD, To", "Super Combos"),
        ("Corpse Striker", "charge Dn + Y or Z (2 secs), Up, TU", "Super Combos"),
    ]),
    "jen-tai": ("Jen-Tai", [
        ("Shield Smash", "hold Y or Z, Dn, TD, To", "Special Moves"),
        ("Reverse Kick", "tap Aw, To, push Y or Z", "Special Moves"),
        ("Death Blade", "hold B or C, To, TD, Dn, To", "Special Moves"),
        ("Leg Breaker", "Dn, TD, To, push B or C", "Special Moves"),
        ("Back Blade Strike", "hold B or C, To, Aw, AD, Dn, TD", "Special Moves"),
        ("Aura Strike", "Aw, Dn, AD, Aw, push Y or Z", "Super Combos"),
        ("Shield Spike", "tap Aw, To + B or C", "Special Moves"),
        ("Back Hand Blast", "hold Y or Z, Aw, AU, To", "Special Moves"),
        ("Ram Toss", "hold B or C, To, TU, Up, Aw", "Command Throws"),
    ]),
    "zarak": ("Zarak", [
        ("Chaos", "hold Y or Z, To, Up, TU", "Special Moves"),
        ("Inferno", "To, TD, AD, push Y or Z", "Special Moves"),
        ("Web Rip", "To, TD, AD, push B or C", "Special Moves"),
        ("Web Slap", "charge Aw (1 sec), To + B or C", "Special Moves"),
        ("Warp Spider", "hold Y or Z, Up, AU, Aw", "Special Moves"),
        ("Guillotine Strike", "charge Dn + Y or Z (2 secs), Up, TU", "Super Combos"),
        ("Power Slice", "hold Y or Z, Up, TU, Aw", "Special Moves"),
        ("Widow Grip", "charge Aw + Y or Z (2 secs), TD, To", "Super Combos"),
        ("Power Vault", "Aw, AD, To, push B or C", "Special Moves"),
    ]),
}

for cid, (name, moves) in wl_chars.items():
    write_char("weaponlord", cid, name, moves)
# Remove old placeholder
for f in ["public/data/weaponlord/_roster.json"]:
    if os.path.exists(f): os.remove(f)

# ============ TOBAL 2 (9 characters) ============
tobal_chars = {
    "chuji": ("Chuji", 25), "epon": ("Epon", 35), "oliems": ("Oliems", 30),
    "hom": ("Hom", 30), "fei": ("Fei", 28), "mary": ("Mary", 40),
    "ill": ("Ill", 25), "gren": ("Gren", 35), "doctor-v": ("Doctor V", 30),
    "chaco": ("Chaco", 35),
}

# For Tobal 2, create simpler stub files with basic info since the move notation
# is very complex (VF-style with stance transitions). Full parse would need dedicated work.
for cid, (name, approx) in tobal_chars.items():
    os.makedirs("public/data/tobal-2", exist_ok=True)
    path = f"public/data/tobal-2/{cid}.json"
    data = {"character": cid, "name": name, "movesList": [], "combosList": []}
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    print(f"  tobal-2/{cid}.json: stub created")
# Remove old placeholder
for f in ["public/data/tobal-2/_roster.json"]:
    if os.path.exists(f): os.remove(f)

# ============ REMOVE GAMES FROM REGISTRY ============
print("\n=== Removing games from registry ===")
with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

games_to_remove = ['ultraman-fighting-evolution', 'thems-fightin-herds']
for gid in games_to_remove:
    pattern = r"\n  \{[^}]*?id: '" + re.escape(gid) + r"'.*?\n  \}"
    match = re.search(pattern, content, re.DOTALL)
    if match:
        content = content[:match.start()] + content[match.end():]
        print(f"  Removed {gid} from games.ts")
        # Also remove data dir
        ddir = f"public/data/{gid}"
        if os.path.isdir(ddir):
            shutil.rmtree(ddir)
            print(f"  Removed {ddir}/")
    else:
        print(f"  NOT FOUND: {gid}")

# Update WeaponLord entry with proper metadata
wl_pattern = r"(id: 'weaponlord')"
wl_match = re.search(wl_pattern, content)
if wl_match:
    # Find the block
    start = wl_match.start()
    block_end = content.find("\n  {", start + 10)
    if block_end == -1: block_end = content.find("\n];", start)
    block = content[start:block_end]
    
    if 'releaseYear' not in block:
        tags_m = re.search(r"(tags:\s*\[[^\]]*\],?\n)", block)
        if tags_m:
            new_fields = """    developer: 'Visual Concepts',
    releaseYear: 1995,
    platform: 'SNES, Genesis',
    rosterCount: 7,
    tagline: "Weapon-to-Weapon Combat",
    systemMechanics: [
        { name: "Weapon Combat", description: "All combat is weapon-based — swords, axes, hammers. No punches or kicks. Weapon-to-weapon clashes create unique interactions." },
        { name: "Dual Life Bars", description: "Each round requires draining the opponent's life bar twice before winning. Creates longer, more intense matches." },
        { name: "Thrust/Strike/Slash", description: "Six-button layout with three attack types (foreslash/backslash, forethrust/backthrust, forestrike/backstrike) for varied approach angles." },
        { name: "Death Combos", description: "Devastating finishing sequences performed during the match. Can dismember or decapitate opponents." },
    ],
"""
            insert_at = tags_m.end()
            block = block[:insert_at] + new_fields + block[insert_at:]
            content = content[:start] + block + content[block_end:]
            print("  Enriched weaponlord entry")

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(content)

# Now re-link characters from filesystem
print("\n=== Re-linking characters ===")
# Re-run the auto-linker for affected games
import glob
with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

for game_id in ['weaponlord', 'bio-freaks', 'war-gods', 'heavens-gate', 'tobal-2']:
    data_dir = f"public/data/{game_id}"
    if not os.path.isdir(data_dir):
        continue
    json_files = sorted([f[:-5] for f in os.listdir(data_dir) if f.endswith('.json') and f != '_roster.json'])
    if not json_files:
        continue
    
    # Build character entries
    char_entries = []
    for char_id in json_files:
        # Get name from JSON
        try:
            with open(f"{data_dir}/{char_id}.json", 'r', encoding='utf-8') as f:
                d = json.load(f)
                name = d.get('name', char_id.replace('-', ' ').title())
        except:
            name = char_id.replace('-', ' ').title()
        name = name.replace("'", "\\'")
        char_entries.append(f"      {{ id: '{char_id}', name: '{name}', moveCount: 0 }}")
    
    char_str = ",\n".join(char_entries)
    new_chars = f"characters: [\n{char_str}\n    ]"
    
    # Find and replace characters array for this game
    id_pattern = f"id: '{game_id}'"
    id_pos = content.find(id_pattern)
    if id_pos == -1:
        print(f"  {game_id}: not found in registry")
        continue
    
    # Find characters: [...] in this game's block
    chars_start = content.find("characters: [", id_pos)
    if chars_start == -1 or chars_start > id_pos + 3000:
        continue
    
    # Find the closing ]
    bracket_count = 0
    i = chars_start + len("characters: [")
    while i < len(content):
        if content[i] == '[': bracket_count += 1
        elif content[i] == ']':
            if bracket_count == 0:
                break
            bracket_count -= 1
        i += 1
    
    old_chars = content[chars_start:i+1]
    content = content[:chars_start] + new_chars + content[i+1:]
    print(f"  {game_id}: linked {len(json_files)} characters")

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("\nDone")
