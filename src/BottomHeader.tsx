import React from 'react';
import type { ControllerType } from './glyphMap';
import type { CardTheme } from './types';

interface Props {
  controller: ControllerType;
  onSetController: (c: ControllerType) => void;
  cardTheme: CardTheme;
  onSetCardTheme: (t: CardTheme) => void;
  gameDeveloper?: string;
}

export const BottomHeader: React.FC<Props> = ({ 
  controller, 
  onSetController, 
  cardTheme, 
  onSetCardTheme,
  gameDeveloper
}) => {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'var(--bg-elevated)',
      borderTop: '1px solid var(--border-medium)',
      padding: '0.75rem var(--space-xl)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      zIndex: 100,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Card Theme Setting */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Cards:</label>
          <select
            value={cardTheme}
            onChange={(e) => onSetCardTheme(e.target.value as CardTheme)}
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
            <option value="default-dark" style={{ background: 'var(--option-bg)' }}>Default</option>
            <option value="default-light" style={{ background: 'var(--option-bg)' }}>Light</option>
            <option value="sf2gen" style={{ background: 'var(--option-bg)' }}>SF2GEN</option>
            <option value="genesis" style={{ background: 'var(--option-bg)' }}>Genesis</option>
            <option value="snes" style={{ background: 'var(--option-bg)' }}>SNES</option>
            <option value="cps2" style={{ background: 'var(--option-bg)' }}>CPS2</option>
            <option value="mvs" style={{ background: 'var(--option-bg)' }}>MVS</option>
            <option value="aes" style={{ background: 'var(--option-bg)' }}>AES</option>
          </select>
        </div>

        <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)' }} />

        {/* Glyph Setting */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Glyphs:</label>
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
            {gameDeveloper?.toUpperCase() === 'SNK' && <option value="neogeo" style={{ background: 'var(--option-bg)' }}>🕹️ Neo Geo</option>}
          </select>
        </div>



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
        <span>© {new Date().getFullYear()} GameGlance. FGC Second Screen App.</span>
        <div style={{ width: '1px', height: '12px', background: 'var(--border-subtle)' }} />
        <a href="mailto:contact@gameglance.app" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} 
           onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
           onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
           Contact
        </a>
        <div style={{ width: '1px', height: '12px', background: 'var(--border-subtle)' }} />
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
           onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
           onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
           GitHub
        </a>
      </div>
    </div>
  );
};
