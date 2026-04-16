import os
import re

RENAMES = {
  'sf6': 'street-fighter-6',
  'sf2': 'street-fighter-ii',
  'cvs1': 'capcom-vs-snk',
  'cvs2': 'capcom-vs-snk-2',
  'cfj': 'capcom-fighting-jam',
  'darkstalkers': 'darkstalkers-the-night-warriors',
  'sfa1': 'street-fighter-alpha',
  'sfa2': 'street-fighter-alpha-2',
  'sfa3': 'street-fighter-alpha-3',
  'cota': 'x-men-children-of-the-atom',
  'cotw': 'fatal-fury-city-of-the-wolves',
  'doa6': 'dead-or-alive-6',
  'msh': 'marvel-super-heroes',
  'sf31': 'street-fighter-iii-new-generation',
  'sf32i': 'street-fighter-iii-2nd-impact',
  'sf33s': 'street-fighter-iii-3rd-strike',
  'ssf2': 'super-street-fighter-ii',
  'vf1': 'virtua-fighter',
  'vf5': 'virtua-fighter-5-ultimate-showdown',
  'xmvsf': 'x-men-vs-street-fighter',
  'mvc2': 'marvel-vs-capcom-2',
  'mvci': 'marvel-vs-capcom-infinite',
  'mk1': 'mortal-kombat-1',
  'hypersf2': 'hyper-street-fighter-ii'
}

def rename_public_data():
    for old_id, new_id in RENAMES.items():
        old_path = os.path.join('public', 'data', old_id)
        new_path = os.path.join('public', 'data', new_id)
        if os.path.exists(old_path) and not os.path.exists(new_path):
            print(f"Renaming {old_path} -> {new_path}")
            os.rename(old_path, new_path)

def patch_games_ts():
    ts = open('src/games.ts', encoding='utf-8').read()
    for old_id, new_id in RENAMES.items():
        ts = re.sub(r"id:\s*['\"]" + old_id + r"['\"]\s*,\s*name:", f"id: '{new_id}',\n    name:", ts)
    open('src/games.ts', 'w', encoding='utf-8').write(ts)

def patch_game_select_view():
    ts = open('src/GameSelectView.tsx', encoding='utf-8').read()
    for old_id, new_id in RENAMES.items():
        ts = re.sub(r'(\s+)' + old_id + r':\s*\{', r"\1'" + new_id + r"': {", ts)
    open('src/GameSelectView.tsx', 'w', encoding='utf-8').write(ts)

if __name__ == '__main__':
    rename_public_data()
    patch_games_ts()
    patch_game_select_view()
    print("Done renaming!")
