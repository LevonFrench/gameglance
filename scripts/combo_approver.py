import json
import sys
import os

def load_json(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(filepath, data):
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write('\n')

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def main():
    if len(sys.argv) < 2:
        print("Usage: python combo_approver.py <path_to_raw_combos_json>")
        print("Expected format of raw JSON: [{'game': '...', 'character': '...', 'id': '...', 'name': '...', 'input': '...'}, ...]")
        sys.exit(1)

    raw_filepath = sys.argv[1]
    
    try:
        raw_combos = load_json(raw_filepath)
    except Exception as e:
        print(f"Error loading {raw_filepath}: {e}")
        sys.exit(1)

    if not isinstance(raw_combos, list):
        print("Error: The raw combos file must be a JSON array of combo objects.")
        sys.exit(1)

    total = len(raw_combos)
    approved_count = 0
    skipped_count = 0

    print(f"Loaded {total} combos for review.")
    input("Press Enter to begin...")

    for i, combo in enumerate(raw_combos):
        game_id = combo.get('game')
        char_id = combo.get('character')
        combo_name = combo.get('name', 'Unnamed Combo')
        combo_input = combo.get('input', '')
        combo_id = combo.get('id', str(i))

        if not game_id or not char_id:
            print(f"Skipping malformed combo (missing game or char): {combo}")
            skipped_count += 1
            continue

        target_file = os.path.join("public", "data", game_id, f"{char_id}.json")

        while True:
            clear_screen()
            print("="*60)
            print(f" COMBO APPROVAL [{i+1}/{total}] ".center(60, '='))
            print("="*60)
            print(f"Game:      {game_id}")
            print(f"Character: {char_id}")
            print(f"Target:    {target_file}")
            print("-" * 60)
            print(f"Name:      {combo_name}")
            print(f"Input:     {combo_input}")
            print("="*60)
            
            choice = input("\nAction -> [y] Approve  [n] Reject  [e] Edit  [q] Quit : ").strip().lower()

            if choice == 'q':
                print("\nExiting...")
                print(f"Session Summary: {approved_count} Approved, {skipped_count} Rejected/Skipped.")
                sys.exit(0)
            elif choice == 'n':
                print("Combo rejected.")
                skipped_count += 1
                break
            elif choice == 'e':
                new_name = input(f"New name (leave blank to keep '{combo_name}'): ").strip()
                new_input = input(f"New input (leave blank to keep '{combo_input}'): ").strip()
                if new_name:
                    combo_name = new_name
                if new_input:
                    combo_input = new_input
                # Loop back to show the edited combo before approving
                continue
            elif choice == 'y':
                if not os.path.exists(target_file):
                    print(f"\n[!] Target file does not exist: {target_file}")
                    input("Press Enter to skip this combo...")
                    skipped_count += 1
                    break
                
                try:
                    char_data = load_json(target_file)
                    if 'combosList' not in char_data:
                        char_data['combosList'] = []
                    
                    # Check for duplicates by ID
                    if any(c.get('id') == combo_id for c in char_data['combosList']):
                        print(f"\n[!] A combo with ID '{combo_id}' already exists in {char_id}.json.")
                        input("Press Enter to skip...")
                        skipped_count += 1
                        break

                    char_data['combosList'].append({
                        "id": combo_id,
                        "name": combo_name,
                        "input": combo_input
                    })
                    
                    save_json(target_file, char_data)
                    print(f"Combo approved and saved to {target_file}.")
                    approved_count += 1
                except Exception as e:
                    print(f"\n[!] Error processing {target_file}: {e}")
                    input("Press Enter to skip...")
                    skipped_count += 1
                break
            else:
                print("Invalid choice.")
    
    print("\n" + "="*60)
    print(" ALL COMBOS PROCESSED ".center(60, '='))
    print(f" Summary: {approved_count} Approved, {skipped_count} Rejected.")
    print("="*60)

if __name__ == "__main__":
    main()
