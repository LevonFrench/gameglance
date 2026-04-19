import { useState, useEffect } from 'react';
import type { GameDefinition, Move, PlaylistItem } from './types';
import './index.css';

import { GameSelectView } from './GameSelectView';
import { CharacterSelectView } from './CharacterSelectView';
import { MoveListView } from './MoveListView';
import { GameGlanceMainView } from './GameGlanceView';
import type { ControllerType } from './glyphMap';
import { FightcadeSyncView } from './FightcadeSyncView';
import { useFightcadeSync } from './useFightcadeSync';
import { BottomHeader } from './BottomHeader';
import { AdminDataEntryView } from './AdminDataEntryView';
import type { CardTheme } from './types';
import { CARD_THEMES } from './types';

import { SUPPORTED_GAMES } from './games';

export const App: React.FC = () => {

  const [currentView, setCurrentView] = useState<'game_select' | 'char_select' | 'move_list' | 'fightcade_sync' | 'main_screen' | 'admin'>('game_select');
  const [selectedGame, setSelectedGame] = useState<GameDefinition | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState<PlaylistItem[]>(() => {
    try {
      const saved = localStorage.getItem('gg_playlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [controller, setController] = useState<ControllerType>(() => { return (localStorage.getItem('gg_controller') as ControllerType) || 'playstation'; });
  const cardTheme: CardTheme = (() => {
    const val = localStorage.getItem('gg_card_theme');
    return (CARD_THEMES as readonly string[]).includes(val || '') ? (val as CardTheme) : 'default-dark';
  })();
  const [notationOverride, setNotationOverride] = useState<string>(() => {
    return localStorage.getItem('gg_notation_override') || 'auto';
  });
  const [returningFromMoveList, setReturningFromMoveList] = useState(false);
  const [disableGameSelectAnimation, setDisableGameSelectAnimation] = useState(false);

  useEffect(() => {
    localStorage.setItem('gg_controller', controller);
  }, [controller]);

  useEffect(() => {
    localStorage.setItem('gg_notation_override', notationOverride);
  }, [notationOverride]);

  // Fightcade Auto-Sync
  const { syncState, connect, disconnect } = useFightcadeSync();

  useEffect(() => {
    if (syncState.connected && syncState.gameId) {
      const game = SUPPORTED_GAMES.find(g => g.mameRomset === syncState.gameId);
      if (game) {
        setSelectedGame(prev => {
          if (prev?.id === game.id) return prev;
          setCurrentView(v => (v !== 'char_select' && v !== 'move_list') ? 'char_select' : v);
          return game;
        });
        
        if (syncState.p1CharId) {
          fetch(`/data/${game.id}/_roster.json`)
            .then(res => res.json())
            .then(roster => {
              const char = roster.find((c: any) => c.ramId?.toString() === syncState.p1CharId?.toString());
              if (char) {
                setSelectedCharacter(prev => {
                  if (prev === char.id) return prev;
                  setTimeout(() => {
                    setCurrentView('move_list');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 50);
                  return char.id;
                });
              }
            })
            .catch(err => console.error("Failed to load roster for sync", err));
        }
      }
    }
  }, [syncState.connected, syncState.gameId, syncState.p1CharId]);

  // Hidden hotkey to enter admin view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setCurrentView('admin');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (view: 'game_select' | 'char_select' | 'move_list' | 'fightcade_sync' | 'main_screen' | 'admin', game: GameDefinition | null = selectedGame, char: string | null = selectedCharacter) => {
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
    localStorage.setItem('gg_playlist', JSON.stringify(selectedPlaylist));
  }, [selectedPlaylist]);

  // Guard against invalid routes
  useEffect(() => {
    if (currentView === 'char_select' && !selectedGame) {
      setCurrentView('game_select');
    }
    if (currentView === 'move_list' && (!selectedGame || !selectedCharacter)) {
      setCurrentView('game_select');
    }
  }, [currentView, selectedGame, selectedCharacter]);

  // Navigation handlers
  const handleSelectGame = (game: GameDefinition) => {
    setReturningFromMoveList(false);
    setDisableGameSelectAnimation(false);
    
    const dev = game.developer?.toUpperCase() || '';
    const name = game.name.toLowerCase();
    
    if (dev === 'SNK') {
      setController('neogeo');
    } else if (name.includes('mortal kombat') || name.includes('mk')) {
      setController('mk');
    } else if (name.includes('tatsunoko') && name.includes('capcom')) {
      setController('wii');
    } else if (name.includes('alpha') || name.includes('vampire') || name.includes('darkstalkers') || name.includes('vs capcom') || name.includes('msh') || name.includes('cota') || name.includes('xmvsf') || name.includes('pocket fighter')) {
      setController('cps');
    } else if (name.includes('street fighter ii') && !name.includes('alpha')) {
      if (cardTheme === 'genesis' || cardTheme === 'sf2gen') {
        setController('genesis');
      } else {
        setController('snes');
      }
    } else if (name.includes('street fighter 6') || name.includes('tekken') || name.includes('guilty gear') || name.includes('blazblue')) {
       if (['snes', 'genesis', 'neogeo', 'sfami', 'wii', 'cps'].includes(controller)) {
         setController('playstation');
       }
    }

    navigate('char_select', game);
  };

  const handleSelectCharacter = (charId: string) => {
    navigate('move_list', selectedGame, charId);
  };

  const handleToggleMove = (move: Move) => {
    if (!selectedGame || !selectedCharacter) return;
    setSelectedPlaylist(prev => {
      const exists = prev.find(pm => pm?.move?.id === move.id && pm?.gameId === selectedGame.id && pm?.characterId === selectedCharacter);
      if (exists) {
        return prev.filter(pm => !(pm?.move?.id === move.id && pm?.gameId === selectedGame.id && pm?.characterId === selectedCharacter));
      } else {
        return [...prev, { gameId: selectedGame.id, characterId: selectedCharacter, move }];
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
         selectedPlaylist={selectedPlaylist.filter(p => p.gameId === selectedGame.id).map(p => p.move)}
         controller={controller}
         notationSystem={(notationOverride === 'auto' ? selectedGame.notationSystem : notationOverride) as 'numpad' | 'traditional' | 'mk' | undefined}
         onSetController={setController}
         onToggleMove={handleToggleMove}
         onLaunchMainScreen={handleLaunchMainScreen}
         onBack={() => navigate('char_select', selectedGame)}
         onHome={() => navigate('game_select')}
      />;
      break;
    case 'fightcade_sync':
      viewComponent = <FightcadeSyncView 
        syncState={syncState}
        onConnect={connect}
        onDisconnect={disconnect}
        onBack={() => navigate('game_select')}
      />;
      break;
    case 'main_screen': {
      const charName = selectedGame?.characters?.find(c => c.id === selectedCharacter)?.name || String(selectedCharacter);
      viewComponent = <GameGlanceMainView 
         playlist={selectedPlaylist.filter(p => p.gameId === selectedGame?.id)} 
         selectedGameId={selectedGame?.id || ''}
         gameName={selectedGame?.name || 'GAMES'}
         selectedCharacterId={selectedCharacter || ''}
         characterName={charName}
         controller={controller}
         notationSystem={(notationOverride === 'auto' ? selectedGame?.notationSystem : notationOverride) as 'numpad' | 'traditional' | 'mk' | undefined}
         onSetController={setController}
         onExit={() => window.history.back()} 
      />;
      break;
    }
    case 'admin': {
      viewComponent = <AdminDataEntryView onBack={() => window.history.back()} />;
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
        notationSystem={notationOverride}
        onSetNotationSystem={(val) => {
          setNotationOverride(val);
          localStorage.setItem('gg_notation_override', val);
        }}
        onOpenFightcadeSync={currentView !== 'fightcade_sync' ? () => navigate('fightcade_sync') : undefined}
        syncConnected={syncState.connected}
        onOpenAdmin={() => setCurrentView("admin")}
      />
    </div>
  );
}

export default App;
