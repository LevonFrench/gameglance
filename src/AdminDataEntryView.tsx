import React, { useState, useEffect, useCallback } from 'react';

interface QuarantinedMove {
  gameId: string;
  characterId: string;
  reason: string;
  move: {
    id?: string;
    name: string;
    type: string;
    input?: string;
    inputs?: string[];
  };
}

interface ApprovedMove {
  gameId: string;
  characterId: string;
  move: {
    name: string;
    type: string;
    input: string;
  };
}

interface Props {
  onBack: () => void;
}

export const AdminDataEntryView: React.FC<Props> = ({ onBack }) => {
  const [quarantine, setQuarantine] = useState<QuarantinedMove[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [editInput, setEditInput] = useState('');
  const [editName, setEditName] = useState('');
  const [editType, setEditType] = useState('');
  const [loading, setLoading] = useState(true);
  const [approved, setApproved] = useState<ApprovedMove[]>([]);
  const [deleted, setDeleted] = useState<QuarantinedMove[]>([]);

  useEffect(() => {
    fetch('/data/staging_quarantine.json')
      .then(res => res.json())
      .then(data => {
        setQuarantine(data);
        if (data.length > 0) {
          const first = data[0];
          setEditInput(first.move.input || (first.move.inputs ? first.move.inputs.join(', ') : ''));
          setEditName(first.move.name);
          setEditType(first.move.type);
        }
        setLoading(false);
      })
      .catch(e => {
        console.error("Failed to load quarantine", e);
        setLoading(false);
      });
  }, []);

  const syncCurrentItem = useCallback((idx: number) => {
    if (idx < quarantine.length) {
      const item = quarantine[idx];
      setEditInput(item.move.input || (item.move.inputs ? item.move.inputs.join(', ') : ''));
      setEditName(item.move.name);
      setEditType(item.move.type);
    }
  }, [quarantine]);

  const handleAction = (action: 'approve' | 'delete') => {
    const currentItem = quarantine[currentIndex];

    if (action === 'approve') {
      setApproved(prev => [...prev, {
        gameId: currentItem.gameId,
        characterId: currentItem.characterId,
        move: {
          name: editName,
          type: editType,
          input: editInput,
        }
      }]);
    } else {
      setDeleted(prev => [...prev, currentItem]);
    }

    const nextIdx = currentIndex + 1;
    setCurrentIndex(nextIdx);
    syncCurrentItem(nextIdx);
  };

  const handleSkip = () => {
    const nextIdx = currentIndex + 1;
    setCurrentIndex(nextIdx);
    syncCurrentItem(nextIdx);
  };

  const downloadJSON = (data: unknown, filename: string) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleExport = () => {
    if (approved.length > 0) {
      downloadJSON(approved, `approved_moves_${Date.now()}.json`);
    }
    if (deleted.length > 0) {
      downloadJSON(deleted, `deleted_moves_${Date.now()}.json`);
    }
    // Export remaining (unapproved) quarantine items
    const remaining = quarantine.slice(currentIndex);
    if (remaining.length > 0) {
      downloadJSON(remaining, `remaining_quarantine_${Date.now()}.json`);
    }
  };

  if (loading) return <div style={{ color: 'white', padding: '2rem' }}>Loading Quarantine Data...</div>;

  if (currentIndex >= quarantine.length || quarantine.length === 0) {
    return (
      <div style={{ color: 'white', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2>All Caught Up!</h2>
        <p>No more moves in quarantine.</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          {approved.length > 0 && (
            <div style={{ background: '#1f2937', padding: '1rem', borderRadius: '8px', flex: 1, minWidth: '200px' }}>
              <div style={{ color: '#10b981', fontWeight: 'bold', marginBottom: '0.5rem' }}>✓ Approved: {approved.length}</div>
              <button onClick={() => downloadJSON(approved, `approved_moves_${Date.now()}.json`)}
                style={{ padding: '0.5rem 1rem', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Download Approved
              </button>
            </div>
          )}
          {deleted.length > 0 && (
            <div style={{ background: '#1f2937', padding: '1rem', borderRadius: '8px', flex: 1, minWidth: '200px' }}>
              <div style={{ color: '#ef4444', fontWeight: 'bold', marginBottom: '0.5rem' }}>✕ Deleted: {deleted.length}</div>
              <button onClick={() => downloadJSON(deleted, `deleted_moves_${Date.now()}.json`)}
                style={{ padding: '0.5rem 1rem', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Download Deleted
              </button>
            </div>
          )}
        </div>
        <button onClick={onBack} style={{ padding: '0.5rem 1rem', marginTop: '1.5rem', background: 'var(--accent-indigo)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Go Back</button>
      </div>
    );
  }

  const item = quarantine[currentIndex];
  const remaining = quarantine.length - currentIndex;

  return (
    <div style={{ padding: '2rem', color: 'white', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Data Approval Dashboard</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {(approved.length > 0 || deleted.length > 0) && (
            <button onClick={handleExport} style={{ padding: '0.5rem 1rem', background: '#6366f1', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
              Export ({approved.length}✓ {deleted.length}✕)
            </button>
          )}
          <button onClick={onBack} style={{ padding: '0.5rem 1rem', background: '#374151', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Exit</button>
        </div>
      </div>
      
      <div style={{ background: '#1f2937', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
        <div style={{ marginBottom: '0.5rem', color: '#9ca3af', fontSize: '0.875rem' }}>
          Remaining: {remaining} / {quarantine.length}
          {approved.length > 0 && <span style={{ color: '#10b981', marginLeft: '1rem' }}>✓ {approved.length}</span>}
          {deleted.length > 0 && <span style={{ color: '#ef4444', marginLeft: '0.5rem' }}>✕ {deleted.length}</span>}
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
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', background: '#111827', border: '1px solid #374151', color: 'white', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#9ca3af' }}>Move Type</label>
            <input 
              type="text" 
              value={editType}
              onChange={(e) => setEditType(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', background: '#111827', border: '1px solid #374151', color: 'white', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#10b981', fontWeight: 'bold' }}>Fix Input Notation</label>
            <textarea 
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
              rows={3}
              style={{ width: '100%', padding: '0.75rem', background: '#111827', border: '1px solid #10b981', color: '#10b981', borderRadius: '4px', fontSize: '1.1rem', fontFamily: 'monospace', boxSizing: 'border-box' }}
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
          onClick={handleSkip}
          style={{ padding: '1rem', background: '#374151', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Skip
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
