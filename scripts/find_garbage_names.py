import json
import glob

garbage_names = []
total_moves = 0

for file in glob.glob('public/data/*/*.json'):
    with open(file, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError:
            continue
            
    moves = data.get('movesList', [])
    for move in moves:
        total_moves += 1
        name = move.get('name', 'UNKNOWN')
        
        # Check for weird names
        if len(name) > 35:
            garbage_names.append(f"[{file}] Long name: '{name}'")
        elif not name.replace(' ', '').replace('-', '').replace('\'', '').isalnum():
            # Check for names with lots of weird punctuation
            weird_chars = [c for c in name if not c.isalnum() and c not in [' ', '-', "'", '(', ')', '.', ':', '!', '&', '/']]
            if weird_chars:
                garbage_names.append(f"[{file}] Weird chars in name: '{name}' -> {weird_chars}")
        elif '?' in name:
            garbage_names.append(f"[{file}] Question mark in name: '{name}'")

with open('garbage_names_report.txt', 'w', encoding='utf-8') as f:
    for g in garbage_names:
        f.write(g + '\n')
