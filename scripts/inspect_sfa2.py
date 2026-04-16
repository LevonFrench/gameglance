import re
import json

def inspect():
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    m = re.search(r'name:\s*[\'"]Street Fighter Alpha 2[\'"].*?characters:\s*\[(.*?)\]', content, re.DOTALL)
    if m:
        chars = re.findall(r'name:\s*[\'"]([^\'"]+)[\'"]', m.group(1))
        print("SFA2 Characters:")
        for c in chars[:30]:
            print(" -", c)
        print("Total SFA2 length:", len(chars))
    else:
        print("SFA2 not found")

if __name__ == "__main__":
    inspect()
