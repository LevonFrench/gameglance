import zipfile
import xml.etree.ElementTree as ET
import re

def get_docx_text(path):
    try:
        document = zipfile.ZipFile(path)
        xml_content = document.read('word/document.xml')
        document.close()
        tree = ET.XML(xml_content)
        NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
        
        # Read by paragraph to retain newlines
        paragraphs = []
        for paragraph in tree.iter(NAMESPACE + 'p'):
            texts = [node.text for node in paragraph.iter(NAMESPACE + 't') if node.text]
            if texts:
                paragraphs.append("".join(texts))
        return "\n".join(paragraphs)
    except Exception as e:
        print(f"Error reading docx: {e}")
        return ""

text = get_docx_text('faqs/Fighting Game Roster Master List V2.docx')

# Normalize the dashes!
# en-dash is \u2013, em-dash is \u2014, minus is \u2212
text = text.replace('\u2013', '-').replace('\u2014', '-').replace('\u2212', '-')
# Also normalize cases like " - " instead of tight dashes
text = re.sub(r'\s*-\s*', ' - ', text)

print("Saving to master_list.md")
with open('master_list.md', 'w', encoding='utf-8') as f:
    f.write(text)
