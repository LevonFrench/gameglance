export interface FrameData {
  startup?: string;
  active?: string;
  recovery?: string;
  advantage?: string;
}

export interface Move {
  id: string;
  name: string;
  type: 'normal' | 'special' | 'super' | 'throw' | 'unique' | 'common' | string;
  inputs: string[];
  frameData?: FrameData;
}

export interface CharacterExport {
  game: string;
  character: string;
  theme_colors: { special: string, super_fatality: string, normal: string };
  movesList: Move[];
  combosList: { id: string, name: string, inputs: string[] }[];
}

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
  characters: { id: string, name: string, isHidden?: boolean, moveCount?: number }[];
}

export type AppView = 'game_select' | 'char_select' | 'move_list' | 'main_screen';
