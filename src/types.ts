export interface FrameData {
  startup?: string;
  active?: string;
  recovery?: string;
  advantage?: string;
}

export const MOVE_TYPES = ['normal', 'special', 'super', 'throw', 'unique', 'common', 'finisher', 'system'] as const;
export type MoveType = typeof MOVE_TYPES[number];

export interface Move {
  id: string;
  name: string;
  type: MoveType;
  input: string;
  frameData?: FrameData;
}

export interface CharacterExport {
  game: string;
  character: string;
  theme_colors: { special: string, super_fatality: string, normal: string };
  movesList: Move[];
  combosList: { id: string, name: string, input: string }[];
}

export const CARD_THEMES = ['default-dark', 'default-light', 'genesis', 'sf2gen', 'snes', 'cps2', 'mvs', 'aes', 'mvscab', 'cps2cab', 'sfami'] as const;
export type CardTheme = typeof CARD_THEMES[number];

export const THEME_DISPLAY_NAMES: Record<CardTheme, string> = {
  'default-dark': 'Default',
  'default-light': 'Light',
  'genesis': 'Genesis',
  'sf2gen': 'SF2GEN',
  'snes': 'SNES',
  'cps2': 'CPS2',
  'cps2cab': 'CPS2 CAB',
  'mvs': 'MVS',
  'mvscab': 'MVS CAB',
  'aes': 'AES',
  'sfami': 'Super Famicom'
};

export interface GameDefinition {
  id: string;
  name: string;
  developer?: string;
  releaseYear?: number;
  platform?: string;
  tagline?: string;
  rosterCount?: number;
  tabs?: string[];
  isDraft?: boolean;
  isHidden?: boolean;
  notationSystem?: 'numpad' | 'traditional' | 'mk';
  characters?: { id: string, name: string, isHidden?: boolean, moveCount?: number }[];
}

export const APP_VIEWS = ['game_select', 'char_select', 'move_list', 'main_screen'] as const;
export type AppView = typeof APP_VIEWS[number];
