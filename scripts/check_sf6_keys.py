import zipfile, xml.etree.ElementTree as ET, json
d=zipfile.ZipFile('faqs/Street Fighter 6 Complete Move List (DLC Included).docx')
t=''.join(n.text for p in ET.XML(d.read('word/document.xml')).iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p') for n in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if n.text)
t=t.replace('“', '"').replace('”', '"').replace('‘', "'").replace('’', "'")
s=t.find('{')
e=t.rfind('}')
j=json.loads(t[s:e+1])
print(list(j['roster'][0].keys()))
