import re

text = open('src/games.ts', encoding='utf-8').read()
blocks = re.finditer(r'\{\s*\n\s*id:\s*[\'"]([^\'"]+)[\'"].*?\}', text, re.DOTALL)
for m in blocks:
    s = m.group(0)
    tabs_cnt = s.count('tabs:')
    if tabs_cnt > 1:
        print(m.group(1), 'has tabs:', tabs_cnt)
    
    chars_cnt = s.count('characters:')
    if chars_cnt > 1:
        print(m.group(1), 'has characters:', chars_cnt)
    
    roster_cnt = s.count('rosterCount:')
    if roster_cnt > 1:
        print(m.group(1), 'has rosterCount:', roster_cnt)
