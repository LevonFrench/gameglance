import urllib.request
import json
import re
import os

CHARACTERS = {
    'Sagat': 'sagat',
    'Elena': 'elena',
    'Alex': 'alex',
    'C.Viper': 'c-viper'
}

def fetch_wikitext(char_name):
    url = f"https://wiki.supercombo.gg/api.php?action=query&prop=revisions&titles=Street_Fighter_6/{char_name}/Combos&rvprop=content&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'GameGlance-Scraper/1.0'})
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        for page_id in pages:
            if int(page_id) < 0:
                print(f"Page not found for {char_name}")
                return ""
            return pages[page_id].get('revisions', [{}])[0].get('*', '')
    except Exception as e:
        print(f"Error fetching {char_name}: {e}")
    return ""

def parse_combos(wikitext):
    combos = []
    
    # Extract blocks of SF6-ComboTableItem
    blocks = wikitext.split('{{SF6-ComboTableItem')[1:]
    
    for block in blocks:
        combo_match = re.search(r'\|\s*Combo\s*=(.*?)\n\s*\|', block, re.DOTALL)
        notes_match = re.search(r'\|\s*Notes\s*=(.*?)\n\s*\|', block, re.DOTALL)
        
        if combo_match:
            raw_combo = combo_match.group(1).strip()
            raw_notes = notes_match.group(1).strip() if notes_match else "Standard Combo"
            
            # Clean up wikitext formatting
            # Replace {{clr|Type|Text}} with Text
            clean_combo = re.sub(r'\{\{clr\|[^|]+\|([^}]+)\}\}', r'\1', raw_combo)
            clean_notes = re.sub(r'\{\{clr\|[^|]+\|([^}]+)\}\}', r'\1', raw_notes)
            
            # Remove <br> and other HTML
            clean_combo = clean_combo.replace('<br>', ' ').replace('<br/>', ' ')
            clean_notes = clean_notes.replace('<br>', ' ').replace('<br/>', ' ')
            
            # Remove lingering tags
            clean_combo = re.sub(r'\{\{[^}]+\}\}', '', clean_combo)
            clean_notes = re.sub(r'\{\{[^}]+\}\}', '', clean_notes)
            
            if len(combos) < 8:
                combos.append({
                    "name": clean_notes.strip() or "Standard Combo",
                    "input": clean_combo.strip()
                })
                
    return combos

def inject_combos():
    for wiki_name, json_id in CHARACTERS.items():
        print(f"Scraping {wiki_name}...")
        wikitext = fetch_wikitext(wiki_name)
        if not wikitext:
            continue
            
        parsed_combos = parse_combos(wikitext)
        
        if not parsed_combos:
            print(f"No parseable combos found for {wiki_name}.")
            continue
            
        json_path = f"public/data/street-fighter-6/{json_id}.json"
        
        if not os.path.exists(json_path):
            print(f"File {json_path} does not exist.")
            continue
            
        with open(json_path, 'r', encoding='utf-8') as f:
            char_data = json.load(f)
            
        final_combos = []
        for i, c in enumerate(parsed_combos):
            final_combos.append({
                "id": f"{json_id}_combo_{i+1}",
                "name": c["name"],
                "input": c["input"]
            })
            
        char_data["combosList"] = final_combos
        
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(char_data, f, indent=2)
            
        print(f"Injected {len(final_combos)} combos into {json_id}.json!")

if __name__ == "__main__":
    inject_combos()
