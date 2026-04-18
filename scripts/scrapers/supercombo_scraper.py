from playwright.sync_api import sync_playwright
import time
import json
import os

GAMES = [
    {
        "local_folder": "street-fighter-6",
        "wiki_slug": "Street_Fighter_6"
    },
    {
        "local_folder": "street-fighter-iii-3rd-strike---fight-for-the-future",
        "wiki_slug": "Street_Fighter_3:_3rd_Strike"
    },
    {
        "local_folder": "capcom-vs-snk-2-mark-of-the-millennium-2001",
        "wiki_slug": "Capcom_vs_SNK_2"
    }
]

def get_targets():
    targets = []
    for game in GAMES:
        roster_path = f"public/data/{game['local_folder']}/_roster.json"
        if not os.path.exists(roster_path):
            continue
            
        with open(roster_path, 'r', encoding='utf-8') as f:
            roster = json.load(f)
            
        for char in roster:
            char_id = char['id']
            char_name = char['name']
            
            # Clean up names for wiki URLs
            # "Chun - Li" -> "Chun-Li"
            clean_name = char_name.replace(" - ", "-")
            url_name = clean_name.replace(" ", "_")
            
            # Special case for A.K.I.
            if url_name == "A.K.I.":
                url_name = "A.K.I."
                
            out_path = f"public/data/scraped_combos/{game['local_folder']}/{char_id}_supercombo.json"
            
            if not os.path.exists(out_path):
                targets.append({
                    "game": game['local_folder'],
                    "char_id": char_id,
                    "url": f"https://wiki.supercombo.gg/w/{game['wiki_slug']}/{url_name}/Combos",
                    "out_path": out_path
                })
    return targets

def main():
    targets = get_targets()
    print(f"Found {len(targets)} characters left to scrape across {len(GAMES)} games.")
    
    if not targets:
        print("Everything is already scraped!")
        return

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()
        
        for target in targets:
            game = target["game"]
            char = target["char_id"]
            url = target["url"]
            out_path = target["out_path"]
            
            print(f"\\n[{game} - {char}] Navigating to {url}...")
            try:
                page.goto(url)
                # Wait for cloudflare / page load
                time.sleep(6)
                
                print("Parsing tables...")
                combos = page.evaluate("""
                    ([gameStr, charStr]) => {
                        const results = [];
                        const tables = document.querySelectorAll('table.wikitable');
                        for (const table of tables) {
                            const rows = table.querySelectorAll('tbody tr');
                            for (const row of rows) {
                                const cells = row.querySelectorAll('td');
                                if (cells.length >= 3) {
                                    const routeCell = cells[0];
                                    let routeText = "";
                                    routeCell.childNodes.forEach(node => {
                                        if (node.nodeType === 3) {
                                            routeText += node.textContent.trim() + " ";
                                        } else if (node.nodeType === 1) {
                                            const img = node.querySelector('img');
                                            if (img && img.alt) {
                                                routeText += img.alt.trim() + " ";
                                            } else {
                                                routeText += node.textContent.trim() + " ";
                                            }
                                        }
                                    });
                                    
                                    const damage = cells[1] ? cells[1].innerText.trim() : "";
                                    const notes = cells[cells.length - 1] ? cells[cells.length - 1].innerText.trim() : "";
                                    
                                    const cleanRoute = routeText.replace(/\\s+/g, " ").trim();
                                    if (cleanRoute.length > 2) {
                                        results.push({
                                            "game": gameStr,
                                            "character": charStr,
                                            "route": cleanRoute,
                                            "damage": damage,
                                            "notes": notes
                                        });
                                    }
                                }
                            }
                        }
                        return results;
                    }
                """, [game, char])
                
                if combos:
                    print(f"Found {len(combos)} combos for {char}!")
                    os.makedirs(os.path.dirname(out_path), exist_ok=True)
                    with open(out_path, "w", encoding="utf-8") as f:
                        json.dump(combos, f, indent=2)
                else:
                    print(f"No combos found for {char}. Generating empty file to skip next time.")
                    os.makedirs(os.path.dirname(out_path), exist_ok=True)
                    with open(out_path, "w", encoding="utf-8") as f:
                        json.dump([], f, indent=2)
                    
            except Exception as e:
                print(f"Error scraping {url}: {e}")
                
        browser.close()

if __name__ == "__main__":
    main()
