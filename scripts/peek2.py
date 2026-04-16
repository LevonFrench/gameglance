import zipfile, xml.etree.ElementTree as ET, json
d = zipfile.ZipFile('faqs/old/FGC_Complete_Move_Lists.json.docx')
txt = "".join("".join(n.text for n in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if n.text) for p in ET.XML(d.read('word/document.xml')).iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'))
txt = txt.replace('\u201c', '"').replace('\u201d', '"').replace('\u2018', "'").replace('\u2019', "'")
data = json.loads(txt[txt.find('{'):txt.rfind('}')+1])
print(list(data.keys()))
