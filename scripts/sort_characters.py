import os
import re
import shutil

GAMES_TS = 'src/games.ts'
WIKI_CHARS = 'wiki/pages/characters'
WIKI_MECHS = 'wiki/pages/mechanics'

os.makedirs(WIKI_MECHS, exist_ok=True)

# 1. Parse games.ts to map character IDs to Developers
char_to_company = {}

with open(GAMES_TS, 'r', encoding='utf-8') as f:
    content = f.read()

# We can rely on formatting since add_games.py sets it
# Developer is always "developer": "CompanyName"
games = re.findall(r'developer:\s*"([^"]+)",\s*characters:\s*\[(.*?)\]', content, re.DOTALL)

for dev, char_text in games:
    char_ids = re.findall(r"id:\s*'([^']+)'", char_text)
    for c_id in char_ids:
        # If a character belongs to multiple devs (crossovers), use the first one
        if c_id not in char_to_company:
            # We want folder names to be safe, e.g. Arc System Works -> arc-system-works
            dev_folder = dev.lower().replace(' ', '-')
            char_to_company[c_id] = dev_folder

moved_to_company = 0
moved_to_mechs = 0

for root, dirs, files in os.walk(WIKI_CHARS, topdown=False):
    for file in files:
        if file.endswith('.md'):
            slug = file[:-3]
            src = os.path.join(root, file)
            
            # Is it a known character in our registry?
            if slug in char_to_company:
                company_folder = char_to_company[slug]
                company_dir = os.path.join(WIKI_CHARS, company_folder)
                os.makedirs(company_dir, exist_ok=True)
                dst = os.path.join(company_dir, file)
                if src != dst:
                    shutil.move(src, dst)
                    moved_to_company += 1
            else:
                # Not a known character, probably a mechanic/tutorial file
                dst = os.path.join(WIKI_MECHS, file)
                if src != dst:
                    shutil.move(src, dst)
                    moved_to_mechs += 1
                    
    # Clean up any empty folders (like the original root if everything was moved out of it)
    if not os.listdir(root):
        os.rmdir(root)

print(f"Sorted {moved_to_company} characters into company subfolders.")
print(f"Cleaned up {moved_to_mechs} mechanics/orphaned text files into mechanics folder.")
