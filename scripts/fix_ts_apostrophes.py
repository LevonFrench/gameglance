import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix broken names containing unescaped apostrophes
text = text.replace("name: 'K''", "name: 'K\\''")
text = text.replace("name: 'Fighters' Impact'", "name: 'Fighters\\' Impact'")
text = text.replace("name: 'Heaven's Gate'", "name: 'Heaven\\'s Gate'")

# Find any remaining name: '...' strings that have multiple single quotes
# Actually those 3 lines are the ones that broke it. Let's fix Regulation 'A' if it exists.
text = text.replace("name: 'The King of Fighters: Maximum Impact Regulation 'A''", "name: 'The King of Fighters: Maximum Impact Regulation \\'A\\''")
text = text.replace("name: 'The King of Fighters: Maximum Impact Regulation 'A'", "name: 'The King of Fighters: Maximum Impact Regulation \\'A\\''")

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(text)
    
print("Fixed syntax errors in src/games.ts")
