import { useState } from 'react';
import type { AppView, GameDefinition, Move } from './types';
import './index.css';

import { GameSelectView } from './GameSelectView';
import { CharacterSelectView } from './CharacterSelectView';
import { MoveListView } from './MoveListView';
import { GameGlanceMainView } from './GameGlanceView';
import type { ControllerType } from './glyphMap';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('game_select');
  const [selectedGame, setSelectedGame] = useState<GameDefinition | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState<Move[]>([]);
  const [controller, setController] = useState<ControllerType>('playstation');

  // Navigation handlers
  const handleSelectGame = (game: GameDefinition) => {
    setSelectedGame(game);
    setCurrentView('char_select');
  };

  const handleSelectCharacter = (charId: string) => {
    setSelectedCharacter(charId);
    setCurrentView('move_list');
  };

  const handleToggleMove = (move: Move) => {
    setSelectedPlaylist(prev => {
      const exists = prev.find(m => m.id === move.id);
      if (exists) {
        return prev.filter(m => m.id !== move.id);
      } else {
        return [...prev, move];
      }
    });
  };

  const handleLaunchMainScreen = () => {
    setCurrentView('main_screen');
  };

  const handleExitMainScreen = () => {
    setCurrentView('move_list');
  };

  // Router switch
  let viewComponent;
  switch (currentView) {
    case 'game_select':
      viewComponent = <GameSelectView onSelectGame={handleSelectGame} />;
      break;
    case 'char_select':
      if (!selectedGame) {
         setCurrentView('game_select');
         return null;
      }
      viewComponent = <CharacterSelectView 
         game={selectedGame} 
         controller={controller}
         onSetController={setController}
         onSelectCharacter={handleSelectCharacter} 
         onBack={() => setCurrentView('game_select')} 
         onHome={() => setCurrentView('game_select')}
      />;
      break;
    case 'move_list':
      if (!selectedGame || !selectedCharacter) {
         setCurrentView('game_select');
         return null;
      }
      viewComponent = <MoveListView 
         game={selectedGame}
         characterId={selectedCharacter}
         selectedPlaylist={selectedPlaylist}
         controller={controller}
         onSetController={setController}
         onToggleMove={handleToggleMove}
         onLaunchMainScreen={handleLaunchMainScreen}
         onBack={() => setCurrentView('char_select')}
         onHome={() => setCurrentView('game_select')}
      />;
      break;
    case 'main_screen':
      const charName = selectedGame?.characters.find(c => c.id === selectedCharacter)?.name || String(selectedCharacter);
      viewComponent = <GameGlanceMainView 
         playlist={selectedPlaylist} 
         gameName={selectedGame?.name || 'GAMES'}
         characterName={charName}
         controller={controller}
         onSetController={setController}
         onExit={handleExitMainScreen} 
      />;
      break;
    default:
      viewComponent = <div>Unknown View Error</div>;
  }

  return (
    <div className="app-container">
      {viewComponent}
    </div>
  );
}

export default App;
