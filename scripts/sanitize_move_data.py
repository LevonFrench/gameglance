import os
import json
import re

DATA_DIR = os.path.join("public", "data")
QUARANTINE_FILE = os.path.join("public", "data", "staging_quarantine.json")
GRAVEYARD_FILE = os.path.join("public", "data", "graveyard.json")

# Extract notation system from games.ts
games_ts_path = os.path.join("src", "games.ts")
game_notation_map = {}
if os.path.exists(games_ts_path):
    with open(games_ts_path, "r", encoding="utf-8") as f:
        content = f.read()
        game_blocks = re.split(r'id:\s*[\'"]([^\'"]+)[\'"]', content)
        # game_blocks[1] is id, game_blocks[2] is remainder block, etc.
        for i in range(1, len(game_blocks), 2):
            game_id = game_blocks[i]
            block = game_blocks[i+1]
            match = re.search(r'notationSystem:\s*[\'"]([^\'"]+)[\'"]', block)
            if match:
                game_notation_map[game_id] = match.group(1)
            else:
                game_notation_map[game_id] = 'traditional'

prose_words = [
    "defeat", "requires", "during", "triangle", "square", "circle", "cross",
    "punch", "kick", "jump", "close", "near", "far", "when", "after", "before",
    "must", "only", "press", "hold", "release"
]
prose_pattern = re.compile(r'\b(' + '|'.join(prose_words) + r')\b', re.IGNORECASE)

quarantined = []
graveyard = []

total_checked = 0
total_removed = 0

for game_id in os.listdir(DATA_DIR):
    game_dir = os.path.join(DATA_DIR, game_id)
    if not os.path.isdir(game_dir):
        continue
    
    notation = game_notation_map.get(game_id, 'traditional')
    
    for filename in os.listdir(game_dir):
        if not filename.endswith(".json") or filename in ["_roster.json", "system.json"]:
            continue
        
        filepath = os.path.join(game_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            try:
                data = json.load(f)
            except Exception:
                continue
            
        if "movesList" not in data:
            continue
            
        new_movesList = []
        modified = False
        
        for move in data["movesList"]:
            total_checked += 1
            input_str = move.get("input", "")
            
            # Check for extreme garbage
            is_extreme = False
            if len(input_str) > 50:
                is_extreme = True
            elif prose_pattern.search(input_str) and len(input_str) > 10:
                is_extreme = True
            
            # Check for borderline garbage (quarantine)
            is_quarantine = False
            if not is_extreme:
                # Standard fighting game inputs shouldn't have too many spaces or weird punctuation
                # Numpad allows digits 1-9, traditional allows letters and + ~ / [ ]
                if "  " in input_str or "\n" in input_str:
                    is_quarantine = True
                elif len(input_str) > 30:
                    is_quarantine = True
                    
            if is_extreme:
                graveyard.append({
                    "gameId": game_id,
                    "characterId": data.get("name", ""),
                    "move": move,
                    "reason": "extreme_garbage"
                })
                modified = True
                total_removed += 1
            elif is_quarantine:
                quarantined.append({
                    "gameId": game_id,
                    "characterId": data.get("name", ""),
                    "move": move,
                    "reason": "borderline"
                })
                modified = True
                total_removed += 1
            else:
                new_movesList.append(move)
                
        if modified:
            data["movesList"] = new_movesList
            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)

with open(QUARANTINE_FILE, "w", encoding="utf-8") as f:
    json.dump(quarantined, f, indent=2)

with open(GRAVEYARD_FILE, "w", encoding="utf-8") as f:
    json.dump(graveyard, f, indent=2)

print(f"Sanitization complete.")
print(f"Total moves checked: {total_checked}")
print(f"Total moves removed: {total_removed}")
print(f"Moves in Graveyard: {len(graveyard)}")
print(f"Moves in Quarantine: {len(quarantined)}")
