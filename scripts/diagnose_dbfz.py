import docx
import re
import json

doc = docx.Document('faqs/Dragon Ball FighterZ - Exhaustive JSON Move List.docx')
text = '\n'.join([p.text for p in doc.paragraphs])

match = re.search(r'(\{[\s\S]*\})', text)
if match:
    # standardize JSON
    t = match.group(1).replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
    data = json.loads(t)
    print("Keys in DBFZ JSON:")
    for k in data.keys():
        print(f"- {k}")
