with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace('name: "Mortal Kombat 1 (1992)"', 'name: "Mortal Kombat"')

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(text)
