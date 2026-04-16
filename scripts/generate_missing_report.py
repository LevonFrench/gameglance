import re

ts_path = 'src/games.ts'
ts_content = open(ts_path, encoding='utf-8').read()

blocks = re.finditer(r'{\s*id:\s*[\'"][^\'"]+[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\}', ts_content)

missing_years = []
unknown_chars = []

for b in blocks:
    txt = b.group(0)
    
    # Get game name
    name_m = re.search(r'name:\s*(?:"([^"]+)"|\'([^\']+)\')', txt)
    if not name_m: continue
    g_name = name_m.group(1) if name_m.group(1) is not None else name_m.group(2)
    
    # Check year
    year_m = re.search(r'releaseYear:\s*(\d+)', txt)
    year = year_m.group(1) if year_m else "None"
    
    # Check platform
    platform_m = re.search(r'platform:\s*[\'"]([^\'"]+)[\'"]', txt)
    has_platform = platform_m is not None
    
    if (year in ["0", "None"]) or (year in ["2000", "1998"] and not has_platform):
        missing_years.append(g_name)
        
    # Check characters
    char_array_m = re.search(r'characters:\s*\[([\s\S]*?)\]', txt)
    if char_array_m:
        char_txt = char_array_m.group(1)
        unknowns_count = len(re.findall(r'[\'"]unknown-\d+[\'"]', char_txt))
        
        # also count total chars
        total_chars = len(re.findall(r'\{\s*id:', char_txt))
        
        if unknowns_count > 0:
            unknown_chars.append((g_name, unknowns_count, total_chars))

# Generate Markdown Output
md = "# GameGlance Data Integrity Report\n\n"
md += "## 📅 Games Missing Correct Release Years\n"
md += "The following games received a fallback release year (e.g., 2000) during auto-ingestion and will break chronological sorting until updated:\n\n"
for y in sorted(missing_years):
    md += f"- [ ] **{y}**\n"

md += "\n## 👤 Games with Unknown Characters\n"
md += "The following games have populated roster counts but are missing accurate character mappings (represented as `unknown-N`). Move list JSON files exist only for the successfully parsed characters.\n\n"
for c in sorted(unknown_chars, key=lambda x: x[0]):
    md += f"- [ ] **{c[0]}** ({c[1]} / {c[2]} characters unknown)\n"

with open('missing_data_report.md', 'w', encoding='utf-8') as f:
    f.write(md)
    
print("Generated missing_data_report.md")
