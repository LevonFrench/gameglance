import React, { useState } from 'react';
import type { GameDefinition } from './types';
import type { ControllerType } from './glyphMap';
import { GlyphSequence } from './GlyphSequence';

interface Props {
  game: GameDefinition;
  controller?: ControllerType;
}

export const GameInfoCard: React.FC<Props> = ({ game, controller = 'xbox' }) => {
  const isDark = true;
  const [activeTab, setActiveTab] = useState<'info' | 'systems'>('systems');
  
  const mechanics = game.systemMechanics || null;

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
        <div style={{ padding: 'var(--space-xl)', minHeight: '200px' }}>
          {activeTab === 'info' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', color: 'var(--text-secondary)', animation: 'fadeInUp 0.4s ease' }}>
              <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.5 }}>
                The core metadata and technical details for <strong>{game.name}</strong>. 
                This section serves as a placeholder for deeper integration with external wikis or community frame data repositories.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
                <div style={{ 
                  background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)', 
                  padding: 'var(--space-md) var(--space-lg)', 
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Notation System</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.1rem' }}>{game.notationSystem === 'numpad' ? 'Numpad (Anime)' : game.notationSystem === 'mk' ? 'MK Numbers' : 'Traditional'}</div>
                </div>
                
                <div style={{ 
                  background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)', 
                  padding: 'var(--space-md) var(--space-lg)', 
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Card Layout</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.1rem' }}>{game.theme || 'Default Modern'}</div>
                </div>
                
                <div style={{ 
                  background: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.8)', 
                  padding: 'var(--space-md) var(--space-lg)', 
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Platform</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.2rem' }}>{game.platform || 'Arcade'}</div>
                </div>
              </div>
              </div>
              
              {game.links && game.links.length > 0 && (
                <div style={{ marginTop: 'var(--space-lg)', paddingTop: 'var(--space-lg)', borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}` }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginBottom: 'var(--space-md)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>External Resources</div>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                    gap: 'var(--space-md)' 
                  }}>
                    {game.links.map(link => (
                      <a 
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-md)',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                          transition: 'all 0.2s ease',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
                          e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)';
                          e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{link.title}</span>
                        <svg style={{ marginLeft: '12px', flexShrink: 0, width: '16px', height: '16px', opacity: 0.5 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'systems' && (
            <div style={{ animation: 'fadeInUp 0.4s ease' }}>
              {mechanics && mechanics.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
                  {mechanics.map((mech, idx) => (
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
                          alignItems: 'center',
                          gap: 'var(--space-sm)',
                          flexWrap: 'wrap'
                        }}>
                          <GlyphSequence 
                             inputs={[mech.input]} 
                             notationSystem={game.notationSystem || 'traditional'} 
                             controller={controller} 
                             isDark={isDark} 
                          />
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
