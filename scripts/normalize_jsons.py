import glob, json

def main():
    jsons = glob.glob('public/data/**/*.json', recursive=True)
    count = 0
    for f in jsons:
        try:
            with open(f, 'r', encoding='utf-8') as file:
                data = json.load(file)
                
            movesList = data.get('movesList', [])
            changed = False
            
            for m in movesList:
                if 'input' in m and 'inputs' not in m:
                    m['inputs'] = [m.pop('input')]
                    changed = True
                if 'id' not in m:
                    m['id'] = m['name'].lower().replace(' ', '-').replace("'", "")
                    changed = True
                if 'type' in m:
                    t = m['type'].lower()
                    old_t = m['type']
                    if 'super' in t: m['type'] = 'super'
                    elif 'special' in t: m['type'] = 'special'
                    elif 'normal' in t: m['type'] = 'normal'
                    elif 'unique' in t: m['type'] = 'unique'
                    elif 'throw' in t: m['type'] = 'throw'
                    if old_t != m['type']: changed = True

            if changed:
                with open(f, 'w', encoding='utf-8') as out_f:
                    json.dump(data, out_f, indent=2)
                count += 1
                
        except Exception as e:
            pass

    print(f"Normalized {count} jsons.")

if __name__ == '__main__':
    main()
