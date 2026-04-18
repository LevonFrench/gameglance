import { useState, useEffect } from 'react';
import type { GameDefinition, Move } from './types';
import './index.css';

import { GameSelectView } from './GameSelectView';
import { CharacterSelectView } from './CharacterSelectView';
import { MoveListView } from './MoveListView';
import { GameGlanceMainView } from './GameGlanceView';
import type { ControllerType } from './glyphMap';
import { FightcadeSyncView } from './FightcadeSyncView';
import { useFightcadeSync } from './useFightcadeSync';
import { BottomHeader } from './BottomHeader';
import type { CardTheme } from './types';
import { CARD_THEMES } from './types';

import { SUPPORTED_GAMES } from './games';

export const App: React.FC = () => {

  const [currentView, setCurrentView] = useState<'game_select' | 'char_select' | 'move_list' | 'fightcade_sync' | 'main_screen'>('game_select');
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
    return (CARD_THEMES as readonly string[]).includes(val || '') ? (val as CardTheme) : 'default-dark';
  });
  const [notationOverride, setNotationOverride] = useState<string>(() => {
    return localStorage.getItem('gg_notation_override') || 'auto';
  });
  const [returningFromMoveList, setReturningFromMoveList] = useState(false);
  const [disableGameSelectAnimation, setDisableGameSelectAnimation] = useState(false);

  // Fightcade Auto-Sync
  const { syncState, connect, disconnect } = useFightcadeSync();

  useEffect(() => {
    if (syncState.connected && syncState.gameId && syncState.p1CharId) {
      const game = SUPPORTED_GAMES.find(g => g.mameRomset === syncState.gameId);
      if (game && game.id !== selectedGame?.id) {
        setSelectedGame(game);
      }
      if (game) {
        // Fetch roster to find character ID
        fetch(`/data/${game.id}/_roster.json`)
          .then(res => res.json())
          .then(roster => {
            // Find character by ramId. Note that ramId might be string or number.
            const char = roster.find((c: any) => c.ramId?.toString() === syncState.p1CharId?.toString());
            if (char) {
              if (selectedCharacter !== char.id) {
                setSelectedCharacter(char.id);
                // Wait for state to settle then navigate
                setTimeout(() => {
                  setCurrentView('move_list');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }
            }
          })
          .catch(err => console.error("Failed to load roster for sync", err));
      }
    }
  }, [syncState, selectedGame, selectedCharacter]);

  const navigate = (view: 'game_select' | 'char_select' | 'move_list' | 'fightcade_sync' | 'main_screen', game: GameDefinition | null = selectedGame, char: string | null = selectedCharacter) => {
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
    setSelectedPlaylist(prev => {
      const exists = prev.find(m => m.id === move.id);
      if (exists) {
        return prev.filter(m => m.id !== move.id);
      } else {
        return [...prev, move];
      }
    });
  };

  const handleToggleCategory = (moves: Move[], select: boolean) => {
    setSelectedPlaylist(prev => {
      if (select) {
        const newMoves = moves.filter(m => !prev.find(pm => pm.id === m.id));
        return [...prev, ...newMoves];
      } else {
        return prev.filter(pm => !moves.find(m => m.id === pm.id));
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
         notationSystem={(notationOverride === 'auto' ? selectedGame.notationSystem : notationOverride) as 'numpad' | 'traditional' | 'mk' | undefined}
         onSetController={setController}
         onToggleMove={handleToggleMove}
         onToggleCategory={handleToggleCategory}
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
         playlist={selectedPlaylist} 
         gameName={selectedGame?.name || 'GAMES'}
         characterName={charName}
         controller={controller}
         notationSystem={(notationOverride === 'auto' ? selectedGame?.notationSystem : notationOverride) as 'numpad' | 'traditional' | 'mk' | undefined}
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
      
      {/* Fightcade Sync Button */}
      {currentView !== 'fightcade_sync' && (
        <button
          onClick={() => navigate('fightcade_sync')}
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 1000,
            background: syncState.connected ? '#10b981' : 'var(--bg-elevated)',
            color: syncState.connected ? '#fff' : 'var(--text-primary)',
            border: '1px solid var(--border-medium)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: syncState.connected ? '#fff' : '#ef4444',
            boxShadow: syncState.connected ? '0 0 8px #fff' : 'none'
          }} />
          Fightcade Sync
        </button>
      )}

      {viewComponent}
      <BottomHeader 
        controller={controller}
        onSetController={setController}
        cardTheme={cardTheme}
        onSetCardTheme={setCardTheme}
        notationSystem={notationOverride}
        onSetNotationSystem={(val) => {
          setNotationOverride(val);
          localStorage.setItem('gg_notation_override', val);
        }}
      />
    </div>
  );
}

export default App;
