import os
import json
import re

def analyze_garbage():
    garbage_files = []
    
    suspicious_patterns = [
        re.compile(r'^unknown$', re.IGNORECASE),
        re.compile(r'^move\s*\d+$', re.IGNORECASE),
        re.compile(r'^special\s*\d+$', re.IGNORECASE),
        re.compile(r'^super\s*\d+$', re.IGNORECASE),
        re.compile(r'\{.*\}') # raw json
    ]

    total_files = 0
    empty_inputs = 0
    empty_names = 0
    suspicious_names = 0
    long_names = 0
    
    for root, dirs, files in os.walk('public/data'):
        for file in files:
            if file.endswith('.json'):
                total_files += 1
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                except Exception as e:
                    print(f"Error parsing {path}: {e}")
                    continue
                
                moves = data.get('movesList', [])
                file_flags = []
                
                for m in moves:
                    name = str(m.get('name', ''))
                    input_cmd = str(m.get('input', ''))
                    
                    if not name.strip():
                        empty_names += 1
                        file_flags.append(f"Empty move name (Input: {input_cmd})")
                        
                    if not input_cmd.strip() and name.lower() != "mimic":
                        empty_inputs += 1
                        file_flags.append(f"Empty input for '{name}'")
                        
                    if len(name) > 80:
                        long_names += 1
                        file_flags.append(f"Extremely long name ({len(name)} chars): {name[:50]}...")
                        
                    for pat in suspicious_patterns:
                        if pat.match(name):
                            suspicious_names += 1
                            file_flags.append(f"Suspicious generated name: '{name}'")
                            break
                            
                if file_flags:
                    garbage_files.append({
                        'path': path,
                        'char': data.get('character', file),
                        'flags': file_flags
                    })

    # Generate Markdown Report
    with open('garbage_report.md', 'w', encoding='utf-8') as f:
        f.write("# Garbage & Auto-Generated Moves Report\n\n")
        f.write(f"**Total Files Scanned:** {total_files}\n")
        f.write(f"**Files with issues:** {len(garbage_files)}\n\n")
        f.write("### Issue Breakdown\n")
        f.write(f"- Empty Inputs: {empty_inputs}\n")
        f.write(f"- Empty Names: {empty_names}\n")
        f.write(f"- Suspicious Names (e.g. 'Unknown', 'Move 1'): {suspicious_names}\n")
        f.write(f"- Abnormally Long Names: {long_names}\n\n")
        
        f.write("### Affected Characters\n")
        for gf in garbage_files[:100]: # Limit to first 100 for brevity if large
            f.write(f"#### {gf['char']} (`{gf['path']}`)\n")
            # Only list unique flags to prevent huge files
            unique_flags = list(set(gf['flags']))
            for flag in unique_flags[:5]:
                f.write(f"- {flag}\n")
            if len(unique_flags) > 5:
                f.write(f"- ... and {len(unique_flags) - 5} more issues.\n")
            f.write("\n")

if __name__ == '__main__':
    analyze_garbage()
