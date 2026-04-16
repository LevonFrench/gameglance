import zipfile
import xml.etree.ElementTree as ET

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

print(get_docx_text('faqs/FGC Playable Character Registry.docx')[:2000])
