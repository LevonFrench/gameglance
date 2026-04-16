import React, { useState, useEffect, useRef } from 'react';
import type { GameDefinition } from './types';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeContext';
import { getCardColor } from './palette';
import { AmbientMesh } from './AmbientMesh';
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

export const CharacterSelectView: React.FC<Props> = ({ game, controller, disableInitialAnimation, onSetController, onSelectCharacter, onBack, onHome }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { theme } = useTheme();
  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
  useEffect(() => {
    window.scrollTo(0,0);
    const storedFavs = localStorage.getItem('fgc_favorites');
    if (storedFavs) {
      try {
        setFavorites(JSON.parse(storedFavs));
      } catch (e) {}
    }
  }, []);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newFavs = favorites.includes(id) 
      ? favorites.filter(fav => fav !== id) 
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('fgc_favorites', JSON.stringify(newFavs));
  };

  // Mouse-reactive glow
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, charId: string) => {
    const el = cardRefs.current.get(charId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mouse-x', `${x}%`);
    el.style.setProperty('--mouse-y', `${y}%`);
  };
  
  // Sort favorites first, then alphabetical
  const sortedCharacters = [...game.characters].sort((a, b) => {
    const aFav = favorites.includes(a.id) ? 1 : 0;
    const bFav = favorites.includes(b.id) ? 1 : 0;
    if (aFav !== bFav) return bFav - aFav;
    return a.name.localeCompare(b.name);
  });

  const isDark = theme === 'dark';

  return (
    <div style={{
      minHeight: '100vh',
      padding: 'var(--space-xl)',
      position: 'relative',
      overflow: 'clip',
    }}>
      {/* Glowing Ambient Mesh Background */}
      <AmbientMesh 
        colors={isDark 
          ? ['rgba(99, 102, 241, 0.15)', 'rgba(34, 211, 238, 0.12)', 'rgba(245, 158, 11, 0.1)'] 
          : ['rgba(99, 102, 241, 0.18)', 'rgba(34, 211, 238, 0.15)', 'rgba(245, 158, 11, 0.14)']} 
        speed={0.8} 
      />

      {/* Sticky Header Wrapper */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-primary)',
        margin: 'calc(-1 * var(--space-xl)) calc(-1 * var(--space-xl)) var(--space-xl)',
        padding: 'var(--space-xl) var(--space-xl) var(--space-md)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'background-color 0.4s ease',
      }}>
        <div style={{ maxWidth: '1300px', width: '100%', margin: '0 auto' }}>
        {/* Navigation breadcrumb */}
        <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        marginBottom: 'var(--space-lg)',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}>
        <button
          id="char-select-back"
          onClick={onBack}
          style={{
            background: 'var(--bg-input)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            cursor: 'pointer',
            padding: '0.5rem 1.1rem',
            borderRadius: 'var(--radius-md)',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            fontFamily: 'inherit',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
          onMouseOver={e => {
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.borderColor = 'var(--border-medium)';
            e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
            e.currentTarget.style.transform = 'translateX(-2px)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
            e.currentTarget.style.background = 'var(--bg-input)';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          ← Back
        </button>
        <span style={{ color: 'var(--text-muted)' }}>·</span>
        <button
          onClick={onHome}
          title="Home"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={e => {
            e.currentTarget.style.color = 'var(--accent-indigo)';
            e.currentTarget.style.transform = 'scale(1.15)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>
        <span style={{ color: 'var(--text-muted)' }}>·</span>
        <button 
          onClick={onBack}
          style={{ 
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)', 
            fontWeight: 500,
            cursor: 'pointer',
            padding: '2px 4px',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            transition: 'color 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          {game.name}
        </button>
        <span style={{ color: 'var(--text-muted)' }}>›</span>
        <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>SELECT CHARACTER</span>

        {/* Right tools: Social links & Theme toggle */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <a href="#" target="_blank" rel="noreferrer" title="Instagram" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#e1306c'; e.currentTarget.style.transform = 'scale(1.15)'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'scale(1)'; }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" target="_blank" rel="noreferrer" title="Twitter" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#1DA1F2'; e.currentTarget.style.transform = 'scale(1.15)'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'scale(1)'; }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" target="_blank" rel="noreferrer" title="YouTube" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#FF0000'; e.currentTarget.style.transform = 'scale(1.15)'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'scale(1)'; }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
          <a href="#" target="_blank" rel="noreferrer" title="TikTok" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#FF0050'; e.currentTarget.style.transform = 'scale(1.15)'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'scale(1)'; }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a7 7 0 1 1-7-7z"></path></svg>
          </a>
          
          <select
            value={controller}
            onChange={(e) => onSetController(e.target.value as ControllerType)}
            style={{
              padding: '0.35rem 0.65rem',
              background: 'var(--bg-input)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: '0.8rem',
              fontFamily: 'inherit',
              cursor: 'pointer',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
          >
            <option value="playstation" style={{ background: 'var(--option-bg)' }}>🎮 PS</option>
            <option value="xbox" style={{ background: 'var(--option-bg)' }}>🎮 Xbox</option>
            <option value="switch" style={{ background: 'var(--option-bg)' }}>🎮 Switch</option>
            <option value="arcade" style={{ background: 'var(--option-bg)' }}>🕹️ Arcade</option>
            {game.developer?.toUpperCase() === 'SNK' && <option value="neogeo" style={{ background: 'var(--option-bg)' }}>🕹️ Neo Geo</option>}
          </select>

          <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)', margin: '0 0.25rem' }}></div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Section header */}
      <header style={{
        marginBottom: 'var(--space-2xl)',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both',
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 900,
          margin: 0,
          color: isDark ? '#f0f0f8' : '#1a1a2e',
        }}>
          Character Select
        </h1>
        <p style={{
          color: 'var(--text-tertiary)',
          fontSize: '1rem',
          marginTop: '0.5rem',
          fontWeight: 300,
        }}>
          {game.characters.length} fighter{game.characters.length !== 1 ? 's' : ''} available
        </p>
      </header>
        </div>
      </div>

      {/* Character grid */}
      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1.25rem',
        maxWidth: '1300px',
        width: '100%',
        margin: '0 auto',
      }}>
        {sortedCharacters.map((character, index) => {
          const accentColor = getCardColor(index);
          const isComingSoon = character.name.includes('Coming Soon');

          return (
            <button
              key={character.id}
              id={`char-card-${character.id}`}
              ref={el => { if (el) cardRefs.current.set(character.id, el); }}
              onClick={() => !isComingSoon && onSelectCharacter(character.id)}
              onMouseMove={(e) => handleMouseMove(e, character.id)}
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: isComingSoon ? 'not-allowed' : 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                overflow: 'hidden',
                color: 'var(--text-primary)',
                opacity: isComingSoon ? 0.4 : 1,
                animation: disableInitialAnimation ? 'none' : `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${150 + index * 60}ms both`,
                fontFamily: 'inherit',
                textAlign: 'center',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              onMouseOver={(e) => {
                if (isComingSoon) return;
                const el = e.currentTarget;
                el.style.transform = 'translateY(-6px) scale(1.04)';
                el.style.borderColor = accentColor + '50';
                el.style.boxShadow = `0 20px 50px ${accentColor}20, 0 0 0 1px ${accentColor}15`;
                const mouseGlow = el.querySelector('.mouse-glow') as HTMLElement;
                if (mouseGlow) mouseGlow.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                if (isComingSoon) return;
                const el = e.currentTarget;
                el.style.transform = 'translateY(0) scale(1)';
                el.style.borderColor = 'var(--border-subtle)';
                el.style.boxShadow = 'none';
                const mouseGlow = el.querySelector('.mouse-glow') as HTMLElement;
                if (mouseGlow) mouseGlow.style.opacity = '0';
              }}
            >
              {/* Mouse-reactive glow */}
              <div
                className="mouse-glow"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle 140px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accentColor}30, transparent 70%)`,
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                  borderRadius: 'inherit',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Top accent bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${accentColor}80, ${accentColor}, ${accentColor}80)`,
                borderRadius: '0 0 3px 3px',
              }} />

              {/* Star toggle */}
              <button 
                onClick={(e) => toggleFavorite(e, character.id)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  padding: '4px',
                  color: favorites.includes(character.id) ? '#f59e0b' : 'var(--text-muted)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: 2,
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.25) rotate(15deg)'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; }}
              >
                ★
              </button>

              {/* Name */}
              <div style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                position: 'relative',
                zIndex: 1,
              }}>
                {character.name.replace(/ \(Coming Soon\)/, '')}
              </div>

              {/* Coming soon badge */}
              {isComingSoon && (
                <div style={{
                  marginTop: '0.75rem',
                  padding: '0.25rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-badge)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  Coming Soon
                </div>
              )}
            </button>
          );
        })}
      </main>
    </div>
  );
};
