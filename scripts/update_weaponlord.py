import re
import os
import json

def clean_id(name):
    cid = name.lower()
    cid = re.sub(r'[^a-z0-9\s-]', '', cid)
    cid = re.sub(r'\s+', '-', cid)
    return cid

def main():
    target_roster = ['Bane', 'Divada', 'Jen-Tai', 'Korr', 'Pyra', 'Talazia', 'Zorn', 'Zyx']
    
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        content = f.read()
        
    c_str = ",\n".join([f"      {{ id: '{clean_id(c)}', name: '{c}' }}" for c in target_roster])
    
    new_block = f"""  {{
    id: 'weaponlord',
    name: "WeaponLord",
    isDraft: true,
    releaseYear: 1995,
    platform: "SNES, Genesis",
    rosterCount: {len(target_roster)},
    characters: [
{c_str}
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  }}"""

    # Replace the existing Weaponlord block
    content = re.sub(r'\s*\{\s*\n\s*id:\s*[\'"]weaponlord[\'"].*?tabs:\s*\[.*?\]\s*\n\s*\}', '\n' + new_block, content, flags=re.DOTALL)
    
    with open('src/games.ts', 'w', encoding='utf-8') as f:
        f.write(content)
        
    # Manage the JSONs
    base_dir = "public/data/weaponlord"
    os.makedirs(base_dir, exist_ok=True)
    
    # create missing
    target_ids = [clean_id(c) for c in target_roster]
    for c in target_roster:
        cid = clean_id(c)
        p = os.path.join(base_dir, f"{cid}.json")
        if not os.path.exists(p):
            with open(p, 'w', encoding='utf-8') as f:
                json.dump({"game": "WeaponLord", "character": c, "movesList": []}, f, indent=2)
                
    # remove extra
    for f in os.scandir(base_dir):
        if f.is_file() and f.name.endswith('.json'):
            if f.name[:-5] not in target_ids:
                os.remove(f.path)
                print(f"Removed unused JSON: {f.name}")
                
    print("WeaponLord roster and metadata updated successfully.")

if __name__ == "__main__":
    main()
