import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'(name: "Street Fighter III: 2nd Impact",.*?releaseYear:\s*)\d+', r'\g<1>1997', content, flags=re.DOTALL)
content = re.sub(r'(name: "The King of Fighters XV",.*?releaseYear:\s*)\d+', r'\g<1>2022', content, flags=re.DOTALL)
content = re.sub(r'(name: "Samurai Shodown",\s*tagline:.*?developer: "SNK",\s*releaseYear:\s*)\d+', r'\g<1>1993', content, flags=re.DOTALL)
content = re.sub(r'(name: "Samurai Shodown \(2019\)",\s*tagline:.*?developer: "SNK",\s*releaseYear:\s*)\d+', r'\g<1>2019', content, flags=re.DOTALL)

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(content)
