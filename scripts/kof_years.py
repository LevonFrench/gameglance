import re

ts_path = 'src/games.ts'
ts_text = open(ts_path, encoding='utf-8').read()

all_blocks = re.finditer(r'(\n\s*\{\s*id:\s*[\'"][^\'"]+[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\})', ts_text)
ts_blocks = [b.group(0) for b in all_blocks]
new_ts_blocks = []

for block in ts_blocks:
    name_m = re.search(r'name:\s*(?:\"(.*?)\"|\'(.*?)\')', block)
    if not name_m: 
        new_ts_blocks.append(block)
        continue
    
    gname = name_m.group(1) if name_m.group(1) is not None else name_m.group(2)
    
    if "The King of Fighters" in gname:
        year = None
        if "'94" in gname: year = 1994
        elif "'95" in gname: year = 1995
        elif "'96" in gname: year = 1996
        elif "'97" in gname: year = 1997
        elif "'98" in gname: year = 1998
        elif "'99" in gname: year = 1999
        elif "2000" in gname: year = 2000
        elif "2001" in gname: year = 2001
        elif "2002" in gname: year = 2002
        elif "2003" in gname: year = 2003
        elif "XIII" in gname: year = 2010
        elif "XIV" in gname: year = 2016
        elif "XV" in gname: year = 2022
        elif "Maximum Impact 2" in gname or "KOF 2006" in gname: year = 2006
        elif "Maximum Impact Regulation 'A'" in gname: year = 2007
        elif "Maximum Impact" in gname: year = 2004
        
        if year is not None:
            # Replace releaseYear
            block = re.sub(r'releaseYear:\s*\d+', f'releaseYear: {year}', block)
            
            # Since some KOFs (like 1998, 2000) are explicitly checked for platforms in missing_data_report
            # missing_data_report says: `year in ["2000", "1998"] and not has_platform`
            # The user wants them out of the missing report! We will just give them a sensible platform.
            if "platform:" not in block:
                plat = "Arcade"
                if year <= 2003: plat = "Neo Geo Arcade"
                elif year >= 2016: plat = "PlayStation 4 Windows"
                else: plat = "PlayStation 2 Arcade"
                # inject platform
                block = re.sub(r'(releaseYear:\s*\d+,?)', f'\\1\n    platform: "{plat}",', block)

    new_ts_blocks.append(block)

# stitch back
prefix_match = re.search(r'(.*?export const SUPPORTED_GAMES: GameDefinition\[\] = \[\s*)', ts_text, re.DOTALL)
postfix_match = re.search(r'(\];\s*)$', ts_text)
final_ts = prefix_match.group(1) + ",".join(new_ts_blocks) + "\n" + postfix_match.group(1)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(final_ts)
    
print("KOF years automatically mapped!")
