import { useState, useEffect } from 'react';
import type { AppView, GameDefinition, Move } from './types';
import './index.css';

import { GameSelectView } from './GameSelectView';
import { CharacterSelectView } from './CharacterSelectView';
import { MoveListView } from './MoveListView';
import { GameGlanceMainView } from './GameGlanceView';
import type { ControllerType } from './glyphMap';
import { BottomHeader } from './BottomHeader';
import type { CardTheme } from './types';

import { SUPPORTED_GAMES } from './games';

function App() {

  const [currentView, setCurrentView] = useState<AppView>('game_select');
  const [selectedGame, setSelectedGame] = useState<GameDefinition | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState<Move[]>(() => {
    try {
      const saved = localStorage.getItem('gg_playlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [controller, setController] = useState<ControllerType>('playstation');
  const [cardTheme, setCardTheme] = useState<CardTheme>(() => {
    const val = localStorage.getItem('gg_card_theme');
    const validThemes: CardTheme[] = ['default-dark', 'default-light', 'genesis', 'sf2gen', 'snes', 'cps2', 'mvs', 'aes', 'mvscab', 'cps2cab'];
    return validThemes.includes(val as CardTheme) ? (val as CardTheme) : 'default-dark';
  });
  const [returningFromMoveList, setReturningFromMoveList] = useState(false);
  const [disableGameSelectAnimation, setDisableGameSelectAnimation] = useState(false);

  const navigate = (view: AppView, game: GameDefinition | null = selectedGame, char: string | null = selectedCharacter) => {
    window.history.pushState({ view, gameId: game?.id, charId: char }, '', '');
    setSelectedGame(game);
    setSelectedCharacter(char);
    setCurrentView(view);
  };

  useEffect(() => {
    // Set initial state on load
    window.history.replaceState({ view: 'game_select', gameId: null, charId: null }, '', '');

    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        const { view, gameId, charId } = event.state;
        setCurrentView(view);
        if (gameId) {
           const g = SUPPORTED_GAMES.find(g => g.id === gameId);
           if (g) setSelectedGame(g);
        } else {
           setSelectedGame(null);
        }
        if (charId) setSelectedCharacter(charId);
        else setSelectedCharacter(null);
      } else {
        setCurrentView('game_select');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    localStorage.setItem('gg_card_theme', cardTheme);
  }, [cardTheme]);

  useEffect(() => {
    localStorage.setItem('gg_playlist', JSON.stringify(selectedPlaylist));
  }, [selectedPlaylist]);

  // Guard against invalid routes
  useEffect(() => {
    if (currentView === 'char_select' && !selectedGame) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentView('game_select');
    }
    if (currentView === 'move_list' && (!selectedGame || !selectedCharacter)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentView('game_select');
    }
  }, [currentView, selectedGame, selectedCharacter]);

  // Navigation handlers
  const handleSelectGame = (game: GameDefinition) => {
    setReturningFromMoveList(false);
    setDisableGameSelectAnimation(false);
    if (controller === 'neogeo' && game.developer?.toUpperCase() !== 'SNK') {
      setController('arcade');
    }
    navigate('char_select', game);
  };

  const handleSelectCharacter = (charId: string) => {
    navigate('move_list', selectedGame, charId);
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
    navigate('main_screen');
  };

  // Router switch
  let viewComponent;
  switch (currentView) {
    case 'game_select':
      viewComponent = <GameSelectView onSelectGame={handleSelectGame} disableInitialAnimation={disableGameSelectAnimation} />;
      break;
    case 'char_select':
      if (!selectedGame) {
         viewComponent = null;
         break;
      }
      viewComponent = <CharacterSelectView 
         game={selectedGame} 
         controller={controller}
         disableInitialAnimation={returningFromMoveList}
         onSetController={setController}
         onSelectCharacter={handleSelectCharacter} 
         onBack={() => {
           setDisableGameSelectAnimation(true);
           window.history.back();
         }} 
         onHome={() => {
           setDisableGameSelectAnimation(true);
           navigate('game_select', null, null);
         }}
      />;
      break;
    case 'move_list':
      if (!selectedGame || !selectedCharacter) {
         viewComponent = null;
         break;
      }
      viewComponent = <MoveListView 
         game={selectedGame}
         characterId={selectedCharacter}
         selectedPlaylist={selectedPlaylist}
         controller={controller}
         onSetController={setController}
         onToggleMove={handleToggleMove}
         onLaunchMainScreen={handleLaunchMainScreen}
         onBack={() => {
           setReturningFromMoveList(true);
           window.history.back();
         }}
         onHome={() => {
           setDisableGameSelectAnimation(true);
           navigate('game_select', null, null);
         }}
      />;
      break;
    case 'main_screen': {
      const charName = selectedGame?.characters?.find(c => c.id === selectedCharacter)?.name || String(selectedCharacter);
      viewComponent = <GameGlanceMainView 
         playlist={selectedPlaylist} 
         gameName={selectedGame?.name || 'GAMES'}
         gameDeveloper={selectedGame?.developer || ''}
         characterName={charName}
         controller={controller}
         notationSystem={selectedGame?.notationSystem}
         onSetController={setController}
         onExit={() => window.history.back()} 
      />;
      break;
    }
    default:
      viewComponent = <div>Unknown View Error</div>;
  }

  return (
    <div className="app-container" data-card-theme={cardTheme} style={{ paddingBottom: '70px' }}>
      {viewComponent}
      <BottomHeader 
        controller={controller}
        onSetController={setController}
        cardTheme={cardTheme}
        onSetCardTheme={setCardTheme}
        gameDeveloper={selectedGame?.developer}
      />
    </div>
  );
}

export default App;
