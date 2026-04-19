import React, { useState, useEffect } from 'react';
import type { GameDefinition, GameSystemData } from './types';
import { useTheme } from './ThemeContext';

interface Props {
  game: GameDefinition;
}

export const GameInfoCard: React.FC<Props> = ({ game }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark' || theme !== 'light'; // Default to dark for premium feel
  const [activeTab, setActiveTab] = useState<'info' | 'systems'>('systems');
  const [systemData, setSystemData] = useState<GameSystemData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('/data/mechanics.json')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        if (data[game.id]) {
          setSystemData(data[game.id]);
        } else {
          setSystemData(null);
        }
      })
      .catch(err => {
        console.error("Error loading mechanics:", err);
        setSystemData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [game.id]);

  // Extract a color based on game ID to use for subtle accents
  let hash = 0;
  for (let i = 0; i < game.id.length; i++) hash = game.id.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  const accentGradient = `linear-gradient(135deg, hsl(${hue}, 80%, 60%), hsl(${(hue + 40) % 360}, 90%, 65%))`;
  const accentGlow = `hsla(${hue}, 80%, 60%, 0.15)`;

  return (
    <div style={{
      background: isDark ? 'rgba(20, 20, 30, 0.6)' : 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: isDark 
        ? `0 24px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 40px ${accentGlow}` 
        : `0 24px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8), 0 0 40px hsla(${hue}, 80%, 60%, 0.05)`,
      width: '100%',
      marginBottom: 'var(--space-2xl)',
      transition: 'all 0.4s ease'
    }}>
      {/* Top Gradient Bar */}
      <div style={{ height: '4px', background: accentGradient, width: '100%' }} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        
        {/* Header Section */}
        <div style={{ 
          padding: 'var(--space-2xl) var(--space-xl)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: isDark 
            ? 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)' 
            : 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 100%)'
        }}>
          {/* Watermark Logo */}
          <div style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            fontWeight: 900,
            color: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.03)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            pointerEvents: 'none',
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: '-0.03em',
            zIndex: 0
          }}>
            {game.name.toUpperCase()}
          </div>

          <h2 style={{ 
            margin: 0, 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            position: 'relative',
            zIndex: 1,
            letterSpacing: '-0.02em',
            fontFamily: "'Outfit', sans-serif",
            textShadow: isDark ? '0 4px 12px rgba(0,0,0,0.5)' : 'none'
          }}>
            {game.name}
          </h2>
          
          {(game.developer || game.releaseYear) && (
            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-md)', 
              color: 'var(--text-secondary)',
              marginTop: 'var(--space-sm)',
              fontSize: '1.1rem',
              position: 'relative',
              zIndex: 1,
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              {game.developer && <span style={{ color: `hsl(${hue}, 70%, 60%)` }}>{game.developer}</span>}
              {game.developer && game.releaseYear && <span>•</span>}
              {game.releaseYear && <span>{game.releaseYear}</span>}
            </div>
          )}

          {game.tagline && (
            <p style={{
              color: 'var(--text-tertiary)',
              fontStyle: 'italic',
              marginTop: 'var(--space-md)',
              maxWidth: '600px',
              position: 'relative',
              zIndex: 1,
              fontSize: '1.1rem'
            }}>
              "{game.tagline}"
            </p>
          )}

          {game.tags && game.tags.length > 0 && (
            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-sm)', 
              marginTop: 'var(--space-lg)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              {game.tags.map(tag => (
                <span key={tag} style={{
                  background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                  backdropFilter: 'blur(4px)'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Info / Systems Tabs */}
        <div style={{ 
          display: 'flex', 
          borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
          borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
          background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.02)'
        }}>
          <button
            onClick={() => setActiveTab('info')}
            style={{
              flex: 1,
              padding: '1rem',
              background: activeTab === 'info' ? (isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)') : 'transparent',
              color: activeTab === 'info' ? 'var(--text-primary)' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              borderBottom: activeTab === 'info' ? `2px solid hsl(${hue}, 80%, 60%)` : '2px solid transparent'
            }}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('systems')}
            style={{
              flex: 1,
              padding: '1rem',
              background: activeTab === 'systems' ? (isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)') : 'transparent',
              color: activeTab === 'systems' ? 'var(--text-primary)' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              borderBottom: activeTab === 'systems' ? `2px solid hsl(${hue}, 80%, 60%)` : '2px solid transparent'
            }}
          >
            System Mechanics
          </button>
        </div>

        {/* Tab Content */}
        <div style={{ padding: 'var(--space-2xl) var(--space-xl)', minHeight: '300px' }}>
          {activeTab === 'info' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', color: 'var(--text-secondary)', animation: 'fadeInUp 0.4s ease' }}>
              <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.6 }}>
                The core metadata and technical details for <strong>{game.name}</strong>. 
                This section serves as a placeholder for deeper integration with external wikis or community frame data repositories.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
                <div style={{ 
                  background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)', 
                  padding: 'var(--space-lg)', 
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
                }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Notation System</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.2rem' }}>{game.notationSystem === 'numpad' ? 'Numpad (Anime)' : game.notationSystem === 'mk' ? 'MK Numbers' : 'Traditional'}</div>
                </div>
                
                <div style={{ 
                  background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)', 
                  padding: 'var(--space-lg)', 
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
                }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Card Layout</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.2rem' }}>{game.theme || 'Default Modern'}</div>
                </div>
                
                <div style={{ 
                  background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)', 
                  padding: 'var(--space-lg)', 
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
                }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Platform</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.2rem' }}>{game.platform || 'Arcade'}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'systems' && (
            <div style={{ animation: 'fadeInUp 0.4s ease' }}>
              {loading ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-tertiary)' }}>
                  Loading mechanics...
                </div>
              ) : systemData && systemData.mechanics ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
                  {systemData.mechanics.map((mech, idx) => (
                    <div key={mech.name} style={{ 
                      background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)', 
                      padding: 'var(--space-lg)', 
                      borderRadius: 'var(--radius-lg)',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Subtle mechanic number watermark */}
                      <div style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-5px',
                        fontSize: '4rem',
                        fontWeight: 900,
                        color: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                        lineHeight: 1,
                        pointerEvents: 'none'
                      }}>
                        {(idx + 1).toString().padStart(2, '0')}
                      </div>
                      
                      <div style={{ 
                        fontWeight: 800, 
                        color: `hsl(${hue}, 80%, 70%)`, 
                        fontSize: '1.1rem',
                        marginBottom: '8px',
                        position: 'relative',
                        zIndex: 1
                      }}>
                        {mech.name}
                      </div>
                      
                      <div style={{ 
                        fontSize: '0.95rem', 
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)',
                        flexGrow: 1,
                        position: 'relative',
                        zIndex: 1
                      }}>
                        {mech.description}
                      </div>
                      
                      {mech.input && (
                        <div style={{ 
                          marginTop: '16px', 
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <div style={{ 
                            fontSize: '0.85rem', 
                            fontWeight: 700,
                            fontFamily: 'monospace', 
                            color: isDark ? '#fff' : '#000', 
                            background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)', 
                            padding: '6px 12px', 
                            borderRadius: '6px', 
                            display: 'inline-block',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`
                          }}>
                            {mech.input}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: '3rem 0' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 'var(--space-md)', opacity: 0.3 }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>No mechanics data available</p>
                  <p style={{ fontSize: '0.95rem', marginTop: 'var(--space-sm)' }}>We haven't populated the database for {game.name} yet.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
