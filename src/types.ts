interface FrameData {
  startup?: string;
  active?: string;
  recovery?: string;
  advantage?: string;
  hitLevel?: string;
  onBlock?: string;
  onHit?: string;
  onCounter?: string;
}

type MoveType = 'normal' | 'special' | 'super' | 'throw' | 'unique' | 'common' | 'finisher' | 'system';

export interface Move {
  id: string;
  name: string;
  type: MoveType;
  rawType?: string;
  category?: string;
  input: string;
  frameData?: FrameData;
  parentMoveId?: string;
  damage?: string;
  notes?: string;
  properties?: string[];
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
  links?: { title: string; url: string }[];
  stores?: { platform: string; url: string }[];
}


