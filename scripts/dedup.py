#!/usr/bin/env python3
"""Remove duplicate game entries, keeping only the first occurrence."""
import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    content = f.read()

for gid in ['hokuto-no-ken', 'blazblue-cross-tag-battle', 'persona-4-arena-ultimax']:
    id_str = f"id: '{gid}'"
    count = content.count(id_str)
    print(f"{gid}: {count} occurrences")
    
    while content.count(id_str) > 1:
        # Find the LAST occurrence and remove that block
        last_pos = content.rfind(id_str)
        # Find the block start (the \n  { before this id)
        block_start = content.rfind('\n  {', 0, last_pos)
        # Find the block end (the \n  } after this id)
        block_end = content.find('\n  }', last_pos) + 4  # include the \n  }
        if block_start != -1 and block_end > block_start:
            content = content[:block_start] + content[block_end:]
            print(f"  Removed duplicate at position {last_pos}")

# Also check mechanics were properly injected
print(f"\nMechanics check:")
for gid in ['tekken-tag-tournament-2', 'mortal-kombat-11', 'soulcalibur', 'weaponlord']:
    id_pos = content.find(f"id: '{gid}'")
    block_end = content.find('\n  }', id_pos)
    block = content[id_pos:block_end]
    has_mech = 'systemMechanics:' in block
    print(f"  {gid}: mech={has_mech}")

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("\nDone")
