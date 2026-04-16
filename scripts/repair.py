import re

ts_path = 'src/games.ts'
ts_text = open(ts_path, encoding='utf-8').read()

# 1. Fix names of KOF titles
kof_names = {
    'the-king-of-fighters-94': "The King of Fighters '94",
    'the-king-of-fighters-95': "The King of Fighters '95",
    'the-king-of-fighters-96': "The King of Fighters '96",
    'the-king-of-fighters-97': "The King of Fighters '97",
    'the-king-of-fighters-98': "The King of Fighters '98",
    'the-king-of-fighters-98-ultimate-match': "The King of Fighters '98 Ultimate Match",
    'the-king-of-fighters-99': "The King of Fighters '99",
    'the-king-of-fighters-maximum-impact-regulation-a': "The King of Fighters: Maximum Impact Regulation 'A'",
    'the-king-of-fighters-2002': "The King of Fighters 2002",
}

for k_id, k_name in kof_names.items():
    # Only replace 'name:' exactly inside the block of that id
    pattern = r'(id:\s*[\'"]' + re.escape(k_id) + r'[\'"][\s\S]*?name:\s*[\'"])(?:[^\'"]+)([\'"])'
    def replacer(m):
        return m.group(1) + k_name + m.group(2)
    ts_text = re.sub(pattern, replacer, ts_text)

# Remove the duplicate 2002 block.
# the duplicate is probably ID 'the-king-of-fighters-2002' but the name was 'The King Of Fighters 2002'.
# If there are two blocks with the same exactly ID 'the-king-of-fighters-2002', we must remove one.
blocks = list(re.finditer(r'(\n\s*\{\s*id:\s*[\'"]the-king-of-fighters-2002[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\}(?:,))', ts_text))
if len(blocks) > 1:
    # Just remove the SECOND match precisely by its span!
    start, end = blocks[1].span()
    ts_text = ts_text[:start] + ts_text[end:]

# 2. Reset the releaseYears and platforms of all KOF games that were corrupted to 1994 and "Neo Geo Arcade"
# We'll just reset *all* KOF games (except Fatal Fury) to releaseYear: 2000, and remove the platform attribute.
# They will be flagged by missing_data_report correctly!
kof_blocks = re.finditer(r'\{\s*id:\s*[\'"](the-king-of-fighters[^\'"]*)[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\}', ts_text)
new_ts_text = ts_text
for m in list(kof_blocks):
    block = m.group(0)
    # only modify if it has releaseYear: 1994 or 1991
    if "releaseYear: 1994" in block or "releaseYear: 1991" in block:
        # Reset year
        new_block = re.sub(r'releaseYear:\s*\d+', 'releaseYear: 2000', block)
        # Remove platform line completely
        new_block = re.sub(r'\s*platform:\s*[\'"][^\'"]+[\'"],?', '', new_block)
        new_ts_text = new_ts_text.replace(block, new_block, 1)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_ts_text)
print("Finished!")
