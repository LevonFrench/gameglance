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
  cardTheme?: string;
  onSetController: (c: ControllerType) => void;
  onSelectCharacter: (characterId: string) => void;
  onBack: () => void;
  onHome: () => void;
}

export const CharacterSelectView: React.FC<Props> = ({ game, disableInitialAnimation, cardTheme, onSelectCharacter, onBack, onHome }) => {
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
  const [loadingRoster, setLoadingRoster] = useState(() => characters.length === 0);
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
          setLoadingRoster(false);
        })
        .catch(err => {
          console.error("Failed to load roster:", err);
          setLoadingRoster(false);
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
  const minCardWidth = `calc(${maxNameLength}ch + 4.5rem)`;

  const renderSf6Layout = () => (
    <main style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${minCardWidth}, 1fr))`,
      gap: '1.5rem',
      maxWidth: '1400px',
      width: '100%',
      margin: '0 auto',
      flex: 1,
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
              minHeight: '110px',
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

            {/* Foreground Content */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
            }}>
              <h2 style={{
                fontSize: '1.4rem',
                fontWeight: 900,
                margin: 0,
                letterSpacing: '-0.02em',
                color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                textShadow: isHovered ? `0 2px 10px ${accentColor}40` : 'none',
                transition: 'color 0.3s ease',
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

              {/* Star toggle */}
              <button 
                onClick={(e) => toggleFavorite(e, character.id)}
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid',
                  borderColor: isFav ? '#f59e0b' : 'var(--border-subtle)',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '1.25rem',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isFav ? '#f59e0b' : 'var(--text-secondary)',
                  boxShadow: isFav ? '0 0 15px rgba(245, 158, 11, 0.2)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseOver={e => { 
                  e.currentTarget.style.transform = 'scale(1.15)'; 
                  e.currentTarget.style.color = isFav ? '#fbbf24' : 'var(--text-primary)';
                }}
                onMouseOut={e => { 
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.color = isFav ? '#f59e0b' : 'var(--text-secondary)';
                }}
              >
                ★
              </button>
            </div>
          </button>
        );
      })}
    </main>
  );

  const render3sLayout = () => {
    return (
      <main style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '4px',
        maxWidth: '1000px',
        margin: '2rem auto',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
      }}>
        {sortedCharacters.map((character) => {
          const isComingSoon = character.name.includes('Coming Soon');
          const isHovered = hoveredCharacterId === character.id;
          const rawName = character.name.replace(/ \(Coming Soon\)/, '');
          
          return (
            <button
              key={character.id}
              id={`char-card-${character.id}`}
              onClick={() => !isComingSoon && onSelectCharacter(character.id)}
              onMouseEnter={() => setHoveredCharacterId(character.id)}
              onFocus={() => setHoveredCharacterId(character.id)}
              style={{
                width: '120px',
                height: '120px',
                background: isHovered ? 'var(--border-medium)' : 'var(--bg-input)',
                border: `3px solid ${isHovered ? '#fff' : 'var(--border-subtle)'}`,
                boxShadow: isHovered ? '0 0 10px rgba(255,255,255,0.5)' : 'inset 0 0 10px rgba(0,0,0,0.5)',
                cursor: isComingSoon ? 'not-allowed' : 'pointer',
                opacity: isComingSoon ? 0.3 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: isHovered ? '#fff' : 'var(--text-primary)',
                fontWeight: 900,
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                wordBreak: 'break-word',
                padding: '0.5rem',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.1s, border-color 0.1s',
                zIndex: isHovered ? 10 : 1,
                imageRendering: 'pixelated', // Classic feel
              }}
            >
              {rawName}
            </button>
          );
        })}
      </main>
    );
  };

  const renderSamshoLayout = () => {
    return (
      <main style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '0',
        maxWidth: '800px',
        margin: '4rem auto',
        padding: '1rem',
        background: 'rgba(0,0,0,0.4)',
        border: '4px solid #b81c22', // Deep red border for SNK vibe
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
      }}>
        {sortedCharacters.map((character) => {
          const isComingSoon = character.name.includes('Coming Soon');
          const isHovered = hoveredCharacterId === character.id;
          const rawName = character.name.replace(/ \(Coming Soon\)/, '');
          
          return (
            <button
              key={character.id}
              id={`char-card-${character.id}`}
              onClick={() => !isComingSoon && onSelectCharacter(character.id)}
              onMouseEnter={() => setHoveredCharacterId(character.id)}
              onFocus={() => setHoveredCharacterId(character.id)}
              style={{
                width: 'calc(100% / 6 - 8px)',
                minWidth: '90px',
                height: '110px',
                margin: '4px',
                background: isHovered ? '#b81c22' : '#111',
                border: `2px solid ${isHovered ? '#fff' : '#444'}`,
                cursor: isComingSoon ? 'not-allowed' : 'pointer',
                opacity: isComingSoon ? 0.3 : 1,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                textAlign: 'center',
                color: isHovered ? '#fff' : '#ccc',
                fontWeight: 'bold',
                fontSize: '0.75rem',
                padding: '0.25rem',
                boxShadow: isHovered ? '0 0 15px #b81c22' : 'none',
                zIndex: isHovered ? 10 : 1,
                transition: 'all 0.1s',
              }}
            >
              <div style={{ pointerEvents: 'none', wordBreak: 'break-word', textShadow: '1px 1px 0 #000' }}>
                {rawName.toUpperCase()}
              </div>
            </button>
          );
        })}
      </main>
    );
  };

  const renderMvc2Layout = () => {
    // Hexagonal honeycomb layout
    return (
      <main style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        maxWidth: '900px',
        margin: '3rem auto',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginLeft: '-25px' }}>
          {sortedCharacters.map((character, index) => {
            const isComingSoon = character.name.includes('Coming Soon');
            const isHovered = hoveredCharacterId === character.id;
            const rawName = character.name.replace(/ \(Coming Soon\)/, '');
            
            // Adding margin logic to create a honeycomb offset
            const isOddRow = Math.floor(index / 7) % 2 !== 0;
            const marginLeft = isOddRow && (index % 7 === 0) ? '45px' : '0';
            
            return (
              <button
                key={character.id}
                id={`char-card-${character.id}`}
                onClick={() => !isComingSoon && onSelectCharacter(character.id)}
                onMouseEnter={() => setHoveredCharacterId(character.id)}
                onFocus={() => setHoveredCharacterId(character.id)}
                style={{
                  width: '90px',
                  height: '104px', // Approx width * 1.15 for hexagon
                  marginLeft,
                  marginRight: '0',
                  marginTop: '-26px', // Overlap for honeycomb
                  background: isHovered ? 'linear-gradient(135deg, #ffeb3b, #ff9800)' : 'linear-gradient(135deg, #1e3c72, #2a5298)',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  cursor: isComingSoon ? 'not-allowed' : 'pointer',
                  opacity: isComingSoon ? 0.5 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isHovered ? '#000' : '#fff',
                  fontWeight: 900,
                  fontSize: '0.7rem',
                  textAlign: 'center',
                  padding: '10px',
                  transition: 'all 0.2s',
                  zIndex: isHovered ? 10 : 1,
                  transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                }}
              >
                <div style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.2s' }}>
                   {rawName}
                </div>
              </button>
            );
          })}
        </div>
      </main>
    );
  };

  const renderKofLayout = () => {
    return (
      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
        gap: '8px',
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '1.5rem',
        background: 'linear-gradient(180deg, rgba(0,0,50,0.8) 0%, rgba(0,0,0,0.9) 100%)',
        border: '2px solid #0055ff',
        boxShadow: '0 0 20px rgba(0, 85, 255, 0.4)',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
      }}>
        {sortedCharacters.map((character) => {
          const isComingSoon = character.name.includes('Coming Soon');
          const isHovered = hoveredCharacterId === character.id;
          const rawName = character.name.replace(/ \(Coming Soon\)/, '');
          
          return (
            <button
              key={character.id}
              id={`char-card-${character.id}`}
              onClick={() => !isComingSoon && onSelectCharacter(character.id)}
              onMouseEnter={() => setHoveredCharacterId(character.id)}
              onFocus={() => setHoveredCharacterId(character.id)}
              style={{
                aspectRatio: '1 / 1.2',
                background: isHovered ? '#fff' : 'transparent',
                border: `2px solid ${isHovered ? '#ffaa00' : '#444'}`,
                cursor: isComingSoon ? 'not-allowed' : 'pointer',
                opacity: isComingSoon ? 0.3 : 1,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                textAlign: 'center',
                color: isHovered ? '#000' : '#fff',
                fontWeight: 'bold',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                padding: '0.5rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: isHovered ? '0 0 10px #ffaa00, inset 0 0 10px #ffaa00' : 'none',
                transform: isHovered ? 'translateY(-2px)' : 'none',
                zIndex: isHovered ? 10 : 1,
                transition: 'all 0.15s ease-out',
              }}
            >
              {/* Fake Portrait Background */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: '25%',
                background: isHovered ? 'linear-gradient(135deg, #0055ff, #00aaff)' : '#222',
                zIndex: -1,
                opacity: 0.5,
              }} />
              <div style={{ background: isHovered ? '#ffaa00' : 'rgba(0,0,0,0.7)', width: '100%', padding: '2px 0', borderTop: `1px solid ${isHovered ? '#fff' : '#444'}` }}>
                {rawName}
              </div>
            </button>
          );
        })}
      </main>
    );
  };

  return (
    <>
      {cardTheme === 'mvc2-layout' && renderMvc2Layout()}
      {cardTheme === 'samsho-layout' && renderSamshoLayout()}
      {cardTheme === '3s-layout' && render3sLayout()}
      {cardTheme === 'kof-layout' && renderKofLayout()}
      {!['mvc2-layout', 'samsho-layout', '3s-layout', 'kof-layout'].includes(cardTheme || '') && renderSf6Layout()}
    </>
  );
  const renderVampireLayout = () => {
    return (
      <main style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2px',
        maxWidth: '800px',
        margin: '2rem auto',
        padding: '2rem',
        background: 'transparent',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          {sortedCharacters.map((character) => {
            const isComingSoon = character.name.includes('Coming Soon');
            const isHovered = hoveredCharacterId === character.id;
            const rawName = character.name.replace(/ \(Coming Soon\)/, '');
            
            return (
              <button
                key={character.id}
                id={`char-card-${character.id}`}
                onClick={() => !isComingSoon && onSelectCharacter(character.id)}
                onMouseEnter={() => setHoveredCharacterId(character.id)}
                onFocus={() => setHoveredCharacterId(character.id)}
                style={{
                  width: '90px',
                  height: '90px',
                  margin: '4px',
                  background: isHovered ? '#6b21a8' : '#2e1065',
                  border: `3px solid ${isHovered ? '#d8b4fe' : '#4c1d95'}`,
                  borderRadius: '12px',
                  cursor: isComingSoon ? 'not-allowed' : 'pointer',
                  opacity: isComingSoon ? 0.3 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  color: isHovered ? '#fff' : '#c4b5fd',
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  padding: '0.25rem',
                  boxShadow: isHovered ? '0 0 15px #a855f7' : 'none',
                  zIndex: isHovered ? 10 : 1,
                  transform: isHovered ? 'scale(1.1) rotate(-3deg)' : 'scale(1) rotate(0deg)',
                  transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
              >
                {rawName}
              </button>
            );
          })}
        </div>
      </main>
    );
  };

  const renderVfLayout = () => {
    return (
      <main style={{
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        gap: '4px',
        maxWidth: '100%',
        overflowX: 'auto',
        margin: '4rem auto',
        padding: '1rem',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
      }}>
        {sortedCharacters.map((character) => {
          const isComingSoon = character.name.includes('Coming Soon');
          const isHovered = hoveredCharacterId === character.id;
          const rawName = character.name.replace(/ \(Coming Soon\)/, '');
          
          return (
            <button
              key={character.id}
              id={`char-card-${character.id}`}
              onClick={() => !isComingSoon && onSelectCharacter(character.id)}
              onMouseEnter={() => setHoveredCharacterId(character.id)}
              onFocus={() => setHoveredCharacterId(character.id)}
              style={{
                flex: '0 0 auto',
                width: '110px',
                height: '110px',
                background: isHovered ? '#fff' : '#0022cc',
                border: `4px solid ${isHovered ? '#ffff00' : '#ffffff'}`,
                cursor: isComingSoon ? 'not-allowed' : 'pointer',
                opacity: isComingSoon ? 0.3 : 1,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                textAlign: 'center',
                color: isHovered ? '#000' : '#fff',
                fontWeight: '900',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                padding: '0.25rem',
                zIndex: isHovered ? 10 : 1,
                transform: isHovered ? 'translateY(-10px)' : 'none',
                transition: 'all 0.1s',
              }}
            >
              <div style={{ background: isHovered ? '#ffff00' : 'transparent', width: '100%', padding: '2px 0' }}>
                {rawName}
              </div>
            </button>
          );
        })}
      </main>
    );
  };

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
          
          {/* Subtle text over the watermark */}
          <p style={{ 
            color: 'var(--text-tertiary)', 
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            fontWeight: 500,
            letterSpacing: '0.02em',
          }}>
            {loadingRoster ? 'Loading roster...' : `${characters.length} fighter${characters.length !== 1 ? 's' : ''} available`}
          </p>
        </header>
      </div>


      
      {cardTheme === 'mvc2-layout' && renderMvc2Layout()}
      {cardTheme === 'samsho-layout' && renderSamshoLayout()}
      {cardTheme === '3s-layout' && render3sLayout()}
      {cardTheme === 'kof-layout' && renderKofLayout()}
      {cardTheme === 'vampire-layout' && renderVampireLayout()}
      {cardTheme === 'vf-layout' && renderVfLayout()}
      {!['mvc2-layout', 'samsho-layout', '3s-layout', 'kof-layout', 'vampire-layout', 'vf-layout'].includes(cardTheme || '') && renderSf6Layout()}


    </div>
  );
};
