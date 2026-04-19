export type ControllerType = 'playstation' | 'xbox' | 'arcade' | 'switch' | 'neogeo' | 'wii' | 'mk' | 'genesis' | 'snes' | 'sfami' | 'cps' | 'tekken';

const GLYPH_LABEL_MAP: Record<string, Record<ControllerType, string>> = {
  'LP': { playstation: '▢', xbox: 'X', arcade: 'LP', switch: 'Y', neogeo: 'A', wii: '1', mk: 'LP', genesis: 'X', snes: 'Y', sfami: 'Y', cps: 'LP', tekken: '1' },
  'RP': { playstation: '△', xbox: 'Y', arcade: 'RP', switch: 'X', neogeo: 'C', wii: '2', mk: 'BL', genesis: 'Y', snes: 'X', sfami: 'X', cps: 'MP', tekken: '2' },
  'MP': { playstation: '△', xbox: 'Y', arcade: 'MP', switch: 'X', neogeo: 'C', wii: '2', mk: 'BL', genesis: 'Y', snes: 'X', sfami: 'X', cps: 'MP', tekken: '2' },
  'HP': { playstation: 'R1', xbox: 'RB', arcade: 'HP', switch: 'R', neogeo: 'C', wii: 'A', mk: 'HP', genesis: 'Z', snes: 'L', sfami: 'L', cps: 'HP', tekken: '1+2' },
  'LK': { playstation: '✕', xbox: 'A', arcade: 'LK', switch: 'B', neogeo: 'B', wii: 'B', mk: 'LK', genesis: 'A', snes: 'B', sfami: 'B', cps: 'LK', tekken: '3' },
  'RK': { playstation: '◯', xbox: 'B', arcade: 'RK', switch: 'A', neogeo: 'D', wii: '-', mk: 'R', genesis: 'B', snes: 'A', sfami: 'A', cps: 'MK', tekken: '4' },
  'MK': { playstation: '◯', xbox: 'B', arcade: 'MK', switch: 'A', neogeo: 'D', wii: '-', mk: 'R', genesis: 'B', snes: 'A', sfami: 'A', cps: 'MK', tekken: '4' },
  'HK': { playstation: 'R2', xbox: 'RT', arcade: 'HK', switch: 'ZR', neogeo: 'D', wii: '+', mk: 'HK', genesis: 'C', snes: 'R', sfami: 'R', cps: 'HK', tekken: '3+4' },
  '1': { playstation: '▢', xbox: 'X', arcade: 'LP', switch: 'Y', neogeo: 'A', wii: '1', mk: '1', genesis: 'X', snes: 'Y', sfami: 'Y', cps: 'LP', tekken: '1' },
  '2': { playstation: '△', xbox: 'Y', arcade: 'MP', switch: 'X', neogeo: 'C', wii: '2', mk: '2', genesis: 'Y', snes: 'X', sfami: 'X', cps: 'MP', tekken: '2' },
  '3': { playstation: '✕', xbox: 'A', arcade: 'LK', switch: 'B', neogeo: 'B', wii: 'B', mk: '3', genesis: 'A', snes: 'B', sfami: 'B', cps: 'LK', tekken: '3' },
  '4': { playstation: '◯', xbox: 'B', arcade: 'RK', switch: 'A', neogeo: 'D', wii: '-', mk: '4', genesis: 'B', snes: 'A', sfami: 'A', cps: 'MK', tekken: '4' },
  'BL': { playstation: 'R2', xbox: 'RT', arcade: 'BL', switch: 'ZR', neogeo: 'D', wii: '+', mk: 'BL', genesis: 'C', snes: 'R', sfami: 'R', cps: 'HK', tekken: 'BL' },
  'R': { playstation: 'L2', xbox: 'LT', arcade: 'R', switch: 'ZL', neogeo: 'D', wii: '-', mk: 'R', genesis: 'Z', snes: 'L', sfami: 'L', cps: 'HP', tekken: 'R' },
  'EN': { playstation: 'R1', xbox: 'RB', arcade: 'EN', switch: 'R', neogeo: 'A', wii: '1', mk: 'EN', genesis: 'X', snes: 'Y', sfami: 'Y', cps: 'LP', tekken: 'TAG' },
  'P': { playstation: 'P', xbox: 'P', arcade: 'P', switch: 'P', neogeo: 'P', wii: 'P', mk: 'P', genesis: 'P', snes: 'P', sfami: 'P', cps: 'P', tekken: 'P' },
  'K': { playstation: 'K', xbox: 'K', arcade: 'K', switch: 'K', neogeo: 'K', wii: 'K', mk: 'K', genesis: 'K', snes: 'K', sfami: 'K', cps: 'K', tekken: 'K' },
  'PP': { playstation: 'PP', xbox: 'PP', arcade: 'PP', switch: 'PP', neogeo: 'PP', wii: 'PP', mk: 'PP', genesis: 'PP', snes: 'PP', sfami: 'PP', cps: 'PP', tekken: '1+2' },
  'KK': { playstation: 'KK', xbox: 'KK', arcade: 'KK', switch: 'KK', neogeo: 'KK', wii: 'KK', mk: 'KK', genesis: 'KK', snes: 'KK', sfami: 'KK', cps: 'KK', tekken: '3+4' },
  'PPP': { playstation: 'PPP', xbox: 'PPP', arcade: 'PPP', switch: 'PPP', neogeo: 'PPP', wii: 'PPP', mk: 'PPP', genesis: 'PPP', snes: 'PPP', sfami: 'PPP', cps: 'PPP', tekken: 'ALL' },
  'KKK': { playstation: 'KKK', xbox: 'KKK', arcade: 'KKK', switch: 'KKK', neogeo: 'KKK', wii: 'KKK', mk: 'KKK', genesis: 'KKK', snes: 'KKK', sfami: 'KKK', cps: 'KKK', tekken: 'ALL' },
  'LIGHT PUNCH': { playstation: '▢', xbox: 'X', arcade: 'LP', switch: 'Y', neogeo: 'A', wii: '1', mk: 'LP', genesis: 'X', snes: 'Y', sfami: 'Y', cps: 'LP', tekken: '1' },
  'MEDIUM PUNCH': { playstation: '△', xbox: 'Y', arcade: 'MP', switch: 'X', neogeo: 'C', wii: '2', mk: 'BL', genesis: 'Y', snes: 'X', sfami: 'X', cps: 'MP', tekken: '2' },
  'HEAVY PUNCH': { playstation: 'R1', xbox: 'RB', arcade: 'HP', switch: 'R', neogeo: 'C', wii: 'A', mk: 'HP', genesis: 'Z', snes: 'L', sfami: 'L', cps: 'HP', tekken: '1+2' },
  'LIGHT KICK': { playstation: '✕', xbox: 'A', arcade: 'LK', switch: 'B', neogeo: 'B', wii: 'B', mk: 'LK', genesis: 'A', snes: 'B', sfami: 'B', cps: 'LK', tekken: '3' },
  'MEDIUM KICK': { playstation: '◯', xbox: 'B', arcade: 'MK', switch: 'A', neogeo: 'D', wii: '-', mk: 'R', genesis: 'B', snes: 'A', sfami: 'A', cps: 'MK', tekken: '4' },
  'HEAVY KICK': { playstation: 'R2', xbox: 'RT', arcade: 'HK', switch: 'ZR', neogeo: 'D', wii: '+', mk: 'HK', genesis: 'C', snes: 'R', sfami: 'R', cps: 'HK', tekken: '3+4' },
  'PUNCH': { playstation: 'P', xbox: 'P', arcade: 'P', switch: 'P', neogeo: 'P', wii: 'P', mk: 'P', genesis: 'P', snes: 'P', sfami: 'P', cps: 'P', tekken: 'P' },
  'KICK': { playstation: 'K', xbox: 'K', arcade: 'K', switch: 'K', neogeo: 'K', wii: 'K', mk: 'K', genesis: 'K', snes: 'K', sfami: 'K', cps: 'K', tekken: 'K' },
  'CANCEL': { playstation: '~', xbox: '~', arcade: '~', switch: '~', neogeo: '~', wii: '~', mk: '~', genesis: '~', snes: '~', sfami: '~', cps: '~', tekken: '~' },
  // Directionals
  'back': { playstation: '←', xbox: '←', arcade: '←', switch: '←', neogeo: '←', wii: '←', mk: '←', genesis: '←', snes: '←', sfami: '←', cps: '←', tekken: '←' },
  'forward': { playstation: '→', xbox: '→', arcade: '→', switch: '→', neogeo: '→', wii: '→', mk: '→', genesis: '→', snes: '→', sfami: '→', cps: '→', tekken: '→' },
  'down': { playstation: '↓', xbox: '↓', arcade: '↓', switch: '↓', neogeo: '↓', wii: '↓', mk: '↓', genesis: '↓', snes: '↓', sfami: '↓', cps: '↓', tekken: '↓' },
  'up': { playstation: '↑', xbox: '↑', arcade: '↑', switch: '↑', neogeo: '↑', wii: '↑', mk: '↑', genesis: '↑', snes: '↑', sfami: '↑', cps: '↑', tekken: '↑' },
  'down-forward': { playstation: '↘', xbox: '↘', arcade: '↘', switch: '↘', neogeo: '↘', wii: '↘', mk: '↘', genesis: '↘', snes: '↘', sfami: '↘', cps: '↘', tekken: '↘' },
  'down-back': { playstation: '↙', xbox: '↙', arcade: '↙', switch: '↙', neogeo: '↙', wii: '↙', mk: '↙', genesis: '↙', snes: '↙', sfami: '↙', cps: '↙', tekken: '↙' },
  'up-forward': { playstation: '↗', xbox: '↗', arcade: '↗', switch: '↗', neogeo: '↗', wii: '↗', mk: '↗', genesis: '↗', snes: '↗', sfami: '↗', cps: '↗', tekken: '↗' },
  'up-back': { playstation: '↖', xbox: '↖', arcade: '↖', switch: '↖', neogeo: '↖', wii: '↖', mk: '↖', genesis: '↖', snes: '↖', sfami: '↖', cps: '↖', tekken: '↖' },
  '360': { playstation: '↻', xbox: '↻', arcade: '↻', switch: '↻', neogeo: '↻', wii: '↻', mk: '↻', genesis: '↻', snes: '↻', sfami: '↻', cps: '↻', tekken: '↻' },
  '720': { playstation: '↻↻', xbox: '↻↻', arcade: '↻↻', switch: '↻↻', neogeo: '↻↻', wii: '↻↻', mk: '↻↻', genesis: '↻↻', snes: '↻↻', sfami: '↻↻', cps: '↻↻', tekken: '↻↻' },
};

