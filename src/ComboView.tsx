import React, { useState, useEffect } from 'react';
import type { GameDefinition, CharacterExport } from './types';
import { TopHeader } from './TopHeader';
import { AmbientMesh } from './AmbientMesh';
import { GlyphSequence } from './GlyphSequence';
import type { ControllerType } from './glyphMap';

interface Props {
  game: GameDefinition;
  characterId: string;
  controller: ControllerType;
  notationSystem?: 'numpad' | 'traditional' | 'mk' | 'tekken';
  onBack: () => void;
  onHome: () => void;
  onSetController: (c: ControllerType) => void;
}

export const ComboView: React.FC<Props> = ({
  game,
  characterId,
  controller,
  notationSystem,
  onBack,
  onHome,
}) => {
  const [characterData, setCharacterData] = useState<CharacterExport | null>(null);
  const [loadingError, setLoadingError] = useState('');

  const [prevCharId, setPrevCharId] = useState(characterId);

  if (characterId !== prevCharId) {
    setPrevCharId(characterId);
    setCharacterData(null);
    setLoadingError('');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`/data/${game.id}/${characterId}.json`)
      .then(res => {
        if (!res.ok) throw new Error("File not found");
        return res.json();
      })
      .then(data => {
        setCharacterData(data);
      })
      .catch(err => {
        console.error("Failed to load character data:", err);
        setLoadingError('Character data not found.');
      });
  }, [game.id, characterId]);

  const combos = characterData?.combosList || [];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    }}>
      <AmbientMesh 
        colors={['rgba(99, 102, 241, 0.1)', 'rgba(236, 72, 153, 0.08)', 'rgba(34, 211, 238, 0.05)']} 
        speed={0.5} 
      />

      <TopHeader 
        onBack={onBack}
        onHome={onHome}
        gameName={game.name}
      />

      <div style={{ padding: 'var(--space-md) var(--space-xl)', maxWidth: '1400px', margin: '0 auto', width: '100%', flex: 1, position: 'relative', zIndex: 10 }}>
        
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '0.5rem', fontFamily: "'Outfit', sans-serif" }}>
            {characterData?.character || characterId}
          </h1>
          <div style={{ fontSize: '1rem', color: 'var(--accent-indigo)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700 }}>
            Combos
          </div>
        </header>

        {loadingError && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <h2 style={{ color: 'var(--accent-rose)', fontWeight: 700, fontSize: '1.5rem' }}>{loadingError}</h2>
          </div>
        )}

        {!characterData && !loadingError && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-tertiary)' }}>
            Loading combos...
          </div>
        )}

        {characterData && combos.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-tertiary)' }}>
            No combos found for this character.
          </div>
        )}

        {combos.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {combos.map((combo, idx) => (
              <div key={combo.id || idx} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                backdropFilter: 'blur(12px)'
              }}>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  {combo.name}
                </div>
                
                <div style={{ background: 'var(--bg-elevated)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: (combo.damage || combo.notes) ? '1rem' : 0 }}>
                  <GlyphSequence 
                    inputs={[combo.input]} 
                    controller={controller} 
                    notationSystem={notationSystem}
                    isCombo={true}
                  />
                </div>

                {(combo.damage || combo.notes) && (
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {combo.damage && <div><strong>Damage:</strong> {combo.damage}</div>}
                    {combo.notes && <div><strong>Notes:</strong> {combo.notes}</div>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
