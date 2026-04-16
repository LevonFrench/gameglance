import re

ts_path = 'src/games.ts'
ts = open(ts_path, encoding='utf-8').read()

# We can split the file by "  {\n    id:" or by using a regex to isolate each game block
matches = list(re.finditer(r'\{\s*id:\s*[\'"]([^\'"]+)[\'"][\s\S]*?tabs:\s*\[[\s\S]*?\]\s*\}', ts))

seen_ids = set()
to_remove = []

for m in matches:
    gid = m.group(1)
    if gid in seen_ids:
        to_remove.append(m)
    else:
        seen_ids.add(gid)

# Remove in reverse order so string indices don't shift
print(f"Removing {len(to_remove)} duplicate blocks...")

new_ts = ts
# sort by start index in reverse
to_remove.sort(key=lambda x: x.start(), reverse=True)

for m in to_remove:
    # Also remove the trailing comma and newline if present to keep syntax clean
    start = m.start()
    end = m.end()
    
    # check if there's a comma after it
    after_end = new_ts[end:end+4]
    if ',' in after_end:
        end += after_end.index(',') + 1
        
    print(f"Removed duplicate for {m.group(1)}")
    new_ts = new_ts[:start] + new_ts[end:]

# replace double comma just in case
new_ts = re.sub(r',\s*,', ',', new_ts)
new_ts = re.sub(r'\[\s*,', '[', new_ts)
new_ts = re.sub(r',\s*\]', ']', new_ts)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_ts)
