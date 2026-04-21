import React from 'react';
import { useTheme } from './useTheme';

interface TopHeaderProps {
  onBack: () => void;
  onHome: () => void;
  gameName?: string;
  onGameClick?: () => void;
  characterName?: string;
  onCharacterClick?: () => void;
  isDark?: boolean;
  disableInitialAnimation?: boolean;
  selectedCount?: number;
  onLaunchGameGlance?: () => void;
  onClearGameGlance?: () => void;
  hideGameGlanceControls?: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  onBack,
  onHome,
  gameName,
  onGameClick,
  characterName,
  onCharacterClick,
  disableInitialAnimation = false,
  selectedCount = 0,
  onLaunchGameGlance,
  onClearGameGlance,
  hideGameGlanceControls = false,
}) => {
  const { isDark } = useTheme();

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'var(--bg-primary)',
      margin: 'calc(-1 * var(--space-xl)) calc(-1 * var(--space-xl)) var(--space-md)',
      padding: 'var(--space-xl) var(--space-xl) var(--space-md)',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'background-color 0.4s ease',
      overflow: 'hidden', // Add overflow hidden for watermark
    }}>
      {/* Background Watermark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(5rem, 12vw, 15rem)',
        fontWeight: 900,
        color: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-0.02em',
        fontFamily: "'Outfit', sans-serif",
        zIndex: 0,
      }}>
        GAMEGLANCE
      </div>

      <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: 'var(--space-lg)',
          animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
          flexWrap: 'wrap',
        }}>
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
            }}
            onMouseOut={e => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>

          {gameName && (
            <>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>·</span>
              <button 
                onClick={onGameClick || onBack}
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)', 
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: '2px 4px',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1.2rem',
                  transition: 'color 0.2s',
                  letterSpacing: '-0.02em',
                }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--accent-indigo)'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}
              >
                {gameName}
              </button>
            </>
          )}

          {characterName && (
            <>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>›</span>
              <button 
                onClick={onCharacterClick || (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)', 
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: '2px 4px',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '1.2rem',
                  transition: 'color 0.2s',
                  letterSpacing: '-0.02em',
                }}
                onMouseOver={e => e.currentTarget.style.color = 'var(--accent-indigo)'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}
                title={onCharacterClick ? "Back to Character Selection" : "Back to Top"}
              >
                {characterName}
              </button>
            </>
          )}

          {/* Right tools: GameGlance controls or Social links */}
          <div className="top-header-social" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {(selectedCount > 0 && !hideGameGlanceControls) ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: '0.5rem' }}>
                <button
                  onClick={onClearGameGlance}
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    borderRadius: 'var(--radius-full)',
                    padding: '4px 10px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--text-secondary)'; }}
                  onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                >
                  Clear
                </button>
                <button
                  onClick={onLaunchGameGlance}
                  style={{
                    background: 'var(--accent-indigo)',
                    border: 'none',
                    color: 'white',
                    borderRadius: 'var(--radius-full)',
                    padding: '4px 14px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)',
                  }}
                  onMouseOver={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(99, 102, 241, 0.5)'}
                  onMouseOut={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(99, 102, 241, 0.3)'}
                >
                  <span>Glance</span>
                  <span style={{ 
                    background: 'rgba(255,255,255,0.2)', 
                    padding: '2px 6px', 
                    borderRadius: '10px', 
                    fontSize: '0.8rem' 
                  }}>
                    {selectedCount}
                  </span>
                </button>
              </div>
            ) : (
              <>
                <a href="#" target="_blank" rel="noreferrer" title="Instagram" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#e1306c'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" target="_blank" rel="noreferrer" title="Twitter" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#1DA1F2'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" target="_blank" rel="noreferrer" title="YouTube" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#FF0000'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="#" target="_blank" rel="noreferrer" title="TikTok" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#FF0050'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a7 7 0 1 1-7-7z"></path></svg>
                </a>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};
