import re

roster_dict = {}
with open('parsed_roster.txt', 'r', encoding='utf-8') as rf:
    for line in rf:
        if ':' in line:
            parts = line.split(':')
            rname = parts[0].strip()
            rcount = int(parts[-1].strip())
            roster_dict[rname] = rcount

def fuzzy_match_name(name, roster_dict):
    clean_name = re.sub(r'[^a-zA-Z0-9]', '', name.lower())
    for r_name, r_count in roster_dict.items():
        if re.sub(r'[^a-zA-Z0-9]', '', r_name.lower()) == clean_name:
            return r_count
    return None

print('Matches:', fuzzy_match_name("The King of Fighters'94", roster_dict))
print(list(roster_dict.items())[:10])
print([k for k in roster_dict.keys() if '94' in k])
