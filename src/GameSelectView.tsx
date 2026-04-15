import React, { useState, useEffect, useRef } from 'react';
import type { GameDefinition } from './types';
import { SUPPORTED_GAMES } from './games';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeContext';
import { AmbientMesh } from './AmbientMesh';

interface Props {
  onSelectGame: (game: GameDefinition) => void;
}

const GAME_THEMES: Record<string, { gradient: string; icon: string; tagline: string; glowColor: string }> = {
  sf6: {
    gradient: 'linear-gradient(135deg, #e8363c 0%, #fbbf24 100%)',
    icon: '🥊',
    tagline: 'World Warriors Await',
    glowColor: 'rgba(232, 54, 60, 0.25)',
  },
  sf2: {
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #ef4444 100%)',
    icon: '🥋',
    tagline: 'The Grand Master Challenge',
    glowColor: 'rgba(29, 78, 216, 0.25)',
  },
  cvs2: {
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)',
    icon: '⚔️',
    tagline: 'Mark of the Millennium',
    glowColor: 'rgba(251, 191, 36, 0.25)',
  },
  cfj: {
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    icon: '🌟',
    tagline: 'Worlds Collide',
    glowColor: 'rgba(139, 92, 246, 0.25)',
  },
  darkstalkers: {
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%)',
    icon: '🦇',
    tagline: 'The Night Warriors',
    glowColor: 'rgba(76, 29, 149, 0.25)',
  },
  nightwarriors: {
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #312e81 100%)',
    icon: '🐺',
    tagline: 'Darkstalkers\' Revenge',
    glowColor: 'rgba(124, 58, 237, 0.25)',
  },
  vampiresavior: {
    gradient: 'linear-gradient(135deg, #be123c 0%, #4c0519 100%)',
    icon: '🧛',
    tagline: 'The Lord of Vampire',
    glowColor: 'rgba(190, 18, 60, 0.25)',
  },
  sfa3: {
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0369a1 100%)',
    icon: '🔥',
    tagline: 'Go For Broke!',
    glowColor: 'rgba(20, 184, 166, 0.25)',
  },
  pocketfighter: {
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    icon: '💎',
    tagline: 'Mini Brawlers',
    glowColor: 'rgba(236, 72, 153, 0.25)',
  },
  projectjustice: {
    gradient: 'linear-gradient(135deg, #f97316 0%, #facc15 100%)',
    icon: '🎓',
    tagline: 'Rival Schools Unite',
    glowColor: 'rgba(249, 115, 22, 0.25)',
  },
  plasmasword: {
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    icon: '🗡️',
    tagline: 'Nightmare of Bilstein',
    glowColor: 'rgba(14, 165, 233, 0.25)',
  }
};

