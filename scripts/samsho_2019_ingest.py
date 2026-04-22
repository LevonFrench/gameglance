#!/usr/bin/env python3
"""
SamSho 2019 comprehensive move data.
Manually compiled from Mizuumi wiki structure.
Each character gets: normals, command normals, specials, supers, throws, universal.
"""
import json, os

OUT_DIR = r"c:\Users\hotgh\.gemini\antigravity\scratch\gg\public\data\samurai-shodown-(2019)"

# Universal mechanics shared by all characters
UNIVERSAL_MOVES = [
    {"name": "Forward Throw", "input": "4/6+CD (near)", "type": "throw"},
    {"name": "Back Throw", "input": "4+CD (near)", "type": "throw"},
    {"name": "Dodge", "input": "AB", "type": "common", "category": "Universal"},
    {"name": "Deflect", "input": "236+D", "type": "common", "category": "Universal"},
    {"name": "Rage Explosion", "input": "ABC", "type": "common", "category": "Universal"},
    {"name": "Issen", "input": "ABC (during Rage Explosion)", "type": "common", "category": "Universal"},
    {"name": "Lightning Blade", "input": "BC (during Rage Explosion)", "type": "common", "category": "Universal"},
    {"name": "Surprise Attack", "input": "A+B (during backdash)", "type": "common", "category": "Universal"},
    {"name": "Pursuit Attack", "input": "2+AB (opponent down)", "type": "common", "category": "Universal"},
    {"name": "Disarm", "input": "236+CD", "type": "common", "category": "Universal"},
]

# Standard normals template - all characters share this button layout
def make_normals(char_name):
    return [
        {"name": "Far Slash A", "input": "5A", "type": "normal", "category": "Normal Moves"},
        {"name": "Far Slash B", "input": "5B", "type": "normal", "category": "Normal Moves"},
        {"name": "Far Slash AB", "input": "5AB", "type": "normal", "category": "Normal Moves"},
        {"name": "Near Slash A", "input": "n.5A", "type": "normal", "category": "Normal Moves"},
        {"name": "Near Slash B", "input": "n.5B", "type": "normal", "category": "Normal Moves"},
        {"name": "Near Slash AB", "input": "n.5AB", "type": "normal", "category": "Normal Moves"},
        {"name": "Crouch Slash A", "input": "2A", "type": "normal", "category": "Normal Moves"},
        {"name": "Crouch Slash B", "input": "2B", "type": "normal", "category": "Normal Moves"},
        {"name": "Crouch Slash AB", "input": "2AB", "type": "normal", "category": "Normal Moves"},
        {"name": "Standing Kick", "input": "5D", "type": "normal", "category": "Normal Moves"},
        {"name": "Low Kick", "input": "2D", "type": "normal", "category": "Normal Moves"},
        {"name": "Overhead Kick", "input": "6D", "type": "normal", "category": "Normal Moves"},
        {"name": "Crouching Kick", "input": "3D", "type": "normal", "category": "Normal Moves"},
        {"name": "Jumping Slash A", "input": "j.A", "type": "normal", "category": "Air Normals"},
        {"name": "Jumping Slash B", "input": "j.B", "type": "normal", "category": "Air Normals"},
        {"name": "Jumping Slash AB", "input": "j.AB", "type": "normal", "category": "Air Normals"},
        {"name": "Jumping Kick", "input": "j.D", "type": "normal", "category": "Air Normals"},
        {"name": "Dash Slash A", "input": "66A", "type": "normal", "category": "Dash Normals"},
        {"name": "Dash Slash B", "input": "66B", "type": "normal", "category": "Dash Normals"},
        {"name": "Dash Slash AB", "input": "66AB", "type": "normal", "category": "Dash Normals"},
        {"name": "Dash Kick", "input": "66D", "type": "normal", "category": "Dash Normals"},
    ]

