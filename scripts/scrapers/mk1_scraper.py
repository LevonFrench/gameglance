from playwright.sync_api import sync_playwright
import time
import json
import os
import re

TARGETS = [
    {"character": "scorpion", "url": "https://mk1kombo.kagewebsite.com/character/scorpion"},
    {"character": "sub-zero", "url": "https://mk1kombo.kagewebsite.com/character/sub-zero"}
]

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
                time.sleep(8) # Wait for React to render and bypass CF
                
                print("Extracting potential combo strings...")
                # We extract any text block that looks like it could be a combo
                # and explicitly filter out any containing Kameo notation
                raw_texts = page.evaluate("""
                    () => {
                        const elements = document.querySelectorAll('div, li, p, span');
                        const texts = new Set();
                        for (const el of elements) {
                            if (el.children.length === 0 && el.textContent.trim().length > 3) {
                                texts.add(el.textContent.trim());
                            }
                        }
                        return Array.from(texts);
                    }
                """)
                
                combos = []
                # Simple heuristic: MK1 combos usually contain numbers 1,2,3,4 and commas
                combo_pattern = re.compile(r'[1-4].*,.*[1-4]')
                
                for text in raw_texts:
                    if combo_pattern.search(text):
                        # KAMEO FILTER
                        text_lower = text.lower()
                        is_kameo = False
                        if 'kameo' in text_lower or ' k ' in text_lower or 'k,' in text_lower or ',k' in text_lower or 'r1' in text_lower:
                            is_kameo = True
                            
                        combos.append({
                            "game": "mortal-kombat-1",
                            "character": char,
                            "route": text,
                            "damage": "Unknown",
                            "notes": "Scraped via heuristic text parsing",
                            "is_kameo": is_kameo
                        })
                
                if combos:
                    print(f"Found {len(combos)} potential combos for {char}!")
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
