import os
import json
import re

STAGING_DIR = 'staging/legacy_raw'
DATA_DIR = 'public/data'

def get_existing_combos(game_id, char_id):
    path = f"{DATA_DIR}/{game_id}/{char_id}.json"
    if not os.path.exists(path):
        return 0
    with open(path, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
            return len([m for m in data if m.get('category') == 'Combos'])
        except:
            return 0

def extract_wiki_combos(content):
    combos = []
    # Try to find Combo section
    in_combos = False
    
    lines = content.split('\n')
    for line in lines:
        line = line.strip()
        # Detect combo section
        if re.match(r'^==+\s*Combos?\s*==+$', line, re.IGNORECASE):
            in_combos = True
            continue
        elif re.match(r'^==+\s*.*==+$', line):
            if in_combos:
                in_combos = False # Exit section
                
        if in_combos:
            # Match bulleted lists that look like combos
            # e.g., * c.lk, c.hp /\ sj.lp, sj.lk...
            if line.startswith('*'):
                combo_text = line.lstrip('*').strip()
                # Skip if it looks like a purely descriptive sentence without notation
                # A crude heuristic: combos usually have notation characters, commas, arrows, etc.
                if len(combo_text) > 2:
                    combos.append(combo_text)
                    
            # Match MVC2_Combo templates
            elif '{{Combo' in line or '{{SF6-Combo' in line:
                combos.append(line)
                
    return combos

def main():
    report = []
    report.append("# Legacy Data Combo Audit")
    report.append("Comparing existing JSON combos to available Wikitext combos.\n")
    
    total_existing = 0
    total_found = 0
    total_chars_missing_combos = 0
    
    for game_id in os.listdir(STAGING_DIR):
        game_dir = os.path.join(STAGING_DIR, game_id)
        if not os.path.isdir(game_dir):
            continue
            
        game_report = []
        for file in os.listdir(game_dir):
            if not file.endswith('.txt'): continue
            char_id = file.replace('.txt', '')
            
            with open(os.path.join(game_dir, file), 'r', encoding='utf-8') as f:
                content = f.read()
                
            wiki_combos = extract_wiki_combos(content)
            existing_count = get_existing_combos(game_id, char_id)
            
            total_existing += existing_count
            total_found += len(wiki_combos)
            
            if len(wiki_combos) > existing_count:
                game_report.append(f"- **{char_id}**: {existing_count} existing -> **{len(wiki_combos)} available** in raw text.")
                total_chars_missing_combos += 1
                
        if game_report:
            report.append(f"## {game_id}")
            report.extend(game_report)
            report.append("")
            
    report.insert(2, f"**Summary**: Found **{total_found}** potential combos in raw text. We currently have **{total_existing}** existing combos in JSON.")
    report.insert(3, f"**{total_chars_missing_combos}** characters have un-ingested combos available.\n")
    
    with open('legacy_data_audit.md', 'w', encoding='utf-8') as f:
        f.write('\n'.join(report))
        
    print("Audit complete! Saved to legacy_data_audit.md")

if __name__ == "__main__":
    main()
