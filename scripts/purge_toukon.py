import os
import re
import subprocess

game_id = 'marvel-toukon-fighting-souls-beta-version'
game_dir = f'public/data/{game_id}'
valid_chars = {'ms-marvel', 'star-lord', 'iron-man', 'captain-america', 'storm', 'doctor-doom'}

files_to_remove = []

if os.path.exists(game_dir):
    for filename in os.listdir(game_dir):
        if filename.endswith('.json'):
            char_id = filename.replace('.json', '')
            if char_id not in valid_chars:
                files_to_remove.append(os.path.join(game_dir, filename))

if files_to_remove:
    print(f"Removing unused JSONs: {files_to_remove}")
    subprocess.run(['git', 'rm', '-f'] + files_to_remove, check=True)

# Now update games.ts
with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

game_regex = r"(id:\s*['\"]marvel-toukon-fighting-souls-beta-version['\"].*?characters:\s*\[\s*)(.*?)(\s*\])"
gmatch = re.search(game_regex, ts_content, re.DOTALL)
if gmatch:
    chars = gmatch.group(2)
    # Split by lines and filter
    lines = chars.strip().split('\n')
    new_lines = []
    for line in lines:
        c_id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", line)
        if c_id_match:
            if c_id_match.group(1) in valid_chars:
                new_lines.append(line)
        else:
            new_lines.append(line)
            
    chars_updated = "\n".join(new_lines)
    ts_content = ts_content[:gmatch.start()] + gmatch.group(1) + chars_updated + "\n    ]" + ts_content[gmatch.end():]
    with open('src/games.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print("Removed unused characters from games.ts")
