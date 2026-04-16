import os
import re

def is_fake(name_str):
    nl = name_str.lower().strip()
    
    exact_fakes = [
        "system", "throws", "air throws", "controls", "basic attacks", "basic", "moves", "unknown",
        "basic moves", "special attacks", "super arts", "credits", "intro",
        "how to play", "story", "mechanics", "training", "options"
    ]
    if nl in exact_fakes: return True
        
    if "alternate" in nl and "intro" in nl: return True
    if "play as " in nl: return True
    if "vs. " in nl: return False 
    if "version history" in nl: return True
    if "training mode" in nl: return True
    if "secret character" in nl: return True
    if "throws" in nl and "and " in nl: return True
    if "basic" in nl and "move" in nl: return True
    if "unknown" in nl: return True 
    
    return False

def clean_registry():
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    char_pattern = re.compile(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"]\s*,\s*name:\s*[\'"]([^\'"]+)[\'"]\s*\},?')
    
    dirty_count = 0
    clean_count = 0
    fakes_to_delete = set()
    
    def replacer(match):
        nonlocal dirty_count, clean_count
        cid = match.group(1)
        cname = match.group(2)
        
        if is_fake(cname):
            print(f"Purging fake character: {cname} ({cid})")
            fakes_to_delete.add(f"{cid}.json")
            dirty_count += 1
            return ""
        else:
            clean_count += 1
            return match.group(0)
            
    new_content = char_pattern.sub(replacer, content)
    new_content = os.linesep.join([s for s in new_content.splitlines() if s.strip()])

    if dirty_count > 0:
        with open('src/games.ts', 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print("Cleaning up JSON files...")
        for root, dirs, files in os.walk('public/data'):
            for file in files:
                if file in fakes_to_delete:
                    try:
                        p = os.path.join(root, file)
                        os.remove(p)
                        print(f"  -> Deleted {p}")
                    except:
                        pass
            
    print(f"\nPurged {dirty_count} fake characters. Kept {clean_count} real characters.")

if __name__ == "__main__":
    clean_registry()
