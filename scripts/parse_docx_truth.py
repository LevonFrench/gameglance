import zipfile
import xml.etree.ElementTree as ET
import json
import re

def main():
    doc = zipfile.ZipFile('faqs/Fighting Game Roster Master List.docx')
    xml_content = doc.read('word/document.xml')
    tree = ET.fromstring(xml_content)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    text = '\n'.join(node.text for node in tree.findall('.//w:t', ns) if node.text)
    
    # We want to identify Games and Characters. 
    # Example format:
    # "Art of Fighting"
    # " - Jack Turner, John Crawley, King, Lee Pai Long... [cite: 1.1]"
    # Sometimes it spans exactly like that.
    
    lines = text.split('\n')
    truth_db = {}
    
    current_game = None
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        if line.startswith('This document provides'): continue
        if '[cite:' in line:
            # It's a character list
            line = re.sub(r'\[cite:.*?\]', '', line).strip()
            if line.startswith('-'):
                line = line[1:].strip()
                
            chars = [c.strip() for c in line.split(',') if c.strip()]
            if current_game:
                truth_db[current_game] = chars
        else:
            # Might be a game title
            if len(line) > 2 and '[' not in line:
                current_game = line.strip()
                
    with open('scratch/truth_roster.json', 'w', encoding='utf-8') as f:
        json.dump(truth_db, f, indent=2)
        
    print(f"Extracted {len(truth_db)} games from the DOCX truth.")

if __name__ == "__main__":
    main()
