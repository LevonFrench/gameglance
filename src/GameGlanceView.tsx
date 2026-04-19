import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { PlaylistItem } from './types';
import { GlyphSequence } from './GlyphSequence';
import type { ControllerType } from './glyphMap';

interface Props {
  playlist: PlaylistItem[];
  selectedGameId: string;
  gameName: string;
  gameDeveloper?: string;
  selectedCharacterId: string;
  characterName: string;
  controller: ControllerType;
  onSetController?: (c: ControllerType) => void;
  onExit: () => void;
  notationSystem?: 'numpad' | 'traditional' | 'mk';
}

interface WakeLockSentinel {
  release: () => Promise<void>;
}

export const GameGlanceMainView: React.FC<Props> = ({ playlist, gameName, selectedCharacterId, characterName, controller, notationSystem, onExit }) => {
  const uniqueCharacters = Array.from(new Set(playlist.map(p => p.characterId)));
  const [activeTab, setActiveTab] = useState(
    uniqueCharacters.includes(selectedCharacterId) ? selectedCharacterId : uniqueCharacters[0]
  );
  const activePlaylist = playlist.filter(p => p.characterId === activeTab).map(p => p.move);

  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  // Options
  const [displayMode, setDisplayMode] = useState<'paged' | 'smooth' | 'stadium'>('paged');
  const [flipDelayMs, setFlipDelayMs] = useState(5000);
  const [itemsPerPage] = useState(() => window.innerWidth <= 480 ? 3 : 6);

  const effectiveItemsPerPage = displayMode === 'stadium' ? 1 : itemsPerPage;
  const totalPages = Math.ceil(activePlaylist.length / effectiveItemsPerPage);
  const isDark = true;
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
    ? activePlaylist.slice(currentPage * effectiveItemsPerPage, (currentPage + 1) * effectiveItemsPerPage) 
    : activePlaylist;
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

      {/* Unified Header — matches TopHeader style */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0.75rem 1.25rem',
      }}>
        <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}>
          {/* Top row: navigation + controls */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}>
            {/* Home icon */}
            <button
              onClick={onExit}
              title="Exit"
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
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </button>

            <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>·</span>
            <span style={{
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.2rem',
              letterSpacing: '-0.02em',
            }}>{gameName}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>›</span>
            <span style={{
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontFamily: "'Outfit', sans-serif",
              fontSize: '1.2rem',
              letterSpacing: '-0.02em',
            }}>{activeTab === selectedCharacterId ? characterName : activeTab.replace(/-/g, ' ')}</span>

            <span style={{
              padding: '0.2rem 0.65rem',
              borderRadius: 'var(--radius-full)',
              background: isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(99, 102, 241, 0.1)',
              color: isDark ? '#a5b4fc' : '#4f46e5',
              fontSize: '0.75rem',
              fontWeight: 600,
            }}>
              {activePlaylist.length} moves
            </span>

            {/* Right-aligned controls */}
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {/* Mode pills */}
              <div style={{ display: 'flex', gap: '2px', background: 'var(--bg-input)', borderRadius: 'var(--radius-md)', padding: '2px' }}>
                {(['paged', 'smooth', 'stadium'] as const).map(mode => (
                  <button
                    key={mode}
                    onClick={() => { setDisplayMode(mode); setProgress(0); if (mode === 'stadium') setCurrentPage(0); }}
                    style={{
                      padding: '0.3rem 0.6rem',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-sm)',
                      background: displayMode === mode ? 'var(--accent-indigo)' : 'transparent',
                      color: displayMode === mode ? '#fff' : 'var(--text-secondary)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontFamily: 'inherit',
                      textTransform: 'capitalize',
                    }}
                  >
                    {mode === 'paged' ? 'Page' : mode === 'smooth' ? 'Scroll' : 'Stadium'}
                  </button>
                ))}
              </div>

              {/* Speed control */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 500 }}>Speed</span>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={flipDelayMs / 1000}
                  onChange={e => setFlipDelayMs(parseInt(e.target.value) * 1000)}
                  style={{
                    width: '60px',
                    accentColor: 'var(--accent-indigo)',
                    height: '3px',
                  }}
                />
                <span style={{ fontSize: '0.7rem', color: 'var(--text-primary)', fontFamily: "'JetBrains Mono', monospace", minWidth: '1.5rem' }}>
                  {flipDelayMs / 1000}s
                </span>
              </div>

              {/* Play/Pause */}
              <button
                id="gameglance-play-pause"
                onClick={() => {
                  if (isPlaying && displayMode === 'paged') setProgress(0);
                  setIsPlaying(!isPlaying);
                }}
                style={{
                  padding: '0.35rem 0.7rem',
                  background: isPlaying
                    ? (isDark ? 'rgba(244, 63, 94, 0.12)' : 'rgba(244, 63, 94, 0.1)')
                    : (isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.1)'),
                  border: `1px solid ${isPlaying ? 'rgba(244, 63, 94, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                  color: isPlaying ? (isDark ? '#fb7185' : '#e11d48') : (isDark ? '#34d399' : '#059669'),
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                }}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>

              {/* Fullscreen */}
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
                  padding: '0.35rem 0.7rem',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                }}
              >
                {isFullscreen ? '⛶' : '⛶'}
              </button>
            </div>
          </nav>

          {/* Character Tabs (if multiple) */}
          {uniqueCharacters.length > 1 && (
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              paddingTop: '0.5rem',
              overflowX: 'auto',
            }}>
              {uniqueCharacters.map(char => (
                <button
                  key={char}
                  onClick={() => { setActiveTab(char); setCurrentPage(0); }}
                  style={{
                    padding: '0.3rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    background: activeTab === char ? 'var(--accent-indigo)' : 'transparent',
                    color: activeTab === char ? '#fff' : 'var(--text-secondary)',
                    border: activeTab === char ? 'none' : '1px solid var(--border-medium)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s',
                    textTransform: 'capitalize',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {char === selectedCharacterId ? characterName : char.replace(/-/g, ' ')}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Progress bar */}
        {(displayMode === 'paged' || displayMode === 'stadium') && totalPages > 1 && isPlaying && (
          <div style={{
            height: '3px',
            background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
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
      </div>

      {/* Main content: move cards */}
      <div 
        id="gameglance-list-container"
        ref={listContainerRef}
        style={{
          flex: 1,
          padding: displayMode === 'stadium' ? '0' : '0.75rem 1.25rem',
          overflowY: 'auto',
        }}>
        <div style={{
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          display: displayMode === 'stadium' ? 'flex' : 'grid',
          ...(displayMode === 'stadium' ? {
            flexDirection: 'column' as const,
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100%',
          } : {
            gridTemplateColumns: displayMode === 'paged' ? 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))' : '1fr',
            alignContent: currentItems.length <= 4 ? 'center' : 'start',
          }),
          gap: displayMode === 'stadium' ? '3rem' : '0.75rem',
        }}>
        {currentItems.map((move, idx) => (
          <div
            key={`${currentPage}-${idx}`}
            className="move-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'stretch',
              width: '100%',
              padding: displayMode === 'stadium' ? '0' : '1rem',
              animation: `fadeInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 50}ms both`,
              gap: displayMode === 'stadium' ? '3rem' : '0.75rem',
              // Note: Stadium mode overrides the background and border completely
              ...(displayMode === 'stadium' ? {
                background: 'transparent',
                border: 'none',
                backdropFilter: 'none',
                boxShadow: 'none',
              } : {})
            }}
          >
            {/* Move Header: Type + Name */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: displayMode === 'stadium' ? 'center' : 'flex-start' }}>
              {displayMode !== 'stadium' && (
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-yellow, #ffcc00)', fontWeight: 600 }}>
                  {move.type}
                </div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: displayMode === 'stadium' ? '1.5rem' : '0.7rem',
                  fontWeight: 700,
                  color: displayMode === 'stadium' ? 'var(--accent-indigo)' : 'var(--text-muted)',
                  display: displayMode === 'stadium' ? 'block' : 'none',
                }}>
                  {displayMode === 'stadium' ? `MOVE ${String(currentPage * effectiveItemsPerPage + idx + 1).padStart(2, '0')}` : ''}
                </span>
                <h2 style={{
                  fontSize: displayMode === 'stadium' ? 'clamp(3rem, 6vw, 6rem)' : '1.1rem',
                  fontFamily: "'Outfit', sans-serif",
                  color: isDark ? '#ffffff' : '#000000',
                  margin: 0,
                  fontWeight: 700,
                  textShadow: isDark && displayMode === 'stadium' ? '0 2px 10px rgba(0,0,0,0.5)' : 'none',
                }}>
                  {move.name}
                </h2>
              </div>
            </div>

            {/* Input glyphs */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: displayMode === 'stadium' ? 'center' : 'flex-start',
              background: displayMode === 'stadium' ? 'transparent' : 'rgba(0,0,0,0.4)',
              padding: displayMode === 'stadium' ? '0' : '0.75rem',
              borderRadius: displayMode === 'stadium' ? '0' : '12px',
              border: displayMode === 'stadium' ? 'none' : '1px inset rgba(255,255,255,0.05)',
              transform: displayMode === 'stadium' ? 'scale(3)' : 'none',
              transformOrigin: displayMode === 'stadium' ? 'center' : 'left center',
              marginTop: displayMode === 'stadium' ? '4rem' : '0',
              marginBottom: displayMode === 'stadium' ? '4rem' : '0',
            }}>
              <GlyphSequence inputs={[move.input]} controller={effectiveController} notationSystem={notationSystem} large={true} />
            </div>
          </div>
        ))}
        </div>
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
