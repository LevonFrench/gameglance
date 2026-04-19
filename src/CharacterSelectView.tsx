import React, { useState, useEffect, useRef } from 'react';
import { useArrowNavigation } from './useArrowNavigation';
import type { GameDefinition } from './types';

import { useTheme } from './ThemeContext';
import { getCardColor } from './palette';
import { AmbientMesh } from './AmbientMesh';
import { TopHeader } from './TopHeader';
import type { ControllerType } from './glyphMap';

interface Props {
  game: GameDefinition;
  controller: ControllerType;
  disableInitialAnimation?: boolean;
  onSetController: (c: ControllerType) => void;
  onSelectCharacter: (characterId: string) => void;
  onBack: () => void;
  onHome: () => void;
}

export const CharacterSelectView: React.FC<Props> = ({ game, disableInitialAnimation, onSelectCharacter, onBack, onHome }) => {
  useArrowNavigation('[id^="char-card-"]');

  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedFavs = localStorage.getItem('fgc_favorites');
    if (storedFavs) {
      try {
        return JSON.parse(storedFavs);
      } catch {
        return [];
      }
    }
    return [];
  });
  const [characters, setCharacters] = useState(game.characters || []);
  const { theme } = useTheme();
  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    if (characters.length === 0) {
      fetch(`/data/${game.id}/_roster.json`)
        .then(res => res.json())
        .then(data => {
          setCharacters(data);
        })
        .catch(err => {
          console.error("Failed to load roster:", err);
        });
    }
  }, [game.id, characters.length]);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newFavs = favorites.includes(id) 
      ? favorites.filter(fav => fav !== id) 
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('fgc_favorites', JSON.stringify(newFavs));
  };

  // Mouse-reactive glow
  const sortedCharacters = [...characters].sort((a, b) => {
    const aFav = favorites.includes(a.id) ? 1 : 0;
    const bFav = favorites.includes(b.id) ? 1 : 0;
    if (aFav !== bFav) return bFav - aFav;
    return a.name.localeCompare(b.name);
  });

  const [hoveredCharacterId, setHoveredCharacterId] = useState<string | null>(null);

  const isDark = theme === 'dark';

  const maxNameLength = characters.length > 0 
    ? Math.max(...characters.map(c => c.name.replace(/ \(Coming Soon\)/, '').length)) 
    : 15;
  const minCardWidth = `max(200px, calc(${maxNameLength}ch + 5rem))`;

  const renderSf6Layout = () => (
    <main style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${minCardWidth}, 1fr))`,
      gridAutoRows: 'min-content',
      gap: '1.5rem',
      maxWidth: '1400px',
      width: '100%',
      margin: '0 auto',
      flex: 1,
      alignContent: 'flex-start',
      animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
    }}>
      {sortedCharacters.map((character, index) => {
        const accentColor = getCardColor(index);
        const isComingSoon = character.name.includes('Coming Soon');
        const isHovered = hoveredCharacterId === character.id;
        const isFav = favorites.includes(character.id);
        const rawName = character.name.replace(/ \(Coming Soon\)/, '');

        return (
          <button
            key={character.id}
            id={`char-card-${character.id}`}
            ref={el => { if (el) cardRefs.current.set(character.id, el); }}
            onClick={() => !isComingSoon && onSelectCharacter(character.id)}
            onMouseEnter={() => setHoveredCharacterId(character.id)}
            onFocus={() => setHoveredCharacterId(character.id)}
            style={{
              position: 'relative',
              background: 'var(--bg-card)',
              border: `1px solid ${isHovered ? accentColor : 'var(--border-medium)'}`,
              borderRadius: 'var(--radius-xl)',
              padding: '1.25rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              cursor: isComingSoon ? 'not-allowed' : 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              overflow: 'hidden',
              color: 'var(--text-primary)',
              opacity: isComingSoon ? 0.4 : 1,
              fontFamily: 'inherit',
              textAlign: 'left',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              minHeight: '120px',
              transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'scale(1)',
              boxShadow: isHovered 
                ? `0 20px 40px ${accentColor}25, 0 0 0 1px ${accentColor}50` 
                : '0 4px 12px rgba(0,0,0,0.05)',
              zIndex: isHovered ? 10 : 1,
            }}
          >
            {/* Background Typographic Art */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) skewY(-10deg)',
              fontSize: '5rem',
              fontWeight: 900,
              color: isHovered ? `${accentColor}15` : (isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'),
              lineHeight: 0.8,
              textAlign: 'center',
              userSelect: 'none',
              pointerEvents: 'none',
              width: '150%',
              wordBreak: 'break-all',
              letterSpacing: '-0.05em',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 0,
            }}>
              {rawName.toUpperCase()}
            </div>

            {/* Glowing Top Accent Line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: isHovered ? '4px' : '2px',
              background: `linear-gradient(90deg, ${accentColor}40, ${accentColor}, ${accentColor}40)`,
              transition: 'all 0.4s ease',
            }} />

            {/* Star toggle - Top Right */}
            <button 
              onClick={(e) => toggleFavorite(e, character.id)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '50%',
                cursor: 'pointer',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isFav ? '#f59e0b' : 'var(--text-secondary)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 10,
                padding: 0,
                backdropFilter: 'blur(4px)',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.15)';
                e.currentTarget.style.color = '#f59e0b';
                e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.5)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = isFav ? '#f59e0b' : 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </button>

            {/* Foreground Content */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              paddingRight: '3rem', // Space for star (star is 2rem wide + 1rem right inset)
            }}>
              <h2 style={{
                fontSize: '1.4rem',
                fontWeight: 900,
                margin: 0,
                letterSpacing: '-0.02em',
                color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                textShadow: isHovered ? `0 2px 10px ${accentColor}40` : 'none',
                transition: 'color 0.3s ease',
                wordBreak: 'break-word',
                hyphens: 'auto',
              }}>
                {rawName}
              </h2>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
              position: 'relative',
              zIndex: 2,
              marginTop: 'auto',
              paddingTop: '1.25rem',
            }}>
              {/* Pill */}
              {isComingSoon ? (
                <div style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-badge)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  Coming Soon
                </div>
              ) : (
                <div style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: isHovered ? `${accentColor}15` : 'var(--bg-elevated)',
                  border: `1px solid ${isHovered ? `${accentColor}50` : 'var(--border-medium)'}`,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: isHovered ? accentColor : 'var(--text-secondary)',
                  opacity: (character.moveCount && character.moveCount > 0) || (character.comboCount && character.comboCount > 0) ? 1 : 0,
                  transition: 'all 0.3s ease',
                }}>
                  {[
                    character.moveCount ? `${character.moveCount} Moves` : null,
                    character.comboCount ? `${character.comboCount} Combos` : null
                  ].filter(Boolean).join(' | ') || 'No Data'}
                </div>
              )}
            </div>
          </button>
        );
      })}
    </main>
  );

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-xl)',
      position: 'relative',
      overflowX: 'clip',
    }}>
      {/* Glowing Ambient Mesh Background */}
      <AmbientMesh 
        colors={isDark 
          ? ['rgba(99, 102, 241, 0.15)', 'rgba(34, 211, 238, 0.12)', 'rgba(245, 158, 11, 0.1)'] 
          : ['rgba(99, 102, 241, 0.18)', 'rgba(34, 211, 238, 0.15)', 'rgba(245, 158, 11, 0.14)']} 
        speed={0.8} 
      />

      {/* Sticky Header Wrapper */}
      <TopHeader 
        onBack={onBack}
        onHome={onHome}
        gameName={game.name}
        disableInitialAnimation={disableInitialAnimation}
      />

      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}>
        {/* Section header */}
        <header style={{
          marginBottom: 'var(--space-2xl)',
          animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '120px',
        }}>
          {/* Giant Watermark text of the Game Name */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(3rem, 8vw, 10rem)',
            fontWeight: 900,
            color: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.02em',
            fontFamily: "'Outfit', sans-serif",
            zIndex: 0,
          }}>
            {game.name.toUpperCase()}
          </div>
        </header>
      </div>


      
      {renderSf6Layout()}
    </div>
  );
};
