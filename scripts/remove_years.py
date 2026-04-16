import re

ts_path = 'src/games.ts'
ts_text = open(ts_path, encoding='utf-8').read()

# Fix Guilty Gear (1998)
ts_text = re.sub(r'name:\s*"Guilty Gear \(1998\)",', 'name: "Guilty Gear",', ts_text)

# Fix Mortal Kombat (2011)
ts_text = re.sub(r'name:\s*"Mortal Kombat \(2011\)",', 'name: "Mortal Kombat",', ts_text)

# Fix Samurai Shodown (2019)
ts_text = re.sub(r'name:\s*"Samurai Shodown \(2019\)",', 'name: "Samurai Shodown",', ts_text)

# Fix Killer Instinct (1994)
ts_text = re.sub(r'name:\s*"Killer Instinct \(1994\)",', 'name: "Killer Instinct",', ts_text)

# Fix Killer Instinct (2013)
ts_text = re.sub(r'name:\s*"Killer Instinct \(2013\)",', 'name: "Killer Instinct",', ts_text)


with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(ts_text)
    
print("Removed redundant years from game names.")
