import urllib.request
import json
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

# Map GameGlance Game IDs to SuperCombo URL prefixes
GAME_PREFIXES = {
    'marvel-vs-capcom-2': 'Marvel_vs_Capcom_2',
    'marvel-vs-capcom-clash-of-super-heroes': 'Marvel_vs_Capcom',
    'marvel-super-heroes-vs-street-fighter': 'Marvel_Super_Heroes_vs_Street_Fighter',
    'x-men-vs-street-fighter': 'X-Men_vs_Street_Fighter',
    'marvel-super-heroes': 'Marvel_Super_Heroes',
    'x-men-children-of-the-atom': 'X-Men:_Children_of_the_Atom',
    'ultimate-marvel-vs-capcom-3': 'Ultimate_Marvel_vs_Capcom_3',
    'darkstalkers-the-night-warriors': 'Darkstalkers',
    'vampirehunter2': 'Vampire_Hunter_2',
    'vampiresavior': 'Vampire_Savior',
    'vampiresavior2': 'Vampire_Savior_2',
    'street-fighter-alpha': 'Street_Fighter_Alpha',
    'street-fighter-alpha-2': 'Street_Fighter_Alpha_2',
    'street-fighter-alpha-3': 'Street_Fighter_Alpha_3',
    'red-earth-warzard': 'Red_Earth',
    'cyberbots-full-metal-madness': 'Cyberbots',
    'capcom-fighting-jam': 'Capcom_Fighting_Jam',
    'capcom-vs-snk-2-mark-of-the-millennium-2001': 'Capcom_vs_SNK_2',
    'capcom-vs-snk-millennium-fight-2000-pro': 'Capcom_vs_SNK',
}

# Add fightcade games
GAME_PREFIXES.update({
    'super-street-fighter-ii-turbo': 'Super_Street_Fighter_2_Turbo',
    'street-fighter-iii-3rd-strike': 'Street_Fighter_3:_3rd_Strike',
    'garou-mark-of-the-wolves': 'Garou:_Mark_of_the_Wolves',
    'the-king-of-fighters-98': 'The_King_of_Fighters_98',
    'the-king-of-fighters-2002': 'The_King_of_Fighters_2002',
    'jojos-bizarre-adventure-heritage-for-the-future': 'Jojos_Bizarre_Adventure',
})

def get_roster(game_id):
    path = f"public/data/{game_id}/_roster.json"
    if not os.path.exists(path):
        return []
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def fetch_wikitext(title):
    url = f"https://wiki.supercombo.gg/api.php?action=query&prop=revisions&rvprop=content&rvslots=main&titles={title}&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            data = json.loads(response.read().decode('utf-8'))
            pages = data['query']['pages']
            for page_id in pages:
                if page_id == '-1':
                    return None
                return pages[page_id]['revisions'][0]['slots']['main']['*']
    except Exception as e:
        print(f"Error fetching {title}: {e}")
        return None

def main():
    os.makedirs('staging/legacy_raw', exist_ok=True)
    
    for game_id, prefix in GAME_PREFIXES.items():
        print(f"\n=== Processing {game_id} ===")
        roster = get_roster(game_id)
        if not roster:
            print(f"No roster found for {game_id}")
            continue
            
        game_dir = f"staging/legacy_raw/{game_id}"
        os.makedirs(game_dir, exist_ok=True)
        
        for char in roster:
            char_id = char['id']
            # Try to fetch Name or ID based capitalization. SuperCombo is picky.
            name_formatted = char['name'].replace(' ', '_')
            
            # 1. Try Character/Combos page
            title = f"{prefix}/{name_formatted}/Combos"
            content = fetch_wikitext(title)
            
            # 2. Try just Character page
            if not content:
                title = f"{prefix}/{name_formatted}"
                content = fetch_wikitext(title)
                
            if content:
                print(f"  OK {char['name']} (Length: {len(content)})")
                with open(f"{game_dir}/{char_id}.txt", 'w', encoding='utf-8') as f:
                    f.write(content)
            else:
                print(f"  FAIL {char['name']} not found")

if __name__ == "__main__":
    main()
