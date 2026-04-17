import json
import glob
import re
import os

garbage_files = []
total_moves = 0
anomalies = []

for file in glob.glob('public/data/*/*.json'):
    with open(file, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError:
            anomalies.append(f"{file} is not valid JSON.")
            continue
            
    moves = data.get('movesList', [])
    for move in moves:
        total_moves += 1
        name = move.get('name', 'UNKNOWN')
        
        # Check for array format
        if 'inputs' in move:
            anomalies.append(f"[{file}] '{name}' uses 'inputs' array instead of 'input' string: {move['inputs']}")
            continue
            
        input_val = move.get('input', '')
        
        # Check for non-string
        if not isinstance(input_val, str):
            anomalies.append(f"[{file}] '{name}' has non-string input: {input_val}")
            continue
            
        # Check for commas
        # if ',' in input_val:
        #     anomalies.append(f"[{file}] '{name}' contains comma in input: {input_val}")
            
        # Check for english directional words
        lower_input = input_val.lower()
        if re.search(r'\b(down|up|forward|back|quarter circle|half circle)\b', lower_input):
            anomalies.append(f"[{file}] '{name}' contains English directional word in input: {input_val}")
            
with open('garbage_report.txt', 'w', encoding='utf-8') as f:
    f.write(f"Total moves scanned: {total_moves}\n")
    f.write(f"Anomalies found: {len(anomalies)}\n\n")
    for a in anomalies:
        f.write(f"{a}\n")

print(f"Scanned {total_moves} moves. Found {len(anomalies)} anomalies. Saved to garbage_report.txt")
