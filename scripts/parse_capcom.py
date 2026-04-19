import json
import re
import sys

def translate_input(text):
    text = text.replace('Down-Right', '3')
    text = text.replace('Down-Left', '1')
    text = text.replace('Up-Right', '9')
    text = text.replace('Up-Left', '7')
    text = text.replace('Down', '2')
    text = text.replace('Up', '8')
    text = text.replace('Right', '6')
    text = text.replace('Left', '4')
    text = text.replace('Neutral', '5')
    text = text.replace(' / ', '/')
    text = text.replace(' + ', '')
    text = text.replace(' ', '')
    text = text.replace('punch_l', 'LP')
    text = text.replace('punch_m', 'MP')
    text = text.replace('punch_h', 'HP')
    text = text.replace('kick_l', 'LK')
    text = text.replace('kick_m', 'MK')
    text = text.replace('kick_h', 'HK')
    text = text.replace('punch', 'P')
    text = text.replace('kick', 'K')
    return text

def parse_moves(raw_moves):
    parsed = []
    # Identify parents for follow-ups
    last_parent = None
    
    for rm in raw_moves:
        name = rm['name']
        category = rm['category']
        raw_input = rm['input']
        
        # Determine move type based on category
        move_type = "normal"
        if "Special" in category: move_type = "special"
        elif "Super" in category: move_type = "super"
        elif "Unique" in category: move_type = "command"
        elif "Throw" in category: move_type = "throw"
        elif "Common" in category: move_type = "system"
        
        # Check for tree structures / follow ups
        is_follow_up = False
        if "(During " in name:
            parent_name = name.split("(During ")[1].split(")")[0]
            is_follow_up = True
            name = name.split(" (")[0]
        elif "(Before " in name:
            name = name.split(" (")[0] + " (Feint)"
        else:
            name = name.split(" (")[0]
        
        input_notation = translate_input(raw_input)
        
        move_id = name.lower().replace(" ", "_").replace("-", "_").replace("'", "")
        
        parsed.append({
            "id": move_id,
            "name": name,
            "type": move_type,
            "input": input_notation,
            "frameData": {
                "startup": "-",
                "active": "-",
                "recovery": "-",
                "advantage": "-"
            }
        })
    return parsed

if __name__ == "__main__":
    with open('scratch/cviper_raw.json', 'r') as f:
        raw_data = json.load(f)
        
    moves = parse_moves(raw_data)
    
    char_data = {
        "name": "C. Viper",
        "character": "c-viper",
        "game": "Street Fighter 6",
        "movesList": moves,
        "combosList": []
    }
    
    with open('public/data/street-fighter-6/c-viper.json', 'w') as f:
        json.dump(char_data, f, indent=2)
        
    print("Parsed C. Viper moves.")
