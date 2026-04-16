import sys
sys.path.append('.')
import scripts.apply_fuzzy as fuzzy
import json
import re

with open('faqs/old/samurai_shodown_2019_moves.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('src/games.ts', 'r', encoding='utf-8') as f:
    ts_txt = f.read()

games_data = {}
game_chunks = ts_txt.split('characters: [')

for i in range(1, len(game_chunks)):
    prev_chunk = game_chunks[i-1]
    curr_chunk = game_chunks[i]
    id_match = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", prev_chunk)
    name_match = re.findall(r"name:\s*(['\"])(.*?)\1", prev_chunk)
    
    if not id_match or not name_match: continue
    
    gid = id_match[-1]
    gname = name_match[-1][1]
    
    char_array_end = curr_chunk.find(']')
    char_array = curr_chunk[:char_array_end] if char_array_end != -1 else curr_chunk
    
    chars = {}
    for c_match in re.finditer(r"id:\s*['\"]([^'\"]+)['\"]\s*,\s*name:\s*(['\"])(.*?)\2", char_array):
        cid = c_match.group(1)
        cname = c_match.group(3).replace(' (Coming Soon)', '')
        chars[cname] = cid
        
    games_data[gname] = {'id': gid, 'characters': chars}

best_game = fuzzy.fuzzy_match_game('Samurai Shodown (2019)', games_data.keys())
print('Matched Game:', best_game)
if best_game:
    print('Matching Characters...')
    for char in data.get('Characters', []):
        cname = char.get('Name')
        best_char = fuzzy.fuzzy_match_character(cname, games_data[best_game]['characters'].keys())
        print(f'{cname} -> {best_char}')

