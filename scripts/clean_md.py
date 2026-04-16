import re

def to_title_case(s):
    return ' '.join(word.capitalize() for word in s.split())

with open('unpopulated_characters.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

output = []

for line in lines:
    line = line.strip()
    if line.startswith('## '):
        output.append("\n" + line)
    elif line.startswith('- [ ]'):
        m = re.search(r'`([^`]+)`', line)
        if m:
            char_id = m.group(1)
            # Remove dashes, split words, capitalize
            clean_name = char_id.replace('-', ' ')
            clean_name = to_title_case(clean_name)
            output.append(clean_name)
        else:
            raw = line.replace('- [ ] ', '').replace(' **Missing File**', '')
            clean_name = raw.replace('-', ' ')
            clean_name = to_title_case(clean_name)
            output.append(clean_name)

clean_output = []
for i, line in enumerate(output):
    if line == '' and (i == 0 or output[i-1] == '' or output[i-1].startswith('##')):
        continue
    clean_output.append(line)

with open('underpopulated_clean.md', 'w', encoding='utf-8') as f:
    f.write("\n".join(clean_output))

print("Created underpopulated_clean.md")
