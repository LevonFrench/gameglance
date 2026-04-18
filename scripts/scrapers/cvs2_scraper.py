from playwright.sync_api import sync_playwright
import time
import json
import os
import re
import sys
sys.stdout.reconfigure(line_buffering=True)

CHARACTERS = [
    "Ryu", "Ken", "Chun-Li", "Guile", "Zangief", "Dhalsim", "E._Honda", "Blanka",
    "Balrog", "Vega", "Sagat", "M._Bison", "Sakura", "Cammy", "Dan", "Akuma",
    "Morrigan", "Maki", "Eagle", "Kyosuke", "Yun", "Rolento", "Evil_Ryu", "Shin_Akuma",
    "Kyo", "Iori", "Terry", "Ryo", "Mai", "Kim", "Geese", "Yamazaki",
    "Raiden", "Rugul", "Vice", "Benimaru", "Yuri", "King", "Nakoruru", "Haohmaru",
    "Hibiki", "Athena", "Joe", "Chang", "Todo", "Orochi_Iori", "God_Rugal"
]

def clean_input(raw_input):
    """
    Cleans raw Supercombo input strings (like '236+P' or '236 P') into 
    clean '236P' format that GameGlance GlyphSequence parses perfectly.
    """
    c = raw_input.upper().replace(" ", "").replace("+", "")
    
    # Sometimes it might say "236LP/MP/HP", just use "P"
    c = re.sub(r'L[P|K]/M[P|K]/H[P|K]', lambda m: 'P' if 'P' in m.group(0) else 'K', c)
    c = re.sub(r'ANYP', 'P', c)
    c = re.sub(r'ANYK', 'K', c)
    
    return c

def main():
    os.makedirs("public/data/capcom-vs-snk-2-mark-of-the-millennium-2001", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()
        
        for char in CHARACTERS:
            url = f"https://wiki.supercombo.gg/w/Capcom_vs_SNK_2/{char}"
            print(f"\n[{char}] Navigating to {url}...")
            
            try:
                page.goto(url)
                # Wait for Cloudflare
                time.sleep(6)
                
                # Check if it hit a 404 or missing page
                title = page.title()
                if "Not Found" in title or "There is currently no text" in page.content():
                    print(f"Skipping {char} (Not Found)")
                    continue

                movesList = page.evaluate("""
                    () => {
                        const results = [];
                        const moveCards = document.querySelectorAll('.cargo-move-card');
                        let idCounter = 0;
                        
                        for (const card of moveCards) {
                            const titleEl = card.querySelector('.cargo-move-title');
                            const inputEl = card.querySelector('.cargo-move-input');
                            
                            if (titleEl && inputEl) {
                                const name = titleEl.innerText.trim();
                                const input = inputEl.innerText.trim();
                                
                                // Determine type roughly
                                let type = "special";
                                if (card.closest('#Super_Combos') || name.toLowerCase().includes('super')) {
                                    type = "super";
                                } else if (card.closest('#Normal_Moves') || card.closest('#Command_Normals')) {
                                    type = "normal";
                                } else if (card.closest('#Throws')) {
                                    type = "throw";
                                }
                                
                                results.push({
                                    id: type.substring(0, 2) + "_" + idCounter++,
                                    name: name,
                                    type: type,
                                    rawInput: input
                                });
                            }
                        }
                        
                        // Fallback to older table scraping if cargo cards aren't used
                        if (results.length === 0) {
                            const tables = document.querySelectorAll('table.wikitable');
                            for (const table of tables) {
                                const rows = table.querySelectorAll('tbody tr');
                                for (const row of rows) {
                                    const cells = row.querySelectorAll('th, td');
                                    if (cells.length >= 2) {
                                        const nameEl = cells[0];
                                        const inputEl = cells[1];
                                        if (nameEl && inputEl && !nameEl.innerText.includes('Move Name')) {
                                            results.push({
                                                id: "mv_" + idCounter++,
                                                name: nameEl.innerText.trim(),
                                                type: "special",
                                                rawInput: inputEl.innerText.trim()
                                            });
                                        }
                                    }
                                }
                            }
                        }
                        
                        return results;
                    }
                """)
                
                # Now navigate to combos page
                combo_url = f"{url}/Combos"
                page.goto(combo_url)
                time.sleep(3)
                
                combosList = []
                if "Not Found" not in page.title() and "There is currently no text" not in page.content():
                    combosList = page.evaluate("""
                        () => {
                            const combos = [];
                            const comboTables = document.querySelectorAll('table.wikitable');
                            let comboId = 0;
                            for (const table of comboTables) {
                                // Check if this table looks like a combo table
                                const headers = Array.from(table.querySelectorAll('th')).map(th => th.innerText.toLowerCase());
                                if (headers.some(h => h.includes('combo') || h.includes('route') || h.includes('damage') || h.includes('stun'))) {
                                    const rows = table.querySelectorAll('tbody tr');
                                    for (const row of rows) {
                                        const cells = row.querySelectorAll('td');
                                        if (cells.length > 0) {
                                            const inputStr = cells[0].innerText.trim();
                                            if (inputStr.length > 2) {
                                                combos.push({
                                                    id: "cb_" + comboId++,
                                                    name: "BNB " + comboId,
                                                    input: inputStr,
                                                    notes: cells.length > 1 ? cells[1].innerText.trim() : ""
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                            return combos;
                        }
                    """)

                
                if movesList or combosList:
                    print(f"Found {len(movesList)} moves and {len(combosList)} combos for {char}!")
                    # Process and clean inputs
                    final_moves = []
                    for m in movesList:
                        final_moves.append({
                            "id": m["id"],
                            "name": m["name"],
                            "type": m["type"],
                            "input": clean_input(m["rawInput"])
                        })
                        
                    final_combos = []
                    for c in combosList:
                        final_combos.append({
                            "id": c["id"],
                            "name": c["name"],
                            "input": clean_input(c["input"]),
                            "notes": c["notes"]
                        })
                        
                    # Save to JSON
                    char_file = char.lower().replace("_", "-").replace(".", "")
                    out_path = f"public/data/capcom-vs-snk-2-mark-of-the-millennium-2001/{char_file}.json"
                    
                    output_data = {
                        "game": "Capcom vs. SNK 2: Mark of the Millennium 2001",
                        "character": char.replace("_", " "),
                        "notationSystem": "numpad",
                        "movesList": final_moves,
                        "combosList": final_combos
                    }
                    
                    with open(out_path, "w", encoding="utf-8") as f:
                        json.dump(output_data, f, indent=2)
                        
                else:
                    print(f"No moves found for {char}.")
                    
            except Exception as e:
                print(f"Error scraping {url}: {e}")
                
        browser.close()

if __name__ == "__main__":
    main()
