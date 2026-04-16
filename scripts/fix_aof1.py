import re

with open('src/games.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Find the block for "art-of-fighting"
# It has id: 'art-of-fighting'
match = re.search(r'(id:\s*[\'"]art-of-fighting[\'"][\s\S]*?characters:\s*\[\s*)([\s\S]*?)(\s*\])', text)
if match:
    # AOF1 correct roster
    roster = [
        ("ryo-sakazaki", "Ryo Sakazaki"),
        ("robert-garcia", "Robert Garcia"),
        ("ryuhaku-todoh", "Ryuhaku Todoh"),
        ("jack-turner", "Jack Turner"),
        ("lee-pai-long", "Lee Pai Long"),
        ("king", "King"),
        ("micky-rogers", "Micky Rogers"),
        ("john-crawley", "John Crawley"),
        ("mr.-big", "Mr. Big"),
        ("mr.-karate", "Mr. Karate")
    ]
    
    char_str = ",\n      ".join([f"{{ id: '{c[0]}', name: '{c[1]}' }}" for c in roster])
    
    new_text = text[:match.start(2)] + char_str + text[match.end(2):]
    
    # Also fix rosterCount: 999 to rosterCount: 10
    block_start = new_text.rfind('{', 0, match.start(1))
    block_end = new_text.find(']', match.start(1)) + 1
    
    block = new_text[block_start:block_end]
    new_block = re.sub(r'rosterCount:\s*\d+', f'rosterCount: {len(roster)}', block)
    
    final_text = new_text[:block_start] + new_block + new_text[block_end:]
    
    with open('src/games.ts', 'w', encoding='utf-8') as f:
        f.write(final_text)
    print("Fixed Art of Fighting 1 roster.")
else:
    print("Could not find Art of Fighting block.")
