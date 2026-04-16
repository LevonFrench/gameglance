from docx import Document
try:
    doc = Document('faqs/FGC Playable Character Registry.docx')
    lines = [p.text.strip() for p in doc.paragraphs if len(p.text.strip()) > 0]
    out = []
    for line in lines:
        if 'Roster' in line or '-' in line or ':' in line or len(line) < 50:
            out.append(line)
    
    with open('parsed_roster.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(out))
    print("Parsed DOCX to parsed_roster.txt with " + str(len(out)) + " lines")
except Exception as e:
    print("Failed: " + str(e))
