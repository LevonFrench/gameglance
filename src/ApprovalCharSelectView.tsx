import React, { useState, useEffect } from 'react';
import type { GameDefinition } from './types';
import { useArrowNavigation } from './useArrowNavigation';
import { AmbientMesh } from './AmbientMesh';
import { useTheme } from './ThemeContext';

interface Props {
  game: GameDefinition;
  onSelectCharacter: (charId: string) => void;
  onBack: () => void;
  disableInitialAnimation?: boolean;
}

export const ApprovalCharSelectView: React.FC<Props> = ({ 
  game, 
  onSelectCharacter, 
  onBack,
  disableInitialAnimation 
}) => {
  useArrowNavigation('[id^="approval-char-card-"]');
  const { theme } = useTheme();
  const [availableChars, setAvailableChars] = useState<{ id: string, name: string }[]>([]);

  useEffect(() => {
    window.scrollTo(0,0);
    
    // Find characters dynamically
    const modules = import.meta.glob('/public/data/scraped_combos/**/*.json');
    const chars = new Set<string>();
    
    for (const path in modules) {
      const parts = path.split('/');
      if (parts.length >= 5 && parts[4] === game.id) {
        const filename = parts[5];
        const charId = filename.replace('_supercombo.json', '').replace('.json', '');
        chars.add(charId);
      }
    }
    
    const mapped = Array.from(chars).map(charId => {
      // Find nicely formatted name if exists in game definition
      const def = game.characters?.find(c => c.id === charId);
      return { id: charId, name: def?.name || charId.replace(/-/g, ' ').toUpperCase() };
    });
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAvailableChars(mapped.sort((a,b) => a.name.localeCompare(b.name)));
  }, [game]);

  const isDark = theme !== 'light';

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 2rem 2rem 2rem',
    }}>
      <AmbientMesh colors={isDark ? ['rgba(234, 179, 8, 0.15)', 'rgba(249, 115, 22, 0.12)', 'rgba(239, 68, 68, 0.1)'] : ['rgba(234, 179, 8, 0.20)', 'rgba(249, 115, 22, 0.18)', 'rgba(239, 68, 68, 0.15)']} speed={0.8} />

      <header style={{
        textAlign: 'center',
        marginBottom: '2rem',
        animation: disableInitialAnimation ? 'none' : 'fadeInDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-primary)',
        padding: '2rem 1rem 1rem 1rem',
        width: '100vw',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--accent-orange, #ea580c)',
          marginBottom: '0.5rem',
        }}>
          {game.name} • Approval
        </div>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 900,
          margin: 0,
          color: isDark ? '#f0f0f8' : '#1a1a2e',
          lineHeight: 1.1,
          marginBottom: '1rem',
        }}>
          SELECT CHARACTER
        </h1>

        <button 
          onClick={onBack}
          style={{
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-full)',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backdropFilter: 'blur(12px)',
            transition: 'all 0.2s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.borderColor = 'var(--text-secondary)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Games
        </button>
      </header>

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        maxWidth: '1200px',
        width: '100%',
      }}>
        {availableChars.map((char, index) => (
          <button
            key={char.id}
            id={`approval-char-card-${char.id}`}
            onClick={() => onSelectCharacter(char.id)}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem 1rem',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              fontSize: '1.1rem',
              fontWeight: 700,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              animation: disableInitialAnimation ? 'none' : `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 40}ms both`,
            }}
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--accent-orange, #ea580c)';
              e.currentTarget.style.boxShadow = '0 10px 20px -10px rgba(234, 88, 12, 0.3)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {char.name}
          </button>
        ))}
        {availableChars.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
            No character files found for this game.
          </div>
        )}
      </main>
    </div>
  );
};
