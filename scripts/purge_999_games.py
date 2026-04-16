import re

ts_path = 'src/games.ts'
ts = open(ts_path, encoding='utf-8').read()

# We need to find objects where rosterCount is 999 and remove them entirely.
# The structure is:
#  {
#    id: '...',
#    name: '...',
#    ...
#    rosterCount: 999,
#    characters: [...]
#    ...
#    tabs: [...]
#  },

# It's safer to split the string by "  {\n    id:" so we operate on exact game blocks!
blocks = ts.split('  {\n    id:')
new_blocks = [blocks[0]] # Everything before the first game

removed = []
for b in blocks[1:]:
    # Re-attach the splitting delimiter for parsing
    full_block = '  {\n    id:' + b
    
    # Check if rosterCount is 999
    if re.search(r'rosterCount:\s*999\s*,', full_block):
        name_match = re.search(r'name:\s*[\'"]([^\'"]+)[\'"]', full_block)
        if name_match:
            removed.append(name_match.group(1))
    else:
        new_blocks.append(b)

print(f"Purging {len(removed)} games with rosterCount 999:")
for r in removed:
    print(f"- {r}")

# Rejoin blocks
new_ts = '  {\n    id:'.join(new_blocks)

# Fix trailing commas if the last item got removed (not highly likely if the last item is valid, but let's be safe)
new_ts = re.sub(r',\s*\];', '\n];', new_ts)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_ts)
