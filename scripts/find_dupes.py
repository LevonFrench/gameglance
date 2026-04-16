import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

js_ids = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", text)

pairs = [
    ('battle-monsters', 'chilli-pepper', 'chilli--pepper'),
    ('battle-monsters', 'deathmask', 'death-mask'),
    ('groove-on-fight', 'mad', 'm-a-d'),
    ('groove-on-fight', 'oume-otane', 'oume--otane'),
    ('melty-blood-actress-again-current-code', 'archetypeearth', 'archetype-earth'),
    ('street-fighter-6', 'aki', 'a-k-i')
]

for game, id1, id2 in pairs:
    c_id1 = js_ids.count(id1)
    c_id2 = js_ids.count(id2)
    print(f'{game}: {id1} ({c_id1}) vs {id2} ({c_id2})')
