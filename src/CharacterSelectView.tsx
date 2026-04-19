import React, { useState, useEffect, useRef } from 'react';
import { useArrowNavigation } from './useArrowNavigation';
import type { GameDefinition } from './types';

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

  const sortedCharacters = [...characters].sort((a, b) => {
    const aFav = favorites.includes(a.id) ? 1 : 0;
    const bFav = favorites.includes(b.id) ? 1 : 0;
    if (aFav !== bFav) return bFav - aFav;
    return a.name.localeCompare(b.name);
  });

  const [hoveredCharacterId, setHoveredCharacterId] = useState<string | null>(null);


  const renderCardGrid = () => (
    <main style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gridAutoRows: 'auto',
      gap: '1rem',
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
            onMouseLeave={() => setHoveredCharacterId(null)}
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
              minHeight: '110px',
              transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'scale(1)',
              boxShadow: isHovered 
                ? `0 20px 40px ${accentColor}25, 0 0 0 1px ${accentColor}50` 
                : '0 4px 12px rgba(0,0,0,0.05)',
              zIndex: isHovered ? 10 : 1,
            }}
          >
            {/* Tiled Watermark */}
            <div style={{
              position: 'absolute',
              inset: '-50%',
              transform: 'rotate(-15deg)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0 1.5rem',
              alignContent: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              fontWeight: 900,
              color: isHovered ? `${accentColor}08` : 'rgba(255,255,255,0.015)',
              userSelect: 'none',
              pointerEvents: 'none',
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              zIndex: 0,
              transition: 'color 0.3s ease',
            }}>
              {Array.from({ length: 8 }, (_, i) => (
                <span key={i} style={{ whiteSpace: 'nowrap' }}>{rawName.toUpperCase()}</span>
              ))}
            </div>

            {/* Glowing Top Accent Line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: isHovered ? '3px' : '2px',
              background: `linear-gradient(90deg, ${accentColor}40, ${accentColor}, ${accentColor}40)`,
              transition: 'all 0.4s ease',
            }} />

            {/* Star toggle - Top Right */}
            <button 
              onClick={(e) => toggleFavorite(e, character.id)}
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '50%',
                cursor: 'pointer',
                width: '28px',
                height: '28px',
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
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = isFav ? '#f59e0b' : 'var(--text-secondary)';
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </button>

            {/* Character Name */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              paddingRight: '2.5rem',
            }}>
              <h2 style={{
                fontSize: '1.3rem',
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

            {/* Bottom row: move count pill */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
              position: 'relative',
              zIndex: 2,
              marginTop: 'auto',
              paddingTop: '0.75rem',
            }}>
              {isComingSoon ? (
                <div style={{
                  padding: '0.2rem 0.6rem',
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
                  padding: '0.2rem 0.6rem',
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
      {/* Ambient Mesh Background */}
      <AmbientMesh 
        colors={['rgba(99, 102, 241, 0.15)', 'rgba(34, 211, 238, 0.12)', 'rgba(245, 158, 11, 0.1)']} 
        speed={0.8} 
      />

      {/* Top Header */}
      <TopHeader 
        onBack={onBack}
        onHome={onHome}
        gameName={game.name}
        disableInitialAnimation={disableInitialAnimation}
      />

      {/* Centered Section Header */}
      <header style={{
        textAlign: 'center',
        marginBottom: 'var(--space-2xl)',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both',
        position: 'relative',
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto var(--space-2xl)',
      }}>

        <div style={{
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'var(--accent-indigo)',
          fontWeight: 700,
          marginBottom: '0.5rem',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          SELECT CHARACTER
        </div>
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 900,
          fontFamily: "'Outfit', sans-serif",
          color: 'var(--text-primary)',
          margin: '0 0 0.5rem',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
        }}>
          {game.name}
        </h1>
        <div style={{
          fontSize: '0.85rem',
          color: 'var(--text-tertiary)',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          {sortedCharacters.length} characters
        </div>
      </header>

      {renderCardGrid()}
    </div>
  );
};
