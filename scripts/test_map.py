import json

def test_mapping():
    with open('scratch/truth_roster.json', 'r', encoding='utf-8') as f:
        truth = json.load(f)

    # Recreate the logic to see what Street Fighter Alpha 2 mapped to
    db_game_name = "Street Fighter Alpha 2"
    truth_game = None
    for tg in truth.keys():
        if db_game_name.lower() == tg.lower():
            truth_game = tg
            break
            
    if not truth_game:
        for tg in truth.keys():
            if db_game_name.lower() in tg.lower() or tg.lower() in db_game_name.lower():
                truth_game = tg
                break
                
    print(f"SFA2 Mapping: {truth_game}")

if __name__ == "__main__":
    test_mapping()
