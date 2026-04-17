import re
with open('src/games.ts', 'r', encoding='utf-8') as f: content = f.read()

# Replace K\' with K'
# Actually, if it was written as name: 'K\'', then it's in a single quote.
# Wait, if they did name: 'K\', it's syntactically broken if not escaped.
# I will just regex replace any name containing \ and fix it.
new_content = re.sub(r"name:\s*'K\\\\'", r'name: "K\'"', content)
new_content = re.sub(r"name:\s*'K\\'", r'name: "K\'"', new_content)
new_content = re.sub(r"name:\s*\"K\\\\\"", r'name: "K\'"', new_content)
new_content = re.sub(r"name:\s*\"K\\\"", r'name: "K\'"', new_content)
new_content = re.sub(r"name:\s*['\"]([^'\"]*)\\\\([^'\"]*)['\"]", r'name: "\1\2"', new_content)

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Cleaned backslashes.")
