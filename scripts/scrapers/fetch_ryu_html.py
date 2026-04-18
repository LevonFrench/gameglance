from playwright.sync_api import sync_playwright
import time
import os

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()
        
        url = "https://wiki.supercombo.gg/w/Street_Fighter_6/Ryu"
        print(f"Navigating to {url}...")
        try:
            page.goto(url)
            print("Waiting for Cloudflare bypass...")
            time.sleep(8)
            
            # Save the full HTML for analysis
            html = page.content()
            with open("ryu_page.html", "w", encoding="utf-8") as f:
                f.write(html)
            print("Saved HTML to ryu_page.html")
            
        except Exception as e:
            print(f"Error scraping {url}: {e}")
            
        browser.close()

if __name__ == "__main__":
    main()
