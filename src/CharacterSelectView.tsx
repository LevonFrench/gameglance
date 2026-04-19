import React, { useState, useEffect } from 'react';
import { useArrowNavigation } from './useArrowNavigation';
import type { GameDefinition } from './types';

import { getCardColor } from './palette';
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
  const [hoveredCharacterId, setHoveredCharacterId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (characters.length === 0) {
      fetch(`/data/${game.id}/_roster.json`)
        .then(res => res.json())
        .then(data => setCharacters(data))
        .catch(err => console.error("Failed to load roster:", err));
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

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflowX: 'clip',
    }}>

      {/* Centered Header */}
      <header style={{
        textAlign: 'center',
        padding: '3rem 1.5rem 2rem',
        position: 'relative',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}>
        {/* Nav row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          <button
            onClick={onBack}
            style={{
              position: 'absolute',
              left: '1.5rem',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '0.5rem 0.9rem',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontFamily: "'Outfit', sans-serif",
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-indigo)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Games
          </button>

          <button
            onClick={onHome}
            style={{
              position: 'absolute',
              right: '1.5rem',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-indigo)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-medium)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            title="Home"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>
        </div>

        {/* Game name */}
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

      {/* Character Grid */}
      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gridAutoRows: '80px',
        gap: '0.75rem',
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
        padding: '0 1.5rem 3rem',
        flex: 1,
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both',
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
              onClick={() => !isComingSoon && onSelectCharacter(character.id)}
              onMouseEnter={() => setHoveredCharacterId(character.id)}
              onMouseLeave={() => setHoveredCharacterId(null)}
              onFocus={() => setHoveredCharacterId(character.id)}
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: `1px solid ${isHovered ? accentColor : 'var(--border-medium)'}`,
                borderRadius: '12px',
                padding: '0 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: isComingSoon ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                overflow: 'hidden',
                color: 'var(--text-primary)',
                opacity: isComingSoon ? 0.4 : 1,
                fontFamily: 'inherit',
                textAlign: 'left',
                transform: isHovered ? 'translateY(-2px)' : 'none',
                boxShadow: isHovered
                  ? `0 8px 24px ${accentColor}20, 0 0 0 1px ${accentColor}40`
                  : '0 2px 8px rgba(0,0,0,0.08)',
              }}
            >
              {/* Accent line - left edge */}
              <div style={{
                position: 'absolute',
                top: '20%',
                bottom: '20%',
                left: 0,
                width: isHovered ? '3px' : '2px',
                background: accentColor,
                borderRadius: '0 2px 2px 0',
                transition: 'all 0.3s ease',
                opacity: isHovered ? 1 : 0.5,
              }} />

              {/* Name */}
              <span style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                transition: 'color 0.2s ease',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: 1,
                paddingLeft: '0.5rem',
              }}>
                {rawName}
              </span>

              {/* Right side: move count + star */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexShrink: 0,
              }}>
                {/* Move count */}
                {!isComingSoon && character.moveCount != null && character.moveCount > 0 && (
                  <span style={{
                    fontSize: '0.75rem',
                    color: isHovered ? accentColor : 'var(--text-tertiary)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600,
                    transition: 'color 0.2s ease',
                  }}>
                    {character.moveCount}
                  </span>
                )}

                {/* Star */}
                <button
                  onClick={(e) => toggleFavorite(e, character.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: isFav ? '#f59e0b' : (isHovered ? 'var(--text-tertiary)' : 'transparent'),
                    transition: 'all 0.2s ease',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseOver={e => { e.currentTarget.style.color = '#f59e0b'; e.currentTarget.style.transform = 'scale(1.2)'; }}
                  onMouseOut={e => { e.currentTarget.style.color = isFav ? '#f59e0b' : (isHovered ? 'var(--text-tertiary)' : 'transparent'); e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={isFav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </button>
              </div>
            </button>
          );
        })}
      </main>
    </div>
  );
};
