import React from 'react';
import type { SyncState } from './useFightcadeSync';

interface Props {
  syncState: SyncState;
  onConnect: () => void;
  onDisconnect: () => void;
  onBack: () => void;
}

export const FightcadeSyncView: React.FC<Props> = ({ syncState, onConnect, onDisconnect, onBack }) => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '4rem 2rem',
      color: 'var(--text-primary)',
      animation: 'fadeInUp 0.4s ease-out'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <button 
          onClick={onBack}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            marginRight: '1rem',
            fontWeight: 600,
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          ← Back
        </button>
        <h1 style={{ margin: 0, fontSize: '2rem', letterSpacing: '-0.02em' }}>Fightcade Auto-Sync</h1>
      </div>

      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <h2 style={{ marginTop: 0, fontSize: '1.25rem', marginBottom: '1rem' }}>How it works</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          GameGlance can automatically detect which game and character you are currently playing in Fightcade and instantly jump to their move list. This works entirely in your browser using the local File System Access API—no sketchy third-party apps required.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{
              background: 'var(--bg-elevated)',
              color: 'var(--text-primary)',
              width: '32px', height: '32px',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, flexShrink: 0, border: '1px solid var(--border-medium)'
            }}>1</div>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>Download the Lua Script</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Download <a href="/gg_sync.lua" download style={{ color: '#6366f1' }}>gg_sync.lua</a> and place it in your <code>Fightcade/emulator/fbneo/scripts</code> folder.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{
              background: 'var(--bg-elevated)',
              color: 'var(--text-primary)',
              width: '32px', height: '32px',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, flexShrink: 0, border: '1px solid var(--border-medium)'
            }}>2</div>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>Run the script in FBNeo</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                When you launch a game, go to <strong>Game &gt; Lua Scripting &gt; New Lua Script Window</strong> and load <code>gg_sync.lua</code>.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{
              background: 'var(--bg-elevated)',
              color: 'var(--text-primary)',
              width: '32px', height: '32px',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, flexShrink: 0, border: '1px solid var(--border-medium)'
            }}>3</div>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>Connect the Folder</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Click the button below and select your <code>Fightcade/emulator/fbneo</code> folder so GameGlance can read the script's output.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        background: syncState.connected ? 'rgba(16, 185, 129, 0.1)' : 'var(--bg-card)',
        border: syncState.connected ? '1px solid #10b981' : '1px solid var(--border-medium)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h2 style={{ marginTop: 0, fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          {syncState.connected ? 'Status: Connected' : 'Status: Disconnected'}
        </h2>
        
        {syncState.error && (
          <p style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem' }}>Error: {syncState.error}</p>
        )}

        {syncState.connected && syncState.gameId && (
          <p style={{ color: '#10b981', marginBottom: '1rem', fontWeight: 600 }}>
            Detected: {syncState.gameId} (P1: {syncState.p1CharId || 'None'} | P2: {syncState.p2CharId || 'None'})
          </p>
        )}

        {!syncState.connected ? (
          <button
            onClick={onConnect}
            style={{
              background: '#6366f1',
              color: '#fff',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '1rem',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
              transition: 'all 0.2s'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Connect Fightcade Folder
          </button>
        ) : (
          <button
            onClick={onDisconnect}
            style={{
              background: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-medium)',
              padding: '0.75rem 2rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '1rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--text-primary)'; }}
            onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-medium)'; }}
          >
            Disconnect
          </button>
        )}
      </div>

    </div>
  );
};
