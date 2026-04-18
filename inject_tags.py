import re

target_tags = {
    'street-fighter-6': ['3D', 'Modern'],
    'street-fighter-v-champion-edition': ['3D'],
    't8': ['3D', 'Modern'],
    't7': ['3D'],
    'guilty-gear-strive': ['Anime', 'Modern'],
    'mortal-kombat-1': ['3D', 'Modern'],
    'mortal-kombat-11': ['3D'],
    'dragon-ball-fighterz': ['Anime', 'Versus'],
    'super-smash-bros-ultimate': ['Smash'],
    'street-fighter-iii-3rd-strike': ['Golden', '2D'],
    'super-street-fighter-ii-turbo': ['Golden', '2D'],
    'marvel-vs-capcom-2': ['Golden', '2D', 'Versus'],
    'capcom-vs-snk-2-mark-of-the-millennium-2001': ['Golden', '2D'],
    'ultimate-marvel-vs-capcom-3': ['3D', 'Versus'],
    'the-king-of-fighters-xv': ['3D', 'Modern'],
    'the-king-of-fighters-98-ultimate-match': ['Golden', '2D'],
    'blazblue-central-fiction': ['Anime', '2D'],
    'under-night-in-birth-ii-[sysceles]': ['Anime', '2D', 'Modern'],
    'samurai-shodown': ['3D'],
    'vampire-savior-the-lord-of-vampire': ['Golden', '2D']
}

with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

for game_id, tags in target_tags.items():
    safe_id = game_id.replace('[', '\\[').replace(']', '\\]')
    pattern = re.compile(r"(id:\s*'" + safe_id + r"',.*?)(characters:\s*\[)", re.DOTALL)
    
    def replacer(match):
        block = match.group(1)
        if 'tags:' not in block:
            tag_str = '    tags: ' + str(tags) + ',\n\n    '
            return block + tag_str + match.group(2)
        return match.group(0)

    content = pattern.sub(replacer, content)

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Tags injected successfully.")
