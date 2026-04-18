from playwright.sync_api import sync_playwright
import time
import json
import os
import re

TARGETS = [
    {"character": "scorpion", "url": "https://mk1kombo.kagewebsite.com/combos-scorpion/"},
    {"character": "sub-zero", "url": "https://mk1kombo.kagewebsite.com/combos-sub-zero/"}
]

def is_mk1_combo(line):
    line = line.strip()
    if not line or len(line) < 5:
        return False
        
    # MK1 notation characters
    valid_chars = set("1234FBUDJEXAIR(), +")
    
    # Check if the line has at least one attack button
    if not any(btn in line for btn in "1234"):
        return False
        
    # Check if it's mostly valid notation characters (to filter out random text that happens to have numbers)
    # We strip out the valid chars and see if what's left is very small
    line_upper = line.upper()
    remaining = [c for c in line_upper if c not in valid_chars]
    
    # If more than 20% of the string is non-notation, it's probably normal text
    if len(remaining) > len(line) * 0.2:
        return False
        
    # If there's a hashtag (like #574 11 hits), it's the stats line, not the combo
    if "#" in line or "hits" in line.lower() or "damages" in line.lower():
        return False
        
    return True

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()
        
        for target in TARGETS:
            char = target["character"]
            url = target["url"]
            
            print(f"\\n[MK1 - {char}] Navigating to {url}...")
            try:
                page.goto(url)
                time.sleep(5) # Wait for React to render
                
                print("Extracting combo strings from innerText...")
                inner_text = page.evaluate("document.body.innerText")
                lines = inner_text.split('\n')
                
                combos = []
                for line in lines:
                    line = line.strip()
                    if is_mk1_combo(line):
                        # KAMEO FILTER
                        text_lower = line.lower()
                        is_kameo = False
                        # Kameo is usually denoted as K, Kameo, or R1
                        # We must be careful that 'k' alone might be in words, but is_mk1_combo filters words out.
                        # In the MK1 site, Kameo is often K or Kameo
                        if 'kameo' in text_lower or ' k ' in text_lower or 'k,' in text_lower or ',k' in text_lower or 'r1' in text_lower:
                            is_kameo = True
                            
                        if not is_kameo:
                            combos.append({
                                "game": "mortal-kombat-1",
                                "character": char,
                                "route": line,
                                "damage": "Unknown",
                                "notes": "Scraped via heuristic text parsing"
                            })
                        else:
                            print(f"Skipping Kameo combo: {line}")
                
                if combos:
                    print(f"Found {len(combos)} valid (No-Kameo) combos for {char}!")
                    out_path = f"public/data/scraped_combos/mortal-kombat-1/{char}_mk1kombo.json"
                    os.makedirs(os.path.dirname(out_path), exist_ok=True)
                    with open(out_path, "w", encoding="utf-8") as f:
                        json.dump(combos, f, indent=2)
                else:
                    print(f"No combos found for {char}.")
                    
            except Exception as e:
                print(f"Error scraping {url}: {e}")
                
        browser.close()

if __name__ == "__main__":
    main()
