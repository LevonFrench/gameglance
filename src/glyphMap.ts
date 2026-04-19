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
  'A': { playstation: '▢', xbox: 'X', arcade: 'A', switch: 'Y', neogeo: 'A', wii: '1', mk: 'LP', genesis: 'X', snes: 'Y', sfami: 'Y', cps: 'LP', tekken: '1' },
  'B': { playstation: '✕', xbox: 'A', arcade: 'B', switch: 'B', neogeo: 'B', wii: 'B', mk: 'LK', genesis: 'A', snes: 'B', sfami: 'B', cps: 'LK', tekken: '3' },
  'C': { playstation: '△', xbox: 'Y', arcade: 'C', switch: 'X', neogeo: 'C', wii: '2', mk: 'HP', genesis: 'Y', snes: 'X', sfami: 'X', cps: 'HP', tekken: '2' },
  'D': { playstation: '◯', xbox: 'B', arcade: 'D', switch: 'A', neogeo: 'D', wii: '-', mk: 'HK', genesis: 'C', snes: 'A', sfami: 'A', cps: 'HK', tekken: '4' },
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
  'AST1': { playstation: 'L1', xbox: 'LB', arcade: 'A1', switch: 'L', neogeo: 'A', wii: '1', mk: 'A1', genesis: 'Z', snes: 'L', sfami: 'L', cps: 'A1', tekken: 'A1' },
  'AST2': { playstation: 'L2', xbox: 'LT', arcade: 'A2', switch: 'ZL', neogeo: 'B', wii: '2', mk: 'A2', genesis: 'C', snes: 'R', sfami: 'R', cps: 'A2', tekken: 'A2' },
  'KAMEO': { playstation: 'R1', xbox: 'RB', arcade: 'KAMEO', switch: 'R', neogeo: 'A', wii: '1', mk: 'KAMEO', genesis: 'Z', snes: 'L', sfami: 'L', cps: 'A1', tekken: 'R1' },
  'FS': { playstation: 'L2', xbox: 'LT', arcade: 'FS', switch: 'ZL', neogeo: 'B', wii: '2', mk: 'FS', genesis: 'C', snes: 'R', sfami: 'R', cps: 'A2', tekken: 'L2' },
  'TH': { playstation: 'L1', xbox: 'LB', arcade: 'TH', switch: 'L', neogeo: 'A', wii: '1', mk: 'TH', genesis: 'X', snes: 'L', sfami: 'L', cps: 'TH', tekken: 'L1' },
  'G': { playstation: '✕', xbox: 'A', arcade: 'G', switch: 'B', neogeo: 'A', wii: 'B', mk: 'BL', genesis: 'A', snes: 'B', sfami: 'B', cps: 'LK', tekken: 'G' },
};

export const getGlyphLabel = (input: string, controller: ControllerType): string => {
  const normInput = input.replace(/[\][]]/g, '').toUpperCase();
  const lowerInput = input.replace(/[\][]]/g, '').toLowerCase();

  if (GLYPH_LABEL_MAP[normInput]) return GLYPH_LABEL_MAP[normInput][controller];
  if (GLYPH_LABEL_MAP[lowerInput]) return GLYPH_LABEL_MAP[lowerInput][controller];
  return input.replace(/[\][]]/g, '');
};

