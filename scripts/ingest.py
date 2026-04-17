import os
import re
import json
import argparse
import subprocess

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def get_game_registry():
    """Reads src/games.ts to build a map of official game names to their slug IDs."""
    game_map = {}
    ts_path = 'src/games.ts'
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
        
    # 2. Smash Bros schema overrides
    if "smash" in name_lower and "forward" not in name_lower and "up" not in name_lower and "down" not in name_lower:
        # e.g., "Smash Attacks" category parsed as name
        return "Smash"
    if "aerial" in name_lower or "air" in name_lower:
        return "Aerial"

    # 3. Keyword matching
    if "punch" in name_lower or "kick" in name_lower or "combo" in name_lower or "knuckle" in name_lower or "jab" in name_lower or "tilt" in name_lower:
        # Avoid tagging special kicks as normals
        if "dragon kick" in name_lower and "double" not in name_lower and "jab" not in name_lower:
            return "Special"
        if "dragon uppercut" in name_lower:
            return "Special"
        return "Normal"
        
    if "throw" in name_lower or "hug" in name_lower or "drop" in name_lower or "suplex" in name_lower or "powerbomb" in name_lower or "piledriver" in name_lower or "stolen" in name_lower or "nage" in name_lower:
        return "Throw"
        
    if "taunt" in name_lower or "recover" in name_lower or "hold" in name_lower:
        return "System"
        
    if "pharaoh magic" in name_lower or "midnight bliss" in name_lower or "demon blast" in name_lower or "please help me!" in name_lower or "finale" in name_lower or "dancing flash" in name_lower or "shinpikaibyaku" in name_lower or "aegis reflector" in name_lower or "tyrant slaughter" in name_lower or "final atomic buster" in name_lower or "delos spark" in name_lower or "prova=di=cervo" in name_lower or "deadly rave" in name_lower or "mega" in name_lower or "gyro" in name_lower or "art" in name_lower:
        return "Super"

    # Default
    return "Special"

def parse_docx(filepath):
    try:
        import docx
    except ImportError:
        print("python-docx is not installed. Please install it via pip.")
        return None
        
    doc = docx.Document(filepath)
    text = '\n'.join([p.text for p in doc.paragraphs if p.text.strip()])
    
    match = re.search(r'(\{.*\})', text, re.DOTALL)
    json_str = match.group(1) if match else text
    
    try:
        data = json.loads(json_str)
        return data
    except Exception as e:
        print(f"Failed to parse JSON from docx: {e}")
        return None

def main():
    parser = argparse.ArgumentParser(description="Unified GameGlance Ingestion Parser")
    parser.add_argument('--payload', type=str, help="Raw JSON string payload")
    parser.add_argument('--file', type=str, help="Path to .json file")
    parser.add_argument('--docx', type=str, help="Path to .docx file")
    
    args = parser.parse_args()
    
    data = None
    if args.payload:
        data = json.loads(args.payload)
    elif args.file:
        with open(args.file, 'r', encoding='utf-8') as f:
            data = json.load(f)
    elif args.docx:
        data = parse_docx(args.docx)
    else:
        print("Must provide one of: --payload, --file, --docx")
        return
        
    if not data:
        print("No valid data parsed.")
        return
        
    game_registry = get_game_registry()
    total_injected = 0
    
    # Check if format is raw dict mapping: {"Game Name": {"Char Name": [moves]}}
    # or the object-based docx format: {"game": "Game Name", "characters": [...]}
    if "characters" in data and "game" in data:
        # Format 2 (from docx usually)
        game_raw_name = data["game"]
        game_id = game_registry.get(game_raw_name.lower())
        if not game_id:
            game_id = slugify(game_raw_name)
            
        game_dir = f"public/data/{game_id}"
        os.makedirs(game_dir, exist_ok=True)
        
        for char in data.get('characters', []):
            char_name = char.get('name')
            if not char_name: continue
            c_id = slugify(char_name)
            
            # Find the move array (could be 'moves', 'special_moves', etc.)
            moves_raw = []
            for k, v in char.items():
                if isinstance(v, list) and k != 'name':
                    # Flat merge for simplicity if there are multiple arrays
                    moves_raw.extend(v)
                    
            moves = []
            for i, m in enumerate(moves_raw):
                m_name = m.get('name', '')
                m_type = classify_move(m_name, i, len(moves_raw))
                # Override if strictly declared
                if 'type' in m and m['type']:
                    m_type = m['type']
                    
                moves.append({
                    "name": m_name,
                    "input": m.get("input", ""),
                    "type": m_type
                })
                
            out_payload = {"character": char_name, "movesList": moves}
            with open(f"{game_dir}/{c_id}.json", 'w', encoding='utf-8') as f:
                json.dump(out_payload, f, indent=2)
            print(f"Injected {game_id}/{c_id} ({len(moves)} moves)")
            total_injected += 1
            
    else:
        # Format 1 (Standard JSON mapping)
        # Could be a single dictionary or a list of dictionaries
        data_list = data if isinstance(data, list) else [data]
        for payload_dict in data_list:
            for g_name, chars in payload_dict.items():
                game_id = game_registry.get(g_name.lower())
                if not game_id:
                    game_id = slugify(g_name)
                    
                game_dir = f"public/data/{game_id}"
                os.makedirs(game_dir, exist_ok=True)
                
                for char_name, moves_cat in chars.items():
                    c_id = slugify(char_name)
                    moves = []
                    
                    if isinstance(moves_cat, list):
                        # Flat list of moves
                        for i, m in enumerate(moves_cat):
                            m_name = m.get('name', '')
                            m_type = classify_move(m_name, i, len(moves_cat))
                            moves.append({
                                "name": m_name,
                                "input": m.get("input", ""),
                                "type": m_type
                            })
                    elif isinstance(moves_cat, dict):
                        # Smash style categorization
                        for cat_name, cat_moves in moves_cat.items():
                            if isinstance(cat_moves, list):
                                for m in cat_moves:
                                    m_name = m.get('name', '')
                                    # Base classification on category if possible
                                    m_type = "Move"
                                    cat_lower = cat_name.lower()
                                    if "special" in cat_lower: m_type = "Special"
                                    elif "smash" in cat_lower: m_type = "Smash"
                                    elif "aerial" in cat_lower or "air" in cat_lower: m_type = "Aerial"
                                    elif "throw" in cat_lower: m_type = "Throw"
                                    elif "ground" in cat_lower: m_type = "Normal"
                                    else:
                                        m_type = classify_move(m_name, -1, 0) # Fallback heuristic
                                        
                                    moves.append({
                                        "name": m_name,
                                        "input": m.get("input", ""),
                                        "type": m_type
                                    })
                                    
                    out_payload = {"character": char_name, "movesList": moves}
                    with open(f"{game_dir}/{c_id}.json", 'w', encoding='utf-8') as f:
                        json.dump(out_payload, f, indent=2)
                    print(f"Injected {game_id}/{c_id} ({len(moves)} moves)")
                    total_injected += 1

    print(f"Total characters injected: {total_injected}")
    
    # Run pipeline
    print("Running synchronization pipeline...")
    subprocess.run(["python", "scripts/master_report.py"])
    subprocess.run(["python", "scripts/sync_clean.py"])
    subprocess.run(["python", "scripts/wiki_refresh.py"])
    print("Ingestion complete.")

if __name__ == '__main__':
    main()
