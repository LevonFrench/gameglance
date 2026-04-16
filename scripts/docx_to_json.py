import os
import zipfile
import re
import json

def read_docx_to_json(path):
    with zipfile.ZipFile(path) as zf:
        xml_content = zf.read('word/document.xml').decode('utf-8')
        
        # Remove all xml tags to just get text
        text = re.sub(r'<[^>]+>', '', xml_content)
        
        # Fix xml entities
        text = text.replace('&quot;', '"').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&')
        
        # In a docx the parsing might smash word spacing, but for JSON syntax it's fine unless keys smash.
        # Find the outermost json block
        start = text.find('{')
        end = text.rfind('}')
        if start != -1 and end != -1:
            json_str = text[start:end+1]
            return json_str
    return ""

files = [f for f in os.listdir('faqs') if f.endswith('.docx')]
count = 0

for file in files:
    path = os.path.join('faqs', file)
    print(f"Extracting {file}...")
    json_str = read_docx_to_json(path)
    if json_str:
        # Write to old as a true .json file
        new_name = file.replace('.docx', '')
        if not new_name.endswith('.json'):
            new_name += '.json'
            
        out_path = os.path.join('faqs/old', new_name)
        with open(out_path, 'w', encoding='utf-8') as out:
            out.write(json_str)
        print(f"Saved {new_name}")
        
        # optionally delete the docx
        os.remove(path)
        count += 1
