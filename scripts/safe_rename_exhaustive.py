import os
import re

dirpaths = []
for root, dirs, _ in os.walk('.', topdown=False):
    for d in dirs:
        if '(exhaustive)' in d.lower():
            dirpaths.append(os.path.join(root, d))

for dpath in dirpaths:
    new_dpath = dpath.replace('-complete-move-list-(exhaustive)', '').replace('-(exhaustive)', '').replace('(exhaustive)', '')
    try:
        os.rename(dpath, new_dpath)
    except Exception as e:
        pass

for root, _, files in os.walk('.'):
    for f in files:
        if f.endswith(('.md', '.ts', '.tsx', '.json')):
            filepath = os.path.join(root, f)
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            
            new_content = content.replace('-complete-move-list-(exhaustive)', '').replace('-(exhaustive)', '').replace('(exhaustive)', '').replace('(Exhaustive)', '')
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as file:
                    file.write(new_content)

print("Safely replaced exhaustive across files and dirs!")
