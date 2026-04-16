import type { GameDefinition } from './types';

export const SUPPORTED_GAMES: GameDefinition[] = [
  {
    id: 'art-of-fighting',
    name: "Art of Fighting",
    developer: "SNK",
    releaseYear: 1992,
    characters: [
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'art-of-fighting-3-the-path-of-the-warrior',
    name: "Art of Fighting 3: The Path of the Warrior",
    developer: "SNK",
    releaseYear: 1996,
    characters: [
      { id: 'robert-garcia', name: 'Robert Garcia' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'astra-superstars',
    name: "Astra Superstars",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'lettas', name: 'Lettas' },
      { id: 'salsa', name: 'Salsa' },
      { id: 'stella', name: 'Stella' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'asuka-120%-burning-fest-limited',
    name: "Asuka 120% Burning Fest Limited",
    developer: "SNK",
    releaseYear: 1997,
    characters: [
      { id: 'asuka-honda', name: 'Asuka Honda' },
      { id: 'kumi-okuyama', name: 'Kumi Okuyama' },
      { id: 'ryuko-yamazaki', name: 'Ryuko Yamazaki' },
      { id: 'tamaki-shindo', name: 'Tamaki Shindo' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'blazblue-central-fiction',
    name: "BlazBlue: Central Fiction",
    developer: "Arc System Works",
    releaseYear: 2015,
    characters: [
      { id: 'jin-kisaragi', name: 'Jin Kisaragi' },
      { id: 'noel-vermillion', name: 'Noel Vermillion' },
      { id: 'ragna-the-bloodedge', name: 'Ragna the Bloodedge' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'blazblue-cross-tag-battle',
    name: "BlazBlue: Cross Tag Battle",
    developer: "Arc System Works",
    releaseYear: 2018,
    characters: [
      { id: 'ruby-rose', name: 'Ruby Rose' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'bloody-roar',
    name: "Bloody Roar",
    developer: "Hudson Soft",
    releaseYear: 1997,
    characters: [
      { id: 'alice-(rabbit)', name: 'Alice (Rabbit)' },
      { id: 'alice', name: 'Alice (Rabbit)' },
      { id: 'yugo-(wolf)', name: 'Yugo (Wolf)' },
      { id: 'yugo', name: 'Yugo (Wolf)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'bloody-roar-2-bringer-of-the-new-age',
    name: "Bloody Roar 2: Bringer of the New Age",
    developer: "Hudson Soft",
    releaseYear: 1999,
    characters: [
      { id: 'bakuryu-(mole)', name: 'Bakuryu (Mole)' },
      { id: 'bakuryu', name: 'Bakuryu (Mole)' },
      { id: 'shenlong-(tiger)', name: 'Shenlong (Tiger)' },
      { id: 'shenlong', name: 'Shenlong (Tiger)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'bloody-roar-3',
    name: "Bloody Roar 3",
    developer: "Hudson Soft",
    releaseYear: 2000,
    characters: [
      { id: 'xion-(unborn)', name: 'Xion (Unborn)' },
      { id: 'xion', name: 'Xion (Unborn)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'bloody-roar-4',
    name: "Bloody Roar 4",
    developer: "Hudson Soft",
    releaseYear: 2003,
    characters: [
      { id: 'nagi-(spurious)', name: 'Nagi (Spurious)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'bloody-roar-primal-fury--extreme',
    name: "Bloody Roar: Primal Fury / Extreme",
    developer: "Hudson Soft",
    releaseYear: 2002,
    characters: [
      { id: 'gado-(lion)', name: 'Gado (Lion)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'breakers-revenge',
    name: "Breakers Revenge",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'sho-kamui', name: 'Sho Kamui' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'capcom-fighting-jam',
    name: "Capcom Fighting Jam",
    developer: "Capcom",
    releaseYear: 2004,
    characters: [
      { id: 'alex-(sf3-style)', name: 'Alex (SF3 Style)' },
      { id: 'demitri-(darkstalkers-style)', name: 'Demitri (Darkstalkers Style)' },
      { id: 'guy-(alpha-style)', name: 'Guy (Alpha Style)' },
      { id: 'ingrid', name: 'Ingrid' },
      { id: 'leo-(red-earth-style)', name: 'Leo (Red Earth Style)' },
      { id: 'ryu-(sf2-style)', name: 'Ryu (SF2 Style)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'capcom-fighting-jam-(capcom-fighting-evolution)',
    name: "Capcom Fighting Jam (Capcom Fighting Evolution)",
    developer: "Capcom",
    releaseYear: 2004,
    characters: [
      { id: 'alex-(street-fighter-iii-style)', name: 'Alex (Street Fighter III Style)' },
      { id: 'anakaris-(darkstalkers-style)', name: 'Anakaris (Darkstalkers Style)' },
      { id: 'chun-li-(street-fighter-iii-style)', name: 'Chun-Li (Street Fighter III Style)' },
      { id: 'demitri-maximoff-(darkstalkers-style)', name: 'Demitri Maximoff (Darkstalkers Style)' },
      { id: 'felicia-(darkstalkers-style)', name: 'Felicia (Darkstalkers Style)' },
      { id: 'guile-(street-fighter-ii-style)', name: 'Guile (Street Fighter II Style)' },
      { id: 'guy-(street-fighter-alpha-style)', name: 'Guy (Street Fighter Alpha Style)' },
      { id: 'hauzer-(red-earth-style)', name: 'Hauzer (Red Earth Style)' },
      { id: 'hydron-(nool)-(red-earth-style)', name: 'Hydron (Nool) (Red Earth Style)' },
      { id: 'ingrid', name: 'Ingrid' },
      { id: 'jedah-dohma-(darkstalkers-style)', name: 'Jedah Dohma (Darkstalkers Style)' },
      { id: 'karin-kanzuki-(street-fighter-alpha-style)', name: 'Karin Kanzuki (Street Fighter Alpha Style)' },
      { id: 'kenji-(mukuro)-(red-earth-style)', name: 'Kenji (Mukuro) (Red Earth Style)' },
      { id: 'leo-(red-earth-style)', name: 'Leo (Red Earth Style)' },
      { id: 'm-bison-(vega)-(street-fighter-ii-style)', name: 'M. Bison (Vega) (Street Fighter II Style)' },
      { id: 'pyron', name: 'Pyron' },
      { id: 'rolento-f-schugerg-(street-fighter-alpha-style)', name: 'Rolento F. Schugerg (Street Fighter Alpha Style)' },
      { id: 'rose-(street-fighter-alpha-style)', name: 'Rose (Street Fighter Alpha Style)' },
      { id: 'ryu-(street-fighter-ii-style)', name: 'Ryu (Street Fighter II Style)' },
      { id: 'sakura-kasugano-(street-fighter-alpha-style)', name: 'Sakura Kasugano (Street Fighter Alpha Style)' },
      { id: 'shin-akuma', name: 'Shin Akuma' },
      { id: 'urien-(street-fighter-iii-style)', name: 'Urien (Street Fighter III Style)' },
      { id: 'yun-(street-fighter-iii-style)', name: 'Yun (Street Fighter III Style)' },
      { id: 'zangief-(street-fighter-ii-style)', name: 'Zangief (Street Fighter II Style)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'capcom-vs-snk-2-mark-of-the-millennium-2001',
    name: "Capcom vs. SNK 2: Mark of the Millennium 2001",
    developer: "Capcom",
    releaseYear: 2001,
    characters: [
      { id: 'akuma-(gouki)', name: 'Akuma (Gouki)' },
      { id: 'chang-koehan-&-choi-bounge', name: 'Chang Koehan & Choi Bounge' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'guile', name: 'Guile' },
      { id: 'haohmaru', name: 'Haohmaru' },
      { id: 'hibiki-takane', name: 'Hibiki Takane' },
      { id: 'iori-yagami', name: 'Iori Yagami' },
      { id: 'ken-masters', name: 'Ken Masters' },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi' },
      { id: 'mai-shiranui', name: 'Mai Shiranui' },
      { id: 'maki-genryusai', name: 'Maki Genryusai' },
      { id: 'rock-howard', name: 'Rock Howard' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sagat', name: 'Sagat' },
      { id: 'terry-bogard', name: 'Terry Bogard' },
      { id: 'yun', name: 'Yun' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'capcom-vs-snk-millennium-fight-2000',
    name: "Capcom vs. SNK: Millennium Fight 2000",
    developer: "Capcom",
    releaseYear: 2000,
    characters: [
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi' },
      { id: 'mai-shiranui', name: 'Mai Shiranui' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'terry-bogard', name: 'Terry Bogard' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'capcom-vs-snk-millennium-fight-2000-pro',
    name: "Capcom vs. SNK: Millennium Fight 2000 Pro",
    developer: "Capcom",
    releaseYear: 2001,
    characters: [
      { id: 'akuma-(gouki)', name: 'Akuma (Gouki)' },
      { id: 'andy-bogard', name: 'Andy Bogard' },
      { id: 'balrog-(vega-jp)', name: 'Balrog (Vega JP)' },
      { id: 'benimaru-nikaido', name: 'Benimaru Nikaido' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'e-honda', name: 'E. Honda' },
      { id: 'geese-howard', name: 'Geese Howard' },
      { id: 'guile', name: 'Guile' },
      { id: 'iori-yagami', name: 'Iori Yagami' },
      { id: 'joe-higashi', name: 'Joe Higashi' },
      { id: 'ken-masters', name: 'Ken Masters' },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan' },
      { id: 'king', name: 'King' },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi' },
      { id: 'm-bison-(vega-jp)', name: 'M. Bison (Vega JP)' },
      { id: 'mai-shiranui', name: 'Mai Shiranui' },
      { id: 'morrigan-aensland', name: 'Morrigan Aensland' },
      { id: 'nakoruru', name: 'Nakoruru' },
      { id: 'raiden', name: 'Raiden' },
      { id: 'rugal-bernstein', name: 'Rugal Bernstein' },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'ryuji-yamazaki', name: 'Ryuji Yamazaki' },
      { id: 'sagat', name: 'Sagat' },
      { id: 'sakura-kasugano', name: 'Sakura Kasugano' },
      { id: 'terry-bogard', name: 'Terry Bogard' },
      { id: 'vice', name: 'Vice' },
      { id: 'yuri-sakazaki', name: 'Yuri Sakazaki' },
      { id: 'zangief', name: 'Zangief' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'alex-(street-fighter-iii-style)', name: 'Alex (Street Fighter III Style)' },
      { id: 'alex', name: 'ALEX' },
      { id: 'anakaris-(darkstalkers-style)', name: 'Anakaris (Darkstalkers Style)' },
      { id: 'anakaris', name: 'ANAKARIS' },
      { id: 'chun-li-(street-fighter-iii-style)', name: 'Chun-Li (Street Fighter III Style)' },
      { id: 'classic-character-themes', name: 'CLASSIC CHARACTER THEMES' },
      { id: 'demitri-(darkstalkers-style)', name: 'Demitri (Darkstalkers Style)' },
      { id: 'demitri-maximoff-(darkstalkers-style)', name: 'Demitri Maximoff (Darkstalkers Style)' },
      { id: 'demitri', name: 'DEMITRI' },
      { id: 'felicia-(darkstalkers-style)', name: 'Felicia (Darkstalkers Style)' },
      { id: 'felicia', name: 'FELICIA' },
      { id: 'fight-ingrid', name: 'FIGHT INGRID' },
      { id: 'fight_ingrid', name: 'FIGHT INGRID' },
      { id: 'guile-(street-fighter-ii-style)', name: 'Guile (Street Fighter II Style)' },
      { id: 'guile', name: 'GUILE' },
      { id: 'guy-(alpha-style)', name: 'Guy (Alpha Style)' },
      { id: 'guy-(street-fighter-alpha-style)', name: 'Guy (Street Fighter Alpha Style)' },
      { id: 'guy', name: 'GUY' },
      { id: 'hauzer-(red-earth-style)', name: 'Hauzer (Red Earth Style)' },
      { id: 'hauzer', name: 'HAUZER' },
      { id: 'hydron-(nool)-(red-earth-style)', name: 'Hydron (Nool) (Red Earth Style)' },
      { id: 'ingrid', name: 'INGRID' },
      { id: 'jedah-dohma-(darkstalkers-style)', name: 'Jedah Dohma (Darkstalkers Style)' },
      { id: 'jedah', name: 'JEDAH' },
      { id: 'karin-kanzuki-(street-fighter-alpha-style)', name: 'Karin Kanzuki (Street Fighter Alpha Style)' },
      { id: 'karin', name: 'KARIN' },
      { id: 'kenji-(mukuro)-(red-earth-style)', name: 'Kenji (Mukuro) (Red Earth Style)' },
      { id: 'leo-(red-earth-style)', name: 'Leo (Red Earth Style)' },
      { id: 'leo', name: 'LEO' },
      { id: 'm-bison-(vega)-(street-fighter-ii-style)', name: 'M. Bison (Vega) (Street Fighter II Style)' },
      { id: 'mukuro-(kenji)', name: 'MUKURO (KENJI)' },
      { id: 'mukuro_kenji', name: 'MUKURO (KENJI)' },
      { id: 'nool-(hydron)', name: 'NOOL (HYDRON)' },
      { id: 'nool_hydron', name: 'NOOL (HYDRON)' },
      { id: 'pyron', name: 'PYRON' },
      { id: 'rolento-f-schugerg-(street-fighter-alpha-style)', name: 'Rolento F. Schugerg (Street Fighter Alpha Style)' },
      { id: 'rose-(street-fighter-alpha-style)', name: 'Rose (Street Fighter Alpha Style)' },
      { id: 'rose', name: 'ROSE' },
      { id: 'ryu-(sf2-style)', name: 'Ryu (SF2 Style)' },
      { id: 'ryu-(street-fighter-ii-style)', name: 'Ryu (Street Fighter II Style)' },
      { id: 'ryu', name: 'RYU' },
      { id: 'sakura-kasugano-(street-fighter-alpha-style)', name: 'Sakura Kasugano (Street Fighter Alpha Style)' },
      { id: 'sakura', name: 'SAKURA' },
      { id: 'shin-akuma', name: 'Shin Akuma' },
      { id: 'street-fighter-ii', name: 'STREET FIGHTER II' },
      { id: 'street-fighter-iii', name: 'STREET FIGHTER III' },
      { id: 'street-fighter-zero-(alpha)', name: 'STREET FIGHTER ZERO (ALPHA)' },
      { id: 'street_fighter_ii', name: 'STREET FIGHTER II' },
      { id: 'street_fighter_iii', name: 'STREET FIGHTER III' },
      { id: 'street_fighter_zero_alpha', name: 'STREET FIGHTER ZERO (ALPHA)' },
      { id: 'unlock-pyron', name: 'UNLOCK PYRON' },
      { id: 'urien-(street-fighter-iii-style)', name: 'Urien (Street Fighter III Style)' },
      { id: 'urien', name: 'URIEN' },
      { id: 'vampire-(darkstalkers)', name: 'VAMPIRE (DARKSTALKERS)' },
      { id: 'vampire_darkstalkers', name: 'VAMPIRE (DARKSTALKERS)' },
      { id: 'warzard-(red-earth)', name: 'WARZARD (RED EARTH)' },
      { id: 'warzard_red_earth', name: 'WARZARD (RED EARTH)' },
      { id: 'yun-(street-fighter-iii-style)', name: 'Yun (Street Fighter III Style)' },
      { id: 'yun', name: 'YUN' },
      { id: 'zangief-(street-fighter-ii-style)', name: 'Zangief (Street Fighter II Style)' },
      { id: 'zangief', name: 'ZANGIEF' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'cota',
    name: "X-Men: Children of the Atom",
    developer: "Capcom",
    releaseYear: 1994,
    characters: [
      { id: 'cyclops', name: 'Cyclops' },
      { id: 'silver-samurai', name: 'Silver Samurai' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'cotw',
    name: "Fatal Fury: City of the Wolves",
    developer: "SNK",
    releaseYear: 2025,
    characters: [
      { id: 'andy-bogard', name: 'Andy Bogard' },
      { id: 'b-jenet', name: 'B. Jenet' },
      { id: 'billy-kane', name: 'Billy Kane' },
      { id: 'blue-mary', name: 'Blue Mary' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'cotw_andybogard', name: 'Andy Bogard' },
      { id: 'cotw_billykane', name: 'Billy Kane' },
      { id: 'cotw_bjenet', name: 'B. Jenet' },
      { id: 'cotw_bluemary', name: 'Blue Mary' },
      { id: 'cotw_chunli', name: 'Chun-Li' },
      { id: 'cotw_cristianoronaldo', name: 'Cristiano Ronaldo' },
      { id: 'cotw_gato', name: 'Gato' },
      { id: 'cotw_hokutomaru', name: 'Hokutomaru' },
      { id: 'cotw_hotarufutaba', name: 'Hotaru Futaba' },
      { id: 'cotw_joehigashi', name: 'Joe Higashi' },
      { id: 'cotw_kainrheinlein', name: 'Kain R. Heinlein' },
      { id: 'cotw_kenmasters', name: 'Ken Masters' },
      { id: 'cotw_kenshiro', name: 'Kenshiro' },
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
      { id: 'cotw_voxreaper', name: 'Vox Reaper' },
      { id: 'cotw_wolfgangkrauser', name: 'Wolfgang Krauser' },
      { id: 'cristiano-ronaldo', name: 'Cristiano Ronaldo' },
      { id: 'gato', name: 'Gato' },
      { id: 'hokutomaru', name: 'Hokutomaru' },
      { id: 'hotaru-futaba', name: 'Hotaru Futaba' },
      { id: 'joe-higashi', name: 'Joe Higashi' },
      { id: 'kain-r-heinlein', name: 'Kain R. Heinlein' },
      { id: 'ken-masters', name: 'Ken Masters' },
      { id: 'kevin-rian', name: 'Kevin Rian' },
      { id: 'kim-dong-hwan', name: 'Kim Dong Hwan' },
      { id: 'kim-jae-hoon', name: 'Kim Jae Hoon' },
      { id: 'mai-shiranui', name: 'Mai Shiranui' },
      { id: 'marco-rodrigues', name: 'Marco Rodrigues' },
      { id: 'mr-big', name: 'Mr. Big' },
      { id: 'nightmare-geese', name: 'Nightmare Geese' },
      { id: 'preecha', name: 'Preecha' },
      { id: 'rock-howard', name: 'Rock Howard' },
      { id: 'salvatore-ganacci', name: 'Salvatore Ganacci' },
      { id: 'terry-bogard', name: 'Terry Bogard' },
      { id: 'tizoc', name: 'Tizoc' },
      { id: 'vox-reaper', name: 'Vox Reaper' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'cvs1',
    name: "Capcom vs. SNK",
    developer: "Capcom",
    releaseYear: 2000,
    characters: [
      { id: 'akuma', name: 'Akuma' },
      { id: 'balrog', name: 'Balrog' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'chun_li', name: 'Chun-Li' },
      { id: 'e-honda', name: 'E. Honda' },
      { id: 'evil-ryu', name: 'Evil Ryu' },
      { id: 'evil_ryu', name: 'Evil Ryu' },
      { id: 'e_honda', name: 'E. Honda' },
      { id: 'geese', name: 'Geese' },
      { id: 'guile', name: 'Guile' },
      { id: 'iori', name: 'Iori' },
      { id: 'ken', name: 'Ken' },
      { id: 'kim', name: 'Kim' },
      { id: 'king', name: 'King' },
      { id: 'kyo', name: 'Kyo' },
      { id: 'm-bison', name: 'M. Bison' },
      { id: 'mai', name: 'Mai' },
      { id: 'morrigan', name: 'Morrigan' },
      { id: 'm_bison', name: 'M. Bison' },
      { id: 'nakoruru', name: 'Nakoruru' },
      { id: 'orochi-iori', name: 'Orochi Iori' },
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
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'cvs2',
    name: "Capcom vs SNK 2",
    developer: "Capcom",
    releaseYear: 2001,
    characters: [
      { id: 'akuma-(gouki)', name: 'Akuma (Gouki)' },
      { id: 'akuma-(shin)', name: 'Akuma (Shin)' },
      { id: 'akuma', name: 'Akuma' },
      { id: 'akumashin', name: 'Akuma (Shin)' },
      { id: 'akuma_shin', name: 'Akuma (Shin)' },
      { id: 'athena', name: 'Athena' },
      { id: 'balrog', name: 'Balrog' },
      { id: 'benimaru', name: 'Benimaru' },
      { id: 'bison', name: 'Bison' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'chang-(with-choi)', name: 'Chang (with Choi)' },
      { id: 'chang-koehan-&-choi-bounge', name: 'Chang Koehan & Choi Bounge' },
      { id: 'changwithchoi', name: 'Chang (with Choi)' },
      { id: 'chang_with_choi', name: 'Chang (with Choi)' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'chunli', name: 'Chun-Li' },
      { id: 'chun_li', name: 'Chun-Li' },
      { id: 'dan', name: 'Dan' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'eagle', name: 'Eagle' },
      { id: 'ehonda', name: 'E.Honda' },
      { id: 'e_honda', name: 'E.Honda' },
      { id: 'geese', name: 'Geese' },
      { id: 'guile', name: 'Guile' },
      { id: 'haohmaru', name: 'Haohmaru' },
      { id: 'hibiki-takane', name: 'Hibiki Takane' },
      { id: 'hibiki', name: 'Hibiki' },
      { id: 'iori-(orochi)', name: 'Iori (Orochi)' },
      { id: 'iori-yagami', name: 'Iori Yagami' },
      { id: 'iori', name: 'Iori' },
      { id: 'ioriorochi', name: 'Iori (Orochi)' },
      { id: 'iori_orochi', name: 'Iori (Orochi)' },
      { id: 'joe', name: 'Joe' },
      { id: 'ken-masters', name: 'Ken Masters' },
      { id: 'ken', name: 'Ken' },
      { id: 'kim', name: 'Kim' },
      { id: 'king', name: 'King' },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi' },
      { id: 'kyo', name: 'Kyo' },
      { id: 'kyosuke', name: 'Kyosuke' },
      { id: 'mai-shiranui', name: 'Mai Shiranui' },
      { id: 'mai', name: 'Mai' },
      { id: 'maki-genryusai', name: 'Maki Genryusai' },
      { id: 'maki', name: 'Maki' },
      { id: 'morrigan', name: 'Morrigan' },
      { id: 'nakoruru', name: 'Nakoruru' },
      { id: 'raiden', name: 'Raiden' },
      { id: 'rock-howard', name: 'Rock Howard' },
      { id: 'rock', name: 'Rock' },
      { id: 'rolento', name: 'Rolento' },
      { id: 'rugal-(ultimate)', name: 'Rugal (Ultimate)' },
      { id: 'rugal', name: 'Rugal' },
      { id: 'rugalultimate', name: 'Rugal (Ultimate)' },
      { id: 'rugal_ultimate', name: 'Rugal (Ultimate)' },
      { id: 'ryo', name: 'Ryo' },
      { id: 'ryu-(evil)', name: 'Ryu (Evil)' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'ryuevil', name: 'Ryu (Evil)' },
      { id: 'ryu_evil', name: 'Ryu (Evil)' },
      { id: 'sagat', name: 'Sagat' },
      { id: 'sakura', name: 'Sakura' },
      { id: 'terry-bogard', name: 'Terry Bogard' },
      { id: 'terry', name: 'Terry' },
      { id: 'vega', name: 'Vega' },
      { id: 'vice', name: 'Vice' },
      { id: 'yamazaki', name: 'Yamazaki' },
      { id: 'yun', name: 'Yun' },
      { id: 'yuri', name: 'Yuri' },
      { id: 'zangief', name: 'Zangief' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'cyberbots',
    name: "Cyberbots",
    developer: "Capcom",
    releaseYear: 1995,
    characters: [
      { id: 'blodia', name: 'Blodia' },
      { id: 'fordy', name: 'Fordy' },
      { id: 'jackal', name: 'Jackal' },
      { id: 'killer-bee', name: 'Killer Bee' },
      { id: 'killer_bee', name: 'Killer Bee' },
      { id: 'lightning', name: 'Lightning' },
      { id: 'reptos', name: 'Reptos' },
      { id: 'riot', name: 'Riot' },
      { id: 'swordsman', name: 'Swordsman' },
      { id: 'tarantula', name: 'Tarantula' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'cyberbots-full-metal-madness',
    name: "Cyberbots: Full Metal Madness",
    developer: "SNK",
    releaseYear: 1995,
    characters: [
      { id: 'blodia-(jin-saotome)', name: 'Blodia (Jin Saotome)' },
      { id: 'fordy-(mary)', name: 'Fordy (Mary)' },
      { id: 'golyat-(gawaine-murdock)', name: 'Golyat (Gawaine Murdock)' },
      { id: 'helion-(arieta)', name: 'Helion (Arieta)' },
      { id: 'reptos-(rashid)', name: 'Reptos (Rashid)' },
      { id: 'reptos-(santana-laurence)', name: 'Reptos (Santana Laurence)' },
      { id: 'super-8-(devilotte)', name: 'Super-8 (Devilotte)' },
      { id: 'tarkos-(shade)', name: 'Tarkos (Shade)' },
      { id: 'warlock-(shade)', name: 'Warlock (SHADE)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'bishamon', name: 'BISHAMON' },
      { id: 'demitri-maximoff', name: 'Demitri Maximoff' },
      { id: 'demitri-maximov', name: 'DEMITRI MAXIMOV' },
      { id: 'demitri_maximov', name: 'DEMITRI MAXIMOV' },
      { id: 'felicia', name: 'FELICIA' },
      { id: 'huitzil-(phobos)', name: 'Huitzil (Phobos)' },
      { id: 'john-talbain', name: 'JOHN TALBAIN' },
      { id: 'john_talbain', name: 'JOHN TALBAIN' },
      { id: 'jon-talbain-(gallon)', name: 'Jon Talbain (Gallon)' },
      { id: 'jon-talbain', name: 'Jon Talbain' },
      { id: 'lord-raptor-(zabel-zarock)', name: 'Lord Raptor (Zabel Zarock)' },
      { id: 'lord-raptor', name: 'LORD RAPTOR' },
      { id: 'lord_raptor', name: 'LORD RAPTOR' },
      { id: 'morrigan-aensland', name: 'Morrigan Aensland' },
      { id: 'morrigan-arnsland', name: 'MORRIGAN ARNSLAND' },
      { id: 'morrigan_arnsland', name: 'MORRIGAN ARNSLAND' },
      { id: 'pyron', name: 'Pyron' },
      { id: 'rikuo-(aulbath)', name: 'Rikuo (Aulbath)' },
      { id: 'rikuo', name: 'RIKUO' },
      { id: 'sasquatch', name: 'SASQUATCH' },
      { id: 'victor-von-gerdenheim', name: 'VICTOR VON GERDENHEIM' },
      { id: 'victor_von_gerdenheim', name: 'VICTOR VON GERDENHEIM' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'darkstalkers-the-night-warriors',
    name: "Darkstalkers: The Night Warriors",
    developer: "Capcom",
    releaseYear: 1994,
    characters: [
      { id: 'demitri-maximoff', name: 'Demitri Maximoff' },
      { id: 'felicia', name: 'Felicia' },
      { id: 'jon-talbain', name: 'Jon Talbain' },
      { id: 'morrigan-aensland', name: 'Morrigan Aensland' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'darkstalkers-the-night-warriors-(vampire-the-night-warriors)',
    name: "Darkstalkers: The Night Warriors (Vampire: The Night Warriors)",
    developer: "Capcom",
    releaseYear: 1994,
    characters: [
      { id: 'anakaris', name: 'Anakaris' },
      { id: 'bishamon', name: 'Bishamon' },
      { id: 'demitri-maximoff', name: 'Demitri Maximoff' },
      { id: 'felicia', name: 'Felicia' },
      { id: 'huitzil-(phobos)', name: 'Huitzil (Phobos)' },
      { id: 'jon-talbain-(gallon)', name: 'Jon Talbain (Gallon)' },
      { id: 'lord-raptor-(zabel-zarock)', name: 'Lord Raptor (Zabel Zarock)' },
      { id: 'morrigan-aensland', name: 'Morrigan Aensland' },
      { id: 'pyron', name: 'Pyron' },
      { id: 'rikuo-(aulbath)', name: 'Rikuo (Aulbath)' },
      { id: 'sasquatch', name: 'Sasquatch' },
      { id: 'victor-von-gerdenheim', name: 'Victor von Gerdenheim' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'dead-or-alive',
    name: "Dead or Alive",
    developer: "Tecmo",
    releaseYear: 1996,
    characters: [
      { id: 'kasumi', name: 'Kasumi' },
      { id: 'zack', name: 'Zack' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'dead-or-alive-2',
    name: "Dead or Alive 2",
    developer: "Tecmo",
    releaseYear: 1999,
    characters: [
      { id: 'ayane', name: 'Ayane' },
      { id: 'ryu-hayabusa', name: 'Ryu Hayabusa' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'dead-or-alive-3',
    name: "Dead or Alive 3",
    developer: "Tecmo",
    releaseYear: 2001,
    characters: [
      { id: 'brad-wong', name: 'Brad Wong' },
      { id: 'christie', name: 'Christie' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'dead-or-alive-4',
    name: "Dead or Alive 4",
    developer: "Tecmo",
    releaseYear: 2005,
    characters: [
      { id: 'eliot', name: 'Eliot' },
      { id: 'kokoro', name: 'Kokoro' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'dead-or-alive-5',
    name: "Dead or Alive 5",
    developer: "Tecmo",
    releaseYear: 2012,
    characters: [
      { id: 'mila', name: 'Mila' },
      { id: 'rig', name: 'Rig' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'dnf-duel',
    name: "DNF Duel",
    developer: "Arc System Works",
    releaseYear: 1998,
    characters: [
      { id: 'berserker', name: 'Berserker' },
      { id: 'grappler', name: 'Grappler' },
      { id: 'inquisitor', name: 'Inquisitor' },
      { id: 'striker', name: 'Striker' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'doa6',
    name: "Dead or Alive 6 - Complete Move List (Exhaustive)",
    developer: "Tecmo",
    releaseYear: 1998,
    characters: [
      { id: 'ayane', name: 'Ayane' },
      { id: 'bass-armstrong', name: 'Bass Armstrong' },
      { id: 'bayman', name: 'Bayman' },
      { id: 'brad-wong', name: 'Brad Wong' },
      { id: 'christie', name: 'Christie' },
      { id: 'diego', name: 'Diego' },
      { id: 'eliot', name: 'Eliot' },
      { id: 'helena', name: 'Helena' },
      { id: 'hitomi', name: 'Hitomi' },
      { id: 'honoka', name: 'Honoka' },
      { id: 'jann-lee', name: 'Jann Lee' },
      { id: 'kasumi', name: 'Kasumi' },
      { id: 'kokoro', name: 'Kokoro' },
      { id: 'kula-diamond-(guest)', name: 'Kula Diamond (Guest)' },
      { id: 'la-mariposa', name: 'La Mariposa' },
      { id: 'leifang', name: 'Leifang' },
      { id: 'mai-shiranui-(guest)', name: 'Mai Shiranui (Guest)' },
      { id: 'marie-rose', name: 'Marie Rose' },
      { id: 'mila', name: 'Mila' },
      { id: 'nico', name: 'NiCO' },
      { id: 'rig', name: 'Rig' },
      { id: 'ryu-hayabusa', name: 'Ryu Hayabusa' },
      { id: 'tina-armstrong', name: 'Tina Armstrong' },
      { id: 'zack', name: 'Zack' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'dragon-ball-fighterz',
    name: "Dragon Ball FighterZ",
    developer: "Arc System Works",
    releaseYear: 2018,
    characters: [
      { id: 'frieza', name: 'Frieza' },
      { id: 'goku-(super-saiyan)', name: 'Goku (Super Saiyan)' },
      { id: 'goku', name: 'Goku (Super Saiyan)' },
      { id: 'vegeta-(super-saiyan)', name: 'Vegeta (Super Saiyan)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'fatal-fury-2',
    name: "Fatal Fury 2",
    developer: "SNK",
    releaseYear: 1992,
    characters: [
      { id: 'kim-kaphwan', name: 'Kim Kaphwan' },
      { id: 'mai-shiranui', name: 'Mai Shiranui' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'fatal-fury-3-road-to-the-final-victory',
    name: "Fatal Fury 3: Road to the Final Victory",
    developer: "SNK",
    releaseYear: 1995,
    characters: [
      { id: 'blue-mary', name: 'Blue Mary' },
      { id: 'ryuji-yamazaki', name: 'Ryuji Yamazaki' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'fatal-fury-king-of-fighters',
    name: "Fatal Fury: King of Fighters",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'andy-bogard', name: 'Andy Bogard' },
      { id: 'terry-bogard', name: 'Terry Bogard' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'fatal-fury-special',
    name: "Fatal Fury Special",
    developer: "SNK",
    releaseYear: 1993,
    characters: [
      { id: 'geese-howard', name: 'Geese Howard' },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'fighters-megamix',
    name: "Fighters Megamix",
    developer: "Sega",
    releaseYear: 1996,
    characters: [
      { id: 'akira-yuki-(vf)', name: 'Akira Yuki (VF)' },
      { id: 'bahn-(vipers)', name: 'Bahn (Vipers)' },
      { id: 'honey-(vipers)', name: 'Honey (Vipers)' },
      { id: 'hornet-(daytona-usa)', name: 'Hornet (Daytona USA)' },
      { id: 'hornet', name: 'Hornet' },
      { id: 'janet', name: 'Janet' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'fighting-ex-layer',
    name: "Fighting EX Layer",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'garuda', name: 'Garuda' },
      { id: 'kairi', name: 'Kairi' },
      { id: 'shirase', name: 'Shirase' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'fighting-vipers',
    name: "Fighting Vipers",
    developer: "Sega",
    releaseYear: 1995,
    characters: [
      { id: 'bahn', name: 'Bahn' },
      { id: 'grace', name: 'Grace' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'fighting-vipers-2',
    name: "Fighting Vipers 2",
    developer: "Sega",
    releaseYear: 1998,
    characters: [
      { id: 'charlie', name: 'Charlie' },
      { id: 'emi', name: 'Emi' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'galaxy-fight-universal-warriors',
    name: "Galaxy Fight: Universal Warriors",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'alvan', name: 'Alvan' },
      { id: 'g-done', name: 'G-Done' },
      { id: 'gunter', name: 'Gunter' },
      { id: 'juras', name: 'Juras' },
      { id: 'kazuma', name: 'Kazuma' },
      { id: 'musar', name: 'Musar' },
      { id: 'rolf', name: 'Rolf' },
      { id: 'roomi', name: 'Roomi' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'garou-mark-of-the-wolves',
    name: "Garou: Mark of the Wolves",
    developer: "SNK",
    releaseYear: 1999,
    characters: [
      { id: 'b-jenet', name: 'B. Jenet' },
      { id: 'rock-howard', name: 'Rock Howard' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'golden-axe-the-duel',
    name: "Golden Axe: The Duel",
    developer: "Sega",
    releaseYear: 1998,
    characters: [
      { id: 'death-adder', name: 'Death Adder' },
      { id: 'doc', name: 'Doc' },
      { id: 'duel', name: 'Duel' },
      { id: 'gilius-rockhead', name: 'Gilius Rockhead' },
      { id: 'jamm', name: 'Jamm' },
      { id: 'kain-blade', name: 'Kain Blade' },
      { id: 'keel', name: 'Keel' },
      { id: 'milan-flare', name: 'Milan Flare' },
      { id: 'panchos', name: 'Panchos' },
      { id: 'zoma', name: 'Zoma' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'granblue-fantasy-versus-rising',
    name: "Granblue Fantasy Versus: Rising",
    developer: "Arc System Works",
    releaseYear: 1998,
    characters: [
      { id: 'gran', name: 'Gran' },
      { id: 'katalina', name: 'Katalina' },
      { id: 'siegfried', name: 'Siegfried' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'groove-on-fight',
    name: "Groove on Fight",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'chris-wayne', name: 'Chris Wayne' },
      { id: 'dame', name: 'Dame' },
      { id: 'falco', name: 'Falco' },
      { id: 'hizumi-ichimonji', name: 'Hizumi Ichimonji' },
      { id: 'kanji-kokusen', name: 'Kanji Kokusen' },
      { id: 'larry-light', name: 'Larry Light' },
      { id: 'mad', name: 'M.A.D' },
      { id: 'popura-hanakouji', name: 'Popura Hanakouji' },
      { id: 'remi-otogiri', name: 'Remi Otogiri' },
      { id: 'rudolph-gartheimer', name: 'Rudolph Gartheimer' },
      { id: 'solis-r-albus', name: 'Solis R. Albus' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'guilty-gear',
    name: "Guilty Gear (1998)",
    developer: "Arc System Works",
    releaseYear: 1998,
    characters: [
      { id: 'sol-badguy', name: 'Sol Badguy' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'guilty-gear--strive-',
    name: "Guilty Gear -Strive- (Ver. 2.00)",
    developer: "Arc System Works",
    releaseYear: 2021,
    characters: [
      { id: 'jam-kuradoberi', name: 'Jam Kuradoberi' },
      { id: 'ky-kiske', name: 'Ky Kiske' },
      { id: 'ramlethal-valentine', name: 'Ramlethal Valentine' },
      { id: 'sol-badguy', name: 'Sol Badguy' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'guilty-gear-x',
    name: "Guilty Gear X",
    developer: "Arc System Works",
    releaseYear: 1998,
    characters: [
      { id: 'ky-kiske', name: 'Ky Kiske' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'guilty-gear-xrd-rev-2',
    name: "Guilty Gear Xrd REV 2",
    developer: "Arc System Works",
    releaseYear: 2017,
    characters: [
      { id: 'elphelt-valentine', name: 'Elphelt Valentine' },
      { id: 'johnny', name: 'Johnny' },
      { id: 'millia-rage', name: 'Millia Rage' },
      { id: 'sol-badguy', name: 'Sol Badguy' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'guilty-gear-xx-accent-core-plus-r',
    name: "Guilty Gear XX Accent Core Plus R",
    developer: "Arc System Works",
    releaseYear: 1998,
    characters: [
      { id: 'baiken', name: 'Baiken' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'hypersf2',
    name: "Hyper Street Fighter II",
    developer: "Capcom",
    releaseYear: 1987,
    characters: [
      { id: 'chun-li', name: 'Chun Li' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'vega', name: 'Vega' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'killer-instinct-(1994)',
    name: "Killer Instinct (1994)",
    developer: "Rare",
    releaseYear: 1994,
    characters: [
      { id: 'jago', name: 'Jago' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'killer-instinct-(2013)',
    name: "Killer Instinct (2013)",
    developer: "Rare",
    releaseYear: 2013,
    characters: [
      { id: 'fulgore', name: 'Fulgore' },
      { id: 'hisako', name: 'Hisako' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'killer-instinct-2--gold',
    name: "Killer Instinct 2 / Gold",
    developer: "Rare",
    releaseYear: 1994,
    characters: [
      { id: 'b-orchid', name: 'B. Orchid' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'kizuna-encounter-super-tag-battle',
    name: "Kizuna Encounter: Super Tag Battle",
    developer: "SNK",
    releaseYear: 1996,
    characters: [
      { id: 'sho-hayate', name: 'Sho Hayate' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'last-bronx',
    name: "Last Bronx",
    developer: "Sega",
    releaseYear: 1998,
    characters: [
      { id: 'joe', name: 'Joe' },
      { id: 'kurosawa', name: 'Kurosawa' },
      { id: 'lisa', name: 'Lisa' },
      { id: 'mari', name: 'Mari' },
      { id: 'red-eye', name: 'Red Eye' },
      { id: 'tommy', name: 'Tommy' },
      { id: 'yoko', name: 'Yoko' },
      { id: 'yusaku', name: 'Yusaku' },
      { id: 'zaimoku', name: 'Zaimoku' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'marvel-vs-capcom-clash-of-super-heroes',
    name: "Marvel vs. Capcom: Clash of Super Heroes",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'captain-america', name: 'Captain America' },
      { id: 'gambit', name: 'Gambit' },
      { id: 'hulk', name: 'Hulk' },
      { id: 'jin-saotome', name: 'Jin Saotome' },
      { id: 'mega-man-(rockman)', name: 'Mega Man (Rockman)' },
      { id: 'morrigan-aensland', name: 'Morrigan Aensland' },
      { id: 'spider-man', name: 'Spider-Man' },
      { id: 'strider-hiryu', name: 'Strider Hiryu' },
      { id: 'venom', name: 'Venom' },
      { id: 'war-machine', name: 'War Machine' },
      { id: 'wolverine', name: 'Wolverine' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'marvel-vs-capcom-infinite',
    name: "Marvel vs. Capcom: Infinite",
    developer: "Capcom",
    releaseYear: 2017,
    characters: [
      { id: 'captain-marvel', name: 'Captain Marvel' },
      { id: 'dante', name: 'Dante' },
      { id: 'iron-man', name: 'Iron Man' },
      { id: 'mega-man-x', name: 'Mega Man X' },
      { id: 'morrigan', name: 'Morrigan' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'zero', name: 'Zero' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'matrimelee',
    name: "Matrimelee (Power Instinct Matrimelee)",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'keith-wayne', name: 'Keith Wayne' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'mortal-kombat-1',
    name: "Mortal Kombat 1",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'scorpion', name: 'Scorpion' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'mortal-kombat-ii',
    name: "Mortal Kombat II",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'scorpion', name: 'Scorpion' },
      { id: 'sub-zero', name: 'Sub-Zero' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'mortal-kombat-(2011)',
    name: "Mortal Kombat (2011)",
    developer: "NetherRealm Studios",
    releaseYear: 1998,
    characters: [
      { id: 'sub-zero', name: 'Sub-Zero' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'mortal-kombat-deception',
    name: "Mortal Kombat: Deception",
    developer: "NetherRealm Studios",
    releaseYear: 1998,
    characters: [
      { id: 'scorpion', name: 'Scorpion' },
      { id: 'sub-zero', name: 'Sub-Zero' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'mortal-kombat-x',
    name: "Mortal Kombat X",
    developer: "NetherRealm Studios",
    releaseYear: 1998,
    characters: [
      { id: 'scorpion', name: 'Scorpion' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'msh',
    name: "Marvel Super Heroes",
    developer: "Capcom",
    releaseYear: 1995,
    characters: [
      { id: 'blackheart', name: 'Blackheart' },
      { id: 'captain-america', name: 'Captain America' },
      { id: 'dr-doom-(boss)', name: 'Dr. Doom (Boss)' },
      { id: 'hulk', name: 'Hulk' },
      { id: 'iron-man', name: 'Iron Man' },
      { id: 'juggernaut', name: 'Juggernaut' },
      { id: 'magneto', name: 'Magneto' },
      { id: 'psylocke', name: 'Psylocke' },
      { id: 'shuma-gorath', name: 'Shuma-Gorath' },
      { id: 'spider-man', name: 'Spider-Man' },
      { id: 'thanos-(boss)', name: 'Thanos (Boss)' },
      { id: 'wolverine', name: 'Wolverine' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'mshvsf',
    name: "Marvel Super Heroes vs. Street Fighter",
    developer: "Capcom",
    releaseYear: 1997,
    characters: [
      { id: 'akuma', name: 'Akuma' },
      { id: 'blackheart', name: 'Blackheart' },
      { id: 'captain-america', name: 'Captain America' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'cyber-akuma-(boss)', name: 'Cyber-Akuma (Boss)' },
      { id: 'cyclops', name: 'Cyclops' },
      { id: 'dan-hibiki', name: 'Dan Hibiki' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'hulk', name: 'Hulk' },
      { id: 'ken', name: 'Ken' },
      { id: 'omega-red', name: 'Omega Red' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sakura', name: 'Sakura' },
      { id: 'shuma-gorath', name: 'Shuma-Gorath' },
      { id: 'spider-man', name: 'Spider-Man' },
      { id: 'wolverine', name: 'Wolverine' },
      { id: 'zangief', name: 'Zangief' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'marvel-vs-capcom-2',
    name: "Marvel vs. Capcom 2",
    developer: "SNK",
    releaseYear: 2000,
    characters: [
      { id: 'akuma', name: 'Akuma' },
      { id: 'cable', name: 'Cable' },
      { id: 'captain-america', name: 'Captain America' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'cyclops', name: 'Cyclops' },
      { id: 'doctor-doom', name: 'Doctor Doom' },
      { id: 'hayato', name: 'Hayato' },
      { id: 'iron-man', name: 'Iron Man' },
      { id: 'jill-valentine', name: 'Jill Valentine' },
      { id: 'magneto', name: 'Magneto' },
      { id: 'mega-man', name: 'Mega Man' },
      { id: 'morrigan-aensland', name: 'Morrigan Aensland' },
      { id: 'psylocke', name: 'Psylocke' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sentinel', name: 'Sentinel' },
      { id: 'spider-man', name: 'Spider-Man' },
      { id: 'storm', name: 'Storm' },
      { id: 'strider-hiryu', name: 'Strider Hiryu' },
      { id: 'venom', name: 'Venom' },
      { id: 'wolverine', name: 'Wolverine' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'iron-man', name: 'Iron Man' },
      { id: 'mega-man-x', name: 'Mega Man X' },
      { id: 'morrigan', name: 'Morrigan' },
      { id: 'ryu', name: 'Ryu' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'night-warriors-darkstalkers-revenge',
    name: "Night Warriors: Darkstalkers",
    developer: "Capcom",
    releaseYear: 1995,
    characters: [
      { id: 'demitri-maximoff', name: 'Demitri Maximoff' },
      { id: 'donovan-baine', name: 'Donovan Baine' },
      { id: 'hsien-ko-(lei-lei)', name: 'Hsien-Ko (Lei-Lei)' },
      { id: 'morrigan-aensland', name: 'Morrigan Aensland' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'automatic-(auto)-mode', name: 'AUTOMATIC (AUTO) MODE' },
      { id: 'bishamon', name: 'BISHAMON' },
      { id: 'blocking', name: 'BLOCKING' },
      { id: 'chain-combos', name: 'CHAIN COMBOS' },
      { id: 'chain_combos', name: 'CHAIN COMBOS' },
      { id: 'change-your-button-configuration', name: 'CHANGE YOUR BUTTON CONFIGURATION' },
      { id: 'change_your_button_configuration', name: 'CHANGE YOUR BUTTON CONFIGURATION' },
      { id: 'demitri-maximoff', name: 'Demitri Maximoff' },
      { id: 'demitri-maximov', name: 'DEMITRI MAXIMOV' },
      { id: 'demitri_maximov', name: 'DEMITRI MAXIMOV' },
      { id: 'donovan-baine', name: 'DONOVAN BAINE' },
      { id: 'donovan', name: 'DONOVAN' },
      { id: 'donovan_baine', name: 'DONOVAN BAINE' },
      { id: 'enable-the-debug-mode', name: 'ENABLE THE DEBUG MODE' },
      { id: 'faq-abbreviations', name: 'FAQ ABBREVIATIONS' },
      { id: 'felicia', name: 'FELICIA' },
      { id: 'frog-trick', name: 'FROG TRICK' },
      { id: 'frog_trick', name: 'FROG TRICK' },
      { id: 'hsien-ko-(lei-lei)', name: 'Hsien-Ko (Lei-Lei)' },
      { id: 'hsien-ko', name: 'HSIEN-KO' },
      { id: 'hsien_ko', name: 'HSIEN-KO' },
      { id: 'jon-talbain', name: 'JON TALBAIN' },
      { id: 'jon_talbain', name: 'JON TALBAIN' },
      { id: 'morrigan-aensland', name: 'MORRIGAN AENSLAND' },
      { id: 'morrigan_aensland', name: 'MORRIGAN AENSLAND' },
      { id: 'pyron', name: 'PYRON' },
      { id: 'sasquatch', name: 'SASQUATCH' },
      { id: 'victor-von-geldenheim', name: 'VICTOR VON GELDENHEIM' },
      { id: 'victor', name: 'VICTOR' },
      { id: 'victor_von_geldenheim', name: 'VICTOR VON GELDENHEIM' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'ninja-masters-haoh-ninpo-cho',
    name: "Ninja Master",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'sasuke', name: 'Sasuke' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'persona-4-arena-ultimax',
    name: "Persona 4 Arena Ultimax",
    developer: "Arc System Works",
    releaseYear: 1998,
    characters: [
      { id: 'chie-satonaka', name: 'Chie Satonaka' },
      { id: 'yosuke-hanamura', name: 'Yosuke Hanamura' },
      { id: 'yu-narukami', name: 'Yu Narukami' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'plasma-sword-nightmare-of-bilstein',
    name: "Plasma Sword: Nightmare of Bilstein",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'hayato-kanzaki', name: 'Hayato Kanzaki' },
      { id: 'june-lin-milliam', name: 'June Lin Milliam' },
      { id: 'saturn', name: 'Saturn' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'plasmasword',
    name: "Plasma Sword",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'byakko', name: 'BYAKKO' },
      { id: 'fighting-on-the-ground', name: 'FIGHTING ON THE GROUND' },
      { id: 'fighting_on_the_ground', name: 'FIGHTING ON THE GROUND' },
      { id: 'hayato-kanzaki', name: 'Hayato Kanzaki' },
      { id: 'june-lin-milliam', name: 'June Lin Milliam' },
      { id: 'kaede', name: 'KAEDE' },
      { id: 'rain', name: 'RAIN' },
      { id: 'saturn', name: 'Saturn' },
      { id: 'table-of-contents', name: 'TABLE OF CONTENTS' },
      { id: 'the-plasma-moves', name: 'THE PLASMA MOVES' },
      { id: 'the_plasma_moves', name: 'THE PLASMA MOVES' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'pocket-fighter-(super-gem-fighter-mini-mix)',
    name: "Pocket Fighter (Super Gem Fighter Mini Mix)",
    developer: "SNK",
    releaseYear: 1997,
    characters: [
      { id: 'felicia', name: 'Felicia' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sakura-kasugano', name: 'Sakura Kasugano' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'pocketfighter',
    name: "Pocket Fighter",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'akuma(gouki)', name: 'Akuma(Gouki)' },
      { id: 'akuma_gouki', name: 'Akuma(Gouki)' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'chun_li', name: 'Chun-Li' },
      { id: 'dan', name: 'DAN' },
      { id: 'felicia', name: 'Felicia' },
      { id: 'gameplay', name: 'GamePlay' },
      { id: 'hsien-ko(lei-lei)', name: 'Hsien-Ko(lei Lei)' },
      { id: 'hsien_ko_lei_lei', name: 'Hsien-Ko(lei Lei)' },
      { id: 'ibuki', name: 'Ibuki' },
      { id: 'ken', name: 'Ken' },
      { id: 'morrigan', name: 'Morrigan' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sakura-kasugano', name: 'Sakura Kasugano' },
      { id: 'sakura', name: 'Sakura' },
      { id: 'tessa', name: 'Tessa' },
      { id: 'zangief', name: 'Zangief' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'project-justice-(rival-schools-2)',
    name: "Project Justice (Rival Schools 2)",
    developer: "SNK",
    releaseYear: 2000,
    characters: [
      { id: 'batsu-ichimonji', name: 'Batsu Ichimonji' },
      { id: 'kyosuke-kagami', name: 'Kyosuke Kagami' },
      { id: 'roberto-miura', name: 'Roberto Miura' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'projectjustice',
    name: "Project Justice",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'akira', name: 'AKIRA' },
      { id: 'alec', name: 'ALEC' },
      { id: 'anna', name: 'ANNA' },
      { id: 'barbara', name: 'BARBARA' },
      { id: 'batsu-ichimonji', name: 'Batsu Ichimonji' },
      { id: 'batsu', name: 'BATSU' },
      { id: 'boman', name: 'BOMAN' },
      { id: 'burning-batsu', name: 'BURNING BATSU' },
      { id: 'burning_batsu', name: 'BURNING BATSU' },
      { id: 'chair-person', name: 'CHAIR PERSON' },
      { id: 'chair_person', name: 'CHAIR PERSON' },
      { id: 'claudia', name: 'CLAUDIA' },
      { id: 'daigo', name: 'DAIGO' },
      { id: 'david', name: 'DAVID' },
      { id: 'demon-hyo', name: 'DEMON HYO' },
      { id: 'demon_hyo', name: 'DEMON HYO' },
      { id: 'edge', name: 'EDGE' },
      { id: 'eliza', name: 'ELIZA' },
      { id: 'frank', name: 'FRANK' },
      { id: 'gan', name: 'GAN' },
      { id: 'george', name: 'GEORGE' },
      { id: 'grace', name: 'GRACE' },
      { id: 'hayato', name: 'HAYATO' },
      { id: 'hideo', name: 'HIDEO' },
      { id: 'hilary', name: 'HILARY' },
      { id: 'hinata', name: 'HINATA' },
      { id: 'hyo-imawano', name: 'HYO IMAWANO' },
      { id: 'hyo_imawano', name: 'HYO IMAWANO' },
      { id: 'john', name: 'JOHN' },
      { id: 'kurow', name: 'KUROW' },
      { id: 'kyoko', name: 'KYOKO' },
      { id: 'kyosuke-kagami', name: 'Kyosuke Kagami' },
      { id: 'kyosuke', name: 'KYOSUKE' },
      { id: 'mark', name: 'MARK' },
      { id: 'momo', name: 'MOMO' },
      { id: 'nagare', name: 'NAGARE' },
      { id: 'nancy', name: 'NANCY' },
      { id: 'natsu', name: 'NATSU' },
      { id: 'peter', name: 'PETER' },
      { id: 'powered-akira', name: 'POWERED AKIRA' },
      { id: 'powered_akira', name: 'POWERED AKIRA' },
      { id: 'ran', name: 'RAN' },
      { id: 'roberto-miura', name: 'Roberto Miura' },
      { id: 'roberto', name: 'ROBERTO' },
      { id: 'roy-bromwell', name: 'ROY BROMWELL' },
      { id: 'roy_bromwell', name: 'ROY BROMWELL' },
      { id: 'shoma', name: 'SHOMA' },
      { id: 'thelma', name: 'THELMA' },
      { id: 'tiffany-rose', name: 'TIFFANY ROSE' },
      { id: 'tiffany_rose', name: 'TIFFANY ROSE' },
      { id: 'tony', name: 'TONY' },
      { id: 'vatsu', name: 'VATSU' },
      { id: 'wild-daigo', name: 'WILD DAIGO' },
      { id: 'wild_daigo', name: 'WILD DAIGO' },
      { id: 'yurika', name: 'YURIKA' },
      { id: 'zaki', name: 'ZAKI' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'rage-of-the-dragons',
    name: "Rage of the Dragons",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'billy-lewis', name: 'Billy Lewis' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'real-bout-fatal-fury',
    name: "Real Bout Fatal Fury",
    developer: "SNK",
    releaseYear: 1995,
    characters: [
      { id: 'terry-bogard', name: 'Terry Bogard' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'real-bout-fatal-fury-2-the-newcomers',
    name: "Real Bout Fatal Fury 2: The Newcomers",
    developer: "SNK",
    releaseYear: 1992,
    characters: [
      { id: 'rick-strowd', name: 'Rick Strowd' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'real-bout-fatal-fury-special',
    name: "Real Bout Fatal Fury Special",
    developer: "SNK",
    releaseYear: 1997,
    characters: [
      { id: 'wolfgang-krauser', name: 'Wolfgang Krauser' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'akari', name: 'Akari' },
      { id: 'amakusa', name: 'Amakusa' },
      { id: 'amano', name: 'Amano' },
      { id: 'andy-bogard', name: 'Andy Bogard' },
      { id: 'arina-makihara', name: 'Arina Makihara' },
      { id: 'athena-asamiya', name: 'Athena Asamiya' },
      { id: 'basara', name: 'Basara' },
      { id: 'benimaru-nikaido', name: 'Benimaru Nikaido' },
      { id: 'billy-kane', name: 'Billy Kane' },
      { id: 'blue-mary', name: 'Blue Mary' },
      { id: 'brider', name: 'Brider' },
      { id: 'brocken', name: 'Brocken' },
      { id: 'captain-atlantis', name: 'Captain Atlantis' },
      { id: 'captain-kidd', name: 'Captain Kidd' },
      { id: 'cham-cham', name: 'Cham Cham' },
      { id: 'chang-koehan', name: 'Chang Koehan' },
      { id: 'charlotte', name: 'Charlotte' },
      { id: 'chin-gentsai', name: 'Chin Gentsai' },
      { id: 'chizuru-kagura-(boss)', name: 'Chizuru Kagura (Boss)' },
      { id: 'chizuru-kagura-(mid-boss)', name: 'Chizuru Kagura (Mid-Boss)' },
      { id: 'chizuru-kagura', name: 'Chizuru Kagura' },
      { id: 'choi-bounge', name: 'Choi Bounge' },
      { id: 'clark-still', name: 'Clark Still' },
      { id: 'clown', name: 'Clown' },
      { id: 'dandy-j', name: 'Dandy J' },
      { id: 'earthquake', name: 'Earthquake' },
      { id: 'eiji-kisaragi', name: 'Eiji Kisaragi' },
      { id: 'enja', name: 'Enja' },
      { id: 'fudomaru', name: 'Fudomaru' },
      { id: 'fuuma', name: 'Fuuma' },
      { id: 'gaira-caffeine', name: 'Gaira Caffeine' },
      { id: 'galford', name: 'Galford' },
      { id: 'gaoh', name: 'Gaoh' },
      { id: 'geese-howard-(boss)', name: 'Geese Howard (Boss)' },
      { id: 'geese-howard', name: 'Geese Howard' },
      { id: 'gen-an-shiranui', name: 'Gen-an Shiranui' },
      { id: 'genjuro-kibagami', name: 'Genjuro Kibagami' },
      { id: 'goenitz-(boss)', name: 'Goenitz (Boss)' },
      { id: 'goenitz-(final-boss)', name: 'Goenitz (Final Boss)' },
      { id: 'gokuraku-taro', name: 'Gokuraku Taro' },
      { id: 'goro-daimon', name: 'Goro Daimon' },
      { id: 'gowcaizer', name: 'Gowcaizer' },
      { id: 'hanzo-hattori', name: 'Hanzo Hattori' },
      { id: 'hanzo', name: 'Hanzo' },
      { id: 'haohmaru', name: 'Haohmaru' },
      { id: 'hellstinger', name: 'Hellstinger' },
      { id: 'hibiki-takane', name: 'Hibiki Takane' },
      { id: 'hyo', name: 'Hyo' },
      { id: 'iori-yagami', name: 'Iori Yagami' },
      { id: 'jack-turner', name: 'Jack Turner' },
      { id: 'janne-darc', name: 'Janne D\'Arc' },
      { id: 'jean-pierre', name: 'Jean Pierre' },
      { id: 'jin-fu-ha', name: 'Jin Fu-Ha' },
      { id: 'joe-higashi', name: 'Joe Higashi' },
      { id: 'john-crawley', name: 'John Crawley' },
      { id: 'johnny-maximum', name: 'Johnny Maximum' },
      { id: 'jubei-yagyu', name: 'Jubei Yagyu' },
      { id: 'julius-carn', name: 'Julius Carn' },
      { id: 'juzoh-kanzaki', name: 'Juzoh Kanzaki' },
      { id: 'juzoh', name: 'Juzoh' },
      { id: 'k', name: 'K\'' },
      { id: 'kabuki-danjuro', name: 'Kabuki Danjuro' },
      { id: 'kaede-(awakened)', name: 'Kaede (Awakened)' },
      { id: 'kaede', name: 'Kaede' },
      { id: 'kagami', name: 'Kagami' },
      { id: 'karin-son', name: 'Karin Son' },
      { id: 'karman-cole', name: 'Karman Cole' },
      { id: 'karnov-(final-boss)', name: 'Karnov (Final Boss)' },
      { id: 'kazuki-kazama', name: 'Kazuki Kazama' },
      { id: 'keiichiro-washizuka', name: 'Keiichiro Washizuka' },
      { id: 'kim-dragon', name: 'Kim Dragon' },
      { id: 'kim-kaphwan', name: 'Kim Kaphwan' },
      { id: 'king', name: 'King' },
      { id: 'kinu', name: 'Kinu' },
      { id: 'kojiroh-sanada', name: 'Kojiroh Sanada' },
      { id: 'krizalid-(boss)', name: 'Krizalid (Boss)' },
      { id: 'krizalid-(final-boss)', name: 'Krizalid (Final Boss)' },
      { id: 'kula-diamond-(hidden-boss)', name: 'Kula Diamond (Hidden Boss)' },
      { id: 'kula-diamond', name: 'Kula Diamond' },
      { id: 'kusaregedo', name: 'Kusaregedo' },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi' },
      { id: 'kyoshiro-senryo', name: 'Kyoshiro Senryo' },
      { id: 'kyosuke-shigure', name: 'Kyosuke Shigure' },
      { id: 'laurence-blood', name: 'Laurence Blood' },
      { id: 'lee-diendo', name: 'Lee Diendo' },
      { id: 'lee-pai-long', name: 'Lee Pai Long' },
      { id: 'lee', name: 'Lee' },
      { id: 'lenny-creston', name: 'Lenny Creston' },
      { id: 'leona-heidern', name: 'Leona Heidern' },
      { id: 'li-xiangfei', name: 'Li Xiangfei' },
      { id: 'liu-feilin', name: 'Liu Feilin' },
      { id: 'liu-yungmie', name: 'Liu Yungmie' },
      { id: 'mai-shiranui', name: 'Mai Shiranui' },
      { id: 'makoto-mizoguchi', name: 'Makoto Mizoguchi' },
      { id: 'manjimaru-sengoku', name: 'Manjimaru Sengoku' },
      { id: 'marion', name: 'Marion' },
      { id: 'marstorius', name: 'Marstorius' },
      { id: 'matlok-jade', name: 'Matlok Jade' },
      { id: 'mature', name: 'Mature' },
      { id: 'mauru', name: 'Mauru' },
      { id: 'maxima', name: 'Maxima' },
      { id: 'micky-rogers', name: 'Micky Rogers' },
      { id: 'mina-majikina', name: 'Mina Majikina' },
      { id: 'mizuki-rashojin', name: 'Mizuki Rashojin' },
      { id: 'moriya-minakata', name: 'Moriya Minakata' },
      { id: 'mr-big', name: 'Mr. Big' },
      { id: 'mr-karate', name: 'Mr. Karate' },
      { id: 'mudman', name: 'Mudman' },
      { id: 'mukuro', name: 'Mukuro' },
      { id: 'musashi-akatsuki-(boss)', name: 'Musashi Akatsuki (Boss)' },
      { id: 'muscle-power', name: 'Muscle Power' },
      { id: 'nakoruru', name: 'Nakoruru' },
      { id: 'neinhalt-sieger', name: 'Neinhalt Sieger' },
      { id: 'nicotine-caffeine', name: 'Nicotine Caffeine' },
      { id: 'okina', name: 'Okina' },
      { id: 'omega-rugal-(final-boss)', name: 'Omega Rugal (Final Boss)' },
      { id: 'omega-rugal', name: 'Omega Rugal' },
      { id: 'orochi-(boss)', name: 'Orochi (Boss)' },
      { id: 'orochi-iori', name: 'Orochi Iori' },
      { id: 'orochi-leona', name: 'Orochi Leona' },
      { id: 'orochimaru', name: 'Orochimaru' },
      { id: 'politank-z', name: 'Politank-Z' },
      { id: 'rai-bakuoh', name: 'Rai Bakuoh' },
      { id: 'ralf-jones', name: 'Ralf Jones' },
      { id: 'rasetsumaru', name: 'Rasetsumaru' },
      { id: 'rasputin', name: 'Rasputin' },
      { id: 'ray-mcdougal', name: 'Ray McDougal' },
      { id: 'rera', name: 'Rera' },
      { id: 'rick-strowd', name: 'Rick Strowd' },
      { id: 'rimururu', name: 'Rimururu' },
      { id: 'robert-garcia', name: 'Robert Garcia' },
      { id: 'rodmy-bohnen', name: 'Rodmy Bohnen' },
      { id: 'rugal-bernstein-(boss)', name: 'Rugal Bernstein (Boss)' },
      { id: 'rugal-bernstein', name: 'Rugal Bernstein' },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki' },
      { id: 'ryoko-izumo', name: 'Ryoko Izumo' },
      { id: 'ryoko-kano', name: 'Ryoko Kano' },
      { id: 'ryuji-yamazaki', name: 'Ryuji Yamazaki' },
      { id: 'saisyu-kusanagi-(mid-boss)', name: 'Saisyu Kusanagi (Mid-Boss)' },
      { id: 'saisyu-kusanagi', name: 'Saisyu Kusanagi' },
      { id: 'samchay-tomyamkun', name: 'Samchay Tomyamkun' },
      { id: 'setsuna', name: 'Setsuna' },
      { id: 'shaia-hishizaki', name: 'Shaia Hishizaki' },
      { id: 'shenlong', name: 'Shenlong' },
      { id: 'shigen-naoe', name: 'Shigen Naoe' },
      { id: 'shigen', name: 'Shigen' },
      { id: 'shingo-yabuki', name: 'Shingo Yabuki' },
      { id: 'shinnosuke-kagami-(boss)', name: 'Shinnosuke Kagami (Boss)' },
      { id: 'shizumaru-hisame', name: 'Shizumaru Hisame' },
      { id: 'sie-kensou', name: 'Sie Kensou' },
      { id: 'sinclair', name: 'Sinclair' },
      { id: 'slash', name: 'Slash' },
      { id: 'sogetsu-kazama', name: 'Sogetsu Kazama' },
      { id: 'suija', name: 'Suija' },
      { id: 'sun-wukong', name: 'Sun Wukong' },
      { id: 'takuma-sakazaki', name: 'Takuma Sakazaki' },
      { id: 'tam-tam', name: 'Tam Tam' },
      { id: 'temjin', name: 'Temjin' },
      { id: 'terry-bogard', name: 'Terry Bogard' },
      { id: 'tites', name: 'Tites' },
      { id: 'tsunade', name: 'Tsunade' },
      { id: 'tung-fu-rue', name: 'Tung Fu Rue' },
      { id: 'ukyo-tachibana', name: 'Ukyo Tachibana' },
      { id: 'unknown', name: 'Unknown' },
      { id: 'vice', name: 'Vice' },
      { id: 'wan-fu', name: 'Wan-Fu' },
      { id: 'wang-koh-san', name: 'Wang Koh-San' },
      { id: 'washizuka', name: 'Washizuka' },
      { id: 'whip', name: 'Whip' },
      { id: 'wolfgang-krauser', name: 'Wolfgang Krauser' },
      { id: 'wyler-(boss)', name: 'Wyler (Boss)' },
      { id: 'yagumo', name: 'Yagumo' },
      { id: 'yoshitora-tokugawa', name: 'Yoshitora Tokugawa' },
      { id: 'yuki', name: 'Yuki' },
      { id: 'yuri-sakazaki', name: 'Yuri Sakazaki' },
      { id: 'zantetsu', name: 'Zantetsu' },
      { id: 'zazie-muhaba', name: 'Zazie Muhaba' },
      { id: 'zero-(boss)', name: 'Zero (Boss)' },
      { id: 'zero-(final-boss)', name: 'Zero (Final Boss)' },
      { id: 'ziria', name: 'Ziria' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'angel', name: 'Angel' },
      { id: 'ash-crimson', name: 'Ash Crimson' },
      { id: 'chris', name: 'Chris' },
      { id: 'duo-lon', name: 'Duo Lon' },
      { id: 'foxy', name: 'Foxy' },
      { id: 'igniz-(final-boss)', name: 'Igniz (Final Boss)' },
      { id: 'iori-yagami', name: 'Iori Yagami' },
      { id: 'k-', name: 'K\' ' },
      { id: 'k', name: 'K\'' },
      { id: 'k9999', name: 'K9999' },
      { id: 'kula-diamond', name: 'Kula Diamond' },
      { id: 'kusanagi-(clone)', name: 'Kusanagi (Clone)' },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi' },
      { id: 'maki-kagura-(boss)', name: 'Maki Kagura (Boss)' },
      { id: 'may-lee', name: 'May Lee' },
      { id: 'mukai-(final-boss)', name: 'Mukai (Final Boss)' },
      { id: 'omega-rugal-(boss)', name: 'Omega Rugal (Boss)' },
      { id: 'orochi-(final-boss)', name: 'Orochi (Final Boss)' },
      { id: 'orochi-team-(yashiro,-shermie,-chris)', name: 'Orochi Team (Yashiro, Shermie, Chris)' },
      { id: 'shen-woo', name: 'Shen Woo' },
      { id: 'shermie', name: 'Shermie' },
      { id: 'tizoc', name: 'Tizoc' },
      { id: 'yashiro-nanakase', name: 'Yashiro Nanakase' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'samurai-shodown',
    name: "Samurai Shodown",
    developer: "SNK",
    releaseYear: 1993,
    characters: [
      { id: 'haohmaru', name: 'Haohmaru' },
      { id: 'ukyo-tachibana', name: 'Ukyo Tachibana' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'samurai-shodown-(2019)',
    name: "Samurai Shodown (2019)",
    developer: "SNK",
    releaseYear: 2019,
    characters: [
      { id: 'galford', name: 'Galford' },
      { id: 'genjuro-kibagami', name: 'Genjuro Kibagami' },
      { id: 'haohmaru', name: 'Haohmaru' },
      { id: 'nakoruru', name: 'Nakoruru' },
      { id: 'ukyo-tachibana', name: 'Ukyo Tachibana' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'samurai-shodown-ii',
    name: "Samurai Shodown II",
    developer: "SNK",
    releaseYear: 1993,
    characters: [
      { id: 'cham-cham', name: 'Cham Cham' },
      { id: 'genjuro-kibagami', name: 'Genjuro Kibagami' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'samurai-shodown-iii-blades-of-blood',
    name: "Samurai Shodown III: Blades of Blood",
    developer: "SNK",
    releaseYear: 1993,
    characters: [
      { id: 'haohmaru', name: 'Haohmaru (Bust Style / Rasetsu)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'samurai-shodown-iv-amakusas-revenge',
    name: "Samurai Shodown IV: Amakusa",
    developer: "SNK",
    releaseYear: 1993,
    characters: [
      { id: 'kazuki-kazama', name: 'Kazuki Kazama (Slash)' },
      { id: 'sogetsu-kazama', name: 'Sogetsu Kazama (Slash)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'samurai-shodown-v',
    name: "Samurai Shodown V",
    developer: "SNK",
    releaseYear: 1993,
    characters: [
      { id: 'yoshitora-tokugawa', name: 'Yoshitora Tokugawa' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'samurai-shodown-v-special',
    name: "Samurai Shodown V Special",
    developer: "SNK",
    releaseYear: 1993,
    characters: [
      { id: 'galford', name: 'Galford' },
      { id: 'mina-majikina', name: 'Mina Majikina' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'alex', name: 'Alex' },
      { id: 'balrog', name: 'Balrog' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'chun_li', name: 'Chun-Li' },
      { id: 'dee-jay', name: 'Dee Jay' },
      { id: 'dee_jay', name: 'Dee Jay' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'dudley', name: 'Dudley' },
      { id: 'e-honda', name: 'E. Honda' },
      { id: 'ehonda', name: 'E.Honda' },
      { id: 'elena', name: 'Elena' },
      { id: 'e_honda', name: 'E.Honda' },
      { id: 'fei-long', name: 'Fei Long' },
      { id: 'fei_long', name: 'Fei Long' },
      { id: 'gill', name: 'Gill' },
      { id: 'guile', name: 'Guile' },
      { id: 'ibuki', name: 'Ibuki' },
      { id: 'ken', name: 'Ken' },
      { id: 'm-bison', name: 'M. Bison' },
      { id: 'makoto', name: 'Makoto' },
      { id: 'mbison', name: 'M.Bison' },
      { id: 'm_bison', name: 'M.Bison' },
      { id: 'necro', name: 'Necro' },
      { id: 'oro', name: 'Oro' },
      { id: 'q', name: 'Q' },
      { id: 'remy', name: 'Remy' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sagat', name: 'Sagat' },
      { id: 'sean', name: 'Sean' },
      { id: 'sf2_ryu', name: 'Ryu' },
      { id: 't-hawk', name: 'T. Hawk' },
      { id: 'thawk', name: 'T.Hawk' },
      { id: 'twelve', name: 'Twelve' },
      { id: 't_hawk', name: 'T.Hawk' },
      { id: 'urien', name: 'Urien' },
      { id: 'vega', name: 'Vega' },
      { id: 'yang', name: 'Yang' },
      { id: 'yun', name: 'Yun' },
      { id: 'zangief', name: 'Zangief' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'sf31',
    name: "Street Fighter III: New Generation",
    developer: "Capcom",
    releaseYear: 1987,
    characters: [
      { id: 'alex', name: 'Alex' },
      { id: 'ryu', name: 'Ryu' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'sf32i',
    name: "Street Fighter III: 2nd Impact - Giant Attack",
    developer: "Capcom",
    releaseYear: 1997,
    characters: [
      { id: 'hugo', name: 'Hugo' },
      { id: 'urien', name: 'Urien' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'sf33s',
    name: "Street Fighter III: 3rd Strike - Fight for the Future",
    developer: "Capcom",
    releaseYear: 1999,
    characters: [
      { id: 'chun-li', name: 'Chun Li' },
      { id: 'makoto', name: 'Makoto' },
      { id: 'q', name: 'Q' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'akuma', name: 'Akuma' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'chunli', name: 'Chunli' },
      { id: 'dee-jay', name: 'Dee Jay' },
      { id: 'deejay', name: 'Deejay' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'e-honda', name: 'E. Honda' },
      { id: 'ed', name: 'Ed' },
      { id: 'ehonda', name: 'Ehonda' },
      { id: 'elena', name: 'Elena' },
      { id: 'guile', name: 'Guile' },
      { id: 'jamie', name: 'Jamie' },
      { id: 'jp', name: 'JP' },
      { id: 'juri', name: 'Juri' },
      { id: 'ken', name: 'Ken' },
      { id: 'kimberly', name: 'Kimberly' },
      { id: 'lily', name: 'Lily' },
      { id: 'luke', name: 'Luke' },
      { id: 'mai', name: 'Mai' },
      { id: 'manon', name: 'Manon' },
      { id: 'marisa', name: 'Marisa' },
      { id: 'rashid', name: 'Rashid' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'terry-bogard', name: 'Terry Bogard' },
      { id: 'terry', name: 'Terry' },
      { id: 'zangief', name: 'Zangief' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'sfa1',
    name: "Street Fighter Alpha 1",
    developer: "Capcom",
    releaseYear: 1995,
    characters: [
      { id: 'akuma', name: 'Akuma' },
      { id: 'charlie', name: 'Charlie' },
      { id: 'chun-li', name: 'Chun Li' },
      { id: 'ken', name: 'Ken' },
      { id: 'ryu', name: 'Ryu' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'sfa2',
    name: "Street Fighter Alpha 2",
    developer: "Capcom",
    releaseYear: 1996,
    characters: [
      { id: 'rolento', name: 'Rolento' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sakura', name: 'Sakura' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'akuma-(gouki)', name: 'Akuma (Gouki)' },
      { id: 'akuma', name: 'Akuma' },
      { id: 'arcade', name: 'Arcade' },
      { id: 'balrog-(m-bison-jp)', name: 'Balrog (M. Bison JP)' },
      { id: 'balrog', name: 'Balrog' },
      { id: 'birdie', name: 'Birdie' },
      { id: 'bison', name: 'Bison' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'charlie-(nash)', name: 'Charlie (Nash)' },
      { id: 'charlie', name: 'Charlie' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'chun_li', name: 'Chun-Li' },
      { id: 'classic-characters', name: 'Classic Characters' },
      { id: 'cody', name: 'Cody' },
      { id: 'dan', name: 'Dan' },
      { id: 'dee-jay', name: 'Dee Jay' },
      { id: 'dee_jay', name: 'Dee Jay' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'dhalsims-wife', name: 'Dhalsim\'s Wife' },
      { id: 'dhalsim_s_wife', name: 'Dhalsim\'s Wife' },
      { id: 'e-honda', name: 'E. Honda' },
      { id: 'entry-mode', name: 'Entry Mode' },
      { id: 'evil-ryu', name: 'Evil Ryu' },
      { id: 'evil_ryu', name: 'Evil Ryu' },
      { id: 'fei-long', name: 'Fei-Long' },
      { id: 'fei_long', name: 'Fei-Long' },
      { id: 'gen', name: 'Gen' },
      { id: 'guile', name: 'Guile' },
      { id: 'guy', name: 'Guy' },
      { id: 'hidden-fighters', name: 'Hidden Fighters' },
      { id: 'hidden_fighters', name: 'Hidden Fighters' },
      { id: 'honda', name: 'Honda' },
      { id: 'ism-quick-reference-chart', name: 'Ism Quick Reference Chart' },
      { id: 'ism_quick_reference_chart', name: 'Ism Quick Reference Chart' },
      { id: 'juli', name: 'Juli' },
      { id: 'juni', name: 'Juni' },
      { id: 'karin-kanzuki', name: 'Karin Kanzuki' },
      { id: 'karin', name: 'Karin' },
      { id: 'ken', name: 'Ken' },
      { id: 'm-bison-(vega-jp)', name: 'M. Bison (Vega JP)' },
      { id: 'play-as-shin-gouki', name: 'Play as Shin Gouki' },
      { id: 'play_as_shin_gouki', name: 'Play as Shin Gouki' },
      { id: 'r-mika', name: 'R. Mika' },
      { id: 'rolento', name: 'Rolento' },
      { id: 'rose', name: 'Rose' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'r_mika', name: 'R. Mika' },
      { id: 'sagart', name: 'Sagart' },
      { id: 'sagat', name: 'Sagat' },
      { id: 'sakura', name: 'Sakura' },
      { id: 'shin-akuma', name: 'Shin Akuma' },
      { id: 'shin_akuma', name: 'Shin Akuma' },
      { id: 'sodom', name: 'Sodom' },
      { id: 't-hawk', name: 'T. Hawk' },
      { id: 'training-mode', name: 'Training Mode' },
      { id: 't_hawk', name: 'T. Hawk' },
      { id: 'vega-(balrog-jp)', name: 'Vega (Balrog JP)' },
      { id: 'vega', name: 'Vega' },
      { id: 'versus', name: 'Versus' },
      { id: 'world-tour', name: 'World Tour' },
      { id: 'world_tour', name: 'World Tour' },
      { id: 'zangief', name: 'Zangief' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'snk-heroines-tag-team-frenzy',
    name: "SNK Heroines: Tag Team Frenzy",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'athena-asamiya', name: 'Athena Asamiya' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'snk-vs-capcom-svc-chaos',
    name: "SNK vs. Capcom: SVC Chaos",
    developer: "Capcom",
    releaseYear: 2003,
    characters: [
      { id: 'geese-howard', name: 'Geese Howard' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'ssf2',
    name: "Super Street Fighter II: The New Challengers",
    developer: "Capcom",
    releaseYear: 1993,
    characters: [
      { id: 'cammy', name: 'Cammy' },
      { id: 'dee-jay', name: 'Dee Jay' },
      { id: 'fei-long', name: 'Fei Long' },
      { id: 't-hawk', name: 'T Hawk' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'street-fighter-6',
    name: "Street Fighter 6",
    developer: "Capcom",
    releaseYear: 2023,
    characters: [
      { id: 'aki', name: 'A.K.I.' },
      { id: 'akuma', name: 'Akuma' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'dee-jay', name: 'Dee Jay' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'e-honda', name: 'E. Honda' },
      { id: 'ed', name: 'Ed' },
      { id: 'guile', name: 'Guile' },
      { id: 'jamie', name: 'Jamie' },
      { id: 'jp', name: 'JP' },
      { id: 'juri', name: 'Juri' },
      { id: 'ken', name: 'Ken' },
      { id: 'kimberly', name: 'Kimberly' },
      { id: 'luke', name: 'Luke' },
      { id: 'manon', name: 'Manon' },
      { id: 'marisa', name: 'Marisa' },
      { id: 'rashid', name: 'Rashid' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'terry-bogard', name: 'Terry Bogard' },
      { id: 'zangief', name: 'Zangief' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'street-fighter-alpha-3',
    name: "Street Fighter Alpha 3",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'adon', name: 'Adon' },
      { id: 'akuma-(gouki)', name: 'Akuma (Gouki)' },
      { id: 'balrog-(m-bison-jp)', name: 'Balrog (M. Bison JP)' },
      { id: 'birdie', name: 'Birdie' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'charlie-(nash)', name: 'Charlie (Nash)' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'cody', name: 'Cody' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'e-honda', name: 'E. Honda' },
      { id: 'gen', name: 'Gen' },
      { id: 'guile', name: 'Guile' },
      { id: 'guy', name: 'Guy' },
      { id: 'karin-kanzuki', name: 'Karin Kanzuki' },
      { id: 'ken', name: 'Ken' },
      { id: 'm-bison-(vega-jp)', name: 'M. Bison (Vega JP)' },
      { id: 'rolento', name: 'Rolento' },
      { id: 'rose', name: 'Rose' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sagart', name: 'Sagart' },
      { id: 'sakura', name: 'Sakura' },
      { id: 'sodom', name: 'Sodom' },
      { id: 'vega-(balrog-jp)', name: 'Vega (Balrog JP)' },
      { id: 'zangief', name: 'Zangief' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'street-fighter-ex3',
    name: "Street Fighter EX3",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'kairi', name: 'Kairi' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'skullomania', name: 'Skullomania' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'street-fighter-iii-3rd-strike',
    name: "Street Fighter III: 3rd Strike",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'akuma', name: 'Akuma' },
      { id: 'alex', name: 'Alex' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'dudley', name: 'Dudley' },
      { id: 'elena', name: 'Elena' },
      { id: 'gill', name: 'Gill' },
      { id: 'ibuki', name: 'Ibuki' },
      { id: 'ken', name: 'Ken' },
      { id: 'makoto', name: 'Makoto' },
      { id: 'necro', name: 'Necro' },
      { id: 'oro', name: 'Oro' },
      { id: 'q', name: 'Q' },
      { id: 'remy', name: 'Remy' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sean', name: 'Sean' },
      { id: 'twelve', name: 'Twelve' },
      { id: 'urien', name: 'Urien' },
      { id: 'yang', name: 'Yang' },
      { id: 'yun', name: 'Yun' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'street-fighter-v-champion-edition',
    name: "Street Fighter V: Champion Edition",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'luke', name: 'Luke' },
      { id: 'rashid', name: 'Rashid' },
      { id: 'ryu', name: 'Ryu' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'super-street-fighter-ii-turbo',
    name: "Super Street Fighter II Turbo",
    developer: "Capcom",
    releaseYear: 1994,
    characters: [
      { id: 'akuma', name: 'Akuma' },
      { id: 'balrog', name: 'Balrog' },
      { id: 'blanka', name: 'Blanka' },
      { id: 'cammy', name: 'Cammy' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'dee-jay', name: 'Dee Jay' },
      { id: 'dhalsim', name: 'Dhalsim' },
      { id: 'e-honda', name: 'E. Honda' },
      { id: 'fei-long', name: 'Fei Long' },
      { id: 'guile', name: 'Guile' },
      { id: 'ken', name: 'Ken' },
      { id: 'm-bison', name: 'M. Bison' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sagat', name: 'Sagat' },
      { id: 't-hawk', name: 'T. Hawk' },
      { id: 'vega', name: 'Vega' },
      { id: 'zangief', name: 'Zangief' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'tekken-8',
    name: "Tekken 8",
    developer: "SNK",
    releaseYear: 2024,
    characters: [
      { id: 'alisa', name: 'Alisa' },
      { id: 'anna-williams', name: 'ANNA WILLIAMS' },
      { id: 'armor-king', name: 'ARMOR KING' },
      { id: 'asuka-kazama', name: 'ASUKA KAZAMA' },
      { id: 'azucena-milagros', name: 'AZUCENA MILAGROS' },
      { id: 'azucena', name: 'Azucena' },
      { id: 'bryan-fury', name: 'BRYAN FURY' },
      { id: 'claudio-serafino', name: 'CLAUDIO SERAFINO' },
      { id: 'clive-rosfield', name: 'CLIVE ROSFIELD' },
      { id: 'devil-jin', name: 'DEVIL JIN' },
      { id: 'eddy-gordo', name: 'EDDY GORDO' },
      { id: 'fahkumram', name: 'FAHKUMRAM' },
      { id: 'feng-wei', name: 'FENG WEI' },
      { id: 'heihachi-mishima', name: 'HEIHACHI MISHIMA' },
      { id: 'hwoarang', name: 'Hwoarang' },
      { id: 'jack-8', name: 'JACK 8' },
      { id: 'jin-kazama', name: 'JIN KAZAMA' },
      { id: 'jun', name: 'Jun' },
      { id: 'kazuya-mishima', name: 'KAZUYA MISHIMA' },
      { id: 'king', name: 'KING' },
      { id: 'kuma-ii', name: 'KUMA II' },
      { id: 'lars', name: 'Lars' },
      { id: 'lee-chaolan', name: 'LEE CHAOLAN' },
      { id: 'leo', name: 'Leo' },
      { id: 'leroy-smith', name: 'LEROY SMITH' },
      { id: 'lidia-sobieska', name: 'LIDIA SOBIESKA' },
      { id: 'lili-de-rochefort', name: 'LILI DE ROCHEFORT' },
      { id: 'ling-xiaoyu', name: 'LING XIAOYU' },
      { id: 'marshall-law', name: 'MARSHALL LAW' },
      { id: 'nina', name: 'Nina' },
      { id: 'panda', name: 'PANDA' },
      { id: 'paul-phoenix', name: 'PAUL PHOENIX' },
      { id: 'raven', name: 'Raven' },
      { id: 'reina', name: 'REINA' },
      { id: 'sergei-dragunov', name: 'SERGEI DRAGUNOV' },
      { id: 'shaheen', name: 'SHAHEEN' },
      { id: 'steve', name: 'Steve' },
      { id: 'victor-chevalier', name: 'VICTOR CHEVALIER' },
      { id: 'yoshimitsu', name: 'Yoshimitsu' },
      { id: 'zafina', name: 'Zafina' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'tatsunoko-vs-capcom-ultimate-all-stars',
    name: "Tatsunoko vs. Capcom: Ultimate All-Stars",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'casshern', name: 'Casshern' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'tekkaman-blade', name: 'Tekkaman Blade' },
      { id: 'tekkaman', name: 'Tekkaman' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-2000',
    name: "The King of Fighters 2000",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'vanessa', name: 'Vanessa' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-2001',
    name: "The King of Fighters 2001",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'k9999', name: 'K9999' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-2002',
    name: "The King of Fighters 2002",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'kula-diamond', name: 'Kula Diamond' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-2003',
    name: "The King of Fighters 2003",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'ash-crimson', name: 'Ash Crimson' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-94',
    name: "The King of Fighters '94",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-95',
    name: "The King of Fighters '95",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'iori-yagami', name: 'Iori Yagami' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-96',
    name: "The King of Fighters '96",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'chizuru-kagura', name: 'Chizuru Kagura' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-97',
    name: "The King of Fighters '97",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'yashiro-nanakase', name: 'Yashiro Nanakase' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-98',
    name: "The King of Fighters '98",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'rugal-bernstein', name: 'Rugal Bernstein' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-98-ultimate-match',
    name: "The King of Fighters '98 Ultimate Match",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'athena-asamiya', name: 'Athena Asamiya' },
      { id: 'chris', name: 'Chris' },
      { id: 'iori-yagami', name: 'Iori Yagami' },
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi' },
      { id: 'leona-heidern', name: 'Leona Heidern' },
      { id: 'mai-shiranui', name: 'Mai Shiranui' },
      { id: 'ryo-sakazaki', name: 'Ryo Sakazaki' },
      { id: 'terry-bogard', name: 'Terry Bogard' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-99',
    name: "The King of Fighters '99",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'k', name: 'K\'' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-xiii',
    name: "The King of Fighters XIII",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'kyo-kusanagi', name: 'Kyo Kusanagi' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-xiv',
    name: "The King of Fighters XIV",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'shunei', name: 'Shun\'ei' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-king-of-fighters-xv',
    name: "The King of Fighters XV",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'ash-crimson', name: 'Ash Crimson' },
      { id: 'isla', name: 'Isla' },
      { id: 'k', name: 'K\'' },
      { id: 'shunei', name: 'Shun\'ei' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-last-blade',
    name: "The Last Blade",
    developer: "SNK",
    releaseYear: 1997,
    characters: [
      { id: 'kaede', name: 'Kaede' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'the-last-blade-2',
    name: "The Last Blade 2",
    developer: "SNK",
    releaseYear: 1997,
    characters: [
      { id: 'kaede-(awakened)', name: 'Kaede (Awakened)' },
      { id: 'moriya-minakata', name: 'Moriya Minakata' },
      { id: 'setsuna', name: 'Setsuna' },
      { id: 'yuki', name: 'Yuki' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'battle-arena-toshinden-3',
    name: "Battle Arena Toshinden 3",
    developer: "Tamsoft",
    releaseYear: 1998,
    characters: [
      { id: 'abel', name: 'Abel' },
      { id: 'adam', name: 'Adam' },
      { id: 'ataru', name: 'Ataru' },
      { id: 'bayhou', name: 'Bayhou' },
      { id: 'chaos', name: 'Chaos' },
      { id: 'cuiling', name: 'Cuiling' },
      { id: 'duke-b-rambert', name: 'Duke B. Rambert' },
      { id: 'eiji-shinjo', name: 'Eiji Shinjo' },
      { id: 'ellis', name: 'Ellis' },
      { id: 'fo-fai', name: 'Fo Fai' },
      { id: 'gaia', name: 'Gaia' },
      { id: 'kayin-amoh', name: 'Kayin Amoh' },
      { id: 'leon', name: 'Leon' },
      { id: 'miss-til', name: 'Miss Til' },
      { id: 'mondo', name: 'Mondo' },
      { id: 'nagisa', name: 'Nagisa' },
      { id: 'naru', name: 'Naru' },
      { id: 'rungo-iron', name: 'Rungo Iron' },
      { id: 'shizuku', name: 'Shizuku' },
      { id: 'sho-shinjo', name: 'Sho Shinjo' },
      { id: 'sofia', name: 'Sofia' },
      { id: 'ten-count', name: 'Ten Count' },
      { id: 'tracy', name: 'Tracy' },
      { id: 'veil', name: 'Veil' },
      { id: 'vermilion', name: 'Vermilion' },
      { id: 'zola', name: 'Zola' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'ultimate-marvel-vs-capcom-3',
    name: "Ultimate Marvel vs. Capcom 3",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'dante', name: 'Dante' },
      { id: 'doctor-doom', name: 'Doctor Doom' },
      { id: 'magneto', name: 'Magneto' },
      { id: 'sentinel', name: 'Sentinel' },
      { id: 'spider-man', name: 'Spider-Man' },
      { id: 'strider-hiryu', name: 'Strider Hiryu' },
      { id: 'vergil', name: 'Vergil' },
      { id: 'wesker', name: 'Wesker' },
      { id: 'wolverine', name: 'Wolverine' },
      { id: 'zero', name: 'Zero' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'ultimate-mortal-kombat-3',
    name: "Ultimate Mortal Kombat 3",
    developer: "NetherRealm Studios",
    releaseYear: 1998,
    characters: [
      { id: 'smoke-(human)', name: 'Smoke (Human)' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'ultra-street-fighter-iv',
    name: "Ultra Street Fighter IV",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'akuma', name: 'Akuma' },
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'decapre', name: 'Decapre' },
      { id: 'ken', name: 'Ken' },
      { id: 'ryu', name: 'Ryu' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'doctor-doom', name: 'Doctor Doom' },
      { id: 'magneto', name: 'Magneto' },
      { id: 'sentinel', name: 'Sentinel' },
      { id: 'spider-man', name: 'Spider-Man' },
      { id: 'strider-hiryu', name: 'Strider Hiryu' },
      { id: 'vergil', name: 'Vergil' },
      { id: 'wesker', name: 'Wesker' },
      { id: 'wolverine', name: 'Wolverine' },
      { id: 'zero', name: 'Zero' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'under-night-in-birth-ii-[sysceles]',
    name: "Under Night In-Birth II [Sys:Celes]",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'hyde', name: 'Hyde' },
      { id: 'linne', name: 'Linne' },
      { id: 'waldstein', name: 'Waldstein' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'vampire-hunter-2-darkstalkers-revenge',
    name: "Vampire Hunter 2: Darkstalkers",
    developer: "Capcom",
    releaseYear: 1997,
    characters: [
      { id: 'donovan-baine', name: 'Donovan Baine' },
      { id: 'huitzil-(phobos)', name: 'Huitzil (Phobos)' },
      { id: 'pyron', name: 'Pyron' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'vampire-savior-2-the-lord-of-vampire',
    name: "Vampire Savior 2: The Lord of Vampire",
    developer: "Capcom",
    releaseYear: 1997,
    characters: [
      { id: 'bb-hood-(bulleta)', name: 'B.B. Hood (Bulleta)' },
      { id: 'jedah-dohma', name: 'Jedah Dohma' },
      { id: 'lilith', name: 'Lilith' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'vampire-savior-the-lord-of-vampire',
    name: "Vampire Savior: The Lord of Vampire",
    developer: "Capcom",
    releaseYear: 1997,
    characters: [
      { id: 'anakaris', name: 'Anakaris' },
      { id: 'bb-hood-(bulleta)', name: 'B.B. Hood (Bulleta)' },
      { id: 'bishamon', name: 'Bishamon' },
      { id: 'demitri-maximoff', name: 'Demitri Maximoff' },
      { id: 'felicia', name: 'Felicia' },
      { id: 'huitzil-(phobos)', name: 'Huitzil (Phobos)' },
      { id: 'jedah-dohma', name: 'Jedah Dohma' },
      { id: 'jon-talbain', name: 'Jon Talbain' },
      { id: 'lilith', name: 'Lilith' },
      { id: 'lord-raptor-(zabel)', name: 'Lord Raptor (Zabel)' },
      { id: 'morrigan-aensland', name: 'Morrigan Aensland' },
      { id: 'pyron', name: 'Pyron' },
      { id: 'q-bee', name: 'Q-Bee' },
      { id: 'sasquatch', name: 'Sasquatch' },
      { id: 'victor-von-gerdenheim', name: 'Victor von Gerdenheim' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'vampirehunter2',
    name: "Vampire Hunter 2",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'donovan', name: 'Donovan' },
      { id: 'pyron', name: 'Pyron' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'vampiresavior',
    name: "Vampire Savior",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'anakaris', name: 'ANAKARIS' },
      { id: 'aulbath', name: 'AULBATH' },
      { id: 'bb-hood-(bulleta)', name: 'B.B. Hood (Bulleta)' },
      { id: 'bishamon', name: 'BISHAMON' },
      { id: 'bulleta', name: 'BULLETA' },
      { id: 'common-moves', name: 'COMMON MOVES' },
      { id: 'common_moves', name: 'COMMON MOVES' },
      { id: 'demitri-maximoff', name: 'DEMITRI MAXIMOFF' },
      { id: 'demitri_maximoff', name: 'DEMITRI MAXIMOFF' },
      { id: 'donovan', name: 'DONOVAN' },
      { id: 'es', name: 'ES' },
      { id: 'ex', name: 'EX' },
      { id: 'felicia', name: 'FELICIA' },
      { id: 'gallon', name: 'GALLON' },
      { id: 'huitzil-(phobos)', name: 'Huitzil (Phobos)' },
      { id: 'jedah-dohma', name: 'Jedah Dohma' },
      { id: 'jedah', name: 'JEDAH' },
      { id: 'jon-talbain', name: 'Jon Talbain' },
      { id: 'lei-lei', name: 'LEI-LEI' },
      { id: 'lei_lei', name: 'LEI-LEI' },
      { id: 'lilith', name: 'LILITH' },
      { id: 'lord-raptor-(zabel)', name: 'Lord Raptor (Zabel)' },
      { id: 'lord-zabel', name: 'LORD ZABEL' },
      { id: 'lord_zabel', name: 'LORD ZABEL' },
      { id: 'morrigan-aensland', name: 'MORRIGAN AENSLAND' },
      { id: 'morrigan_aensland', name: 'MORRIGAN AENSLAND' },
      { id: 'pyron', name: 'PYRON' },
      { id: 'q-bee', name: 'Q-BEE' },
      { id: 'q_bee', name: 'Q-BEE' },
      { id: 'sasquatch', name: 'SASQUATCH' },
      { id: 'victor-gerdenheim', name: 'VICTOR GERDENHEIM' },
      { id: 'victor-von-gerdenheim', name: 'Victor von Gerdenheim' },
      { id: 'victor_gerdenheim', name: 'VICTOR GERDENHEIM' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'vampiresavior2',
    name: "Vampire Savior 2",
    developer: "Capcom",
    releaseYear: 1998,
    characters: [
      { id: 'bb-hood', name: 'Bb Hood' },
      { id: 'jedah', name: 'Jedah' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'vf1',
    name: "Virtua Fighter 1 - Complete Move List (Exhaustive)",
    developer: "Sega",
    releaseYear: 1998,
    characters: [
      { id: 'akira-yuki', name: 'Akira Yuki' },
      { id: 'dural', name: 'Dural' },
      { id: 'jacky-bryant', name: 'Jacky Bryant' },
      { id: 'jeffry-mcwild', name: 'Jeffry McWild' },
      { id: 'kage-maru', name: 'Kage-Maru' },
      { id: 'lau-chan', name: 'Lau Chan' },
      { id: 'pai-chan', name: 'Pai Chan' },
      { id: 'sarah-bryant', name: 'Sarah Bryant' },
      { id: 'wolf-hawkfield', name: 'Wolf Hawkfield' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'virtua-fighter-2',
    name: "Virtua Fighter 2",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'akira-yuki', name: 'Akira Yuki' },
      { id: 'jacky-bryant', name: 'Jacky Bryant' },
      { id: 'jeffry-mcwild', name: 'Jeffry McWild' },
      { id: 'kage-maru', name: 'Kage-Maru' },
      { id: 'lau-chan', name: 'Lau Chan' },
      { id: 'lion-rafale', name: 'Lion Rafale' },
      { id: 'pai-chan', name: 'Pai Chan' },
      { id: 'sarah-bryant', name: 'Sarah Bryant' },
      { id: 'shun-di', name: 'Shun Di' },
      { id: 'wolf-hawkfield', name: 'Wolf Hawkfield' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'virtua-fighter-3',
    name: "Virtua Fighter 3",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'akira-yuki', name: 'Akira Yuki' },
      { id: 'aoi-umenokoji', name: 'Aoi Umenokoji' },
      { id: 'aoi-umenokouji', name: 'Aoi Umenokouji' },
      { id: 'jacky-bryant', name: 'Jacky Bryant' },
      { id: 'kage-maru', name: 'Kage-Maru' },
      { id: 'sarah-bryant', name: 'Sarah Bryant' },
      { id: 'taka-arashi', name: 'Taka-Arashi' },
      { id: 'wolf-hawkfield', name: 'Wolf Hawkfield' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'virtua-fighter-4',
    name: "Virtua Fighter 4",
    developer: "SNK",
    releaseYear: 1998,
    characters: [
      { id: 'akira-yuki', name: 'Akira Yuki' },
      { id: 'brad-burns', name: 'Brad Burns' },
      { id: 'goh-hinogami', name: 'Goh Hinogami' },
      { id: 'jacky-bryant', name: 'Jacky Bryant' },
      { id: 'lei-fei', name: 'Lei-Fei' },
      { id: 'vanessa-lewis', name: 'Vanessa Lewis' },
      { id: 'wolf-hawkfield', name: 'Wolf Hawkfield' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'vf5',
    name: "Virtua Fighter 5 Ultimate Showdown - Complete Move List (Exhaustive)",
    developer: "Sega",
    releaseYear: 1998,
    characters: [
      { id: 'akira-yuki', name: 'Akira Yuki' },
      { id: 'aoi-umenokouji', name: 'Aoi Umenokouji' },
      { id: 'brad-burns', name: 'Brad Burns' },
      { id: 'eileen', name: 'Eileen' },
      { id: 'el-blaze', name: 'El Blaze' },
      { id: 'goh-hinogami', name: 'Goh Hinogami' },
      { id: 'jacky-bryant', name: 'Jacky Bryant' },
      { id: 'jean-kujo', name: 'Jean Kujo' },
      { id: 'jeffry-mcwild', name: 'Jeffry McWild' },
      { id: 'kage-maru', name: 'Kage-Maru' },
      { id: 'lau-chan', name: 'Lau Chan' },
      { id: 'lei-fei', name: 'Lei-Fei' },
      { id: 'lion-rafale', name: 'Lion Rafale' },
      { id: 'pai-chan', name: 'Pai Chan' },
      { id: 'sarah-bryant', name: 'Sarah Bryant' },
      { id: 'shun-di', name: 'Shun Di' },
      { id: 'taka-arashi', name: 'Taka-Arashi' },
      { id: 'vanessa-lewis', name: 'Vanessa Lewis' },
      { id: 'wolf-hawkfield', name: 'Wolf Hawkfield' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'virtua-fighter',
    name: "Virtua Fighter",
    developer: "Sega",
    releaseYear: 1998,
    characters: [
      { id: 'akira-yuki', name: 'Akira Yuki' },
      { id: 'jacky-bryant', name: 'Jacky Bryant' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'waku-waku-7',
    name: "Waku Waku 7",
    developer: "SNK",
    releaseYear: 1996,
    characters: [
      { id: 'arina-makihara', name: 'Arina Makihara' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'world-heroes-perfect',
    name: "World Heroes Perfect",
    developer: "SNK",
    releaseYear: 1995,
    characters: [
      { id: 'hanzo', name: 'Hanzo' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  
      { id: 'cyclops', name: 'Cyclops' },
      { id: 'psylocke', name: 'Psylocke' },
      { id: 'wolverine', name: 'Wolverine' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  },
  
  {
    id: 'xmvsf',
    name: "X-Men vs. Street Fighter",
    developer: "Capcom",
    releaseYear: 1996,
    characters: [
      { id: 'chun-li', name: 'Chun-Li' },
      { id: 'cyclops', name: 'Cyclops' },
      { id: 'ryu', name: 'Ryu' },
      { id: 'sabretooth', name: 'Sabretooth' },
      { id: 'wolverine', name: 'Wolverine' }
    ],
    tabs: ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves']
  }
];
