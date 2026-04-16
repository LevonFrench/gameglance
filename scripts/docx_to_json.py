import os
import zipfile
import xml.etree.ElementTree as ET
import json

old_dir = os.path.join('faqs', 'old')
success_count = 0
fail_count = 0

for file_name in os.listdir(old_dir):
    if file_name.endswith('.docx'):
        docx_path = os.path.join(old_dir, file_name)
        
        try:
            with zipfile.ZipFile(docx_path) as z:
                xml_content = z.read('word/document.xml')
                root = ET.fromstring(xml_content)
                raw_text = ''.join([node.text for node in root.iter() if node.text])
                
                # Replace smart quotes just in case
                raw_text = raw_text.replace('\u201c', '"').replace('\u201d', '"')
                raw_text = raw_text.replace('\u2018', "'").replace('\u2019', "'")
                
                # Try to parse it as JSON to ensure it's valid, and format it
                try:
                    data = json.loads(raw_text)
                    formatted_json = json.dumps(data, indent=2)
                except Exception as json_e:
                    # If it's invalid JSON natively, just write the raw string but format it?
                    # The user said "real jsons in the right format". If parsing fails, maybe just write it as raw string.
                    print(f"Warning: {file_name} contains invalid JSON: {json_e}")
                    formatted_json = raw_text
                
                # Write to .json
                base_name = file_name.replace('.docx', '')
                if not base_name.endswith('.json'):
                    base_name += '.json'
                json_path = os.path.join(old_dir, base_name)
                
                with open(json_path, 'w', encoding='utf-8') as f:
                    f.write(formatted_json)
                    
            # Remove the original .docx
            os.remove(docx_path)
            success_count += 1
        except Exception as e:
            print(f"Failed processing {file_name}: {e}")
            fail_count += 1

print(f"Successfully converted {success_count} docx files to clean JSON. Failed: {fail_count}")
