import os

filepath = 'src/GlyphSequence.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if line.startswith("const tokenizeInputs = "):
        start_idx = i
    if line.startswith("const renderDirectionalSVG = "):
        end_idx = i
        break

if start_idx == -1 or end_idx == -1:
    print("Could not find boundaries")
    exit(1)

with open('scripts/new_logic.ts', 'r', encoding='utf-8') as f:
    new_logic = f.read()

before = "".join(lines[:start_idx])
after = "".join(lines[end_idx:])

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(before + new_logic + '\n' + after)

print("Successfully spliced.")
