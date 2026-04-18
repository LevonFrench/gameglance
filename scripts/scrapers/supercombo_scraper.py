from playwright.sync_api import sync_playwright
import time
import json
import os

TARGETS = [
    {"game": "street-fighter-6", "character": "ryu", "url": "https://wiki.supercombo.gg/w/Street_Fighter_6/Ryu/Combos"},
    {"game": "street-fighter-6", "character": "ken", "url": "https://wiki.supercombo.gg/w/Street_Fighter_6/Ken/Combos"},
    {"game": "street-fighter-6", "character": "luke", "url": "https://wiki.supercombo.gg/w/Street_Fighter_6/Luke/Combos"},
    {"game": "street-fighter-6", "character": "cammy", "url": "https://wiki.supercombo.gg/w/Street_Fighter_6/Cammy/Combos"},
    {"game": "street-fighter-iii-3rd-strike", "character": "chun-li", "url": "https://wiki.supercombo.gg/w/Street_Fighter_3:_3rd_Strike/Chun-Li/Combos"},
    {"game": "street-fighter-iii-3rd-strike", "character": "yun", "url": "https://wiki.supercombo.gg/w/Street_Fighter_3:_3rd_Strike/Yun/Combos"},
    {"game": "capcom-vs-snk-2", "character": "ryu", "url": "https://wiki.supercombo.gg/w/Capcom_vs_SNK_2/Ryu/Combos"}
]

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()
        
        for target in TARGETS:
            game = target["game"]
            char = target["character"]
            url = target["url"]
            
            print(f"\\n[{game} - {char}] Navigating to {url}...")
            try:
                page.goto(url)
                # Wait for cloudflare / page load
                time.sleep(8)
                
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
                    out_path = f"public/data/scraped_combos/{game}/{char}_supercombo.json"
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
