import zipfile
import xml.etree.ElementTree as ET
import re

def get_docx_text(path):
    document = zipfile.ZipFile(path)
    xml_content = document.read('word/document.xml')
    document.close()
    tree = ET.XML(xml_content)
    
    NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    paragraphs = []
    for paragraph in tree.iter(NAMESPACE + 'p'):
        texts = [node.text for node in paragraph.iter(NAMESPACE + 't') if node.text]
        if texts:
            paragraphs.append("".join(texts))
    return "\n".join(paragraphs)

text = get_docx_text('faqs/FGC Playable Character Registry.docx')

# Parse the text into a dictionary mapping Game Name -> int
lines = text.split('\n')
roster_counts = {}
for line in lines:
    line = line.strip()
    if not line: continue
    # Format appears to be something like "Game Name: 14" or "Game Name - 14" or just numbers at the end
    match = re.search(r'^(.*?)[-:]?\s*(\d+)\s*$', line)
    if match:
        name = match.group(1).strip()
        count = int(match.group(2))
        roster_counts[name.lower()] = count

print("Extracted", len(roster_counts), "roster counts.")

# Now parse src/games.ts
with open('src/games.ts', 'r', encoding='utf-8') as f:
    games_text = f.read()

def inject_count(match):
    block = match.group(0)
    name_str = match.group(2)
    
    # Try to find matching game
    name_clean = name_str.lower()
    
    # Simple direct match
    if name_clean in roster_counts:
        count = roster_counts[name_clean]
        
        if 'rosterCount:' in block:
            return block # Already injected
            
        # We need to inject `rosterCount: X` right after releaseYear
        # Since releaseYear varies, let's inject right before characters: [
        return re.sub(r'(\n\s*characters:\s*\[)', f',\n    rosterCount: {count}\\1', block)
    
    # Try fuzzy match if simple fails
    for k, v in roster_counts.items():
        if k in name_clean or name_clean in k:
            count = v
            if 'rosterCount:' in block:
                return block
            return re.sub(r'(\n\s*characters:\s*\[)', f',\n    rosterCount: {count}\\1', block)
            
    return block

# The blocks look like:
# {
#    id: '...',
#    name: '...',
#    ...
#    characters: [
games_text = re.sub(r'(\{\s*id:\s*[\'"].*?[\'"],\s*name:\s*[\'"]([^\'"]+)[\'"][\s\S]*?)(\n\s*characters:\s*\[)', inject_count, games_text)

with open('src/games.ts', 'w', encoding='utf-8') as f:
    f.write(games_text)

# Also update types
with open('src/types.ts', 'r', encoding='utf-8') as f:
    types_text = f.read()

if 'rosterCount?: number;' not in types_text:
    types_text = re.sub(r'(tagline\?: string;)', r'\g<1>\n  rosterCount?: number;', types_text)
    
with open('src/types.ts', 'w', encoding='utf-8') as f:
    f.write(types_text)

print("Injected roster counts into registry!")