export const getGlyphLabel = (input: string, controller: ControllerType, notationSystem: string = 'traditional'): string => {
  const normInput = input.replace(/[\][]]/g, '').toUpperCase();
  const lowerInput = input.replace(/[\][]]/g, '').toLowerCase();

  if (notationSystem === 'numpad' && /^[12346789]$/.test(normInput) && !['tekken', 'mk'].includes(controller)) {
    const numpadMap: Record<string, string> = {
      '1': '↙', '2': '↓', '3': '↘',
      '4': '←', '6': '→',
      '7': '↖', '8': '↑', '9': '↗'
    };
    return numpadMap[normInput] || normInput;
  }

  if (GLYPH_LABEL_MAP[normInput]) return GLYPH_LABEL_MAP[normInput][controller];
  if (GLYPH_LABEL_MAP[lowerInput]) return GLYPH_LABEL_MAP[lowerInput][controller];
  return input.replace(/[\][]]/g, '');
};

export const getGlyphColor = (input: string, controller: ControllerType): string => {
  const normInput = input.replace(/[\][]/g, '').toUpperCase();

  if (controller === 'mk') {
    if (normInput === 'BL') return '#94a3b8';
    if (normInput === 'R') return '#22c55e';
    if (['LP', 'HP', '1', '2'].includes(normInput)) return '#ef4444';
    if (['LK', 'HK', '3', '4'].includes(normInput)) return '#3b82f6';
    return '#888888';
  }

  const psColors: Record<string, string> = {
    'LP': '#ec4899', 'LIGHT PUNCH': '#ec4899', 'FRONT PUNCH': '#ec4899',
    'RP': '#22c55e', 'RIGHT PUNCH': '#22c55e', 
    'MP': '#22c55e', 'MEDIUM PUNCH': '#22c55e', 'BACK PUNCH': '#22c55e',
    'HP': '#e2e8f0', 'HEAVY PUNCH': '#e2e8f0',
    'LK': '#3b82f6', 'LIGHT KICK': '#3b82f6', 'FRONT KICK': '#3b82f6',
    'RK': '#ef4444', 'RIGHT KICK': '#ef4444',
    'MK': '#ef4444', 'MEDIUM KICK': '#ef4444', 'BACK KICK': '#ef4444',
    'HK': '#94a3b8', 'HEAVY KICK': '#94a3b8',
  };
  
  const xboxColors: Record<string, string> = {
    'LP': '#3b82f6', 'LIGHT PUNCH': '#3b82f6', 'FRONT PUNCH': '#3b82f6',
    'RP': '#eab308', 'RIGHT PUNCH': '#eab308',
    'MP': '#eab308', 'MEDIUM PUNCH': '#eab308', 'BACK PUNCH': '#eab308',
    'HP': '#e2e8f0', 'HEAVY PUNCH': '#e2e8f0',
    'LK': '#22c55e', 'LIGHT KICK': '#22c55e', 'FRONT KICK': '#22c55e',
    'RK': '#ef4444', 'RIGHT KICK': '#ef4444',
    'MK': '#ef4444', 'MEDIUM KICK': '#ef4444', 'BACK KICK': '#ef4444',
    'HK': '#94a3b8', 'HEAVY KICK': '#94a3b8',
  };
  
  const switchColors: Record<string, string> = {
    'LP': '#22c55e', 'LIGHT PUNCH': '#22c55e', 'FRONT PUNCH': '#22c55e',
    'RP': '#3b82f6', 'RIGHT PUNCH': '#3b82f6',
    'MP': '#3b82f6', 'MEDIUM PUNCH': '#3b82f6', 'BACK PUNCH': '#3b82f6',
    'HP': '#e2e8f0', 'HEAVY PUNCH': '#e2e8f0',
    'LK': '#eab308', 'LIGHT KICK': '#eab308', 'FRONT KICK': '#eab308',
    'RK': '#ef4444', 'RIGHT KICK': '#ef4444',
    'MK': '#ef4444', 'MEDIUM KICK': '#ef4444', 'BACK KICK': '#ef4444',
    'HK': '#94a3b8', 'HEAVY KICK': '#94a3b8',
  };

  const neogeoColors: Record<string, string> = {
    'LP': '#ef4444', 'LIGHT PUNCH': '#ef4444', // Red A
    'LK': '#eab308', 'LIGHT KICK': '#eab308', // Yellow B
    'HP': '#22c55e', 'HEAVY PUNCH': '#22c55e', 'MP': '#22c55e', 'MEDIUM PUNCH': '#22c55e', // Green C
    'HK': '#3b82f6', 'HEAVY KICK': '#3b82f6', 'MK': '#3b82f6', 'MEDIUM KICK': '#3b82f6', // Blue D
  };

  const wiiColors: Record<string, string> = {
    'LP': '#ffffff', 'LIGHT PUNCH': '#ffffff', 
    'LK': '#ffffff', 'LIGHT KICK': '#ffffff', 
    'HP': '#ef4444', 'HEAVY PUNCH': '#ef4444', 'MP': '#ef4444', 'MEDIUM PUNCH': '#ef4444',
    'HK': '#1f2937', 'HEAVY KICK': '#1f2937', 'MK': '#1f2937', 'MEDIUM KICK': '#1f2937',
  };

  const snesColors: Record<string, string> = {
    'LP': '#a0a0e0', 'LIGHT PUNCH': '#a0a0e0', // Y Lavender
    'MP': '#a0a0e0', 'MEDIUM PUNCH': '#a0a0e0', // X Lavender
    'HP': '#9ca3af', 'HEAVY PUNCH': '#9ca3af', // L Grey
    'LK': '#503080', 'LIGHT KICK': '#503080', // B Purple
    'MK': '#503080', 'MEDIUM KICK': '#503080', // A Purple
    'HK': '#9ca3af', 'HEAVY KICK': '#9ca3af', // R Grey
  };

  const sfamiColors: Record<string, string> = {
    'LP': '#22c55e', 'LIGHT PUNCH': '#22c55e', // Y Green
    'MP': '#3b82f6', 'MEDIUM PUNCH': '#3b82f6', // X Blue
    'HP': '#9ca3af', 'HEAVY PUNCH': '#9ca3af', // L Grey
    'LK': '#eab308', 'LIGHT KICK': '#eab308', // B Yellow
    'MK': '#ef4444', 'MEDIUM KICK': '#ef4444', // A Red
    'HK': '#9ca3af', 'HEAVY KICK': '#9ca3af', // R Grey
  };

  const genesisColors: Record<string, string> = {
    'LP': '#1f2937', 'LIGHT PUNCH': '#1f2937',
    'MP': '#1f2937', 'MEDIUM PUNCH': '#1f2937',
    'HP': '#1f2937', 'HEAVY PUNCH': '#1f2937',
    'LK': '#1f2937', 'LIGHT KICK': '#1f2937',
    'MK': '#1f2937', 'MEDIUM KICK': '#1f2937',
    'HK': '#1f2937', 'HEAVY KICK': '#1f2937',
  };

  const cpsColors: Record<string, string> = {
    'LP': '#ef4444', 'LIGHT PUNCH': '#ef4444',
    'MP': '#eab308', 'MEDIUM PUNCH': '#eab308',
    'HP': '#3b82f6', 'HEAVY PUNCH': '#3b82f6',
    'LK': '#ef4444', 'LIGHT KICK': '#ef4444',
    'MK': '#eab308', 'MEDIUM KICK': '#eab308',
    'HK': '#3b82f6', 'HEAVY KICK': '#3b82f6',
  };

  const tekkenColors: Record<string, string> = {
    '1': '#3b82f6', 'LP': '#3b82f6', 'LIGHT PUNCH': '#3b82f6', // Blue
    '2': '#3b82f6', 'RP': '#3b82f6', 'MP': '#3b82f6', 'MEDIUM PUNCH': '#3b82f6', // Blue
    '3': '#eab308', 'LK': '#eab308', 'LIGHT KICK': '#eab308', // Yellow
    '4': '#eab308', 'RK': '#eab308', 'MK': '#eab308', 'MEDIUM KICK': '#eab308', // Yellow
    'TAG': '#ef4444', 'EN': '#ef4444' // Red
  };

  const animeColors: Record<string, string> = {
    // DBFZ
    'L': '#3b82f6', // Blue
    'M': '#eab308', // Yellow
    'H': '#ef4444', // Red
    'S': '#22c55e', // Green
    'A1': '#9ca3af', // Grey
    'A2': '#9ca3af',
    // GGST
    'P': '#ec4899', // Pink
    'K': '#3b82f6', // Blue
    'D': '#f97316', // Orange
  };

  if (['P', 'K', 'PP', 'KK', 'PPP', 'KKK', 'ALL'].includes(normInput) && !animeColors[normInput]) {
    if (controller === 'playstation' || controller === 'wii') return '#ffffff';
    return '#1f2937';
  }

  if (animeColors[normInput]) return animeColors[normInput];

  if (controller === 'playstation') return psColors[normInput] || '#ffffff';
  if (controller === 'xbox') return xboxColors[normInput] || '#1f2937';
  if (controller === 'switch') return switchColors[normInput] || '#1f2937';
  if (controller === 'neogeo') return neogeoColors[normInput] || '#1f2937';
  if (controller === 'wii') return wiiColors[normInput] || '#ffffff';
  if (controller === 'snes') return snesColors[normInput] || '#1f2937';
  if (controller === 'sfami') return sfamiColors[normInput] || '#1f2937';
  if (controller === 'genesis') return genesisColors[normInput] || '#1f2937';
  if (controller === 'cps') return cpsColors[normInput] || '#1f2937';
  if (controller === 'tekken') return tekkenColors[normInput] || '#1f2937';
  
  return '#1f2937'; // Arcade generic
};
