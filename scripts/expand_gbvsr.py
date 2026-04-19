import re

filepath = 'src/games.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find granblue-fantasy-versus-rising block
match = re.search(r"id: 'granblue-fantasy-versus-rising'.*?rosterCount: 14,.*?characters: \[\s*(.*?)\s*\]", content, re.DOTALL)
if match:
    old_block = match.group(0)
    
    new_chars = """      { id: '2b', name: '2B', moveCount: 0 },
        { id: 'anila', name: 'Anila', moveCount: 0 },
        { id: 'anre', name: 'Anre', moveCount: 0 },
        { id: 'avatar-belial', name: 'Avatar Belial', moveCount: 0 },
        { id: 'beatrix', name: 'Beatrix', moveCount: 0 },
        { id: 'beelzebub', name: 'Beelzebub', moveCount: 0 },
        { id: 'belial', name: 'Belial', moveCount: 0 },
        { id: 'cagliostro', name: 'Cagliostro', moveCount: 0 },
        { id: 'charlotta', name: 'Charlotta', moveCount: 0 },
        { id: 'djeeta', name: 'Djeeta', moveCount: 0 },
        { id: 'eustace', name: 'Eustace', moveCount: 0 },
        { id: 'ferry', name: 'Ferry', moveCount: 0 },
        { id: 'gran', name: 'Gran', moveCount: 0 },
        { id: 'grimnir', name: 'Grimnir', moveCount: 0 },
        { id: 'katalina', name: 'Katalina', moveCount: 0 },
        { id: 'ladiva', name: 'Ladiva', moveCount: 0 },
        { id: 'lancelot', name: 'Lancelot', moveCount: 0 },
        { id: 'lowain', name: 'Lowain', moveCount: 0 },
        { id: 'lucilius', name: 'Lucilius', moveCount: 0 },
        { id: 'metera', name: 'Metera', moveCount: 0 },
        { id: 'narmaya', name: 'Narmaya', moveCount: 0 },
        { id: 'nier', name: 'Nier', moveCount: 0 },
        { id: 'percival', name: 'Percival', moveCount: 0 },
        { id: 'sandalphon', name: 'Sandalphon', moveCount: 0 },
        { id: 'seox', name: 'Seox', moveCount: 0 },
        { id: 'siegfried', name: 'Siegfried', moveCount: 0 },
        { id: 'soriz', name: 'Soriz', moveCount: 0 },
        { id: 'vane', name: 'Vane', moveCount: 0 },
        { id: 'vaseraga', name: 'Vaseraga', moveCount: 0 },
        { id: 'versusia', name: 'Versusia', moveCount: 0 },
        { id: 'vikala', name: 'Vikala', moveCount: 0 },
        { id: 'vira', name: 'Vira', moveCount: 0 },
        { id: 'yuel', name: 'Yuel', moveCount: 0 },
        { id: 'zeta', name: 'Zeta', moveCount: 0 },
        { id: 'zooey', name: 'Zooey', moveCount: 0 }"""
    
    new_block = old_block.replace("rosterCount: 14", "rosterCount: 35")
    new_block = re.sub(r"characters: \[\s*.*?\s*\]", f"characters: [\n  {new_chars}\n      ]", new_block, flags=re.DOTALL)
    
    content = content.replace(old_block, new_block)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Successfully expanded GBVSR roster.")
else:
    print("Could not find GBVSR block.")
