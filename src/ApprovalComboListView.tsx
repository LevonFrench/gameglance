import React, { useState, useEffect } from 'react';
import type { GameDefinition } from './types';
import { AmbientMesh } from './AmbientMesh';

interface RawCombo {
  game: string;
  character: string;
  route: string;
  damage: string;
  notes: string;
}

interface Props {
  game: GameDefinition;
  characterId: string;
  onBack: () => void;
  onHome: () => void;
}

export const ApprovalComboListView: React.FC<Props> = ({
  game,
  characterId,
  onBack,
  onHome
}) => {
  const [combos, setCombos] = useState<RawCombo[]>([]);
  const [approvedIndices, setApprovedIndices] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0,0);
    const fetchCombos = async () => {
      try {
        const res = await fetch(`/data/scraped_combos/${game.id}/${characterId}_supercombo.json`);
        if (!res.ok) throw new Error('Failed to load combos');
        const data = await res.json();
        setCombos(data);
      } catch (err) {
        console.error(err);
        setError('Could not load combo data for ' + characterId);
      } finally {
        setLoading(false);
      }
    };
    fetchCombos();
  }, [game.id, characterId]);

  const toggleApproval = (index: number) => {
    setApprovedIndices(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const [isSaving, setIsSaving] = useState(false);

  const handleSaveApproved = async () => {
    const approvedCombos = combos.filter((_, i) => approvedIndices.has(i));
    if (approvedCombos.length === 0) return;

    setIsSaving(true);
    try {
      const res = await fetch('/api/approve_combos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameId: game.id,
          charId: characterId,
          approvedCombos
        })
      });

      if (!res.ok) {
        throw new Error('Failed to save approved combos');
      }

      // Remove the approved combos from the local UI state so they disappear
      const remainingCombos = combos.filter((_, i) => !approvedIndices.has(i));
      setCombos(remainingCombos);
      setApprovedIndices(new Set());
    } catch (err) {
      console.error(err);
      alert('Failed to save approved combos to the character file.');
    } finally {
      setIsSaving(false);
    }
  };

  const isDark = true;
  const charName = game.characters?.find(c => c.id === characterId)?.name || characterId.replace(/-/g, ' ').toUpperCase();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      paddingBottom: '80px',
    }}>
      <AmbientMesh colors={isDark ? ['rgba(234, 179, 8, 0.15)', 'rgba(249, 115, 22, 0.12)', 'rgba(239, 68, 68, 0.1)'] : ['rgba(234, 179, 8, 0.20)', 'rgba(249, 115, 22, 0.18)', 'rgba(239, 68, 68, 0.15)']} speed={0.8} />

      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={onBack}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-orange, #ea580c)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Approval System
            </div>
            <h1 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {charName}
            </h1>
          </div>
        </div>

        <button 
          onClick={onHome}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem',
            fontWeight: 600,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          Exit
        </button>
      </header>

      <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', width: '100%', flex: 1 }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>Loading...</div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>{error}</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {combos.length} total combos • {approvedIndices.size} approved
              </div>
              <button
                onClick={() => {
                  if (approvedIndices.size === combos.length) setApprovedIndices(new Set());
                  else setApprovedIndices(new Set(combos.map((_, i) => i)));
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-indigo)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                }}
              >
                {approvedIndices.size === combos.length ? 'Deselect All' : 'Select All'}
              </button>
            </div>

            {(() => {
              const pendingIndices = combos.map((_, i) => i).filter(i => !approvedIndices.has(i));
              const approvedListIndices = combos.map((_, i) => i).filter(i => approvedIndices.has(i));

              const renderRow = (index: number) => {
                const combo = combos[index];
                const isApproved = approvedIndices.has(index);
                return (
                  <div 
                    key={index}
                    onClick={() => toggleApproval(index)}
                    style={{
                      background: isApproved ? 'var(--bg-input)' : 'var(--bg-card)',
                      border: '1px solid',
                      borderColor: isApproved ? 'var(--accent-orange, #ea580c)' : 'var(--border-subtle)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '1.25rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      position: 'relative',
                      opacity: isApproved ? 0.7 : 1,
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '1.25rem',
                      right: '1.25rem',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: isApproved ? 'var(--accent-orange, #ea580c)' : 'var(--border-subtle)',
                      background: isApproved ? 'var(--accent-orange, #ea580c)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}>
                      {isApproved && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                    </div>

                    <div style={{ paddingRight: '2rem' }}>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                        {combo.route}
                      </div>
                      {combo.damage && combo.damage !== 'Anywhere' && (
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                          <span style={{ fontWeight: 600 }}>Position:</span> {combo.damage}
                        </div>
                      )}
                      {combo.notes && (
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontStyle: 'italic', marginTop: '0.5rem' }}>
                          {combo.notes}
                        </div>
                      )}
                    </div>
                  </div>
                );
              };

              return (
                <>
                  {pendingIndices.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {pendingIndices.map(renderRow)}
                    </div>
                  )}

                  {approvedListIndices.length > 0 && (
                    <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px dashed var(--border-subtle)' }}>
                      <h3 style={{ margin: '0 0 1rem 0', color: 'var(--accent-orange, #ea580c)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Approved Combos
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {approvedListIndices.map(renderRow)}
                      </div>
                    </div>
                  )}
                  
                  {pendingIndices.length === 0 && approvedListIndices.length > 0 && (
                    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)', background: 'var(--bg-input)', borderRadius: 'var(--radius-lg)', marginTop: '1rem' }}>
                      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎉</div>
                      <div style={{ fontWeight: 600 }}>All combos reviewed!</div>
                      <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>You can now export the approved combos.</p>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        )}
      </main>

      {/* Floating Export Bar */}
      <div style={{
        position: 'fixed',
        bottom: '80px', // above the bottom header
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 60,
      }}>
        <div style={{
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-full)',
          padding: '0.75rem 1.5rem',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          pointerEvents: 'auto',
          transform: approvedIndices.size > 0 ? 'translateY(0)' : 'translateY(150%)',
          opacity: approvedIndices.size > 0 ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            {approvedIndices.size} Selected
          </div>
          <button
            onClick={handleSaveApproved}
            disabled={isSaving}
            style={{
              background: 'var(--accent-orange, #ea580c)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              padding: '0.6rem 1.25rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: isSaving ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(234, 88, 12, 0.4)',
              opacity: isSaving ? 0.7 : 1,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
            {isSaving ? 'Saving...' : 'Save Approved'}
          </button>
        </div>
      </div>
    </div>
  );
};
