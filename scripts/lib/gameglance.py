import os
import re
import json

def slugify(text):
    if not text: return ""
    if text == "Z.W.E.I.": return "zwei"
    text = text.lower()
    if "grøh" in text or "groh" in text: return "grh"
    text = text.replace("'", "")
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def get_game_registry(ts_path='src/games.ts'):
    """Reads src/games.ts to build a map of official game names to their slug IDs."""
    game_map = {}
    if not os.path.exists(ts_path):
        return game_map
    
    with open(ts_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    current_id = None
    for line in lines:
        stripped = line.strip()
        
        m_id = re.search(r'id:\s*(?:"([^"]+)"|\'([^\']+)\')', stripped)
        if m_id:
            current_id = m_id.group(1) or m_id.group(2)
            
        m_name = re.search(r'name:\s*(?:"([^"]+)"|\'([^\']+)\')', stripped)
        if m_name and current_id:
            name = m_name.group(1) or m_name.group(2)
            game_map[name.lower()] = current_id
            current_id = None # reset
            
    return game_map

def classify_move(move_name, index, total_moves):
    """Universal heuristic classifier for fighting game moves."""
    name_lower = move_name.lower()
    
    # 1. Positional Priority (First 4 normals, Last is super if sufficiently long)
    if index < 4 and total_moves >= 8:
        return "Normal"
    if index == total_moves - 1 and total_moves >= 8:
        return "Super"
        
    # 2. Keyword matching
    if any(k in name_lower for k in ["super", "art", "critical", "overdrive", "climax", "hidden", "desperation", "max", "meteor", "distortion", "astral", "fatal", "x-ray", "blow", "savage"]):
        return "Super"
    if any(k in name_lower for k in ["throw", "suplex", "grab"]):
        return "Throw"
    if any(k in name_lower for k in ["fatality", "brutality", "animality", "babality", "friendship", "hara-kiri", "destroy"]):
        return "Finisher"
    if any(k in name_lower for k in ["strike", "kick", "punch", "slash", "smash"]):
        return "Normal"
        
    # 3. Default fallback
    return "Special"

def load_character_json(file_path):
    """Safely loads a character JSON file and logs decode errors."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except json.JSONDecodeError as e:
        print(f"[ERROR] JSON Decode Error in {file_path}: {e}")
        return None
    except Exception as e:
        print(f"[ERROR] Failed to load {file_path}: {e}")
        return None
