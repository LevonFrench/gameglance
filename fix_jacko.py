
with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace('Jack-O\ (Coming Soon)\'\'', 'Jack-O\\\' (Coming Soon)')
with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(text)