export const GameSelectView: React.FC<Props> = ({ onSelectGame }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [developerFilter, setDeveloperFilter] = useState<string>('All');
  const { theme } = useTheme();
  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
  useEffect(() => {
    window.scrollTo(0,0);
    const storedFavs = localStorage.getItem('fgc_game_favorites');
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
    localStorage.setItem('fgc_game_favorites', JSON.stringify(newFavs));
  };

  // Mouse-reactive gradient glow
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, gameId: string) => {
    const el = cardRefs.current.get(gameId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mouse-x', `${x}%`);
    el.style.setProperty('--mouse-y', `${y}%`);
  };
  
  // Sort favorites first, then filter by developer
  const filteredAndSortedGames = [...SUPPORTED_GAMES]
    .filter(g => developerFilter === 'All' || g.developer === developerFilter)
    .sort((a, b) => {
      const aFav = favorites.includes(a.id);
      const bFav = favorites.includes(b.id);
      if (aFav && !bFav) return -1;
      if (!aFav && bFav) return 1;
      return a.name.localeCompare(b.name);
    });

  const isDark = theme === 'dark';
  const developerCounts = SUPPORTED_GAMES.reduce((acc, game) => {
    if (game.developer) {
      acc[game.developer] = (acc[game.developer] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const allDevelopers = [
    'All',
    ...Object.entries(developerCounts)
      .filter(([_, count]) => count >= 5)
      .map(([dev]) => dev)
      .sort()
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glowing Ambient Mesh Background */}
      <AmbientMesh 
        colors={isDark 
          ? ['rgba(99, 102, 241, 0.15)', 'rgba(168, 85, 247, 0.12)', 'rgba(236, 72, 153, 0.1)'] 
          : ['rgba(99, 102, 241, 0.20)', 'rgba(168, 85, 247, 0.18)', 'rgba(236, 72, 153, 0.15)']} 
        speed={1.0} 
      />

      {/* Theme toggle — top right */}
      <div style={{
        position: 'fixed',
        top: '1.25rem',
        right: '1.25rem',
        zIndex: 200,
      }}>
        <ThemeToggle />
      </div>

      {/* Header */}
      <header style={{
        textAlign: 'center',
        marginBottom: '3rem',
        animation: 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--accent-indigo)',
          marginBottom: '0.75rem',
        }}>
          GameGlance
        </div>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 900,
          margin: 0,
          color: isDark ? '#f0f0f8' : '#1a1a2e',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
        }}>
          SELECT GAME
        </h1>

        {/* Developer Filter */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {allDevelopers.map(dev => {
            const isActive = developerFilter === dev;
            return (
              <button
                key={dev}
                onClick={() => setDeveloperFilter(dev)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: `1px solid ${isActive ? 'var(--accent-indigo)' : 'var(--border-subtle)'}`,
                  background: isActive ? 'var(--accent-indigo)' : 'var(--bg-glass)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(12px)',
                }}
                onMouseOver={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--text-secondary)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
                onMouseOut={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {dev}
              </button>
            );
          })}
        </div>
      </header>

      {/* Game Grid */}
      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
      }}>
        {filteredAndSortedGames.map((game, index) => {
          const theme = GAME_THEMES[game.id] || GAME_THEMES.sf6;
          const isFavorite = favorites.includes(game.id);
          return (
            <button
              key={game.id}
              id={`game-card-${game.id}`}
              ref={el => { if (el) cardRefs.current.set(game.id, el); }}
              onClick={() => onSelectGame(game)}
              onMouseMove={(e) => handleMouseMove(e, game.id)}
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
                cursor: 'pointer',
                transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '150px',
                overflow: 'hidden',
                color: 'var(--text-primary)',
                animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 80}ms both`,
                textAlign: 'center',
                fontFamily: 'inherit',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-8px) scale(1.03)';
                el.style.borderColor = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.15)';
                el.style.boxShadow = `0 24px 64px ${theme.glowColor}, var(--shadow-glow-indigo)`;
                const gradientOverlay = el.querySelector('.gradient-overlay') as HTMLElement;
                if (gradientOverlay) gradientOverlay.style.opacity = isDark ? '0.15' : '0.10';
                const mouseGlow = el.querySelector('.mouse-glow') as HTMLElement;
                if (mouseGlow) mouseGlow.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0) scale(1)';
                el.style.borderColor = 'var(--border-subtle)';
                el.style.boxShadow = 'none';
                const gradientOverlay = el.querySelector('.gradient-overlay') as HTMLElement;
                if (gradientOverlay) gradientOverlay.style.opacity = '0.04';
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
                  background: `radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${theme.glowColor}, transparent 70%)`,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  borderRadius: 'inherit',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {/* Gradient overlay behind content */}
              <div
                className="gradient-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: theme.gradient,
                  opacity: 0.04,
                  transition: 'opacity 0.4s ease',
                  borderRadius: 'inherit',
                }}
              />

              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '15%',
                right: '15%',
                height: '3px',
                background: theme.gradient,
                borderRadius: '0 0 3px 3px',
                opacity: 0.5,
              }} />

              {/* Fav button */}
              <button
                className="fav-btn"
                onClick={(e) => toggleFavorite(e, game.id)}
                style={{
                  position: 'absolute',
                  top: '0.9rem',
                  right: '0.9rem',
                  background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: isFavorite ? '#ef4444' : 'var(--text-muted)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: 20,
                  opacity: isFavorite ? 1 : 0.6,
                  backdropFilter: 'blur(8px)',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.opacity = isFavorite ? '1' : '0.6';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>

              {/* Game icon */}
              <div style={{
                fontSize: '2.8rem',
                marginBottom: '0.75rem',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                position: 'relative',
                zIndex: 1,
              }}>
                {theme.icon}
              </div>

              {/* Game name */}
              <h2 style={{
                margin: 0,
                fontSize: '1.65rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                position: 'relative',
                zIndex: 1,
              }}>
                {game.name}
              </h2>

              {/* Tagline */}
              <div style={{
                marginTop: '0.5rem',
                color: 'var(--text-tertiary)',
                fontSize: '0.85rem',
                fontWeight: 400,
                fontStyle: 'italic',
                position: 'relative',
                zIndex: 1,
              }}>
                {theme.tagline}
              </div>

              {/* Fighter count badge */}
              <div style={{
                marginTop: '1.25rem',
                padding: '0.35rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-badge)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                position: 'relative',
                zIndex: 1,
                backdropFilter: 'blur(6px)',
              }}>
                {game.characters.length} Fighter{game.characters.length !== 1 ? 's' : ''}
              </div>
            </button>
          );
        })}
      </main>

      {/* Footer branding */}
      <footer style={{
        marginTop: '3rem',
        color: 'var(--text-muted)',
        fontSize: '0.75rem',
        fontWeight: 400,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        animation: 'fadeIn 0.8s ease 0.5s both',
      }}>
        FGC Companion Tool
      </footer>
    </div>
  );
};
