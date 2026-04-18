import asyncio
from playwright.async_api import async_playwright
from playwright_stealth import stealth

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = await context.new_page()
        await stealth(page)
        
        url = "https://wiki.supercombo.gg/w/Street_Fighter_6/Ryu/Combos"
        print(f"Navigating to {url}...")
        await page.goto(url, wait_until="networkidle")
        
        # Wait a few seconds to let Cloudflare pass if needed
        print("Waiting 5 seconds for potential Cloudflare challenge...")
        await asyncio.sleep(5)
        
        html = await page.content()
        with open("supercombo_ryu.html", "w", encoding="utf-8") as f:
            f.write(html)
        print(f"Saved {len(html)} chars to supercombo_ryu.html")
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
