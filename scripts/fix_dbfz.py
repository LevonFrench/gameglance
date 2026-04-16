import re

ts_path = 'src/games.ts'
ts_content = open(ts_path, encoding='utf-8').read()

m = re.search(r'\{\s*id:\s*[\'"]dragon-ball-fighterz[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\][\s\S]*?\}', ts_content)
if m:
    print("Found DBFZ Block:")
    print(m.group(0))
    
    # We know the characters are: frieza, goku-(super-saiyan), goku, vegeta-(super-saiyan)
    block = m.group(0)
    
    char_array_str = """
      { id: 'frieza', name: 'Frieza' },
      { id: 'goku-super-saiyan', name: 'Goku (Super Saiyan)' },
      { id: 'goku', name: 'Goku' },
      { id: 'vegeta-super-saiyan', name: 'Vegeta (Super Saiyan)' }
    """
    block = re.sub(r'characters:\s*\[[\s\S]*?\]', f"characters: [{char_array_str}]", block)
    block = re.sub(r'rosterCount:\s*\d+', "rosterCount: 4", block)
    
    ts_content = ts_content.replace(m.group(0), block)
    
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print("Updated DBFZ block successfully.")
else:
    print("DBFZ block not found.")
