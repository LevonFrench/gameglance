import os
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    games_content = f.read()

# For each game, find characters. If all have " (Coming Soon)", set isHidden to true!
# Or if all are empty! But we already appended "(Coming Soon)"

pattern = re.compile(r"\{\s*id:\s*['\"]([^'\"]+)['\"]\s*,([^\]]+?characters:\s*\[(.*?)\],)", re.DOTALL)
new_content = ""
last_end = 0

for match in pattern.finditer(games_content):
    game_id = match.group(1)
    props = match.group(2)
    char_array = match.group(3)
    
    # Are all characters coming soon?
    char_names = re.findall(r"name:\s*['\"]([^'\"]+)['\"]", char_array)
    if len(char_names) == 0:
        all_coming_soon = True
    else:
        all_coming_soon = all(" (Coming Soon)" in name for name in char_names)
        
    # We append the original chunk except we inject/strip isHidden: true
    original_chunk = games_content[last_end:match.end()]
    
    # Check if isHidden is there
    has_is_hidden = 'isHidden:' in props
    
    # rewrite props
    if all_coming_soon:
        if not has_is_hidden:
            # inject
            replaced = re.sub(r"(id:\s*['\"]" + game_id + r"['\"]\s*,)", r"\1\n    isHidden: true,", original_chunk, 1)
            new_content += replaced
        else:
            # Replace isHidden: false with true
            replaced = re.sub(r"isHidden:\s*false\s*,", r"isHidden: true,", original_chunk)
            new_content += replaced
    else:
        if not has_is_hidden:
            # wait, if not all coming soon, we dont need isHidden.
            new_content += original_chunk
        else:
            # strip isHidden entirely or set false
            replaced = re.sub(r"isHidden:\s*true\s*,", r"isHidden: false,", original_chunk, count=1)
            new_content += replaced
            
    last_end = match.end()

new_content += games_content[last_end:]

with open('src/games_updated.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Generated games_updated.ts!")