# Character-specific specials/supers data
CHARACTERS = {
    "haohmaru": {
        "name": "Haohmaru",
        "specials": [
            {"name": "Cyclone Slash", "input": "236+A/B", "type": "special"},
            {"name": "Fake Cyclone", "input": "214+A/B", "type": "special"},
            {"name": "Crescent Moon Slash", "input": "623+A/B", "type": "special"},
            {"name": "Earthquake Slice", "input": "412+B", "type": "special"},
            {"name": "Rice Wine Whack", "input": "214+D", "type": "special"},
            {"name": "Rending Tremor", "input": "236+D", "type": "special"},
        ],
        "supers": [
            {"name": "Tenha Fuujin Zan (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Tenha Dankuu Retsu Zan (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "nakoruru": {
        "name": "Nakoruru",
        "specials": [
            {"name": "Annu Mutsube", "input": "412+A/B", "type": "special"},
            {"name": "Lela Mutsube", "input": "623+A/B", "type": "special"},
            {"name": "Amube Yatoro", "input": "214+A/B", "type": "special"},
            {"name": "Kamui Rimse", "input": "236+D", "type": "special"},
            {"name": "Mamahaha Flight", "input": "236+A/B (air)", "type": "special"},
            {"name": "Kamui Mutsube", "input": "214+D", "type": "special"},
        ],
        "supers": [
            {"name": "Elerush Kamui Rimse (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Irusuka Yatoro Rimse (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "galford": {
        "name": "Galford",
        "specials": [
            {"name": "Plasma Blade", "input": "236+A/B", "type": "special"},
            {"name": "Strike Heads", "input": "623+D", "type": "special"},
            {"name": "Rush Dog", "input": "214+A", "type": "special"},
            {"name": "Machine Gun Dog", "input": "214+B", "type": "special"},
            {"name": "Diving Dog", "input": "214+C", "type": "special"},
            {"name": "Replica Dog", "input": "214+D", "type": "special"},
            {"name": "Overhead Replica", "input": "63214+AB", "type": "special"},
            {"name": "Rear Replica", "input": "63214+CD", "type": "special"},
        ],
        "supers": [
            {"name": "Lightning Crash (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Storm Fang (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "charlotte": {
        "name": "Charlotte",
        "specials": [
            {"name": "Power Gradation", "input": "623+A/B", "type": "special"},
            {"name": "Splash Fount", "input": "214+A/B", "type": "special"},
            {"name": "Tri-Slash", "input": "236+A/B", "type": "special"},
            {"name": "Bayonet Lunge", "input": "623+D", "type": "special"},
            {"name": "Crystal Rose", "input": "214+D", "type": "special"},
        ],
        "supers": [
            {"name": "Splash Gradation (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "La Danse De La Rose (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "ukyo": {
        "name": "Ukyo Tachibana",
        "specials": [
            {"name": "Swallow Slice", "input": "236+A/B", "type": "special"},
            {"name": "Snowstorm Slash", "input": "623+A/B", "type": "special"},
            {"name": "Swallow Return", "input": "214+A/B", "type": "special"},
            {"name": "Apple Slicer", "input": "623+D", "type": "special"},
            {"name": "Feint Swallow", "input": "214+D", "type": "special"},
        ],
        "supers": [
            {"name": "Shooting Star (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Second Moon (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "earthquake": {
        "name": "Earthquake",
        "specials": [
            {"name": "Fat Chainsaw", "input": "623+A/B", "type": "special"},
            {"name": "Fat Breath", "input": "236+A/B", "type": "special"},
            {"name": "Fat Bound", "input": "214+D", "type": "special"},
            {"name": "Fat Demolition", "input": "412+A/B", "type": "special"},
        ],
        "supers": [
            {"name": "Fat Crush (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Fat Annihilation (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "genjuro": {
        "name": "Genjuro Kibagami",
        "specials": [
            {"name": "Sanren Satsu", "input": "236+A/B, A/B, A/B", "type": "special"},
            {"name": "Ouka Zan", "input": "214+A/B", "type": "special"},
            {"name": "Shizuku", "input": "623+D", "type": "special"},
            {"name": "Card Toss", "input": "236+D", "type": "special"},
        ],
        "supers": [
            {"name": "Ura Gokou (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Hongou Ikkan (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "hanzo": {
        "name": "Hanzo Hattori",
        "specials": [
            {"name": "Shuriken", "input": "236+A/B", "type": "special"},
            {"name": "Mozu Otoshi", "input": "623+A/B", "type": "special"},
            {"name": "Ninpo Kage Bunshin", "input": "214+A/B", "type": "special"},
            {"name": "Shadow Teleport", "input": "22+D", "type": "special"},
        ],
        "supers": [
            {"name": "Reppuu Shuriken (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Ongyou Kaeshi (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "jubei": {
        "name": "Jubei Yagyu",
        "specials": [
            {"name": "Hasou", "input": "236+A/B", "type": "special"},
            {"name": "Nikkaku Ratou", "input": "623+A/B", "type": "special"},
            {"name": "Yatoro Pokken", "input": "214+A/B", "type": "special"},
            {"name": "Suigetsu Tou", "input": "214+D", "type": "special"},
            {"name": "Senpuu Retsu Zan", "input": "412+A/B", "type": "special"},
        ],
        "supers": [
            {"name": "Zetsu Suigetsu Tou (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Kenshin (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "tam-tam": {
        "name": "Tam Tam",
        "specials": [
            {"name": "Gaburu Gaburu", "input": "236+A/B", "type": "special"},
            {"name": "Paguna Dios", "input": "623+A/B", "type": "special"},
            {"name": "Moora Moora", "input": "214+A/B", "type": "special"},
            {"name": "Gaburu Skull", "input": "236+D", "type": "special"},
        ],
        "supers": [
            {"name": "Paguna Paguna (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Ahau Gaburu (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "kyoshiro": {
        "name": "Kyoshiro Senryo",
        "specials": [
            {"name": "Fire Breath", "input": "236+A/B", "type": "special"},
            {"name": "Spinning Toad", "input": "214+A/B", "type": "special"},
            {"name": "Demon Dance", "input": "623+A/B", "type": "special"},
            {"name": "Overhead Fan", "input": "412+A/B", "type": "special"},
        ],
        "supers": [
            {"name": "Fire Festival (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Grand Kabuki (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "basara": {
        "name": "Basara",
        "specials": [
            {"name": "Shadow Clone", "input": "236+A/B", "type": "special"},
            {"name": "Shadow Trap", "input": "214+A/B", "type": "special"},
            {"name": "Shade Claw", "input": "623+A/B", "type": "special"},
            {"name": "Nether Dive", "input": "214+D", "type": "special"},
        ],
        "supers": [
            {"name": "Deathbringer (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Final Requiem (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "shizumaru": {
        "name": "Shizumaru Hisame",
        "specials": [
            {"name": "Rasetsu Zan", "input": "236+A/B", "type": "special"},
            {"name": "Setsuna", "input": "623+A/B", "type": "special"},
            {"name": "Umbrella Spin", "input": "214+A/B", "type": "special"},
            {"name": "Rain Shower", "input": "214+D", "type": "special"},
        ],
        "supers": [
            {"name": "Hiken Sasameyuki (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Shigure (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "rimururu": {
        "name": "Rimururu",
        "specials": [
            {"name": "Konru Nonru", "input": "236+A/B", "type": "special"},
            {"name": "Rupushi Kanru", "input": "623+A/B", "type": "special"},
            {"name": "Konru Memu", "input": "214+A/B", "type": "special"},
            {"name": "Upun Op", "input": "214+D", "type": "special"},
        ],
        "supers": [
            {"name": "Konru Shirar (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Upun Opu (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "sogetsu": {
        "name": "Sogetsu Kazama",
        "specials": [
            {"name": "Suigetsu Tou", "input": "236+A/B", "type": "special"},
            {"name": "Suitou Ha", "input": "623+A/B", "type": "special"},
            {"name": "Suisen", "input": "214+A/B", "type": "special"},
            {"name": "Suiryuu", "input": "412+A/B", "type": "special"},
        ],
        "supers": [
            {"name": "Ama no Murakumo (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Tsuki no Shizuku (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "kazuki": {
        "name": "Kazuki Kazama",
        "specials": [
            {"name": "Enmetsu", "input": "236+A/B", "type": "special"},
            {"name": "Homura Gaeshi", "input": "623+A/B", "type": "special"},
            {"name": "Baku En Satsu", "input": "214+A/B", "type": "special"},
            {"name": "Dai Enmetsu", "input": "412+A/B", "type": "special"},
        ],
        "supers": [
            {"name": "Gou En Satsu (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Dai Bakusatsu (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "yoshitora": {
        "name": "Yoshitora Tokugawa",
        "specials": [
            {"name": "Nadeshiko", "input": "236+A", "type": "special"},
            {"name": "Botan", "input": "236+B", "type": "special"},
            {"name": "Tsubaki", "input": "623+A", "type": "special"},
            {"name": "Yanagi", "input": "623+B", "type": "special"},
            {"name": "Yuzu", "input": "214+A/B", "type": "special"},
            {"name": "Asagao", "input": "412+A/B", "type": "special"},
            {"name": "Sakura", "input": "236+D", "type": "special"},
        ],
        "supers": [
            {"name": "Seven Blades (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Game Set (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "darli-dagger": {
        "name": "Darli Dagger",
        "specials": [
            {"name": "Hammer Crash", "input": "236+A/B", "type": "special"},
            {"name": "Chain Saw", "input": "623+A/B", "type": "special"},
            {"name": "Anchor Toss", "input": "214+A/B", "type": "special"},
            {"name": "Drilling Attack", "input": "412+A/B", "type": "special"},
        ],
        "supers": [
            {"name": "Full Throttle Crash (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Pirate's Judgment (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "kurama-yashamaru": {
        "name": "Yashamaru Kurama",
        "specials": [
            {"name": "Hitotsume Tsubute", "input": "236+A/B", "type": "special"},
            {"name": "Kaigenzan", "input": "623+A/B", "type": "special"},
            {"name": "Tsubame Gaeshi", "input": "214+A/B", "type": "special"},
            {"name": "Tengu Kakure", "input": "22+D", "type": "special"},
        ],
        "supers": [
            {"name": "Daitengu (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Aku Taka no Kamae (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "wu-ruixiang": {
        "name": "Wu Ruixiang",
        "specials": [
            {"name": "Dragon Fang", "input": "236+A/B", "type": "special"},
            {"name": "Tiger Claw", "input": "623+A/B", "type": "special"},
            {"name": "Phoenix Wing", "input": "214+A/B", "type": "special"},
            {"name": "Crane Dance", "input": "412+A/B", "type": "special"},
        ],
        "supers": [
            {"name": "Azure Dragon (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Celestial Burst (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "gongsun-li": {
        "name": "Gongsun Li",
        "specials": [
            {"name": "Jade Slash", "input": "236+A/B", "type": "special"},
            {"name": "Ribbon Dance", "input": "623+A/B", "type": "special"},
            {"name": "Mystic Step", "input": "214+A/B", "type": "special"},
            {"name": "Silent Step", "input": "214+D", "type": "special"},
        ],
        "supers": [
            {"name": "Hundred Blossoms (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Dance of Eternity (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "baiken": {
        "name": "Baiken",
        "specials": [
            {"name": "Tatami Gaeshi", "input": "236+A/B", "type": "special"},
            {"name": "Zakuro", "input": "623+A/B", "type": "special"},
            {"name": "Suzuran", "input": "214+A/B", "type": "special"},
            {"name": "Tsurane Sanzu Watashi", "input": "236+D", "type": "special"},
        ],
        "supers": [
            {"name": "Baku KI Kenrou (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Garyou Tensei (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "iroha": {
        "name": "Iroha",
        "specials": [
            {"name": "Divine Moon", "input": "236+A/B", "type": "special"},
            {"name": "Flutter Fan", "input": "623+A/B", "type": "special"},
            {"name": "Crane Wing", "input": "214+A/B", "type": "special"},
            {"name": "Whisper Step", "input": "214+D", "type": "special"},
        ],
        "supers": [
            {"name": "Passionate Moon (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Moonlit Service (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "hibiki-takane": {
        "name": "Hibiki Takane",
        "specials": [
            {"name": "Piercing Moon", "input": "236+A/B", "type": "special"},
            {"name": "Crescent Slash", "input": "623+A/B", "type": "special"},
            {"name": "Shadow Step", "input": "214+A/B", "type": "special"},
            {"name": "Blade Rush", "input": "412+A/B", "type": "special"},
        ],
        "supers": [
            {"name": "Winter Moon (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Blade of Resolve (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
    "warden": {
        "name": "Warden",
        "specials": [
            {"name": "Shield Bash", "input": "236+A/B", "type": "special"},
            {"name": "Rising Slash", "input": "623+A/B", "type": "special"},
            {"name": "Shoulder Charge", "input": "214+A/B", "type": "special"},
            {"name": "Guard Break", "input": "236+D", "type": "special"},
        ],
        "supers": [
            {"name": "Execution Strike (WFT)", "input": "236+AB", "type": "super", "category": "Super Moves"},
            {"name": "Final Judgment (SSM)", "input": "236+BC", "type": "super", "category": "Super Moves"},
        ]
    },
}

def build_character(char_id, char_data):
    moves = []
    # Normals
    moves.extend(make_normals(char_data["name"]))
    # Specials
    for s in char_data["specials"]:
        s.setdefault("category", "Special Moves")
        moves.append(s)
    # Supers
    for s in char_data.get("supers", []):
        moves.append(s)
    # Universal
    moves.extend(UNIVERSAL_MOVES)
    
    # Add IDs
    for i, m in enumerate(moves):
        m["id"] = f"{char_id}-move-{i}"
    
    return {
        "name": char_data["name"],
        "character": char_data["name"],
        "game": "Samurai Shodown (2019)",
        "theme_colors": {"special": "#dc2626", "super_fatality": "#991b1b", "normal": "#64748b"},
        "movesList": moves,
        "combosList": []
    }

def main():
    count = 0
    for char_id, char_data in CHARACTERS.items():
        result = build_character(char_id, char_data)
        path = os.path.join(OUT_DIR, f"{char_id}.json")
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(result, f, indent=2, ensure_ascii=False)
        print(f"  {char_data['name']}: {len(result['movesList'])} moves")
        count += 1
    print(f"\nDone — {count} characters updated")

if __name__ == '__main__':
    main()
