with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace("'Leifang'", "'Lei Fang'")
text = text.replace("name: 'Leifang'", "name: 'Lei Fang'")
with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(text)
