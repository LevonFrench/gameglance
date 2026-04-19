import React, { useState, useEffect } from 'react';
import { GlyphSequence } from './GlyphSequence';

export const LegacyCurationView: React.FC = () => {
  const [stagingData, setStagingData] = useState<Record<string, string[]>>({});
  const [selectedGame, setSelectedGame] = useState<string>('');
  const [selectedChar, setSelectedChar] = useState<string>('');
  
  const [rawText, setRawText] = useState<string>('');
  const [loadingText, setLoadingText] = useState(false);
  
  const [comboName, setComboName] = useState('');
  const [comboInput, setComboInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    fetch('/api/legacy_staging')
      .then(r => r.json())
      .then(data => setStagingData(data))
      .catch(e => console.error('Failed to load staging data', e));
  }, []);

  useEffect(() => {
    if (selectedGame && selectedChar) {
      setLoadingText(true);
      setRawText('');
      fetch(`/api/legacy_raw_text?gameId=${selectedGame}&charId=${selectedChar}`)
        .then(r => r.json())
        .then(data => {
          if (data.content) setRawText(data.content);
          else setRawText('Failed to load text.');
        })
        .catch(e => setRawText('Error: ' + e.message))
        .finally(() => setLoadingText(false));
    }
  }, [selectedGame, selectedChar]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comboName || !comboInput || !selectedGame || !selectedChar) return;
    
    setIsSaving(true);
    setSaveMessage('');
    try {
      const payload = {
        action: 'approve',
        item: {
          gameId: selectedGame,
          characterId: selectedChar,
          listType: 'combos',
          move: {
            id: comboName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            name: comboName,
            input: comboInput
          }
        }
      };
      
      const res = await fetch('/api/save_move', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) throw new Error('Save failed');
      
      setSaveMessage('Saved Successfully!');
      setComboName('');
      setComboInput('');
      setTimeout(() => setSaveMessage(''), 2000);
    } catch (err: any) {
      setSaveMessage(err.message || 'Error saving');
    } finally {
      setIsSaving(false);
    }
  };

  const games = Object.keys(stagingData);
  const chars = selectedGame ? (stagingData[selectedGame] || []) : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '1rem', boxSizing: 'border-box' }}>
      {/* Controls Header */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Select Game</label>
          <select 
            value={selectedGame} 
            onChange={e => { setSelectedGame(e.target.value); setSelectedChar(''); }}
            style={{ padding: '0.5rem', borderRadius: '4px', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)' }}
          >
            <option value="">-- Choose Game --</option>
            {games.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Select Character</label>
          <select 
            value={selectedChar} 
            onChange={e => setSelectedChar(e.target.value)}
            disabled={!selectedGame}
            style={{ padding: '0.5rem', borderRadius: '4px', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)' }}
          >
            <option value="">-- Choose Character --</option>
            {chars.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Split Pane */}
      <div style={{ display: 'flex', flex: 1, gap: '1rem', minHeight: 0 }}>
        
        {/* Left Pane: Wikitext */}
        <div style={{ flex: 1, background: '#1e1e1e', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '0.75rem 1rem', background: '#252526', borderBottom: '1px solid #333', fontWeight: 600, fontSize: '0.9rem', color: '#ccc' }}>
            Raw Wikitext Source
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: '1rem' }}>
            {loadingText ? (
              <div style={{ color: 'var(--text-muted)' }}>Loading...</div>
            ) : selectedChar && !rawText ? (
              <div style={{ color: 'var(--text-muted)' }}>No text found.</div>
            ) : (
              <pre style={{ 
                margin: 0, 
                whiteSpace: 'pre-wrap', 
                wordBreak: 'break-word', 
                fontFamily: "'JetBrains Mono', monospace", 
                fontSize: '0.85rem',
                color: '#d4d4d4',
                lineHeight: 1.5
              }}>
                {rawText || 'Select a character to load raw wikitext.'}
              </pre>
            )}
          </div>
        </div>

        {/* Right Pane: Curation Form */}
        <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '0.75rem 1rem', background: 'var(--bg-card)', borderBottom: '1px solid var(--border-subtle)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
            Combo Curation Form
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem' }}>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Combo Name</label>
                <input 
                  type="text" 
                  value={comboName} 
                  onChange={e => setComboName(e.target.value)} 
                  placeholder="e.g. Bread & Butter 1"
                  required
                  style={{ padding: '0.75rem', borderRadius: '6px', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)', fontSize: '1rem' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>Notation (Comma separated)</label>
                <input 
                  type="text" 
                  value={comboInput} 
                  onChange={e => setComboInput(e.target.value)} 
                  placeholder="e.g. 2LK, 2MK, 236P"
                  required
                  style={{ padding: '0.75rem', borderRadius: '6px', background: 'var(--bg-primary)', color: 'var(--text-primary)', border: '1px solid var(--border-subtle)', fontSize: '1rem', fontFamily: "'JetBrains Mono', monospace" }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Live Preview (Numpad System)</label>
                <div style={{ padding: '1rem', minHeight: '60px', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                  {comboInput ? (
                    <GlyphSequence inputs={comboInput.split(',').map(s => s.trim())} controller="arcade" notationSystem="numpad" />
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Type notation to preview...</span>
                  )}
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button 
                  type="submit" 
                  disabled={isSaving || !selectedChar}
                  style={{
                    padding: '0.75rem 2rem',
                    background: 'var(--accent-indigo)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: (isSaving || !selectedChar) ? 'not-allowed' : 'pointer',
                    opacity: (isSaving || !selectedChar) ? 0.5 : 1,
                    transition: 'all 0.2s'
                  }}
                >
                  {isSaving ? 'Saving...' : 'Save Combo to JSON'}
                </button>
                {saveMessage && (
                  <span style={{ color: saveMessage.includes('Error') ? 'var(--accent-orange)' : 'var(--accent-teal)', fontWeight: 600 }}>
                    {saveMessage}
                  </span>
                )}
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
