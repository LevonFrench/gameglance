import React, { useState, useEffect, useRef } from 'react';
import { useArrowNavigation } from './useArrowNavigation';
import type { GameDefinition } from './types';
import { SUPPORTED_GAMES } from './games';
import { useTheme } from './ThemeContext';
import { AmbientMesh } from './AmbientMesh';

interface Props {
  onSelectGame: (game: GameDefinition) => void;
  disableInitialAnimation?: boolean;
}

export const ApprovalGameSelectView: React.FC<Props> = ({ onSelectGame, disableInitialAnimation }) => {
  useArrowNavigation('[id^="approval-game-card-"]');

  const [availableGames, setAvailableGames] = useState<GameDefinition[]>([]);
  const { theme } = useTheme();
  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
  useEffect(() => {
    window.scrollTo(0,0);
    
    // Find all available scraped data dynamically using Vite's import.meta.glob
    const modules = import.meta.glob('/public/data/scraped_combos/**/*.json');
    const gameIds = new Set<string>();
    
    for (const path in modules) {
      const parts = path.split('/');
      if (parts.length >= 5) {
        // e.g. /public/data/scraped_combos/street-fighter-6/ryu_supercombo.json
        const gameId = parts[4]; 
        gameIds.add(gameId);
      }
    }

    const filteredGames = SUPPORTED_GAMES.filter(g => gameIds.has(g.id));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAvailableGames(filteredGames);
  }, []);

  const isDark = theme !== 'light';

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, gameId: string) => {
    const el = cardRefs.current.get(gameId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mouse-x', `${x}%`);
    el.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '0 2rem 2rem 2rem',
      position: 'relative',
      transition: 'justify-content 0.4s ease',
    }}>
      <AmbientMesh 
        colors={isDark 
          ? ['rgba(234, 179, 8, 0.15)', 'rgba(249, 115, 22, 0.12)', 'rgba(239, 68, 68, 0.1)'] 
          : ['rgba(234, 179, 8, 0.20)', 'rgba(249, 115, 22, 0.18)', 'rgba(239, 68, 68, 0.15)']} 
        speed={1.0} 
      />

      <header style={{
        textAlign: 'center',
        marginBottom: '3rem',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-primary)',
        padding: '2rem 1rem 1rem 1rem',
        width: '100vw',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--accent-orange, #ea580c)',
          marginBottom: '0.75rem',
        }}>
          Combo Approval System
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
      </header>

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 'calc(1.5rem * var(--spacing-scale, 1))',
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
      }}>
        {availableGames.map((game, index) => {
          let hash = 0;
          for (let i = 0; i < game.id.length; i++) hash = game.id.charCodeAt(i) + ((hash << 5) - hash);
          const hue1 = Math.abs(hash) % 360;
          const hue2 = (hue1 + 40) % 360;
          const gradient = `linear-gradient(135deg, hsl(${hue1}, 70%, 50%) 0%, hsl(${hue2}, 80%, 40%) 100%)`;
          const glowColor = `hsla(${hue1}, 70%, 50%, 0.25)`;

          return (
            <button
              key={game.id}
              id={`approval-game-card-${game.id}`}
              ref={el => { if (el) cardRefs.current.set(game.id, el); }}
              onClick={() => onSelectGame(game)}
              onMouseMove={(e) => handleMouseMove(e, game.id)}
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.25rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '110px',
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
                el.style.boxShadow = `0 24px 64px ${glowColor}, var(--shadow-glow-indigo)`;
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
              <div
                className="mouse-glow"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 70%)`,
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  borderRadius: 'inherit',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
              <div
                className="gradient-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: gradient,
                  opacity: 0.04,
                  transition: 'opacity 0.4s ease',
                  borderRadius: 'inherit',
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: '15%',
                right: '15%',
                height: '3px',
                background: gradient,
                borderRadius: '0 0 3px 3px',
                opacity: 0.5,
              }} />

              <h2 style={{
                margin: 0,
                fontSize: '1.35rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                position: 'relative',
                zIndex: 1,
              }}>
                {game.name}
              </h2>

              <div style={{
                marginTop: '0.85rem',
                padding: '0.35rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-badge)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                position: 'relative',
                zIndex: 1,
              }}>
                Awaiting Approval
              </div>
            </button>
          );
        })}
        {availableGames.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
            No scraped combos found in public/data/scraped_combos/
          </div>
        )}
      </main>
    </div>
  );
};
