import type { GameDefinition } from './types';

export const SUPPORTED_GAMES: ReadonlyArray<Readonly<GameDefinition>> = [
  {
    id: 'dragon-ball-fighterz',
    mameRomset: "",
    name: "Dragon Ball FighterZ",
    tagline: "3v3 Tag Team Action",
    developer: "Arc System Works",
    releaseYear: 2018,
    platform: "PS4, Xbox One, PC, Switch, PS5, Xbox Series X/S",
    rosterCount: 44,
    tags: ['Anime', 'Vs.'],
    links: [
      { title: 'Official Site / Patch Notes', url: 'https://en.bandainamcoent.eu/dragon-ball/dragon-ball-fighterz' },
      { title: 'Dustloop Wiki (DBFZ)', url: 'https://dustloop.com/w/DBFZ' }
    ],
    notationSystem: 'numpad',
    systemMechanics: [
      { name: 'Assists', description: 'Call partner characters for assist attacks. Three assist types (A/B/C) per character.'  },
      { name: 'Dragon Rush', description: 'Universal throw that launches. Can be teched.' , input: 'L+M' },
      { name: 'Super Dash', description: 'Homing aerial dash that tracks the opponent. Beats projectiles.' , input: 'H+S' },
      { name: 'Vanish', description: 'Teleport behind the opponent with an attack. Costs 1 bar.' , input: 'M+H' },
      { name: 'Sparking Blast', description: 'Once per game power-up. Health regen, damage boost, combo extensions. Stronger with fewer characters.' , input: 'L+M+H+S' },
      { name: 'Z Change', description: 'Tag in a partner character. Can be done raw or during combos.'  },
      { name: 'Ki Charge', description: 'Hold to charge ki meter manually. Risky but builds resources.' , input: 'S (hold)' },
      { name: 'Limit Break', description: 'Last character alive gets automatic buffs: extra damage and reduced super costs.'  }
    ],
    characters: [
      { id: 'android-16', name: 'Android 16', moveCount: 0 },
      { id: 'android-17', name: 'Android 17', moveCount: 0 },
      { id: 'android-18', name: 'Android 18', moveCount: 0 },
      { id: 'android-21-lab-coat', name: 'Android 21 (Lab Coat)', moveCount: 0 },
      { id: 'android-21-majin', name: 'Android 21 (Majin)', moveCount: 0 },
      { id: 'bardock', name: 'Bardock', moveCount: 0 },
      { id: 'beerus', name: 'Beerus', moveCount: 0 },
      { id: 'broly-dbs', name: 'Broly (DBS)', moveCount: 0 },
      { id: 'broly-z', name: 'Broly (Z)', moveCount: 0 },
      { id: 'cell', name: 'Cell', moveCount: 0 },
      { id: 'cooler', name: 'Cooler', moveCount: 0 },
      { id: 'freeza', name: 'Freeza', moveCount: 0 },
      { id: 'ginyu', name: 'Ginyu', moveCount: 0 },
      { id: 'gogeta-ss4', name: 'Gogeta (SS4)', moveCount: 0 },
      { id: 'gogeta-ssgss', name: 'Gogeta (SSGSS)', moveCount: 0 },
      { id: 'gohan-adult', name: 'Gohan (Adult)', moveCount: 0 },
      { id: 'gohan-teen', name: 'Gohan (Teen)', moveCount: 0 },
      { id: 'goku-blue', name: 'Goku (Blue)', moveCount: 0 },
      { id: 'goku-gt', name: 'Goku (GT)', moveCount: 0 },
      { id: 'goku-ss', name: 'Goku (SS)', moveCount: 0 },
      { id: 'goku-ultra-instinct', name: 'Goku (Ultra Instinct)', moveCount: 0 },
      { id: 'goku-black', name: 'Goku Black', moveCount: 0 },
      { id: 'gotenks', name: 'Gotenks', moveCount: 0 },
      { id: 'hit', name: 'Hit', moveCount: 0 },
      { id: 'janemba', name: 'Janemba', moveCount: 0 },
      { id: 'jiren', name: 'Jiren', moveCount: 0 },
      { id: 'kefla', name: 'Kefla', moveCount: 0 },
      { id: 'kid-buu', name: 'Kid Buu', moveCount: 0 },
      { id: 'krillin', name: 'Krillin', moveCount: 0 },
      { id: 'majin-buu', name: 'Majin Buu', moveCount: 0 },
      { id: 'master-roshi', name: 'Master Roshi', moveCount: 0 },
      { id: 'nappa', name: 'Nappa', moveCount: 0 },
      { id: 'piccolo', name: 'Piccolo', moveCount: 0 },
      { id: 'super-baby-2', name: 'Super Baby 2', moveCount: 0 },
      { id: 'tenshinhan', name: 'Tenshinhan', moveCount: 0 },
      { id: 'trunks', name: 'Trunks', moveCount: 0 },
      { id: 'vegeta-base', name: 'Vegeta (Base)', moveCount: 0 },
      { id: 'vegeta-blue', name: 'Vegeta (SSGSS)', moveCount: 0 },
      { id: 'vegeta-ss', name: 'Vegeta (SS)', moveCount: 0 },
      { id: 'vegito-ssgss', name: 'Vegito (SSGSS)', moveCount: 0 },
      { id: 'videl', name: 'Videl', moveCount: 0 },
      { id: 'yamcha', name: 'Yamcha', moveCount: 0 },
      { id: 'zamasu-fused', name: 'Zamasu (Fused)', moveCount: 0 }
    ]
  },

  {

    id: 'art-of-fighting',

    mameRomset: "",

    name: "Art of Fighting",
    tagline: "The 100 Mega Shock",

    developer: "SNK",

    releaseYear: 1992,

    platform: "Arcade, NeoGeo, SNES, Genesis, PC",

rosterCount: 10,

        
    systemMechanics: [
      { name: 'Spirit Gauge', description: 'Special moves consume Spirit. When depleted, specials become weak. Recharge by holding a button.'  },
      { name: 'Desperation Move', description: 'Super available only at critical health. Huge damage.'  },
      { name: 'Taunts', description: 'Taunt to drain the opponent\'s Spirit gauge.' , input: 'Start' },
      { name: 'Scaling Damage', description: 'Attacks weaken as Spirit depletes. Resource management is key.'  },
      { name: 'Zoom Camera', description: 'Camera zooms in/out based on character distance. Pioneering feature.'  },
      { name: 'Wall Bounce', description: 'Characters bounce off stage edges for follow-up attacks.'  },
      { name: 'Throw', description: 'Close-range command grabs with unique animations.'  },
      { name: 'Special Moves', description: 'Fireball and uppercut archetypes with SNK-style inputs.'  }
    ],

    characters: [
      { id: 'jack-turner', name: 'Jack Turner', moveCount: 0 },
      { id: 'john-crawley', name: 'John Crawley', moveCount: 0 },
      { id: 'king', name: 'King', moveCount: 0 },
      { id: 'lee-pai-long', name: 'Lee Pai Long', moveCount: 0 },
      { id: 'micky-rogers', name: 'Micky Rogers', moveCount: 0 },
      { id: 'mr-big', name: 'Mr. Big', moveCount: 0 },
      { id: 'mr-karate', name: 'Mr. Karate', moveCount: 0 },
      { id: 'robert-garcia', name: 'Robert Garcia', moveCount: 0 },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki', moveCount: 0 },
      { id: 'ryuhaku-todoh', name: 'Ryuhaku Todoh', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'art-of-fighting-2',

    mameRomset: "",

    name: "Art of Fighting 2",
    tagline: "The Ultimate Blow",

    developer: "Unknown",

    releaseYear: 1994,

    platform: "Arcade, NeoGeo, SNES, PC",

rosterCount: 13,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'art-of-fighting-3-the-path-of-the-warrior',

    mameRomset: "",

    name: "Art of Fighting 3: The Path of the Warrior",
    tagline: "The Path of the Warrior",

    developer: "SNK",

    releaseYear: 1996,

    platform: "Arcade, NeoGeo, PC",

rosterCount: 9,

        
    systemMechanics: [
      { name: 'Spirit Gauge', description: 'Powers specials. Depletes on use, recharges over time or manually.'  },
      { name: 'Ultimate KO', description: 'Finish with a super for a special KO animation.'  },
      { name: 'Chain Combo', description: 'Link normals into specials for combo strings.'  },
      { name: 'Parry', description: 'Deflect attacks with precise timing for a counter opportunity.'  },
      { name: 'Pursuit Attack', description: 'Hit downed opponents for extra damage.'  },
      { name: 'Rush Combo', description: 'Multi-hit auto combo from light attacks.'  },
      { name: 'Guard Cancel', description: 'Counter from blockstun at meter cost.'  },
      { name: 'Desperation Move', description: 'Powerful super at low health.'  }
    ],

    characters: [
      { id: 'jin-fu-ha', name: 'Jin Fu-Ha', moveCount: 0 },
      { id: 'karman-cole', name: 'Karman Cole', moveCount: 0 },
      { id: 'kasumi-todoh', name: 'Kasumi Todoh', moveCount: 0 },
      { id: 'lenny-creston', name: 'Lenny Creston', moveCount: 0 },
      { id: 'robert-garcia', name: 'Robert Garcia', moveCount: 0 },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki', moveCount: 0 },
      { id: 'sinclair', name: 'Sinclair', moveCount: 0 },
      { id: 'wang-koh-san', name: 'Wang Koh-San', moveCount: 0 },
      { id: 'wyler', name: 'Wyler', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'astra-superstars',

    mameRomset: "",

    name: "Astra Superstars",
    tagline: "Enter the Arena",

    developer: "Sunsoft",

    releaseYear: 1998,

    platform: "Arcade, PC",

rosterCount: 8,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'asuka-120%-burning-fest-limited',

    mameRomset: "",

    name: "Asuka 120% Burning Fest Limited",
    tagline: "Enter the Arena",

    developer: "FamilySoft",

    releaseYear: 1997,

        characters: [
      { id: 'asuka-karashima', name: 'Asuka Karashima', moveCount: 0 },
      { id: 'genichirou-shindo', name: 'Genichirou Shindo', moveCount: 0 },
      { id: 'kiyoko-mitarai', name: 'Kiyoko Mitarai', moveCount: 0 },
      { id: 'kumi-kubota', name: 'Kumi Kubota', moveCount: 0 },
      { id: 'megumi-suzuki', name: 'Megumi Suzuki', moveCount: 0 },
      { id: 'nana-hidaka', name: 'Nana Hidaka', moveCount: 0 },
      { id: 'ryoko-owada', name: 'Ryoko Owada', moveCount: 0 },
      { id: 'shinobu-kawasaki', name: 'Shinobu Kawasaki', moveCount: 0 },
      { id: 'tamaki-shindo', name: 'Tamaki Shindo', moveCount: 0 },
      { id: 'tetsuko-yoshioka', name: 'Tetsuko Yoshioka', moveCount: 0 },
      { id: 'torami-hojo', name: 'Torami Hojo', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'battle-arena-toshinden-3',

    mameRomset: "",

    name: "Battle Arena Toshinden 3",
    tagline: "Enter the Arena",

    developer: "Tamsoft",

    releaseYear: 1996,

    platform: "Arcade, PS1, PC",

rosterCount: 30,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'battle-monsters',

    mameRomset: "",

    name: "Battle Monsters",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1995,

    platform: "Arcade, Saturn, PC",

rosterCount: 7,

        characters: [
      { id: 'chilli-pepper', name: 'Chilli & Pepper', moveCount: 0 },
      { id: 'death-mask', name: 'Death Mask', moveCount: 0 },
      { id: 'kapila', name: 'Kapila', moveCount: 0 },
      { id: 'mushira', name: 'Mushira', moveCount: 0 },
      { id: 'naga', name: 'Naga', moveCount: 0 },
      { id: 'orochimaru', name: 'Orochimaru', moveCount: 0 },
      { id: 'sky-high', name: 'Sky High', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'blazblue-central-fiction',

    mameRomset: "",

    name: "BlazBlue: Central Fiction",
    tagline: "Rebel 1, Action!",

    developer: "Arc System Works",

    releaseYear: 2015,
    platform: "Arcade, PS3, PS4, PC, Switch",

rosterCount: 35,

            tags: ['Anime', '2D'],

    
    systemMechanics: [
      { name: 'Overdrive', description: 'Unique power-up per character. Duration scales inversely with remaining health.' , input: 'A+B+C+D' },
      { name: 'Rapid Cancel', description: 'Cancel any move on hit for 50% Heat gauge.' , input: 'A+B+C' },
      { name: 'Barrier Guard', description: 'Block without chip damage. Costs Barrier gauge.' , input: '4+A+B' },
      { name: 'Burst', description: 'Break free from combos. Recharges slowly.' , input: 'A+B+C+D' },
      { name: 'Counter Assault', description: 'Counter-attack while blocking.' , input: '6+A+B (blocking)' },
      { name: 'Crush Trigger', description: 'Unblockable attack that costs 25% Heat.' , input: 'A+B' },
      { name: 'Exceed Accel', description: 'Powerful attack available only during Overdrive.' , input: 'A+B+C+D (in OD)' },
      { name: 'Distortion Drive', description: 'Super moves costing 50% Heat gauge.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'blazblue-cross-tag-battle',

    mameRomset: "",

    name: "BlazBlue: Cross Tag Battle",
    tagline: "Can't Escape From Crossing Fate",

    developer: "Arc System Works",

    releaseYear: 2018,
    platform: "PS4, PC, Switch",

rosterCount: 40,

        
    systemMechanics: [
      { name: 'Cross Combo', description: 'Both characters attack simultaneously for extended pressure.' , input: '5P (with partner)' },
      { name: 'Resonance Blaze', description: 'Power-up when one partner is KO\'d. Health regen and enhanced moves.' , input: 'P+Tag' },
      { name: 'Reject Guard', description: 'Push the opponent away while blocking.' , input: 'A+D (blocking)' },
      { name: 'Assists', description: 'Call your partner for assist attacks during combos and neutral.'  },
      { name: 'Cross Burst', description: 'Tag-in reversal that breaks combos.' , input: 'P+Tag (while hit)' },
      { name: 'Clash Assault', description: 'Universal auto-combo starter.' , input: 'A (mash)' },
      { name: 'Distortion Skill', description: 'Super moves. Can be chained with partner supers for Duo finishers.'  },
      { name: 'Tag', description: 'Switch between your two characters freely.'  }
    ],

    characters: [
      { id: 'adachi', name: 'Adachi', moveCount: 0 },
      { id: 'akatsuki', name: 'Akatsuki', moveCount: 0 },
      { id: 'akihiko', name: 'Akihiko', moveCount: 0 },
      { id: 'blake', name: 'Blake', moveCount: 0 },
      { id: 'carmine', name: 'Carmine', moveCount: 0 },
      { id: 'chie', name: 'Chie', moveCount: 0 },
      { id: 'elizabeth', name: 'Elizabeth', moveCount: 0 },
      { id: 'gordeau', name: 'Gordeau', moveCount: 0 },
      { id: 'hakumen', name: 'Hakumen', moveCount: 0 },
      { id: 'hazama', name: 'Hazama', moveCount: 0 },
      { id: 'heart', name: 'Heart', moveCount: 0 },
      { id: 'hilda', name: 'Hilda', moveCount: 0 },
      { id: 'hyde', name: 'Hyde', moveCount: 0 },
      { id: 'iron-tager', name: 'Iron Tager', moveCount: 0 },
      { id: 'izayoi', name: 'Izayoi', moveCount: 0 },
      { id: 'jubei', name: 'Jubei', moveCount: 0 },
      { id: 'kanji', name: 'Kanji', moveCount: 0 },
      { id: 'labrys', name: 'Labrys', moveCount: 0 },
      { id: 'linne', name: 'Linne', moveCount: 0 },
      { id: 'mai', name: 'Mai', moveCount: 0 },
      { id: 'makoto', name: 'Makoto', moveCount: 0 },
      { id: 'merkava', name: 'Merkava', moveCount: 0 },
      { id: 'mitsuru', name: 'Mitsuru', moveCount: 0 },
      { id: 'naoto-shirogane', name: 'Naoto Shirogane', moveCount: 0 },
      { id: 'nine', name: 'Nine', moveCount: 0 },
      { id: 'noel', name: 'Noel', moveCount: 0 },
      { id: 'nu-13', name: 'Nu-13', moveCount: 0 },
      { id: 'orie', name: 'Orie', moveCount: 0 },
      { id: 'platinum', name: 'Platinum', moveCount: 0 },
      { id: 'rachel', name: 'Rachel', moveCount: 0 },
      { id: 'ragna', name: 'Ragna', moveCount: 0 },
      { id: 'ruby', name: 'Ruby', moveCount: 0 },
      { id: 'seth', name: 'Seth', moveCount: 0 },
      { id: 'vatista', name: 'Vatista', moveCount: 0 },
      { id: 'waldstein', name: 'Waldstein', moveCount: 0 },
      { id: 'weiss', name: 'Weiss', moveCount: 0 },
      { id: 'yang', name: 'Yang', moveCount: 0 },
      { id: 'yosuke', name: 'Yosuke', moveCount: 0 },
      { id: 'yu', name: 'Yu', moveCount: 0 },
      { id: 'yumi', name: 'Yumi', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'bloody-roar',

    mameRomset: "",

    name: "Bloody Roar",
    tagline: "Enter the Arena",

    developer: "Hudson Soft",

    releaseYear: 1997,

    platform: "Arcade, PS1, PC",

rosterCount: 8,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'bloody-roar-2',

    mameRomset: "",

    name: "Bloody Roar 2",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1997,

    platform: "Arcade PlayStation, PC",

rosterCount: 8,

        characters: [
      { id: 'alice', name: 'Alice', moveCount: 0 },
      { id: 'bakuryu', name: 'Bakuryu', moveCount: 0 },
      { id: 'fox', name: 'Fox', moveCount: 0 },
      { id: 'gado', name: 'Gado', moveCount: 0 },
      { id: 'greg', name: 'Greg', moveCount: 0 },
      { id: 'long', name: 'Long', moveCount: 0 },
      { id: 'mitsuko', name: 'Mitsuko', moveCount: 0 },
      { id: 'yugo', name: 'Yugo', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'bloody-roar-2-bringer-of-the-new-age',

    mameRomset: "",

    name: "Bloody Roar 2: Bringer of the New Age",
    tagline: "Enter the Arena",

    developer: "Hudson Soft",

    releaseYear: 1999,

    platform: "Arcade, PS1, PC",

rosterCount: 10,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'bloody-roar-3',

    mameRomset: "",

    name: "Bloody Roar 3",
    tagline: "Enter the Arena",

    developer: "Hudson Soft",

    releaseYear: 2001,

    platform: "Arcade, PS2, PC",

rosterCount: 13,

        characters: [
      { id: 'alice', name: 'Alice', moveCount: 0 },
      { id: 'bakuryu', name: 'Bakuryu', moveCount: 0 },
      { id: 'busuzima', name: 'Busuzima', moveCount: 0 },
      { id: 'gado', name: 'Gado', moveCount: 0 },
      { id: 'jenny', name: 'Jenny', moveCount: 0 },
      { id: 'kohryu', name: 'Kohryu', moveCount: 0 },
      { id: 'long', name: 'Long', moveCount: 0 },
      { id: 'shina', name: 'Shina', moveCount: 0 },
      { id: 'stun', name: 'Stun', moveCount: 0 },
      { id: 'uriko', name: 'Uriko', moveCount: 0 },
      { id: 'uranus', name: 'Uranus', moveCount: 0 },
      { id: 'xion', name: 'Xion', moveCount: 0 },
      { id: 'yugo', name: 'Yugo', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'bloody-roar-4',

    mameRomset: "",

    name: "Bloody Roar 4",
    tagline: "Enter the Arena",

    developer: "Hudson Soft",

    releaseYear: 2003,

    platform: "PS2, PC",

rosterCount: 17,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'bloody-roar-primal-fury--extreme',

    mameRomset: "",

    name: "Bloody Roar: Primal Fury / Extreme",
    tagline: "Enter the Arena",

    developer: "Hudson Soft",

    releaseYear: 1997,

    platform: "Arcade PlayStation, PC",

rosterCount: 8,

        characters: [
      { id: 'alice', name: 'Alice', moveCount: 0 },
      { id: 'bakuryu', name: 'Bakuryu', moveCount: 0 },
      { id: 'busuzima', name: 'Busuzima', moveCount: 0 },
      { id: 'cronos', name: 'Cronos', moveCount: 0 },
      { id: 'fang', name: 'Fang', moveCount: 0 },
      { id: 'gado', name: 'Gado', moveCount: 0 },
      { id: 'ganesha', name: 'Ganesha', moveCount: 0 },
      { id: 'jenny', name: 'Jenny', moveCount: 0 },
      { id: 'kohryu', name: 'Kohryu', moveCount: 0 },
      { id: 'long', name: 'Long', moveCount: 0 },
      { id: 'shina', name: 'Shina', moveCount: 0 },
      { id: 'stun', name: 'Stun', moveCount: 0 },
      { id: 'uriko', name: 'Uriko', moveCount: 0 },
      { id: 'uranus', name: 'Uranus', moveCount: 0 },
      { id: 'xion', name: 'Xion', moveCount: 0 },
      { id: 'yugo', name: 'Yugo', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'breakers-revenge',

    mameRomset: "",

    name: "Breakers Revenge",
    tagline: "Enter the Arena",

    developer: "Visco",

    releaseYear: 1998,

    platform: "Arcade, PC",

rosterCount: 10,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'capcom-fighting-jam',

    mameRomset: "",

    name: "Capcom Fighting Jam",
    tagline: "Worlds Collide",

    developer: "Capcom",

    releaseYear: 2004,
    platform: "Arcade, PS2, Xbox, PC",

rosterCount: 19,

        
    systemMechanics: [
      { name: 'Multi-System', description: 'Characters retain mechanics from their original games (SF2, Alpha, SF3, Darkstalkers, Red Earth).'  },
      { name: 'Parry (SF3 chars)', description: 'SF3 characters can parry. Alpha chars have custom combos. Darkstalkers have chains.'  },
      { name: 'Super Combo', description: 'Universal super gauge shared across all character types.'  },
      { name: 'Guard Cancel', description: 'Counter-attack while blocking at meter cost.'  },
      { name: 'Tag System', description: 'Two characters per team. Switch between rounds.'  },
      { name: 'Cross-System', description: 'Mix characters from different Capcom universes.'  },
      { name: 'Chain Combo', description: 'Darkstalkers characters retain chain combo ability.'  },
      { name: 'Custom Combo', description: 'Alpha characters can activate free-form custom combos.'  }
    ],

    characters: [
        { id: 'ryu', name: 'Ryu', moveCount: 0 },
        { id: 'guile', name: 'Guile', moveCount: 0 },
        { id: 'chun-li', name: 'Chun Li', moveCount: 0 },
        { id: 'mbison', name: 'Mbison', moveCount: 0 },
        { id: 'zangief', name: 'Zangief', moveCount: 0 },
        { id: 'alex', name: 'Alex', moveCount: 0 },
        { id: 'urien', name: 'Urien', moveCount: 0 },
        { id: 'yun', name: 'Yun', moveCount: 0 },
        { id: 'chun-li-3s', name: 'Chun Li 3s', moveCount: 0 },
        { id: 'felicia', name: 'Felicia', moveCount: 0 },
        { id: 'demitri', name: 'Demitri', moveCount: 0 },
        { id: 'jedah', name: 'Jedah', moveCount: 0 },
        { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
        { id: 'leo', name: 'Leo', moveCount: 0 },
        { id: 'hauzer', name: 'Hauzer', moveCount: 0 },
        { id: 'mukuro', name: 'Mukuro', moveCount: 0 },
        { id: 'nool', name: 'Nool', moveCount: 0 },
        { id: 'guy', name: 'Guy', moveCount: 0 },
        { id: 'karin', name: 'Karin', moveCount: 0 },
        { id: 'sakura', name: 'Sakura', moveCount: 0 },
        { id: 'rose', name: 'Rose', moveCount: 0 },
        { id: 'ingrid', name: 'Ingrid', moveCount: 0 },
        { id: 'shin-akuma', name: 'Shin Akuma', moveCount: 0 }
      ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'capcom-vs-snk-2-mark-of-the-millennium-2001',

    mameRomset: "",

    name: "Capcom vs. SNK 2: Mark of the Millennium 2001",
    searchAliases: ['cvs2'],
    tagline: "It's Mahvel Baby!",

    developer: "Capcom",

    releaseYear: 2001,
    platform: "Arcade, PS2, GC, Xbox, DC, PC",

rosterCount: 44,

            tags: ['Golden', '2D'],

    
    systemMechanics: [
      { name: 'Groove System', description: 'Choose from 6 Grooves (C, A, P, S, N, K) that determine your super meter, defensive options, and movement style.'  },
      { name: 'C-Groove', description: 'SF Alpha 3 A-ISM style. Level 1-3 supers, air block, tactical recovery. The most balanced groove.'  },
      { name: 'A-Groove', description: 'Custom Combo groove. Activate to chain any normals and specials freely for devastating damage.' , input: 'HP+HK at MAX' },
      { name: 'P-Groove', description: 'Street Fighter III parry style. Tap forward to parry attacks. Single-level super that must be charged.' , input: '6 (tap on hit timing)' },
      { name: 'S-Groove', description: 'KOF charge style. Manual charge by holding HP+HK. Infinite-level supers when in low health Rage mode.'  },
      { name: 'N-Groove', description: 'KOF MAX mode. Counter Movement, low/high jump. MAX activation for powered-up specials.'  },
      { name: 'K-Groove', description: 'Samurai Shodown rage style. Gauge fills when taking damage. Just Defend for recovery frames.' , input: '4 (tap on block timing)' },
      { name: 'Ratio System', description: 'Build a team with a total of 4 ratio points. Higher ratio = more health/damage. Allows 1-4 characters per team.'  }
    ],

    characters: [
        { id: 'ryu', name: 'Ryu', moveCount: 0 },
        { id: 'ken', name: 'Ken', moveCount: 0 },
        { id: 'chun-li', name: 'Chun Li', moveCount: 0 },
        { id: 'guile', name: 'Guile', moveCount: 0 },
        { id: 'zangief', name: 'Zangief', moveCount: 0 },
        { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
        { id: 'ehonda', name: 'Ehonda', moveCount: 0 },
        { id: 'blanka', name: 'Blanka', moveCount: 0 },
        { id: 'balrog', name: 'Balrog', moveCount: 0 },
        { id: 'vega', name: 'Vega', moveCount: 0 },
        { id: 'sagat', name: 'Sagat', moveCount: 0 },
        { id: 'mbison', name: 'Mbison', moveCount: 0 },
        { id: 'sakura', name: 'Sakura', moveCount: 0 },
        { id: 'cammy', name: 'Cammy', moveCount: 0 },
        { id: 'akuma', name: 'Akuma', moveCount: 0 },
        { id: 'dan', name: 'Dan', moveCount: 0 },
        { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
        { id: 'maki', name: 'Maki', moveCount: 0 },
        { id: 'eagle', name: 'Eagle', moveCount: 0 },
        { id: 'yun', name: 'Yun', moveCount: 0 },
        { id: 'kyosuke', name: 'Kyosuke', moveCount: 0 },
        { id: 'rolento', name: 'Rolento', moveCount: 0 },
        { id: 'evil-ryu', name: 'Evil Ryu', moveCount: 0 },
        { id: 'shin-akuma', name: 'Shin Akuma', moveCount: 0 },
        { id: 'kyo', name: 'Kyo', moveCount: 0 },
        { id: 'iori', name: 'Iori', moveCount: 0 },
        { id: 'terry', name: 'Terry', moveCount: 0 },
        { id: 'ryo', name: 'Ryo', moveCount: 0 },
        { id: 'mai', name: 'Mai', moveCount: 0 },
        { id: 'kim', name: 'Kim', moveCount: 0 },
        { id: 'geese', name: 'Geese', moveCount: 0 },
        { id: 'yamazaki', name: 'Yamazaki', moveCount: 0 },
        { id: 'raiden', name: 'Raiden', moveCount: 0 },
        { id: 'rugal', name: 'Rugal', moveCount: 0 },
        { id: 'vice', name: 'Vice', moveCount: 0 },
        { id: 'benimaru', name: 'Benimaru', moveCount: 0 },
        { id: 'yuri', name: 'Yuri', moveCount: 0 },
        { id: 'king', name: 'King', moveCount: 0 },
        { id: 'joe', name: 'Joe', moveCount: 0 },
        { id: 'athena', name: 'Athena', moveCount: 0 },
        { id: 'nakoruru', name: 'Nakoruru', moveCount: 0 },
        { id: 'hibiki', name: 'Hibiki', moveCount: 0 },
        { id: 'haohmaru', name: 'Haohmaru', moveCount: 0 },
        { id: 'rock', name: 'Rock', moveCount: 0 },
        { id: 'chang', name: 'Chang', moveCount: 0 },
        { id: 'blood-iori', name: 'Blood Iori', moveCount: 0 },
        { id: 'god-rugal', name: 'God Rugal', moveCount: 0 }
      ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'capcom-vs-snk-millennium-fight-2000-pro',

    mameRomset: "",

    name: "Capcom vs. SNK: Millennium Fight 2000 Pro",
    tagline: "It's Mahvel Baby!",

    developer: "Capcom",

    releaseYear: 2001,
    platform: "Arcade, PS1, DC, PC",

rosterCount: 29,

        
    systemMechanics: [
      { name: 'Ratio System', description: 'Assign ratio points (1-4) to build a balanced team.'  },
      { name: 'Groove Select', description: 'Choose Capcom or SNK groove for different meter and defensive systems.'  },
      { name: 'Capcom Groove', description: 'SF Alpha style. Multi-level supers, air block, alpha counter.'  },
      { name: 'SNK Groove', description: 'KOF style. Charge meter, MAX mode, dodge/roll.'  },
      { name: 'Roll', description: 'Invincible evasion roll (SNK groove).' , input: 'AB' },
      { name: 'Alpha Counter', description: 'Counter from block (Capcom groove).'  },
      { name: 'Super Combos', description: 'Powerful supers that vary by groove.'  },
      { name: 'Finest KO', description: 'Special KO animation for finishing with a super.'  }
    ],

    characters: [
        { id: 'ryu', name: 'Ryu', moveCount: 0 },
        { id: 'ken', name: 'Ken', moveCount: 0 },
        { id: 'chun-li', name: 'Chun Li', moveCount: 0 },
        { id: 'guile', name: 'Guile', moveCount: 0 },
        { id: 'zangief', name: 'Zangief', moveCount: 0 },
        { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
        { id: 'ehonda', name: 'Ehonda', moveCount: 0 },
        { id: 'blanka', name: 'Blanka', moveCount: 0 },
        { id: 'balrog', name: 'Balrog', moveCount: 0 },
        { id: 'vega', name: 'Vega', moveCount: 0 },
        { id: 'sagat', name: 'Sagat', moveCount: 0 },
        { id: 'mbison', name: 'Mbison', moveCount: 0 },
        { id: 'sakura', name: 'Sakura', moveCount: 0 },
        { id: 'cammy', name: 'Cammy', moveCount: 0 },
        { id: 'akuma', name: 'Akuma', moveCount: 0 },
        { id: 'dan', name: 'Dan', moveCount: 0 },
        { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
        { id: 'kyo', name: 'Kyo', moveCount: 0 },
        { id: 'iori', name: 'Iori', moveCount: 0 },
        { id: 'terry', name: 'Terry', moveCount: 0 },
        { id: 'ryo', name: 'Ryo', moveCount: 0 },
        { id: 'mai', name: 'Mai', moveCount: 0 },
        { id: 'kim', name: 'Kim', moveCount: 0 },
        { id: 'geese', name: 'Geese', moveCount: 0 },
        { id: 'yamazaki', name: 'Yamazaki', moveCount: 0 },
        { id: 'raiden', name: 'Raiden', moveCount: 0 },
        { id: 'rugal', name: 'Rugal', moveCount: 0 },
        { id: 'vice', name: 'Vice', moveCount: 0 },
        { id: 'benimaru', name: 'Benimaru', moveCount: 0 },
        { id: 'yuri', name: 'Yuri', moveCount: 0 },
        { id: 'king', name: 'King', moveCount: 0 },
        { id: 'joe', name: 'Joe', moveCount: 0 },
        { id: 'nakoruru', name: 'Nakoruru', moveCount: 0 },
        { id: 'blood-iori', name: 'Blood Iori', moveCount: 0 }
      ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'cyberbots-full-metal-madness',

    mameRomset: "",

    name: "Cyberbots: Full Metal Madness",
    tagline: "Enter the Arena",

    developer: "Capcom",

    releaseYear: 1995,
    platform: "Arcade, Saturn, PS1, PC, PS4, Switch, Xbox One",

rosterCount: 12,

        
    systemMechanics: [
      { name: 'Mech Combat', description: 'Pilot giant mecha. Each mech has unique weapons and mobility.'  },
      { name: 'Boost Dash', description: 'Air and ground dashes for fast mech movement.'  },
      { name: 'Weapon Arms', description: 'Interchangeable arm weapons change your moveset.'  },
      { name: 'Mega Crash', description: 'Burst out of combos at the cost of health.' , input: 'All buttons' },
      { name: 'Chain Combo', description: 'Chain normals together for mech combat combos.'  },
      { name: 'Super Move', description: 'Powerful mech super attacks at full meter.'  },
      { name: 'Air Combat', description: 'Full air combo and juggle system for mecha.'  },
      { name: 'Parts Damage', description: 'Specific mech parts can be damaged, affecting abilities.'  }
    ],

    characters: [
      { id: 'blodia', name: 'Blodia', moveCount: 0 },
      { id: 'reptos', name: 'Reptos', moveCount: 0 },
      { id: 'ford', name: 'Ford', moveCount: 0 },
      { id: 'lightning', name: 'Lightning', moveCount: 0 },
      { id: 'swordsman', name: 'Swordsman', moveCount: 0 },
      { id: 'jackal', name: 'Jackal', moveCount: 0 },
      { id: 'killer-bee', name: 'Killer Bee', moveCount: 0 },
      { id: 'tarantula', name: 'Tarantula', moveCount: 0 },
      { id: 'veritas', name: 'Veritas', moveCount: 0 },
      { id: 'helion', name: 'Helion', moveCount: 0 },
      { id: 'super-8', name: 'Super 8', moveCount: 0 },
      { id: 'gaits', name: 'Gaits', moveCount: 0 },
      { id: 'warlock', name: 'Warlock', moveCount: 0 },
      { id: 'vishnu', name: 'Vishnu', moveCount: 0 },
      { id: 'rioto', name: 'Rioto', moveCount: 0 },
      { id: 'mech-gouki', name: 'Mech Gouki', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'darkstalkers-the-night-warriors',

    mameRomset: "",

    name: "Darkstalkers: The Night Warriors",
    tagline: "The Night Warriors",

    developer: "Capcom",

    releaseYear: 1994,
    platform: "Arcade, PS1, PC, PS4, Switch, Xbox One",

rosterCount: 11,

        
    systemMechanics: [
      { name: 'Chain Combos', description: 'Link normals from light to heavy in rapid chains. Pioneered by this game.'  },
      { name: 'ES Moves', description: 'Enhanced specials using super meter. More hits, damage, and new properties.'  },
      { name: 'EX Specials', description: 'Powerful super moves that cost full meter gauge.'  },
      { name: 'Pursuit Attack', description: 'OTG attack on downed opponents for extra damage.' , input: '2+HP (near downed)' },
      { name: 'Push Block', description: 'Push the opponent away while blocking to escape pressure.' , input: 'PP (blocking)' },
      { name: 'Air Block', description: 'Block attacks while airborne. Standard Darkstalkers defensive option.'  },
      { name: 'Dash', description: 'Forward and back dashes with character-specific properties. Some fly.'  },
      { name: 'Guard Cancel', description: 'Counter-attack from blockstun. Costs meter.'  }
    ],

    characters: [
      { id: 'demitri', name: 'Demitri', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'jon-talbain', name: 'Jon Talbain', moveCount: 0 },
      { id: 'lord-raptor', name: 'Lord Raptor', moveCount: 0 },
      { id: 'victor', name: 'Victor', moveCount: 0 },
      { id: 'rikuo', name: 'Rikuo', moveCount: 0 },
      { id: 'sasquatch', name: 'Sasquatch', moveCount: 0 },
      { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
      { id: 'bishamon', name: 'Bishamon', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'hutzil', name: 'Hutzil', moveCount: 0 },
      { id: 'pyron', name: 'Pyron', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'dead-or-alive',

    mameRomset: "",

    name: "Dead or Alive",
    tagline: "Enter the Arena",

    developer: "Tecmo",

    releaseYear: 1996,

    platform: "Arcade, Saturn, PS1, PC",

rosterCount: 10,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'dead-or-alive-2',

    mameRomset: "",

    name: "Dead or Alive 2",
    tagline: "Enter the Arena",

    developer: "Tecmo",

    releaseYear: 1999,

    platform: "Arcade, DC, PS2, PC",

rosterCount: 14,

        characters: [
      { id: 'ayane', name: 'Ayane', moveCount: 0 },
      { id: 'bass', name: 'Bass', moveCount: 0 },
      { id: 'bayman', name: 'Bayman', moveCount: 0 },
      { id: 'ein', name: 'Ein', moveCount: 0 },
      { id: 'gen-fu', name: 'Gen Fu', moveCount: 0 },
      { id: 'helena', name: 'Helena', moveCount: 0 },
      { id: 'jann-lee', name: 'Jann Lee', moveCount: 0 },
      { id: 'kasumi', name: 'Kasumi', moveCount: 0 },
      { id: 'leon', name: 'Leon', moveCount: 0 },
      { id: 'lei-fang', name: 'Lei Fang', moveCount: 0 },
      { id: 'ryu-hayabusa', name: 'Ryu Hayabusa', moveCount: 0 },
      { id: 'tengu', name: 'Tengu', moveCount: 0 },
      { id: 'tina', name: 'Tina', moveCount: 0 },
      { id: 'zack', name: 'Zack', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'dead-or-alive-3',

    mameRomset: "",

    name: "Dead or Alive 3",
    tagline: "Enter the Arena",

    developer: "Tecmo",

    releaseYear: 2001,

    platform: "Xbox, PC",

rosterCount: 17,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'dead-or-alive-4',

    mameRomset: "",

    name: "Dead or Alive 4",
    tagline: "Enter the Arena",

    developer: "Tecmo",

    releaseYear: 2005,

    platform: "Xbox 360, PC",

rosterCount: 25,

        characters: [
      { id: 'ayane', name: 'Ayane', moveCount: 0 },
      { id: 'bass', name: 'Bass', moveCount: 0 },
      { id: 'bayman', name: 'Bayman', moveCount: 0 },
      { id: 'brad-wong', name: 'Brad Wong', moveCount: 0 },
      { id: 'christie', name: 'Christie', moveCount: 0 },
      { id: 'ein', name: 'Ein', moveCount: 0 },
      { id: 'eliot', name: 'Eliot', moveCount: 0 },
      { id: 'gen-fu', name: 'Gen Fu', moveCount: 0 },
      { id: 'hayate', name: 'Hayate', moveCount: 0 },
      { id: 'helena', name: 'Helena', moveCount: 0 },
      { id: 'hitomi', name: 'Hitomi', moveCount: 0 },
      { id: 'jann-lee', name: 'Jann Lee', moveCount: 0 },
      { id: 'kasumi', name: 'Kasumi', moveCount: 0 },
      { id: 'kokoro', name: 'Kokoro', moveCount: 0 },
      { id: 'la-mariposa', name: 'La Mariposa', moveCount: 0 },
      { id: 'leon', name: 'Leon', moveCount: 0 },
      { id: 'lei-fang', name: 'Lei Fang', moveCount: 0 },
      { id: 'nicole-458', name: 'Nicole-458', moveCount: 0 },
      { id: 'ryu-hayabusa', name: 'Ryu Hayabusa', moveCount: 0 },
      { id: 'spartan-458', name: 'Spartan-458', moveCount: 0 },
      { id: 'tina', name: 'Tina', moveCount: 0 },
      { id: 'zack', name: 'Zack', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'dead-or-alive-5',

    mameRomset: "",

    name: "Dead or Alive 5",
    tagline: "Enter the Arena",

    developer: "Tecmo",

    releaseYear: 2012,

    platform: "PS3, Xbox 360, PC",

rosterCount: 29,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'dead-or-alive-6',

    mameRomset: "",

    name: "Dead or Alive 6",
    tagline: "Enter the Arena",

    developer: "Tecmo",

    releaseYear: 2019,

    platform: "PS4, Xbox One, PC",

rosterCount: 29,

        characters: [
      { id: 'ayane', name: 'Ayane', moveCount: 0 },
      { id: 'bass', name: 'Bass', moveCount: 0 },
      { id: 'bayman', name: 'Bayman', moveCount: 0 },
      { id: 'brad-wong', name: 'Brad Wong', moveCount: 0 },
      { id: 'christie', name: 'Christie', moveCount: 0 },
      { id: 'diego', name: 'Diego', moveCount: 0 },
      { id: 'eliot', name: 'Eliot', moveCount: 0 },
      { id: 'hayate', name: 'Hayate', moveCount: 0 },
      { id: 'helena', name: 'Helena', moveCount: 0 },
      { id: 'hitomi', name: 'Hitomi', moveCount: 0 },
      { id: 'honoka', name: 'Honoka', moveCount: 0 },
      { id: 'jann-lee', name: 'Jann Lee', moveCount: 0 },
      { id: 'kasumi', name: 'Kasumi', moveCount: 0 },
      { id: 'kokoro', name: 'Kokoro', moveCount: 0 },
      { id: 'kula-diamond', name: 'Kula Diamond', moveCount: 0 },
      { id: 'la-mariposa', name: 'La Mariposa', moveCount: 0 },
      { id: 'leifang', name: 'Lei Fang', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'marie-rose', name: 'Marie Rose', moveCount: 0 },
      { id: 'mila', name: 'Mila', moveCount: 0 },
      { id: 'nico', name: 'NiCO', moveCount: 0 },
      { id: 'nyotengu', name: 'Nyotengu', moveCount: 0 },
      { id: 'phase-4', name: 'Phase 4', moveCount: 0 },
      { id: 'rachel', name: 'Rachel', moveCount: 0 },
      { id: 'rig', name: 'Rig', moveCount: 0 },
      { id: 'ryu-hayabusa', name: 'Ryu Hayabusa', moveCount: 0 },
      { id: 'tamaki', name: 'Tamaki', moveCount: 0 },
      { id: 'tina', name: 'Tina', moveCount: 0 },
      { id: 'zack', name: 'Zack', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'dnf-duel',

    mameRomset: "",

    name: "DNF Duel",
    tagline: "Action RPG Meets Fighting",

    developer: "Arc System Works",

    releaseYear: 2022,

    platform: "PS4, PS5, PC, Xbox One, Switch",

rosterCount: 16,

        
    systemMechanics: [
      { name: 'MP System', description: 'Mana Points power special moves. Depletes on use, regenerates over time.'  },
      { name: 'Conversion', description: 'Spend white health to instantly recover MP.' , input: 'B+S' },
      { name: 'Awakening', description: 'At low health, gain access to Awakening Skill — a powerful super move.'  },
      { name: 'Guard Cancel', description: 'Counter-attack while blocking. Costs MP.' , input: '6+S (blocking)' },
      { name: 'Simple Inputs', description: 'No motion inputs required. Specials are performed with direction + button.'  },
      { name: 'White Health', description: 'Blocked attacks create white/recoverable health. Aggressive play recovers it.'  },
      { name: 'Skill Moves', description: 'Character-specific specials mapped to the S button + directions.'  },
      { name: 'Dodge', description: 'Quick sidestep with invincibility.' , input: 'B+M' }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },


  {

    id: 'fatal-fury-2',

    mameRomset: "",

    name: "Fatal Fury 2",
    tagline: "Hey, c'mon c'mon!",

    developer: "SNK",

    releaseYear: 1992,

    platform: "Arcade, NeoGeo, SNES, Genesis, PC",

rosterCount: 11,

        
    systemMechanics: [
      { name: 'Line System', description: 'Two-plane fighting. Switch between foreground and background to dodge attacks.' , input: 'A+B' },
      { name: 'Desperation Move', description: 'Powerful super available only when health is critical (flashing).'  },
      { name: 'Power Wave', description: 'Projectile attacks and anti-air specials are key to neutral game.'  },
      { name: 'Knockdown', description: 'Hard knockdowns give okizeme advantage for follow-up pressure.'  },
      { name: 'Throw', description: 'Close-range throws with character-specific animations and damage.'  },
      { name: 'Overhead', description: 'Attacks that must be blocked standing.'  },
      { name: 'Special Moves', description: 'Quarter-circle, charge, and pretzel motion inputs for special attacks.'  },
      { name: 'Plane Attack', description: 'Attack while switching planes for a surprise strike.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'fatal-fury-3-road-to-the-final-victory',

    mameRomset: "",

    name: "Fatal Fury 3: Road to the Final Victory",
    tagline: "Hey, c'mon c'mon!",

    developer: "SNK",

    releaseYear: 1995,

    platform: "Arcade, NeoGeo, Saturn, PC",

rosterCount: 12,

        
    systemMechanics: [
      { name: 'Oversway', description: 'Dodge into the background or foreground with invincibility.' , input: 'AB' },
      { name: 'Combination Arts', description: 'Chain specific normals together for combo strings.'  },
      { name: 'Desperation Move', description: 'Super available at low health. High damage finisher.'  },
      { name: 'Hidden Abilities', description: 'Secret supers with specific activation conditions.'  },
      { name: 'Pursuit Attack', description: 'Attack downed opponents for extra damage.'  },
      { name: 'Safe Fall', description: 'Recover quickly from knockdowns.'  },
      { name: 'Just Frame', description: 'Certain moves have enhanced versions with precise timing.'  },
      { name: 'Guard Cancel', description: 'Counter-attack during blockstun.'  }
    ],

    characters: [
      { id: 'andy-bogard', name: 'Andy Bogard', moveCount: 0 },
      { id: 'blue-mary', name: 'Blue Mary', moveCount: 0 },
      { id: 'bob-wilson', name: 'Bob Wilson', moveCount: 0 },
      { id: 'franco-bash', name: 'Franco Bash', moveCount: 0 },
      { id: 'hon-fu', name: 'Hon-Fu', moveCount: 0 },
      { id: 'jin-chonrei', name: 'Jin Chonrei', moveCount: 0 },
      { id: 'jin-chonshu', name: 'Jin Chonshu', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'ryuji-yamazaki', name: 'Ryuji Yamazaki', moveCount: 0 },
      { id: 'sokaku-mochizuki', name: 'Sokaku Mochizuki', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'fatal-fury-special',

    mameRomset: "",

    name: "Fatal Fury Special",
    tagline: "The Special Bout",

    developer: "SNK",

    releaseYear: 1993,

    platform: "Arcade, NeoGeo, SNES, Genesis, PC",

rosterCount: 16,

        
    systemMechanics: [
      { name: 'Line System', description: 'Two-plane fighting. Dodge to the background plane to avoid attacks.' , input: 'A+B' },
      { name: 'Desperation Move', description: 'Powerful super available only when health is flashing red.'  },
      { name: 'Power Gauge', description: 'Meter that fills over time and from taking damage.'  },
      { name: 'Plane Attack', description: 'Attack while transitioning between planes.'  },
      { name: 'Throw', description: 'Character-specific throws with varying range and damage.'  },
      { name: 'Knockdown Recovery', description: 'Quick recovery from knockdowns to reset neutral.'  },
      { name: 'Special Moves', description: 'Character-unique specials with traditional motion inputs.'  },
      { name: 'Boss Characters', description: 'Hidden boss characters playable with specific codes.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'fatal-fury-city-of-the-wolves',

    mameRomset: "",

    name: "City Of The Wolves",
    tagline: "Enter the Arena",

    developer: "SNK",

    releaseYear: 2025,

    platform: "PS4, PS5, PC, Xbox Series X/S",

rosterCount: 18,

        
    systemMechanics: [
      { name: 'REV System', description: 'S.P.G. gauge powers REV Arts, REV Accel, and REV Guard for offense and defense.'  },
      { name: 'REV Arts', description: 'Enhanced super moves with cinematic damage. Costs REV gauge.'  },
      { name: 'REV Accel', description: 'Cancel specials into other moves for combo extensions.' , input: 'S+HS' },
      { name: 'REV Guard', description: 'Advanced blocking technique with reduced blockstun.'  },
      { name: 'Just Defend', description: 'Precise block timing for meter gain and frame advantage.' , input: '4 (precise)' },
      { name: 'T.O.P. Attack', description: 'Unique attack available when health is in the T.O.P. zone.'  },
      { name: 'Guard Cancel', description: 'Counter-attack from blockstun at meter cost.'  },
      { name: 'Smart Combo', description: 'Simplified auto-combo for accessibility.'  }
    ],

    characters: [
      { id: 'andy-bogard', name: 'Andy Bogard', moveCount: 0 },
      { id: 'b-jenet', name: 'B. Jenet', moveCount: 0 },
      { id: 'billy-kane', name: 'Billy Kane', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'cristiano-ronaldo', name: 'Cristiano Ronaldo', moveCount: 0 },
      { id: 'gato', name: 'Gato', moveCount: 0 },
      { id: 'hotaru-futaba', name: 'Hotaru Futaba', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'ken-masters', name: 'Ken Masters', moveCount: 0 },
      { id: 'kenshiro', name: 'Kenshiro', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'marco-rodrigues', name: 'Marco Rodrigues', moveCount: 0 },
      { id: 'preecha', name: 'Preecha', moveCount: 0 },
      { id: 'rock-howard', name: 'Rock Howard', moveCount: 0 },
      { id: 'salvatore-ganacci', name: 'Salvatore Ganacci', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'tizoc', name: 'Tizoc', moveCount: 0 },
      { id: 'vox-reaper', name: 'Vox Reaper', moveCount: 0 },
      { id: 'wolfgang-krauser', name: 'Wolfgang Krauser', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'fatal-fury-king-of-fighters',

    mameRomset: "",

    name: "Fatal Fury",
    tagline: "Hey, c'mon c'mon!",

    developer: "SNK",

    releaseYear: 1991,

    platform: "Arcade, NeoGeo, SNES, Genesis, PC",

rosterCount: 11,

        
    systemMechanics: [
      { name: 'Line System', description: 'Pioneer of two-plane fighting. Move between foreground and background.' , input: 'A+B' },
      { name: 'Arm Spinning', description: 'Special throw technique unique to certain characters.'  },
      { name: 'Plane Switch', description: 'Dodge attacks by switching to the other plane.'  },
      { name: 'Special Moves', description: 'Character-specific special attacks with motion inputs.'  },
      { name: 'Throw', description: 'Close-range grabs with character-specific animations.'  },
      { name: 'Power Charge', description: 'Build meter for enhanced attacks.'  },
      { name: 'Bonus Games', description: 'Between rounds, bonus stages test timing and skill.'  },
      { name: 'Boss Battle', description: 'Face Geese Howard in the final boss fight at Geese Tower.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'fighters-megamix',

    mameRomset: "",

    name: "Fighters Megamix",
    tagline: "Enter the Arena",

    developer: "Sega",

    releaseYear: 1996,
    platform: "Saturn, PC",

rosterCount: 14,

        characters: [
      { id: 'akira', name: 'Akira', moveCount: 0 },
      { id: 'bean', name: 'Bean', moveCount: 0 },
      { id: 'candy', name: 'Candy', moveCount: 0 },
      { id: 'deku', name: 'Deku', moveCount: 0 },
      { id: 'honey', name: 'Honey', moveCount: 0 },
      { id: 'janet', name: 'Janet', moveCount: 0 },
      { id: 'kids-akira', name: 'Kids Akira', moveCount: 0 },
      { id: 'kids-sarah', name: 'Kids Sarah', moveCount: 0 },
      { id: 'kumachan', name: 'Kumachan', moveCount: 0 },
      { id: 'pai', name: 'Pai', moveCount: 0 },
      { id: 'rent-a-hero', name: 'Rent-A-Hero', moveCount: 0 },
      { id: 'satoru', name: 'Satoru', moveCount: 0 },
      { id: 'shiba', name: 'Shiba', moveCount: 0 },
      { id: 'wolf', name: 'Wolf', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'fighting-ex-layer',

    mameRomset: "",

    name: "Fighting EX Layer",
    tagline: "Enter the Arena",

    developer: "Arika",

    releaseYear: 2018,

    platform: "PS4, PC, Switch, Xbox One",

rosterCount: 14,

        
    systemMechanics: [
      { name: 'Gougi System', description: 'Select a Gougi Deck that grants passive and active buffs during the match.'  },
      { name: 'Gougi Activation', description: 'Meet conditions in-match to unlock powerful Gougi abilities.'  },
      { name: 'Super Combo', description: 'Standard supers costing meter.'  },
      { name: 'Meteor Combo', description: 'Ultimate super costing 3 bars.'  },
      { name: 'Progressive Combo', description: 'Auto-combo system for simplified execution.'  },
      { name: 'Guard Break', description: 'Unblockable at meter cost.'  },
      { name: 'Chain Combo', description: 'Link normals into specials.'  },
      { name: 'Allen Snider', description: 'Returning EX characters with updated movesets from SF EX series.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'fighting-vipers',

    mameRomset: "",

    name: "Fighting Vipers",
    tagline: "Enter the Arena",

    developer: "Sega",

    releaseYear: 1995,

    platform: "Arcade, Saturn, PC",

rosterCount: 7,

        characters: [
      { id: 'bahn', name: 'Bahn', moveCount: 0 },
      { id: 'candy', name: 'Candy', moveCount: 0 },
      { id: 'honey', name: 'Honey', moveCount: 0 },
      { id: 'jane', name: 'Jane', moveCount: 0 },
      { id: 'picky', name: 'Picky', moveCount: 0 },
      { id: 'sanman', name: 'Sanman', moveCount: 0 },
      { id: 'tokio', name: 'Tokio', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'fighting-vipers-2',

    mameRomset: "",

    name: "Fighting Vipers 2",
    tagline: "Enter the Arena",

    developer: "Sega",

    releaseYear: 1998,

    platform: "Arcade, DC, PC",

rosterCount: 9,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'fist-of-the-north-star-hokuto-no-ken',

    mameRomset: "",

    name: "Fist of the North Star (Hokuto no Ken)",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 2005,

    platform: "Arcade, PS2, PC",

rosterCount: 10,

        characters: [
      { id: 'heart', name: 'Heart', moveCount: 0 },
      { id: 'jagi', name: 'Jagi', moveCount: 0 },
      { id: 'judas', name: 'Judas', moveCount: 0 },
      { id: 'kenshiro', name: 'Kenshiro', moveCount: 0 },
      { id: 'mamiya', name: 'Mamiya', moveCount: 0 },
      { id: 'raoh', name: 'Raoh', moveCount: 0 },
      { id: 'rei', name: 'Rei', moveCount: 0 },
      { id: 'shin', name: 'Shin', moveCount: 0 },
      { id: 'souther', name: 'Souther', moveCount: 0 },
      { id: 'toki', name: 'Toki', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'galaxy-fight-universal-warriors',

    mameRomset: "",

    name: "Galaxy Fight: Universal Warriors",
    tagline: "Enter the Arena",

    developer: "Sunsoft",

    releaseYear: 1995,

    platform: "Arcade, NeoGeo, Saturn, PS1, PC",

rosterCount: 9,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'garou-mark-of-the-wolves',

    mameRomset: "garou",

    name: "Garou: Mark of the Wolves",
    tagline: "Mark of the Wolves",

    developer: "SNK",

    releaseYear: 1999,
    platform: "Arcade, NeoGeo, DC, PS2, PC",

rosterCount: 14,

        
    systemMechanics: [
      { name: 'Just Defended', description: 'Tap back at the moment of impact to Just Defend. Recovers health, reduces blockstun, and builds meter.' , input: '4 (tap on impact)' },
      { name: 'T.O.P. System', description: 'Set a T.O.P. zone on your health bar. When health is in that zone, you gain a damage boost, health regen, and T.O.P. Attack.'  },
      { name: 'T.O.P. Attack', description: 'A powerful unique attack available only while in your T.O.P. zone. Different for every character.' , input: 'C+D (in T.O.P.)' },
      { name: 'Feint Cancel', description: 'Cancel the startup of a special move. Used for mind games and frame traps.' , input: 'AC during special startup' },
      { name: 'Guard Cancel', description: 'Perform an attack during blockstun to escape pressure. Costs half a bar of super meter.'  },
      { name: 'Breaking', description: 'Cancel certain special moves into others for extended combos and mixups. Character-specific.'  },
      { name: 'Potential Power', description: 'Super moves. Each character has two supers — one available at any meter level, one only when health is critical.'  },
      { name: 'Small/Large Jump', description: 'Tap up briefly for a short hop or hold for a full jump. Small jumps enable fast overheads and pressure.'  }
    ],

    characters: [
      { id: 'b-jenet', name: 'B. Jenet', moveCount: 0 },
      { id: 'dong-hwan', name: 'Dong Hwan', moveCount: 0 },
      { id: 'freeman', name: 'Freeman', moveCount: 0 },
      { id: 'gato', name: 'Gato', moveCount: 0 },
      { id: 'grant', name: 'Grant', moveCount: 0 },
      { id: 'hokutomaru', name: 'Hokutomaru', moveCount: 0 },
      { id: 'hotaru', name: 'Hotaru', moveCount: 0 },
      { id: 'jae-hoon', name: 'Jae Hoon', moveCount: 0 },
      { id: 'kain', name: 'Kain', moveCount: 0 },
      { id: 'kevin', name: 'Kevin', moveCount: 0 },
      { id: 'marco', name: 'Marco', moveCount: 0 },
      { id: 'rock-howard', name: 'Rock Howard', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'tizoc', name: 'Tizoc', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'golden-axe-the-duel',

    mameRomset: "",

    name: "Golden Axe: The Duel",
    tagline: "Enter the Arena",

    developer: "Sega",

    releaseYear: 1995,

    platform: "Arcade, Saturn, PC",

rosterCount: 8,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'granblue-fantasy-versus-rising',

    mameRomset: "",

    name: "Granblue Fantasy Versus: Rising",
    tagline: "Enter the Arena",

    developer: "Arc System Works",

    releaseYear: 2023,

    platform: "PS4, PS5, PC",

rosterCount: 35,

        
    systemMechanics: [
      { name: 'Cooldown Specials', description: 'Simple inputs (direction+button) for specials with cooldown timers. Motion inputs reduce cooldown.'  },
      { name: 'Skybound Arts (SBA)', description: 'Super moves costing 50% gauge.' , input: '236236+button' },
      { name: 'Super Skybound Arts (SSBA)', description: 'Ultimate super at 100% gauge with cinematic animation.'  },
      { name: 'Brave Counter', description: 'Armored counter-attack at meter cost.' , input: '6+MH' },
      { name: 'Raging Strike', description: 'Guard-crushing attack. Costs 50% SBA gauge.' , input: '5MH' },
      { name: 'Spot Dodge', description: 'Brief invincibility in place.' , input: '2+G' },
      { name: 'Cross-Over', description: 'Dodge behind the opponent.' , input: '6+G' },
      { name: 'Ultimate Skills', description: 'Enhanced specials that override normal cooldowns.'  }
    ],

    characters: [
        { id: '2b', name: '2B', moveCount: 0 },
        { id: 'anila', name: 'Anila', moveCount: 0 },
        { id: 'anre', name: 'Anre', moveCount: 0 },
        { id: 'avatar-belial', name: 'Avatar Belial', moveCount: 0 },
        { id: 'beatrix', name: 'Beatrix', moveCount: 0 },
        { id: 'beelzebub', name: 'Beelzebub', moveCount: 0 },
        { id: 'belial', name: 'Belial', moveCount: 0 },
        { id: 'cagliostro', name: 'Cagliostro', moveCount: 0 },
        { id: 'charlotta', name: 'Charlotta', moveCount: 0 },
        { id: 'djeeta', name: 'Djeeta', moveCount: 0 },
        { id: 'eustace', name: 'Eustace', moveCount: 0 },
        { id: 'ferry', name: 'Ferry', moveCount: 0 },
        { id: 'gran', name: 'Gran', moveCount: 0 },
        { id: 'grimnir', name: 'Grimnir', moveCount: 0 },
        { id: 'katalina', name: 'Katalina', moveCount: 0 },
        { id: 'ladiva', name: 'Ladiva', moveCount: 0 },
        { id: 'lancelot', name: 'Lancelot', moveCount: 0 },
        { id: 'lowain', name: 'Lowain', moveCount: 0 },
        { id: 'lucilius', name: 'Lucilius', moveCount: 0 },
        { id: 'metera', name: 'Metera', moveCount: 0 },
        { id: 'narmaya', name: 'Narmaya', moveCount: 0 },
        { id: 'nier', name: 'Nier', moveCount: 0 },
        { id: 'percival', name: 'Percival', moveCount: 0 },
        { id: 'sandalphon', name: 'Sandalphon', moveCount: 0 },
        { id: 'seox', name: 'Seox', moveCount: 0 },
        { id: 'siegfried', name: 'Siegfried', moveCount: 0 },
        { id: 'soriz', name: 'Soriz', moveCount: 0 },
        { id: 'vane', name: 'Vane', moveCount: 0 },
        { id: 'vaseraga', name: 'Vaseraga', moveCount: 0 },
        { id: 'versusia', name: 'Versusia', moveCount: 0 },
        { id: 'vikala', name: 'Vikala', moveCount: 0 },
        { id: 'vira', name: 'Vira', moveCount: 0 },
        { id: 'yuel', name: 'Yuel', moveCount: 0 },
        { id: 'zeta', name: 'Zeta', moveCount: 0 },
        { id: 'zooey', name: 'Zooey', moveCount: 0 }
      ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'groove-on-fight',

    mameRomset: "",

    name: "Groove on Fight",
    tagline: "Enter the Arena",

    developer: "Atlus",

    releaseYear: 1997,

    platform: "Arcade Sega Saturn, PC",

rosterCount: 14,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'groove-on-fight-power-instinct-3',

    mameRomset: "",

    name: "Groove On Fight (Power Instinct 3)",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1997,

    platform: "Arcade, Saturn, PC",

rosterCount: 12,

        characters: [
      { id: 'bristol-weller', name: 'Bristol Weller', moveCount: 0 },
      { id: 'chris-wayne', name: 'Chris Wayne', moveCount: 0 },
      { id: 'damian-shade', name: 'Damian Shade', moveCount: 0 },
      { id: 'falco', name: 'Falco', moveCount: 0 },
      { id: 'hizumi-yukinoue', name: 'Hizumi Yukinoue', moveCount: 0 },
      { id: 'larry-light', name: 'Larry Light', moveCount: 0 },
      { id: 'mad', name: 'M.A.D', moveCount: 0 },
      { id: 'oume-otane', name: 'Oume & Otane', moveCount: 0 },
      { id: 'popura-hananokoji', name: 'Popura Hananokoji', moveCount: 0 },
      { id: 'remi-otogiri', name: 'Remi Otogiri', moveCount: 0 },
      { id: 'solis-r8000', name: 'Solis R8000', moveCount: 0 },
      { id: 'tenjinbashi-sujiroku', name: 'Tenjinbashi Sujiroku', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'guilty-gear',

    mameRomset: "",

    name: "Guilty Gear (1998)",
    tagline: "The Missing Link",

    developer: "Arc System Works",

    releaseYear: 1998,

    platform: "PS1, PC",

rosterCount: 12,

        
    systemMechanics: [
      { name: 'Roman Cancel', description: 'Cancel any move with 50% Tension for combo extensions.' , input: 'P+K+S' },
      { name: 'Instant Kill', description: 'A one-hit-KO move. Enter Instant Kill mode, then land the attack to win the round.' , input: 'P+K+S+HS' },
      { name: 'Tension Gauge', description: 'Build meter by moving forward and attacking. Powers supers and Roman Cancels.'  },
      { name: 'Faultless Defense', description: 'Hold 2 buttons while blocking to prevent chip damage and increase pushback.' , input: '4+PK' },
      { name: 'Dead Angle Attack', description: 'A reversal while blocking. Costs 50% Tension.' , input: '6+2 buttons (blocking)' },
      { name: 'Dust Attack', description: 'Universal launcher or sweep. 5D launches, 2D sweeps.' , input: '5D or 2D' },
      { name: 'Air Dash', description: 'Dash in the air for aerial mobility and approach options.'  },
      { name: 'Gatling Combo', description: 'Chain normals in a specific order: P > K > S > HS > D for ground combos.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'guilty-gear-strive',

    mameRomset: "",

    name: "Guilty Gear Strive",
    tagline: "Smell of the Game",

    developer: "Arc Sys Works",

    releaseYear: 2021,

    platform: "PS4, PS5, PC, Xbox One, Xbox Series X/S",

rosterCount: 33,

            tags: ['Anime', 'Modern'],
    links: [
      { title: 'Official Site / Patch Notes', url: 'https://www.guiltygear.com/ggst/en/' },
      { title: 'Dustloop Wiki (GGST)', url: 'https://dustloop.com/w/GGST' }
    ],

    
    systemMechanics: [
      { name: 'Roman Cancel (RC)', description: 'Spend 50% Tension to cancel any action. Color-coded: Red (on hit), Yellow (neutral), Purple (whiff), Blue (during block).' , input: 'P+K+S (any 3)' },
      { name: 'Burst', description: 'A universal combo breaker (Blue Burst) or Tension boost (Gold Burst). Recharges over time.' , input: 'D+any button' },
      { name: 'Wall Break', description: 'Cornered opponents can be wall-splatted. Continued pressure breaks the wall for bonus damage and a stage transition with Positive Bonus.'  },
      { name: 'Tension Gauge', description: 'Builds by moving forward, attacking, and using Roman Cancels. Powers Overdrives and Roman Cancels. Decreases when playing defensively.'  },
      { name: 'Faultless Defense', description: 'Hold back + two buttons to block with no chip damage and increased pushback. Costs Tension while held.' , input: '[4]+P+K' },
      { name: 'Overdrives', description: 'Super moves that cost 50% Tension. Each character has 1-2 Overdrives with cinematic animations and high damage.'  },
      { name: 'Dust Attack', description: 'Universal overhead launcher (5D) or sweep (2D). Charged 5D leads to aerial combos with homing dash.' , input: '5D or 2D' },
      { name: 'Dash Macro', description: 'Press two buttons to dash forward or back. Essential for movement and accessing run for pressure.'  }
    ],

    characters: [
      { id: 'aba', name: 'A.B.A', moveCount: 64 },
      { id: 'anji', name: 'Anji', moveCount: 41 },
      { id: 'asuka', name: 'Asuka', moveCount: 61 },
      { id: 'axl', name: 'Axl', moveCount: 42 },
      { id: 'baiken', name: 'Baiken', moveCount: 39 },
      { id: 'bedman', name: 'Bedman', moveCount: 53 },
      { id: 'bridget', name: 'Bridget', moveCount: 43 },
      { id: 'chipp', name: 'Chipp', moveCount: 63 },
      { id: 'elphelt', name: 'Elphelt', moveCount: 43 },
      { id: 'faust', name: 'Faust', moveCount: 59 },
      { id: 'giovanna', name: 'Giovanna', moveCount: 38 },
      { id: 'goldlewis', name: 'Goldlewis', moveCount: 52 },
      { id: 'happy-chaos', name: 'Happy Chaos', moveCount: 40 },
      { id: 'i-no', name: 'I-No', moveCount: 47 },
      { id: 'jack-o', name: 'Jack-O', moveCount: 45 },
      { id: 'jam', name: 'Jam', moveCount: 46 },
      { id: 'johnny', name: 'Johnny', moveCount: 46 },
      { id: 'ky', name: 'Ky', moveCount: 57 },
      { id: 'leo', name: 'Leo', moveCount: 49 },
      { id: 'lucy', name: 'Lucy', moveCount: 42 },
      { id: 'may', name: 'May', moveCount: 41 },
      { id: 'millia', name: 'Millia', moveCount: 41 },
      { id: 'nagoriyuki', name: 'Nagoriyuki', moveCount: 69 },
      { id: 'potemkin', name: 'Potemkin', moveCount: 41 },
      { id: 'dizzy', name: 'Dizzy', moveCount: 37 },
      { id: 'ramlethal', name: 'Ramlethal', moveCount: 39 },
      { id: 'sin', name: 'Sin', moveCount: 41 },
      { id: 'slayer', name: 'Slayer', moveCount: 40 },
      { id: 'sol', name: 'Sol', moveCount: 45 },
      { id: 'testament', name: 'Testament', moveCount: 40 },
      { id: 'unika', name: 'Unika', moveCount: 51 },
      { id: 'venom', name: 'Venom', moveCount: 42 },
      { id: 'zato-1', name: 'Zato-1', moveCount: 56 }
    ],

    tabs: ['Special Moves', 'Normal Moves', 'Overdrives', 'System']

  },

  {

    id: 'guilty-gear-x',

    mameRomset: "",

    name: "Guilty Gear X",
    tagline: "By Your Side",

    developer: "Arc System Works",

    releaseYear: 2000,

    platform: "Arcade, DC, PS2, PC",

rosterCount: 16,

        
    systemMechanics: [
      { name: 'Roman Cancel', description: 'Cancel any action on hit with 50% Tension for extended combos.' , input: 'P+K+S' },
      { name: 'False Roman Cancel (FRC)', description: 'Cancel at specific frames of certain moves for only 25% Tension. Tight timing.'  },
      { name: 'Burst', description: 'Break out of combos (Blue) or gain Tension (Gold). Regenerates over time.' , input: 'D+button' },
      { name: 'Faultless Defense', description: 'No-chip blocking with increased pushback. Costs Tension.' , input: '4+2 buttons' },
      { name: 'Instant Kill', description: 'One-hit kill attack. Enter IK mode first, then land the kill move.' , input: 'PKSH' },
      { name: 'Dead Angle Attack', description: 'Reversal from blockstun. Costs 50% Tension.' , input: '6+2 buttons (blocking)' },
      { name: 'Dust Attack', description: 'Launcher (5D) or sweep (2D). Charged 5D leads to air combos.' , input: '5D / 2D' },
      { name: 'Gatling Combo', description: 'Chain normals in sequence: P > K > S > HS for ground combos.'  }
    ],

    characters: [
      { id: 'aba', name: 'A.B.A', moveCount: 0 },
      { id: 'anji', name: 'Anji', moveCount: 0 },
      { id: 'asuka', name: 'Asuka', moveCount: 0 },
      { id: 'axl', name: 'Axl', moveCount: 0 },
      { id: 'baiken', name: 'Baiken', moveCount: 0 },
      { id: 'bedman', name: 'Bedman', moveCount: 0 },
      { id: 'bridget', name: 'Bridget', moveCount: 0 },
      { id: 'chipp', name: 'Chipp', moveCount: 0 },
      { id: 'elphelt', name: 'Elphelt', moveCount: 0 },
      { id: 'faust', name: 'Faust', moveCount: 0 },
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'guilty-gear-xrd-rev-2',

    mameRomset: "",

    name: "Guilty Gear Xrd REV 2",
    tagline: "Revelations",

    developer: "Arc System Works",

    releaseYear: 2017,

    platform: "Arcade, PS3, PS4, PC",

rosterCount: 23,

        
    systemMechanics: [
      { name: 'Roman Cancel', description: 'Red, Yellow, or Purple RC depending on situation. Costs 50% Tension.' , input: 'P+K+S' },
      { name: 'Blitz Shield', description: 'A parry-style defensive move. Successful Blitz rejects the opponent\'s attack.' , input: 'D+HS' },
      { name: 'Burst', description: 'Blue Burst for combo escape, Gold Burst for full Tension refill.' , input: 'D+button' },
      { name: 'Danger Time', description: 'When both players clash attacks, Danger Time activates — all hits become counter hits briefly.'  },
      { name: 'Faultless Defense', description: 'No chip damage, extra pushback while blocking.' , input: '4+2 buttons' },
      { name: 'Dead Angle Attack', description: 'Reversal from block. Costs 50% Tension.' , input: '6+2 buttons (blocking)' },
      { name: 'Dust Attack', description: 'Universal launcher (5D) and sweep (2D).' , input: '5D / 2D' },
      { name: 'YRC Slow', description: 'Yellow RC creates a slow-motion field, enabling unique setplay and mixups.'  }
    ],

    characters: [
      { id: 'answer', name: 'Answer', moveCount: 0 },
      { id: 'baiken', name: 'Baiken', moveCount: 0 },
      { id: 'bedman', name: 'Bedman', moveCount: 0 },
      { id: 'chipp', name: 'Chipp', moveCount: 0 },
      { id: 'dizzy', name: 'Dizzy', moveCount: 0 },
      { id: 'elphelt', name: 'Elphelt', moveCount: 0 },
      { id: 'faust', name: 'Faust', moveCount: 0 },
      { id: 'i-no', name: 'I-No', moveCount: 0 },
      { id: 'jam', name: 'Jam', moveCount: 0 },
      { id: 'johnny', name: 'Johnny', moveCount: 0 },
      { id: 'kum-haehyun', name: 'Kum Haehyun', moveCount: 0 },
      { id: 'ky', name: 'Ky', moveCount: 0 },
      { id: 'leo', name: 'Leo', moveCount: 0 },
      { id: 'may', name: 'May', moveCount: 0 },
      { id: 'millia', name: 'Millia', moveCount: 0 },
      { id: 'potemkin', name: 'Potemkin', moveCount: 0 },
      { id: 'ramlethal', name: 'Ramlethal', moveCount: 0 },
      { id: 'raven', name: 'Raven', moveCount: 0 },
      { id: 'sin', name: 'Sin', moveCount: 0 },
      { id: 'slayer', name: 'Slayer', moveCount: 0 },
      { id: 'sol', name: 'Sol', moveCount: 0 },
      { id: 'venom', name: 'Venom', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'guilty-gear-xx-accent-core-plus-r',

    mameRomset: "",

    name: "Guilty Gear XX Accent Core Plus R",
    tagline: "Accent Core Plus R",

    developer: "Arc System Works",

    releaseYear: 2012,

    platform: "Arcade, PS3, Xbox 360, Vita, PC, Switch",

rosterCount: 25,

        
    systemMechanics: [
      { name: 'Roman Cancel', description: 'Cancel any move on hit for 50% Tension.' , input: 'P+K+S' },
      { name: 'False Roman Cancel', description: 'Cancel specific move frames for 25% Tension. Tight timing windows.' , input: 'P+K+S (at FRC point)' },
      { name: 'Force Break', description: 'Enhanced special moves that cost 25% Tension. Purple flash on use.'  },
      { name: 'Burst', description: 'Blue Burst escapes combos, Gold Burst fills Tension.' , input: 'D+button' },
      { name: 'Faultless Defense', description: 'Block without chip damage or guard gauge depletion.' , input: '4+2 buttons' },
      { name: 'Dead Angle Attack', description: 'Counter-attack while blocking.' , input: '6+2 buttons (blocking)' },
      { name: 'Slashback', description: 'Precise parry with 2f window. Reduces blockstun significantly.' , input: '4+D (precise timing)' },
      { name: 'Instant Kill', description: 'One-hit KO mode. Sacrifice Tension for an instant win.' , input: 'PKSH' }
    ],

    characters: [
      { id: 'aba', name: 'A.B.A', moveCount: 0 },
      { id: 'anji', name: 'Anji', moveCount: 0 },
      { id: 'asuka', name: 'Asuka', moveCount: 0 },
      { id: 'axl', name: 'Axl', moveCount: 0 },
      { id: 'baiken', name: 'Baiken', moveCount: 0 },
      { id: 'bedman', name: 'Bedman', moveCount: 0 },
      { id: 'bridget', name: 'Bridget', moveCount: 0 },
      { id: 'chipp', name: 'Chipp', moveCount: 0 },
      { id: 'elphelt', name: 'Elphelt', moveCount: 0 },
      { id: 'faust', name: 'Faust', moveCount: 0 },
      { id: 'giovanna', name: 'Giovanna', moveCount: 0 },
      { id: 'goldlewis', name: 'Goldlewis', moveCount: 0 },
      { id: 'happy-chaos', name: 'Happy Chaos', moveCount: 0 },
      { id: 'i-no', name: 'I-No', moveCount: 0 },
      { id: 'jack-o', name: 'Jack-O', moveCount: 0 },
      { id: 'jam', name: 'Jam', moveCount: 0 },
      { id: 'johnny', name: 'Johnny', moveCount: 0 },
      { id: 'ky', name: 'Ky', moveCount: 0 },
      { id: 'leo', name: 'Leo', moveCount: 0 },
      { id: 'lucy', name: 'Lucy', moveCount: 0 },
      { id: 'may', name: 'May', moveCount: 0 },
      { id: 'millia', name: 'Millia', moveCount: 0 },
      { id: 'nagoriyuki', name: 'Nagoriyuki', moveCount: 0 },
      { id: 'potemkin', name: 'Potemkin', moveCount: 0 },
      { id: 'dizzy', name: 'Dizzy', moveCount: 0 },
      { id: 'ramlethal', name: 'Ramlethal', moveCount: 0 },
      { id: 'sin', name: 'Sin', moveCount: 0 },
      { id: 'slayer', name: 'Slayer', moveCount: 0 },
      { id: 'sol', name: 'Sol', moveCount: 0 },
      { id: 'testament', name: 'Testament', moveCount: 0 },
      { id: 'unika', name: 'Unika', moveCount: 0 },
      { id: 'venom', name: 'Venom', moveCount: 0 },
      { id: 'zato-1', name: 'Zato-1', moveCount: 0 },
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'hyper-street-fighter-ii',

    mameRomset: "",

    name: "Hyper Street Fighter II",
    tagline: "The Anniversary Edition",

    developer: "Capcom",

    releaseYear: 2003,

        
    systemMechanics: [
      { name: 'Version Select', description: 'Choose any version of each character from WW through Super Turbo. Mix eras in one match.'  },
      { name: 'Super Combos', description: 'Super Turbo characters have access to devastating super moves at full meter.'  },
      { name: 'Throw Teching', description: 'Reduce throw damage with a well-timed tech input.'  },
      { name: 'Chip KO', description: 'Special moves and supers can kill through block with chip damage.'  },
      { name: 'Reversal Timing', description: 'Input a special move on the first wakeup frame for an automatic reversal.'  },
      { name: 'Dizzy System', description: 'Taking too many hits in quick succession stuns the character. Mash to recover.'  },
      { name: 'Safe Jumps', description: 'Time jump attacks to land and block before a reversal can hit.'  },
      { name: 'Crossup', description: 'Jump over the opponent with an attack that must be blocked in the opposite direction.'  }
    ],

    characters: [
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'ehonda', name: 'Ehonda', moveCount: 0 },
      { id: 'chun-li', name: 'Chun Li', moveCount: 0 },
      { id: 'blanka', name: 'Blanka', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 },
      { id: 'guile', name: 'Guile', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'thawk', name: 'Thawk', moveCount: 0 },
      { id: 'cammy', name: 'Cammy', moveCount: 0 },
      { id: 'fei-long', name: 'Fei Long', moveCount: 0 },
      { id: 'dee-jay', name: 'Dee Jay', moveCount: 0 },
      { id: 'balrog', name: 'Balrog', moveCount: 0 },
      { id: 'vega', name: 'Vega', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'mbison', name: 'Mbison', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },


  {

    id: 'jojo-s-bizarre-adventure-heritage-for-the-future-jjba-hftf',

    mameRomset: "",

    name: "JoJo's Bizarre Adventure: Heritage for the Future",

    developer: "Unknown",

    releaseYear: 1999,

    platform: "Arcade Sega Dreamcast PlayStation, PC, PS4, Switch, Xbox One",

rosterCount: 15,

        characters: [
      { id: 'alessy', name: 'Alessy', moveCount: 0 },
      { id: 'chaka', name: 'Chaka', moveCount: 0 },
      { id: 'dio-brando', name: 'Dio Brando', moveCount: 0 },
      { id: 'hol-horse', name: 'Hol Horse', moveCount: 0 },
      { id: 'iggy', name: 'Iggy', moveCount: 0 },
      { id: 'jean-pierre-polnareff', name: 'Jean Pierre Polnareff', moveCount: 0 },
      { id: 'joseph-joestar', name: 'Joseph Joestar', moveCount: 0 },
      { id: 'jotaro-kujo', name: 'Jotaro Kujo', moveCount: 0 },
      { id: 'mariah', name: 'Mariah', moveCount: 0 },
      { id: 'midler', name: 'Midler', moveCount: 0 },
      { id: 'muhammad-avdol', name: 'Muhammad Avdol', moveCount: 0 },
      { id: 'noriaki-kakyoin', name: 'Noriaki Kakyoin', moveCount: 0 },
      { id: 'petshop', name: 'Petshop', moveCount: 0 },
      { id: 'shadow-dio', name: 'Shadow Dio', moveCount: 0 },
      { id: 'vanilla-ice', name: 'Vanilla Ice', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'kakuto-chojin-back-alley-brutal',

    mameRomset: "",

    name: "Kakuto Chojin: Back Alley Brutal",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 2002,

    platform: "Xbox, PC",

rosterCount: 8,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'kasumi-ninja',

    mameRomset: "",

    name: "Kasumi Ninja",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1994,

    platform: "Jaguar, PC",

rosterCount: 9,

        characters: [
      { id: 'alaric', name: 'Alaric', moveCount: 0 },
      { id: 'angus', name: 'Angus', moveCount: 0 },
      { id: 'chagi', name: 'Chagi', moveCount: 0 },
      { id: 'habaki', name: 'Habaki', moveCount: 0 },
      { id: 'kaumi', name: 'Kaumi', moveCount: 0 },
      { id: 'kendo', name: 'Kendo', moveCount: 0 },
      { id: 'pakawa', name: 'Pakawa', moveCount: 0 },
      { id: 'senzo', name: 'Senzo', moveCount: 0 },
      { id: 'thoth', name: 'Thoth', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'killer-instinct-(1994)',

    mameRomset: "",

    name: "Killer Instinct (1994)",
    tagline: "Play With Fire",

    developer: "Rare",

    releaseYear: 1994,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'killer-instinct-(2013)',

    mameRomset: "",

    name: "Killer Instinct (2013)",
    tagline: "Fight On",

    developer: "Rare",

    releaseYear: 2013,

        characters: [
      { id: 'aganos', name: 'Aganos', moveCount: 0 },
      { id: 'aria', name: 'ARIA', moveCount: 0 },
      { id: 'b-orchid', name: 'B. Orchid', moveCount: 0 },
      { id: 'cinder', name: 'Cinder', moveCount: 0 },
      { id: 'eagle', name: 'Eagle', moveCount: 0 },
      { id: 'eyedol', name: 'Eyedol', moveCount: 0 },
      { id: 'fulgore', name: 'Fulgore', moveCount: 0 },
      { id: 'gargos', name: 'Gargos', moveCount: 0 },
      { id: 'general-raam', name: 'General RAAM', moveCount: 0 },
      { id: 'glacius', name: 'Glacius', moveCount: 0 },
      { id: 'hisako', name: 'Hisako', moveCount: 0 },
      { id: 'jago', name: 'Jago', moveCount: 0 },
      { id: 'kan-ra', name: 'Kan-Ra', moveCount: 0 },
      { id: 'kilgore', name: 'Kilgore', moveCount: 0 },
      { id: 'kim-wu', name: 'Kim Wu', moveCount: 0 },
      { id: 'maya', name: 'Maya', moveCount: 0 },
      { id: 'mira', name: 'Mira', moveCount: 0 },
      { id: 'omen', name: 'Omen', moveCount: 0 },
      { id: 'rash', name: 'Rash', moveCount: 0 },
      { id: 'riptor', name: 'Riptor', moveCount: 0 },
      { id: 'sabrewulf', name: 'Sabrewulf', moveCount: 0 },
      { id: 'sadira', name: 'Sadira', moveCount: 0 },
      { id: 'shadow-jago', name: 'Shadow Jago', moveCount: 0 },
      { id: 'shin-hisako', name: 'Shin Hisako', moveCount: 0 },
      { id: 'spinal', name: 'Spinal', moveCount: 0 },
      { id: 'tj-combo', name: 'T.J. Combo', moveCount: 0 },
      { id: 'thunder', name: 'Thunder', moveCount: 0 },
      { id: 'tusk', name: 'Tusk', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'killer-instinct-2--gold',

    mameRomset: "",

    name: "Killer Instinct 2",
    tagline: "The Instinct Returns",

    developer: "Rare",

    releaseYear: 1994,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'kizuna-encounter-super-tag-battle',

    mameRomset: "",

    name: "Kizuna Encounter: Super Tag Battle",
    tagline: "Super Tag Battle",

    developer: "SNK",

    releaseYear: 1996,
    platform: "Arcade, NeoGeo, PC",

rosterCount: 8,

        
    systemMechanics: [
      { name: 'Tag System', description: 'Two characters per team. Tag between rounds or mid-match.'  },
      { name: 'Line System', description: 'Two-plane fighting inherited from Fatal Fury series.'  },
      { name: 'Desperation Move', description: 'Super at low health.'  },
      { name: 'Power Gauge', description: 'Build meter for supers and enhanced moves.'  },
      { name: 'Guard Cancel', description: 'Counter-attack from blockstun.'  },
      { name: 'Chain Combo', description: 'Link normals for combo strings.'  },
      { name: 'Plane Switch', description: 'Move between foreground and background planes.'  },
      { name: 'Team Strategy', description: 'Character order and tagging strategy matters for team composition.'  }
    ],

    characters: [
      { id: 'chung-paifu', name: 'Chung Paifu', moveCount: 0 },
      { id: 'gozu', name: 'Gozu', moveCount: 0 },
      { id: 'kim-sue-il', name: 'Kim Sue Il', moveCount: 0 },
      { id: 'king-lion', name: 'King Lion', moveCount: 0 },
      { id: 'max-eagle', name: 'Max Eagle', moveCount: 0 },
      { id: 'mezu', name: 'Mezu', moveCount: 0 },
      { id: 'rosa', name: 'Rosa', moveCount: 0 },
      { id: 'sho-hayate', name: 'Sho Hayate', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'last-bronx',

    mameRomset: "",

    name: "Last Bronx",
    tagline: "Enter the Arena",

    developer: "Sega",

    releaseYear: 1996,

    platform: "Arcade, Saturn, PS1, PC",

rosterCount: 8,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'marvel-super-heroes',

    mameRomset: "",

    name: "Marvel Super Heroes",
    tagline: "War of the Gems",

    developer: "Capcom",

    releaseYear: 1995,
    platform: "Arcade, Saturn, PS1, PC, PS4, Switch, Xbox One",

rosterCount: 12,

        
    systemMechanics: [
      { name: 'Infinity Gems', description: 'Collect and activate gems for temporary power-ups: Power, Time, Space, Reality, Soul, Mind.'  },
      { name: 'Aerial Rave', description: 'Launch into air combos with the launcher button.'  },
      { name: 'Super Jump', description: 'Hold down then up for a high jump enabling extended air combos.' , input: '2~8' },
      { name: 'Infinity Counter', description: 'Counter-attack while blocking at gem cost.'  },
      { name: 'Chain Combo', description: 'Magic Series chains from light to heavy.'  },
      { name: 'Hyper Combo', description: 'Super moves costing meter gauge.'  },
      { name: 'Gem Power', description: 'Each gem grants unique abilities: speed, armor, health drain, etc.'  },
      { name: 'OTG Attacks', description: 'Off-the-ground attacks for extended combo damage.'  }
    ],

    characters: [
      { id: 'spider-man', name: 'Spider Man', moveCount: 0 },
      { id: 'captain-america', name: 'Captain America', moveCount: 0 },
      { id: 'iron-man', name: 'Iron Man', moveCount: 0 },
      { id: 'hulk', name: 'Hulk', moveCount: 0 },
      { id: 'wolverine', name: 'Wolverine', moveCount: 0 },
      { id: 'psylocke', name: 'Psylocke', moveCount: 0 },
      { id: 'magneto', name: 'Magneto', moveCount: 0 },
      { id: 'juggernaut', name: 'Juggernaut', moveCount: 0 },
      { id: 'blackheart', name: 'Blackheart', moveCount: 0 },
      { id: 'shuma-gorath', name: 'Shuma Gorath', moveCount: 0 },
      { id: 'dr-doom', name: 'Dr Doom', moveCount: 0 },
      { id: 'thanos', name: 'Thanos', moveCount: 0 },
      { id: 'anita', name: 'Anita', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'mshvsf',

    mameRomset: "",

    name: "Marvel Super Heroes vs. Street Fighter",
    tagline: "Super Heroes meet Street Fighters",

    developer: "Capcom",

    releaseYear: 1997,

        
    systemMechanics: [
      { name: 'Tag System', description: 'Switch between two characters mid-match.'  },
      { name: 'Variable Assist', description: 'Call your partner for an assist attack.'  },
      { name: 'Aerial Rave', description: 'Launch and air combo with Magic Series chains.'  },
      { name: 'Variable Counter', description: 'Tag in partner while blocking for a reversal.' , input: '6+Assist (blocking)' },
      { name: 'Hyper Combo', description: 'Super moves. Can DHC into partner supers.'  },
      { name: 'Advancing Guard', description: 'Push opponent away while blocking.' , input: 'PP (blocking)' },
      { name: 'Super Jump', description: 'High jump for extended air game.' , input: '2~8' },
      { name: 'Cross-Over Combination', description: 'Both characters perform supers simultaneously.'  }
    ],

    characters: [
      { id: 'cyclops', name: 'Cyclops', moveCount: 0 },
      { id: 'wolverine', name: 'Wolverine', moveCount: 0 },
      { id: 'spider-man', name: 'Spider Man', moveCount: 0 },
      { id: 'captain-america', name: 'Captain America', moveCount: 0 },
      { id: 'hulk', name: 'Hulk', moveCount: 0 },
      { id: 'blackheart', name: 'Blackheart', moveCount: 0 },
      { id: 'shuma-gorath', name: 'Shuma Gorath', moveCount: 0 },
      { id: 'omega-red', name: 'Omega Red', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'chun-li', name: 'Chun Li', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 },
      { id: 'mbison', name: 'Mbison', moveCount: 0 },
      { id: 'sakura', name: 'Sakura', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'norimaro', name: 'Norimaro', moveCount: 0 },
      { id: 'cyber-akuma', name: 'Cyber Akuma', moveCount: 0 },
      { id: 'apocalypse', name: 'Apocalypse', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },


  {

    id: 'marvel-vs-capcom-2',

    mameRomset: "mvc2",

    name: "Marvel vs. Capcom 2",
    tagline: "Take You For A Ride",

    developer: "Capcom",

    releaseYear: 2000,

    platform: "Arcade, DC, PS2, Xbox, PC, PS4, Switch, Xbox One",

rosterCount: 39,

            tags: ['Golden', '2D', 'Vs.'],

    
    systemMechanics: [
      { name: 'Assists', description: 'Call one of your two partner characters to perform an assist attack. Choose assist type (α/β/γ) at select screen.'  },
      { name: 'Aerial Rave', description: 'Launch with a standing heavy, then follow with an air combo chain: LP > LK > MP > MK > HP > HK.'  },
      { name: 'Advancing Guard', description: 'Press two punches while blocking to push the attacker away. Essential for escaping pressure.' , input: 'PP (while blocking)' },
      { name: 'Snapback', description: 'Spend 1 meter to force the opponent to tag out, bringing in a different character.' , input: '236+Assist' },
      { name: 'Delayed Hyper Combo (DHC)', description: 'Cancel one super into a partner\'s super by inputting their super motion during your current super.'  },
      { name: 'Variable Counter', description: 'Spend 1 bar while blocking to tag in a partner with an attack. A reversal option.' , input: '6+Assist (while blocking)' },
      { name: 'Team Hyper Combo', description: 'All team members perform their supers simultaneously for massive damage. Costs bars equal to team size.' , input: 'LP+LK+Assist1+Assist2' },
      { name: 'Guard Cancel', description: 'Alpha Counter during blockstun to switch characters. Resets pressure at the cost of 1 meter.'  }
    ],

    characters: [
      { id: 'ruby-heart', name: 'Ruby Heart', moveCount: 0 },
      { id: 'amingo', name: 'Amingo', moveCount: 0 },
      { id: 'son-son', name: 'Son Son', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'chun-li', name: 'Chun Li', moveCount: 0 },
      { id: 'guile', name: 'Guile', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'mbison', name: 'Mbison', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'charlie', name: 'Charlie', moveCount: 0 },
      { id: 'sakura', name: 'Sakura', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 },
      { id: 'cammy', name: 'Cammy', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
      { id: 'b-b-hood', name: 'B B Hood', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'megaman', name: 'Megaman', moveCount: 0 },
      { id: 'roll', name: 'Roll', moveCount: 0 },
      { id: 'tron-bonne', name: 'Tron Bonne', moveCount: 0 },
      { id: 'servbot', name: 'Servbot', moveCount: 0 },
      { id: 'strider', name: 'Strider', moveCount: 0 },
      { id: 'hayato', name: 'Hayato', moveCount: 0 },
      { id: 'captain-commando', name: 'Captain Commando', moveCount: 0 },
      { id: 'jin', name: 'Jin', moveCount: 0 },
      { id: 'cyclops', name: 'Cyclops', moveCount: 0 },
      { id: 'wolverine', name: 'Wolverine', moveCount: 0 },
      { id: 'wolverine-bone', name: 'Wolverine Bone', moveCount: 0 },
      { id: 'storm', name: 'Storm', moveCount: 0 },
      { id: 'rogue', name: 'Rogue', moveCount: 0 },
      { id: 'gambit', name: 'Gambit', moveCount: 0 },
      { id: 'cable', name: 'Cable', moveCount: 0 },
      { id: 'marrow', name: 'Marrow', moveCount: 0 },
      { id: 'psylocke', name: 'Psylocke', moveCount: 0 },
      { id: 'colossus', name: 'Colossus', moveCount: 0 },
      { id: 'iceman', name: 'Iceman', moveCount: 0 },
      { id: 'silver-samurai', name: 'Silver Samurai', moveCount: 0 },
      { id: 'omega-red', name: 'Omega Red', moveCount: 0 },
      { id: 'spiral', name: 'Spiral', moveCount: 0 },
      { id: 'sentinel', name: 'Sentinel', moveCount: 0 },
      { id: 'magneto', name: 'Magneto', moveCount: 0 },
      { id: 'juggernaut', name: 'Juggernaut', moveCount: 0 },
      { id: 'sabretooth', name: 'Sabretooth', moveCount: 0 },
      { id: 'spider-man', name: 'Spider Man', moveCount: 0 },
      { id: 'venom', name: 'Venom', moveCount: 0 },
      { id: 'captain-america', name: 'Captain America', moveCount: 0 },
      { id: 'iron-man', name: 'Iron Man', moveCount: 0 },
      { id: 'war-machine', name: 'War Machine', moveCount: 0 },
      { id: 'hulk', name: 'Hulk', moveCount: 0 },
      { id: 'dr-doom', name: 'Dr Doom', moveCount: 0 },
      { id: 'thanos', name: 'Thanos', moveCount: 0 },
      { id: 'shuma-gorath', name: 'Shuma Gorath', moveCount: 0 },
      { id: 'blackheart', name: 'Blackheart', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'marvel-vs-capcom-clash-of-super-heroes',

    mameRomset: "",

    name: "Marvel vs. Capcom: Clash of Super Heroes",
    tagline: "Two Worlds, One Dream",

    developer: "Capcom",

    releaseYear: 1998,

    platform: "Arcade, PS1, DC, PC, PS4, Switch, Xbox One",

rosterCount: 14,

        
    systemMechanics: [
      { name: 'Assist Characters', description: 'Call a random assist character from a roster of helpers.'  },
      { name: 'Variable Assist', description: 'Use summoned assist for combo extensions and pressure.'  },
      { name: 'Duo Team Attack', description: 'Both characters fight simultaneously for a limited time.' , input: 'LP+HP' },
      { name: 'Hyper Combo', description: 'Super moves. DHC available between partners.'  },
      { name: 'Aerial Rave', description: 'Launch and air combo with Magic Series.'  },
      { name: 'Advancing Guard', description: 'Push block to escape pressure.' , input: 'PP (blocking)' },
      { name: 'Super Jump', description: 'High jump for air approaches.' , input: '2~8' },
      { name: 'Tag System', description: 'Switch between your two main characters.'  }
    ],

    characters: [
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'chun-li', name: 'Chun Li', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'captain-commando', name: 'Captain Commando', moveCount: 0 },
      { id: 'megaman', name: 'Megaman', moveCount: 0 },
      { id: 'strider', name: 'Strider', moveCount: 0 },
      { id: 'spider-man', name: 'Spider Man', moveCount: 0 },
      { id: 'captain-america', name: 'Captain America', moveCount: 0 },
      { id: 'hulk', name: 'Hulk', moveCount: 0 },
      { id: 'wolverine', name: 'Wolverine', moveCount: 0 },
      { id: 'venom', name: 'Venom', moveCount: 0 },
      { id: 'gambit', name: 'Gambit', moveCount: 0 },
      { id: 'war-machine', name: 'War Machine', moveCount: 0 },
      { id: 'roll', name: 'Roll', moveCount: 0 },
      { id: 'shadow-lady', name: 'Shadow Lady', moveCount: 0 },
      { id: 'red-venom', name: 'Red Venom', moveCount: 0 },
      { id: 'orange-hulk', name: 'Orange Hulk', moveCount: 0 },
      { id: 'gold-war-machine', name: 'Gold War Machine', moveCount: 0 },
      { id: 'lilith-aensland', name: 'Lilith Aensland', moveCount: 0 },
      { id: 'onslaught', name: 'Onslaught', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'marvel-vs-capcom-infinite',

    mameRomset: "",

    name: "Marvel vs. Capcom: Infinite",
    tagline: "Return of the Stones",

    developer: "Capcom",

    releaseYear: 2017,

    platform: "PS4, Xbox One, PC",

rosterCount: 24,

        
    systemMechanics: [
      { name: 'Infinity Stones', description: 'Choose one of 6 Infinity Stones for a unique Surge ability and Storm power-up.'  },
      { name: 'Infinity Surge', description: 'Free-use ability tied to your stone. Power: wall bounce. Time: teleport dash. Space: pull. etc.'  },
      { name: 'Infinity Storm', description: 'Activate at 50% stone gauge for a powerful temporary buff.' , input: 'LK+HP' },
      { name: 'Active Switch', description: 'Tag partner in at any time, even during combos, for free-form tag combos.' , input: 'HP+HK' },
      { name: 'Hyper Combo', description: 'Super moves. Can chain between partners.'  },
      { name: 'Counter Switch', description: 'Tag in partner while being hit to escape combos.' , input: '6+HP+HK (while hit)' },
      { name: 'Auto Combo', description: 'Mash LP for an auto-combo. Simplified execution.'  },
      { name: 'Advancing Guard', description: 'Push opponent away during blockstun.' , input: 'PP (blocking)' }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'matrimelee',

    mameRomset: "",

    name: "Matrimelee (Power Instinct Matrimelee)",
    tagline: "Power Instinct Matrimelee",

    developer: "Noise Factory",

    releaseYear: 2003,

    platform: "Neo Geo Arcade PlayStation 2, PC",

        characters: [
      { id: 'keith-wayne', name: 'Keith Wayne', moveCount: 0 },
      { id: 'annie-hamilton', name: 'Annie Hamilton', moveCount: 0 },
      { id: 'otane-goketsuji', name: 'Otane Goketsuji', moveCount: 0 },
      { id: 'oume-goketsuji', name: 'Oume Goketsuji', moveCount: 0 },
      { id: 'kanji-kokuin', name: 'Kanji Kokuin', moveCount: 0 },
      { id: 'chok', name: 'Chok', moveCount: 0 },
      { id: 'saizo-hattori', name: 'Saizo Hattori', moveCount: 0 },
      { id: 'white-buffalo', name: 'White Buffalo', moveCount: 0 },
      { id: 'buntaro-kudo', name: 'Buntaro Kudo', moveCount: 0 },
      { id: 'shintaro-kudo', name: 'Shintaro Kudo', moveCount: 0 },
      { id: 'hikaru-jomon', name: 'Hikaru Jomon', moveCount: 0 },
      { id: 'reiji-oyama', name: 'Reiji Oyama', moveCount: 0 },
      { id: 'poochy', name: 'Poochy', moveCount: 0 },
      { id: 'clara-hananokoji', name: 'Clara Hananokoji', moveCount: 0 },
      { id: 'kinta-kokuin', name: 'Kinta Kokuin', moveCount: 0 },
      { id: 'elias-patrick', name: 'Elias Patrick', moveCount: 0 },
      { id: 'princess-sissy', name: 'Princess Sissy', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'mortal-kombat-(2011)',

    mameRomset: "",

    notationSystem: 'mk',
    name: "Mortal Kombat (2011)",
    tagline: "A Time to Kombat",

    developer: "NetherRealm Studios",

    releaseYear: 2011,

    platform: "PlayStation 3 Xbox 360 Windows, PC",

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'mortal-kombat-1',

    mameRomset: "",

    notationSystem: 'mk',
    controller: 'mk',
    name: "Mortal Kombat 1",
    tabs: ['Special Moves', 'Finishers', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Combos', 'System'],
    tagline: "It's In Our Blood",

    developer: "NetherRealm Studios",

    releaseYear: 2023,

    platform: "PS5, Xbox Series X/S, Switch, PC",

rosterCount: 25,

            tags: ['3D', 'Modern'],
    links: [
      { title: 'Official Site / Patch Notes', url: 'https://www.mortalkombat.com/' },
      { title: 'TestYourMight', url: 'https://testyourmight.com/' }
    ],

    characters: [
      { id: 'ashrah', name: 'Ashrah', moveCount: 0 },
      { id: 'baraka', name: 'Baraka', moveCount: 0 },
      { id: 'geras', name: 'Geras', moveCount: 0 },
      { id: 'havik', name: 'Havik', moveCount: 0 },
      { id: 'johnny-cage', name: 'Johnny Cage', moveCount: 0 },
      { id: 'kenshi', name: 'Kenshi', moveCount: 0 },
      { id: 'kitana', name: 'Kitana', moveCount: 0 },
      { id: 'kung-lao', name: 'Kung Lao', moveCount: 0 },
      { id: 'li-mei', name: 'Li Mei', moveCount: 0 },
      { id: 'liu-kang', name: 'Liu Kang', moveCount: 0 },
      { id: 'mileena', name: 'Mileena', moveCount: 0 },
      { id: 'nitara', name: 'Nitara', moveCount: 0 },
      { id: 'omni-man', name: 'Omni Man', moveCount: 0 },
      { id: 'peacemaker', name: 'Peacemaker', moveCount: 0 },
      { id: 'quan-chi', name: 'Quan Chi', moveCount: 0 },
      { id: 'raiden', name: 'Raiden', moveCount: 0 },
      { id: 'rain', name: 'Rain', moveCount: 0 },
      { id: 'reiko', name: 'Reiko', moveCount: 0 },
      { id: 'reptile', name: 'Reptile', moveCount: 0 },
      { id: 'scorpion', name: 'Scorpion', moveCount: 0 },
      { id: 'shang-tsung', name: 'Shang Tsung', moveCount: 0 },
      { id: 'sindel', name: 'Sindel', moveCount: 0 },
      { id: 'smoke', name: 'Smoke', moveCount: 0 },
      { id: 'sub-zero', name: 'Sub Zero', moveCount: 0 },
      { id: 'tanya', name: 'Tanya', moveCount: 0 },
      { id: 'general-shao', name: 'General Shao', moveCount: 0 },
      { id: 'ermac', name: 'Ermac', moveCount: 0 },
      { id: 'homelander', name: 'Homelander', moveCount: 0 },
      { id: 'takeda', name: 'Takeda', moveCount: 0 },
      { id: 'cyrax', name: 'Cyrax', moveCount: 0 },
      { id: 'sektor', name: 'Sektor', moveCount: 0 },
      { id: 'noob-saibot', name: 'Noob Saibot', moveCount: 0 },
      { id: 'ghostface', name: 'Ghostface', moveCount: 0 },
      { id: 'conan', name: 'Conan', moveCount: 0 },
      { id: 't-1000', name: 'T-1000', moveCount: 0 }
    ],



  },

  {

    id: 'mortal-kombat-ii',

    mameRomset: "mk2",

    notationSystem: 'mk',
    name: "Mortal Kombat II",
    tagline: "Nothing Can Stop It",

    developer: "Midway",

    releaseYear: 1993,

    platform: "Arcade, SNES, Genesis, PS1, PC",

rosterCount: 14,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'mortal-kombat-x',

    mameRomset: "",

    notationSystem: 'mk',
    name: "Mortal Kombat X",
    tabs: ['Special Moves', 'Finishers', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Combos', 'System'],
    tagline: "Who's Next?",

    developer: "NetherRealm Studios",

    releaseYear: 2015,

    platform: "PS4, Xbox One, PC",

rosterCount: 32,

        characters: [
      { id: 'alien', name: 'Alien', moveCount: 0 },
      { id: 'cassie-cage', name: 'Cassie Cage', moveCount: 0 },
      { id: 'ermac', name: 'Ermac', moveCount: 0 },
      { id: 'erron-black', name: 'Erron Black', moveCount: 0 },
      { id: 'ferratorr', name: 'Ferra Torr', moveCount: 0 },
      { id: 'goro', name: 'Goro', moveCount: 0 },
      { id: 'jacqui-briggs', name: 'Jacqui Briggs', moveCount: 0 },
      { id: 'jason-voorhees', name: 'Jason Voorhees', moveCount: 0 },
      { id: 'jax', name: 'Jax', moveCount: 0 },
      { id: 'johnny-cage', name: 'Johnny Cage', moveCount: 0 },
      { id: 'kano', name: 'Kano', moveCount: 0 },
      { id: 'kenshi', name: 'Kenshi', moveCount: 0 },
      { id: 'kitana', name: 'Kitana', moveCount: 0 },
      { id: 'kotal-kahn', name: 'Kotal Kahn', moveCount: 0 },
      { id: 'kung-jin', name: 'Kung Jin', moveCount: 0 },
      { id: 'kung-lao', name: 'Kung Lao', moveCount: 0 },
      { id: 'leatherface', name: 'Leatherface', moveCount: 0 },
      { id: 'liu-kang', name: 'Liu Kang', moveCount: 0 },
      { id: 'mileena', name: 'Mileena', moveCount: 0 },
      { id: 'predator', name: 'Predator', moveCount: 0 },
      { id: 'quan-chi', name: 'Quan Chi', moveCount: 0 },
      { id: 'raiden', name: 'Raiden', moveCount: 0 },
      { id: 'reptile', name: 'Reptile', moveCount: 0 },
      { id: 'scorpion', name: 'Scorpion', moveCount: 0 },
      { id: 'shinnok', name: 'Shinnok', moveCount: 0 },
      { id: 'sonya-blade', name: 'Sonya Blade', moveCount: 0 },
      { id: 'sub-zero', name: 'Sub-Zero', moveCount: 0 },
      { id: 'takeda-takahashi', name: 'Takeda Takahashi', moveCount: 0 },
      { id: 'tanya', name: 'Tanya', moveCount: 0 },
      { id: 'tremor', name: 'Tremor', moveCount: 0 }
    ],



  },

  {

    id: 'mortal-kombat-deception',

    mameRomset: "",

    notationSystem: 'mk',
    name: "Mortal Kombat: Deception",
    tagline: "Deception is Everywhere",

    developer: "NetherRealm Studios",

    releaseYear: 2004,

    platform: "PS2, Xbox, GC, PC",

rosterCount: 21,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'night-warriors-darkstalkers-revenge',

    mameRomset: "",

    name: "Night Warriors: Darkstalkers",
    tagline: "Darkstalkers' Revenge",

    developer: "Capcom",

    releaseYear: 1995,
    platform: "Arcade, Saturn, PC, PS4, Switch, Xbox One",

rosterCount: 14,

        
    systemMechanics: [
      { name: 'Chain Combos', description: 'Rapid light-to-heavy normal chains. Core of Darkstalkers combo system.'  },
      { name: 'ES Moves', description: 'Enhanced specials with extra hits and damage. Costs special meter.'  },
      { name: 'EX Specials', description: 'Super moves costing full meter. High damage and invincibility.'  },
      { name: 'Dark Force', description: 'Character-specific power-up mode. Unique effects per character.' , input: 'PP+KK' },
      { name: 'Pursuit Attack', description: 'Attack downed opponents for OTG damage.' , input: '2+HP (near downed)' },
      { name: 'Push Block', description: 'Push attacker away while blocking.' , input: 'PP (blocking)' },
      { name: 'Air Block', description: 'Block while airborne. Crucial for air-heavy gameplay.'  },
      { name: 'Guard Cancel', description: 'Counter-attack during blockstun at the cost of meter.'  }
    ],

    characters: [
      { id: 'demitri', name: 'Demitri', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'jon-talbain', name: 'Jon Talbain', moveCount: 0 },
      { id: 'lord-raptor', name: 'Lord Raptor', moveCount: 0 },
      { id: 'victor', name: 'Victor', moveCount: 0 },
      { id: 'rikuo', name: 'Rikuo', moveCount: 0 },
      { id: 'sasquatch', name: 'Sasquatch', moveCount: 0 },
      { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
      { id: 'bishamon', name: 'Bishamon', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'hutzil', name: 'Hutzil', moveCount: 0 },
      { id: 'pyron', name: 'Pyron', moveCount: 0 },
      { id: 'donovan', name: 'Donovan', moveCount: 0 },
      { id: 'hsien-ko', name: 'Hsien Ko', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'ninja-masters-haoh-ninpo-cho',

    mameRomset: "",

    name: "Ninja Master",
    tagline: "Enter the Arena",

    developer: "SNK",

    releaseYear: 1996,

    platform: "Neo Geo Arcade PlayStation 1, PC",

        
    systemMechanics: [
      { name: 'Weapon Switch', description: 'Toggle between armed and unarmed stances for different movesets.'  },
      { name: 'Desperation Move', description: 'Super at low health.'  },
      { name: 'Chain Combo', description: 'Link normals together.'  },
      { name: 'Guard Cancel', description: 'Counter from blockstun.'  },
      { name: 'Air Dash', description: 'Dash while airborne.'  },
      { name: 'Pursuit Attack', description: 'OTG on downed opponents.'  },
      { name: 'Weapon Break', description: 'Disarm opponent of their weapon.'  },
      { name: 'Dodge', description: 'Invincible evasion move.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'persona-4-arena-ultimax',

    mameRomset: "",

    name: "Persona 4 Arena Ultimax",
    tagline: "The P-1 Climax",

    developer: "Arc System Works",

    releaseYear: 2013,

    platform: "Arcade, PS3, PS4, PC, Switch",

rosterCount: 20,

        
    systemMechanics: [
      { name: 'Persona Attacks', description: 'Summon your Persona for unique attacks using the C and D buttons.'  },
      { name: 'Persona Break', description: 'If your Persona takes 4 hits, it breaks — losing access to Persona moves temporarily.'  },
      { name: 'Burst', description: 'Combo breaker or power-up burst.' , input: 'A+C+D' },
      { name: 'All-Out Attack', description: 'Unblockable sweep attack.' , input: '5AB' },
      { name: 'One More Cancel', description: 'Roman Cancel equivalent. Costs 50 SP gauge.' , input: 'A+B+C' },
      { name: 'Furious Action', description: 'Invincible reversal. Costs health on whiff.' , input: 'B+D' },
      { name: 'Auto Combo', description: 'Mash A for auto-combo. Easy execution path.'  },
      { name: 'Shadow Type', description: 'S-Hold characters have shadow versions with different meter and burst mechanics.'  }
    ],

    characters: [
      { id: 'adachi', name: 'Adachi', moveCount: 0 },
      { id: 'akihiko', name: 'Akihiko', moveCount: 0 },
      { id: 'chie', name: 'Chie', moveCount: 0 },
      { id: 'elizabeth', name: 'Elizabeth', moveCount: 0 },
      { id: 'junpei', name: 'Junpei', moveCount: 0 },
      { id: 'kanji', name: 'Kanji', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'koromaru', name: 'Koromaru', moveCount: 0 },
      { id: 'labrys', name: 'Labrys', moveCount: 0 },
      { id: 'margaret', name: 'Margaret', moveCount: 0 },
      { id: 'marie', name: 'Marie', moveCount: 0 },
      { id: 'mitsuru', name: 'Mitsuru', moveCount: 0 },
      { id: 'naoto', name: 'Naoto', moveCount: 0 },
      { id: 'rise', name: 'Rise', moveCount: 0 },
      { id: 'sho', name: 'Sho', moveCount: 0 },
      { id: 'teddie', name: 'Teddie', moveCount: 0 },
      { id: 'tohru', name: 'Tohru', moveCount: 0 },
      { id: 'yukari', name: 'Yukari', moveCount: 0 },
      { id: 'yukiko', name: 'Yukiko', moveCount: 0 },
      { id: 'yu', name: 'Yu', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'plasma-sword-nightmare-of-bilstein',

    mameRomset: "",

    name: "Plasma Sword: Nightmare of Bilstein",
    tagline: "Enter the Arena",

    developer: "Capcom",

    releaseYear: 1998,

    platform: "Arcade, DC, PC",

rosterCount: 13,

        
    systemMechanics: [
      { name: 'Plasma Combo', description: 'Chain light to heavy attacks in sequence.'  },
      { name: 'Plasma Strike', description: 'Launcher into aerial combos.'  },
      { name: 'Plasma Field', description: 'Power-up aura that enhances attacks temporarily.'  },
      { name: 'Super Moves', description: 'Meter-powered supers with cinematic flair.'  },
      { name: 'Air Combo', description: 'Launch and juggle in the air.'  },
      { name: 'Guard Cancel', description: 'Counter from blockstun.'  },
      { name: 'Dash', description: 'Quick forward/back dashes.'  },
      { name: 'Weapon Combat', description: '3D weapon-based combat with unique character armaments.'  }
    ],

    characters: [
        { id: 'hayato', name: 'Hayato', moveCount: 0 },
        { id: 'june', name: 'June', moveCount: 0 },
        { id: 'saturn', name: 'Saturn', moveCount: 0 },
        { id: 'gamof', name: 'Gamof', moveCount: 0 },
        { id: 'vector', name: 'Vector', moveCount: 0 },
        { id: 'gore', name: 'Gore', moveCount: 0 },
        { id: 'blood', name: 'Blood', moveCount: 0 },
        { id: 'shaker', name: 'Shaker', moveCount: 0 },
        { id: 'zelkin', name: 'Zelkin', moveCount: 0 },
        { id: 'bilstein', name: 'Bilstein', moveCount: 0 },
        { id: 'rain', name: 'Rain', moveCount: 0 },
        { id: 'byakko', name: 'Byakko', moveCount: 0 },
        { id: 'gantetsu', name: 'Gantetsu', moveCount: 0 },
        { id: 'claire', name: 'Claire', moveCount: 0 },
        { id: 'ele', name: 'Ele', moveCount: 0 },
        { id: 'raiga', name: 'Raiga', moveCount: 0 },
        { id: 'omega', name: 'Omega', moveCount: 0 },
        { id: 'gori', name: 'Gori', moveCount: 0 },
        { id: 'luka', name: 'Luka', moveCount: 0 },
        { id: 'luca', name: 'Luca', moveCount: 0 }
      ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'pocketfighter',

    mameRomset: "",

    name: "Pocket Fighter",
    tagline: "Super Gem Fighter Mini Mix",

    developer: "SNK",

    releaseYear: 1997,

    platform: "Arcade PlayStation Sega Saturn, PC, PS4, Switch, Xbox One",

        
    systemMechanics: [
      { name: 'Gems', description: 'Collect colored gems from hitting opponents. Gems power up specific special moves.'  },
      { name: 'Flash Combo', description: 'Auto-combo with costume change animations.' , input: 'PP or KK' },
      { name: 'Mighty Combo', description: 'Super moves using the gem-powered meter.'  },
      { name: 'Item Attacks', description: 'Random items drop that can be used as attacks.'  },
      { name: 'Guard Cancel', description: 'Counter-attack while blocking.'  },
      { name: 'Chain Combo', description: 'Link normals in sequence.'  },
      { name: 'Costume Change', description: 'Characters change costumes during Flash Combos for humor.'  },
      { name: 'Gem Steal', description: 'Hitting the opponent knocks gems from them for you to collect.'  }
    ],

    characters: [
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'chun-li', name: 'Chun Li', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 },
      { id: 'sakura', name: 'Sakura', moveCount: 0 },
      { id: 'ibuki', name: 'Ibuki', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'hsien-ko', name: 'Hsien Ko', moveCount: 0 },
      { id: 'tessa', name: 'Tessa', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'primal-rage',

    mameRomset: "",

    name: "Primal Rage",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1994,

    platform: "Arcade, Genesis, SNES, PC",

rosterCount: 7,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'primal-rage-2',

    mameRomset: "",

    name: "Primal Rage 2",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1994,

    platform: "Arcade Sega Genesis SNES PlayStation Sega Saturn 3DO Game Gear Game Boy Atari Jaguar PC",

rosterCount: 7,

        characters: [
      { id: 'arik', name: 'Arik', moveCount: 0 },
      { id: 'malys', name: 'Malys', moveCount: 0 },
      { id: 'shank', name: 'Shank', moveCount: 0 },
      { id: 'sinjin', name: 'Sinjin', moveCount: 0 },
      { id: 'xiao', name: 'Xiao', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'projectjustice',

    mameRomset: "",

    name: "Project Justice",
    tagline: "Project Justice",

    developer: "SNK",

    releaseYear: 2000,

    platform: "Arcade Sega Dreamcast, PC",

        
    systemMechanics: [
      { name: 'Team-Up Attack', description: 'Call both partners for a devastating 3-person team attack.'  },
      { name: 'Party-Up Technique', description: 'Tag team attacks with partner characters.'  },
      { name: 'Burning Vigor', description: 'Meter system powering supers and team attacks.'  },
      { name: 'Tardy Counter', description: 'Counter-attack from blockstun with partner.' , input: 'Assist (blocking)' },
      { name: 'Air Combo', description: 'Launch and juggle for aerial damage.'  },
      { name: 'Team Edit', description: 'Create custom teams of 3 from the full roster.'  },
      { name: 'Guts System', description: 'Damage reduction at low health.'  },
      { name: 'Guard Cancel', description: 'Escape pressure with a counter.'  }
    ],

    characters: [
        { id: 'batsu', name: 'Batsu', moveCount: 0 },
        { id: 'hinata', name: 'Hinata', moveCount: 0 },
        { id: 'kyosuke', name: 'Kyosuke', moveCount: 0 },
        { id: 'hayato', name: 'Hayato', moveCount: 0 },
        { id: 'shoma', name: 'Shoma', moveCount: 0 },
        { id: 'natsu', name: 'Natsu', moveCount: 0 },
        { id: 'roberto', name: 'Roberto', moveCount: 0 },
        { id: 'akira', name: 'Akira', moveCount: 0 },
        { id: 'edge', name: 'Edge', moveCount: 0 },
        { id: 'gan', name: 'Gan', moveCount: 0 },
        { id: 'zaki', name: 'Zaki', moveCount: 0 },
        { id: 'yurika', name: 'Yurika', moveCount: 0 },
        { id: 'kurow', name: 'Kurow', moveCount: 0 },
        { id: 'hideo', name: 'Hideo', moveCount: 0 },
        { id: 'kyoko', name: 'Kyoko', moveCount: 0 },
        { id: 'bowman', name: 'Bowman', moveCount: 0 },
        { id: 'ran', name: 'Ran', moveCount: 0 },
        { id: 'chairman', name: 'Chairman', moveCount: 0 },
        { id: 'roy', name: 'Roy', moveCount: 0 },
        { id: 'tiffany', name: 'Tiffany', moveCount: 0 },
        { id: 'momo', name: 'Momo', moveCount: 0 },
        { id: 'boman', name: 'Boman', moveCount: 0 },
        { id: 'natsu', name: 'Natsu', moveCount: 0 },
        { id: 'roberto', name: 'Roberto', moveCount: 0 }
      ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'psychic-force',

    mameRomset: "",

    name: "Psychic Force",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1996,

    platform: "Arcade, PS1, PC",

rosterCount: 10,

        characters: [
      { id: 'brad', name: 'Brad', moveCount: 0 },
      { id: 'burn', name: 'Burn', moveCount: 0 },
      { id: 'emilio', name: 'Emilio', moveCount: 0 },
      { id: 'gates', name: 'Gates', moveCount: 0 },
      { id: 'genma', name: 'Genma', moveCount: 0 },
      { id: 'keith', name: 'Keith', moveCount: 0 },
      { id: 'richard', name: 'Richard', moveCount: 0 },
      { id: 'rokkan', name: 'Rokkan', moveCount: 0 },
      { id: 'sonia', name: 'Sonia', moveCount: 0 },
      { id: 'wendy', name: 'Wendy', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'psychic-force-2012-psychic-force-2',

    mameRomset: "",

    name: "Psychic Force 2012 (Psychic Force 2)",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1998,

    platform: "Arcade, DC, PC",

rosterCount: 13,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'rage-of-the-dragons',

    mameRomset: "",

    name: "Rage of the Dragons",
    tagline: "Enter the Arena",

    developer: "Evoga",

    releaseYear: 2002,

    platform: "Arcade, NeoGeo, PC",

rosterCount: 13,

        characters: [
      { id: 'abubo', name: 'Abubo', moveCount: 0 },
      { id: 'alice', name: 'Alice', moveCount: 0 },
      { id: 'billy', name: 'Billy', moveCount: 0 },
      { id: 'cass', name: 'Cass', moveCount: 0 },
      { id: 'elias', name: 'Elias', moveCount: 0 },
      { id: 'kang', name: 'Kang', moveCount: 0 },
      { id: 'lynn', name: 'Lynn', moveCount: 0 },
      { id: 'mr-jones', name: 'Mr. Jones', moveCount: 0 },
      { id: 'oni', name: 'Oni', moveCount: 0 },
      { id: 'pepe', name: 'Pepe', moveCount: 0 },
      { id: 'pupa', name: 'Pupa', moveCount: 0 },
      { id: 'radel', name: 'Radel', moveCount: 0 },
      { id: 'sonia', name: 'Sonia', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'ragnagard-shin-oh-ken',

    mameRomset: "",

    name: "Ragnagard (Shin-Oh-Ken)",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1996,

    platform: "Arcade, NeoGeo, Saturn, PC",

rosterCount: 8,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'real-bout-fatal-fury',

    mameRomset: "",

    name: "Real Bout Fatal Fury",
    tagline: "The Real Bout",

    developer: "SNK",

    releaseYear: 1995,
    platform: "Arcade, NeoGeo, Saturn, PS1, PC",

rosterCount: 16,

        
    systemMechanics: [
      { name: 'Ring Out', description: 'Break the barrier behind the opponent for a ring out KO.'  },
      { name: 'Line System', description: 'Two-plane fighting with foreground and background.'  },
      { name: 'Desperation Move', description: 'Super at low health.'  },
      { name: 'Power Gauge', description: 'Build meter for supers.'  },
      { name: 'Combination Arts', description: 'Chain normals into specials.'  },
      { name: 'Breakshot', description: 'Counter-attack during blockstun.' , input: '6+C (blocking)' },
      { name: 'Oversway', description: 'Dodge into the other plane.'  },
      { name: 'Hidden Ability', description: 'Secret super with specific conditions.'  }
    ],

    characters: [
      { id: 'andy-bogard', name: 'Andy Bogard', moveCount: 0 },
      { id: 'billy-kane', name: 'Billy Kane', moveCount: 0 },
      { id: 'blue-mary', name: 'Blue Mary', moveCount: 0 },
      { id: 'bob-wilson', name: 'Bob Wilson', moveCount: 0 },
      { id: 'chonrei', name: 'Chonrei', moveCount: 0 },
      { id: 'chonshu', name: 'Chonshu', moveCount: 0 },
      { id: 'duck-king', name: 'Duck King', moveCount: 0 },
      { id: 'franco-bash', name: 'Franco Bash', moveCount: 0 },
      { id: 'geese-howard', name: 'Geese Howard', moveCount: 0 },
      { id: 'hon-fu', name: 'Hon-Fu', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'ryuji-yamazaki', name: 'Ryuji Yamazaki', moveCount: 0 },
      { id: 'sokaku-mochizuki', name: 'Sokaku Mochizuki', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'real-bout-fatal-fury-2-the-newcomers',

    mameRomset: "",

    name: "Real Bout Fatal Fury 2: The Newcomers",
    tagline: "The Newcomers",

    developer: "SNK",

    releaseYear: 1998,
    platform: "Arcade, NeoGeo, DC, PS2, PC",

rosterCount: 19,

        
    systemMechanics: [
      { name: 'Two Planes', description: 'Main line and sway line. Attack while transitioning.'  },
      { name: 'Desperation Move', description: 'Super available at low health.'  },
      { name: 'Power Gauge', description: 'Meter for supers and enhanced moves.'  },
      { name: 'Breakshot', description: 'Guard cancel counter-attack.' , input: '6+C (blocking)' },
      { name: 'Combination Arts', description: 'Normal chain combos.'  },
      { name: 'Oversway Attack', description: 'Attack while switching planes.'  },
      { name: 'Hidden Desperation', description: 'Secret super at critical health.'  },
      { name: 'Quick Recovery', description: 'Fast getup from knockdowns.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'real-bout-fatal-fury-special',

    mameRomset: "",

    name: "Real Bout Fatal Fury Special",
    tagline: "Real Bout Special",

    developer: "SNK",

    releaseYear: 1997,
    platform: "Arcade, NeoGeo, Saturn, PS1, PC",

rosterCount: 19,

        
    systemMechanics: [
      { name: 'Ring Out Removed', description: 'No ring outs — replaced with wall bounces for combos.'  },
      { name: 'Two Lines', description: 'Foreground/background plane system.'  },
      { name: 'Desperation Move', description: 'Super at low health.'  },
      { name: 'Power Gauge', description: 'Meter system for supers.'  },
      { name: 'Breakshot', description: 'Counter from blockstun.'  },
      { name: 'Combination Arts', description: 'Chain combo system.'  },
      { name: 'Oversway', description: 'Plane switching with invincibility.'  },
      { name: 'Hidden Ability', description: 'Secret super under specific conditions.'  }
    ],

    characters: [
      { id: 'andy-bogard', name: 'Andy Bogard', moveCount: 0 },
      { id: 'billy-kane', name: 'Billy Kane', moveCount: 0 },
      { id: 'blue-mary', name: 'Blue Mary', moveCount: 0 },
      { id: 'bob-wilson', name: 'Bob Wilson', moveCount: 0 },
      { id: 'chonrei', name: 'Chonrei', moveCount: 0 },
      { id: 'chonshu', name: 'Chonshu', moveCount: 0 },
      { id: 'duck-king', name: 'Duck King', moveCount: 0 },
      { id: 'franco-bash', name: 'Franco Bash', moveCount: 0 },
      { id: 'geese-howard', name: 'Geese Howard', moveCount: 0 },
      { id: 'hon-fu', name: 'Hon-Fu', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan', moveCount: 0 },
      { id: 'laurence-blood', name: 'Laurence Blood', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'ryuji-yamazaki', name: 'Ryuji Yamazaki', moveCount: 0 },
      { id: 'sokaku-mochizuki', name: 'Sokaku Mochizuki', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'tung-fu-rue', name: 'Tung Fu Rue', moveCount: 0 },
      { id: 'wolfgang-krauser', name: 'Wolfgang Krauser', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'samurai-shodown',

    mameRomset: "",

    name: "Samurai Shodown",
    tagline: "Way of the Sword",

    developer: "SNK",

    releaseYear: 1993,
    platform: "PS4, Xbox One, PC, Switch",

rosterCount: 25,

            tags: ['3D'],

    
    systemMechanics: [
      { name: 'Rage Gauge', description: 'Builds when taking damage. At full Rage, damage increases significantly. The comeback mechanic of the series.'  },
      { name: 'Rage Explosion', description: 'Once per match, activate at any Rage level for a temporary power boost and access to Lightning Blade.' , input: 'ABC' },
      { name: 'Lightning Blade', description: 'A massive unblockable slash available only during Rage Explosion. Can end a round in one hit.' , input: '236+CD (Rage Explode)' },
      { name: 'Weapon Clash', description: 'When two weapon attacks connect simultaneously, a clash occurs. Mash for advantage or risk disarmament.'  },
      { name: 'Disarm', description: 'Certain heavy slashes can knock the weapon from your opponent\'s hands, drastically reducing their damage.'  },
      { name: 'Deflect', description: 'A precisely timed defensive move that deflects the opponent\'s weapon attack, leaving them open.' , input: '236+D' },
      { name: 'Just Defense', description: 'Block at the last moment to reduce blockstun and gain a small frame advantage.'  },
      { name: 'Meditation', description: 'Stand still and hold a button to slowly build meter. Risky but rewards patient play.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'samurai-shodown-(2019)',

    mameRomset: "",

    name: "Samurai Shodown (2019)",
    tagline: "Embrace Death",

    developer: "SNK",

    releaseYear: 2019,

        
    systemMechanics: [
      { name: 'Rage Gauge', description: 'Builds when taking damage. Powers up attack damage when full. The cornerstone of SamSho\'s comeback system.'  },
      { name: 'Rage Explosion', description: 'Once per round, sacrifice your Rage Gauge for a temporary power surge and Lightning Blade access.' , input: 'ABC' },
      { name: 'Lightning Blade', description: 'Unblockable super slash during Rage Explosion. Can instantly decide a round.' , input: '236CD (in Rage Explosion)' },
      { name: 'Super Special Move', description: 'A powerful super available when Rage is full. High damage, reads-based gameplay.' , input: 'QCFx2+Slash' },
      { name: 'Weapon Flipping Technique', description: 'Disarm the opponent with a specific heavy attack, removing their weapon and most of their damage.'  },
      { name: 'Just Defense', description: 'Precise blocking that reduces blockstun and recovers small amounts of health.'  },
      { name: 'Spot Dodge', description: 'Brief invincibility in place. Good for punishing predictable attacks.' , input: '4+AB' },
      { name: 'Blade Catch', description: 'Catch the opponent\'s weapon barehanded. Extremely risky but devastating if successful.' , input: '6+E (precise timing)' }
    ],

    characters: [
      { id: 'baiken', name: 'Baiken', moveCount: 0 },
      { id: 'basara', name: 'Basara', moveCount: 0 },
      { id: 'charlotte', name: 'Charlotte', moveCount: 0 },
      { id: 'darli-dagger', name: 'Darli Dagger', moveCount: 0 },
      { id: 'earthquake', name: 'Earthquake', moveCount: 0 },
      { id: 'galford', name: 'Galford', moveCount: 0 },
      { id: 'genjuro', name: 'Genjuro', moveCount: 0 },
      { id: 'gongsun-li', name: 'Gongsun Li', moveCount: 0 },
      { id: 'hanzo', name: 'Hanzo', moveCount: 0 },
      { id: 'haohmaru', name: 'Haohmaru', moveCount: 0 },
      { id: 'hibiki-takane', name: 'Hibiki Takane', moveCount: 0 },
      { id: 'iroha', name: 'Iroha', moveCount: 0 },
      { id: 'jubei', name: 'Jubei', moveCount: 0 },
      { id: 'kazuki', name: 'Kazuki', moveCount: 0 },
      { id: 'kurama-yashamaru', name: 'Kurama Yashamaru', moveCount: 0 },
      { id: 'kyoshiro', name: 'Kyoshiro', moveCount: 0 },
      { id: 'nakoruru', name: 'Nakoruru', moveCount: 0 },
      { id: 'rimururu', name: 'Rimururu', moveCount: 0 },
      { id: 'shizumaru', name: 'Shizumaru', moveCount: 0 },
      { id: 'sogetsu', name: 'Sogetsu', moveCount: 0 },
      { id: 'tam-tam', name: 'Tam Tam', moveCount: 0 },
      { id: 'ukyo', name: 'Ukyo', moveCount: 0 },
      { id: 'warden', name: 'Warden', moveCount: 0 },
      { id: 'wu-ruixiang', name: 'Wu-Ruixiang', moveCount: 0 },
      { id: 'yoshitora', name: 'Yoshitora', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'samurai-shodown-ii',

    mameRomset: "",

    name: "Samurai Shodown II",
    tagline: "The Blade Returns",

    developer: "SNK",

    releaseYear: 1994,
    platform: "Arcade, NeoGeo, Saturn, PS1, PC",

rosterCount: 15,

        
    systemMechanics: [
      { name: 'Rage Gauge', description: 'Fills when taking damage. Full Rage dramatically increases attack power.'  },
      { name: 'Weapon Breaking', description: 'A powerful slash that can destroy the opponent\'s weapon, leaving them with only weak unarmed attacks.'  },
      { name: 'Weapon Clash', description: 'When weapon attacks meet, a clash mini-game occurs. Win to maintain pressure, lose to get disarmed.'  },
      { name: 'Roll', description: 'Dodge forward or backward with invincibility. Key evasion tool.' , input: 'AB' },
      { name: 'POW Special', description: 'A devastating super move available only when the Rage Gauge is full. Very high damage.'  },
      { name: 'Deflect', description: 'Counter an incoming weapon attack to create a punish opportunity.'  },
      { name: 'Short Hop', description: 'Quick low jump for fast overhead attacks and evasion.' , input: 'tap 8' },
      { name: 'Pursuit Attack', description: 'Attack a downed opponent for extra damage. Can be avoided with quick recovery.' , input: '2+C (near downed)' }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'samurai-shodown-iii-blades-of-blood',

    mameRomset: "",

    name: "Samurai Shodown III: Blades of Blood",
    tagline: "Blades of Blood",

    developer: "SNK",

    releaseYear: 1995,
    platform: "Arcade, NeoGeo, Saturn, PS1, PC",

rosterCount: 11,

        
    systemMechanics: [
      { name: 'Slash/Bust', description: 'Choose Slash or Bust version of each character for different movesets.'  },
      { name: 'Rage Gauge', description: 'Fills when hit. Full rage boosts damage.'  },
      { name: 'Weapon Break', description: 'Disarm the opponent.'  },
      { name: 'Deflect', description: 'Parry weapon attacks.'  },
      { name: 'POW Special', description: 'Super at full rage.'  },
      { name: 'Roll', description: 'Evasive roll.' , input: 'AB' },
      { name: 'Pursuit', description: 'OTG attacks on downed opponents.'  },
      { name: 'Short Hop', description: 'Quick hop for overheads.'  }
    ],

    characters: [
      { id: 'amakusa', name: 'Amakusa', moveCount: 0 },
      { id: 'basara', name: 'Basara', moveCount: 0 },
      { id: 'galford', name: 'Galford', moveCount: 0 },
      { id: 'gaira', name: 'Gaira', moveCount: 0 },
      { id: 'hanzo', name: 'Hanzo', moveCount: 0 },
      { id: 'haohmaru', name: 'Haohmaru', moveCount: 0 },
      { id: 'kyoshiro', name: 'Kyoshiro', moveCount: 0 },
      { id: 'nakoruru', name: 'Nakoruru', moveCount: 0 },
      { id: 'rimururu', name: 'Rimururu', moveCount: 0 },
      { id: 'shizumaru', name: 'Shizumaru', moveCount: 0 },
      { id: 'ukyo', name: 'Ukyo', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {
    id: 'samurai-shodown-iv-amakusas-revenge',

    mameRomset: "",
    releaseYear: 1996,
    platform: "Arcade, NeoGeo, Saturn, PS1, PC",
    name: "Samurai Shodown IV: Amakusa's Revenge (1996)",
    isDraft: true,
    rosterCount: 16,
    characters: [
      { id: 'amakusa', name: 'Amakusa', moveCount: 0 },
      { id: 'basara', name: 'Basara', moveCount: 0 },
      { id: 'charlotte', name: 'Charlotte', moveCount: 0 },
      { id: 'galford', name: 'Galford', moveCount: 0 },
      { id: 'gaira', name: 'Gaira', moveCount: 0 },
      { id: 'hanzo', name: 'Hanzo', moveCount: 0 },
      { id: 'haohmaru', name: 'Haohmaru', moveCount: 0 },
      { id: 'jubei', name: 'Jubei', moveCount: 0 },
      { id: 'kazuki', name: 'Kazuki', moveCount: 0 },
      { id: 'kyoshiro', name: 'Kyoshiro', moveCount: 0 },
      { id: 'nakoruru', name: 'Nakoruru', moveCount: 0 },
      { id: 'rimururu', name: 'Rimururu', moveCount: 0 },
      { id: 'shizumaru', name: 'Shizumaru', moveCount: 0 },
      { id: 'sogetsu', name: 'Sogetsu', moveCount: 0 },
      { id: 'tam-tam', name: 'Tam Tam', moveCount: 0 },
      { id: 'ukyo', name: 'Ukyo', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {

    id: 'samurai-shodown-v',

    mameRomset: "",

    name: "Samurai Shodown V",
    tagline: "The Sword of the Warrior",

    developer: "SNK",

    releaseYear: 2003,
    platform: "Arcade, NeoGeo, PS2, Xbox, PC",

rosterCount: 19,

        
    systemMechanics: [
      { name: 'Rage Gauge', description: 'Builds from damage taken. Full rage = damage boost.'  },
      { name: 'Rage Explosion', description: 'Once per match power-up with time limit.' , input: 'ABC' },
      { name: 'Concentration One', description: 'Briefly slow time for precise counter-attacks.' , input: 'BCD' },
      { name: 'Sword Gauge', description: 'Measures weapon durability. Depletes on clashes.'  },
      { name: 'Weapon Disarm', description: 'Heavy hits can disarm the opponent.'  },
      { name: 'Deflect', description: 'Counter weapon attacks.'  },
      { name: 'Roll', description: 'Evasive dodge roll.' , input: 'AB' },
      { name: 'State of Nothingness', description: 'Time slows down when activated at low health.'  }
    ],

    characters: [
      { id: 'basara', name: 'Basara', moveCount: 0 },
      { id: 'charlotte', name: 'Charlotte', moveCount: 0 },
      { id: 'enja', name: 'Enja', moveCount: 0 },
      { id: 'gaira', name: 'Gaira', moveCount: 0 },
      { id: 'galford', name: 'Galford', moveCount: 0 },
      { id: 'hanzo', name: 'Hanzo', moveCount: 0 },
      { id: 'haohmaru', name: 'Haohmaru', moveCount: 0 },
      { id: 'jubei', name: 'Jubei', moveCount: 0 },
      { id: 'kazuki', name: 'Kazuki', moveCount: 0 },
      { id: 'kyoshiro', name: 'Kyoshiro', moveCount: 0 },
      { id: 'mina', name: 'Mina', moveCount: 0 },
      { id: 'nakoruru', name: 'Nakoruru', moveCount: 0 },
      { id: 'rimururu', name: 'Rimururu', moveCount: 0 },
      { id: 'shizumaru', name: 'Shizumaru', moveCount: 0 },
      { id: 'sogetsu', name: 'Sogetsu', moveCount: 0 },
      { id: 'suija', name: 'Suija', moveCount: 0 },
      { id: 'tam-tam', name: 'Tam Tam', moveCount: 0 },
      { id: 'ukyo', name: 'Ukyo', moveCount: 0 },
      { id: 'yoshitora', name: 'Yoshitora', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'samurai-shodown-v-special',

    mameRomset: "samsho5sp",

    name: "Samurai Shodown V Special",
    tagline: "The Special Edition",

    developer: "SNK",

    releaseYear: 2004,
    platform: "Arcade, NeoGeo, PC",

rosterCount: 1,

        
    systemMechanics: [
      { name: 'Rage Gauge', description: 'Builds when taking damage.'  },
      { name: 'Rage Explosion', description: 'Once per match burst for power-up.' , input: 'ABC' },
      { name: 'Concentration One', description: 'Time-slow for punishes.' , input: 'BCD' },
      { name: 'Overkill', description: 'Fatal finishing move. Ends the match with a violent KO animation.'  },
      { name: 'Weapon Disarm', description: 'Knock away the opponent\'s weapon.'  },
      { name: 'Deflect', description: 'Counter weapon attacks for openings.'  },
      { name: 'Suicide', description: 'Forfeit the round to gain full meter next round.' , input: '214+BCD' },
      { name: 'Mu no Kyouchi', description: 'State of Nothingness time-slow at critical health.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'savage-reign-fu-un-mokushiroku-kakutou-sousei',

    mameRomset: "",

    name: "Savage Reign",

    developer: "Unknown",

    releaseYear: 1995,

    platform: "Neo Geo Arcade PlayStation, PC",

rosterCount: 11,

        characters: [
      { id: 'carol', name: 'Carol', moveCount: 0 },
      { id: 'chung', name: 'Chung', moveCount: 0 },
      { id: 'gordon', name: 'Gordon', moveCount: 0 },
      { id: 'gozu', name: 'Gozu', moveCount: 0 },
      { id: 'joker', name: 'Joker', moveCount: 0 },
      { id: 'king-lion', name: 'King Lion', moveCount: 0 },
      { id: 'max-eagle', name: 'Max Eagle', moveCount: 0 },
      { id: 'mezu', name: 'Mezu', moveCount: 0 },
      { id: 'nicola', name: 'Nicola', moveCount: 0 },
      { id: 'sho-hayate', name: 'Sho Hayate', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'snk-heroines-tag-team-frenzy',

    mameRomset: "",

    name: "SNK Heroines: Tag Team Frenzy",
    tagline: "Enter the Arena",

    developer: "SNK",

    releaseYear: 2018,

    platform: "Switch, PS4, PC",

rosterCount: 16,

        
    systemMechanics: [
      { name: 'Dream Finish', description: 'Matches can only be won with a Dream Finish super.'  },
      { name: 'Tag System', description: 'Two characters. Tag freely mid-match.'  },
      { name: 'Simple Controls', description: 'One-button specials. Direction + special button.'  },
      { name: 'Spirit Gauge', description: 'Shared meter between both characters.'  },
      { name: 'Items', description: 'Random items spawn that affect gameplay.'  },
      { name: 'Guard', description: 'Hold back to block. No crouching block.'  },
      { name: 'Support Attack', description: 'Call partner for assist.'  },
      { name: 'Costume Customization', description: 'Customize character outfits and accessories.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'snk-vs-capcom-svc-chaos',

    mameRomset: "",

    name: "SNK vs. Capcom: SVC Chaos",
    tagline: "The Ultimate Collision",

    developer: "Capcom",

    releaseYear: 2003,
    platform: "Arcade, PS2, Xbox, PC",

rosterCount: 37,

        
    systemMechanics: [
      { name: 'Groove System', description: 'SNK characters use KOF-style meter. Capcom characters use SF-style meter.'  },
      { name: 'Exceed', description: 'Powerful super at low health. Different per-system.'  },
      { name: 'MAX Mode', description: 'SNK groove power-up state for enhanced combos.'  },
      { name: 'Guard Cancel', description: 'Counter from blockstun.'  },
      { name: 'Front Step', description: 'Forward dash with varying properties.'  },
      { name: 'GCF/GCA', description: 'Guard Cancel Front/Attack — escape options from block.'  },
      { name: 'MIDNIGHT BLISS', description: 'Demitri\'s secret super transforms the opponent.'  },
      { name: 'Roll', description: 'Invincible evasion roll.'  }
    ],

    characters: [
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'athena', name: 'Athena', moveCount: 0 },
      { id: 'balrog', name: 'Balrog', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 },
      { id: 'demitri', name: 'Demitri', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'earthquake', name: 'Earthquake', moveCount: 0 },
      { id: 'evil-ryu', name: 'Evil Ryu', moveCount: 0 },
      { id: 'gaedel', name: 'Gaedel', moveCount: 0 },
      { id: 'geese-howard', name: 'Geese Howard', moveCount: 0 },
      { id: 'genjuro-kibagami', name: 'Genjuro Kibagami', moveCount: 0 },
      { id: 'goenitz', name: 'Goenitz', moveCount: 0 },
      { id: 'guile', name: 'Guile', moveCount: 0 },
      { id: 'haohmaru', name: 'Haohmaru', moveCount: 0 },
      { id: 'hugo', name: 'Hugo', moveCount: 0 },
      { id: 'iori-yagami', name: 'Iori Yagami', moveCount: 0 },
      { id: 'kasumi-todoh', name: 'Kasumi Todoh', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan', moveCount: 0 },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi', moveCount: 0 },
      { id: 'm-bison', name: 'M. Bison', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'mars-people', name: 'Mars People', moveCount: 0 },
      { id: 'mr-karate', name: 'Mr. Karate', moveCount: 0 },
      { id: 'red-arremer', name: 'Red Arremer', moveCount: 0 },
      { id: 'rock-howard', name: 'Rock Howard', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'serious-mr-karate', name: 'Serious Mr. Karate', moveCount: 0 },
      { id: 'shiki', name: 'Shiki', moveCount: 0 },
      { id: 'shin-akuma', name: 'Shin Akuma', moveCount: 0 },
      { id: 'tabasa', name: 'Tabasa', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'vega', name: 'Vega', moveCount: 0 },
      { id: 'violent-ken', name: 'Violent Ken', moveCount: 0 },
      { id: 'zero', name: 'Zero', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'soul-calibur',

    mameRomset: "",

    name: "Soul Calibur",
    tagline: "Transcending History",

    developer: "Unknown",

    releaseYear: 1998,

    platform: "Arcade Sega Dreamcast, PC",

rosterCount: 10,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'soul-edge-soul-blade',

    mameRomset: "",

    name: "Soul Edge (Soul Blade)",
    tagline: "A Tale of Souls and Swords",

    developer: "Unknown",

    releaseYear: 1995,

    platform: "Arcade, PS1, PC",

rosterCount: 10,

        characters: [
      { id: 'cervantes', name: 'Cervantes', moveCount: 0 },
      { id: 'hwang', name: 'Hwang', moveCount: 0 },
      { id: 'li-long', name: 'Li Long', moveCount: 0 },
      { id: 'mitsurugi', name: 'Mitsurugi', moveCount: 0 },
      { id: 'rock', name: 'Rock', moveCount: 0 },
      { id: 'seong-mi-na', name: 'Seong Mi-na', moveCount: 0 },
      { id: 'siegfried', name: 'Siegfried', moveCount: 0 },
      { id: 'sophitia', name: 'Sophitia', moveCount: 0 },
      { id: 'taki', name: 'Taki', moveCount: 0 },
      { id: 'voldo', name: 'Voldo', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'street-fighter-6',

    mameRomset: "",

    name: "Street Fighter 6",
    searchAliases: ['sf6'],
    tagline: "Your Moment. Your Fight.",

    developer: "Capcom",

    releaseYear: 2023,

    platform: "PS4, PS5, Xbox One, Xbox Series X/S, PC",

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves'],

rosterCount: 25,

            tags: ['3D', 'Modern'],
    links: [
      { title: 'Official Site / Patch Notes', url: 'https://www.streetfighter.com/6/' },
      { title: 'Official Frame Data (CFN)', url: 'https://www.streetfighter.com/6/buckler/character' },
      { title: 'SuperCombo Wiki (SF6)', url: 'https://wiki.supercombo.gg/w/Street_Fighter_6' }
    ],

    
    systemMechanics: [
      { name: 'Drive System', description: 'A universal resource gauge powering Drive Impact, Drive Parry, Drive Rush, Overdrive, and Drive Reversal. Managing Drive Gauge is the core of SF6.'  },
      { name: 'Drive Impact', description: 'An armored strike that absorbs hits and causes wall splat on hit or crumple on counter. Costs 1 Drive bar.' , input: '5HP+HK' },
      { name: 'Drive Parry', description: 'Hold to auto-parry all attacks. Perfect Parry on precise timing freezes the opponent. Costs Drive on sustained use.' , input: '[MP+MK]' },
      { name: 'Drive Rush', description: 'A forward dash cancel from Drive Parry or normal attacks. Enables extended combos and pressure. Costs 1-3 bars.' , input: '66 or MP+MK~66' },
      { name: 'Overdrive (OD)', description: 'Enhanced special moves with improved properties like more hits, better frame advantage, or armor. Costs 2 Drive bars.'  },
      { name: 'Drive Reversal', description: 'A counterattack performed while blocking. Pushes the opponent away and resets neutral. Costs 2 Drive bars.' , input: '6HP+HK (while blocking)' },
      { name: 'Burnout', description: 'When Drive Gauge is depleted, you enter Burnout: chip damage becomes lethal, Drive Impact causes stun, and you cannot use Drive moves.'  },
      { name: 'Modern Controls', description: 'Simplified control scheme with auto-combos, one-button specials, and assisted inputs. Trades some move access for accessibility.'  }
    ],

    characters: [
      { id: 'aki', name: 'A.K.I.', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'blanka', name: 'Blanka', moveCount: 0 },
      { id: 'cammy', name: 'Cammy', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'dee-jay', name: 'Dee Jay', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'e-honda', name: 'E. Honda', moveCount: 0 },
      { id: 'ed', name: 'Ed', moveCount: 0 },
      { id: 'guile', name: 'Guile', moveCount: 0 },
      { id: 'jamie', name: 'Jamie', moveCount: 0 },
      { id: 'jp', name: 'JP', moveCount: 0 },
      { id: 'juri', name: 'Juri', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'kimberly', name: 'Kimberly', moveCount: 0 },
      { id: 'lily', name: 'Lily', moveCount: 0 },
      { id: 'luke', name: 'Luke', moveCount: 0 },
      { id: 'manon', name: 'Manon', moveCount: 0 },
      { id: 'marisa', name: 'Marisa', moveCount: 0 },
      { id: 'rashid', name: 'Rashid', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 },
      { id: 'm-bison', name: 'M. Bison', moveCount: 0 },
      { id: 'terry', name: 'Terry', moveCount: 0 },
      { id: 'mai', name: 'Mai', moveCount: 0 },
      { id: 'elena', name: 'Elena', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'c-viper', name: 'C. Viper', moveCount: 0 },
      { id: 'alex', name: 'Alex', moveCount: 0 },
      { id: 'ingrid', name: 'Ingrid', moveCount: 0 }
    ],

    

  },

  {

    id: 'street-fighter-alpha',

    mameRomset: "",

    name: "Street Fighter Alpha",
    tagline: "The Alpha Generation",

    developer: "Capcom",

    releaseYear: 1995,

    platform: "Windows PlayStation 4 PlayStation 5 Xbox Series X/S Arcade, PC",

        
    systemMechanics: [
      { name: 'Alpha Counter', description: 'Counter-attack while blocking. Costs 1 level of super meter.' , input: '6+PP or KK (blocking)' },
      { name: 'Chain Combos', description: 'Rapid-fire chain normal attacks from light to medium to heavy for quick damage.'  },
      { name: 'Air Block', description: 'Hold back while airborne to block air attacks. Unique to Alpha series.'  },
      { name: 'Recovery Roll', description: 'Roll on knockdown to recover quickly and avoid okizeme.' , input: '2P (on knockdown)' },
      { name: 'Super Combo Gauge', description: 'Three-level super meter. Higher levels deal more damage. Build by attacking.'  },
      { name: 'Taunt', description: 'Each character has a taunt that can reduce opponent\'s super meter on some versions.' , input: 'Start' },
      { name: 'Overhead', description: 'Universal overhead attack that hits crouching opponents. Slower but forces stand block.'  },
      { name: 'Throw Escape', description: 'Input the throw command during the throw startup to escape. Timing is strict.'  }
    ],

    characters: [
      { id: 'adon', name: 'Adon', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'birdie', name: 'Birdie', moveCount: 0 },
      { id: 'charlie', name: 'Charlie', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 },
      { id: 'guy', name: 'Guy', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'rose', name: 'Rose', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'sodom', name: 'Sodom', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'street-fighter-alpha-2',

    mameRomset: "sfa2",

    name: "Street Fighter Alpha 2",
    tagline: "The Custom Combo Era",

    developer: "Capcom",

    releaseYear: 1996,

    platform: "Arcade, PS1, Saturn, SNES, PC",

rosterCount: 19,

        
    systemMechanics: [
      { name: 'Custom Combo', description: 'Activate to perform a free-form combo with shadow trails. Costs full super meter.' , input: 'PP+KK at Lv1+' },
      { name: 'Alpha Counter', description: 'Counter-attack during blockstun. Costs 1 level of super meter.' , input: '6+PP or KK (blocking)' },
      { name: 'Air Block', description: 'Block while airborne. Reduces air-to-air risk.'  },
      { name: 'Recovery Roll', description: 'Roll to recover quickly after a knockdown.' , input: '2P (on knockdown)' },
      { name: 'Super Combo Gauge', description: 'Three-level meter powering supers and Custom Combos.'  },
      { name: 'Valle CC', description: 'Activate Custom Combo and immediately perform a sweep for a grounded shadow combo loop.'  },
      { name: 'Chain Combos', description: 'Light attacks chain into each other for hit confirms.'  },
      { name: 'Throw Range', description: 'Normal throws have generous range. Tick throws from blocked lights are a core mixup.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'street-fighter-alpha-3',

    mameRomset: "sfa3",

    name: "Street Fighter Alpha 3",
    tagline: "Go For Broke!",

    developer: "Capcom",

    releaseYear: 1998,

    platform: "Arcade, PS1, Saturn, DC, PSP, GBA, PC",

rosterCount: 37,

        
    systemMechanics: [
      { name: 'ISM System', description: 'Choose A-ISM, V-ISM, or X-ISM. Each offers different combo systems, defensive options, and meter behavior.'  },
      { name: 'V-ISM Custom Combos', description: 'A-ISM: Standard with multi-level supers. V-ISM: Custom Combos with shadow trails. X-ISM: Single powerful super, no air block.'  },
      { name: 'Alpha Counter', description: 'While blocking, perform a motion + punch or kick to counter-attack. Costs 1 level of super meter.' , input: '6+PP or KK (blocking)' },
      { name: 'Air Block', description: 'Block attacks while airborne (A-ISM and V-ISM only). Hold back in the air to guard.'  },
      { name: 'Ground Recovery', description: 'Press 2 punches when knocked down to perform a quick recovery roll.' , input: 'PP (on knockdown)' },
      { name: 'Guard Power Gauge', description: 'A hidden guard meter that depletes when blocking. When empty, you enter Guard Crush — a free hit for the opponent.'  },
      { name: 'Original Combos', description: 'V-ISM activation allows free-form combos with a trailing shadow that repeats your attacks.' , input: 'HP+HK (V-ISM)' },
      { name: 'Dramatic Battle', description: '2v1 mode where two players team up against a single CPU or human opponent.'  }
    ],

    characters: [
        { id: 'ryu', name: 'Ryu', moveCount: 0 },
        { id: 'ken', name: 'Ken', moveCount: 0 },
        { id: 'chun-li', name: 'Chun Li', moveCount: 0 },
        { id: 'guile', name: 'Guile', moveCount: 0 },
        { id: 'zangief', name: 'Zangief', moveCount: 0 },
        { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
        { id: 'ehonda', name: 'Ehonda', moveCount: 0 },
        { id: 'blanka', name: 'Blanka', moveCount: 0 },
        { id: 'balrog', name: 'Balrog', moveCount: 0 },
        { id: 'vega', name: 'Vega', moveCount: 0 },
        { id: 'sagat', name: 'Sagat', moveCount: 0 },
        { id: 'mbison', name: 'Mbison', moveCount: 0 },
        { id: 'sakura', name: 'Sakura', moveCount: 0 },
        { id: 'cammy', name: 'Cammy', moveCount: 0 },
        { id: 'akuma', name: 'Akuma', moveCount: 0 },
        { id: 'dan', name: 'Dan', moveCount: 0 },
        { id: 'rose', name: 'Rose', moveCount: 0 },
        { id: 'birdie', name: 'Birdie', moveCount: 0 },
        { id: 'charlie', name: 'Charlie', moveCount: 0 },
        { id: 'sodom', name: 'Sodom', moveCount: 0 },
        { id: 'guy', name: 'Guy', moveCount: 0 },
        { id: 'adon', name: 'Adon', moveCount: 0 },
        { id: 'gen', name: 'Gen', moveCount: 0 },
        { id: 'rollo', name: 'Rollo', moveCount: 0 },
        { id: 'cody', name: 'Cody', moveCount: 0 },
        { id: 'karin', name: 'Karin', moveCount: 0 },
        { id: 'r-mika', name: 'R Mika', moveCount: 0 },
        { id: 'juli', name: 'Juli', moveCount: 0 },
        { id: 'juni', name: 'Juni', moveCount: 0 },
        { id: 'evil-ryu', name: 'Evil Ryu', moveCount: 0 },
        { id: 'shin-akuma', name: 'Shin Akuma', moveCount: 0 },
        { id: 't-hawk', name: 'T Hawk', moveCount: 0 },
        { id: 'fei-long', name: 'Fei Long', moveCount: 0 },
        { id: 'deejay', name: 'Deejay', moveCount: 0 },
        { id: 'maki', name: 'Maki', moveCount: 0 },
        { id: 'eagle', name: 'Eagle', moveCount: 0 },
        { id: 'yun', name: 'Yun', moveCount: 0 },
        { id: 'ingrid', name: 'Ingrid', moveCount: 0 }
      ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'street-fighter-ex3',

    mameRomset: "",

    name: "Street Fighter EX3",
    tagline: "The 3D Bout",

    developer: "Capcom",

    releaseYear: 2000,

    platform: "PS2, PC",

rosterCount: 21,

        
    systemMechanics: [
      { name: 'Meteor Combo', description: 'Powerful super that costs 3 bars. Cinematic and devastating damage.'  },
      { name: 'Guard Break', description: 'A universal unblockable attack. Costs 1 super bar.' , input: 'LP+LK+HP+HK' },
      { name: 'Cancel Break', description: 'Cancel certain moves into other moves for combo extensions. Costs meter.'  },
      { name: 'Critical Parade', description: 'Chain multiple supers together for massive combos. Costs multiple bars.'  },
      { name: 'Momentary Combo', description: 'Auto-combo activated by pressing LP repeatedly. Simplified execution.'  },
      { name: 'Excel', description: 'Custom combo system. Activate for free-form chains. Costs 1 meter bar.' , input: 'LP+MP+HP' },
      { name: 'Tag System', description: 'Tag partner characters in and out during the match for strategic variety.'  },
      { name: 'Super Cancels', description: 'Cancel special moves directly into super moves for extended combos.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'street-fighter-iii-2nd-impact',

    mameRomset: "",

    name: "Street Fighter III: 2nd Impact",
    tagline: "Giant Attack",

    developer: "Capcom",

    releaseYear: 1997,

    platform: "Windows PlayStation 4 PlayStation 5 Xbox Series X/S Arcade, PC",

        
    systemMechanics: [
      { name: 'Parry', description: 'Tap forward at the moment of impact to parry an attack. Nullifies damage and leaves the opponent vulnerable.' , input: '6 (tap)' },
      { name: 'Low Parry', description: 'Tap down to parry low attacks. Grants frame advantage for a punish.' , input: '2 (tap)' },
      { name: 'Air Parry', description: 'Parry attacks while airborne by tapping forward. Enables air-to-air defensive play.' , input: '6 (in air)' },
      { name: 'Super Arts', description: 'Choose 1 of 3 Super Arts at character select. Each has different meter length, stock count, and EX availability.'  },
      { name: 'EX Specials', description: 'Enhanced special moves using one bar of super gauge. More damage, better properties, sometimes new moves.' , input: 'Motion + 2 buttons' },
      { name: 'Personal Action', description: 'Unique taunt per character that grants a buff when completed. Buffs vary from damage boost to meter gain.' , input: 'HP+HK' },
      { name: 'Leap Attack', description: 'A universal short hop overhead attack that goes over lows. Unique animation per character.' , input: 'MP+MK' },
      { name: 'Quick Standing', description: 'Tech a knockdown by pressing down as you land. Reduces recovery time and resets neutral faster.'  }
    ],

    characters: [
      { id: 'alex', name: 'Alex', moveCount: 0 },
      { id: 'dudley', name: 'Dudley', moveCount: 0 },
      { id: 'elena', name: 'Elena', moveCount: 0 },
      { id: 'hugo', name: 'Hugo', moveCount: 0 },
      { id: 'ibuki', name: 'Ibuki', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'necro', name: 'Necro', moveCount: 0 },
      { id: 'oro', name: 'Oro', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sean', name: 'Sean', moveCount: 0 },
      { id: 'urien', name: 'Urien', moveCount: 0 },
      { id: 'yang', name: 'Yang', moveCount: 0 },
      { id: 'yun', name: 'Yun', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'street-fighter-iii-new-generation',

    mameRomset: "",

    name: "Street Fighter III: New Generation",
    tagline: "A New Generation",

    developer: "Capcom",

    releaseYear: 1997,

    platform: "Arcade, PC",

rosterCount: 11,

        
    systemMechanics: [
      { name: 'Parry', description: 'Tap forward at the moment of impact to parry an attack. Nullifies damage and enables punishment.' , input: '6 (tap)' },
      { name: 'Low Parry', description: 'Tap down at the right moment to parry crouching attacks.' , input: '2 (tap)' },
      { name: 'Super Arts', description: 'Choose 1 of 3 Super Arts at character select. Each has a different meter configuration and EX move access.'  },
      { name: 'EX Specials', description: 'Press two punch or kick buttons during a special to perform an enhanced version at the cost of super meter.'  },
      { name: 'Throw Tech', description: 'Input throw at the same time as the opponent to escape. Universal throw range and startup.'  },
      { name: 'High Jump', description: 'Press down then up quickly for a higher, longer jump arc. Useful for crossups and spacing.' , input: '2~8' },
      { name: 'Dash', description: 'Double tap forward or back to dash. Speed varies by character. Core movement tool.'  },
      { name: 'Personal Action', description: 'Character-specific taunt that grants unique buffs when completed successfully.' , input: 'HP+HK' }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'street-fighter-v-champion-edition',

    mameRomset: "",

    name: "Street Fighter V: Champion Edition",
    tagline: "Rise Up",

    developer: "Capcom",

    releaseYear: 2016,

    platform: "PS4, PC",

rosterCount: 43,

            tags: ['3D'],

    
    systemMechanics: [
      { name: 'V-System', description: 'Each character has unique V-Skill, V-Trigger, and V-Reversal that define their playstyle.'  },
      { name: 'V-Trigger', description: 'Spend V-Gauge to activate a powered-up state. Two V-Trigger options per character with different abilities.' , input: 'HP+HK' },
      { name: 'V-Skill', description: 'A free special ability unique to each character. Two V-Skill options. Builds V-Gauge.' , input: 'MP+MK' },
      { name: 'V-Reversal', description: 'Counter-attack during blockstun. Costs 1 bar of V-Gauge.' , input: '6+PPP (blocking)' },
      { name: 'Crush Counter', description: 'Heavy attacks on counter hit cause a Crush Counter — extended hitstun for big punishes.'  },
      { name: 'Critical Art', description: 'Super move that costs full EX gauge. Cinematic and high damage.'  },
      { name: 'EX Specials', description: 'Enhanced specials using EX gauge. Better frame data, more damage, or new properties.'  },
      { name: 'Throw Loop', description: 'Shimmy or throw after plus frames. Tick throw pressure is a fundamental mixup.'  }
    ],

    characters: [
      { id: 'abigail', name: 'Abigail', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'alex', name: 'Alex', moveCount: 0 },
      { id: 'balrog', name: 'Balrog', moveCount: 0 },
      { id: 'birdie', name: 'Birdie', moveCount: 0 },
      { id: 'blanka', name: 'Blanka', moveCount: 0 },
      { id: 'cammy', name: 'Cammy', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'cody', name: 'Cody', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'e-honda', name: 'E. Honda', moveCount: 0 },
      { id: 'ed', name: 'Ed', moveCount: 0 },
      { id: 'fang', name: 'F.A.N.G', moveCount: 0 },
      { id: 'falkie', name: 'Falkie', moveCount: 0 },
      { id: 'g', name: 'G', moveCount: 0 },
      { id: 'gill', name: 'Gill', moveCount: 0 },
      { id: 'guile', name: 'Guile', moveCount: 0 },
      { id: 'ibuki', name: 'Ibuki', moveCount: 0 },
      { id: 'juri', name: 'Juri', moveCount: 0 },
      { id: 'kage', name: 'Kage', moveCount: 0 },
      { id: 'karin', name: 'Karin', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'kolin', name: 'Kolin', moveCount: 0 },
      { id: 'laura', name: 'Laura', moveCount: 0 },
      { id: 'lucia', name: 'Lucia', moveCount: 0 },
      { id: 'luke', name: 'Luke', moveCount: 0 },
      { id: 'm-bison', name: 'M. Bison', moveCount: 0 },
      { id: 'menat', name: 'Menat', moveCount: 0 },
      { id: 'nash', name: 'Nash', moveCount: 0 },
      { id: 'necalli', name: 'Necalli', moveCount: 0 },
      { id: 'oro', name: 'Oro', moveCount: 0 },
      { id: 'poison', name: 'Poison', moveCount: 0 },
      { id: 'r-mika', name: 'R. Mika', moveCount: 0 },
      { id: 'rashid', name: 'Rashid', moveCount: 0 },
      { id: 'rose', name: 'Rose', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'sakura', name: 'Sakura', moveCount: 0 },
      { id: 'seth', name: 'Seth', moveCount: 0 },
      { id: 'urien', name: 'Urien', moveCount: 0 },
      { id: 'vega', name: 'Vega', moveCount: 0 },
      { id: 'zeku', name: 'Zeku', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'super-street-fighter-ii-turbo',

    mameRomset: "ssf2t",

    name: "Super Street Fighter II Turbo",
    tagline: "The Grand Master Challenge",

    developer: "Capcom",

    releaseYear: 1994,
    platform: "Arcade, 3DO, PC",

rosterCount: 17,

            tags: ['Golden', '2D'],

    
    systemMechanics: [
      { name: 'Super Combos', description: 'First SF game with super meters. Build meter by attacking, then unleash a devastating Super Combo at full gauge.'  },
      { name: 'Throw Teching', description: 'Escape throws by inputting the same throw command during the tech window. Reduces throw damage.'  },
      { name: 'Soft Knockdown', description: 'Most knockdowns allow quick recovery. Hard knockdowns from sweeps and throws give okizeme advantage.'  },
      { name: 'Chip Damage', description: 'Special moves and supers deal reduced damage when blocked. Chip damage can KO in this game.'  },
      { name: 'Reversal Timing', description: 'Input a special move on the first frame of wakeup for an automatic reversal. Tight 1-frame window.'  },
      { name: 'Old Characters', description: 'Hold Jab before selecting to play the Champion Edition version of a character with different properties.'  },
      { name: 'Dizzy System', description: 'Characters can be stunned after taking too many hits in succession. Mash buttons/directions to recover faster.'  },
      { name: 'Safe Jumps', description: 'Time a jump attack to land and recover before the opponent\'s reversal becomes active. Core okizeme technique.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'super-street-fighter-ii',

    mameRomset: "",

    name: "Super Street Fighter II: The New Challengers",
    tagline: "The New Challengers",

    developer: "Capcom",

    releaseYear: 1993,

        
    systemMechanics: [
      { name: 'New Challengers', description: 'Adds Cammy, Fei Long, T. Hawk, and Dee Jay to the roster, each with unique playstyles.'  },
      { name: 'Throw Teching', description: 'Input throw at the same time as the opponent to reduce damage.'  },
      { name: 'Reversal', description: 'Input a special move on the first wakeup frame for an invincible counter-attack.'  },
      { name: 'Dizzy System', description: 'Stun gauge fills when hit. Full gauge = dizzy state. Mash to recover.'  },
      { name: 'Priority System', description: 'Stronger attacks beat weaker ones in trades. Heavy > Medium > Light.'  },
      { name: 'Tick Throws', description: 'Block a light attack then throw. A fundamental mixup in classic SF.'  },
      { name: 'Cross-up', description: 'Jump over and attack from behind to force a reversed block direction.'  },
      { name: 'Safe Jump', description: 'Time a jump-in to land and block before reversals can hit.'  }
    ],

    characters: [
      { id: 'balrog', name: 'Balrog', moveCount: 0 },
      { id: 'blanka', name: 'Blanka', moveCount: 0 },
      { id: 'cammy', name: 'Cammy', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'dee-jay', name: 'Dee Jay', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'e-honda', name: 'E. Honda', moveCount: 0 },
      { id: 'fei-long', name: 'Fei Long', moveCount: 0 },
      { id: 'guile', name: 'Guile', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'm-bison', name: 'M. Bison', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 't-hawk', name: 'T. Hawk', moveCount: 0 },
      { id: 'vega', name: 'Vega', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'tao-feng-fist-of-the-lotus',

    mameRomset: "",

    name: "Tao Feng: Fist of the Lotus",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 2003,

    platform: "Xbox, PC",

rosterCount: 8,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'tatsunoko-vs-capcom-ultimate-all-stars',

    mameRomset: "",

    name: "Tatsunoko vs. Capcom: Ultimate All-Stars",
    tagline: "Cross Generation of Heroes",

    developer: "Capcom",

    releaseYear: 2010,

    platform: "Arcade, Wii, PC",

rosterCount: 23,

        
    systemMechanics: [
      { name: 'Baroque Cancel', description: 'Sacrifice red health to cancel any move. Damage scales with health sacrificed.' , input: 'A+B+C' },
      { name: 'Mega Crash', description: 'Burst out of combos. Costs 2 bars and some health.' , input: 'All buttons' },
      { name: 'Variable Air Raid', description: 'Air combo tag that brings in partner mid-aerial rave.'  },
      { name: 'Hyper Combo', description: 'Super moves. DHC chains between partners.'  },
      { name: 'Advancing Guard', description: 'Push opponent away while blocking.' , input: 'PP (blocking)' },
      { name: 'Assists', description: 'Call partner for assist attacks.'  },
      { name: 'Aerial Rave', description: 'Launch and air combo chains.'  },
      { name: 'Giants', description: 'Some characters are giants that fight solo but have massive reach and health.'  }
    ],

    characters: [
      { id: 'alex', name: 'Alex', moveCount: 0 },
      { id: 'casshan', name: 'Casshan', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'doronjo', name: 'Doronjo', moveCount: 0 },
      { id: 'frank-west', name: 'Frank West', moveCount: 0 },
      { id: 'gold-lightan', name: 'Gold Lightan', moveCount: 0 },
      { id: 'hakushon-daimao', name: 'Hakushon Daimao', moveCount: 0 },
      { id: 'ippatsuman', name: 'Ippatsuman', moveCount: 0 },
      { id: 'joe-the-condor', name: 'Joe the Condor', moveCount: 0 },
      { id: 'jun-the-swan', name: 'Jun the Swan', moveCount: 0 },
      { id: 'karas', name: 'Karas', moveCount: 0 },
      { id: 'ken-the-eagle', name: 'Ken the Eagle', moveCount: 0 },
      { id: 'mega-man-volnutt', name: 'Mega Man Volnutt', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'polimar', name: 'Polimar', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'saki', name: 'Saki', moveCount: 0 },
      { id: 'tekkaman', name: 'Tekkaman', moveCount: 0 },
      { id: 'tekkaman-blade', name: 'Tekkaman Blade', moveCount: 0 },
      { id: 'viewtiful-joe', name: 'Viewtiful Joe', moveCount: 0 },
      { id: 'yatterman-1', name: 'Yatterman-1', moveCount: 0 },
      { id: 'yatterman-2', name: 'Yatterman-2', moveCount: 0 },
      { id: 'zero', name: 'Zero', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'tekken-1',

    mameRomset: "",

    name: "Tekken 1",
    tagline: "The King of Iron Fist Tournament",

    developer: "Unknown",

    releaseYear: 1994,

    platform: "Arcade PlayStation, PC",

rosterCount: 17,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'tekken-2',

    mameRomset: "",

    name: "Tekken 2",
    tagline: "The Iron Fist Returns",

    developer: "Unknown",

    releaseYear: 1995,

    platform: "Arcade, PS1, PC",

rosterCount: 21,

        characters: [
      { id: 'alex', name: 'Alex', moveCount: 0 },
      { id: 'anna', name: 'Anna', moveCount: 0 },
      { id: 'armor-king', name: 'Armor King', moveCount: 0 },
      { id: 'baek', name: 'Baek', moveCount: 0 },
      { id: 'bruce', name: 'Bruce', moveCount: 0 },
      { id: 'ganryu', name: 'Ganryu', moveCount: 0 },
      { id: 'heihachi', name: 'Heihachi', moveCount: 0 },
      { id: 'jack-2', name: 'Jack-2', moveCount: 0 },
      { id: 'jun-kazama', name: 'Jun Kazama', moveCount: 0 },
      { id: 'kazuya', name: 'Kazuya', moveCount: 0 },
      { id: 'king', name: 'King', moveCount: 0 },
      { id: 'kuma', name: 'Kuma', moveCount: 0 },
      { id: 'kunimitsu', name: 'Kunimitsu', moveCount: 0 },
      { id: 'lee', name: 'Lee', moveCount: 0 },
      { id: 'lei', name: 'Lei', moveCount: 0 },
      { id: 'michelle', name: 'Michelle', moveCount: 0 },
      { id: 'nina', name: 'Nina', moveCount: 0 },
      { id: 'paul', name: 'Paul', moveCount: 0 },
      { id: 'roger', name: 'Roger', moveCount: 0 },
      { id: 'wang', name: 'Wang', moveCount: 0 },
      { id: 'yoshimitsu', name: 'Yoshimitsu', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'tekken-8',

    mameRomset: "",

    name: "Tekken 8",
    notationSystem: 'tekken',
    tagline: "Fist Meets Fate",

    developer: "Bandai Namco",

    releaseYear: 2024,
    platform: "PS5, Xbox Series X/S, PC",

rosterCount: 33,

        characters: [
          { id: 'alisa-bosconovitch', name: 'Alisa Bosconovitch', moveCount: 189 },
          { id: 'asuka', name: 'Asuka', moveCount: 146 },
          { id: 'azucena-ortiz', name: 'Azucena Ortiz', moveCount: 150 },
          { id: 'bryan', name: 'Bryan', moveCount: 169 },
          { id: 'claudio', name: 'Claudio', moveCount: 101 },
          { id: 'devil-jin', name: 'Devil Jin', moveCount: 141 },
          { id: 'dragunov', name: 'Dragunov', moveCount: 141 },
          { id: 'feng', name: 'Feng', moveCount: 148 },
          { id: 'heihachi', name: 'Heihachi Mishima', moveCount: 145 },
          { id: 'hwoarang', name: 'Hwoarang', moveCount: 209 },
          { id: 'jack-8', name: 'Jack 8', moveCount: 199 },
          { id: 'jin', name: 'Jin', moveCount: 128 },
          { id: 'jun', name: 'Jun', moveCount: 149 },
          { id: 'kazuya', name: 'Kazuya Mishima', moveCount: 136 },
          { id: 'king', name: 'King', moveCount: 226 },
          { id: 'kuma', name: 'Kuma', moveCount: 144 },
          { id: 'lars-alexandersson', name: 'Lars Alexandersson', moveCount: 120 },
          { id: 'law', name: 'Law', moveCount: 162 },
          { id: 'lee', name: 'Lee', moveCount: 157 },
          { id: 'leo-kliesen', name: 'Leo Kliesen', moveCount: 141 },
          { id: 'leroy', name: 'Leroy', moveCount: 131 },
          { id: 'lili', name: 'Lili', moveCount: 149 },
          { id: 'nina', name: "Nina Williams", moveCount: 190 },
          { id: 'panda', name: 'Panda', moveCount: 134 },
          { id: 'paul', name: 'Paul Phoenix', moveCount: 143 },
          { id: 'raven', name: 'Raven', moveCount: 177 },
          { id: 'reina', name: 'Reina', moveCount: 152 },
          { id: 'shaheen', name: 'Shaheen', moveCount: 88 },
          { id: 'steve', name: 'Steve Fox', moveCount: 171 },
          { id: 'victor', name: 'Victor', moveCount: 123 },
          { id: 'xiaoyu', name: 'Ling Xiaoyu', moveCount: 172 },
          { id: 'yoshimitsu', name: 'Yoshimitsu', moveCount: 311 },
          { id: 'zafina', name: 'Zafina', moveCount: 146 }
        ],

    tabs: ['Heat Moves', 'Stances', 'While Standing', 'Strings', 'Single Hits', 'Throws', '10-Hit Combos'],
    links: [
      { title: 'Official Patch Notes (v3.00.02)', url: 'https://www.bandainamcoent.com/news/tekken-8-patch-notes-v3-00-02' },
      { title: 'Okizeme Data Repository', url: 'https://okizeme.com' },
      { title: 'Wavu Wiki', url: 'https://wavu.wiki' }
    ],
    systemMechanics: [
      { name: 'Heat System', description: 'Enter Heat via Heat Burst (2+3) or Heat Engager. Enhances moves, deals chip damage, and halts match timer. When Heat ends, all character-specific powered-up states are removed.' },
      { name: 'Heat Smash', description: 'Consumes all remaining Heat for a powerful attack. No longer causes wall splats as of v3.00.' },
      { name: 'Heat Dash', description: 'Cancel a Heat Engager by pressing forward, consuming Heat to continue combo pressure. Combo scaling is 70% when used on grounded opponents.' },
      { name: 'Rage System', description: 'Activates automatically at low health. Increases damage output and grants access to Rage Art (d/f+1+2).' },
      { name: 'Recoverable Gauge', description: 'White health taken from certain hits or chip damage that can be restored by attacking or guarding against opponent attacks.' },
      { name: 'Tornado', description: 'Universal combo extender that flips the opponent, leaving them vulnerable for further follow-ups.' },
      { name: 'Power Crush', description: 'Armored moves that absorb mid and high attacks during their startup frames.' }
    ]

  },

  {
    id: 'tekken-tag-tournament',

    mameRomset: "",
    name: 'Tekken Tag Tournament',
    tagline: "The Tag Battle",
    characters: [
      { id: 'anna-williams', name: 'Anna Williams', moveCount: 0 },
      { id: 'armor-king', name: 'Armor King', moveCount: 0 },
      { id: 'baek-doo-san', name: 'Baek Doo San', moveCount: 0 },
      { id: 'bruce-irvin', name: 'Bruce Irvin', moveCount: 0 },
      { id: 'bryan-fury', name: 'Bryan Fury', moveCount: 0 },
      { id: 'devil', name: 'Devil', moveCount: 0 },
      { id: 'eddy-gordo', name: 'Eddy Gordo', moveCount: 0 },
      { id: 'ganryu', name: 'Ganryu', moveCount: 0 },
      { id: 'gun-jack', name: 'Gun Jack', moveCount: 0 },
      { id: 'heihachi-mishima', name: 'Heihachi Mishima', moveCount: 0 },
      { id: 'hwoarang', name: 'Hwoarang', moveCount: 0 },
      { id: 'jack-2', name: 'Jack-2', moveCount: 0 },
      { id: 'jin-kazama', name: 'Jin Kazama', moveCount: 0 },
      { id: 'julia-chang', name: 'Julia Chang', moveCount: 0 },
      { id: 'jun-kazama', name: 'Jun Kazama', moveCount: 0 },
      { id: 'kazuya-mishima', name: 'Kazuya Mishima', moveCount: 0 },
      { id: 'king', name: 'King', moveCount: 0 },
      { id: 'kuma', name: 'Kuma', moveCount: 0 },
      { id: 'kunimitsu', name: 'Kunimitsu', moveCount: 0 },
      { id: 'lee-chaolan', name: 'Lee Chaolan', moveCount: 0 },
      { id: 'lei-wulong', name: 'Lei Wulong', moveCount: 0 },
      { id: 'michelle-chang', name: 'Michelle Chang', moveCount: 0 },
      { id: 'mokujin', name: 'Mokujin', moveCount: 0 },
      { id: 'nina-williams', name: 'Nina Williams', moveCount: 0 },
      { id: 'ogre', name: 'Ogre', moveCount: 0 },
      { id: 'panda', name: 'Panda', moveCount: 0 },
      { id: 'paul-phoenix', name: 'Paul Phoenix', moveCount: 0 },
      { id: 'prototype-jack', name: 'Prototype Jack', moveCount: 0 },
      { id: 'roger', name: 'Roger', moveCount: 0 },
      { id: 'true-ogre', name: 'True Ogre', moveCount: 0 },
      { id: 'unknown', name: 'Unknown', moveCount: 0 },
      { id: 'wang-jinrei', name: 'Wang Jinrei', moveCount: 0 },
      { id: 'ling-xiaoyu', name: 'Ling Xiaoyu', moveCount: 0 },
      { id: 'yoshimitsu', name: 'Yoshimitsu', moveCount: 0 }
    ]
  },

  {
    id: 'tekken-tag-tournament-2',

    mameRomset: "",
    name: 'Tekken Tag Tournament 2',
    tagline: "We Are Tekken",
    characters: []
  },

  {

    id: 'the-king-of-fighters-94',

    mameRomset: "",

    name: "The King of Fighters '94",

    developer: "SNK",

    releaseYear: 1994,

    platform: "Arcade, NeoGeo, PC",

rosterCount: 24,

        
    systemMechanics: [
      { name: 'Team Battle', description: 'Select a pre-set team of 3 characters. First KOF to use the team system.'  },
      { name: 'Desperation Move', description: 'Powerful super available when health bar is flashing red (low HP).'  },
      { name: 'Roll', description: 'Forward or backward roll with invincibility frames.' , input: 'AB' },
      { name: 'Charge Power', description: 'Hold ABC to manually charge the super gauge to POW state.' , input: 'ABC (hold)' },
      { name: 'Knockdown Recovery', description: 'Press buttons when knocked down for faster recovery.'  },
      { name: 'Body Toss', description: 'Standard and command throws are core to KOF\'s close-range game.'  },
      { name: 'Counter Attack', description: 'CD button while standing for a heavy blow-back attack.' , input: 'CD' },
      { name: 'Jumping Attacks', description: 'Hyper hop, hop, normal jump, and super jump give 4 jump arcs for pressure.'  }
    ],

    characters: [
      { id: 'andy-bogard', name: 'Andy Bogard', moveCount: 0 },
      { id: 'athena-asamiya', name: 'Athena Asamiya', moveCount: 0 },
      { id: 'benimaru-nikaido', name: 'Benimaru Nikaido', moveCount: 0 },
      { id: 'chang-koehan', name: 'Chang Koehan', moveCount: 0 },
      { id: 'chin-gentsai', name: 'Chin Gentsai', moveCount: 0 },
      { id: 'choi-bounge', name: 'Choi Bounge', moveCount: 0 },
      { id: 'clark-still', name: 'Clark Still', moveCount: 0 },
      { id: 'goro-daimon', name: 'Goro Daimon', moveCount: 0 },
      { id: 'heidern', name: 'Heidern', moveCount: 0 },
      { id: 'heavy-d', name: 'Heavy D!', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan', moveCount: 0 },
      { id: 'king', name: 'King', moveCount: 0 },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi', moveCount: 0 },
      { id: 'lucky-glauber', name: 'Lucky Glauber', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'ralf-jones', name: 'Ralf Jones', moveCount: 0 },
      { id: 'robert-garcia', name: 'Robert Garcia', moveCount: 0 },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki', moveCount: 0 },
      { id: 'rugal-bernstein', name: 'Rugal Bernstein', moveCount: 0 },
      { id: 'sie-kensou', name: 'Sie Kensou', moveCount: 0 },
      { id: 'takuma-sakazaki', name: 'Takuma Sakazaki', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'yuri-sakazaki', name: 'Yuri Sakazaki', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'the-king-of-fighters-2000',

    mameRomset: "",

    name: "The King of Fighters 2000",
    tagline: "The NESTS Crisis",

    developer: "SNK",

    releaseYear: 2000,

    platform: "Arcade, NeoGeo, PS2, DC, PC",

rosterCount: 33,

        
    systemMechanics: [
      { name: 'Striker System', description: 'Call a 4th team member as a striker assist during combos and pressure.'  },
      { name: 'Counter Mode', description: 'Activate for auto-guard and ability to cancel any move into supers.' , input: 'ABC' },
      { name: 'Armor Mode', description: 'Activate for super armor on all attacks and increased damage.' , input: 'BCD' },
      { name: 'MAX Super', description: 'Enhanced super available during Counter/Armor Mode. More damage.'  },
      { name: 'Roll', description: 'Invincible evasion roll forward or backward.' , input: 'AB' },
      { name: 'Guard Cancel Roll', description: 'Roll out of blockstun. Costs meter.' , input: 'AB (blocking)' },
      { name: 'Guard Cancel Blowback', description: 'Counter-attack from block. Costs meter.' , input: 'CD (blocking)' },
      { name: 'Emergency Evasion', description: 'Quick dodge with invincibility. Punishable on recovery.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'the-king-of-fighters-2001',

    mameRomset: "",

    name: "The King of Fighters 2001",
    tagline: "The NESTS Conclusion",

    developer: "SNK",

    releaseYear: 2001,

    platform: "Arcade, NeoGeo, PS2, DC, PC",

rosterCount: 34,

        
    systemMechanics: [
      { name: 'Tactical Order', description: 'Choose how many fighters vs strikers (1-4 fighters, remaining become strikers).'  },
      { name: 'Wire Attack', description: 'Certain moves cause wall bounce, enabling follow-up combos.'  },
      { name: 'Power MAX', description: 'Activate MAX mode for enhanced specials and access to MAX2 supers.' , input: 'ABC' },
      { name: 'Striker Combos', description: 'Call strikers during combos for extensions.'  },
      { name: 'Roll', description: 'Invincible forward/backward roll.' , input: 'AB' },
      { name: 'Guard Cancel Roll', description: 'Escape blockstun with a roll.' , input: 'AB (blocking)' },
      { name: 'Guard Cancel Blowback', description: 'Counter-attack from blockstun.' , input: 'CD (blocking)' },
      { name: 'MAX2 Super', description: 'Ultimate super available at low health in MAX mode.'  }
    ],

    characters: [
      { id: 'angel', name: 'Angel', moveCount: 0 },
      { id: 'andy-bogard', name: 'Andy Bogard', moveCount: 0 },
      { id: 'athena-asamiya', name: 'Athena Asamiya', moveCount: 0 },
      { id: 'bao', name: 'Bao', moveCount: 0 },
      { id: 'benimaru-nikaido', name: 'Benimaru Nikaido', moveCount: 0 },
      { id: 'blue-mary', name: 'Blue Mary', moveCount: 0 },
      { id: 'chang-koehan', name: 'Chang Koehan', moveCount: 0 },
      { id: 'chin-gentsai', name: 'Chin Gentsai', moveCount: 0 },
      { id: 'choi-bounge', name: 'Choi Bounge', moveCount: 0 },
      { id: 'clark-still', name: 'Clark Still', moveCount: 0 },
      { id: 'foxy', name: 'Foxy', moveCount: 0 },
      { id: 'heidern', name: 'Heidern', moveCount: 0 },
      { id: 'hinako-shijou', name: 'Hinako Shijou', moveCount: 0 },
      { id: 'iori-yagami', name: 'Iori Yagami', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'kula-diamond', name: 'Kula Diamond', moveCount: 0 },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi', moveCount: 0 },
      { id: 'leona-heidern', name: 'Leona Heidern', moveCount: 0 },
      { id: 'li-xiangfei', name: 'Li Xiangfei', moveCount: 0 },
      { id: 'lin', name: 'Lin', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'maxima', name: 'Maxima', moveCount: 0 },
      { id: 'may-lee', name: 'May Lee', moveCount: 0 },
      { id: 'ralf-jones', name: 'Ralf Jones', moveCount: 0 },
      { id: 'robert-garcia', name: 'Robert Garcia', moveCount: 0 },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki', moveCount: 0 },
      { id: 'seth', name: 'Seth', moveCount: 0 },
      { id: 'shingo-yabuki', name: 'Shingo Yabuki', moveCount: 0 },
      { id: 'sie-kensou', name: 'Sie Kensou', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'vanessa', name: 'Vanessa', moveCount: 0 },
      { id: 'whip', name: 'Whip', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'the-king-of-fighters-2002',

    mameRomset: "kof2002",

    name: "The King of Fighters 2002",
    tagline: "Challenge to Ultimate Battle",

    developer: "SNK",

    releaseYear: 2002,

    platform: "Arcade, NeoGeo, PS2, DC, Xbox, PC",

rosterCount: 39,

        
    systemMechanics: [
      { name: 'MAX Mode', description: 'Activate to power up specials and access MAX supers. Timer-based with enhanced combo potential.' , input: 'ABC' },
      { name: 'MAX2 Super', description: 'Ultimate desperation move available only in MAX Mode at low health. Devastating damage if it lands.'  },
      { name: 'Roll', description: 'Invincible forward or backward roll for evasion and crossing through opponents.' , input: 'AB' },
      { name: 'Guard Cancel Roll', description: 'Escape blockstun with an invincible roll at the cost of meter.' , input: 'AB (while blocking)' },
      { name: 'Guard Cancel Blowback', description: 'Counter-attack from blockstun that wall-bounces. Costs 1 stock.' , input: 'CD (while blocking)' },
      { name: 'Free Cancel', description: 'In MAX Mode, cancel specials into other specials or supers for extended combos.'  },
      { name: 'Wire Damage', description: 'Certain moves cause wall bounce on counter hit, enabling follow-up combos in the corner.'  },
      { name: 'Quick Emergency Evasion', description: 'Dodge attacks with invincibility frames. Can be done from neutral or while blocking.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'the-king-of-fighters-2003',

    mameRomset: "",

    name: "The King of Fighters 2003",
    tagline: "The Ash Saga Begins",

    developer: "SNK",

    releaseYear: 2003,

    platform: "Arcade, NeoGeo, PS2, Xbox, PC",

rosterCount: 30,

        
    systemMechanics: [
      { name: 'Tag System', description: 'First KOF with real-time tag. Switch characters mid-match with Leader/Order system.'  },
      { name: 'Leader Super', description: 'The designated leader has access to a unique powerful Leader Desperation Move.'  },
      { name: 'Multi-Shift', description: 'Tag in a partner mid-combo for extensions.' , input: 'Shift button' },
      { name: 'Roll', description: 'Invincible evasion roll.' , input: 'AB' },
      { name: 'Guard Cancel Roll', description: 'Escape pressure by rolling from blockstun.' , input: 'AB (blocking)' },
      { name: 'Guard Cancel Blowback', description: 'Counter-attack from blockstun.' , input: 'CD (blocking)' },
      { name: 'Anywhere Juggle', description: 'Certain moves allow follow-up juggles regardless of combo state.'  },
      { name: 'Just Defend', description: 'Tap back at the moment of impact for reduced blockstun and meter gain.' , input: '4 (tap)' }
    ],

    characters: [
      { id: 'ash-crimson', name: 'Ash Crimson', moveCount: 0 },
      { id: 'athena-asamiya', name: 'Athena Asamiya', moveCount: 0 },
      { id: 'benimaru-nikaido', name: 'Benimaru Nikaido', moveCount: 0 },
      { id: 'billy-kane', name: 'Billy Kane', moveCount: 0 },
      { id: 'blue-mary', name: 'Blue Mary', moveCount: 0 },
      { id: 'chang-koehan', name: 'Chang Koehan', moveCount: 0 },
      { id: 'clark-still', name: 'Clark Still', moveCount: 0 },
      { id: 'duolon', name: 'Duolon', moveCount: 0 },
      { id: 'gato', name: 'Gato', moveCount: 0 },
      { id: 'goro-daimon', name: 'Goro Daimon', moveCount: 0 },
      { id: 'hinako-shijou', name: 'Hinako Shijou', moveCount: 0 },
      { id: 'iori-yagami', name: 'Iori Yagami', moveCount: 0 },
      { id: 'jhun-hoon', name: 'Jhun Hoon', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan', moveCount: 0 },
      { id: 'kusanagi', name: 'Kusanagi', moveCount: 0 },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi', moveCount: 0 },
      { id: 'leona-heidern', name: 'Leona Heidern', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'malin', name: 'Malin', moveCount: 0 },
      { id: 'maxima', name: 'Maxima', moveCount: 0 },
      { id: 'ralf-jones', name: 'Ralf Jones', moveCount: 0 },
      { id: 'robert-garcia', name: 'Robert Garcia', moveCount: 0 },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki', moveCount: 0 },
      { id: 'shen-woo', name: 'Shen Woo', moveCount: 0 },
      { id: 'shingo-yabuki', name: 'Shingo Yabuki', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'tizoc', name: 'Tizoc', moveCount: 0 },
      { id: 'whip', name: 'Whip', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'the-king-of-fighters-xiii',

    mameRomset: "",

    name: "The King of Fighters XIII",
    tagline: "The Ash Conclusion",

    developer: "SNK",

    releaseYear: 2010,

    platform: "Arcade, PS3, Xbox 360, PC",

rosterCount: 32,

        
    systemMechanics: [
      { name: 'HD Mode (Hyper Drive)', description: 'Activate for free drive/super cancels. Enables Touch of Death combos.' , input: 'BC' },
      { name: 'EX Specials', description: 'Enhanced specials costing 1 bar of super meter. Better properties and damage.'  },
      { name: 'NEO MAX', description: 'Ultimate super costing 3 bars + HD gauge. Cinematic devastation.'  },
      { name: 'Drive Cancel', description: 'Cancel a special into another special. Costs drive gauge.'  },
      { name: 'Super Cancel', description: 'Cancel a special move directly into a super.'  },
      { name: 'Roll', description: 'Invincible evasion roll.' , input: 'AB' },
      { name: 'Guard Cancel Roll', description: 'Escape blockstun with a roll. Costs meter.' , input: 'AB (blocking)' },
      { name: 'Guard Cancel Blowback', description: 'Counter-attack from blockstun. Wall bounces.' , input: 'CD (blocking)' }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'the-king-of-fighters-xiv',

    mameRomset: "",

    name: "The King of Fighters XIV",
    tagline: "Burn to Fight",

    developer: "SNK",

    releaseYear: 2016,

    platform: "PS4, PC",

rosterCount: 47,

        
    systemMechanics: [
      { name: 'MAX Mode', description: 'Activate to access EX moves and extended combos. Costs 1 bar.' , input: 'BC' },
      { name: 'Quick MAX', description: 'Cancel a normal into MAX activation for combo extensions.' , input: 'BC (during normal)' },
      { name: 'Climax Super', description: 'Ultimate super costing 3 bars. Only for the anchor character.'  },
      { name: 'Rush Auto Combo', description: 'Press LP repeatedly for an auto-combo. Simplified execution for newcomers.'  },
      { name: 'Roll', description: 'Invincible dodge roll.' , input: 'AB' },
      { name: 'Guard Cancel Roll', description: 'Escape blockstun with an invincible roll.' , input: 'AB (blocking)' },
      { name: 'Guard Cancel Blowback', description: 'Counter-attack from block. Wall bounces.' , input: 'CD (blocking)' },
      { name: 'Blowback Attack', description: 'Standing CD is a heavy attack that wall-bounces on hit.' , input: 'CD' }
    ],

    characters: [
      { id: 'alice', name: 'Alice', moveCount: 0 },
      { id: 'andy-bogard', name: 'Andy Bogard', moveCount: 0 },
      { id: 'angel', name: 'Angel', moveCount: 0 },
      { id: 'antonov', name: 'Antonov', moveCount: 0 },
      { id: 'athena-asamiya', name: 'Athena Asamiya', moveCount: 0 },
      { id: 'bandeiras-hattori', name: 'Bandeiras Hattori', moveCount: 0 },
      { id: 'benimaru-nikaido', name: 'Benimaru Nikaido', moveCount: 0 },
      { id: 'billy-kane', name: 'Billy Kane', moveCount: 0 },
      { id: 'chin-gentsai', name: 'Chin Gentsai', moveCount: 0 },
      { id: 'choi-bounge', name: 'Choi Bounge', moveCount: 0 },
      { id: 'clark-still', name: 'Clark Still', moveCount: 0 },
      { id: 'dinosaur', name: 'Dinosaur', moveCount: 0 },
      { id: 'gang-il', name: 'Gang-Il', moveCount: 0 },
      { id: 'geese-howard', name: 'Geese Howard', moveCount: 0 },
      { id: 'goro-daimon', name: 'Goro Daimon', moveCount: 0 },
      { id: 'hein', name: 'Hein', moveCount: 0 },
      { id: 'iori-yagami', name: 'Iori Yagami', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan', moveCount: 0 },
      { id: 'king', name: 'King', moveCount: 0 },
      { id: 'kula-diamond', name: 'Kula Diamond', moveCount: 0 },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi', moveCount: 0 },
      { id: 'leona-heidern', name: 'Leona Heidern', moveCount: 0 },
      { id: 'love-heart', name: 'Love Heart', moveCount: 0 },
      { id: 'luong', name: 'Luong', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'mature', name: 'Mature', moveCount: 0 },
      { id: 'maxima', name: 'Maxima', moveCount: 0 },
      { id: 'meitenkun', name: 'Meitenkun', moveCount: 0 },
      { id: 'mian', name: 'Mian', moveCount: 0 },
      { id: 'mui-mui', name: 'Mui Mui', moveCount: 0 },
      { id: 'nakoruru', name: 'Nakoruru', moveCount: 0 },
      { id: 'nelson', name: 'Nelson', moveCount: 0 },
      { id: 'ralf-jones', name: 'Ralf Jones', moveCount: 0 },
      { id: 'ramon', name: 'Ramon', moveCount: 0 },
      { id: 'robert-garcia', name: 'Robert Garcia', moveCount: 0 },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki', moveCount: 0 },
      { id: 'sie-kensou', name: 'Sie Kensou', moveCount: 0 },
      { id: 'sylvie-paula-paula', name: 'Sylvie Paula Paula', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'tung-fu-rue', name: 'Tung Fu Rue', moveCount: 0 },
      { id: 'vice', name: 'Vice', moveCount: 0 },
      { id: 'xanadu', name: 'Xanadu', moveCount: 0 },
      { id: 'yuri-sakazaki', name: 'Yuri Sakazaki', moveCount: 0 },
      { id: 'zarina', name: 'Zarina', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'the-king-of-fighters-xv',

    mameRomset: "",

    name: "The King of Fighters XV",
    tagline: "Shatter All Expectations",

    developer: "SNK",

    releaseYear: 2022,

    platform: "PS4, PS5, Xbox Series X/S, PC",

rosterCount: 48,

            tags: ['3D', 'Modern'],

    
    systemMechanics: [
      { name: 'Team System', description: 'Pick a team of 3 characters. Order matters — later characters gain access to stronger meter options.'  },
      { name: 'MAX Mode', description: 'Spend 1 bar to enter MAX Mode. Enables EX specials, MAX supers, and combo extensions for a limited time.' , input: 'BC' },
      { name: 'Quick MAX', description: 'Cancel a normal into MAX Mode activation for combo extensions. Costs 1 bar and timer is shorter.' , input: 'BC (during normal)' },
      { name: 'Shatter Strike', description: 'A universal armored attack that crumples on hit. Costs 1 bar.' , input: '6+CD' },
      { name: 'Roll', description: 'A quick invincible forward roll for dodging attacks and crossing up.' , input: 'AB' },
      { name: 'Guard Cancel Roll', description: 'Roll while blocking to escape pressure. Costs 1 bar of super meter.' , input: 'AB (while blocking)' },
      { name: 'Guard Cancel Blowback', description: 'A counter-attack performed while blocking that knocks the opponent away. Costs 1 bar.' , input: 'CD (while blocking)' },
      { name: 'Climax Super', description: 'The most powerful super move. Costs 3 bars and delivers cinematic damage. Only available to the anchor.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'the-king-of-fighters-maximum-impact',

    mameRomset: "",

    name: "The King of Fighters: Maximum Impact",
    tagline: "Maximum Impact",

    developer: "Unknown",

    releaseYear: 2004,

    platform: "PS2, Xbox, PC",

rosterCount: 19,

        characters: [
      { id: 'alba-meira', name: 'Alba Meira', moveCount: 0 },
      { id: 'athena-asamiya', name: 'Athena Asamiya', moveCount: 0 },
      { id: 'chae-lim', name: 'Chae Lim', moveCount: 0 },
      { id: 'clark-still', name: 'Clark Still', moveCount: 0 },
      { id: 'duke', name: 'Duke', moveCount: 0 },
      { id: 'iori-yagami', name: 'Iori Yagami', moveCount: 0 },
      { id: 'leona-heidern', name: 'Leona Heidern', moveCount: 0 },
      { id: 'lien-neville', name: 'Lien Neville', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'maxima', name: 'Maxima', moveCount: 0 },
      { id: 'mignon-beart', name: 'Mignon Beart', moveCount: 0 },
      { id: 'ralf-jones', name: 'Ralf Jones', moveCount: 0 },
      { id: 'rock-howard', name: 'Rock Howard', moveCount: 0 },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki', moveCount: 0 },
      { id: 'seth', name: 'Seth', moveCount: 0 },
      { id: 'soiree-meira', name: 'Soiree Meira', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'yuri-sakazaki', name: 'Yuri Sakazaki', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'the-king-of-fighters-maximum-impact-2-kof-2006',

    mameRomset: "",

    name: "The King of Fighters: Maximum Impact 2",
    tagline: "KOF 2006",

    developer: "Unknown",

    releaseYear: 2006,

    platform: "PS2, PC",

rosterCount: 17,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {
    id: 'the-king-of-fighters-maximum-impact-regulation-a',

    mameRomset: "",
    releaseYear: 2007,
    platform: "Arcade, PS2, PC",
    name: "The King of Fighters: Maximum Impact Regulation 'A' (2007)",
    isDraft: true,
    rosterCount: 5,
    characters: [
      { id: 'ash-crimson', name: 'Ash Crimson', moveCount: 0 },
      { id: 'blue-mary', name: 'Blue Mary', moveCount: 0 },
      { id: 'makoto-mizoguchi', name: 'Makoto Mizoguchi', moveCount: 0 },
      { id: 'nightmare-geese', name: 'Nightmare Geese', moveCount: 0 },
      { id: 'xiao-lon', name: 'Xiao Lon', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {

    id: 'the-last-blade',

    mameRomset: "",

    name: "The Last Blade",
    tagline: "Romance of the Bakumatsu",

    developer: "SNK",

    releaseYear: 1997,
    platform: "Arcade, NeoGeo, PS1, Saturn, PC",

rosterCount: 12,

        
    systemMechanics: [
      { name: 'Speed/Power Mode', description: 'Choose Speed for chains or Power for big damage.'  },
      { name: 'Deflect', description: 'Counter weapon attacks with precise timing.' , input: '6+D' },
      { name: 'Super Desperation', description: 'Powerful super at low health.'  },
      { name: 'Repel', description: 'Parry-style defense that creates openings.'  },
      { name: 'Speed Combo', description: 'Chain attacks in Speed Mode for multi-hit combos.'  },
      { name: 'Power Slash', description: 'Massive damage single hit in Power Mode.'  },
      { name: 'Guard Cancel', description: 'Counter from blockstun.'  },
      { name: 'Dash', description: 'Forward/backward dash for mobility.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'the-last-blade-2',

    mameRomset: "",

    name: "The Last Blade 2",
    tagline: "Heart of the Samurai",

    developer: "SNK",

    releaseYear: 1998,
    platform: "Arcade, NeoGeo, DC, PS2, PC",

rosterCount: 19,

        
    systemMechanics: [
      { name: 'Speed/Power/EX Mode', description: 'Three modes: Speed for chains, Power for damage, EX for balanced.'  },
      { name: 'Deflect', description: 'Counter weapon strikes.' , input: '6+D' },
      { name: 'Super Desperation', description: 'Devastating super at critical health.'  },
      { name: 'Repel', description: 'Parry for counter opportunities.'  },
      { name: 'Speed Combo', description: 'Rapid chains in Speed Mode.'  },
      { name: 'Power Slash', description: 'Heavy damage in Power Mode.'  },
      { name: 'EX Mode', description: 'Combines Speed chains and Power damage at reduced levels.'  },
      { name: 'Guard Cancel', description: 'Counter-attack from block.'  }
    ],

    characters: [
      { id: 'akari-ichijou', name: 'Akari Ichijou', moveCount: 0 },
      { id: 'awakened-kaede', name: 'Awakened Kaede', moveCount: 0 },
      { id: 'genbu-no-okina', name: 'Genbu no Okina', moveCount: 0 },
      { id: 'hagure-hitogata', name: 'Hagure Hitogata', moveCount: 0 },
      { id: 'hibiki-takane', name: 'Hibiki Takane', moveCount: 0 },
      { id: 'hyo-amano', name: 'Hyo Amano', moveCount: 0 },
      { id: 'juzoh-kanzaki', name: 'Juzoh Kanzaki', moveCount: 0 },
      { id: 'kaede', name: 'Kaede', moveCount: 0 },
      { id: 'kaori-sanada', name: 'Kaori Sanada', moveCount: 0 },
      { id: 'keiichiro-washizuka', name: 'Keiichiro Washizuka', moveCount: 0 },
      { id: 'kouryu', name: 'Kouryu', moveCount: 0 },
      { id: 'lee-recca', name: 'Lee Recca', moveCount: 0 },
      { id: 'moriya-minakata', name: 'Moriya Minakata', moveCount: 0 },
      { id: 'mukuro', name: 'Mukuro', moveCount: 0 },
      { id: 'setsuna', name: 'Setsuna', moveCount: 0 },
      { id: 'shigen-naoe', name: 'Shigen Naoe', moveCount: 0 },
      { id: 'shinnosuke-kagami', name: 'Shinnosuke Kagami', moveCount: 0 },
      { id: 'yuki', name: 'Yuki', moveCount: 0 },
      { id: 'zantetsu', name: 'Zantetsu', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'ultimate-marvel-vs-capcom-3',

    mameRomset: "",

    name: "Ultimate Marvel vs. Capcom 3",
    tagline: "Two Worlds. One Fate.",

    developer: "Capcom",

    releaseYear: 2011,

    platform: "PS3, Xbox 360, Vita, PS4, Xbox One, PC",

rosterCount: 50,

            tags: ['3D', 'Vs.'],

    
    systemMechanics: [
      { name: 'X-Factor', description: 'Once per match, activate for a speed/damage boost and red health recovery. Stronger with fewer characters alive.' , input: 'L+M+H+S' },
      { name: 'Assists', description: 'Call partner characters for assist attacks. Choose α/β/γ assist type at character select.'  },
      { name: 'Team Aerial Combo (TAC)', description: 'During an air combo, input a direction + S to tag in a partner mid-combo for extended damage.' , input: 'Dir+S (in air combo)' },
      { name: 'Advancing Guard', description: 'Push the opponent away while blocking. Essential for defense in a rushdown-heavy game.' , input: 'PP (while blocking)' },
      { name: 'Snapback', description: 'Force opponent to switch characters. Costs 1 bar of Hyper Combo gauge.' , input: '236+A1 or A2' },
      { name: 'DHC (Delayed Hyper Combo)', description: 'Chain supers between team members by inputting partner super motions during your own super.'  },
      { name: 'Crossover Counter', description: 'Tag in a partner with an attack while blocking to escape pressure.' , input: '6+A (while blocking)' },
      { name: 'Flight/Airdash', description: 'Many characters have flight or 8-way airdashes enabling unique aerial mobility and mixups.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'ultimate-mortal-kombat-3',

    mameRomset: "umk3",

    name: "Ultimate Mortal Kombat 3",
    tagline: "The Ultimate Kombat",

    developer: "NetherRealm Studios",

    releaseYear: 1995,

    platform: "Arcade, SNES, Genesis, Saturn, PC",

rosterCount: 25,

        characters: [
      { id: 'cyrax', name: 'Cyrax', moveCount: 0 },
      { id: 'ermac', name: 'Ermac', moveCount: 0 },
      { id: 'jade', name: 'Jade', moveCount: 0 },
      { id: 'jax', name: 'Jax', moveCount: 0 },
      { id: 'kabal', name: 'Kabal', moveCount: 0 },
      { id: 'kano', name: 'Kano', moveCount: 0 },
      { id: 'kitana', name: 'Kitana', moveCount: 0 },
      { id: 'kung-lao', name: 'Kung Lao', moveCount: 0 },
      { id: 'liu-kang', name: 'Liu Kang', moveCount: 0 },
      { id: 'mileena', name: 'Mileena', moveCount: 0 },
      { id: 'nightwolf', name: 'Nightwolf', moveCount: 0 },
      { id: 'rain', name: 'Rain', moveCount: 0 },
      { id: 'reptile', name: 'Reptile', moveCount: 0 },
      { id: 'scorpion', name: 'Scorpion', moveCount: 0 },
      { id: 'sektor', name: 'Sektor', moveCount: 0 },
      { id: 'shang-tsung', name: 'Shang Tsung', moveCount: 0 },
      { id: 'sheeva', name: 'Sheeva', moveCount: 0 },
      { id: 'sindel', name: 'Sindel', moveCount: 0 },
      { id: 'smoke', name: 'Smoke', moveCount: 0 },
      { id: 'sonya-blade', name: 'Sonya Blade', moveCount: 0 },
      { id: 'stryker', name: 'Stryker', moveCount: 0 },
      { id: 'sub-zero', name: 'Sub-Zero', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'ultra-street-fighter-iv',

    mameRomset: "",

    name: "Ultra Street Fighter IV",
    tagline: "The Final Battle",

    developer: "Capcom",

    releaseYear: 2014,

    platform: "Arcade, PS3, Xbox 360, PS4, PC",

rosterCount: 41,

        
    systemMechanics: [
      { name: 'Focus Attack', description: 'Charge a crumple attack with armor. Cancel dashes for FADC combos.' , input: 'MP+MK' },
      { name: 'FADC (Focus Attack Dash Cancel)', description: 'Cancel a special into Focus Attack then dash forward. Enables combo extensions.' , input: 'MP+MK~66' },
      { name: 'Ultra Combo', description: 'Powerful cinematic move that builds from taking damage. Choose Ultra I or II, or both with Red Focus.'  },
      { name: 'Red Focus', description: 'Costs 2 EX bars. Absorbs multiple hits and crumples on any hit level.' , input: 'LP+MP+MK' },
      { name: 'EX Specials', description: 'Enhanced special moves costing 1 segment of the EX gauge.'  },
      { name: 'Delayed Wakeup', description: 'Delay your getup by 11 frames to throw off opponent\'s okizeme timing.' , input: 'KK (on knockdown)' },
      { name: 'Option Select', description: 'Input multiple commands so the game auto-selects the best option based on the situation.'  },
      { name: 'Super Combo', description: 'Traditional super move that costs full Super gauge. Rarely used due to EX efficiency.'  }
    ],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'under-night-in-birth-ii-[sysceles]',

    mameRomset: "",

    name: "Under Night In-Birth II",
    tagline: "The Hollow Night Returns",

    developer: "French-Bread",

    releaseYear: 2024,

    platform: "Windows PlayStation 4 PlayStation 5, PC",

            tags: ['Anime', '2D', 'Modern'],

    systemMechanics: [
      { name: 'GRD (Grind Grid)', description: 'Tug-of-war meter at the bottom of the screen. Win the cycle to gain Vorpal.' },
      { name: 'Vorpal State', description: 'Gained by winning the GRD cycle. Increases damage by 10% and enables Chain Shift.' },
      { name: 'Chain Shift', description: 'Convert GRD into EXS meter and pause time. Can be used to cancel attacks or extend combos.', input: 'D (x2)' },
      { name: 'Veil Off', description: 'Burst-like mechanic that pushes the opponent away, boosts damage by 20%, and allows free EX moves.', input: 'A+B+C' },
      { name: 'Passing Link', description: 'Freeform normal chaining system allowing reverse-beats (Heavy to Light).' },
      { name: 'Assault', description: 'A fast forward-moving hop attack.', input: '6D' },
      { name: 'Smart Steer', description: 'Auto-combo triggered by repeatedly pressing A.', input: 'A (repeatedly)' },
      { name: 'Creeping Edge', description: 'Forward dodge that gains GRD but is vulnerable to throws.', input: '3D' }
    ],

    characters: [
      { id: 'hyde', name: 'Hyde', moveCount: 0 },
      { id: 'linne', name: 'Linne', moveCount: 0 },
      { id: 'waldstein', name: 'Waldstein', moveCount: 0 },
      { id: 'carmine', name: 'Carmine', moveCount: 0 },
      { id: 'orie', name: 'Orie', moveCount: 0 },
      { id: 'gordeau', name: 'Gordeau', moveCount: 0 },
      { id: 'merkava', name: 'Merkava', moveCount: 0 },
      { id: 'vatista', name: 'Vatista', moveCount: 0 },
      { id: 'seth', name: 'Seth', moveCount: 0 },
      { id: 'yuzuriha', name: 'Yuzuriha', moveCount: 0 },
      { id: 'hilda', name: 'Hilda', moveCount: 0 },
      { id: 'eltnum', name: 'Eltnum', moveCount: 0 },
      { id: 'chaos', name: 'Chaos', moveCount: 0 },
      { id: 'nanase', name: 'Nanase', moveCount: 0 },
      { id: 'byakuya', name: 'Byakuya', moveCount: 0 },
      { id: 'phonon', name: 'Phonon', moveCount: 0 },
      { id: 'mika', name: 'Mika', moveCount: 0 },
      { id: 'enkidu', name: 'Enkidu', moveCount: 0 },
      { id: 'wagner', name: 'Wagner', moveCount: 0 },
      { id: 'londrekia', name: 'Londrekia', moveCount: 0 },
      { id: 'tsurugi', name: 'Tsurugi', moveCount: 0 },
      { id: 'kaguya', name: 'Kaguya', moveCount: 0 },
      { id: 'kuon', name: 'Kuon', moveCount: 0 },
      { id: 'uzuki', name: 'Uzuki', moveCount: 0 },
      { id: 'ogre', name: 'Ogre', moveCount: 0 },
      { id: 'izumi', name: 'Izumi', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'vampirehunter2',

    mameRomset: "",

    name: "Vampire Hunter 2",
    tagline: "Darkstalkers' Revenge (Japan)",

    developer: "Capcom",

    releaseYear: 1997,

    platform: "Arcade, PC, PS4, Switch, Xbox One",

        
    systemMechanics: [
      { name: 'Dark Force', description: 'Character-specific power-up mode.' , input: 'PP+KK' },
      { name: 'Chain Combo', description: 'Light-to-heavy normal chains.'  },
      { name: 'ES Moves', description: 'Enhanced specials at meter cost.'  },
      { name: 'EX Specials', description: 'Super moves at full meter.'  },
      { name: 'Push Block', description: 'Push attacker away during block.' , input: 'PP (blocking)' },
      { name: 'Air Block', description: 'Block while airborne.'  },
      { name: 'Pursuit Attack', description: 'OTG on downed opponents.'  },
      { name: 'Guard Cancel', description: 'Counter from blockstun.'  }
    ],

    characters: [
      { id: 'demitri', name: 'Demitri', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'jon-talbain', name: 'Jon Talbain', moveCount: 0 },
      { id: 'lord-raptor', name: 'Lord Raptor', moveCount: 0 },
      { id: 'victor', name: 'Victor', moveCount: 0 },
      { id: 'rikuo', name: 'Rikuo', moveCount: 0 },
      { id: 'sasquatch', name: 'Sasquatch', moveCount: 0 },
      { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
      { id: 'bishamon', name: 'Bishamon', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'donovan', name: 'Donovan', moveCount: 0 },
      { id: 'hsien-ko', name: 'Hsien Ko', moveCount: 0 },
      { id: 'hutzil', name: 'Hutzil', moveCount: 0 },
      { id: 'pyron', name: 'Pyron', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'vampiresavior',

    mameRomset: "",

    name: "Vampire Savior",
    tagline: "The Lord of Vampire",

    developer: "Capcom",

    releaseYear: 1997,

    platform: "Arcade Sega Saturn PlayStation, PC, PS4, Switch, Xbox One",

        
    systemMechanics: [
      { name: 'Dark Force', description: 'Unique power-up per character. Transforms gameplay for a limited time.' , input: 'PP+KK' },
      { name: 'Chain Combos', description: 'Light-to-heavy normal chains. The DNA of all versus-game combo systems.'  },
      { name: 'ES Moves', description: 'Enhanced specials with better properties. Costs special meter.'  },
      { name: 'EX Specials', description: 'Full-gauge super moves with cinematic animations.'  },
      { name: 'Push Block', description: 'Push the opponent away during blockstun.' , input: 'PP (blocking)' },
      { name: 'Air Dash', description: 'Dash in the air for mobility. Character-specific.'  },
      { name: 'Tech Hit', description: 'Break out of throws with proper timing.'  },
      { name: 'Pursuit Attack', description: 'OTG attacks on downed opponents.' , input: '2+HP (near downed)' }
    ],

    characters: [
      { id: 'demitri', name: 'Demitri', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'jon-talbain', name: 'Jon Talbain', moveCount: 0 },
      { id: 'lord-raptor', name: 'Lord Raptor', moveCount: 0 },
      { id: 'victor', name: 'Victor', moveCount: 0 },
      { id: 'rikuo', name: 'Rikuo', moveCount: 0 },
      { id: 'sasquatch', name: 'Sasquatch', moveCount: 0 },
      { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
      { id: 'bishamon', name: 'Bishamon', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'jedah', name: 'Jedah', moveCount: 0 },
      { id: 'q-bee', name: 'Q Bee', moveCount: 0 },
      { id: 'bb-hood', name: 'Bb Hood', moveCount: 0 },
      { id: 'lilith', name: 'Lilith', moveCount: 0 },
      { id: 'dark-talbain', name: 'Dark Talbain', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'vampiresavior2',

    mameRomset: "",

    name: "Vampire Savior 2",
    tagline: "The Lord of Vampire (Update)",

    developer: "Capcom",

    releaseYear: 1997,

    platform: "Arcade Sega Saturn PlayStation, PC, PS4, Switch, Xbox One",

        
    systemMechanics: [
      { name: 'Dark Force', description: 'Unique power-up per character.' , input: 'PP+KK' },
      { name: 'Chain Combo', description: 'Light-to-heavy chains.'  },
      { name: 'ES Moves', description: 'Enhanced specials.'  },
      { name: 'EX Specials', description: 'Full-meter supers.'  },
      { name: 'Push Block', description: 'Push opponent away when blocking.' , input: 'PP (blocking)' },
      { name: 'Air Dash', description: 'Character-specific air mobility.'  },
      { name: 'Tech Hit', description: 'Throw escape.'  },
      { name: 'Pursuit', description: 'OTG attacks on downed foes.'  }
    ],

    characters: [
      { id: 'demitri', name: 'Demitri', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'jon-talbain', name: 'Jon Talbain', moveCount: 0 },
      { id: 'lord-raptor', name: 'Lord Raptor', moveCount: 0 },
      { id: 'victor', name: 'Victor', moveCount: 0 },
      { id: 'rikuo', name: 'Rikuo', moveCount: 0 },
      { id: 'sasquatch', name: 'Sasquatch', moveCount: 0 },
      { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
      { id: 'bishamon', name: 'Bishamon', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'jedah', name: 'Jedah', moveCount: 0 },
      { id: 'q-bee', name: 'Q Bee', moveCount: 0 },
      { id: 'bb-hood', name: 'Bb Hood', moveCount: 0 },
      { id: 'lilith', name: 'Lilith', moveCount: 0 },
      { id: 'donovan', name: 'Donovan', moveCount: 0 },
      { id: 'hutzil', name: 'Hutzil', moveCount: 0 },
      { id: 'pyron', name: 'Pyron', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'virtua-fighter',

    mameRomset: "",

    name: "Virtua Fighter 1",
    tagline: "The Original 3D Fighter",

    developer: "Sega",

    releaseYear: 1993,

    platform: "Arcade Sega Saturn Sega 32X, PC",

        characters: [
      { id: 'akira', name: 'Akira', moveCount: 0 },
      { id: 'jacky', name: 'Jacky', moveCount: 0 },
      { id: 'jeffry', name: 'Jeffry', moveCount: 0 },
      { id: 'kage', name: 'Kage', moveCount: 0 },
      { id: 'lau', name: 'Lau', moveCount: 0 },
      { id: 'pai', name: 'Pai', moveCount: 0 },
      { id: 'sarah', name: 'Sarah', moveCount: 0 },
      { id: 'wolf', name: 'Wolf', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'virtua-fighter-2',

    mameRomset: "",

    name: "Virtua Fighter 2",
    tagline: "The Legend Returns",

    developer: "Sega",

    releaseYear: 1994,

    platform: "Arcade, Saturn, PS1, PC",

rosterCount: 10,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'virtua-fighter-3',

    mameRomset: "",

    name: "Virtua Fighter 3",
    tagline: "The Third Bout",

    developer: "Sega",

    releaseYear: 1996,

    platform: "Arcade, Saturn, PC",

rosterCount: 12,

        characters: [
      { id: 'akira', name: 'Akira', moveCount: 0 },
      { id: 'aoi', name: 'Aoi', moveCount: 0 },
      { id: 'jacky', name: 'Jacky', moveCount: 0 },
      { id: 'jeffry', name: 'Jeffry', moveCount: 0 },
      { id: 'kage', name: 'Kage', moveCount: 0 },
      { id: 'lau', name: 'Lau', moveCount: 0 },
      { id: 'lion', name: 'Lion', moveCount: 0 },
      { id: 'pai', name: 'Pai', moveCount: 0 },
      { id: 'sarah', name: 'Sarah', moveCount: 0 },
      { id: 'shun', name: 'Shun', moveCount: 0 },
      { id: 'taka-arashi', name: 'Taka-Arashi', moveCount: 0 },
      { id: 'wolf', name: 'Wolf', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'virtua-fighter-4',

    mameRomset: "",

    name: "Virtua Fighter 4",
    tagline: "Evolution of Combat",

    developer: "Sega",

    releaseYear: 2001,

    platform: "Arcade, PS2, PC",

rosterCount: 14,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'virtua-fighter-5-revo',

    mameRomset: "",

    name: "Virtua Fighter 5 R.E.V.O. World Stage",
    tagline: "World Stage",

    developer: "Sega",

    releaseYear: 2025,

    platform: "PS5, Xbox Series X/S, Switch 2, PC",
    
    systemMechanics: [
      { name: 'Triangle System', description: 'Strikes beat throws, throws beat guards, guards beat strikes.' },
      { name: 'Offensive Move', description: 'Press P+K+G after a defensive move to flank your opponent and gain a frame advantage.' },
      { name: 'Simplified Ukemi', description: 'Recover quickly after being knocked down by pressing any single button (P, K, or G).' }
    ],

rosterCount: 19,

        characters: [
      { id: 'akira', name: 'Akira', moveCount: 0 },
      { id: 'aoi', name: 'Aoi', moveCount: 0 },
      { id: 'brad', name: 'Brad', moveCount: 0 },
      { id: 'eileen', name: 'Eileen', moveCount: 0 },
      { id: 'el-blaze', name: 'El Blaze', moveCount: 0 },
      { id: 'goh', name: 'Goh', moveCount: 0 },
      { id: 'jacky', name: 'Jacky', moveCount: 0 },
      { id: 'jean', name: 'Jean', moveCount: 0 },
      { id: 'jeffry', name: 'Jeffry', moveCount: 0 },
      { id: 'kage', name: 'Kage', moveCount: 0 },
      { id: 'lau', name: 'Lau', moveCount: 0 },
      { id: 'lei-fei', name: 'Lei-Fei', moveCount: 0 },
      { id: 'lion', name: 'Lion', moveCount: 0 },
      { id: 'pai', name: 'Pai', moveCount: 0 },
      { id: 'sarah', name: 'Sarah', moveCount: 0 },
      { id: 'shun', name: 'Shun', moveCount: 0 },
      { id: 'taka-arashi', name: 'Taka-Arashi', moveCount: 0 },
      { id: 'vanessa', name: 'Vanessa', moveCount: 0 },
      { id: 'wolf', name: 'Wolf', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'voltage-fighter-gowcaizer-choujin-gakuen-gowcaizer',

    mameRomset: "",

    name: "Voltage Fighter Gowcaizer (Choujin Gakuen Gowcaizer)",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1995,

    platform: "Neo Geo Arcade PlayStation, PC",

rosterCount: 12,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'waku-waku-7',

    mameRomset: "",

    name: "Waku Waku 7",
    tagline: "Waku Waku!",

    developer: "Sunsoft",

    releaseYear: 1996,
    platform: "Arcade, NeoGeo, Saturn, PC",

rosterCount: 9,

        characters: [
      { id: 'arina', name: 'Arina', moveCount: 0 },
      { id: 'bonus-kun', name: 'Bonus-Kun', moveCount: 0 },
      { id: 'dandy-j', name: 'Dandy-J', moveCount: 0 },
      { id: 'fernandez', name: 'Fernandez', moveCount: 0 },
      { id: 'mauru', name: 'Mauru', moveCount: 0 },
      { id: 'politank-z', name: 'Politank-Z', moveCount: 0 },
      { id: 'rai', name: 'Rai', moveCount: 0 },
      { id: 'slash', name: 'Slash', moveCount: 0 },
      { id: 'tiptops', name: 'Tiptops', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'way-of-the-warrior',

    mameRomset: "",

    name: "Way of the Warrior",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1994,

    platform: "3DO, PC",

rosterCount: 8,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'world-heroes',

    mameRomset: "",

    name: "World Heroes",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1992,

    platform: "Arcade, NeoGeo, PC",

rosterCount: 8,

        characters: [
      { id: 'brocken', name: 'Brocken', moveCount: 0 },
      { id: 'dragon', name: 'Dragon', moveCount: 0 },
      { id: 'fuuma', name: 'Fuuma', moveCount: 0 },
      { id: 'hanzo', name: 'Hanzo', moveCount: 0 },
      { id: 'j-carn', name: 'J. Carn', moveCount: 0 },
      { id: 'janne', name: 'Janne', moveCount: 0 },
      { id: 'muscle-power', name: 'Muscle Power', moveCount: 0 },
      { id: 'rasputin', name: 'Rasputin', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'world-heroes-2',

    mameRomset: "",

    name: "World Heroes 2",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1993,

    platform: "Arcade, NeoGeo, PC",

rosterCount: 14,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'world-heroes-2-jet',

    mameRomset: "",

    name: "World Heroes 2 Jet",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1994,

    platform: "Arcade, NeoGeo, GB, PC",

rosterCount: 7,

        characters: [
      { id: 'captain-kidd', name: 'Captain Kidd', moveCount: 0 },
      { id: 'dragon', name: 'Dragon', moveCount: 0 },
      { id: 'fuuma', name: 'Fuuma', moveCount: 0 },
      { id: 'hanzo', name: 'Hanzo', moveCount: 0 },
      { id: 'jack', name: 'Jack', moveCount: 0 },
      { id: 'ryofu', name: 'Ryofu', moveCount: 0 },
      { id: 'zeus', name: 'Zeus', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'world-heroes-perfect',

    mameRomset: "",

    name: "World Heroes Perfect",
    tagline: "Enter the Arena",

    developer: "ADK",

    releaseYear: 1995,

    platform: "Arcade, NeoGeo, Saturn, PC",

rosterCount: 7,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'x-men-vs-street-fighter',

    mameRomset: "xmvsf",

    name: "X-Men vs. Street Fighter",
    tagline: "The Crossover Begins",

    developer: "Capcom",

    releaseYear: 1996,
    platform: "Arcade, Saturn, PS1, PC, PS4, Switch, Xbox One",

rosterCount: 18,

        
    systemMechanics: [
      { name: 'Tag System', description: 'First Capcom vs game with real-time tag between two characters.'  },
      { name: 'Variable Assist', description: 'Call partner for assist attacks.'  },
      { name: 'Aerial Rave', description: 'Launch and air combo with Magic Series.'  },
      { name: 'Variable Counter', description: 'Tag in partner as a reversal while blocking.'  },
      { name: 'Hyper Combo', description: 'Supers. DHC between partners.'  },
      { name: 'Advancing Guard', description: 'Push opponent away during block.' , input: 'PP (blocking)' },
      { name: 'Super Jump', description: 'High jump for air game.' , input: '2~8' },
      { name: 'Infinite Combos', description: 'Many characters have infinite/loop combos — a feature, not a bug.'  }
    ],

    characters: [
      { id: 'cyclops', name: 'Cyclops', moveCount: 0 },
      { id: 'wolverine', name: 'Wolverine', moveCount: 0 },
      { id: 'storm', name: 'Storm', moveCount: 0 },
      { id: 'rogue', name: 'Rogue', moveCount: 0 },
      { id: 'gambit', name: 'Gambit', moveCount: 0 },
      { id: 'sabretooth', name: 'Sabretooth', moveCount: 0 },
      { id: 'juggernaut', name: 'Juggernaut', moveCount: 0 },
      { id: 'magneto', name: 'Magneto', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'chun-li', name: 'Chun Li', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 },
      { id: 'mbison', name: 'Mbison', moveCount: 0 },
      { id: 'cammy', name: 'Cammy', moveCount: 0 },
      { id: 'charlie', name: 'Charlie', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'x-men-children-of-the-atom',

    mameRomset: "",

    name: "X-Men: Children of the Atom",
    tagline: "Mutants Unleashed",

    developer: "Capcom",

    releaseYear: 1994,
    platform: "Arcade, Saturn, PS1, PC, PS4, Switch, Xbox One",

rosterCount: 12,

        
    systemMechanics: [
      { name: 'X-Power', description: 'Super moves costing Hyper X gauge.'  },
      { name: 'Super Jump', description: 'Very high jump for extended aerial combat.' , input: '2~8' },
      { name: 'Aerial Rave', description: 'Air combos with Magic Series chains.'  },
      { name: 'X-Ability', description: 'Character-specific mutant powers.'  },
      { name: 'Chain Combo', description: 'Light-to-heavy normal chains.'  },
      { name: 'Advancing Guard', description: 'Push block.' , input: 'PP (blocking)' },
      { name: 'OTG', description: 'Off-the-ground hits on downed opponents.'  },
      { name: 'Infinity Gems', description: 'Collect gems for temporary power boosts.'  }
    ],

    characters: [
      { id: 'wolverine', name: 'Wolverine', moveCount: 0 },
      { id: 'cyclops', name: 'Cyclops', moveCount: 0 },
      { id: 'storm', name: 'Storm', moveCount: 0 },
      { id: 'iceman', name: 'Iceman', moveCount: 0 },
      { id: 'colossus', name: 'Colossus', moveCount: 0 },
      { id: 'psylocke', name: 'Psylocke', moveCount: 0 },
      { id: 'omega-red', name: 'Omega Red', moveCount: 0 },
      { id: 'sentinel', name: 'Sentinel', moveCount: 0 },
      { id: 'silver-samurai', name: 'Silver Samurai', moveCount: 0 },
      { id: 'spiral', name: 'Spiral', moveCount: 0 },
      { id: 'juggernaut', name: 'Juggernaut', moveCount: 0 },
      { id: 'magneto', name: 'Magneto', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'zero-divide',

    mameRomset: "",

    name: "Zero Divide",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1995,

    platform: "Arcade, PS1, PC",

rosterCount: 8,

        characters: [
      { id: 'cybershell', name: 'Cybershell', moveCount: 0 },
      { id: 'draco', name: 'Draco', moveCount: 0 },
      { id: 'eos', name: 'Eos', moveCount: 0 },
      { id: 'galdon', name: 'Galdon', moveCount: 0 },
      { id: 'nereid', name: 'Nereid', moveCount: 0 },
      { id: 'tau', name: 'Tau', moveCount: 0 },
      { id: 'wild-3', name: 'Wild 3', moveCount: 0 },
      { id: 'zero', name: 'Zero', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {

    id: 'zero-divide-2-the-secret-wish',

    mameRomset: "",

    name: "Zero Divide 2: The Secret Wish",
    tagline: "Enter the Arena",

    developer: "Unknown",

    releaseYear: 1997,

    platform: "PS1, PC",

rosterCount: 8,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']

  },

  {
    id: 'red-earth-warzard',

    mameRomset: "",
    releaseYear: 1996,
    platform: "Arcade, PC",
    name: "Red Earth (Warzard)",
    tagline: "Fantasy RPG Fighter",
    isDraft: true,
    rosterCount: 10,
    characters: [
      { id: 'leo', name: 'Leo', moveCount: 0 },
      { id: 'mukuro', name: 'Mukuro', moveCount: 0 },
      { id: 'tao', name: 'Tao', moveCount: 0 },
      { id: 'tabasa', name: 'Tabasa', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'dragon-ball-z-budokai-3',

    mameRomset: "",
    releaseYear: 2004,
    platform: "PS2, PC",
    name: "Dragon Ball Z: Budokai 3",
    tagline: "Enter the Arena",
    isDraft: true,
    rosterCount: 37,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'dragon-ball-z-budokai-tenkaichi-3',

    mameRomset: "",
    releaseYear: 2007,
    platform: "PS2, Wii, PC",
    name: "Dragon Ball Z: Budokai Tenkaichi 3",
    tagline: "Enter the Arena",
    isDraft: true,
    rosterCount: 95,
    characters: [
      { id: 'android-13', name: 'Android 13', moveCount: 0 },
      { id: 'android-16', name: 'Android 16', moveCount: 0 },
      { id: 'android-17', name: 'Android 17', moveCount: 0 },
      { id: 'android-18', name: 'Android 18', moveCount: 0 },
      { id: 'android-19', name: 'Android 19', moveCount: 0 },
      { id: 'appule', name: 'Appule', moveCount: 0 },
      { id: 'baby-vegeta', name: 'Baby Vegeta', moveCount: 0 },
      { id: 'babidi', name: 'Babidi', moveCount: 0 },
      { id: 'bardock', name: 'Bardock', moveCount: 0 },
      { id: 'bojack', name: 'Bojack', moveCount: 0 },
      { id: 'broly', name: 'Broly', moveCount: 0 },
      { id: 'burter', name: 'Burter', moveCount: 0 },
      { id: 'cell', name: 'Cell', moveCount: 0 },
      { id: 'cell-jr', name: 'Cell Jr', moveCount: 0 },
      { id: 'chiaotzu', name: 'Chiaotzu', moveCount: 0 },
      { id: 'cooler', name: 'Cooler', moveCount: 0 },
      { id: 'cui', name: 'Cui', moveCount: 0 },
      { id: 'dabura', name: 'Dabura', moveCount: 0 },
      { id: 'demon-king-piccolo', name: 'Demon King Piccolo', moveCount: 0 },
      { id: 'devilman', name: 'Devilman', moveCount: 0 },
      { id: 'dr-gero', name: 'Dr. Gero', moveCount: 0 },
      { id: 'dr-wheelo', name: 'Dr. Wheelo', moveCount: 0 },
      { id: 'dodoria', name: 'Dodoria', moveCount: 0 },
      { id: 'fasha', name: 'Fasha', moveCount: 0 },
      { id: 'frieza', name: 'Frieza', moveCount: 0 },
      { id: 'garlic-jr', name: 'Garlic Jr.', moveCount: 0 },
      { id: 'general-blue', name: 'General Blue', moveCount: 0 },
      { id: 'ginyu', name: 'Ginyu', moveCount: 0 },
      { id: 'gohan-kid', name: 'Gohan (Kid)', moveCount: 0 },
      { id: 'gohan-teen', name: 'Gohan (Teen)', moveCount: 0 },
      { id: 'gohan-adult', name: 'Gohan (Adult)', moveCount: 0 },
      { id: 'gohan-future', name: 'Gohan (Future)', moveCount: 0 },
      { id: 'goku-kid', name: 'Goku (Kid)', moveCount: 0 },
      { id: 'goku-early', name: 'Goku (Early)', moveCount: 0 },
      { id: 'goku-mid', name: 'Goku (Mid)', moveCount: 0 },
      { id: 'goku-end', name: 'Goku (End)', moveCount: 0 },
      { id: 'goku-gt', name: 'Goku (GT)', moveCount: 0 },
      { id: 'goten', name: 'Goten', moveCount: 0 },
      { id: 'gotenks', name: 'Gotenks', moveCount: 0 },
      { id: 'grandpa-gohan', name: 'Grandpa Gohan', moveCount: 0 },
      { id: 'great-ape', name: 'Great Ape', moveCount: 0 },
      { id: 'guldo', name: 'Guldo', moveCount: 0 },
      { id: 'hercule', name: 'Hercule', moveCount: 0 },
      { id: 'hirudegarn', name: 'Hirudegarn', moveCount: 0 },
      { id: 'janemba', name: 'Janemba', moveCount: 0 },
      { id: 'jeice', name: 'Jeice', moveCount: 0 },
      { id: 'kid-buu', name: 'Kid Buu', moveCount: 0 },
      { id: 'kid-chi-chi', name: 'Kid Chi-Chi', moveCount: 0 },
      { id: 'king-cold', name: 'King Cold', moveCount: 0 },
      { id: 'king-vegeta', name: 'King Vegeta', moveCount: 0 },
      { id: 'krillin', name: 'Krillin', moveCount: 0 },
      { id: 'lord-slug', name: 'Lord Slug', moveCount: 0 },
      { id: 'majin-buu', name: 'Majin Buu', moveCount: 0 },
      { id: 'master-roshi', name: 'Master Roshi', moveCount: 0 },
      { id: 'mecha-frieza', name: 'Mecha Frieza', moveCount: 0 },
      { id: 'meta-cooler', name: 'Meta-Cooler', moveCount: 0 },
      { id: 'monster-zarbon', name: 'Monster Zarbon', moveCount: 0 },
      { id: 'nappa', name: 'Nappa', moveCount: 0 },
      { id: 'nail', name: 'Nail', moveCount: 0 },
      { id: 'nuova-shenron', name: 'Nuova Shenron', moveCount: 0 },
      { id: 'omega-shenron', name: 'Omega Shenron', moveCount: 0 },
      { id: 'pan', name: 'Pan', moveCount: 0 },
      { id: 'piccolo', name: 'Piccolo', moveCount: 0 },
      { id: 'pikkon', name: 'Pikkon', moveCount: 0 },
      { id: 'pilaf-machine', name: 'Pilaf Machine', moveCount: 0 },
      { id: 'raditz', name: 'Raditz', moveCount: 0 },
      { id: 'recoome', name: 'Recoome', moveCount: 0 },
      { id: 'saibaman', name: 'Saibaman', moveCount: 0 },
      { id: 'salza', name: 'Salza', moveCount: 0 },
      { id: 'spopovitch', name: 'Spopovitch', moveCount: 0 },
      { id: 'super-17', name: 'Super 17', moveCount: 0 },
      { id: 'super-buu', name: 'Super Buu', moveCount: 0 },
      { id: 'supreme-kai', name: 'Supreme Kai', moveCount: 0 },
      { id: 'syn-shenron', name: 'Syn Shenron', moveCount: 0 },
      { id: 'tambourine', name: 'Tambourine', moveCount: 0 },
      { id: 'tao-pai-pai', name: 'Tao Pai Pai', moveCount: 0 },
      { id: 'tapion', name: 'Tapion', moveCount: 0 },
      { id: 'tenshinhan', name: 'Tenshinhan', moveCount: 0 },
      { id: 'trunks-sword', name: 'Trunks (Sword)', moveCount: 0 },
      { id: 'trunks-fighting', name: 'Trunks (Fighting)', moveCount: 0 },
      { id: 'trunks-future', name: 'Trunks (Future)', moveCount: 0 },
      { id: 'trunks-kid', name: 'Trunks (Kid)', moveCount: 0 },
      { id: 'turles', name: 'Turles', moveCount: 0 },
      { id: 'ultimate-gohan', name: 'Ultimate Gohan', moveCount: 0 },
      { id: 'uub', name: 'Uub', moveCount: 0 },
      { id: 'vegeta-scouter', name: 'Vegeta (Scouter)', moveCount: 0 },
      { id: 'vegeta-early', name: 'Vegeta (Early)', moveCount: 0 },
      { id: 'vegeta-mid', name: 'Vegeta (Mid)', moveCount: 0 },
      { id: 'vegeta-end', name: 'Vegeta (End)', moveCount: 0 },
      { id: 'vegeta-gt', name: 'Vegeta (GT)', moveCount: 0 },
      { id: 'vegito', name: 'Vegito', moveCount: 0 },
      { id: 'videl', name: 'Videl', moveCount: 0 },
      { id: 'yajirobe', name: 'Yajirobe', moveCount: 0 },
      { id: 'yamcha', name: 'Yamcha', moveCount: 0 },
      { id: 'zangya', name: 'Zangya', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'guilty-gear-2-overture',

    mameRomset: "",
    releaseYear: 2007,
    platform: "Xbox 360, PC",
    name: "Guilty Gear 2: Overture",
    tagline: "Let's Rock!",
    isDraft: true,
    rosterCount: 7,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'guilty-gear-xrd--sign-',

    mameRomset: "",
    name: "Guilty Gear Xrd -SIGN-",
    tagline: "Heaven or Hell",
    isDraft: true,
    characters: [
      { id: 'axl', name: 'Axl', moveCount: 0 },
      { id: 'bedman', name: 'Bedman', moveCount: 0 },
      { id: 'chipp', name: 'Chipp', moveCount: 0 },
      { id: 'elphelt', name: 'Elphelt', moveCount: 0 },
      { id: 'faust', name: 'Faust', moveCount: 0 },
      { id: 'i-no', name: 'I-No', moveCount: 0 },
      { id: 'ky', name: 'Ky', moveCount: 0 },
      { id: 'leo', name: 'Leo', moveCount: 0 },
      { id: 'may', name: 'May', moveCount: 0 },
      { id: 'millia', name: 'Millia', moveCount: 0 },
      { id: 'potemkin', name: 'Potemkin', moveCount: 0 },
      { id: 'ramlethal', name: 'Ramlethal', moveCount: 0 },
      { id: 'sin', name: 'Sin', moveCount: 0 },
      { id: 'slayer', name: 'Slayer', moveCount: 0 },
      { id: 'sol', name: 'Sol', moveCount: 0 },
      { id: 'venom', name: 'Venom', moveCount: 0 },
      { id: 'zato-1', name: 'Zato-1', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'injustice-gods-among-us',

    mameRomset: "",
    releaseYear: 2013,
    platform: "PS3, Xbox 360, Wii U, PC",
    name: "Injustice: Gods Among Us",
    tagline: "Gods Among Us",
    isDraft: true,
    rosterCount: 30,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'injustice-2',

    mameRomset: "",
    releaseYear: 2017,
    platform: "PS4, Xbox One, PC",
    name: "Injustice 2",
    tagline: "Every Battle Defines You",
    isDraft: true,
    rosterCount: 40,
    characters: [
      { id: 'aquaman', name: 'Aquaman', moveCount: 0 },
      { id: 'atrocitus', name: 'Atrocitus', moveCount: 0 },
      { id: 'bane', name: 'Bane', moveCount: 0 },
      { id: 'batman', name: 'Batman', moveCount: 0 },
      { id: 'black-adam', name: 'Black Adam', moveCount: 0 },
      { id: 'black-canary', name: 'Black Canary', moveCount: 0 },
      { id: 'black-manta', name: 'Black Manta', moveCount: 0 },
      { id: 'blue-beetle', name: 'Blue Beetle', moveCount: 0 },
      { id: 'brainiac', name: 'Brainiac', moveCount: 0 },
      { id: 'captain-cold', name: 'Captain Cold', moveCount: 0 },
      { id: 'catwoman', name: 'Catwoman', moveCount: 0 },
      { id: 'cheetah', name: 'Cheetah', moveCount: 0 },
      { id: 'cyborg', name: 'Cyborg', moveCount: 0 },
      { id: 'darkseid', name: 'Darkseid', moveCount: 0 },
      { id: 'deadshot', name: 'Deadshot', moveCount: 0 },
      { id: 'doctor-fate', name: 'Doctor Fate', moveCount: 0 },
      { id: 'donatello', name: 'Donatello', moveCount: 0 },
      { id: 'enchantress', name: 'Enchantress', moveCount: 0 },
      { id: 'firestorm', name: 'Firestorm', moveCount: 0 },
      { id: 'flash', name: 'Flash', moveCount: 0 },
      { id: 'gorilla-grodd', name: 'Gorilla Grodd', moveCount: 0 },
      { id: 'green-arrow', name: 'Green Arrow', moveCount: 0 },
      { id: 'green-lantern', name: 'Green Lantern', moveCount: 0 },
      { id: 'harley-quinn', name: 'Harley Quinn', moveCount: 0 },
      { id: 'hellboy', name: 'Hellboy', moveCount: 0 },
      { id: 'joker', name: 'Joker', moveCount: 0 },
      { id: 'leonardo', name: 'Leonardo', moveCount: 0 },
      { id: 'michelangelo', name: 'Michelangelo', moveCount: 0 },
      { id: 'poison-ivy', name: 'Poison Ivy', moveCount: 0 },
      { id: 'raiden', name: 'Raiden', moveCount: 0 },
      { id: 'raphael', name: 'Raphael', moveCount: 0 },
      { id: 'red-hood', name: 'Red Hood', moveCount: 0 },
      { id: 'robin', name: 'Robin', moveCount: 0 },
      { id: 'scarecrow', name: 'Scarecrow', moveCount: 0 },
      { id: 'starfire', name: 'Starfire', moveCount: 0 },
      { id: 'sub-zero', name: 'Sub-Zero', moveCount: 0 },
      { id: 'supergirl', name: 'Supergirl', moveCount: 0 },
      { id: 'superman', name: 'Superman', moveCount: 0 },
      { id: 'swamp-thing', name: 'Swamp Thing', moveCount: 0 },
      { id: 'wonder-woman', name: 'Wonder Woman', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'mortal-kombat-3',

    mameRomset: "",
    releaseYear: 1995,
    platform: "Arcade, SNES, Genesis, PS1, PC",
    notationSystem: 'mk',
    name: "Mortal Kombat 3",
    tagline: "There Is No Knowledge That Is Not Power",
    isDraft: true,
    rosterCount: 15,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'mortal-kombat-4',

    mameRomset: "",
    releaseYear: 1997,
    platform: "Arcade, PS1, N64, PC",
    notationSystem: 'mk',
    name: "Mortal Kombat 4",
    tagline: "Even Your Soul is Not Safe",
    isDraft: true,
    rosterCount: 18,
    characters: [
      { id: 'fujin', name: 'Fujin', moveCount: 0 },
      { id: 'goro', name: 'Goro', moveCount: 0 },
      { id: 'jarek', name: 'Jarek', moveCount: 0 },
      { id: 'jax', name: 'Jax', moveCount: 0 },
      { id: 'johnny-cage', name: 'Johnny Cage', moveCount: 0 },
      { id: 'kai', name: 'Kai', moveCount: 0 },
      { id: 'liu-kang', name: 'Liu Kang', moveCount: 0 },
      { id: 'meat', name: 'Meat', moveCount: 0 },
      { id: 'noob-saibot', name: 'Noob Saibot', moveCount: 0 },
      { id: 'quan-chi', name: 'Quan Chi', moveCount: 0 },
      { id: 'raiden', name: 'Raiden', moveCount: 0 },
      { id: 'reiko', name: 'Reiko', moveCount: 0 },
      { id: 'reptile', name: 'Reptile', moveCount: 0 },
      { id: 'scorpion', name: 'Scorpion', moveCount: 0 },
      { id: 'shinnok', name: 'Shinnok', moveCount: 0 },
      { id: 'sonya-blade', name: 'Sonya Blade', moveCount: 0 },
      { id: 'sub-zero', name: 'Sub-Zero', moveCount: 0 },
      { id: 'tanya', name: 'Tanya', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'mortal-kombat-deadly-alliance',

    mameRomset: "",
    releaseYear: 2002,
    platform: "PS2, Xbox, GC, PC",
    notationSystem: 'mk',
    name: "Mortal Kombat: Deadly Alliance",
    tagline: "A Deadly Alliance",
    isDraft: true,
    rosterCount: 24,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'mortal-kombat-armageddon',

    mameRomset: "",
    releaseYear: 2006,
    platform: "PS2, Xbox, Wii, PC",
    notationSystem: 'mk',
    name: "Mortal Kombat: Armageddon",
    tagline: "The End is Near",
    isDraft: true,
    rosterCount: 63,
    characters: [
      { id: 'ashrah', name: 'Ashrah', moveCount: 0 },
      { id: 'baraka', name: 'Baraka', moveCount: 0 },
      { id: 'blaze', name: 'Blaze', moveCount: 0 },
      { id: 'chameleon', name: 'Chameleon', moveCount: 0 },
      { id: 'cyrax', name: 'Cyrax', moveCount: 0 },
      { id: 'daegon', name: 'Daegon', moveCount: 0 },
      { id: 'dairou', name: 'Dairou', moveCount: 0 },
      { id: 'darrius', name: 'Darrius', moveCount: 0 },
      { id: 'drahmin', name: 'Drahmin', moveCount: 0 },
      { id: 'ermac', name: 'Ermac', moveCount: 0 },
      { id: 'frost', name: 'Frost', moveCount: 0 },
      { id: 'fujin', name: 'Fujin', moveCount: 0 },
      { id: 'goro', name: 'Goro', moveCount: 0 },
      { id: 'havik', name: 'Havik', moveCount: 0 },
      { id: 'hotaru', name: 'Hotaru', moveCount: 0 },
      { id: 'hsu-hao', name: 'Hsu Hao', moveCount: 0 },
      { id: 'jade', name: 'Jade', moveCount: 0 },
      { id: 'jarek', name: 'Jarek', moveCount: 0 },
      { id: 'jax', name: 'Jax', moveCount: 0 },
      { id: 'johnny-cage', name: 'Johnny Cage', moveCount: 0 },
      { id: 'kabal', name: 'Kabal', moveCount: 0 },
      { id: 'kai', name: 'Kai', moveCount: 0 },
      { id: 'kano', name: 'Kano', moveCount: 0 },
      { id: 'kenshi', name: 'Kenshi', moveCount: 0 },
      { id: 'khameleon', name: 'Khameleon', moveCount: 0 },
      { id: 'kintaro', name: 'Kintaro', moveCount: 0 },
      { id: 'kira', name: 'Kira', moveCount: 0 },
      { id: 'kitana', name: 'Kitana', moveCount: 0 },
      { id: 'kobra', name: 'Kobra', moveCount: 0 },
      { id: 'kung-lao', name: 'Kung Lao', moveCount: 0 },
      { id: 'li-mei', name: 'Li Mei', moveCount: 0 },
      { id: 'liu-kang', name: 'Liu Kang', moveCount: 0 },
      { id: 'mavado', name: 'Mavado', moveCount: 0 },
      { id: 'meat', name: 'Meat', moveCount: 0 },
      { id: 'mileena', name: 'Mileena', moveCount: 0 },
      { id: 'mokap', name: 'Mokap', moveCount: 0 },
      { id: 'moloch', name: 'Moloch', moveCount: 0 },
      { id: 'motaro', name: 'Motaro', moveCount: 0 },
      { id: 'nightwolf', name: 'Nightwolf', moveCount: 0 },
      { id: 'nitara', name: 'Nitara', moveCount: 0 },
      { id: 'noob-saibot', name: 'Noob Saibot', moveCount: 0 },
      { id: 'onaga', name: 'Onaga', moveCount: 0 },
      { id: 'quan-chi', name: 'Quan Chi', moveCount: 0 },
      { id: 'raiden', name: 'Raiden', moveCount: 0 },
      { id: 'rain', name: 'Rain', moveCount: 0 },
      { id: 'reiko', name: 'Reiko', moveCount: 0 },
      { id: 'reptile', name: 'Reptile', moveCount: 0 },
      { id: 'sareena', name: 'Sareena', moveCount: 0 },
      { id: 'scorpion', name: 'Scorpion', moveCount: 0 },
      { id: 'sektor', name: 'Sektor', moveCount: 0 },
      { id: 'shang-tsung', name: 'Shang Tsung', moveCount: 0 },
      { id: 'shao-kahn', name: 'Shao Kahn', moveCount: 0 },
      { id: 'sheeva', name: 'Sheeva', moveCount: 0 },
      { id: 'shinnok', name: 'Shinnok', moveCount: 0 },
      { id: 'shujinko', name: 'Shujinko', moveCount: 0 },
      { id: 'sindel', name: 'Sindel', moveCount: 0 },
      { id: 'smoke', name: 'Smoke', moveCount: 0 },
      { id: 'sonya-blade', name: 'Sonya Blade', moveCount: 0 },
      { id: 'stryker', name: 'Stryker', moveCount: 0 },
      { id: 'sub-zero', name: 'Sub-Zero', moveCount: 0 },
      { id: 'tanya', name: 'Tanya', moveCount: 0 },
      { id: 'taven', name: 'Taven', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'mortal-kombat-11',

    mameRomset: "",
    releaseYear: 2019,
    platform: "PS4, Xbox One, Switch, PC",
    notationSystem: 'mk',
    name: "Mortal Kombat 11",
    tabs: ['Special Moves', 'Finishers', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Combos', 'System'],
    tagline: "You're Next",
    isDraft: true,
    rosterCount: 37,
        tags: ['3D'],

    characters: [
      { id: 'ashrah', name: 'Ashrah', moveCount: 0 },
      { id: 'baraka', name: 'Baraka', moveCount: 0 },
      { id: 'geras', name: 'Geras', moveCount: 0 },
      { id: 'havik', name: 'Havik', moveCount: 0 },
      { id: 'johnny-cage', name: 'Johnny Cage', moveCount: 0 },
      { id: 'kenshi', name: 'Kenshi', moveCount: 0 },
      { id: 'kitana', name: 'Kitana', moveCount: 0 },
      { id: 'kung-lao', name: 'Kung Lao', moveCount: 0 },
      { id: 'li-mei', name: 'Li Mei', moveCount: 0 },
      { id: 'liu-kang', name: 'Liu Kang', moveCount: 0 },
      { id: 'mileena', name: 'Mileena', moveCount: 0 },
      { id: 'nitara', name: 'Nitara', moveCount: 0 },
      { id: 'omni-man', name: 'Omni Man', moveCount: 0 },
      { id: 'peacemaker', name: 'Peacemaker', moveCount: 0 },
      { id: 'quan-chi', name: 'Quan Chi', moveCount: 0 },
      { id: 'raiden', name: 'Raiden', moveCount: 0 },
      { id: 'rain', name: 'Rain', moveCount: 0 },
      { id: 'reiko', name: 'Reiko', moveCount: 0 },
      { id: 'reptile', name: 'Reptile', moveCount: 0 },
      { id: 'scorpion', name: 'Scorpion', moveCount: 0 },
      { id: 'shang-tsung', name: 'Shang Tsung', moveCount: 0 },
      { id: 'sindel', name: 'Sindel', moveCount: 0 },
      { id: 'smoke', name: 'Smoke', moveCount: 0 },
      { id: 'sub-zero', name: 'Sub Zero', moveCount: 0 },
      { id: 'tanya', name: 'Tanya', moveCount: 0 },
      { id: 'general-shao', name: 'General Shao', moveCount: 0 },
      { id: 'ermac', name: 'Ermac', moveCount: 0 },
      { id: 'homelander', name: 'Homelander', moveCount: 0 },
      { id: 'takeda', name: 'Takeda', moveCount: 0 },
      { id: 'cyrax', name: 'Cyrax', moveCount: 0 },
      { id: 'sektor', name: 'Sektor', moveCount: 0 },
      { id: 'noob-saibot', name: 'Noob Saibot', moveCount: 0 },
      { id: 'ghostface', name: 'Ghostface', moveCount: 0 },
      { id: 'conan', name: 'Conan', moveCount: 0 },
      { id: 't-1000', name: 'T-1000', moveCount: 0 }
    ],

  },
  {
    id: 'samurai-shodown-iv-amakusas-revenge',

    mameRomset: "",
    releaseYear: 1996,
    platform: "Arcade, NeoGeo, Saturn, PS1, PC",
    name: "Samurai Shodown IV: Amakusa's Revenge",
    isDraft: true,
    rosterCount: 16,
    characters: [
      { id: 'amakusa', name: 'Amakusa', moveCount: 0 },
      { id: 'basara', name: 'Basara', moveCount: 0 },
      { id: 'charlotte', name: 'Charlotte', moveCount: 0 },
      { id: 'galford', name: 'Galford', moveCount: 0 },
      { id: 'gaira', name: 'Gaira', moveCount: 0 },
      { id: 'hanzo', name: 'Hanzo', moveCount: 0 },
      { id: 'haohmaru', name: 'Haohmaru', moveCount: 0 },
      { id: 'jubei', name: 'Jubei', moveCount: 0 },
      { id: 'kazuki', name: 'Kazuki', moveCount: 0 },
      { id: 'kyoshiro', name: 'Kyoshiro', moveCount: 0 },
      { id: 'nakoruru', name: 'Nakoruru', moveCount: 0 },
      { id: 'rimururu', name: 'Rimururu', moveCount: 0 },
      { id: 'shizumaru', name: 'Shizumaru', moveCount: 0 },
      { id: 'sogetsu', name: 'Sogetsu', moveCount: 0 },
      { id: 'tam-tam', name: 'Tam Tam', moveCount: 0 },
      { id: 'ukyo', name: 'Ukyo', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'soulcalibur',

    mameRomset: "",
    releaseYear: 1998,
    platform: "Arcade, DC, PC",
    name: "SoulCalibur",
    tagline: "The Legend Will Never Die",
    isDraft: true,
    rosterCount: 17,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'soulcalibur-ii',

    mameRomset: "",
    releaseYear: 2002,
    platform: "Arcade, PS2, Xbox, GC, PC",
    name: "SoulCalibur II",
    tagline: "The Weapon Master",
    isDraft: true,
    rosterCount: 21,
    characters: [
      { id: 'astaroth', name: 'Astaroth', moveCount: 0 },
      { id: 'cassandra', name: 'Cassandra', moveCount: 0 },
      { id: 'cervantes', name: 'Cervantes', moveCount: 0 },
      { id: 'heihachi-mishima', name: 'Heihachi Mishima', moveCount: 0 },
      { id: 'ivy', name: 'Ivy', moveCount: 0 },
      { id: 'kilik', name: 'Kilik', moveCount: 0 },
      { id: 'link', name: 'Link', moveCount: 0 },
      { id: 'maxi', name: 'Maxi', moveCount: 0 },
      { id: 'mitsurugi', name: 'Mitsurugi', moveCount: 0 },
      { id: 'necrid', name: 'Necrid', moveCount: 0 },
      { id: 'nightmare', name: 'Nightmare', moveCount: 0 },
      { id: 'raphael', name: 'Raphael', moveCount: 0 },
      { id: 'seong-mi-na', name: 'Seong Mi-na', moveCount: 0 },
      { id: 'sophitia', name: 'Sophitia', moveCount: 0 },
      { id: 'spawn', name: 'Spawn', moveCount: 0 },
      { id: 'taki', name: 'Taki', moveCount: 0 },
      { id: 'talim', name: 'Talim', moveCount: 0 },
      { id: 'voldo', name: 'Voldo', moveCount: 0 },
      { id: 'xianghua', name: 'Xianghua', moveCount: 0 },
      { id: 'yoshimitsu', name: 'Yoshimitsu', moveCount: 0 },
      { id: 'yun-seong', name: 'Yun-seong', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'soulcalibur-iii',

    mameRomset: "",
    releaseYear: 2005,
    platform: "PS2, PC",
    name: "SoulCalibur III",
    tagline: "What Lies Ahead?",
    isDraft: true,
    rosterCount: 40,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'soulcalibur-iv',

    mameRomset: "",
    releaseYear: 2008,
    platform: "PS3, Xbox 360, PC",
    name: "SoulCalibur IV",
    tagline: "The Two Swords",
    isDraft: true,
    rosterCount: 28,
    characters: [
      { id: 'algol', name: 'Algol', moveCount: 0 },
      { id: 'amy', name: 'Amy', moveCount: 0 },
      { id: 'apprentice', name: 'Apprentice', moveCount: 0 },
      { id: 'astaroth', name: 'Astaroth', moveCount: 0 },
      { id: 'cassandra', name: 'Cassandra', moveCount: 0 },
      { id: 'cervantes', name: 'Cervantes', moveCount: 0 },
      { id: 'darth-vader', name: 'Darth Vader', moveCount: 0 },
      { id: 'hilde', name: 'Hilde', moveCount: 0 },
      { id: 'ivy', name: 'Ivy', moveCount: 0 },
      { id: 'kilik', name: 'Kilik', moveCount: 0 },
      { id: 'lizardman', name: 'Lizardman', moveCount: 0 },
      { id: 'maxi', name: 'Maxi', moveCount: 0 },
      { id: 'mitsurugi', name: 'Mitsurugi', moveCount: 0 },
      { id: 'nightmare', name: 'Nightmare', moveCount: 0 },
      { id: 'raphael', name: 'Raphael', moveCount: 0 },
      { id: 'rock', name: 'Rock', moveCount: 0 },
      { id: 'seong-mi-na', name: 'Seong Mi-na', moveCount: 0 },
      { id: 'siegfried', name: 'Siegfried', moveCount: 0 },
      { id: 'sophitia', name: 'Sophitia', moveCount: 0 },
      { id: 'taki', name: 'Taki', moveCount: 0 },
      { id: 'talim', name: 'Talim', moveCount: 0 },
      { id: 'tira', name: 'Tira', moveCount: 0 },
      { id: 'voldo', name: 'Voldo', moveCount: 0 },
      { id: 'xianghua', name: 'Xianghua', moveCount: 0 },
      { id: 'yoda', name: 'Yoda', moveCount: 0 },
      { id: 'yoshimitsu', name: 'Yoshimitsu', moveCount: 0 },
      { id: 'yun-seong', name: 'Yun-seong', moveCount: 0 },
      { id: 'zasalamel', name: 'Zasalamel', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'soulcalibur-v',

    mameRomset: "",
    releaseYear: 2012,
    platform: "PS3, Xbox 360, PC",
    name: "SoulCalibur V",
    tagline: "A New Generation",
    isDraft: true,
    rosterCount: 25,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'soulcalibur-vi',

    mameRomset: "",
    releaseYear: 2018,
    platform: "PS4, Xbox One, PC",
    name: "SoulCalibur VI",
    tagline: "Welcome Back to the Stage of History",
    isDraft: true,
    rosterCount: 29,
    characters: [
      { id: '2b', name: '2B', moveCount: 0 },
      { id: 'amy', name: 'Amy', moveCount: 0 },
      { id: 'astaroth', name: 'Astaroth', moveCount: 0 },
      { id: 'azwel', name: 'Azwel', moveCount: 0 },
      { id: 'cassandra', name: 'Cassandra', moveCount: 0 },
      { id: 'cervantes', name: 'Cervantes', moveCount: 0 },
      { id: 'geralt-of-rivia', name: 'Geralt of Rivia', moveCount: 0 },
      { id: 'grh', name: 'Grøh', moveCount: 0 },
      { id: 'haohmaru', name: 'Haohmaru', moveCount: 0 },
      { id: 'hilde', name: 'Hilde', moveCount: 0 },
      { id: 'hwang', name: 'Hwang', moveCount: 0 },
      { id: 'inferno', name: 'Inferno', moveCount: 0 },
      { id: 'ivy', name: 'Ivy', moveCount: 0 },
      { id: 'kilik', name: 'Kilik', moveCount: 0 },
      { id: 'maxi', name: 'Maxi', moveCount: 0 },
      { id: 'mitsurugi', name: 'Mitsurugi', moveCount: 0 },
      { id: 'nightmare', name: 'Nightmare', moveCount: 0 },
      { id: 'raphael', name: 'Raphael', moveCount: 0 },
      { id: 'seong-mi-na', name: 'Seong Mi-na', moveCount: 0 },
      { id: 'setsuka', name: 'Setsuka', moveCount: 0 },
      { id: 'siegfried', name: 'Siegfried', moveCount: 0 },
      { id: 'sophitia', name: 'Sophitia', moveCount: 0 },
      { id: 'taki', name: 'Taki', moveCount: 0 },
      { id: 'talim', name: 'Talim', moveCount: 0 },
      { id: 'tira', name: 'Tira', moveCount: 0 },
      { id: 'voldo', name: 'Voldo', moveCount: 0 },
      { id: 'xianghua', name: 'Xianghua', moveCount: 0 },
      { id: 'yoshimitsu', name: 'Yoshimitsu', moveCount: 0 },
      { id: 'zasalamel', name: 'Zasalamel', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'street-fighter-ii-champion-edition',

    mameRomset: "sf2ce",
    releaseYear: 1992,
    platform: "Arcade, SNES, Genesis, PC",
    name: "Street Fighter II: Champion Edition",
    tagline: "The Champion is Here",
    isDraft: true,
    rosterCount: 12,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'street-fighter-ii-hyper-fighting',

    mameRomset: "",
    releaseYear: 1992,
    platform: "Arcade, SNES, Genesis, PC",
    name: "Street Fighter II: Hyper Fighting",
    tagline: "Faster and Furious",
    isDraft: true,
    rosterCount: 12,
    characters: [
      { id: 'balrog', name: 'Balrog', moveCount: 0 },
      { id: 'blanka', name: 'Blanka', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'e-honda', name: 'E. Honda', moveCount: 0 },
      { id: 'guile', name: 'Guile', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'm-bison', name: 'M. Bison', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'vega', name: 'Vega', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'hyper-street-fighter-ii-the-anniversary-edition',

    mameRomset: "",
    releaseYear: 2003,
    platform: "Arcade, PS2, PC",
    name: "Hyper Street Fighter II: The Anniversary Edition",
    tagline: "15 Years of Fighting",
    isDraft: true,
    rosterCount: 16,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'street-fighter-alpha-warriors-dreams',

    mameRomset: "",
    releaseYear: 2003,
    platform: "Arcade, PS1, Saturn, PC, PS4, Switch, Xbox One",
    name: "Street Fighter Alpha: Warriors' Dreams",
    isDraft: true,
    rosterCount: 12,
    characters: [
      { id: 'adon', name: 'Adon', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'birdie', name: 'Birdie', moveCount: 0 },
      { id: 'charlie', name: 'Charlie', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 },
      { id: 'guy', name: 'Guy', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'rose', name: 'Rose', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'sodom', name: 'Sodom', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'street-fighter-iii-3rd-strike---fight-for-the-future',

    mameRomset: "",
    releaseYear: 1999,
    platform: "Arcade, DC, PS2, Xbox, PC",
    name: "Street Fighter III: 3rd Strike",
    searchAliases: ['3s', '3rd strike', 'sf3'],
    tagline: "Fight for the Future",
    isDraft: true,
    rosterCount: 19,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'street-fighter-iv',

    mameRomset: "",
    releaseYear: 2008,
    platform: "Arcade, PS3, Xbox 360, PC",
    name: "Street Fighter IV",
    tagline: "The Revival",
    isDraft: true,
    rosterCount: 25,
    characters: [
      { id: 'abel', name: 'Abel', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'balrog', name: 'Balrog', moveCount: 0 },
      { id: 'blanka', name: 'Blanka', moveCount: 0 },
      { id: 'cammy', name: 'Cammy', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'crimson-viper', name: 'Crimson Viper', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'e-honda', name: 'E. Honda', moveCount: 0 },
      { id: 'el-fuerte', name: 'El Fuerte', moveCount: 0 },
      { id: 'fei-long', name: 'Fei Long', moveCount: 0 },
      { id: 'gen', name: 'Gen', moveCount: 0 },
      { id: 'gouken', name: 'Gouken', moveCount: 0 },
      { id: 'guile', name: 'Guile', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'm-bison', name: 'M. Bison', moveCount: 0 },
      { id: 'rose', name: 'Rose', moveCount: 0 },
      { id: 'rufus', name: 'Rufus', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'sakura', name: 'Sakura', moveCount: 0 },
      { id: 'seth', name: 'Seth', moveCount: 0 },
      { id: 'vega', name: 'Vega', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'super-street-fighter-iv',

    mameRomset: "",
    releaseYear: 2010,
    platform: "PS3, Xbox 360, 3DS, PC",
    name: "Super Street Fighter IV",
    tagline: "The Ultimate Evolution",
    isDraft: true,
    rosterCount: 35,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'tekken-3',

    mameRomset: "",
    releaseYear: 1997,
    platform: "Arcade, PS1, PC",
    name: "Tekken 3",
    tagline: "A New Era of Combat",
    isDraft: true,
    rosterCount: 25,
    characters: [
      { id: 'anna-williams', name: 'Anna Williams', moveCount: 0 },
      { id: 'bryan-fury', name: 'Bryan Fury', moveCount: 0 },
      { id: 'dr-bosconovitch', name: 'Dr. Bosconovitch', moveCount: 0 },
      { id: 'eddy-gordo', name: 'Eddy Gordo', moveCount: 0 },
      { id: 'gon', name: 'Gon', moveCount: 0 },
      { id: 'gun-jack', name: 'Gun Jack', moveCount: 0 },
      { id: 'heihachi-mishima', name: 'Heihachi Mishima', moveCount: 0 },
      { id: 'hwoarang', name: 'Hwoarang', moveCount: 0 },
      { id: 'jin-kazama', name: 'Jin Kazama', moveCount: 0 },
      { id: 'julia-chang', name: 'Julia Chang', moveCount: 0 },
      { id: 'king-ii', name: 'King II', moveCount: 0 },
      { id: 'kuma-ii', name: 'Kuma II', moveCount: 0 },
      { id: 'lei-wulong', name: 'Lei Wulong', moveCount: 0 },
      { id: 'marshall-law', name: 'Marshall Law', moveCount: 0 },
      { id: 'mokujin', name: 'Mokujin', moveCount: 0 },
      { id: 'nina-williams', name: 'Nina Williams', moveCount: 0 },
      { id: 'ogre', name: 'Ogre', moveCount: 0 },
      { id: 'panda', name: 'Panda', moveCount: 0 },
      { id: 'paul-phoenix', name: 'Paul Phoenix', moveCount: 0 },
      { id: 'tiger-jackson', name: 'Tiger Jackson', moveCount: 0 },
      { id: 'true-ogre', name: 'True Ogre', moveCount: 0 },
      { id: 'yoshimitsu', name: 'Yoshimitsu', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'tekken-tag-tournament',

    mameRomset: "",
    releaseYear: 1999,
    platform: "Arcade, PS2, PC",
    name: "Tekken Tag Tournament",
    tagline: "The Tag Battle",
    isDraft: true,
    rosterCount: 34,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'tekken-4',

    mameRomset: "",
    releaseYear: 2001,
    platform: "PS2, PC",
    name: "Tekken 4",
    tagline: "Return of the King",
    isDraft: true,
    rosterCount: 25,
    characters: [
      { id: 'bryan-fury', name: 'Bryan Fury', moveCount: 0 },
      { id: 'christie-monteiro', name: 'Christie Monteiro', moveCount: 0 },
      { id: 'combot', name: 'Combot', moveCount: 0 },
      { id: 'eddy-gordo', name: 'Eddy Gordo', moveCount: 0 },
      { id: 'heihachi-mishima', name: 'Heihachi Mishima', moveCount: 0 },
      { id: 'hwoarang', name: 'Hwoarang', moveCount: 0 },
      { id: 'jin-kazama', name: 'Jin Kazama', moveCount: 0 },
      { id: 'julia-chang', name: 'Julia Chang', moveCount: 0 },
      { id: 'kazuya-mishima', name: 'Kazuya Mishima', moveCount: 0 },
      { id: 'king-ii', name: 'King II', moveCount: 0 },
      { id: 'kuma-ii', name: 'Kuma II', moveCount: 0 },
      { id: 'lee-chaolan', name: 'Lee Chaolan', moveCount: 0 },
      { id: 'lei-wulong', name: 'Lei Wulong', moveCount: 0 },
      { id: 'ling-xiaoyu', name: 'Ling Xiaoyu', moveCount: 0 },
      { id: 'marshall-law', name: 'Marshall Law', moveCount: 0 },
      { id: 'miharu-hirano', name: 'Miharu Hirano', moveCount: 0 },
      { id: 'nina-williams', name: 'Nina Williams', moveCount: 0 },
      { id: 'panda', name: 'Panda', moveCount: 0 },
      { id: 'paul-phoenix', name: 'Paul Phoenix', moveCount: 0 },
      { id: 'steve-fox', name: 'Steve Fox', moveCount: 0 },
      { id: 'violet', name: 'Violet', moveCount: 0 },
      { id: 'yoshimitsu', name: 'Yoshimitsu', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'tekken-5',

    mameRomset: "",
    releaseYear: 2004,
    platform: "PS2, PC",
    name: "Tekken 5",
    tagline: "The Iron Fist Awakening",
    isDraft: true,
    rosterCount: 32,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'tekken-6',

    mameRomset: "",
    releaseYear: 2007,
    platform: "Arcade, PS3, Xbox 360, PC",
    name: "Tekken 6",
    tagline: "Bloodline Rebellion",
    isDraft: true,
    rosterCount: 41,
    characters: [
      { id: 'alisa-bosconovitch', name: 'Alisa Bosconovitch', moveCount: 0 },
      { id: 'anna-williams', name: 'Anna Williams', moveCount: 0 },
      { id: 'armor-king-ii', name: 'Armor King II', moveCount: 0 },
      { id: 'asuka-kazama', name: 'Asuka Kazama', moveCount: 0 },
      { id: 'baek-doo-san', name: 'Baek Doo San', moveCount: 0 },
      { id: 'bob-richards', name: 'Bob Richards', moveCount: 0 },
      { id: 'bruce-irvin', name: 'Bruce Irvin', moveCount: 0 },
      { id: 'bryan-fury', name: 'Bryan Fury', moveCount: 0 },
      { id: 'christie-monteiro', name: 'Christie Monteiro', moveCount: 0 },
      { id: 'craig-marduk', name: 'Craig Marduk', moveCount: 0 },
      { id: 'devil-jin', name: 'Devil Jin', moveCount: 0 },
      { id: 'sergei-dragunov', name: 'Sergei Dragunov', moveCount: 0 },
      { id: 'eddy-gordo', name: 'Eddy Gordo', moveCount: 0 },
      { id: 'feng-wei', name: 'Feng Wei', moveCount: 0 },
      { id: 'ganryu', name: 'Ganryu', moveCount: 0 },
      { id: 'heihachi-mishima', name: 'Heihachi Mishima', moveCount: 0 },
      { id: 'hwoarang', name: 'Hwoarang', moveCount: 0 },
      { id: 'jack-6', name: 'Jack-6', moveCount: 0 },
      { id: 'jin-kazama', name: 'Jin Kazama', moveCount: 0 },
      { id: 'julia-chang', name: 'Julia Chang', moveCount: 0 },
      { id: 'kazuya-mishima', name: 'Kazuya Mishima', moveCount: 0 },
      { id: 'king-ii', name: 'King II', moveCount: 0 },
      { id: 'kuma-ii', name: 'Kuma II', moveCount: 0 },
      { id: 'lars-alexandersson', name: 'Lars Alexandersson', moveCount: 0 },
      { id: 'lee-chaolan', name: 'Lee Chaolan', moveCount: 0 },
      { id: 'lei-wulong', name: 'Lei Wulong', moveCount: 0 },
      { id: 'leo-kliesen', name: 'Leo Kliesen', moveCount: 0 },
      { id: 'lili-rochefort', name: 'Lili Rochefort', moveCount: 0 },
      { id: 'ling-xiaoyu', name: 'Ling Xiaoyu', moveCount: 0 },
      { id: 'marshall-law', name: 'Marshall Law', moveCount: 0 },
      { id: 'miguel-caballero-rojo', name: 'Miguel Caballero Rojo', moveCount: 0 },
      { id: 'mokujin', name: 'Mokujin', moveCount: 0 },
      { id: 'nina-williams', name: 'Nina Williams', moveCount: 0 },
      { id: 'panda', name: 'Panda', moveCount: 0 },
      { id: 'paul-phoenix', name: 'Paul Phoenix', moveCount: 0 },
      { id: 'raven', name: 'Raven', moveCount: 0 },
      { id: 'roger-jr', name: 'Roger Jr.', moveCount: 0 },
      { id: 'steve-fox', name: 'Steve Fox', moveCount: 0 },
      { id: 'wang-jinrei', name: 'Wang Jinrei', moveCount: 0 },
      { id: 'yoshimitsu', name: 'Yoshimitsu', moveCount: 0 },
      { id: 'zafina', name: 'Zafina', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'tekken-tag-tournament-2',

    mameRomset: "",
    releaseYear: 2011,
    platform: "Arcade, PS3, Xbox 360, Wii U, PC",
    name: "Tekken Tag Tournament 2",
    tagline: "We Are Tekken",
    isDraft: true,
    rosterCount: 52,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'tekken-7',

    mameRomset: "",
    releaseYear: 2015,
    platform: "Arcade, PS4, Xbox One, PC",
    name: "Tekken 7",
    tagline: "The Mishima Saga Ends",
    isDraft: true,
    rosterCount: 51,
    characters: [
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'alisa-bosconovitch', name: 'Alisa Bosconovitch', moveCount: 0 },
      { id: 'anna-williams', name: 'Anna Williams', moveCount: 0 },
      { id: 'armor-king-ii', name: 'Armor King II', moveCount: 0 },
      { id: 'asuka-kazama', name: 'Asuka Kazama', moveCount: 0 },
      { id: 'bob-richards', name: 'Bob Richards', moveCount: 0 },
      { id: 'bryan-fury', name: 'Bryan Fury', moveCount: 0 },
      { id: 'claudio-serafino', name: 'Claudio Serafino', moveCount: 0 },
      { id: 'craig-marduk', name: 'Craig Marduk', moveCount: 0 },
      { id: 'devil-jin', name: 'Devil Jin', moveCount: 0 },
      { id: 'sergei-dragunov', name: 'Sergei Dragunov', moveCount: 0 },
      { id: 'eddy-gordo', name: 'Eddy Gordo', moveCount: 0 },
      { id: 'eliza', name: 'Eliza', moveCount: 0 },
      { id: 'fahkumram', name: 'Fahkumram', moveCount: 0 },
      { id: 'feng-wei', name: 'Feng Wei', moveCount: 0 },
      { id: 'ganryu', name: 'Ganryu', moveCount: 0 },
      { id: 'geese-howard', name: 'Geese Howard', moveCount: 0 },
      { id: 'gigas', name: 'Gigas', moveCount: 0 },
      { id: 'heihachi-mishima', name: 'Heihachi Mishima', moveCount: 0 },
      { id: 'hwoarang', name: 'Hwoarang', moveCount: 0 },
      { id: 'jack-7', name: 'Jack-7', moveCount: 0 },
      { id: 'jin-kazama', name: 'Jin Kazama', moveCount: 0 },
      { id: 'julia-chang', name: 'Julia Chang', moveCount: 0 },
      { id: 'katarina-alves', name: 'Katarina Alves', moveCount: 0 },
      { id: 'kazumi-mishima', name: 'Kazumi Mishima', moveCount: 0 },
      { id: 'kazuya-mishima', name: 'Kazuya Mishima', moveCount: 0 },
      { id: 'king-ii', name: 'King II', moveCount: 0 },
      { id: 'kuma-ii', name: 'Kuma II', moveCount: 0 },
      { id: 'kunimitsu-ii', name: 'Kunimitsu II', moveCount: 0 },
      { id: 'lars-alexandersson', name: 'Lars Alexandersson', moveCount: 0 },
      { id: 'lee-chaolan', name: 'Lee Chaolan', moveCount: 0 },
      { id: 'lei-wulong', name: 'Lei Wulong', moveCount: 0 },
      { id: 'leo-kliesen', name: 'Leo Kliesen', moveCount: 0 },
      { id: 'leroy-smith', name: 'Leroy Smith', moveCount: 0 },
      { id: 'lili-rochefort', name: 'Lili Rochefort', moveCount: 0 },
      { id: 'ling-xiaoyu', name: 'Ling Xiaoyu', moveCount: 0 },
      { id: 'lucky-chloe', name: 'Lucky Chloe', moveCount: 0 },
      { id: 'lidia-sobieska', name: 'Lidia Sobieska', moveCount: 0 },
      { id: 'marshall-law', name: 'Marshall Law', moveCount: 0 },
      { id: 'master-raven', name: 'Master Raven', moveCount: 0 },
      { id: 'miguel-caballero-rojo', name: 'Miguel Caballero Rojo', moveCount: 0 },
      { id: 'negan', name: 'Negan', moveCount: 0 },
      { id: 'nina-williams', name: 'Nina Williams', moveCount: 0 },
      { id: 'noctis-lucis-caelum', name: 'Noctis Lucis Caelum', moveCount: 0 },
      { id: 'panda', name: 'Panda', moveCount: 0 },
      { id: 'paul-phoenix', name: 'Paul Phoenix', moveCount: 0 },
      { id: 'shaheen', name: 'Shaheen', moveCount: 0 },
      { id: 'steve-fox', name: 'Steve Fox', moveCount: 0 },
      { id: 'ling-xiaoyu', name: 'Ling Xiaoyu', moveCount: 0 },
      { id: 'yoshimitsu', name: 'Yoshimitsu', moveCount: 0 },
      { id: 'zafina', name: 'Zafina', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'the-king-of-fighters-95',

    mameRomset: "",
    releaseYear: 1995,
    platform: "Arcade, NeoGeo, PS1, Saturn, PC",
    name: "The King of Fighters '95",
    isDraft: true,
    rosterCount: 27,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'the-king-of-fighters-96',

    mameRomset: "",
    releaseYear: 1996,
    platform: "Arcade, NeoGeo, PS1, Saturn, PC",
    name: "The King of Fighters '96",
    isDraft: true,
    rosterCount: 26,
    characters: [
      { id: 'andy-bogard', name: 'Andy Bogard', moveCount: 0 },
      { id: 'athena-asamiya', name: 'Athena Asamiya', moveCount: 0 },
      { id: 'benimaru-nikaido', name: 'Benimaru Nikaido', moveCount: 0 },
      { id: 'chang-koehan', name: 'Chang Koehan', moveCount: 0 },
      { id: 'chin-gentsai', name: 'Chin Gentsai', moveCount: 0 },
      { id: 'choi-bounge', name: 'Choi Bounge', moveCount: 0 },
      { id: 'clark-still', name: 'Clark Still', moveCount: 0 },
      { id: 'geese-howard', name: 'Geese Howard', moveCount: 0 },
      { id: 'goro-daimon', name: 'Goro Daimon', moveCount: 0 },
      { id: 'iori-yagami', name: 'Iori Yagami', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'kasumi-todoh', name: 'Kasumi Todoh', moveCount: 0 },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan', moveCount: 0 },
      { id: 'king', name: 'King', moveCount: 0 },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi', moveCount: 0 },
      { id: 'leona-heidern', name: 'Leona Heidern', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'mature', name: 'Mature', moveCount: 0 },
      { id: 'mr-big', name: 'Mr. Big', moveCount: 0 },
      { id: 'ralf-jones', name: 'Ralf Jones', moveCount: 0 },
      { id: 'robert-garcia', name: 'Robert Garcia', moveCount: 0 },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki', moveCount: 0 },
      { id: 'sie-kensou', name: 'Sie Kensou', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'vice', name: 'Vice', moveCount: 0 },
      { id: 'wolfgang-krauser', name: 'Wolfgang Krauser', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'the-king-of-fighters-97',

    mameRomset: "",
    releaseYear: 1997,
    platform: "Arcade, NeoGeo, PS1, Saturn, PC",
    name: "The King of Fighters '97",
    isDraft: true,
    rosterCount: 31,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'the-king-of-fighters-98',

    mameRomset: "kof98",
    releaseYear: 1998,
    platform: "Arcade, NeoGeo, PS1, Saturn, PC",
    name: "The King of Fighters '98",
    isDraft: true,
    rosterCount: 34,
    characters: [
      { id: 'andy-bogard', name: 'Andy Bogard', moveCount: 0 },
      { id: 'athena-asamiya', name: 'Athena Asamiya', moveCount: 0 },
      { id: 'benimaru-nikaido', name: 'Benimaru Nikaido', moveCount: 0 },
      { id: 'billy-kane', name: 'Billy Kane', moveCount: 0 },
      { id: 'blue-mary', name: 'Blue Mary', moveCount: 0 },
      { id: 'chang-koehan', name: 'Chang Koehan', moveCount: 0 },
      { id: 'chin-gentsai', name: 'Chin Gentsai', moveCount: 0 },
      { id: 'choi-bounge', name: 'Choi Bounge', moveCount: 0 },
      { id: 'chris', name: 'Chris', moveCount: 0 },
      { id: 'clark-still', name: 'Clark Still', moveCount: 0 },
      { id: 'goro-daimon', name: 'Goro Daimon', moveCount: 0 },
      { id: 'heidern', name: 'Heidern', moveCount: 0 },
      { id: 'iori-yagami', name: 'Iori Yagami', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan', moveCount: 0 },
      { id: 'king', name: 'King', moveCount: 0 },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi', moveCount: 0 },
      { id: 'leona-heidern', name: 'Leona Heidern', moveCount: 0 },
      { id: 'lucky-glauber', name: 'Lucky Glauber', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'mature', name: 'Mature', moveCount: 0 },
      { id: 'ralf-jones', name: 'Ralf Jones', moveCount: 0 },
      { id: 'robert-garcia', name: 'Robert Garcia', moveCount: 0 },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki', moveCount: 0 },
      { id: 'ryuji-yamazaki', name: 'Ryuji Yamazaki', moveCount: 0 },
      { id: 'saisyu-kusanagi', name: 'Saisyu Kusanagi', moveCount: 0 },
      { id: 'shermie', name: 'Shermie', moveCount: 0 },
      { id: 'shingo-yabuki', name: 'Shingo Yabuki', moveCount: 0 },
      { id: 'sie-kensou', name: 'Sie Kensou', moveCount: 0 },
      { id: 'takuma-sakazaki', name: 'Takuma Sakazaki', moveCount: 0 },
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'vice', name: 'Vice', moveCount: 0 },
      { id: 'yashiro-nanakase', name: 'Yashiro Nanakase', moveCount: 0 },
      { id: 'yuri-sakazaki', name: 'Yuri Sakazaki', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'the-king-of-fighters-99',

    mameRomset: "",
    releaseYear: 1999,
    platform: "Arcade, NeoGeo, PS1, DC, PC",
    name: "The King of Fighters '99",
    isDraft: true,
    rosterCount: 28,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'the-king-of-fighters-xi',

    mameRomset: "",
    releaseYear: 2005,
    platform: "Arcade, PS2, PC",
    name: "The King of Fighters XI",
    tagline: "The 11th Tournament",
    isDraft: true,
    rosterCount: 45,
    characters: [
      { id: 'adelheid', name: 'Adelheid', moveCount: 0 },
      { id: 'ash', name: 'Ash', moveCount: 0 },
      { id: 'athena', name: 'Athena', moveCount: 0 },
      { id: 'b-jenet', name: 'B. Jenet', moveCount: 0 },
      { id: 'blue-mary', name: 'Blue Mary', moveCount: 0 },
      { id: 'clark', name: 'Clark', moveCount: 0 },
      { id: 'duo-lon', name: 'Duo Lon', moveCount: 0 },
      { id: 'duck-king', name: 'Duck King', moveCount: 0 },
      { id: 'eiji', name: 'Eiji', moveCount: 0 },
      { id: 'elisabeth', name: 'Elisabeth', moveCount: 0 },
      { id: 'gai', name: 'Gai', moveCount: 0 },
      { id: 'gato', name: 'Gato', moveCount: 0 },
      { id: 'geese', name: 'Geese', moveCount: 0 },
      { id: 'griffon', name: 'Griffon', moveCount: 0 },
      { id: 'hayate', name: 'Hayate', moveCount: 0 },
      { id: 'hotaru', name: 'Hotaru', moveCount: 0 },
      { id: 'iori', name: 'Iori', moveCount: 0 },
      { id: 'jyazu', name: 'Jyazu', moveCount: 0 },
      { id: 'kasumi', name: 'Kasumi', moveCount: 0 },
      { id: 'kensou', name: 'Kensou', moveCount: 0 },
      { id: 'kim', name: 'Kim', moveCount: 0 },
      { id: 'king', name: 'King', moveCount: 0 },
      { id: 'kula', name: 'Kula', moveCount: 0 },
      { id: 'kyo', name: 'Kyo', moveCount: 0 },
      { id: 'magaki', name: 'Magaki', moveCount: 0 },
      { id: 'mai', name: 'Mai', moveCount: 0 },
      { id: 'malin', name: 'Malin', moveCount: 0 },
      { id: 'maxima', name: 'Maxima', moveCount: 0 },
      { id: 'momoko', name: 'Momoko', moveCount: 0 },
      { id: 'mr-big', name: 'Mr. Big', moveCount: 0 },
      { id: 'oswald', name: 'Oswald', moveCount: 0 },
      { id: 'ralf', name: 'Ralf', moveCount: 0 },
      { id: 'ramon', name: 'Ramon', moveCount: 0 },
      { id: 'robert', name: 'Robert', moveCount: 0 },
      { id: 'ryo', name: 'Ryo', moveCount: 0 },
      { id: 'shen', name: 'Shen', moveCount: 0 },
      { id: 'shingo', name: 'Shingo', moveCount: 0 },
      { id: 'shion', name: 'Shion', moveCount: 0 },
      { id: 'silber', name: 'Silber', moveCount: 0 },
      { id: 'terry', name: 'Terry', moveCount: 0 },
      { id: 'tung', name: 'Tung', moveCount: 0 },
      { id: 'vanessa', name: 'Vanessa', moveCount: 0 },
      { id: 'whip', name: 'Whip', moveCount: 0 },
      { id: 'yuri', name: 'Yuri', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'the-king-of-fighters-xii',

    mameRomset: "",
    releaseYear: 2009,
    platform: "Arcade, PS3, Xbox 360, PC",
    name: "The King of Fighters XII",
    tagline: "Rebirth of the King",
    isDraft: true,
    rosterCount: 25,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'the-king-of-fighters-maximum-impact-regulation-a',

    mameRomset: "",
    releaseYear: 2007,
    platform: "Arcade, PS2, PC",
    name: "The King of Fighters: Maximum Impact Regulation 'A'",
    isDraft: true,
    rosterCount: 5,
    characters: [
      { id: 'ash-crimson', name: 'Ash Crimson', moveCount: 0 },
      { id: 'blue-mary', name: 'Blue Mary', moveCount: 0 },
      { id: 'makoto-mizoguchi', name: 'Makoto Mizoguchi', moveCount: 0 },
      { id: 'nightmare-geese', name: 'Nightmare Geese', moveCount: 0 },
      { id: 'xiao-lon', name: 'Xiao Lon', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'clayfighter',

    mameRomset: "",
    releaseYear: 1993,
    platform: "SNES, Genesis, PC",
    name: "ClayFighter",
    tagline: "Enter the Arena",
    isDraft: true,
    rosterCount: 8,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'eternal-champions',

    mameRomset: "",
    releaseYear: 1993,
    platform: "Genesis, PC",
    name: "Eternal Champions",
    tagline: "Enter the Arena",
    isDraft: true,
    rosterCount: 23,
    characters: [
      { id: 'chin-wo', name: 'Chin Wo', moveCount: 0 },
      { id: 'crispy', name: 'Crispy', moveCount: 0 },
      { id: 'dawson-mcshane', name: 'Dawson McShane', moveCount: 0 },
      { id: 'eternal-champion', name: 'Eternal Champion', moveCount: 0 },
      { id: 'hooter', name: 'Hooter', moveCount: 0 },
      { id: 'jetta-maxx', name: 'Jetta Maxx', moveCount: 0 },
      { id: 'jonathan-blade', name: 'Jonathan Blade', moveCount: 0 },
      { id: 'larcen-tyler', name: 'Larcen Tyler', moveCount: 0 },
      { id: 'mitchell-middleton-knight-midknight', name: 'Mitchell Middleton Knight (MidKnight)', moveCount: 0 },
      { id: 'rax-coswell', name: 'R.A.X. Coswell', moveCount: 0 },
      { id: 'ramses-iii', name: 'Ramses III', moveCount: 0 },
      { id: 'raven-gindhar', name: 'Raven Gindhar', moveCount: 0 },
      { id: 'riptide', name: 'Riptide', moveCount: 0 },
      { id: 'senator', name: 'Senator', moveCount: 0 },
      { id: 'shadow-yamoto', name: 'Shadow Yamoto', moveCount: 0 },
      { id: 'slash', name: 'Slash', moveCount: 0 },
      { id: 'slither', name: 'Slither', moveCount: 0 },
      { id: 'thanatos', name: 'Thanatos', moveCount: 0 },
      { id: 'trident', name: 'Trident', moveCount: 0 },
      { id: 'xavier-pendragon', name: 'Xavier Pendragon', moveCount: 0 },
      { id: 'yappy', name: 'Yappy', moveCount: 0 },
      { id: 'zuni', name: 'Zuni', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'melty-blood-actress-again-current-code',

    mameRomset: "",
    releaseYear: 2008,
    platform: "Arcade, PS2, PC",
    name: "Melty Blood: Actress Again Current Code",
    tagline: "Actress Again",
    isDraft: true,
    rosterCount: 25,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'melty-blood-type-lumina',

    mameRomset: "",
    releaseYear: 2021,
    platform: "PS4, Xbox One, Switch, PC",
    name: "Melty Blood: Type Lumina",
    tagline: "Type Lumina",
    isDraft: true,
    rosterCount: 21,
    characters: [
      { id: 'akiha-tohno', name: 'Akiha Tohno', moveCount: 0 },
      { id: 'aoko-aozaki', name: 'Aoko Aozaki', moveCount: 0 },
      { id: 'arcueid-brunestud', name: 'Arcueid Brunestud', moveCount: 0 },
      { id: 'ciel', name: 'Ciel', moveCount: 0 },
      { id: 'count-of-monte-cristo', name: 'Count of Monte Cristo', moveCount: 0 },
      { id: 'dead-apostle-noel', name: 'Dead Apostle Noel', moveCount: 0 },
      { id: 'hisui', name: 'Hisui', moveCount: 0 },
      { id: 'kohaku', name: 'Kohaku', moveCount: 0 },
      { id: 'kouma-kishima', name: 'Kouma Kishima', moveCount: 0 },
      { id: 'mario-gallo-bestino', name: 'Mario Gallo Bestino', moveCount: 0 },
      { id: 'mash-kyrielight', name: 'Mash Kyrielight', moveCount: 0 },
      { id: 'miyako-arima', name: 'Miyako Arima', moveCount: 0 },
      { id: 'neco-arc', name: 'Neco-Arc', moveCount: 0 },
      { id: 'noel', name: 'Noel', moveCount: 0 },
      { id: 'powered-ciel', name: 'Powered Ciel', moveCount: 0 },
      { id: 'red-arcueid', name: 'Red Arcueid', moveCount: 0 },
      { id: 'roa', name: 'Roa', moveCount: 0 },
      { id: 'saber', name: 'Saber', moveCount: 0 },
      { id: 'shiki-tohno', name: 'Shiki Tohno', moveCount: 0 },
      { id: 'ushiwakamaru', name: 'Ushiwakamaru', moveCount: 0 },
      { id: 'vlov-arkhangel', name: 'Vlov Arkhangel', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'pocket-bravery',

    mameRomset: "",
    releaseYear: 2023,
    platform: "PC, Switch, PS4, Xbox One",
    name: "Pocket Bravery",
    tagline: "Enter the Arena",
    isDraft: true,
    rosterCount: 12,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'skullgirls-2nd-encore',

    mameRomset: "",
    releaseYear: 2011,
    platform: "PS3, Xbox 360, Vita, PS4, Switch, PC",
    name: "Skullgirls: 2nd Encore",
    tagline: "The Encore",
    isDraft: true,
    rosterCount: 18,
    characters: [
      { id: 'annie', name: 'Annie', moveCount: 0 },
      { id: 'beowulf', name: 'Beowulf', moveCount: 0 },
      { id: 'big-band', name: 'Big Band', moveCount: 0 },
      { id: 'black-dahlia', name: 'Black Dahlia', moveCount: 0 },
      { id: 'cerebella', name: 'Cerebella', moveCount: 0 },
      { id: 'double', name: 'Double', moveCount: 0 },
      { id: 'eliza', name: 'Eliza', moveCount: 0 },
      { id: 'filia', name: 'Filia', moveCount: 0 },
      { id: 'fukua', name: 'Fukua', moveCount: 0 },
      { id: 'marie', name: 'Marie', moveCount: 0 },
      { id: 'ms-fortune', name: 'Ms. Fortune', moveCount: 0 },
      { id: 'painwheel', name: 'Painwheel', moveCount: 0 },
      { id: 'parasoul', name: 'Parasoul', moveCount: 0 },
      { id: 'peacock', name: 'Peacock', moveCount: 0 },
      { id: 'robo-fortune', name: 'Robo-Fortune', moveCount: 0 },
      { id: 'squigly', name: 'Squigly', moveCount: 0 },
      { id: 'umbrella', name: 'Umbrella', moveCount: 0 },
      { id: 'valentine', name: 'Valentine', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'super-smash-bros',

    mameRomset: "",
    releaseYear: 1999,
    platform: "N64, PC",
    name: "Super Smash Bros.",
    tagline: "Choose Your Character!",
    isDraft: true,
    rosterCount: 12,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'super-smash-bros-melee',

    mameRomset: "",
    releaseYear: 2001,
    platform: "GC, PC",
    name: "Super Smash Bros. Melee",
    tagline: "The Melee",
    isDraft: true,
    rosterCount: 26,
    characters: [
      { id: 'bowser', name: 'Bowser', moveCount: 0 },
      { id: 'captain-falcon', name: 'Captain Falcon', moveCount: 0 },
      { id: 'donkey-kong', name: 'Donkey Kong', moveCount: 0 },
      { id: 'dr-mario', name: 'Dr. Mario', moveCount: 0 },
      { id: 'falco-lombardi', name: 'Falco Lombardi', moveCount: 0 },
      { id: 'fox-mccloud', name: 'Fox McCloud', moveCount: 0 },
      { id: 'ganondorf', name: 'Ganondorf', moveCount: 0 },
      { id: 'ice-climbers', name: 'Ice Climbers', moveCount: 0 },
      { id: 'jigglypuff', name: 'Jigglypuff', moveCount: 0 },
      { id: 'kirby', name: 'Kirby', moveCount: 0 },
      { id: 'link', name: 'Link', moveCount: 0 },
      { id: 'luigi', name: 'Luigi', moveCount: 0 },
      { id: 'mario', name: 'Mario', moveCount: 0 },
      { id: 'marth', name: 'Marth', moveCount: 0 },
      { id: 'mewtwo', name: 'Mewtwo', moveCount: 0 },
      { id: 'mr-game-watch', name: 'Mr. Game & Watch', moveCount: 0 },
      { id: 'ness', name: 'Ness', moveCount: 0 },
      { id: 'peach', name: 'Peach', moveCount: 0 },
      { id: 'pichu', name: 'Pichu', moveCount: 0 },
      { id: 'pikachu', name: 'Pikachu', moveCount: 0 },
      { id: 'roy', name: 'Roy', moveCount: 0 },
      { id: 'samus-aran', name: 'Samus Aran', moveCount: 0 },
      { id: 'sheik', name: 'Sheik', moveCount: 0 },
      { id: 'yoshi', name: 'Yoshi', moveCount: 0 },
      { id: 'young-link', name: 'Young Link', moveCount: 0 },
      { id: 'zelda', name: 'Zelda', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'super-smash-bros-brawl',

    mameRomset: "",
    releaseYear: 2008,
    platform: "Wii, PC",
    name: "Super Smash Bros. Brawl",
    tagline: "The Brawl Begins",
    isDraft: true,
    rosterCount: 39,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },

  {
    id: 'thems-fightin-herds',

    mameRomset: "",
    releaseYear: 2020,
    platform: "PC, Switch, PS4, Xbox One",
    name: "Them's Fightin' Herds",
    isDraft: true,
    rosterCount: 7,
    characters: [
      { id: 'arizona', name: 'Arizona', moveCount: 0 },
      { id: 'oleander', name: 'Oleander', moveCount: 0 },
      { id: 'paprika', name: 'Paprika', moveCount: 0 },
      { id: 'pom', name: 'Pom', moveCount: 0 },
      { id: 'shanty', name: 'Shanty', moveCount: 0 },
      { id: 'tianhuo', name: 'Tianhuo', moveCount: 0 },
      { id: 'velvet', name: 'Velvet', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'melty-blood-type-lumina---wikipedia',

    mameRomset: "",
    name: "Melty Blood: Type Lumina - Wikipedia",
    tagline: "Type Lumina (Wiki)",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },

  {
    id: 'weaponlord',

    mameRomset: "",
    name: "WeaponLord",
    tagline: "Enter the Arena",
    isDraft: true,
    releaseYear: 1995,
    platform: "SNES, Genesis, PC",
    rosterCount: 8,
    characters: [
      { id: 'bane', name: 'Bane', moveCount: 0 },
      { id: 'divada', name: 'Divada', moveCount: 0 },
      { id: 'jen-tai', name: 'Jen-Tai', moveCount: 0 },
      { id: 'korr', name: 'Korr', moveCount: 0 },
      { id: 'pyra', name: 'Pyra', moveCount: 0 },
      { id: 'talazia', name: 'Talazia', moveCount: 0 },
      { id: 'zorn', name: 'Zorn', moveCount: 0 },
      { id: 'zyx', name: 'Zyx', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },

  {
    id: 'bio-freaks',

    mameRomset: "",
    name: "Bio F.R.E.A.K.S.",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },

  {
    id: 'fatal-fury-wild-ambition',

    mameRomset: "",
    name: "Fatal Fury: Wild Ambition",
    tagline: "Wild Ambition",
    isDraft: true,
    characters: [
      { id: 'terry-bogard', name: 'Terry Bogard', moveCount: 0 },
      { id: 'andy-bogard', name: 'Andy Bogard', moveCount: 0 },
      { id: 'joe-higashi', name: 'Joe Higashi', moveCount: 0 },
      { id: 'mai-shiranui', name: 'Mai Shiranui', moveCount: 0 },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan', moveCount: 0 },
      { id: 'raiden', name: 'Raiden', moveCount: 0 },
      { id: 'ryuji-yamazaki', name: 'Ryuji Yamazaki', moveCount: 0 },
      { id: 'li-xiangfei', name: 'Li Xiangfei', moveCount: 0 },
      { id: 'tsugumi-sendo', name: 'Tsugumi Sendo', moveCount: 0 },
      { id: 'touji-sakata', name: 'Touji Sakata', moveCount: 0 },
      { id: 'geese-howard', name: 'Geese Howard', moveCount: 0 },
      { id: 'billy-kane', name: 'Billy Kane', moveCount: 0 },
      { id: 'duck-king', name: 'Duck King', moveCount: 0 },
      { id: 'mr-karate-ii', name: 'Mr. Karate II', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },

  {
    id: 'fighters-impact',

    mameRomset: "",
    name: "Fighters' Impact",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },

  {
    id: 'heavens-gate',

    mameRomset: "",
    name: "Heaven's Gate",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },

  {
    id: 'tobal-2',

    mameRomset: "",
    name: "Tobal 2",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },

  {
    id: 'ultraman-fighting-evolution',

    mameRomset: "",
    name: "Ultraman Fighting Evolution",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },

  {
    id: 'war-gods',

    mameRomset: "",
    name: "War Gods",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'aggressors-of-dark-kombat',

    mameRomset: "",
    name: "Aggressors of Dark Kombat",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [
      { id: 'joe-kusanagi', name: 'Joe Kusanagi', moveCount: 0 },
      { id: 'leonhard-domador', name: 'Leonhard Domador', moveCount: 0 },
      { id: 'kisarah-westfield', name: 'Kisarah Westfield', moveCount: 0 },
      { id: 'bobby-nelson', name: 'Bobby Nelson', moveCount: 0 },
      { id: 'sheen-genus', name: 'Sheen Genus', moveCount: 0 },
      { id: 'fuuma-kotaro', name: 'Fuuma Kotaro', moveCount: 0 },
      { id: 'lee-hae-gwon', name: 'Lee Hae Gwon', moveCount: 0 },
      { id: 'ganzagawa', name: 'Ganzagawa', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'chaos-code-new-sign-of-catastrophe',

    mameRomset: "",
    name: "Chaos Code: New Sign of Catastrophe",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'rival-schools-united-by-fate',
    mameRomset: "",
    name: 'Rival Schools: United by Fate',
    tagline: "United by Fate",
    developer: 'Capcom',
    releaseYear: 1997,
    platform: "Arcade, PlayStation, PC",
    rosterCount: 20,
    systemMechanics: [
      { name: 'Team-Up Attack', description: 'Call your partner for a powerful two-person attack.' , input: 'HP+HK' },
      { name: 'Burning Vigor', description: 'Meter powering supers and team attacks.'  },
      { name: 'Tardy Counter', description: 'Counter from blockstun using partner assist.'  },
      { name: 'Air Combo', description: 'Launch opponents for aerial follow-ups.'  },
      { name: 'Team Edit', description: 'Choose 2 characters to form a team.'  },
      { name: 'Text Adventure', description: 'Single-player mode with branching story and school sim elements.'  },
      { name: 'Guard Cancel', description: 'Counter-attack during block.'  },
      { name: 'Guts System', description: 'Reduced damage at low health for comebacks.'  }
    ],
    characters: [
      { id: 'batsu-ichimonji', name: 'Batsu Ichimonji', moveCount: 0 },
      { id: 'hinata-wakaba', name: 'Hinata Wakaba', moveCount: 0 },
      { id: 'kyosuke-kagami', name: 'Kyosuke Kagami', moveCount: 0 },
      { id: 'shoma-sawamura', name: 'Shoma Sawamura', moveCount: 0 },
      { id: 'natsu-ayuhara', name: 'Natsu Ayuhara', moveCount: 0 },
      { id: 'roberto-miura', name: 'Roberto Miura', moveCount: 0 },
      { id: 'roy-bromwell', name: 'Roy Bromwell', moveCount: 0 },
      { id: 'tiffany-lords', name: 'Tiffany Lords', moveCount: 0 },
      { id: 'akira-kazama', name: 'Akira Kazama', moveCount: 0 },
      { id: 'sakura-kasugano', name: 'Sakura Kasugano', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']
  },
  {
    id: 'star-gladiator-episode-i-final-crusade',

    mameRomset: "",
    name: "Star Gladiator Episode I Final Crusade",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'tmnt-tournament-fighters-genesis',

    mameRomset: "",
    name: "TMNT Tournament Fighters (Genesis)",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [
      { id: 'leonardo', name: 'Leonardo', moveCount: 0 },
      { id: 'donatello', name: 'Donatello', moveCount: 0 },
      { id: 'raphael', name: 'Raphael', moveCount: 0 },
      { id: 'michelangelo', name: 'Michelangelo', moveCount: 0 },
      { id: 'casey-jones', name: 'Casey Jones', moveCount: 0 },
      { id: 'ray-fillet', name: 'Ray Fillet', moveCount: 0 },
      { id: 'triceraton', name: 'Triceraton', moveCount: 0 },
      { id: 'sisyphus', name: 'Sisyphus', moveCount: 0 },
      { id: 'krang', name: 'Krang', moveCount: 0 },
      { id: 'karai', name: 'Karai', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'tmnt-tournament-fighters-nes',

    mameRomset: "",
    name: "TMNT Tournament Fighters (NES)",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  },
  {
    id: 'tmnt-tournament-fighters-snes',

    mameRomset: "",
    name: "TMNT Tournament Fighters (SNES)",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [
      { id: 'leonardo', name: 'Leonardo', moveCount: 0 },
      { id: 'donatello', name: 'Donatello', moveCount: 0 },
      { id: 'michelangelo', name: 'Michelangelo', moveCount: 0 },
      { id: 'raphael', name: 'Raphael', moveCount: 0 },
      { id: 'aska', name: 'Aska', moveCount: 0 },
      { id: 'armaggon', name: 'Armaggon', moveCount: 0 },
      { id: 'chrome-dome', name: 'Chrome Dome', moveCount: 0 },
      { id: 'war', name: 'War', moveCount: 0 },
      { id: 'wingnut', name: 'Wingnut', moveCount: 0 },
      { id: 'cyber-shredder', name: 'Cyber Shredder', moveCount: 0 },
      { id: 'rat-king', name: 'Rat King', moveCount: 0 },
      { id: 'karai', name: 'Karai', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Common Moves']
  }
  ,
  {
    id: 'neo-geo-battle-coliseum',

    mameRomset: "",
    name: 'Neo Geo Battle Coliseum',
    tagline: "Enter the Arena",
    developer: 'SNK',
    releaseYear: 2005,
    platform: 'Arcade, PlayStation 2, PC',
    rosterCount: 40,
    
    systemMechanics: [
      { name: 'Tag System', description: 'Two-character teams with real-time tag.'  },
      { name: 'D-Assault', description: 'Partner team attack. Both characters strike together.'  },
      { name: 'GCFS', description: 'Guard Cancel Front Step — dash out of blockstun.'  },
      { name: 'Just Defend', description: 'Tap back on impact for reduced blockstun.' , input: '4 (precise)' },
      { name: 'Guard Cancel Roll', description: 'Roll out of block pressure.'  },
      { name: 'Double Assault', description: 'Ultimate team super using both characters.' , input: 'ABC' },
      { name: 'Crossover', description: 'Tag mid-combo for extensions.'  },
      { name: 'Front Step', description: 'Forward dash with invincibility frames.'  }
    ],

    characters: [],
    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']
  },
  {
    id: 'rival-schools-united-by-fate',

    mameRomset: "",
    name: 'Rival Schools: United by Fate',
    tagline: "United by Fate",
    developer: 'Capcom',
    releaseYear: 1997,
    platform: "Arcade, PlayStation, PC",
    rosterCount: 10,
    characters: [
      { id: 'batsu-ichimonji', name: 'Batsu Ichimonji', moveCount: 0 },
      { id: 'hinata-wakaba', name: 'Hinata Wakaba', moveCount: 0 },
      { id: 'kyosuke-kagami', name: 'Kyosuke Kagami', moveCount: 0 },
      { id: 'shoma-sawamura', name: 'Shoma Sawamura', moveCount: 0 },
      { id: 'natsu-ayuhara', name: 'Natsu Ayuhara', moveCount: 0 },
      { id: 'roberto-miura', name: 'Roberto Miura', moveCount: 0 },
      { id: 'roy-bromwell', name: 'Roy Bromwell', moveCount: 0 },
      { id: 'tiffany-lords', name: 'Tiffany Lords', moveCount: 0 },
      { id: 'akira-kazama', name: 'Akira Kazama', moveCount: 0 },
      { id: 'sakura-kasugano', name: 'Sakura Kasugano', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Arts', 'Command Throws', 'Normal Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']
  }
  ,
  {
    id: 'idol-showdown',

    mameRomset: "",
    name: 'Idol Showdown',
    tagline: "VTuber Battle",
    developer: 'Besto Game Team',
    releaseYear: 2023,
    platform: 'PC',
    rosterCount: 12,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Unique Attacks']
  }
  ,
  {
    id: 'chaos-code-new-sign-of-catastrophe',

    mameRomset: "",
    name: 'Chaos Code: New Sign of Catastrophe',
    tagline: "Enter the Arena",
    developer: 'FK Digital',
    releaseYear: 2013,
    platform: 'Arcade, PlayStation 4, PC',
    rosterCount: 16,
    characters: [
      { id: 'bravo', name: 'Bravo', moveCount: 0 },
      { id: 'cait-sith', name: 'Cait & Sith', moveCount: 0 },
      { id: 'catherine', name: 'Catherine', moveCount: 0 },
      { id: 'celia', name: 'Celia', moveCount: 0 },
      { id: 'celia-ii-kai', name: 'Celia II Kai', moveCount: 0 },
      { id: 'cerberus', name: 'Cerberus', moveCount: 0 },
      { id: 'cthylla', name: 'Cthylla', moveCount: 0 },
      { id: 'hermes', name: 'Hermes', moveCount: 0 },
      { id: 'hikaru', name: 'Hikaru', moveCount: 0 },
      { id: 'kagari', name: 'Kagari', moveCount: 0 },
      { id: 'kudlak-sin', name: 'Kudlak-Sin', moveCount: 0 },
      { id: 'lupinus', name: 'Lupinus', moveCount: 0 },
      { id: 'mg-hikaru', name: 'MG Hikaru', moveCount: 0 },
      { id: 'ray', name: 'Ray', moveCount: 0 },
      { id: 'rui', name: 'Rui', moveCount: 0 },
      { id: 'vein', name: 'Vein', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Unique Attacks']
  }
  ,
  {
    id: 'mortal-kombat-vs-dc-universe',

    mameRomset: "",
    notationSystem: 'mk',
    name: 'Mortal Kombat vs. DC Universe',
    tagline: "Worlds Collide",
    developer: 'Midway',
    releaseYear: 2008,
    platform: 'PlayStation 3, Xbox 360, PC',
    rosterCount: 25,
    characters: [],
    tabs: ['Special Moves', 'Heroic Brutality', 'Fatality', 'Super Combos', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Unique Attacks']
  }
  ,
  {
    id: 'arcana-heart-3-lovemax-sixstars-xtend',

    mameRomset: "",
    notationSystem: 'numpad',
    name: 'Arcana Heart 3',
    tagline: "Enter the Arena",
    developer: 'Examu',
    releaseYear: 2021,
    platform: 'Arcade, PC',
    rosterCount: 27,
    characters: [
      { id: 'heart-aino', name: 'Heart Aino', moveCount: 0 },
      { id: 'saki-tsuzura', name: 'Saki Tsuzura', moveCount: 0 },
      { id: 'kamui-tokinomiya', name: 'Kamui Tokinomiya', moveCount: 0 },
      { id: 'fiona-mayfield', name: 'Fiona Mayfield', moveCount: 0 },
      { id: 'yoriko-yasuzumi', name: 'Yoriko Yasuzumi', moveCount: 0 },
      { id: 'kira-daidohji', name: 'Kira Daidohji', moveCount: 0 },
      { id: 'lieselotte-achenbach', name: 'Lieselotte Achenbach', moveCount: 0 },
      { id: 'petra-johanna-lagerkvist', name: 'Petra Johanna Lagerkvist', moveCount: 0 },
      { id: 'zenia-valov', name: 'Zenia Valov', moveCount: 0 },
      { id: 'elsa-la-conti', name: 'Elsa la Conti', moveCount: 0 },
      { id: 'clarice-di-lanza', name: 'Clarice di Lanza', moveCount: 0 },
      { id: 'catherine-kyoubashi', name: 'Catherine Kyoubashi', moveCount: 0 },
      { id: 'dorothy-albright', name: 'Dorothy Albright', moveCount: 0 },
      { id: 'akane-inuwaka', name: 'Akane Inuwaka', moveCount: 0 },
      { id: 'nazuna-inuwaka', name: 'Nazuna Inuwaka', moveCount: 0 },
      { id: 'scharlachrot', name: 'Scharlachrot', moveCount: 0 },
      { id: 'weiss', name: 'Weiss', moveCount: 0 },
      { id: 'eko', name: 'Eko', moveCount: 0 },
      { id: 'minori-amanohara', name: 'Minori Amanohara', moveCount: 0 },
      { id: 'mei-fang', name: 'Mei-Fang', moveCount: 0 },
      { id: 'lilica-felchenerow', name: 'Lilica Felchenerow', moveCount: 0 },
      { id: 'konoha', name: 'Konoha', moveCount: 0 },
      { id: 'angelia-avallone', name: 'Angelia Avallone', moveCount: 0 },
      { id: 'mildred-avallone', name: 'Mildred Avallone', moveCount: 0 },
      { id: 'dark-heart', name: 'Dark Heart', moveCount: 0 },
      { id: 'pistrix', name: 'Pistrix', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Arcana Moves', 'Super Moves', 'Critical Heart', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Unique Attacks']
  }
  ,
  {
    id: 'the-rumble-fish',

    mameRomset: "",
    notationSystem: 'numpad',
    name: 'The Rumble Fish',
    tagline: "Enter the Arena",
    developer: 'Dimps',
    releaseYear: 2004,
    platform: 'Arcade, PlayStation 2',
    rosterCount: 10,
    characters: [],
    tabs: ['Special Moves', 'Offensive Art', 'Defensive Art', 'Critical Art', 'Normal Moves', 'Command Throws', 'Normal Throws', 'Unique Attacks']
  }
];
