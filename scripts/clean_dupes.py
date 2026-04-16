import os
import shutil

pairs = [
    ('battle-monsters', 'chilli-pepper', 'chilli--pepper'),
    ('battle-monsters', 'deathmask', 'death-mask'),
    ('groove-on-fight', 'mad', 'm-a-d'),
    ('groove-on-fight', 'oume-otane', 'oume--otane'),
    ('melty-blood-actress-again-current-code', 'archetypeearth', 'archetype-earth'),
    ('street-fighter-6', 'aki', 'a-k-i')
]

correct_ids = ['chilli-pepper', 'death-mask', 'mad', 'oume-otane', 'archetypeearth', 'aki']

for game, id1, id2 in pairs:
    f1 = f'public/data/{game}/{id1}.json'
    f2 = f'public/data/{game}/{id2}.json'
    
    s1 = os.path.exists(f1) and os.path.getsize(f1) or 0
    s2 = os.path.exists(f2) and os.path.getsize(f2) or 0
    
    if s1 > s2:
        larger = f1
    else:
        larger = f2
        
    correct_id = id1 if id1 in correct_ids else id2
    wrong_id = id2 if id1 in correct_ids else id1
    
    dest = f'public/data/{game}/{correct_id}.json'
    wrong_dest = f'public/data/{game}/{wrong_id}.json'
    
    if larger != dest and os.path.exists(larger):
        shutil.copy2(larger, dest)
        
    if os.path.exists(wrong_dest):
        os.remove(wrong_dest)
        print(f"Removed redundant file {wrong_dest}")
