import json, os, glob

with open('games_dump.json', 'r', encoding='utf-8') as f:
    games = json.load(f)

# Sort by release year
games.sort(key=lambda x: x.get('releaseYear', 9999))

missing_report = []

for g in games:
    gid = g['id']
    gname = g['name']
    year = g.get('releaseYear', 'Unknown')
    chars = g.get('characters', [])
    
    missing_chars = []
    empty_moves = []
    
    for c in chars:
        cid = c['id']
        path = f"public/data/{gid}/{cid}.json"
        
        if not os.path.exists(path):
            missing_chars.append(cid)
        else:
            try:
                with open(path, 'r', encoding='utf-8') as cf:
                    cdata = json.load(cf)
                    if not cdata.get('movesList'):
                        empty_moves.append(cid)
            except:
                empty_moves.append(cid)
                
    if missing_chars or empty_moves:
        missing_report.append({
            "id": gid,
            "name": gname,
            "year": year,
            "missing_files": missing_chars,
            "empty_moves": empty_moves
        })

for r in missing_report:
    print(f"[{r['year']}] {r['name']} ({r['id']})")
    if r['missing_files']:
         print(f"  Missing JSons: {len(r['missing_files'])} (e.g. {r['missing_files'][:5]})")
    if r['empty_moves']:
         print(f"  Empty Moves: {len(r['empty_moves'])} (e.g. {r['empty_moves'][:5]})")
    print()

if not missing_report:
    print("ALL GAMES 100% COMPLETE!")
