import os
import re
import time
import sys

# Ensure gopher_pull is importable
sys.path.append(os.path.dirname(__file__))
from gopher_pull import search, download

def main():
    with open('src/games.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Robust extraction of ID and Name from games.ts
    games = []
    # Since they can be separated by spaces or newlines:
    matches = re.finditer(r"id:\s*['\"]([^'\"]+)['\"],\s*name:\s*['\"]([^'\"]+)['\"]", content, re.MULTILINE)
    for m in matches:
        games.append((m.group(1), m.group(2)))
        
    # Also handle the reversed case just in case the template varies
    if len(games) == 0:
        print("Regex failed to match. Trying relaxed match.")
        blocks = content.split('{')
        for b in blocks:
            id_m = re.search(r"id:\s*['\"]([^'\"]+)['\"]", b)
            name_m = re.search(r"name:\s*['\"]([^'\"]+)['\"]", b)
            if id_m and name_m:
                games.append((id_m.group(1), name_m.group(1)))

    print(f"Found {len(games)} games to fetch.")
    
    for g_id, g_name in games:
        out_dir = os.path.join('faqs', g_id)
        
        # Don't duplicate fetches if dir already has TXT files
        if os.path.exists(out_dir) and any(f.endswith('.txt') for f in os.listdir(out_dir)):
            print(f"Skipping {g_name} - files already exist.")
            continue
            
        print(f"Fetching for: {g_name}")
        if not os.path.exists(out_dir):
            os.makedirs(out_dir)
            
        try:
            # We'll sanitize the query slightly (gamefaqs search might do better without colons)
            query = g_name.replace(':', '').replace('-', ' ')
            results = search(query)
            
            # The search function returns a list of (title, selector) tuples
            count = 0
            for title, selector in results:
                # Filter out pure noise if necessary, but we'll trust the gopher ranking
                if count >= 3: # Limit to top 3 files per game to save bandwidth
                    break
                try:
                    download(selector, out_dir)
                    count += 1
                except Exception as e:
                    print(f"  Fail DL: {e}")
            
            # Rate limiting delay
            time.sleep(1)
        except Exception as e:
            print(f"Failed search for {g_name}: {e}")

if __name__ == '__main__':
    main()
