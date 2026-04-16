import os
import re
import json

WIKI_GUIDES = 'wiki/raw/guides'
TS_FILE = 'src/games.ts'
DATA_DIR = 'public/data'
MISSING_REPORT = 'missing_data_report.md'

def slugify(text):
    text = str(text).lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

# 1. Parse missing games that need characters
ts_content = open(TS_FILE, encoding='utf-8').read()
missing_games = [] # [ (id, name, roster_count) ]
blocks = re.finditer(r'{\s*id:\s*[\'"]([^\'"]+)[\'"][\s\S]*?name:\s*[\'"]([^\'"]+)[\'"][\s\S]*?rosterCount:\s*(\d+)[\s\S]*?characters:\s*\[([\s\S]*?)\]', ts_content)

for b in blocks:
    gid, gname, count, chars = b.groups()
    if 'unknown-' in chars:
        missing_games.append({
            'id': gid,
            'name': gname,
            'count': int(count),
            'block': b.group(0)
        })

print(f"Found {len(missing_games)} games missing characters.")

if len(missing_games) == 0:
    exit()

# 2. Score text files against games to find the "largest faq for each game"
print("Scanning all text files to map them to games...")
game_faqs = {g['id']: [] for g in missing_games}

all_files = []
for root, dirs, files in os.walk(WIKI_GUIDES):
    for f in files:
        if f.endswith('.txt'):
            all_files.append(os.path.join(root, f))

# To avoid scanning 600MB of data repeatedly taking minutes, we do a basic token heuristic
def get_tokens(name):
    name = re.sub(r'\(.*?\)', '', name).lower()
    return set(re.findall(r'[a-z0-9]+', name)) - {'the', 'of', 'and', 'in', 'vs', 'super'}

games_with_tokens = []
for g in missing_games:
    toks = get_tokens(g['name'])
    if len(toks) > 0:
        games_with_tokens.append((g, toks))

# Map files
for fp in all_files:
    try:
         # only read first 2000 chars for matching to save time
         with open(fp, 'r', encoding='utf-8', errors='ignore') as f:
             header = f.read(2000).lower()
    except:
         continue
         
    for g, toks in games_with_tokens:
        if all(t in header for t in toks):
            size = os.path.getsize(fp)
            game_faqs[g['id']].append({
                'path': fp,
                'size': size
            })

# 3. Process the largest and second largest FAQ
for g in missing_games:
    matched = game_faqs[g['id']]
    if not matched:
        print(f"[{g['name']}] No FAQs found matching tokens.")
        continue
        
    matched.sort(key=lambda x: x['size'], reverse=True)
    largest = matched[0]
    second = matched[1] if len(matched) > 1 else None
    
    print(f"[{g['name']}] Largest FAQ: {largest['path']} ({largest['size']} bytes)")
    
    # We read it completely as instructed
    with open(largest['path'], 'r', encoding='utf-8', errors='ignore') as f:
        text = f.read()
        
    # Heuristic parsing for character move list
    # Look for "3. Characters" or similar blocks, this is computationally unreliable over 60 random formats.
    # We will look for sequences of character names and moves (e.g. QCF + P)
    
    moves_regex = re.compile(r'^\s*([A-Za-z\- \'\.]+?)\s{2,}(.*(?:QCF|QCB|HCF|HCB|DP|360|720|[UBDF]+[\s\+,]+|LP|MP|HP|LK|MK|HK|P|K).*)$', re.IGNORECASE | re.MULTILINE)
    extracted_moves = moves_regex.findall(text)
    
    if len(extracted_moves) > 0:
        print(f"  -> Extracted {len(extracted_moves)} potential moves.")
    else:
        print(f"  -> No standard notation moves extracted from largest FAQ.")

print("Finished processing gophered faqs heuristic extraction script.")
