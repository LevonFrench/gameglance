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
  parentMoveId?: string;
  damage?: string;
  notes?: string;
}

export interface PlaylistItem {
  gameId: string;
  characterId: string;
  move: Move;
}

export interface CharacterExport {
  game: string;
  character: string;
  name?: string;
  ramId?: string | number;
  theme_colors: { special: string, super_fatality: string, normal: string };
  movesList: Move[];
  combosList: { id: string, name: string, input: string, damage?: string, notes?: string }[];
}

export const CARD_THEMES = ['auto', 'default-dark', 'default-light', 'genesis', 'sf2gen', 'snes', 'cps2', 'mvs', 'aes', 'mvscab', 'cps2cab', 'sfami', 'tekken', 'sf6-layout', '3s-layout', 'mvc2-layout', 'samsho-layout', 'kof-layout', 'vampire-layout', 'vf-layout'] as const;
export type CardTheme = typeof CARD_THEMES[number];

export const THEME_DISPLAY_NAMES: Record<CardTheme, string> = {
  'auto': 'Per Game (Auto)',
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
  'sfami': 'Super Famicom',
  'tekken': 'Tekken Cabinet',
  'sf6-layout': 'Street Fighter 6',
  '3s-layout': '3rd Strike',
  'mvc2-layout': 'MvC 2',
  'samsho-layout': 'Samurai Shodown',
  'kof-layout': 'King of Fighters',
  'vampire-layout': 'Darkstalkers',
  'vf-layout': 'Virtua Fighter'
};

export interface GameDefinition {
  id: string;
  mameRomset?: string;
  name: string;
  searchAliases?: string[];
  developer?: string;
  releaseYear?: number;
  platform?: string;
  theme?: CardTheme;
  ramAddresses?: {
    p1CharacterId: string;
    p2CharacterId: string;
  };
  tagline?: string;
  rosterCount?: number;
  tabs?: string[];
  isDraft?: boolean;
  isHidden?: boolean;
  tags?: string[];
  notationSystem?: 'numpad' | 'traditional' | 'mk' | 'tekken';
  controller?: import('./glyphMap').ControllerType;
  systemMechanics?: { name: string, description: string, input?: string }[];
  characters?: { id: string, name: string, isHidden?: boolean, moveCount?: number, comboCount?: number }[];
}

export const APP_VIEWS = ['game_select', 'char_select', 'move_list', 'main_screen'] as const;
export type AppView = typeof APP_VIEWS[number];

export interface GameSystemData {
  gameId: string;
  buttons?: { id: string, name: string, description?: string }[];
  mechanics?: { name: string, description: string, input?: string }[];
  modes?: { name: string, description: string }[];
  faqs?: { question: string, answer: string }[];
}
