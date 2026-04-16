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

print('Matches 3rd Strike:', fuzzy_match_name("Street Fighter III: 3rd Strike - Fight for the Future", roster_dict))
print('Matches 3rd Strike short:', fuzzy_match_name("Street Fighter III: 3rd Strike", roster_dict))
print('Matches New Gen:', fuzzy_match_name("Street Fighter III: New Generation", roster_dict))
print('Matches 2nd Impact:', fuzzy_match_name("Street Fighter III: 2nd Impact - Giant Attack", roster_dict))
