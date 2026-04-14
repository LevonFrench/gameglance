import type { GameDefinition } from './types';

export const SUPPORTED_GAMES: GameDefinition[] = [
  {
    id: 'cotw',
    name: 'Fatal Fury: City of the Wolves',
    tabs: ['Normal Moves', 'Unique Attacks', 'Special Moves', 'Super Arts', 'Throws'],
    characters: [
      { id: 'cotw_andybogard', name: 'Andy Bogard' },
      { id: 'cotw_bjenet', name: 'B. Jenet' },
      { id: 'cotw_billykane', name: 'Billy Kane' },
      { id: 'cotw_bluemary', name: 'Blue Mary' },
      { id: 'cotw_chunli', name: 'Chun-Li' },
      { id: 'cotw_cristianoronaldo', name: 'Cristiano Ronaldo' },
      { id: 'cotw_gato', name: 'Gato' },
      { id: 'cotw_hokutomaru', name: 'Hokutomaru' },
      { id: 'cotw_hotarufutaba', name: 'Hotaru Futaba' },
      { id: 'cotw_joehigashi', name: 'Joe Higashi' },
      { id: 'cotw_kainrheinlein', name: 'Kain R. Heinlein' },
      { id: 'cotw_kenmasters', name: 'Ken Masters' },
      { id: 'cotw_kevinrian', name: 'Kevin Rian' },
      { id: 'cotw_kimdonghwan', name: 'Kim Dong Hwan' },
      { id: 'cotw_kimjaehoon', name: 'Kim Jae Hoon' },
      { id: 'cotw_maishiranui', name: 'Mai Shiranui' },
      { id: 'cotw_marcorodrigues', name: 'Marco Rodrigues' },
      { id: 'cotw_mrbig', name: 'Mr. Big' },
      { id: 'cotw_nightmaregeese', name: 'Nightmare Geese' },
      { id: 'cotw_preecha', name: 'Preecha' },
      { id: 'cotw_rockhoward', name: 'Rock Howard' },
      { id: 'cotw_salvatoreganacci', name: 'Salvatore Ganacci' },
      { id: 'cotw_terrybogard', name: 'Terry Bogard' },
      { id: 'cotw_tizoc', name: 'Tizoc' },
      { id: 'cotw_voxreaper', name: 'Vox Reaper' }
    ]
  },
  {
    id: 'sf6',
    name: 'Street Fighter 6',
    tabs: ['Normal Moves', 'Unique Attacks', 'Special Moves', 'Super Arts', 'Throws', 'Common Moves'],
    characters: [
      { id: 'ryu', name: 'Ryu' },
      { id: 'luke', name: 'Luke' },
      { id: 'jamie', name: 'Jamie' },
      { id: 'chunli', name: 'Chun-Li' },
      { id: 'guile', name: 'Guile' },
      { id: 'kimberly', name: 'Kimberly' },
      { id: 'juri', name: 'Juri' },
      { id: 'ken', name: 'Ken' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'ehonda', name: 'E.Honda' },
      { id: 'deejay', name: 'Dee Jay' },
      { id: 'manon', name: 'Manon' },
      { id: 'marisa', name: 'Marisa' },
      { id: 'jp', name: 'JP' },
      { id: 'zangief', name: 'Zangief' },
      { id: 'lily', name: 'Lily' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'rashid', name: 'Rashid' },
      { id: 'aki', name: 'A.K.I.' },
      { id: 'ed', name: 'Ed' },
      { id: 'akuma', name: 'Akuma' },
      { id: 'mbison', name: 'M.Bison' },
      { id: 'terry', name: 'Terry' },
      { id: 'mai', name: 'Mai' },
      { id: 'elena', name: 'Elena' }
    ]
  },
  {
    id: 'mk1',
    name: 'Mortal Kombat 1',
    tabs: ['Moves', 'Combos', 'Fatalities'],
    characters: [
      { id: 'scorpion', name: 'Scorpion' }
    ]
  },
  {
    id: 't8',
    name: 'Tekken 8',
    tabs: ['Moves', 'Combos'],
    characters: [
      { id: "alisa", name: "Alisa" },
      { id: "anna_williams", name: "ANNA WILLIAMS" },
      { id: "armor_king", name: "ARMOR KING" },
      { id: "asuka_kazama", name: "ASUKA KAZAMA" },
      { id: "azucena_milagros", name: "AZUCENA MILAGROS" },
      { id: "bryan_fury", name: "BRYAN FURY" },
      { id: "claudio_serafino", name: "CLAUDIO SERAFINO" },
      { id: "clive_rosfield", name: "CLIVE ROSFIELD" },
      { id: "devil_jin", name: "DEVIL JIN" },
      { id: "sergei_dragunov", name: "SERGEI DRAGUNOV" },
      { id: "eddy_gordo", name: "EDDY GORDO" },
      { id: "fahkumram", name: "FAHKUMRAM" },
      { id: "feng_wei", name: "FENG WEI" },
      { id: "heihachi_mishima", name: "HEIHACHI MISHIMA" },
      { id: "hwoarang", name: "Hwoarang" },
      { id: "jack_8", name: "JACK 8" },
      { id: "jin_kazama", name: "JIN KAZAMA" },
      { id: "leo", name: "Leo" },
      { id: "kazuya_mishima", name: "KAZUYA MISHIMA" },
      { id: "king", name: "KING" },
      { id: "kuma_ii", name: "KUMA II" },
      { id: "azucena", name: "Azucena" },
      { id: "marshall_law", name: "MARSHALL LAW" },
      { id: "lee_chaolan", name: "LEE CHAOLAN" },
      { id: "zafina", name: "Zafina" },
      { id: "leroy_smith", name: "LEROY SMITH" },
      { id: "lidia_sobieska", name: "LIDIA SOBIESKA" },
      { id: "lili_de_rochefort", name: "LILI DE ROCHEFORT" },
      { id: "raven", name: "Raven" },
      { id: "nina", name: "Nina" },
      { id: "panda", name: "PANDA" },
      { id: "paul_phoenix", name: "PAUL PHOENIX" },
      { id: "lars", name: "Lars" },
      { id: "reina", name: "REINA" },
      { id: "shaheen", name: "SHAHEEN" },
      { id: "steve", name: "Steve" },
      { id: "victor_chevalier", name: "VICTOR CHEVALIER" },
      { id: "ling_xiaoyu", name: "LING XIAOYU" },
      { id: "yoshimitsu", name: "Yoshimitsu" },
      { id: "jun", name: "Jun" }
    ]
  },
  {
    id: 'cvs2',
    name: 'Capcom vs SNK 2',
    tabs: ['Special Moves', 'Super Arts', 'Normal Moves'],
    characters: [
      {
            id: "akuma",
            name: "Akuma"
      },
      {
            id: "akumashin",
            name: "Akuma (Shin)"
      },
      {
            id: "athena",
            name: "Athena"
      },
      {
            id: "balrog",
            name: "Balrog"
      },
      {
            id: "benimaru",
            name: "Benimaru"
      },
      {
            id: "bison",
            name: "Bison"
      },
      {
            id: "blanka",
            name: "Blanka"
      },
      {
            id: "cammy",
            name: "Cammy"
      },
      {
            id: "changwithchoi",
            name: "Chang (with Choi)"
      },
      {
            id: "chunli",
            name: "Chun-Li"
      },
      {
            id: "dan",
            name: "Dan"
      },
      {
            id: "dhalsim",
            name: "Dhalsim"
      },
      {
            id: "eagle",
            name: "Eagle"
      },
      {
            id: "ehonda",
            name: "E.Honda"
      },
      {
            id: "geese",
            name: "Geese"
      },
      {
            id: "guile",
            name: "Guile"
      },
      {
            id: "haohmaru",
            name: "Haohmaru"
      },
      {
            id: "hibiki",
            name: "Hibiki"
      },
      {
            id: "iori",
            name: "Iori"
      },
      {
            id: "ioriorochi",
            name: "Iori (Orochi)"
      },
      {
            id: "joe",
            name: "Joe"
      },
      {
            id: "ken",
            name: "Ken"
      },
      {
            id: "kim",
            name: "Kim"
      },
      {
            id: "king",
            name: "King"
      },
      {
            id: "kyo",
            name: "Kyo"
      },
      {
            id: "kyosuke",
            name: "Kyosuke"
      },
      {
            id: "mai",
            name: "Mai"
      },
      {
            id: "maki",
            name: "Maki"
      },
      {
            id: "morrigan",
            name: "Morrigan"
      },
      {
            id: "nakoruru",
            name: "Nakoruru"
      },
      {
            id: "raiden",
            name: "Raiden"
      },
      {
            id: "rock",
            name: "Rock"
      },
      {
            id: "rolento",
            name: "Rolento"
      },
      {
            id: "rugal",
            name: "Rugal"
      },
      {
            id: "rugalultimate",
            name: "Rugal (Ultimate)"
      },
      {
            id: "ryo",
            name: "Ryo"
      },
      {
            id: "ryu",
            name: "Ryu"
      },
      {
            id: "ryuevil",
            name: "Ryu (Evil)"
      },
      {
            id: "sagat",
            name: "Sagat"
      },
      {
            id: "sakura",
            name: "Sakura"
      },
      {
            id: "terry",
            name: "Terry"
      },
      {
            id: "todo",
            name: "Todo"
      },
      {
            id: "vega",
            name: "Vega"
      },
      {
            id: "vice",
            name: "Vice"
      },
      {
            id: "yamazaki",
            name: "Yamazaki"
      },
      {
            id: "yun",
            name: "Yun"
      },
      {
            id: "yuri",
            name: "Yuri"
      },
      {
            id: "zangief",
            name: "Zangief"
      }
]
  }
,
  {
    id: 'cfj',
    name: 'Capcom Fighting Jam',
    tabs: ["Normal Moves","Special Moves","Super Arts"],
    characters: [
      { id: 'ryu', name: 'RYU' },
      { id: 'guile', name: 'GUILE' },
      { id: 'zangief', name: 'ZANGIEF' },
      { id: 'alex', name: 'ALEX' },
      { id: 'yun', name: 'YUN' },
      { id: 'urien', name: 'URIEN' },
      { id: 'guy', name: 'GUY' },
      { id: 'karin', name: 'KARIN' },
      { id: 'sakura', name: 'SAKURA' },
      { id: 'rose', name: 'ROSE' },
      { id: 'felicia', name: 'FELICIA' },
      { id: 'demitri', name: 'DEMITRI' },
      { id: 'jedah', name: 'JEDAH' },
      { id: 'anakaris', name: 'ANAKARIS' },
      { id: 'nool_hydron', name: 'NOOL (HYDRON)' },
      { id: 'hauzer', name: 'HAUZER' },
      { id: 'mukuro_kenji', name: 'MUKURO (KENJI)' },
      { id: 'leo', name: 'LEO' },
      { id: 'ingrid', name: 'INGRID' },
      { id: 'pyron', name: 'PYRON' }
    ]
  }
,
  {
    id: 'darkstalkers',
    name: 'Darkstalkers: The Night Warriors',
    tabs: ["Normal Moves","Special Moves","Super Arts"],
    characters: [
      { id: 'demitri_maximov', name: 'DEMITRI MAXIMOV' },
      { id: 'john_talbain', name: 'JOHN TALBAIN' },
      { id: 'victor_von_gerdenheim', name: 'VICTOR VON GERDENHEIM' },
      { id: 'lord_raptor', name: 'LORD RAPTOR' },
      { id: 'morrigan_arnsland', name: 'MORRIGAN ARNSLAND' },
      { id: 'anakaris', name: 'ANAKARIS' },
      { id: 'felicia', name: 'FELICIA' },
      { id: 'bishamon', name: 'BISHAMON' },
      { id: 'rikuo', name: 'RIKUO' },
      { id: 'sasquatch', name: 'SASQUATCH' }
    ]
  }
,
  {
    id: 'nightwarriors',
    name: 'Night Warriors: Darkstalkers\' Revenge',
    tabs: ["Normal Moves","Special Moves","Super Arts"],
    characters: [
      { id: 'anakaris', name: 'ANAKARIS' },
      { id: 'bishamon', name: 'BISHAMON' },
      { id: 'demitri_maximov', name: 'DEMITRI MAXIMOV' },
      { id: 'donovan_baine', name: 'DONOVAN BAINE' },
      { id: 'felicia', name: 'FELICIA' },
      { id: 'morrigan_aensland', name: 'MORRIGAN AENSLAND' },
      { id: 'pyron', name: 'PYRON' },
      { id: 'sasquatch', name: 'SASQUATCH' },
      { id: 'victor_von_geldenheim', name: 'VICTOR VON GELDENHEIM' },
      { id: 'donovan', name: 'DONOVAN' },
      { id: 'hsien_ko', name: 'HSIEN-KO' },
      { id: 'jon_talbain', name: 'JON TALBAIN' },
      { id: 'victor', name: 'VICTOR' }
    ]
  }
,
  {
    id: 'vampiresavior',
    name: 'Vampire Savior',
    tabs: ["Normal Moves","Special Moves","Super Arts"],
    characters: [
      { id: 'es', name: 'ES' },
      { id: 'ex', name: 'EX' },
      { id: 'morrigan_aensland', name: 'MORRIGAN AENSLAND' },
      { id: 'anakaris', name: 'ANAKARIS' },
      { id: 'bishamon', name: 'BISHAMON' },
      { id: 'bulleta', name: 'BULLETA' },
      { id: 'felicia', name: 'FELICIA' },
      { id: 'gallon', name: 'GALLON' },
      { id: 'victor_gerdenheim', name: 'VICTOR GERDENHEIM' },
      { id: 'lei_lei', name: 'LEI-LEI' },
      { id: 'jedah', name: 'JEDAH' },
      { id: 'lilith', name: 'LILITH' },
      { id: 'lord_zabel', name: 'LORD ZABEL' },
      { id: 'demitri_maximoff', name: 'DEMITRI MAXIMOFF' },
      { id: 'q_bee', name: 'Q-BEE' },
      { id: 'aulbath', name: 'AULBATH' },
      { id: 'sasquatch', name: 'SASQUATCH' },
      { id: 'donovan', name: 'DONOVAN' },
      { id: 'pyron', name: 'PYRON' }
    ]
  }
,
  {
    id: 'sfa3',
    name: 'Street Fighter Alpha 3',
    tabs: ["Normal Moves","Special Moves","Super Arts"],
    characters: [
      { id: 'ryu', name: 'Ryu' },
      { id: 'rolento', name: 'Rolento' },
      { id: 'dan', name: 'Dan' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'sakura', name: 'Sakura' },
      { id: 'birdie', name: 'Birdie' },
      { id: 'charlie', name: 'Charlie' },
      { id: 'akuma', name: 'Akuma' },
      { id: 'bison', name: 'Bison' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'vega', name: 'Vega' },
      { id: 'adon', name: 'Adon' },
      { id: 'cody', name: 'Cody' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'zangief', name: 'Zangief' },
      { id: 't_hawk', name: 'T. Hawk' },
      { id: 'rose', name: 'Rose' },
      { id: 'guy', name: 'Guy' },
      { id: 'honda', name: 'Honda' },
      { id: 'juni', name: 'Juni' },
      { id: 'gen', name: 'Gen' },
      { id: 'chun_li', name: 'Chun-Li' },
      { id: 'fei_long', name: 'Fei-Long' },
      { id: 'karin', name: 'Karin' },
      { id: 'juli', name: 'Juli' },
      { id: 'balrog', name: 'Balrog' },
      { id: 'sodom', name: 'Sodom' },
      { id: 'sagat', name: 'Sagat' },
      { id: 'ken', name: 'Ken' },
      { id: 'dee_jay', name: 'Dee Jay' },
      { id: 'r_mika', name: 'R. Mika' },
      { id: 'guile', name: 'Guile' },
      { id: 'evil_ryu', name: 'Evil Ryu' },
      { id: 'shin_akuma', name: 'Shin Akuma' }
    ]
  }
,
  {
    id: 'pocketfighter',
    name: 'Pocket Fighter',
    tabs: ["Normal Moves","Special Moves","Super Arts"],
    characters: [
      { id: 'ryu', name: 'Ryu' },
      { id: 'ken', name: 'Ken' },
      { id: 'chun_li', name: 'Chun-Li' },
      { id: 'sakura', name: 'Sakura' },
      { id: 'felicia', name: 'Felicia' },
      { id: 'morrigan', name: 'Morrigan' },
      { id: 'zangief', name: 'Zangief' },
      { id: 'ibuki', name: 'Ibuki' },
      { id: 'hsien_ko_lei_lei', name: 'Hsien-Ko(lei Lei)' },
      { id: 'tessa', name: 'Tessa' },
      { id: 'dan', name: 'DAN' },
      { id: 'akuma_gouki', name: 'Akuma(Gouki)' }
    ]
  }
,
  {
    id: 'projectjustice',
    name: 'Project Justice',
    tabs: ["Normal Moves","Special Moves","Super Arts"],
    characters: [
      { id: 'akira', name: 'AKIRA' },
      { id: 'batsu', name: 'BATSU' },
      { id: 'boman', name: 'BOMAN' },
      { id: 'daigo', name: 'DAIGO' },
      { id: 'edge', name: 'EDGE' },
      { id: 'gan', name: 'GAN' },
      { id: 'hayato', name: 'HAYATO' },
      { id: 'hideo', name: 'HIDEO' },
      { id: 'hinata', name: 'HINATA' },
      { id: 'kyoko', name: 'KYOKO' },
      { id: 'kyosuke', name: 'KYOSUKE' },
      { id: 'momo', name: 'MOMO' },
      { id: 'nagare', name: 'NAGARE' },
      { id: 'natsu', name: 'NATSU' },
      { id: 'ran', name: 'RAN' },
      { id: 'roberto', name: 'ROBERTO' },
      { id: 'shoma', name: 'SHOMA' },
      { id: 'yurika', name: 'YURIKA' },
      { id: 'zaki', name: 'ZAKI' },
      { id: 'burning_batsu', name: 'BURNING BATSU' },
      { id: 'demon_hyo', name: 'DEMON HYO' },
      { id: 'hyo_imawano', name: 'HYO IMAWANO' },
      { id: 'kurow', name: 'KUROW' },
      { id: 'powered_akira', name: 'POWERED AKIRA' },
      { id: 'roy_bromwell', name: 'ROY BROMWELL' },
      { id: 'tiffany_rose', name: 'TIFFANY ROSE' },
      { id: 'vatsu', name: 'VATSU' },
      { id: 'wild_daigo', name: 'WILD DAIGO' },
      { id: 'alec', name: 'ALEC' },
      { id: 'barbara', name: 'BARBARA' },
      { id: 'mark', name: 'MARK' },
      { id: 'tony', name: 'TONY' },
      { id: 'nancy', name: 'NANCY' },
      { id: 'eliza', name: 'ELIZA' },
      { id: 'peter', name: 'PETER' },
      { id: 'thelma', name: 'THELMA' },
      { id: 'claudia', name: 'CLAUDIA' },
      { id: 'david', name: 'DAVID' },
      { id: 'frank', name: 'FRANK' },
      { id: 'anna', name: 'ANNA' },
      { id: 'grace', name: 'GRACE' },
      { id: 'hilary', name: 'HILARY' },
      { id: 'george', name: 'GEORGE' },
      { id: 'john', name: 'JOHN' }
    ]
  }
,
  {
    id: 'plasmasword',
    name: 'Plasma Sword',
    tabs: ["Normal Moves","Special Moves","Super Arts"],
    characters: [
      { id: 'table_of_contents', name: 'TABLE OF CONTENTS' },
      { id: 'basic_commands', name: 'BASIC COMMANDS' },
      { id: 'rain', name: 'RAIN' },
      { id: 'byakko', name: 'BYAKKO' },
      { id: 'kaede', name: 'KAEDE' },
      { id: 'the_life_and_plasma_power_gauges', name: 'THE LIFE AND PLASMA POWER GAUGES' },
      { id: 'types_of_movement', name: 'TYPES OF MOVEMENT' },
      { id: 'types_of_throws', name: 'TYPES OF THROWS' },
      { id: 'attack_and_defense', name: 'ATTACK AND DEFENSE' },
      { id: 'fighting_on_the_ground', name: 'FIGHTING ON THE GROUND' },
      { id: 'the_plasma_moves', name: 'THE PLASMA MOVES' }
    ]
  }
,
  {
    id: 'sf2',
    name: 'Super Street Fighter II Turbo',
    tabs: ["Normal Moves","Special Moves","Super Arts"],
    characters: [
      { id: 'ryu', name: 'Ryu' },
      { id: 'ken', name: 'Ken' },
      { id: 'e_honda', name: 'E.Honda' },
      { id: 'chun_li', name: 'Chun-Li' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'zangief', name: 'Zangief' },
      { id: 'guile', name: 'Guile' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 't_hawk', name: 'T.Hawk' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'fei_long', name: 'Fei Long' },
      { id: 'dee_jay', name: 'Dee Jay' },
      { id: 'balrog', name: 'Balrog' },
      { id: 'vega', name: 'Vega' },
      { id: 'sagat', name: 'Sagat' },
      { id: 'm_bison', name: 'M.Bison' },
      { id: 'akuma', name: 'Akuma' }
    ]
  }
,
  {
    id: 'cvs1',
    name: 'Capcom vs. SNK',
    tabs: ["Normal Moves","Special Moves","Super Arts"],
    characters: [
      { id: 'akuma', name: 'Akuma' },
      { id: 'balrog', name: 'Balrog' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'chun_li', name: 'Chun-Li' },
      { id: 'e_honda', name: 'E. Honda' },
      { id: 'evil_ryu', name: 'Evil Ryu' },
      { id: 'geese', name: 'Geese' },
      { id: 'guile', name: 'Guile' },
      { id: 'iori', name: 'Iori' },
      { id: 'ken', name: 'Ken' },
      { id: 'kim', name: 'Kim' },
      { id: 'king', name: 'King' },
      { id: 'kyo', name: 'Kyo' },
      { id: 'm_bison', name: 'M. Bison' },
      { id: 'mai', name: 'Mai' },
      { id: 'morrigan', name: 'Morrigan' },
      { id: 'nakoruru', name: 'Nakoruru' },
      { id: 'orochi_iori', name: 'Orochi Iori' },
      { id: 'raiden', name: 'Raiden' },
      { id: 'rugal', name: 'Rugal' },
      { id: 'ryo', name: 'Ryo' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sagat', name: 'Sagat' },
      { id: 'sakura', name: 'Sakura' },
      { id: 'terry', name: 'Terry' },
      { id: 'vega', name: 'Vega' },
      { id: 'vice', name: 'Vice' },
      { id: 'yamazaki', name: 'Yamazaki' },
      { id: 'yuri', name: 'Yuri' },
      { id: 'zangief', name: 'Zangief' }
    ]
  }
];
