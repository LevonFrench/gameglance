import React, { useState, useEffect } from 'react';

interface QuarantinedMove {
  gameId: string;
  characterId: string;
  reason: string;
  move: {
    name: string;
    type: string;
    input?: string;
    inputs?: string[];
  };
}

interface Props {
  onBack: () => void;
}

export const AdminDataEntryView: React.FC<Props> = ({ onBack }) => {
  const [quarantine, setQuarantine] = useState<QuarantinedMove[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [editInput, setEditInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/staging_quarantine.json')
      .then(res => res.json())
      .then(data => {
        setQuarantine(data);
        if (data.length > 0) {
          const first = data[0];
          setEditInput(first.move.input || (first.move.inputs ? first.move.inputs[0] : ''));
        }
        setLoading(false);
      })
      .catch(e => {
        console.error("Failed to load quarantine", e);
        setLoading(false);
      });
  }, []);

  const handleAction = async (action: 'approve' | 'delete') => {
    const currentItem = quarantine[currentIndex];
    
    // Update input if approving
    if (action === 'approve') {
      currentItem.move.input = editInput;
      delete currentItem.move.inputs;
    }

    try {
      const res = await fetch('/api/save_move', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, item: currentItem })
      });
      if (res.ok) {
        // Move to next
        const nextIdx = currentIndex + 1;
        if (nextIdx < quarantine.length) {
          setCurrentIndex(nextIdx);
          const next = quarantine[nextIdx];
          setEditInput(next.move.input || (next.move.inputs ? next.move.inputs[0] : ''));
        } else {
          setQuarantine([]); // done
        }
      } else {
        alert("Failed to save.");
      }
    } catch (e) {
      alert("Error saving: " + e);
    }
  };

  if (loading) return <div style={{ color: 'white', padding: '2rem' }}>Loading Quarantine Data...</div>;
  if (currentIndex >= quarantine.length || quarantine.length === 0) {
    return (
      <div style={{ color: 'white', padding: '2rem' }}>
        <h2>All Caught Up!</h2>
        <p>No more moves in quarantine.</p>
        <button onClick={onBack} style={{ padding: '0.5rem 1rem', marginTop: '1rem', background: 'var(--accent-indigo)' }}>Go Back</button>
      </div>
    );
  }

  const item = quarantine[currentIndex];

  return (
    <div style={{ padding: '2rem', color: 'white', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Data Approval Dashboard</h2>
        <button onClick={onBack} style={{ padding: '0.5rem 1rem', background: '#374151', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Exit</button>
      </div>
      
      <div style={{ background: '#1f2937', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <div style={{ marginBottom: '0.5rem', color: '#9ca3af', fontSize: '0.875rem' }}>
          Remaining: {quarantine.length - currentIndex} / {quarantine.length}
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.gameId}</div>
          <div style={{ fontSize: '1.1rem', color: 'var(--accent-indigo)' }}>{item.characterId}</div>
          <div style={{ marginTop: '0.5rem', color: '#ef4444' }}>Reason: {item.reason}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#9ca3af' }}>Move Name</label>
            <input 
              type="text" 
              value={item.move.name} 
              disabled 
              style={{ width: '100%', padding: '0.75rem', background: '#111827', border: '1px solid #374151', color: 'white', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#9ca3af' }}>Move Type</label>
            <input 
              type="text" 
              value={item.move.type} 
              disabled 
              style={{ width: '100%', padding: '0.75rem', background: '#111827', border: '1px solid #374151', color: 'white', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#10b981', fontWeight: 'bold' }}>Fix Input Notation</label>
            <textarea 
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
              rows={3}
              style={{ width: '100%', padding: '0.75rem', background: '#111827', border: '1px solid #10b981', color: '#10b981', borderRadius: '4px', fontSize: '1.1rem', fontFamily: 'monospace' }}
            />
            <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>
              Convert prose to proper fighting game notation. E.g. "Quarter circle forward punch" -{'>'} "236P" or "qcf P".
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <button 
          onClick={() => handleAction('approve')}
          style={{ flex: 1, padding: '1rem', background: '#10b981', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Approve & Save
        </button>
        <button 
          onClick={() => handleAction('delete')}
          style={{ flex: 1, padding: '1rem', background: '#ef4444', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Delete Move (Garbage)
        </button>
      </div>
    </div>
  );
};
