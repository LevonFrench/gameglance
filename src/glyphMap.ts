export type ControllerType = 'playstation' | 'xbox' | 'arcade' | 'switch';

export const getGlyphLabel = (input: string, controller: ControllerType): string => {
  const normInput = input.replace(/[\[\]]/g, '').toUpperCase();
  const lowerInput = input.replace(/[\[\]]/g, '').toLowerCase();

  const map: Record<string, Record<ControllerType, string>> = {
    'LP': { playstation: '▢', xbox: 'X', arcade: 'LP', switch: 'Y' },
    'RP': { playstation: '△', xbox: 'Y', arcade: 'RP', switch: 'X' },
    'MP': { playstation: '△', xbox: 'Y', arcade: 'MP', switch: 'X' },
    'HP': { playstation: 'R1', xbox: 'RB', arcade: 'HP', switch: 'R' },
    'LK': { playstation: '✕', xbox: 'A', arcade: 'LK', switch: 'B' },
    'RK': { playstation: '◯', xbox: 'B', arcade: 'RK', switch: 'A' },
    'MK': { playstation: '◯', xbox: 'B', arcade: 'MK', switch: 'A' },
    'HK': { playstation: 'R2', xbox: 'RT', arcade: 'HK', switch: 'ZR' },
    'P': { playstation: 'P', xbox: 'P', arcade: 'P', switch: 'P' },
    'K': { playstation: 'K', xbox: 'K', arcade: 'K', switch: 'K' },
    'PP': { playstation: 'PP', xbox: 'PP', arcade: 'PP', switch: 'PP' },
    'KK': { playstation: 'KK', xbox: 'KK', arcade: 'KK', switch: 'KK' },
    'PPP': { playstation: 'PPP', xbox: 'PPP', arcade: 'PPP', switch: 'PPP' },
    'KKK': { playstation: 'KKK', xbox: 'KKK', arcade: 'KKK', switch: 'KKK' },
    'LIGHT PUNCH': { playstation: '▢', xbox: 'X', arcade: 'LP', switch: 'Y' },
    'MEDIUM PUNCH': { playstation: '△', xbox: 'Y', arcade: 'MP', switch: 'X' },
    'HEAVY PUNCH': { playstation: 'R1', xbox: 'RB', arcade: 'HP', switch: 'R' },
    'LIGHT KICK': { playstation: '✕', xbox: 'A', arcade: 'LK', switch: 'B' },
    'MEDIUM KICK': { playstation: '◯', xbox: 'B', arcade: 'MK', switch: 'A' },
    'HEAVY KICK': { playstation: 'R2', xbox: 'RT', arcade: 'HK', switch: 'ZR' },
    'PUNCH': { playstation: 'P', xbox: 'P', arcade: 'P', switch: 'P' },
    'KICK': { playstation: 'K', xbox: 'K', arcade: 'K', switch: 'K' },
    'CANCEL': { playstation: '~', xbox: '~', arcade: '~', switch: '~' },
    // Directionals
    'back': { playstation: '←', xbox: '←', arcade: '←', switch: '←' },
    'forward': { playstation: '→', xbox: '→', arcade: '→', switch: '→' },
    'down': { playstation: '↓', xbox: '↓', arcade: '↓', switch: '↓' },
    'up': { playstation: '↑', xbox: '↑', arcade: '↑', switch: '↑' },
    'down-forward': { playstation: '↘', xbox: '↘', arcade: '↘', switch: '↘' },
    'down-back': { playstation: '↙', xbox: '↙', arcade: '↙', switch: '↙' },
    'up-forward': { playstation: '↗', xbox: '↗', arcade: '↗', switch: '↗' },
    'up-back': { playstation: '↖', xbox: '↖', arcade: '↖', switch: '↖' },
    '360': { playstation: '↻', xbox: '↻', arcade: '↻', switch: '↻' },
    '720': { playstation: '↻↻', xbox: '↻↻', arcade: '↻↻', switch: '↻↻' },
  };

  if (map[normInput]) return map[normInput][controller];
  if (map[lowerInput]) return map[lowerInput][controller];
  return input.replace(/[\[\]]/g, '');
};

export const getGlyphColor = (input: string, controller: ControllerType): string => {
  const normInput = input.replace(/[\[\]]/g, '').toUpperCase();

  const psColors: Record<string, string> = {
    'LP': '#ec4899', 'LIGHT PUNCH': '#ec4899', 'FRONT PUNCH': '#ec4899',
    'RP': '#22c55e', 'RIGHT PUNCH': '#22c55e', 
    'MP': '#22c55e', 'MEDIUM PUNCH': '#22c55e', 'BACK PUNCH': '#22c55e',
    'HP': '#e2e8f0', 'HEAVY PUNCH': '#e2e8f0',
    'LK': '#3b82f6', 'LIGHT KICK': '#3b82f6', 'FRONT KICK': '#3b82f6',
    'RK': '#ef4444', 'RIGHT KICK': '#ef4444',
    'MK': '#ef4444', 'MEDIUM KICK': '#ef4444', 'BACK KICK': '#ef4444',
    'HK': '#94a3b8', 'HEAVY KICK': '#94a3b8',
    'P': '#ffffff', 'PUNCH': '#ffffff', 'PP': '#ffffff', 'PPP': '#ffffff',
    'K': '#ffffff', 'KICK': '#ffffff', 'KK': '#ffffff', 'KKK': '#ffffff',
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
    'P': '#1f2937', 'PUNCH': '#1f2937', 'PP': '#1f2937', 'PPP': '#1f2937',
    'K': '#1f2937', 'KICK': '#1f2937', 'KK': '#1f2937', 'KKK': '#1f2937',
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
    'P': '#1f2937', 'PUNCH': '#1f2937', 'PP': '#1f2937', 'PPP': '#1f2937',
    'K': '#1f2937', 'KICK': '#1f2937', 'KK': '#1f2937', 'KKK': '#1f2937',
  };

  if (controller === 'playstation') return psColors[normInput] || '#ffffff';
  if (controller === 'xbox') return xboxColors[normInput] || '#1f2937';
  if (controller === 'switch') return switchColors[normInput] || '#1f2937';
  return '#1f2937'; // Arcade generic
};
