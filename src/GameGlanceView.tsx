import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { Move } from './types';
import { GlyphSequence } from './GlyphSequence';
import type { ControllerType } from './glyphMap';
import { useTheme } from './ThemeContext';

interface Props {
  playlist: Move[];
  gameName: string;
  gameDeveloper?: string;
  characterName: string;
  controller: ControllerType;
  onSetController?: (c: ControllerType) => void;
  onExit: () => void;
  notationSystem?: 'numpad' | 'traditional' | 'mk';
}

interface WakeLockSentinel {
  release: () => Promise<void>;
}

export const GameGlanceMainView: React.FC<Props> = ({ playlist, gameName, characterName, controller, notationSystem, onExit }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);
  const { theme } = useTheme();

  // Options
  const [showOptions, setShowOptions] = useState(false);
  const [displayMode, setDisplayMode] = useState<'paged' | 'smooth' | 'stadium'>('paged');
  const [flipDelayMs, setFlipDelayMs] = useState(5000);
  const [itemsPerPage, setItemsPerPage] = useState(() => window.innerWidth <= 480 ? 3 : 5);

  const effectiveItemsPerPage = displayMode === 'stadium' ? 1 : itemsPerPage;
  const totalPages = Math.ceil(playlist.length / effectiveItemsPerPage);
  const isDark = theme === 'dark';
  const listContainerRef = useRef<HTMLDivElement>(null);

  // Progress animation and Wake Lock
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator && isPlaying) {
          wakeLockRef.current = await (navigator as unknown as { wakeLock: { request: (type: string) => Promise<WakeLockSentinel> } }).wakeLock.request('screen');
        }
      } catch (err) {
        console.warn('Wake Lock error:', err);
      }
    };
    const releaseWakeLock = () => {
      if (wakeLockRef.current) {
        wakeLockRef.current.release().then(() => {
          wakeLockRef.current = null;
        }).catch(() => {});
      }
    };

    if (isPlaying) requestWakeLock();
    else releaseWakeLock();

    return () => releaseWakeLock();
  }, [isPlaying]);
  
  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    let animFrame: number;

    if (displayMode === 'paged' || displayMode === 'stadium') {
      if (totalPages <= 1) return;
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const pct = Math.min((elapsed / flipDelayMs) * 100, 100);
        setProgress(pct);

        if (elapsed >= flipDelayMs) {
          setCurrentPage(prev => (prev + 1) % totalPages);
          setProgress(0);
          return;
        }
        animFrame = requestAnimationFrame(tick);
      };
      animFrame = requestAnimationFrame(tick);
    } else {
      // Smooth scroll mode
      if (!listContainerRef.current) return;
      const el = listContainerRef.current;
      
      // Speed: How many ms to scroll exactly one viewport height
      const pxPerMs = el.clientHeight / flipDelayMs;
      let lastTime = performance.now();
      let currentScroll = el.scrollTop;
      
      const tick = (now: number) => {
        const dt = now - lastTime;
        lastTime = now;
        currentScroll += pxPerMs * dt;
        
        // Handle bottom collision (auto loop)
        if (currentScroll >= (el.scrollHeight - el.clientHeight)) {
          currentScroll = 0; // Seamless jump back
        }
        el.scrollTop = currentScroll;
        animFrame = requestAnimationFrame(tick);
      };
      animFrame = requestAnimationFrame(tick);
    }

    return () => cancelAnimationFrame(animFrame);
  }, [isPlaying, flipDelayMs, totalPages, currentPage, displayMode]);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    setProgress(0);
  }, []);

  if (playlist.length === 0) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-lg)',
      }}>
        <div style={{ fontSize: '3rem' }}>🎮</div>
        <h2 style={{ fontWeight: 700, fontSize: '1.5rem' }}>No Moves Selected</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Go back and pick some moves for your playlist</p>
        <button
          onClick={onExit}
          style={{
            padding: '0.75rem 2rem',
            background: 'linear-gradient(135deg, var(--accent-indigo), var(--accent-purple))',
            color: '#fff',
            border: 'none',
            borderRadius: 'var(--radius-lg)',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontWeight: 600,
            transition: 'all 0.25s ease',
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,0.3)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          ← Return
        </button>
      </div>
    );
  }

  const currentItems = (displayMode === 'paged' || displayMode === 'stadium') 
    ? playlist.slice(currentPage * effectiveItemsPerPage, (currentPage + 1) * effectiveItemsPerPage) 
    : playlist;
  const effectiveController = gameName.toLowerCase().includes('tatsunoko') ? 'wii' : controller;

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      backgroundColor: displayMode === 'stadium' ? (isDark ? '#000000' : '#f0f0f0') : 'var(--bg-primary)',
      overflow: 'hidden',
      transition: 'background-color 0.4s ease',
    }}>

      {/* HUD Header */}
      <div style={{
        padding: '0.6rem 1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: isDark ? 'rgba(10, 10, 18, 0.85)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderBottom: '1px solid var(--border-subtle)',
        zIndex: 10,
        animation: 'fadeIn 0.4s ease both',
      }}>
        {/* Left side: breadcrumb */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.9rem',
        }}>
          <button
            id="gameglance-exit"
            onClick={onExit}
            style={{
              background: 'var(--bg-input)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              padding: '0.45rem 0.9rem',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'inherit',
              fontWeight: 500,
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseOver={e => {
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
              e.currentTarget.style.transform = 'translateX(-2px)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.background = 'var(--bg-input)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            ← Exit
          </button>
          <span style={{ color: 'var(--text-muted)' }}>·</span>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{gameName}</span>
          <span style={{ color: 'var(--text-muted)' }}>›</span>
          <button 
            onClick={() => {
              const container = document.getElementById('gameglance-list-container');
              if (container) {
                container.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            style={{ 
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)', 
              fontWeight: 700,
              cursor: 'pointer',
              padding: '2px 4px',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              transition: 'color 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent-indigo)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}
            title="Back to Top"
          >
            {characterName}
          </button>
          <span style={{
            padding: '0.2rem 0.65rem',
            borderRadius: 'var(--radius-full)',
            background: isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(99, 102, 241, 0.1)',
            color: isDark ? '#a5b4fc' : '#4f46e5',
            fontSize: '0.75rem',
            fontWeight: 600,
          }}>
            {playlist.length} moves
          </span>
        </div>

        {/* Right side: controls */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>


          <button
            id="gameglance-play-pause"
            onClick={() => {
              if (isPlaying && displayMode === 'paged') setProgress(0);
              setIsPlaying(!isPlaying);
            }}
            style={{
              padding: '0.45rem 0.85rem',
              background: isPlaying
                ? (isDark ? 'rgba(244, 63, 94, 0.12)' : 'rgba(244, 63, 94, 0.1)')
                : (isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.1)'),
              border: `1px solid ${isPlaying ? 'rgba(244, 63, 94, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
              color: isPlaying ? (isDark ? '#fb7185' : '#e11d48') : (isDark ? '#34d399' : '#059669'),
              borderRadius: 'var(--radius-md)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>

          <button
            onClick={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
                setIsFullscreen(true);
              } else {
                if (document.exitFullscreen) {
                  document.exitFullscreen();
                  setIsFullscreen(false);
                }
              }
            }}
            style={{
              padding: '0.45rem 0.85rem',
              background: 'var(--bg-input)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.25s ease',
            }}
          >
            {isFullscreen ? '⛶ Exit' : '⛶ Full'}
          </button>

          <button
            id="gameglance-options"
            onClick={() => setShowOptions(!showOptions)}
            style={{
              padding: '0.45rem 0.85rem',
              background: showOptions
                ? (isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.12)')
                : 'var(--bg-input)',
              border: `1px solid ${showOptions ? 'rgba(99, 102, 241, 0.3)' : 'var(--border-subtle)'}`,
              color: showOptions ? (isDark ? '#a5b4fc' : '#4f46e5') : 'var(--text-secondary)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ⚙ Settings
          </button>
        </div>
      </div>

      {/* Progress bar (only in paged or stadium mode) */}
      {(displayMode === 'paged' || displayMode === 'stadium') && totalPages > 1 && isPlaying && (
        <div style={{
          height: '3px',
          background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)',
          position: 'relative',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--accent-indigo), var(--accent-purple))',
            transition: 'none',
            borderRadius: '0 3px 3px 0',
          }} />
        </div>
      )}

      {/* Options Panel */}
      {showOptions && (
        <div style={{
          position: 'absolute',
          top: '4rem',
          right: '1.5rem',
          background: isDark ? 'rgba(15, 15, 30, 0.96)' : 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          border: '1px solid var(--border-accent)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.5rem',
          zIndex: 100,
          boxShadow: 'var(--shadow-lg)',
          width: '280px',
          animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
        }}>
          <h3 style={{
            margin: '0 0 1rem 0',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: isDark ? '#a5b4fc' : '#4f46e5',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}>
            Display Settings
          </h3>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.4rem',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
            }}>
              <span>Display Mode</span>
            </label>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <button 
                onClick={() => { setDisplayMode('smooth'); setProgress(0); }}
                style={{
                  flex: 1, padding: '0.4rem', fontSize: '0.75rem', borderRadius: 'var(--radius-md)', background: displayMode === 'smooth' ? 'var(--accent-indigo)' : 'var(--bg-input)', color: displayMode === 'smooth' ? '#fff' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                Scroll
              </button>
              <button 
                onClick={() => { setDisplayMode('paged'); setProgress(0); }}
                style={{
                  flex: 1, padding: '0.4rem', fontSize: '0.75rem', borderRadius: 'var(--radius-md)', background: displayMode === 'paged' ? 'var(--accent-indigo)' : 'var(--bg-input)', color: displayMode === 'paged' ? '#fff' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                Page
              </button>
              <button 
                onClick={() => { setDisplayMode('stadium'); setProgress(0); setCurrentPage(0); }}
                style={{
                  flex: 1, padding: '0.4rem', fontSize: '0.75rem', borderRadius: 'var(--radius-md)', background: displayMode === 'stadium' ? 'var(--accent-indigo)' : 'var(--bg-input)', color: displayMode === 'stadium' ? '#fff' : 'var(--text-secondary)', border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                Stadium
              </button>
            </div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '0.4rem',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
            }}>
              <span>{displayMode === 'smooth' ? 'Scroll Speed' : 'Flip Speed'}</span>
              <span style={{ color: 'var(--text-primary)', fontFamily: "'JetBrains Mono', monospace" }}>
                {flipDelayMs / 1000}s
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="30"
              value={flipDelayMs / 1000}
              onChange={e => setFlipDelayMs(parseInt(e.target.value) * 1000)}
              style={{
                width: '100%',
                accentColor: 'var(--accent-indigo)',
                height: '4px',
              }}
            />
          </div>

          {displayMode === 'paged' && (
            <div>
              <label style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.4rem',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
              }}>
                <span>Moves per Page</span>
                <span style={{ color: 'var(--text-primary)', fontFamily: "'JetBrains Mono', monospace" }}>
                  {itemsPerPage}
                </span>
              </label>
              <input
                type="range"
                min="1"
                max="15"
                value={itemsPerPage}
                onChange={e => {
                  setItemsPerPage(parseInt(e.target.value));
                  setCurrentPage(0);
                }}
                style={{
                  width: '100%',
                  accentColor: 'var(--accent-indigo)',
                  height: '4px',
                }}
              />
            </div>
          )}
        </div>
      )}

      {/* Main content: move cards */}
      <div 
        id="gameglance-list-container"
        ref={listContainerRef}
        style={{
          flex: 1,
          padding: '0.75rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          overflowY: 'auto',
          justifyContent: displayMode === 'stadium' || currentItems.length <= 3 ? 'center' : 'flex-start',
          alignItems: 'center',
        }}>
        {currentItems.map((move, idx) => (
          <div
            key={`${currentPage}-${idx}`}
            style={{
              display: 'flex',
              flexDirection: displayMode === 'stadium' ? 'column' : 'row',
              justifyContent: displayMode === 'stadium' ? 'center' : 'space-between',
              alignItems: 'center',
              width: '100%',
              maxWidth: displayMode === 'stadium' ? '100%' : '1200px',
              background: displayMode === 'stadium' ? 'transparent' : 'var(--bg-card)',
              padding: displayMode === 'stadium' ? '0' : '1.35rem 1.75rem',
              borderRadius: 'var(--radius-xl)',
              border: displayMode === 'stadium' ? 'none' : '1px solid var(--border-subtle)',
              animation: `fadeInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 50}ms both`,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              gap: displayMode === 'stadium' ? '3rem' : '1.5rem',
              backdropFilter: displayMode === 'stadium' ? 'none' : 'blur(8px)',
            }}
            onMouseOver={e => {
              if (displayMode === 'stadium') return;
              e.currentTarget.style.borderColor = 'var(--border-medium)';
              e.currentTarget.style.background = 'var(--bg-card-hover)';
              e.currentTarget.style.transform = 'translateX(4px) scale(1.01)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}
            onMouseOut={e => {
              if (displayMode === 'stadium') return;
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.background = 'var(--bg-card)';
              e.currentTarget.style.transform = 'translateX(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Move name + index */}
            <div style={{ display: 'flex', flexDirection: displayMode === 'stadium' ? 'column' : 'row', alignItems: 'center', gap: '1rem', minWidth: 0 }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: displayMode === 'stadium' ? '1.5rem' : '0.7rem',
                fontWeight: 700,
                color: displayMode === 'stadium' ? 'var(--accent-indigo)' : 'var(--text-muted)',
                width: displayMode === 'stadium' ? 'auto' : '32px',
                textAlign: 'center',
                flexShrink: 0,
                marginBottom: displayMode === 'stadium' ? '1rem' : '0',
              }}>
                {displayMode === 'stadium' ? `MOVE ${String(currentPage * effectiveItemsPerPage + idx + 1).padStart(2, '0')}` : String(currentPage * effectiveItemsPerPage + idx + 1).padStart(2, '0')}
              </span>
              <h2 style={{
                fontSize: displayMode === 'stadium' ? 'clamp(3rem, 6vw, 6rem)' : 'clamp(1.2rem, 3vw, 1.8rem)',
                color: isDark ? '#ffffff' : '#000000',
                margin: 0,
                fontWeight: 900,
                letterSpacing: '-0.01em',
                whiteSpace: displayMode === 'stadium' ? 'normal' : 'nowrap',
                textAlign: 'center',
                overflow: displayMode === 'stadium' ? 'visible' : 'hidden',
                textOverflow: displayMode === 'stadium' ? 'clip' : 'ellipsis',
                textShadow: isDark ? '0 2px 10px rgba(0,0,0,0.5)' : 'none',
              }}>
                {move.name}
              </h2>
            </div>

            {/* Input glyphs */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transform: displayMode === 'stadium' ? 'scale(calc(2 * var(--icon-scale, 1)))' : 'scale(var(--icon-scale, 1))',
              transformOrigin: 'center',
              marginTop: displayMode === 'stadium' ? '2.5rem' : '0',
            }}>
              <GlyphSequence inputs={[move.input]} controller={effectiveController} notationSystem={notationSystem} large={true} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom: pagination dots (only in paged or stadium mode) */}
      {(displayMode === 'paged' || displayMode === 'stadium') && totalPages > 1 && (
        <div style={{
          padding: '0.85rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          background: isDark ? 'rgba(10, 10, 18, 0.65)' : 'rgba(255, 255, 255, 0.65)',
          borderTop: '1px solid var(--border-subtle)',
          backdropFilter: 'blur(12px)',
        }}>
          {/* Prev button */}
          <button
            onClick={() => goToPage((currentPage - 1 + totalPages) % totalPages)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-tertiary)',
              cursor: 'pointer',
              fontSize: '1.2rem',
              minWidth: '48px',
              minHeight: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              fontFamily: 'inherit',
              transition: 'color 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--text-tertiary)'}
            aria-label="Previous page"
          >
            ‹
          </button>

          {/* Dots */}
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className="pagination-dot"
              onClick={() => goToPage(i)}
              aria-label={`Go to page ${i + 1}`}
              style={{
                width: i === currentPage ? '28px' : '8px',
                height: '8px',
                minWidth: '48px',
                minHeight: '48px',
                position: 'relative',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                width: i === currentPage ? '28px' : '8px',
                height: '8px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: i === currentPage ? 'var(--accent-indigo)' : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'),
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: i === currentPage ? '0 0 8px rgba(99, 102, 241, 0.3)' : 'none',
              }} />
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => goToPage((currentPage + 1) % totalPages)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-tertiary)',
              cursor: 'pointer',
              fontSize: '1.2rem',
              minWidth: '48px',
              minHeight: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              fontFamily: 'inherit',
              transition: 'color 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--text-tertiary)'}
            aria-label="Next page"
          >
            ›
          </button>

          {/* Page number */}
          <span style={{
            marginLeft: '0.5rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.7rem',
            color: 'var(--text-tertiary)',
            fontWeight: 600,
          }}>
            {currentPage + 1}/{totalPages}
          </span>
        </div>
      )}
    </div>
  );
};
