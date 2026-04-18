from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto('https://mk1kombo.kagewebsite.com/combos-scorpion/')
        page.wait_for_timeout(3000)
        
        # Get elements with combos
        html = page.evaluate('''() => {
            const tds = Array.from(document.querySelectorAll('td'));
            return tds.map(td => td.innerText).join('\\n---td---\\n');
        }''')
        print(f"Content:\\n{html[:2000]}")
        
        browser.close()

if __name__ == "__main__":
    main()
