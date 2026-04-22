#!/usr/bin/env python3
import re, shutil, os
with open('src/games.ts','r',encoding='utf-8') as f: c=f.read()
gid='clayfighter'
m=re.search(r'\n  \{[^}]*?id: \''+re.escape(gid)+r'\'.*?\n  \}',c,re.DOTALL)
if m:
    c=c[:m.start()]+c[m.end():]
    d=f'public/data/{gid}'
    if os.path.isdir(d): shutil.rmtree(d)
    print(f'Removed {gid}')
with open('src/games.ts','w',encoding='utf-8') as f: f.write(c)
