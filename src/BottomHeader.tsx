import type { ControllerType } from './glyphMap';

interface Props {
  controller: ControllerType;
  onSetController: (c: ControllerType) => void;
  notationSystem: string;
  onSetNotationSystem: (n: string) => void;
  onOpenFightcadeSync?: () => void;
  syncConnected?: boolean;
}

export const BottomHeader: React.FC<Props> = ({ 
  controller, 
  onSetController, 
  notationSystem,
  onSetNotationSystem,
  onOpenFightcadeSync,
  syncConnected
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        

        <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)' }} />

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
              <option value="playstation" style={{ background: 'var(--option-bg)' }}>🎮 PlayStation</option>
              <option value="xbox" style={{ background: 'var(--option-bg)' }}>🎮 Xbox</option>
              <option value="switch" style={{ background: 'var(--option-bg)' }}>🎮 Switch</option>
            </optgroup>
            <optgroup label="Arcade" style={{ background: 'var(--bg-card)' }}>
              <option value="arcade" style={{ background: 'var(--option-bg)' }}>🕹️ Generic 6-Button</option>
              <option value="cps" style={{ background: 'var(--option-bg)' }}>🕹️ Capcom (CPS)</option>
              <option value="neogeo" style={{ background: 'var(--option-bg)' }}>🕹️ Neo Geo</option>
            </optgroup>
            <optgroup label="Retro Consoles" style={{ background: 'var(--bg-card)' }}>
              <option value="genesis" style={{ background: 'var(--option-bg)' }}>📼 Sega Genesis</option>
              <option value="snes" style={{ background: 'var(--option-bg)' }}>📼 SNES (NA)</option>
              <option value="sfami" style={{ background: 'var(--option-bg)' }}>📼 Super Famicom</option>
              <option value="wii" style={{ background: 'var(--option-bg)' }}>🎮 Wii</option>
            </optgroup>
            <optgroup label="Specific Games" style={{ background: 'var(--bg-card)' }}>
              <option value="mk" style={{ background: 'var(--option-bg)' }}>🐉 Mortal Kombat</option>
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
            <option value="numpad" style={{ background: 'var(--option-bg)' }}>Numpad (236)</option>
            <option value="traditional" style={{ background: 'var(--option-bg)' }}>Arrows (↓↘→)</option>
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
