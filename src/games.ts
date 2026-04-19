import type { GameDefinition } from './types';

export const SUPPORTED_GAMES: ReadonlyArray<Readonly<GameDefinition>> = [
  {
    id: 'dragon-ball-fighterz',
    name: 'Dragon Ball FighterZ',
    developer: 'Arc System Works',
    releaseYear: 2018,
    platform: 'PS4, Xbox One, PC, Switch, PS5, Xbox Series X/S',
    tagline: '3v3 Tag Team Action',
    notationSystem: 'numpad',
    tabs: ['Normal Moves', 'Special Moves', 'Supers', 'Assists', 'System', 'Combos'],
    characters: []
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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [
      { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
      { id: 'demitri', name: 'Demitri', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'guy', name: 'Guy', moveCount: 0 },
      { id: 'hauzer', name: 'Hauzer', moveCount: 0 },
      { id: 'hydron', name: 'Hydron', moveCount: 0 },
      { id: 'ingrid', name: 'Ingrid', moveCount: 0 },
      { id: 'jedah', name: 'Jedah', moveCount: 0 },
      { id: 'karin', name: 'Karin', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'leo', name: 'Leo', moveCount: 0 },
      { id: 'm-bison', name: 'M. Bison', moveCount: 0 },
      { id: 'rose', name: 'Rose', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sakura', name: 'Sakura', moveCount: 0 },
      { id: 'shin-akuma', name: 'Shin Akuma', moveCount: 0 },
      { id: 'urien', name: 'Urien', moveCount: 0 },
      { id: 'yun', name: 'Yun', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'balrog', name: 'Balrog', moveCount: 0 },
      { id: 'benimaru', name: 'Benimaru', moveCount: 0 },
      { id: 'blanka', name: 'Blanka', moveCount: 0 },
      { id: 'cammy', name: 'Cammy', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'e-honda', name: 'E. Honda', moveCount: 0 },
      { id: 'geese', name: 'Geese', moveCount: 0 },
      { id: 'guile', name: 'Guile', moveCount: 0 },
      { id: 'iori', name: 'Iori', moveCount: 0 },
      { id: 'joe', name: 'Joe', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'king', name: 'King', moveCount: 0 },
      { id: 'kyo', name: 'Kyo', moveCount: 0 },
      { id: 'm-bison', name: 'M. Bison', moveCount: 0 },
      { id: 'mai', name: 'Mai', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'nakoruru', name: 'Nakoruru', moveCount: 0 },
      { id: 'raiden', name: 'Raiden', moveCount: 0 },
      { id: 'robert', name: 'Robert', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'sakura', name: 'Sakura', moveCount: 0 },
      { id: 'terry', name: 'Terry', moveCount: 0 },
      { id: 'vice', name: 'Vice', moveCount: 0 },
      { id: 'yuri', name: 'Yuri', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'cyberbots-full-metal-madness',

    mameRomset: "",

    name: "Cyberbots: Full Metal Madness",
    tagline: "Enter the Arena",

    developer: "Capcom",

    releaseYear: 1995,
    platform: "Arcade, Saturn, PS1, PC",

rosterCount: 12,

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'darkstalkers-the-night-warriors',

    mameRomset: "",

    name: "Darkstalkers: The Night Warriors",
    tagline: "The Night Warriors",

    developer: "Capcom",

    releaseYear: 1994,
    platform: "Arcade, PS1, PC",

rosterCount: 11,

        characters: [
      { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
      { id: 'bishamon', name: 'Bishamon', moveCount: 0 },
      { id: 'demitri-maximoff', name: 'Demitri Maximoff', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'huitzil', name: 'Huitzil', moveCount: 0 },
      { id: 'jon-talbain', name: 'Jon Talbain', moveCount: 0 },
      { id: 'lord-raptor', name: 'Lord Raptor', moveCount: 0 },
      { id: 'morrigan-aensland', name: 'Morrigan', moveCount: 0 },
      { id: 'rikuo', name: 'Rikuo', moveCount: 0 },
      { id: 'sasquatch', name: 'Sasquatch', moveCount: 0 },
      { id: 'victor', name: 'Victor', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'dragon-ball-fighterz',

    mameRomset: "",

    name: "Dragon Ball FighterZ",
    tagline: "Enter the Arena",

    developer: "Arc System Works",

    releaseYear: 2018,
    platform: "PS4, Xbox One, PC, Switch",

rosterCount: 37,

            tags: ['Anime', 'Vs.'],

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
      { id: 'krillin', name: 'Krillin', moveCount: 0 },
      { id: 'majin-buu', name: 'Majin Buu', moveCount: 0 },
      { id: 'master-roshi', name: 'Master Roshi', moveCount: 0 },
      { id: 'nappa', name: 'Nappa', moveCount: 0 },
      { id: 'piccolo', name: 'Piccolo', moveCount: 0 },
      { id: 'tenshinhan', name: 'Tenshinhan', moveCount: 0 },
      { id: 'trunks', name: 'Trunks', moveCount: 0 },
      { id: 'videl', name: 'Videl', moveCount: 0 },
      { id: 'yamcha', name: 'Yamcha', moveCount: 0 },
      { id: 'zamasu-fused', name: 'Zamasu (Fused)', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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
      { id: 'vox-reaper', name: 'Vox Reaper', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'granblue-fantasy-versus-rising',

    mameRomset: "",

    name: "Granblue Fantasy Versus: Rising",
    tagline: "Enter the Arena",

    developer: "Arc System Works",

    releaseYear: 2023,

    platform: "PS4, PS5, PC",

rosterCount: 14,

        characters: [
      { id: 'anila', name: 'Anila', moveCount: 0 },
      { id: 'belial', name: 'Belial', moveCount: 0 },
      { id: 'beelzebub', name: 'Beelzebub', moveCount: 0 },
      { id: 'eustace', name: 'Eustace', moveCount: 0 },
      { id: 'grimnir', name: 'Grimnir', moveCount: 0 },
      { id: 'lucilius', name: 'Lucilius', moveCount: 0 },
      { id: 'metera', name: 'Metera', moveCount: 0 },
      { id: 'nier', name: 'Nier', moveCount: 0 },
      { id: 'percival', name: 'Percival', moveCount: 0 },
      { id: 'seox', name: 'Seox', moveCount: 0 },
      { id: 'siegfried', name: 'Siegfried', moveCount: 0 },
      { id: 'vane', name: 'Vane', moveCount: 0 },
      { id: 'vira', name: 'Vira', moveCount: 0 },
      { id: 'zeta', name: 'Zeta', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'guilty-gear-strive',

    mameRomset: "",

    name: "Guilty Gear -Strive-",
    tagline: "Smell of the Game",

    developer: "Unknown",

    releaseYear: 2021,

    platform: "PS4, PS5, PC, Xbox One, Xbox Series X/S",

rosterCount: 24,

            tags: ['Anime', 'Modern'],

    characters: [
      { id: 'anji-mito', name: 'Anji Mito', moveCount: 0 },
      { id: 'axl-low', name: 'Axl Low', moveCount: 0 },
      { id: 'baiken', name: 'Baiken', moveCount: 0 },
      { id: 'bridget', name: 'Bridget', moveCount: 0 },
      { id: 'chipp-zanuff', name: 'Chipp Zanuff', moveCount: 0 },
      { id: 'elphelt', name: 'Elphelt', moveCount: 0 },
      { id: 'faust', name: 'Faust', moveCount: 0 },
      { id: 'giovanna', name: 'Giovanna', moveCount: 0 },
      { id: 'goldlewis-dickinson', name: 'Goldlewis Dickinson', moveCount: 0 },
      { id: 'happy-chaos', name: 'Happy Chaos', moveCount: 0 },
      { id: 'i-no', name: 'I-No', moveCount: 0 },
      { id: 'johnny', name: 'Johnny', moveCount: 0 },
      { id: 'ky-kiske', name: 'Ky Kiske', moveCount: 0 },
      { id: 'leo-whitefang', name: 'Leo Whitefang', moveCount: 0 },
      { id: 'may', name: 'May', moveCount: 0 },
      { id: 'millia-rage', name: 'Millia Rage', moveCount: 0 },
      { id: 'nagoriyuki', name: 'Nagoriyuki', moveCount: 0 },
      { id: 'potemkin', name: 'Potemkin', moveCount: 0 },
      { id: 'ramlethal-valentine', name: 'Ramlethal Valentine', moveCount: 0 },
      { id: 'sin-kiske', name: 'Sin Kiske', moveCount: 0 },
      { id: 'sol-badguy', name: 'Sol Badguy', moveCount: 0 },
      { id: 'testament', name: 'Testament', moveCount: 0 },
      { id: 'zato-1', name: 'Zato-1', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [
      { id: 'aba', name: 'A.B.A', moveCount: 0 },
      { id: 'anji-mito', name: 'Anji Mito', moveCount: 0 },
      { id: 'asuka-r', name: 'Asuka R', moveCount: 0 },
      { id: 'axl-low', name: 'Axl Low', moveCount: 0 },
      { id: 'baiken', name: 'Baiken', moveCount: 0 },
      { id: 'bedman', name: 'Bedman', moveCount: 0 },
      { id: 'bridget', name: 'Bridget', moveCount: 0 },
      { id: 'chipp-zanuff', name: 'Chipp Zanuff', moveCount: 0 },
      { id: 'elphelt-valentine', name: 'Elphelt Valentine', moveCount: 0 },
      { id: 'faust', name: 'Faust', moveCount: 0 },
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [
      { id: 'answer', name: 'Answer', moveCount: 0 },
      { id: 'baiken', name: 'Baiken', moveCount: 0 },
      { id: 'bedman', name: 'Bedman', moveCount: 0 },
      { id: 'chipp-zanuff', name: 'Chipp Zanuff', moveCount: 0 },
      { id: 'dizzy', name: 'Dizzy', moveCount: 0 },
      { id: 'elphelt-valentine', name: 'Elphelt Valentine', moveCount: 0 },
      { id: 'faust', name: 'Faust', moveCount: 0 },
      { id: 'i-no', name: 'I-No', moveCount: 0 },
      { id: 'jam-kuradoberi', name: 'Jam Kuradoberi', moveCount: 0 },
      { id: 'johnny', name: 'Johnny', moveCount: 0 },
      { id: 'kum-haehyun', name: 'Kum Haehyun', moveCount: 0 },
      { id: 'ky-kiske', name: 'Ky Kiske', moveCount: 0 },
      { id: 'leo-whitefang', name: 'Leo Whitefang', moveCount: 0 },
      { id: 'may', name: 'May', moveCount: 0 },
      { id: 'millia-rage', name: 'Millia Rage', moveCount: 0 },
      { id: 'potemkin', name: 'Potemkin', moveCount: 0 },
      { id: 'ramlethal-valentine', name: 'Ramlethal Valentine', moveCount: 0 },
      { id: 'raven', name: 'Raven', moveCount: 0 },
      { id: 'sin-kiske', name: 'Sin Kiske', moveCount: 0 },
      { id: 'slayer', name: 'Slayer', moveCount: 0 },
      { id: 'sol-badguy', name: 'Sol Badguy', moveCount: 0 },
      { id: 'venom', name: 'Venom', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [
      { id: 'aba', name: 'A.B.A', moveCount: 0 },
      { id: 'anji-mito', name: 'Anji Mito', moveCount: 0 },
      { id: 'asuka-r', name: 'Asuka R', moveCount: 0 },
      { id: 'axl-low', name: 'Axl Low', moveCount: 0 },
      { id: 'baiken', name: 'Baiken', moveCount: 0 },
      { id: 'bedman', name: 'Bedman', moveCount: 0 },
      { id: 'bridget', name: 'Bridget', moveCount: 0 },
      { id: 'chipp-zanuff', name: 'Chipp Zanuff', moveCount: 0 },
      { id: 'elphelt-valentine', name: 'Elphelt Valentine', moveCount: 0 },
      { id: 'faust', name: 'Faust', moveCount: 0 },
      { id: 'giovanna', name: 'Giovanna', moveCount: 0 },
      { id: 'goldlewis-dickinson', name: 'Goldlewis Dickinson', moveCount: 0 },
      { id: 'happy-chaos', name: 'Happy Chaos', moveCount: 0 },
      { id: 'i-no', name: 'I-No', moveCount: 0 },
      { id: 'jack-o', name: 'Jack-O', moveCount: 0 },
      { id: 'jam-kuradoberi', name: 'Jam Kuradoberi', moveCount: 0 },
      { id: 'johnny', name: 'Johnny', moveCount: 0 },
      { id: 'ky-kiske', name: 'Ky Kiske', moveCount: 0 },
      { id: 'leo-whitefang', name: 'Leo Whitefang', moveCount: 0 },
      { id: 'lucy', name: 'Lucy', moveCount: 0 },
      { id: 'may', name: 'May', moveCount: 0 },
      { id: 'millia-rage', name: 'Millia Rage', moveCount: 0 },
      { id: 'nagoriyuki', name: 'Nagoriyuki', moveCount: 0 },
      { id: 'potemkin', name: 'Potemkin', moveCount: 0 },
      { id: 'queen-dizzy', name: 'Queen Dizzy', moveCount: 0 },
      { id: 'ramlethal-valentine', name: 'Ramlethal Valentine', moveCount: 0 },
      { id: 'sin-kiske', name: 'Sin Kiske', moveCount: 0 },
      { id: 'slayer', name: 'Slayer', moveCount: 0 },
      { id: 'sol-badguy', name: 'Sol Badguy', moveCount: 0 },
      { id: 'testament', name: 'Testament', moveCount: 0 },
      { id: 'unika', name: 'Unika', moveCount: 0 },
      { id: 'venom', name: 'Venom', moveCount: 0 },
      { id: 'zato-1', name: 'Zato-1', moveCount: 0 },
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'hyper-street-fighter-ii',

    mameRomset: "",

    name: "Hyper Street Fighter II",
    tagline: "The Anniversary Edition",

    developer: "Capcom",

    releaseYear: 1987,

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },


  {

    id: 'jojo-s-bizarre-adventure-heritage-for-the-future-jjba-hftf',

    mameRomset: "",

    name: "JoJo's Bizarre Adventure: Heritage for the Future",

    developer: "Unknown",

    releaseYear: 1999,

    platform: "Arcade Sega Dreamcast PlayStation, PC",

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'killer-instinct-(1994)',

    mameRomset: "",

    name: "Killer Instinct (1994)",
    tagline: "Play With Fire",

    developer: "Rare",

    releaseYear: 1994,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'killer-instinct-2--gold',

    mameRomset: "",

    name: "Killer Instinct 2",
    tagline: "The Instinct Returns",

    developer: "Rare",

    releaseYear: 1994,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'marvel-super-heroes',

    mameRomset: "",

    name: "Marvel Super Heroes",
    tagline: "War of the Gems",

    developer: "Capcom",

    releaseYear: 1995,
    platform: "Arcade, Saturn, PS1, PC",

rosterCount: 12,

        characters: [
      { id: 'black-heart', name: 'Black Heart', moveCount: 0 },
      { id: 'captain-america', name: 'Captain America', moveCount: 0 },
      { id: 'doctor-doom', name: 'Doctor Doom', moveCount: 0 },
      { id: 'hulk', name: 'Hulk', moveCount: 0 },
      { id: 'iron-man', name: 'Iron Man', moveCount: 0 },
      { id: 'juggernaut', name: 'Juggernaut', moveCount: 0 },
      { id: 'magneto', name: 'Magneto', moveCount: 0 },
      { id: 'psylocke', name: 'Psylocke', moveCount: 0 },
      { id: 'shuma-gorath', name: 'Shuma-Gorath', moveCount: 0 },
      { id: 'spider-man', name: 'Spider-Man', moveCount: 0 },
      { id: 'thanos', name: 'Thanos', moveCount: 0 },
      { id: 'wolverine', name: 'Wolverine', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'mshvsf',

    mameRomset: "",

    name: "Marvel Super Heroes vs. Street Fighter",
    tagline: "Super Heroes meet Street Fighters",

    developer: "Capcom",

    releaseYear: 1997,

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },


  {

    id: 'marvel-vs-capcom-2',

    mameRomset: "mvc2",

    name: "Marvel vs. Capcom 2",
    tagline: "Take You For A Ride",

    developer: "Capcom",

    releaseYear: 2000,

    platform: "Arcade, DC, PS2, Xbox, PC",

rosterCount: 39,

            tags: ['Golden', '2D', 'Vs.'],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'marvel-vs-capcom-clash-of-super-heroes',

    mameRomset: "",

    name: "Marvel vs. Capcom: Clash of Super Heroes",
    tagline: "Two Worlds, One Dream",

    developer: "Capcom",

    releaseYear: 1998,

    platform: "Arcade, PS1, DC, PC",

rosterCount: 14,

        characters: [
      { id: 'captain-america', name: 'Captain America', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'gambit', name: 'Gambit', moveCount: 0 },
      { id: 'hulk', name: 'Hulk', moveCount: 0 },
      { id: 'jin', name: 'Jin', moveCount: 0 },
      { id: 'mega-man', name: 'Mega Man', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'spider-man', name: 'Spider-Man', moveCount: 0 },
      { id: 'strider-hiryu', name: 'Strider Hiryu', moveCount: 0 },
      { id: 'venom', name: 'Venom', moveCount: 0 },
      { id: 'war-machine', name: 'War Machine', moveCount: 0 },
      { id: 'wolverine', name: 'Wolverine', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'mortal-kombat-1',

    mameRomset: "",

    notationSystem: 'mk',
    name: "Mortal Kombat 1",
    tagline: "It's In Our Blood",

    developer: "NetherRealm Studios",

    releaseYear: 2023,

    platform: "PS5, Xbox Series X/S, Switch, PC",

rosterCount: 25,

            tags: ['3D', 'Modern'],

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
      { id: 'omni-man', name: 'Omni-Man', moveCount: 0 },
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
      { id: 'sub-zero', name: 'Sub-Zero', moveCount: 0 },
      { id: 'tanya', name: 'Tanya', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'mortal-kombat-x',

    mameRomset: "",

    notationSystem: 'mk',
    name: "Mortal Kombat X",
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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'night-warriors-darkstalkers-revenge',

    mameRomset: "",

    name: "Night Warriors: Darkstalkers",
    tagline: "Darkstalkers' Revenge",

    developer: "Capcom",

    releaseYear: 1995,
    platform: "Arcade, Saturn, PC",

rosterCount: 14,

        characters: [
      { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
      { id: 'bishamon', name: 'Bishamon', moveCount: 0 },
      { id: 'demitri', name: 'Demitri', moveCount: 0 },
      { id: 'donovan', name: 'Donovan', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'hsien-ko', name: 'Hsien-Ko', moveCount: 0 },
      { id: 'huitzil', name: 'Huitzil', moveCount: 0 },
      { id: 'jon-talbain', name: 'Jon Talbain', moveCount: 0 },
      { id: 'lord-raptor', name: 'Lord Raptor', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'pyron', name: 'Pyron', moveCount: 0 },
      { id: 'rikuo', name: 'Rikuo', moveCount: 0 },
      { id: 'sasquatch', name: 'Sasquatch', moveCount: 0 },
      { id: 'victor', name: 'Victor', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'ninja-masters-haoh-ninpo-cho',

    mameRomset: "",

    name: "Ninja Master",
    tagline: "Enter the Arena",

    developer: "SNK",

    releaseYear: 1996,

    platform: "Neo Geo Arcade PlayStation 1, PC",

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'pocketfighter',

    mameRomset: "",

    name: "Pocket Fighter",
    tagline: "Super Gem Fighter Mini Mix",

    developer: "SNK",

    releaseYear: 1997,

    platform: "Arcade PlayStation Sega Saturn, PC",

        characters: [
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'hsien-ko', name: 'Hsien-Ko', moveCount: 0 },
      { id: 'ibuki', name: 'Ibuki', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sakura', name: 'Sakura', moveCount: 0 },
      { id: 'tessa', name: 'Tessa', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'projectjustice',

    mameRomset: "",

    name: "Project Justice",
    tagline: "Project Justice",

    developer: "SNK",

    releaseYear: 2000,

    platform: "Arcade Sega Dreamcast, PC",

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'samurai-shodown',

    mameRomset: "",

    name: "Samurai Shodown",
    tagline: "Way of the Sword",

    developer: "SNK",

    releaseYear: 2019,
    platform: "PS4, Xbox One, PC, Switch",

rosterCount: 25,

            tags: ['3D'],

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'samurai-shodown-(2019)',

    mameRomset: "",

    name: "Samurai Shodown (2019)",
    tagline: "Embrace Death",

    developer: "SNK",

    releaseYear: 2019,

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves'],

rosterCount: 25,

            tags: ['3D', 'Modern'],

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
      { id: 'mai', name: 'Mai', moveCount: 0 },
      { id: 'elena', name: 'Elena', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'c-viper', name: 'C. Viper', moveCount: 0 },
      { id: 'alex', name: 'Alex', moveCount: 0 },
      { id: 'ingrid', name: 'Ingrid', moveCount: 0 },
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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [
      { id: 'adon', name: 'Adon', moveCount: 0 },
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'balrog', name: 'Balrog', moveCount: 0 },
      { id: 'birdie', name: 'Birdie', moveCount: 0 },
      { id: 'blanka', name: 'Blanka', moveCount: 0 },
      { id: 'cammy', name: 'Cammy', moveCount: 0 },
      { id: 'charlie', name: 'Charlie', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'cody', name: 'Cody', moveCount: 0 },
      { id: 'dan', name: 'Dan', moveCount: 0 },
      { id: 'dee-jay', name: 'Dee Jay', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'e-honda', name: 'E. Honda', moveCount: 0 },
      { id: 'eagle', name: 'Eagle', moveCount: 0 },
      { id: 'evil-ryu', name: 'Evil Ryu', moveCount: 0 },
      { id: 'fei-long', name: 'Fei Long', moveCount: 0 },
      { id: 'gen', name: 'Gen', moveCount: 0 },
      { id: 'guile', name: 'Guile', moveCount: 0 },
      { id: 'guy', name: 'Guy', moveCount: 0 },
      { id: 'juli', name: 'Juli', moveCount: 0 },
      { id: 'juni', name: 'Juni', moveCount: 0 },
      { id: 'karin', name: 'Karin', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'm-bison', name: 'M. Bison', moveCount: 0 },
      { id: 'maki', name: 'Maki', moveCount: 0 },
      { id: 'mika', name: 'Mika', moveCount: 0 },
      { id: 'rolento', name: 'Rolento', moveCount: 0 },
      { id: 'rose', name: 'Rose', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sagat', name: 'Sagat', moveCount: 0 },
      { id: 'sakura', name: 'Sakura', moveCount: 0 },
      { id: 'shin-akuma', name: 'Shin Akuma', moveCount: 0 },
      { id: 'sodom', name: 'Sodom', moveCount: 0 },
      { id: 't-hawk', name: 'T. Hawk', moveCount: 0 },
      { id: 'vega', name: 'Vega', moveCount: 0 },
      { id: 'yun', name: 'Yun', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'street-fighter-iii-2nd-impact',

    mameRomset: "",

    name: "Street Fighter III: 2nd Impact - Giant Attack",
    tagline: "Giant Attack",

    developer: "Capcom",

    releaseYear: 2023,

    platform: "Windows PlayStation 4 PlayStation 5 Xbox Series X/S Arcade, PC",

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'super-street-fighter-ii',

    mameRomset: "",

    name: "Super Street Fighter II: The New Challengers",
    tagline: "The New Challengers",

    developer: "Capcom",

    releaseYear: 1993,

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'tekken-8',

    mameRomset: "",

    name: "Tekken 8",
    tagline: "Fist Meets Fate",

    developer: "Bandai Namco",

    releaseYear: 2024,
    platform: "PS5, Xbox Series X/S, PC",

rosterCount: 31,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'the-king-of-fighters-maximum-impact-2-kof-2006',

    mameRomset: "",

    name: "The King of Fighters: Maximum Impact 2 (KOF 2006)",
    tagline: "KOF 2006",

    developer: "Unknown",

    releaseYear: 2006,

    platform: "PS2, PC",

rosterCount: 17,

        characters: [],

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'under-night-in-birth-ii-[sysceles]',

    mameRomset: "",

    name: "Under Night In-Birth II [Sys:Celes]",
    tagline: "The Hollow Night Returns",

    developer: "French-Bread",

    releaseYear: 2024,

    platform: "Windows PlayStation 4 PlayStation 5, PC",

            tags: ['Anime', '2D', 'Modern'],

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'vampirehunter2',

    mameRomset: "",

    name: "Vampire Hunter 2",
    tagline: "Darkstalkers' Revenge (Japan)",

    developer: "Capcom",

    releaseYear: 1997,

    platform: "Arcade, PC",

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'vampiresavior',

    mameRomset: "",

    name: "Vampire Savior",
    tagline: "The Lord of Vampire",

    developer: "Capcom",

    releaseYear: 1997,

    platform: "Arcade Sega Saturn PlayStation, PC",

        characters: [
      { id: 'anakaris', name: 'Anakaris', moveCount: 0 },
      { id: 'bb-hood', name: 'B.B. Hood', moveCount: 0 },
      { id: 'bishamon', name: 'Bishamon', moveCount: 0 },
      { id: 'demitri', name: 'Demitri', moveCount: 0 },
      { id: 'felicia', name: 'Felicia', moveCount: 0 },
      { id: 'hsien-ko', name: 'Hsien-Ko', moveCount: 0 },
      { id: 'jedah', name: 'Jedah', moveCount: 0 },
      { id: 'jon-talbain', name: 'Jon Talbain', moveCount: 0 },
      { id: 'lilith', name: 'Lilith', moveCount: 0 },
      { id: 'lord-raptor', name: 'Lord Raptor', moveCount: 0 },
      { id: 'morrigan', name: 'Morrigan', moveCount: 0 },
      { id: 'q-bee', name: 'Q-Bee', moveCount: 0 },
      { id: 'rikuo', name: 'Rikuo', moveCount: 0 },
      { id: 'sasquatch', name: 'Sasquatch', moveCount: 0 },
      { id: 'victor', name: 'Victor', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'vampiresavior2',

    mameRomset: "",

    name: "Vampire Savior 2",
    tagline: "The Lord of Vampire (Update)",

    developer: "Capcom",

    releaseYear: 1997,

    platform: "Arcade Sega Saturn PlayStation, PC",

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'virtua-fighter-5-ultimate-showdown',

    mameRomset: "",

    name: "Virtua Fighter 5 Ultimate Showdown",
    tagline: "Ultimate Showdown",

    developer: "Sega",

    releaseYear: 2021,

    platform: "PS4, PC",

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

  },

  {

    id: 'x-men-vs-street-fighter',

    mameRomset: "xmvsf",

    name: "X-Men vs. Street Fighter",
    tagline: "The Crossover Begins",

    developer: "Capcom",

    releaseYear: 1996,
    platform: "Arcade, Saturn, PS1, PC",

rosterCount: 18,

        characters: [
      { id: 'akuma', name: 'Akuma', moveCount: 0 },
      { id: 'cammy', name: 'Cammy', moveCount: 0 },
      { id: 'charlie', name: 'Charlie', moveCount: 0 },
      { id: 'chun-li', name: 'Chun-Li', moveCount: 0 },
      { id: 'cyclops', name: 'Cyclops', moveCount: 0 },
      { id: 'dhalsim', name: 'Dhalsim', moveCount: 0 },
      { id: 'gambit', name: 'Gambit', moveCount: 0 },
      { id: 'juggernaut', name: 'Juggernaut', moveCount: 0 },
      { id: 'ken', name: 'Ken', moveCount: 0 },
      { id: 'magneto', name: 'Magneto', moveCount: 0 },
      { id: 'm-bison', name: 'M. Bison', moveCount: 0 },
      { id: 'nash', name: 'Nash', moveCount: 0 },
      { id: 'rogue', name: 'Rogue', moveCount: 0 },
      { id: 'ryu', name: 'Ryu', moveCount: 0 },
      { id: 'sabretooth', name: 'Sabretooth', moveCount: 0 },
      { id: 'storm', name: 'Storm', moveCount: 0 },
      { id: 'wolverine', name: 'Wolverine', moveCount: 0 },
      { id: 'zangief', name: 'Zangief', moveCount: 0 }
    ],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

  },

  {

    id: 'x-men-children-of-the-atom',

    mameRomset: "",

    name: "X-Men: Children of the Atom",
    tagline: "Mutants Unleashed",

    developer: "Capcom",

    releaseYear: 1994,
    platform: "Arcade, Saturn, PS1, PC",

rosterCount: 12,

        characters: [],

    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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

    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']

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
      { id: 'hauzer', name: 'Hauzer', moveCount: 0 },
      { id: 'hydron', name: 'Hydron', moveCount: 0 },
      { id: 'kenji', name: 'Kenji', moveCount: 0 },
      { id: 'kongou', name: 'Kongou', moveCount: 0 },
      { id: 'lavia', name: 'Lavia', moveCount: 0 },
      { id: 'leo', name: 'Leo', moveCount: 0 },
      { id: 'mai-ling', name: 'Mai-Ling', moveCount: 0 },
      { id: 'ravange', name: 'Ravange', moveCount: 0 },
      { id: 'scion', name: 'Scion', moveCount: 0 },
      { id: 'tessa', name: 'Tessa', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  {
    id: 'guilty-gear-xrd--sign-',

    mameRomset: "",
    name: "Guilty Gear Xrd -SIGN-",
    tagline: "Heaven or Hell",
    isDraft: true,
    characters: [
      { id: 'axl-low', name: 'Axl Low', moveCount: 0 },
      { id: 'bedman', name: 'Bedman', moveCount: 0 },
      { id: 'chipp-zanuff', name: 'Chipp Zanuff', moveCount: 0 },
      { id: 'elphelt-valentine', name: 'Elphelt Valentine', moveCount: 0 },
      { id: 'faust', name: 'Faust', moveCount: 0 },
      { id: 'i-no', name: 'I-No', moveCount: 0 },
      { id: 'ky-kiske', name: 'Ky Kiske', moveCount: 0 },
      { id: 'leo-whitefang', name: 'Leo Whitefang', moveCount: 0 },
      { id: 'may', name: 'May', moveCount: 0 },
      { id: 'millia-rage', name: 'Millia Rage', moveCount: 0 },
      { id: 'potemkin', name: 'Potemkin', moveCount: 0 },
      { id: 'ramlethal-valentine', name: 'Ramlethal Valentine', moveCount: 0 },
      { id: 'sin-kiske', name: 'Sin Kiske', moveCount: 0 },
      { id: 'slayer', name: 'Slayer', moveCount: 0 },
      { id: 'sol-badguy', name: 'Sol Badguy', moveCount: 0 },
      { id: 'venom', name: 'Venom', moveCount: 0 },
      { id: 'zato-1', name: 'Zato-1', moveCount: 0 }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  {
    id: 'mortal-kombat-11',

    mameRomset: "",
    releaseYear: 2019,
    platform: "PS4, Xbox One, Switch, PC",
    notationSystem: 'mk',
    name: "Mortal Kombat 11",
    tagline: "You're Next",
    isDraft: true,
    rosterCount: 37,
        tags: ['3D'],

    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  {
    id: 'street-fighter-alpha-warriors-dreams',

    mameRomset: "",
    releaseYear: 1995,
    platform: "Arcade, PS1, Saturn, PC",
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  {
    id: 'melty-blood-type-lumina---wikipedia',

    mameRomset: "",
    name: "Melty Blood: Type Lumina - Wikipedia",
    tagline: "Type Lumina (Wiki)",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },

  {
    id: 'bio-freaks',

    mameRomset: "",
    name: "Bio F.R.E.A.K.S.",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },

  {
    id: 'fighters-impact',

    mameRomset: "",
    name: "Fighters' Impact",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },

  {
    id: 'heavens-gate',

    mameRomset: "",
    name: "Heaven's Gate",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },

  {
    id: 'tobal-2',

    mameRomset: "",
    name: "Tobal 2",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },

  {
    id: 'ultraman-fighting-evolution',

    mameRomset: "",
    name: "Ultraman Fighting Evolution",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },

  {
    id: 'war-gods',

    mameRomset: "",
    name: "War Gods",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  {
    id: 'chaos-code-new-sign-of-catastrophe',

    mameRomset: "",
    name: "Chaos Code: New Sign of Catastrophe",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  {
    id: 'rival-schools-united-by-fate',

    mameRomset: "",
    name: 'Rival Schools: United by Fate (1997)',
    tagline: "United by Fate",
    developer: 'Capcom',
    releaseYear: 1997,
    platform: 'Arcade, PlayStation, PC',
    rosterCount: 20,
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
    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']
  },
  {
    id: 'star-gladiator-episode-i-final-crusade',

    mameRomset: "",
    name: "Star Gladiator Episode I Final Crusade",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  {
    id: 'tmnt-tournament-fighters-nes',

    mameRomset: "",
    name: "TMNT Tournament Fighters (NES)",
    tagline: "Enter the Arena",
    isDraft: true,
    characters: [],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
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
    characters: [],
    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']
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
    tabs: ['Special Moves', 'Super Combos', 'Normal Moves', 'Throws', 'Unique Attacks']
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
    tabs: ['Special Moves', 'Super Combos', 'Normal Moves', 'Throws', 'Unique Attacks']
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
    tabs: ['Special Moves', 'Heroic Brutality', 'Fatality', 'Super Combos', 'Normal Moves', 'Throws', 'Unique Attacks']
  }
  ,
  {
    id: 'arcana-heart-3-lovemax-sixstars-xtend',

    mameRomset: "",
    notationSystem: 'numpad',
    name: 'Arcana Heart 3: LOVEMAX SIXSTARS!!!!!! XTEND',
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
    tabs: ['Special Moves', 'Arcana Moves', 'Super Moves', 'Critical Heart', 'Normal Moves', 'Throws', 'Unique Attacks']
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
    tabs: ['Special Moves', 'Offensive Art', 'Defensive Art', 'Critical Art', 'Normal Moves', 'Throws', 'Unique Attacks']
  }
];
