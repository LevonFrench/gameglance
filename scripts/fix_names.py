import os
import json
import re

def to_title_case(s):
    # Splits by space and capitalizes each word
    return ' '.join(word.capitalize() for word in s.split())

# 1. Fix src/games.ts
with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

def process_name(match):
    full = match.group(0)
    name_str = match.group(1)
    
    # Check if we have ' (Coming Soon)'
    suffix = ""
    clean_name = name_str
    if clean_name.endswith(' (Coming Soon)'):
        suffix = ' (Coming Soon)'
        clean_name = clean_name[:-14]
        
    # Check if the name looks like a slug (no uppercase, or contains dashes)
    # Actually, any name containing a dash shouldn't just be replaced if it's like "Chun-Li".
    # BUT if it's all lowercase like "chun-li", we'll convert it.
    # What if it's "ryuhaku-todoh"? 
    # The user rule: "we don't want dashes for spaces in the chararacter names"
    # Wait, Chun-Li is a special case. But user says "Remove dashes for spaces and give them all proper capitalization".
    # If it's already "Chun-Li", let's safely replace dash with space "Chun Li" to follow instructions literally ("Remove dashes for spaces"),
    # OR we only do it if the name is primarily lowercase. Let's do it for ALL dashes as requested.
    
    # Wait, in the project, some names might be "ryuhaku-todoh", we replace with "Ryuhaku Todoh".
    # Let's just find ANY name that has a dash, or is entirely lowercase.
    
    # Actually let's just do it for all names!
    # Wait, if we Title Case everything, "M. Bison" -> "M. Bison", "Dhalsim" -> "Dhalsim".
    # Just replace '-' with ' ' and title case it!
    # BUT we should be careful with things like "McLeod" (Dan McLeod). If we strict-titlecase it becomes "Mcleod".
    # Let's ONLY title case if the original name had NO uppercase letters, OR if it had dashes and we replaced them.
    # Wait, user said "Do this for the entire project we don't want dashes for spaces in the chararacter names."
    # So:
    if '-' in clean_name:
        clean_name = clean_name.replace('-', ' ')
        # Only re-title case the words that we modified?
        # Let's title-case words that are purely lowercase.
        words = clean_name.split(' ')
        new_words = []
        for w in words:
            if w.islower():
                new_words.append(w.capitalize())
            else:
                new_words.append(w) # preserve existing capitalization like "Chun Li" if it was "Chun-Li"
        clean_name = ' '.join(new_words)
        
    if clean_name.islower():
        clean_name = to_title_case(clean_name)
        
    return full.replace(name_str, clean_name + suffix)

new_ts = re.sub(r"name:\s*['\"]([^'\"]+)['\"]", process_name, ts_txt)

with open('src/games_updated.ts', 'w', encoding='utf-8') as f:
    f.write(new_ts)

# 2. Fix public/data/**/*.json
data_dir = os.path.join('public', 'data')
for root_dir, dirs, files in os.walk(data_dir):
    for fn in files:
        if fn.endswith('.json'):
            path = os.path.join(root_dir, fn)
            try:
                with open(path, 'r', encoding='utf-8') as jf:
                    data = json.load(jf)
                
                changed = False
                if 'character' in data:
                    cname = data['character']
                    if '-' in cname or cname.islower():
                        cname = cname.replace('-', ' ')
                        words = cname.split(' ')
                        new_words = []
                        for w in words:
                            if w.islower():
                                new_words.append(w.capitalize())
                            else:
                                new_words.append(w)
                        data['character'] = ' '.join(new_words)
                        changed = True
                        
                if changed:
                    with open(path, 'w', encoding='utf-8') as jf:
                        json.dump(data, jf, indent=2)
            except Exception as e:
                pass

print("Names fixed across games.ts and all JSONs!")
