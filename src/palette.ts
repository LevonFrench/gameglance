/* ═══════════════════════════════════════════════════════════════
   PALETTE — rotating color system for character cards.
   Add / swap palettes here; the rest of the app picks them up
   automatically via `getCardColor(index)`.
   ═══════════════════════════════════════════════════════════════ */

export interface Palette {
  /** Human-readable name shown in a future settings UI */
  name: string;
  /** Ordered list of hex colors to cycle through */
  colors: string[];
}

/** Registry of available palettes — add new ones here */
export const PALETTES: Record<string, Palette> = {
  neon: {
    name: 'Neon Nights',
    colors: [
      '#6366f1', // indigo
      '#f43f5e', // rose
      '#22d3ee', // cyan
      '#f59e0b', // amber
      '#a855f7', // purple
      '#10b981', // emerald
      '#ec4899', // pink
      '#3b82f6', // blue
      '#ef4444', // red
      '#14b8a6', // teal
      '#8b5cf6', // violet
      '#eab308', // yellow
    ],
  },

  pastel: {
    name: 'Soft Pastel',
    colors: [
      '#93c5fd', // light blue
      '#fca5a5', // light red
      '#86efac', // light green
      '#fde68a', // light yellow
      '#c4b5fd', // light violet
      '#fdba74', // light orange
      '#a5f3fc', // light cyan
      '#f9a8d4', // light pink
      '#d9f99d', // light lime
      '#e9d5ff', // light purple
    ],
  },

  arcade: {
    name: 'Classic Arcade',
    colors: [
      '#e8363c', // capcom red
      '#fbbf24', // gold
      '#3b82f6', // player 2 blue
      '#22c55e', // go green
      '#f97316', // attract orange
      '#a855f7', // bonus purple
      '#0ea5e9', // sky
      '#ef4444', // danger red
      '#84cc16', // lime
      '#e879f9', // magenta
    ],
  },

  monochrome: {
    name: 'Monochrome',
    colors: [
      '#e2e8f0',
      '#cbd5e1',
      '#94a3b8',
      '#64748b',
      '#475569',
      '#334155',
      '#1e293b',
      '#a8a29e',
      '#78716c',
      '#57534e',
    ],
  },

  cyberpunk: {
    name: 'Cyberpunk',
    colors: [
      '#ff2a6d', // hot pink
      '#05d9e8', // electric cyan
      '#d1f7ff', // ice white-blue
      '#7b2dff', // deep purple
      '#ff6b35', // neon orange
      '#01c38d', // matrix green
      '#f5d300', // plasma yellow
      '#ff1493', // deep pink
      '#00f5ff', // aqua
      '#b026ff', // violet
    ],
  },
};

/** The currently active palette key — change this to switch globally */
let activePaletteKey = 'neon';

/** Get the currently active palette */
export function getActivePalette(): Palette {
  return PALETTES[activePaletteKey] ?? PALETTES.neon;
}

/** Get the active palette key */
export function getActivePaletteKey(): string {
  return activePaletteKey;
}

/** Switch to a different palette by key */
export function setActivePalette(key: string): void {
  if (PALETTES[key]) {
    activePaletteKey = key;
  }
}

/**
 * Return the color for a character card at the given index.
 * Wraps around the palette so every card gets a color.
 */
export function getCardColor(index: number): string {
  const colors = getActivePalette().colors;
  return colors[index % colors.length];
}