export const getGlyphColor = (input: string, controller: ControllerType): string => {
  const normInput = input.replace(/[\][]/g, '').toUpperCase();

  // Universal Aliasing Groups
  const isLp = ['LP', 'LIGHT PUNCH', 'FRONT PUNCH', 'A', 'A1', 'P', '1', 'L'].includes(normInput);
  const isMp = ['MP', 'MEDIUM PUNCH', 'BACK PUNCH', 'A2', 'RP', 'RIGHT PUNCH', 'C', 'S', '2', 'M'].includes(normInput);
  const isHp = ['HP', 'HEAVY PUNCH', 'R1', 'RB', 'R', 'SKILL', 'W'].includes(normInput);
  
  const isLk = ['LK', 'LIGHT KICK', 'FRONT KICK', 'B', 'K', '3', 'U'].includes(normInput);
  const isMk = ['MK', 'MEDIUM KICK', 'BACK KICK', 'RK', 'RIGHT KICK', 'D', 'H', '4'].includes(normInput);
  const isHk = ['HK', 'HEAVY KICK', 'R2', 'RT'].includes(normInput);
  const isG = ['G', 'GUARD'].includes(normInput);

  const isL1 = ['AST1', 'TH'].includes(normInput);
  const isL2 = ['AST2', 'FS'].includes(normInput);
  const isR1 = ['KAMEO'].includes(normInput);

  if (controller === 'mk') {
    if (normInput === 'BL' || isG) return '#94a3b8';
    if (normInput === 'R' || isR1) return '#22c55e'; // Green for R/Kameo in MK
    if (isLp || isHp) return '#ef4444'; // Red
    if (isLk || isMk || isHk) return '#3b82f6'; // Blue
    return '#888888';
  }

  // --- Controller Specific Color Definitions ---
  
  const getPsColor = () => {
    if (isG) return '#22c55e'; // Green
    if (isLp) return '#ec4899'; // Pink
    if (isLk) return '#3b82f6'; // Blue
    if (isMp) return '#22c55e'; // Green
    if (isMk) return '#ef4444'; // Red
    if (isHp || isHk || isL1 || isL2 || isR1) return '#e2e8f0'; // Grey/White
    return null;
  };

  const getXboxColor = () => {
    if (isG) return '#22c55e'; // Green
    if (isLp) return '#3b82f6'; // Blue
    if (isLk) return '#22c55e'; // Green
    if (isMp) return '#eab308'; // Yellow
    if (isMk) return '#ef4444'; // Red
    if (isHp || isHk || isL1 || isL2 || isR1) return '#e2e8f0'; // Grey/White
    return null;
  };

  const getSwitchColor = () => {
    if (isG) return '#22c55e'; // Green
    if (isLp) return '#22c55e'; // Green
    if (isLk) return '#eab308'; // Yellow
    if (isMp) return '#3b82f6'; // Blue
    if (isMk) return '#ef4444'; // Red
    if (isHp || isHk || isL1 || isL2 || isR1) return '#e2e8f0'; // Grey/White
    return null;
  };

  const getNeogeoColor = () => {
    if (isLp) return '#ef4444'; // Red
    if (isLk) return '#eab308'; // Yellow
    if (isMp || isHp) return '#22c55e'; // Green
    if (isMk || isHk) return '#3b82f6'; // Blue
    return null;
  };

  const getWiiColor = () => {
    if (isLp || isLk) return '#ffffff'; // White
    if (isMp || isHp) return '#ef4444'; // Red
    if (isMk || isHk) return '#1f2937'; // Dark
    return null;
  };

  const getSnesColor = () => {
    if (isLp || isMp) return '#a0a0e0'; // Lavender
    if (isLk || isMk) return '#503080'; // Purple
    if (isHp || isHk) return '#9ca3af'; // Grey
    return null;
  };

  const getSfamiColor = () => {
    if (isLp) return '#22c55e'; // Green
    if (isLk) return '#eab308'; // Yellow
    if (isMp) return '#3b82f6'; // Blue
    if (isMk) return '#ef4444'; // Red
    if (isHp || isHk) return '#9ca3af'; // Grey
    return null;
  };

  const getCpsColor = () => {
    if (isLp || isLk) return '#ef4444'; // Red
    if (isMp || isMk) return '#eab308'; // Yellow
    if (isHp || isHk) return '#3b82f6'; // Blue
    return null;
  };

  const getTekkenColor = () => {
    if (isLp || isMp) return '#3b82f6'; // Blue
    if (isLk || isMk) return '#eab308'; // Yellow
    if (['TAG', 'EN'].includes(normInput)) return '#ef4444'; // Red
    return null;
  };

  const getAnimeColor = () => {
    // DBFZ specific aliases
    if (normInput === 'A1' || normInput === 'A2') return '#9ca3af'; // Grey
    // GGST specific Dust
    if (normInput === 'D') return '#f97316'; // Orange
    
    // Generic Anime defaults
    if (isLp) return '#ec4899'; // Pink (P)
    if (isLk) return '#3b82f6'; // Blue (K)
    if (isMp) return '#22c55e'; // Green (S)
    if (isMk) return '#ef4444'; // Red (H)
    return null;
  };

  // Special multi-button inputs
  if (['P', 'K', 'PP', 'KK', 'PPP', 'KKK', 'ALL'].includes(normInput) && !getAnimeColor()) {
    if (controller === 'playstation' || controller === 'wii') return '#ffffff';
    return '#1f2937';
  }

  // Resolve color based on controller priority
  let color: string | null = null;
  if (controller === 'playstation') color = getPsColor();
  else if (controller === 'xbox') color = getXboxColor();
  else if (controller === 'switch') color = getSwitchColor();
  else if (controller === 'neogeo') color = getNeogeoColor();
  else if (controller === 'wii') color = getWiiColor();
  else if (controller === 'snes') color = getSnesColor();
  else if (controller === 'sfami') color = getSfamiColor();
  else if (controller === 'cps') color = getCpsColor();
  else if (controller === 'tekken') color = getTekkenColor();

  if (color) return color;
  
  // Fallback to anime color mappings if standard controller didn't catch it
  const fallback = getAnimeColor();
  if (fallback) return fallback;

  return '#1f2937'; // Arcade generic
};
