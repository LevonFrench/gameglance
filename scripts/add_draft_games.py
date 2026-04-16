import json
import re
import os

def clean_id(name):
    cid = name.lower()
    cid = re.sub(r'[^a-z0-9\s-]', '', cid)
    cid = re.sub(r'\s+', '-', cid)
    return cid

def main():
    with open('scratch/truth_roster.json', 'r', encoding='utf-8') as f:
        truth = json.load(f)
        
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    # Find existing games mapped
    existing_games = set()
    blocks = re.findall(r'(\n\s*\{\s*\n\s*id:\s*[\'"][^\'"]+[\'"].*?tabs:\s*\[.*?\]\s*\n\s*\})', ts_content, re.DOTALL)
    for b in blocks:
        name_m = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', b)
        if name_m:
            gname = name_m.group(1).strip().lower()
            existing_games.add(gname)

    # Re-verify the mapping using strict matching first, then fuzzy
    matched_truth = set()
    for existing in existing_games:
        for t in truth.keys():
            if existing == t.lower():
                matched_truth.add(t)
                break
        else:
            for t in truth.keys():
                if existing in t.lower() or t.lower() in existing:
                    matched_truth.add(t)
                    break

    unmatched_truth_games = [g for g in truth.keys() if g not in matched_truth]
    print(f"Found {len(unmatched_truth_games)} draft games to add.")

    new_blocks = []
    for gname in unmatched_truth_games:
        gid = clean_id(gname)
        game_folder = f"public/data/{gid}"
        os.makedirs(game_folder, exist_ok=True)
        
        t_chars = truth[gname]
        
        cblocks = []
        for c in t_chars:
            cid = clean_id(c)
            cname = c.replace("'", "\\'")
            cblocks.append(f"      {{ id: '{cid}', name: '{cname}' }}")
            
            p = f"{game_folder}/{cid}.json"
            if not os.path.exists(p):
                with open(p, 'w', encoding='utf-8') as f:
                    json.dump({"character": c, "movesList": []}, f, indent=2)
                    
        char_str = ",\n".join(cblocks)
        
        b = f"""  {{
    id: '{gid}',
    name: "{gname.replace('"', '\\"')}",
    isDraft: true,
    rosterCount: 999,
    characters: [
{char_str}
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  }}"""
        new_blocks.append(b)

    if new_blocks:
        # Find the closing bracket of SUPPORTED_GAMES
        m = re.search(r']\s*;?\s*$', ts_content)
        if m:
            insert_point = m.start()
            # If the last thing is a closing brace, it might lack a comma
            last_brace_check = ts_content[:insert_point].strip()
            
            # Combine the current content + comma + new items + suffix
            prefix = ts_content[:insert_point]
            if prefix.endswith('}') or '\n}' in prefix[-5:]:
                prefix += ','
                
            suffix = ts_content[insert_point:]
            
            addition = "\n" + ",\n".join(new_blocks) + "\n"
            final_content = prefix + addition + suffix
            
            with open('src/games.ts', 'w', encoding='utf-8') as f:
                f.write(final_content)
            
            print(f"Added {len(new_blocks)} games into draft state.")
        else:
            print("Failed to find end of SUPPORTED_GAMES array.")
    else:
        print("No new games to add.")

if __name__ == "__main__":
    main()
