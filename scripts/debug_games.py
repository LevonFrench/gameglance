import re
with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()
matches = re.finditer(r'name:\s*[\'"]([^\'"]+)[\'"]', text)
names = [m.group(1) for m in matches]
print(f"Total games matched: {len(names)}")
print("Duplicates:")
import collections
counts = collections.Counter(names)
for n, c in counts.items():
    if c > 1:
        print(f" - {n} ({c})")
