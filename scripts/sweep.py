import os
import glob
import re
import json
import subprocess

print("Scanning for ghosts, orphans, and empties...")

# 1. Parse registry
with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

registry = set()
parts = re.split(r'(\n  \{\n\s*id:\s*[\'"][^\'"]+[\'"])', ts_content)
for i in range(1, len(parts), 2):
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", parts[i])
    if not id_match: continue
    game_id = id_match.group(1)
    
    body = parts[i+1]
    char_start = body.find('characters: [')
    if char_start != -1:
        char_end = body.find(']', char_start)
        char_array = body[char_start:char_end]
        for c_match in re.finditer(r"\{\s*id:\s*['\"]([^'\"]+)['\"]", char_array):
            c_id = c_match.group(1)
            registry.add(f"{game_id}/{c_id}")

# 2. Scan public/data
data_files = glob.glob('public/data/**/*.json', recursive=True)
files_to_remove = []

for file_path in data_files:
    # Normalize path
    normalized = file_path.replace('\\', '/')
    parts = normalized.split('/')
    if len(parts) < 4: continue
    
    game_folder = parts[2]
    char_file = parts[3]
    char_id = char_file.replace('.json', '')
    
    key = f"{game_folder}/{char_id}"
    
    # Check if orphan
    if key not in registry:
        print(f"Ghost/Orphan found: {normalized}")
        files_to_remove.append(normalized)
        continue
        
    # Check if empty or malformed
    if os.path.getsize(file_path) == 0:
        print(f"Empty file found: {normalized}")
        files_to_remove.append(normalized)
        continue
        
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            # if data has no keys, it's effectively empty, but skeletons have "character" and "movesList"
            if not data:
                print(f"Empty JSON object found: {normalized}")
                files_to_remove.append(normalized)
    except:
        print(f"Malformed JSON found: {normalized}")
        files_to_remove.append(normalized)

# Remove bad files
if files_to_remove:
    print(f"Removing {len(files_to_remove)} unwanted files...")
    # use git rm to properly untrack them
    # Batch the rm commands so we don't hit command line length limits
    batch_size = 50
    for i in range(0, len(files_to_remove), batch_size):
        batch = files_to_remove[i:i+batch_size]
        try:
            subprocess.run(['git', 'rm', '-f'] + batch, check=True)
        except subprocess.CalledProcessError:
            # Fallback if git rm fails (e.g. file is untracked)
            for f in batch:
                if os.path.exists(f): os.remove(f)
else:
    print("No ghost files found!")

# 3. Clean empty directories
for root, dirs, files in os.walk('public/data', topdown=False):
    for name in dirs:
        dir_path = os.path.join(root, name)
        if not os.listdir(dir_path):
            print(f"Removing empty directory: {dir_path}")
            os.rmdir(dir_path)

print("Sweep complete!")
