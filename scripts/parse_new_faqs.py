import os
import re
import json
from docx import Document

docs = [
    'faqs/Street Fighter 6 Complete Move List (DLC Included).docx',
    'faqs/Marvel Toukon_ Fighting Souls Beta - Complete Move List (JSON).docx',
    'faqs/Invincible VS Beta - Complete Move List (JSON).docx',
    'faqs/Dragon Ball FighterZ - Exhaustive JSON Move List.docx'
]

for d in docs:
    if os.path.exists(d):
        doc = Document(d)
        text = '\n'.join([p.text for p in doc.paragraphs])
        
        matches = re.findall(r'```json\s*(.*?)\s*```', text, re.DOTALL)
        if not matches:
            matches = re.findall(r'(\[\s*\{.*?\}\s*\]|\{\s*".*?".*?\})', text, re.DOTALL)
            
        print(f"File: {d}")
        print(f"Found {len(matches)} JSON blocks")
        
        for m in matches:
            try:
                data = json.loads(m.strip())
                if isinstance(data, list):
                    for char_data in data:
                        game = char_data.get('game', 'unknown_game').lower().replace(' ', '-').replace('_', '-')
                        char = char_data.get('character', 'unknown_char').lower().replace(' ', '-').replace('_', '-')
                        os.makedirs(f'public/data/{game}', exist_ok=True)
                        with open(f'public/data/{game}/{char}.json', 'w', encoding='utf-8') as f:
                            json.dump(char_data, f, indent=2)
                        print(f" -> Saved {game}/{char}")
                elif isinstance(data, dict):
                    game = data.get('game', 'unknown_game').lower().replace(' ', '-').replace('_', '-')
                    char = data.get('character', 'unknown_char').lower().replace(' ', '-').replace('_', '-')
                    os.makedirs(f'public/data/{game}', exist_ok=True)
                    with open(f'public/data/{game}/{char}.json', 'w', encoding='utf-8') as f:
                        json.dump(data, f, indent=2)
                    print(f" -> Saved {game}/{char}")
            except Exception as e:
                print(f"Failed to parse block: {e}")
