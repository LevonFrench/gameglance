import { useState, useEffect } from 'react';
import type { GameDefinition } from './types';
import { SUPPORTED_GAMES } from './games';
import { ApprovalGameSelectView } from './ApprovalGameSelectView';
import { ApprovalCharSelectView } from './ApprovalCharSelectView';
import { ApprovalComboListView } from './ApprovalComboListView';
import './index.css';

type ApprovalView = 'approval_game_select' | 'approval_char_select' | 'approval_combo_list';

export function ApprovalApp() {
  const [currentView, setCurrentView] = useState<ApprovalView>('approval_game_select');
  const [selectedGame, setSelectedGame] = useState<GameDefinition | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const navigate = (view: ApprovalView, game: GameDefinition | null = selectedGame, char: string | null = selectedCharacter) => {
    window.history.pushState({ view, gameId: game?.id, charId: char }, '', '');
    setSelectedGame(game);
    setSelectedCharacter(char);
    setCurrentView(view);
  };

  useEffect(() => {
    window.history.replaceState({ view: 'approval_game_select', gameId: null, charId: null }, '', '');

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
        setCurrentView('approval_game_select');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  let viewComponent;
  switch (currentView) {
    case 'approval_game_select':
      viewComponent = <ApprovalGameSelectView 
         onSelectGame={(game) => navigate('approval_char_select', game)}
      />;
      break;
    case 'approval_char_select':
      if (!selectedGame) {
         viewComponent = null;
         break;
      }
      viewComponent = <ApprovalCharSelectView 
         game={selectedGame}
         onSelectCharacter={(charId) => navigate('approval_combo_list', selectedGame, charId)}
         onBack={() => window.history.back()}
      />;
      break;
    case 'approval_combo_list':
      if (!selectedGame || !selectedCharacter) {
         viewComponent = null;
         break;
      }
      viewComponent = <ApprovalComboListView 
         game={selectedGame}
         characterId={selectedCharacter}
         onBack={() => window.history.back()}
         onHome={() => navigate('approval_game_select', null, null)}
      />;
      break;
    default:
      viewComponent = <div>Unknown View Error</div>;
  }

  return (
    <div className="app-container" data-card-theme="default-dark">
      {viewComponent}
    </div>
  );
}
