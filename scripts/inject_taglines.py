import re

TAGLINES = {
    'mortal-kombat': 'Prepare Yourself',
    'mortal-kombat-2': 'Nothing Can Prepare You',
    'mortal-kombat-3': 'There Is No Knowledge That Is Not Power',
    'ultimate-mortal-kombat-3': 'You Will Experience',
    'mortal-kombat-trilogy': 'The Ultimate Kombat',
    'mortal-kombat-4': 'The First 3D Kombat',
    'mortal-kombat-gold': 'Pure Kombat Gold',
    'mortal-kombat-deadly-alliance': 'A Deadly Alliance Is Formed',
    'mortal-kombat-deception': 'Deception Is Everywhere',
    'mortal-kombat-armageddon': 'The End Of Kombat',
    'mortal-kombat-vs-dc-universe': 'Worlds Collide',
    'mortal-kombat-2011': 'Back To The Roots',
    'mortal-kombat-x': 'Who\'s Next?',
    'mortal-kombat-11': 'You\'re Next',
    'mortal-kombat-1': 'It\'s In Our Blood',

    'guilty-gear-the-missing-link': 'Heaven or Hell',
    'guilty-gear-x': 'By Your Side',
    'guilty-gear-xx': 'The Midnight Carnival',
    'guilty-gear-xx-accent-core-plus-r': 'The Ultimate Evolution',
    'guilty-gear-xrd-sign': 'A New Battle Awaits',
    'guilty-gear-xrd-revelator': 'Reveal The Truth',
    'guilty-gear-strive': 'Let\'s Rock',

    'blazblue-calamity-trigger': 'The Wheel of Fate is Turning',
    'blazblue-continuum-shift': 'A New Continuum',
    'blazblue-chronophantasma': 'The Phantasma Awakens',
    'blazblue-central-fiction': 'The Final Fiction',
    'blazblue-cross-tag-battle': 'Can\'t Escape From Crossing Fate',

    'tekken': 'The King of Iron Fist',
    'tekken-2': 'Iron Fist Tournament 2',
    'tekken-3': 'A New Era of Combat',
    'tekken-tag-tournament': 'Tag Team Brawlers',
    'tekken-4': 'Fist Meets Fate',
    'tekken-5': 'The Best Fights Are Personal',
    'tekken-6': 'Global Rebellion',
    'tekken-tag-tournament-2': 'We Are Tekken',
    'tekken-7': 'The Mishima Saga Ends',
    'tekken-8': 'Fist Meets Fate Reloaded',

    'virtua-fighter': 'Ten Years Too Early',
    'virtua-fighter-2': 'The Next Step In 3D',
    'virtua-fighter-3': 'Step Into The Z Axis',
    'virtua-fighter-4': 'Evolution Of Combat',
    'virtua-fighter-5': 'The Ultimate Showdown',
    'virtua-fighter-5-ultimate-showdown': 'True 3D Fighting Reborn',

    'dead-or-alive': 'I Am A Fighter',
    'dead-or-alive-2': 'Hardcore Combat',
    'dead-or-alive-3': 'A New Dimension',
    'dead-or-alive-4': 'Fight For Survival',
    'dead-or-alive-5': 'I Am A Fighter Returns',
    'dead-or-alive-5-last-round': 'The Last Round',
    'dead-or-alive-6': 'Intense Fighting Entertainment',
    
    'king-of-fighters-94': 'The Initial Strike',
    'king-of-fighters-95': 'Enter Iori',
    'king-of-fighters-96': 'The Orochi Saga Begins',
    'king-of-fighters-97': 'The Orochi Saga Ends',
    'king-of-fighters-98': 'The Ultimate Match',
    'king-of-fighters-99': 'Evolution',
    'king-of-fighters-2000': 'The Millennium Match',
    'king-of-fighters-2001': 'The NESTS Saga Ends',
    'king-of-fighters-2002': 'Challenge To Ultimate Battle',
    'king-of-fighters-2003': 'A New Hero',
    'king-of-fighters-xi': 'New Generation',
    'king-of-fighters-xii': 'Rebirth',
    'king-of-fighters-xiii': 'The Ash Saga Ends',
    'king-of-fighters-xiv': 'Burn To Fight',
    'king-of-fighters-xv': 'Shatter All Expectations',
    
    'marvel-vs-capcom-clash-of-super-heroes': 'Two Worlds Collide',
    'marvel-vs-capcom-2': 'Let\'s Go Crazy',
    'marvel-vs-capcom-3': 'Fate of Two Worlds',
    'ultimate-marvel-vs-capcom-3': 'The Ultimate Battle',
    'marvel-vs-capcom-infinite': 'Return of the Infinity Stones',
    'x-men-vs-street-fighter': 'Mutants vs World Warriors',
    'marvel-super-heroes-vs-street-fighter': 'The Ultimate Crossover',

    'samurai-shodown': 'Embrace Death',
    'samurai-shodown-ii': 'Return of the Samurai',
    'samurai-shodown-iii': 'Blades of Blood',
    'samurai-shodown-iv': 'Amakusa\'s Revenge',
    'samurai-shodown-v': 'The War Returns',
    'samurai-shodown-v-special': 'The Greatest Slash',
    'samurai-shodown-2019': 'Embrace Death Again'
}

ts = open('src/games.ts', encoding='utf-8').read()

def inject(match):
    id_val = match.group(1)
    if id_val in TAGLINES:
        if 'tagline:' not in match.group(0):
            # inject tagline right after name
            replaced = re.sub(r"(name:\s*['\"][^'\"]+['\"],)", r"\1\n    tagline: '" + TAGLINES[id_val].replace("'", "\\'") + "',", match.group(0))
            return replaced
    return match.group(0)

# match game definitions
new_ts = re.sub(r"(id:\s*['\"]([^'\"]+)['\"]\s*,\s*\n\s*name:\s*['\"][^'\"]+['\"],.*?)(?=rosterCount:|tabs:)", inject, ts, flags=re.DOTALL)

open('src/games.ts', 'w', encoding='utf-8').write(new_ts)
print("Injected taglines successfully.")
