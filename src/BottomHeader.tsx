import React from 'react';
import type { ControllerType } from './glyphMap';

interface Props {
  controller: ControllerType;
  onSetController: (c: ControllerType) => void;
  notationSystem: string;
  onSetNotationSystem: (n: string) => void;
  onOpenFightcadeSync?: () => void;
  syncConnected?: boolean;
  theme?: 'dark' | 'light';
  onSetTheme?: (t: 'dark' | 'light') => void;
}

export const BottomHeader: React.FC<Props> = ({ 
  controller, 
  onSetController, 
  notationSystem,
  onSetNotationSystem,
  onOpenFightcadeSync,
  syncConnected,
  theme,
  onSetTheme
}) => {

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'var(--bg-elevated)',
      borderTop: '1px solid var(--border-medium)',
      padding: 'calc(0.75rem * var(--spacing-scale)) calc(var(--space-xl) * var(--spacing-scale))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      zIndex: 100,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <div className="bottom-header-controls" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>

        {/* Glyph Setting */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label style={{ fontSize: 'calc(0.8rem * var(--font-scale))', color: 'var(--text-secondary)', fontWeight: 500 }}>Glyphs:</label>
          <select
            value={controller}
            onChange={(e) => onSetController(e.target.value as ControllerType)}
            style={{
              padding: 'calc(0.35rem * var(--spacing-scale)) calc(0.65rem * var(--spacing-scale))',
              background: 'var(--bg-input)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: 'calc(0.8rem * var(--font-scale))',
              fontFamily: 'inherit',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <optgroup label="Modern" style={{ background: 'var(--bg-card)' }}>
              <option value="playstation" style={{ background: 'var(--option-bg)' }}>🎮 PS</option>
              <option value="xbox" style={{ background: 'var(--option-bg)' }}>🎮 Xbox</option>
              <option value="switch" style={{ background: 'var(--option-bg)' }}>🎮 Switch</option>
            </optgroup>
            <optgroup label="Arcade" style={{ background: 'var(--bg-card)' }}>
              <option value="arcade" style={{ background: 'var(--option-bg)' }}>🕹️ Arcade</option>
              <option value="cps" style={{ background: 'var(--option-bg)' }}>🕹️ Capcom</option>
              <option value="neogeo" style={{ background: 'var(--option-bg)' }}>🕹️ NeoGeo</option>
            </optgroup>
            <optgroup label="Retro Consoles" style={{ background: 'var(--bg-card)' }}>
              <option value="genesis" style={{ background: 'var(--option-bg)' }}>📼 Genesis</option>
              <option value="snes" style={{ background: 'var(--option-bg)' }}>📼 SNES</option>
              <option value="sfami" style={{ background: 'var(--option-bg)' }}>📼 Famicom</option>
              <option value="wii" style={{ background: 'var(--option-bg)' }}>🎮 Wii</option>
            </optgroup>
            <optgroup label="Specific Games" style={{ background: 'var(--bg-card)' }}>
              <option value="mk" style={{ background: 'var(--option-bg)' }}>🐉 MK</option>
            </optgroup>
          </select>
        </div>

        <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)' }} />

        {/* Notation Setting */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label style={{ fontSize: 'calc(0.8rem * var(--font-scale))', color: 'var(--text-secondary)', fontWeight: 500 }}>Notation:</label>
          <select
            value={notationSystem}
            onChange={(e) => onSetNotationSystem(e.target.value)}
            style={{
              padding: 'calc(0.35rem * var(--spacing-scale)) calc(0.65rem * var(--spacing-scale))',
              background: 'var(--bg-input)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: 'calc(0.8rem * var(--font-scale))',
              fontFamily: 'inherit',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            <option value="auto" style={{ background: 'var(--option-bg)' }}>Auto</option>
            <option value="numpad" style={{ background: 'var(--option-bg)' }}>Numpad</option>
            <option value="traditional" style={{ background: 'var(--option-bg)' }}>Arrows</option>
          </select>
        </div>

        {onSetTheme && (
          <>
            <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <label style={{ fontSize: 'calc(0.8rem * var(--font-scale))', color: 'var(--text-secondary)', fontWeight: 500 }}>Theme:</label>
              <select
                value={theme || 'dark'}
                onChange={(e) => onSetTheme(e.target.value as 'dark' | 'light')}
                style={{
                  padding: 'calc(0.35rem * var(--spacing-scale)) calc(0.65rem * var(--spacing-scale))',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  fontSize: 'calc(0.8rem * var(--font-scale))',
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                <option value="dark" style={{ background: 'var(--option-bg)' }}>🌙 Dark</option>
                <option value="light" style={{ background: 'var(--option-bg)' }}>☀️ Light</option>
              </select>
            </div>
          </>
        )}

      </div>

      {/* Footer Info */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem', 
        fontSize: '0.75rem', 
        color: 'var(--text-tertiary)',
        marginTop: '0.5rem'
      }}>
        <span style={{ cursor: 'default' }}>© {new Date().getFullYear()} GameGlance. FGC Second Screen App.</span>
        <div style={{ width: '1px', height: '12px', background: 'var(--border-subtle)' }} />
        <a href="/gameglance.html" target="_blank" rel="noreferrer" title="About / FAQ" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.3rem' }} 
           onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
           onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
           FAQ
        </a>
        <div style={{ width: '1px', height: '12px', background: 'var(--border-subtle)' }} />
        <a href="mailto:contact@gameglance.app" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} 
           onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
           onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
           Contact
        </a>
        <div style={{ width: '1px', height: '12px', background: 'var(--border-subtle)' }} />
        <a href="https://discord.gg/YOUR_INVITE_LINK" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
           onMouseEnter={e => e.currentTarget.style.color = '#5865F2'}
           onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
           <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
           Discord
        </a>
        <div style={{ width: '1px', height: '12px', background: 'var(--border-subtle)' }} />
        <a href="https://ko-fi.com/gameglance" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
           onMouseEnter={e => e.currentTarget.style.color = '#ff5e5b'}
           onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
           <span style={{ color: '#ff5e5b' }}>❤️</span> Support GG
        </a>
        {onOpenFightcadeSync && (
          <>
            <div style={{ width: '1px', height: '12px', background: 'var(--border-subtle)' }} />
            <button 
               onClick={onOpenFightcadeSync}
               style={{ 
                 background: 'none',
                 border: 'none',
                 padding: 0,
                 cursor: 'pointer',
                 color: 'var(--text-secondary)', 
                 transition: 'color 0.2s',
                 fontFamily: 'inherit',
                 fontSize: 'inherit',
                 display: 'flex',
                 alignItems: 'center',
                 gap: '0.4rem'
               }}
               onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
               onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
               <div style={{
                 width: '6px', height: '6px', borderRadius: '50%',
                 background: syncConnected ? '#10b981' : '#ef4444',
                 boxShadow: syncConnected ? '0 0 6px #10b981' : 'none'
               }} />
               Fightcade Sync
            </button>
          </>
        )}
      </div>
    </div>
  );
};
