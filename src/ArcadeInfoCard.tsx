import React, { useState } from 'react';
import type { GameDefinition, GameSystemData } from './types';
import { useTheme } from './ThemeContext';

interface Props {
  game: GameDefinition;
  systemData?: GameSystemData;
}

export const ArcadeInfoCard: React.FC<Props> = ({ game, systemData }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<'info' | 'systems'>('info');

  return (
    <div style={{
      background: isDark ? 'linear-gradient(180deg, #1f2937 0%, #111827 100%)' : 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
      border: `1px solid ${isDark ? '#374151' : '#cbd5e1'}`,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: isDark ? '0 10px 25px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' : '0 10px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)',
      width: '100%',
      marginBottom: 'var(--space-2xl)'
    }}>
      {/* Marquee Top Accent */}
      <div style={{
        height: '4px',
        background: 'linear-gradient(90deg, var(--accent-indigo), var(--accent-cyan), var(--accent-indigo))',
        width: '100%'
      }} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        
        {/* Header Section */}
        <div style={{ 
          padding: 'var(--space-xl)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Watermark Logo */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            fontWeight: 900,
            color: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            pointerEvents: 'none',
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: '-0.02em',
            zIndex: 0
          }}>
            {game.name.toUpperCase()}
          </div>

          <h2 style={{ 
            margin: 0, 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            position: 'relative',
            zIndex: 1,
            letterSpacing: '-0.02em',
            fontFamily: "'Outfit', sans-serif"
          }}>
            {game.name}
          </h2>
          
          {(game.developer || game.releaseYear) && (
            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-md)', 
              color: 'var(--text-secondary)',
              marginTop: 'var(--space-xs)',
              fontSize: '1rem',
              position: 'relative',
              zIndex: 1,
              fontWeight: 500
            }}>
              {game.developer && <span>{game.developer}</span>}
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
              zIndex: 1
            }}>
              "{game.tagline}"
            </p>
          )}

          {game.tags && game.tags.length > 0 && (
            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-xs)', 
              marginTop: 'var(--space-md)',
              flexWrap: 'wrap',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              {game.tags.map(tag => (
                <span key={tag} style={{
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
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
          borderTop: `1px solid ${isDark ? '#374151' : '#cbd5e1'}`,
          borderBottom: `1px solid ${isDark ? '#374151' : '#cbd5e1'}`,
          background: isDark ? '#111827' : '#f1f5f9'
        }}>
          <button
            onClick={() => setActiveTab('info')}
            style={{
              flex: 1,
              padding: 'var(--space-sm) var(--space-md)',
              background: activeTab === 'info' ? (isDark ? '#374151' : '#e2e8f0') : 'transparent',
              color: activeTab === 'info' ? 'var(--text-primary)' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
          >
            Game Details
          </button>
          <button
            onClick={() => setActiveTab('systems')}
            style={{
              flex: 1,
              padding: 'var(--space-sm) var(--space-md)',
              background: activeTab === 'systems' ? (isDark ? '#374151' : '#e2e8f0') : 'transparent',
              color: activeTab === 'systems' ? 'var(--text-primary)' : 'var(--text-secondary)',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.2s'
            }}
          >
            Mechanics & Systems
          </button>
        </div>

        {/* Tab Content */}
        <div style={{ padding: 'var(--space-xl)', minHeight: '150px' }}>
          {activeTab === 'info' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', color: 'var(--text-secondary)' }}>
              <p style={{ margin: 0 }}>
                This is a placeholder for game details. We can use this space to describe the roster composition, the platform it ran on (e.g., {game.platform || 'Arcade'}), and other meta information.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', marginTop: 'var(--space-sm)' }}>
                <div style={{ background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '4px', textTransform: 'uppercase' }}>Notation System</div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{game.notationSystem || 'Standard Numpad'}</div>
                </div>
                <div style={{ background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginBottom: '4px', textTransform: 'uppercase' }}>Visual Theme</div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{game.theme || 'Default Modern'}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'systems' && (
            <div>
              {systemData && systemData.mechanics ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--space-md)' }}>
                  {systemData.mechanics.map(mech => (
                    <div key={mech.name} style={{ background: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
                      <div style={{ fontWeight: 600, color: 'var(--accent-indigo)', marginBottom: '4px' }}>{mech.name}</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{mech.description}</div>
                      {mech.input && (
                        <div style={{ marginTop: '8px', fontSize: '0.85rem', fontFamily: 'monospace', color: 'var(--text-primary)', background: isDark ? '#111827' : '#e2e8f0', padding: '2px 6px', borderRadius: '4px', display: 'inline-block' }}>
                          {mech.input}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: 'var(--space-xl) 0' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 'var(--space-md)', opacity: 0.5 }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <p style={{ margin: 0 }}>No system mechanics data available for this title.</p>
                  <p style={{ fontSize: '0.85rem', marginTop: 'var(--space-xs)' }}>(Future Update: populate from mechanics.json)</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
