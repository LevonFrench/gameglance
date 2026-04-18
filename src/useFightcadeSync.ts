import { useState, useEffect, useCallback } from 'react';

export interface SyncState {
  connected: boolean;
  gameId: string | null;
  p1CharId: string | null;
  p2CharId: string | null;
  error: string | null;
}

export function useFightcadeSync() {
  const [syncState, setSyncState] = useState<SyncState>({
    connected: false,
    gameId: null,
    p1CharId: null,
    p2CharId: null,
    error: null,
  });

  const [dirHandle, setDirHandle] = useState<FileSystemDirectoryHandle | null>(null);

  const connect = async () => {
    try {
      // Prompt user to select directory
      const handle = await window.showDirectoryPicker({
        mode: 'read',
      });
      setDirHandle(handle);
      setSyncState(prev => ({ ...prev, connected: true, error: null }));
    } catch (e: any) {
      if (e.name !== 'AbortError') {
        setSyncState(prev => ({ ...prev, error: e.message || 'Failed to connect to directory' }));
      }
    }
  };

  const disconnect = () => {
    setDirHandle(null);
    setSyncState({
      connected: false,
      gameId: null,
      p1CharId: null,
      p2CharId: null,
      error: null,
    });
  };

  const pollLogFile = useCallback(async () => {
    if (!dirHandle) return;

    try {
      // Find the log file
      const fileHandle = await dirHandle.getFileHandle('gg_sync.log', { create: false });
      const file = await fileHandle.getFile();
      const text = await file.text();

      // Parse the last line of the log
      const lines = text.split('\n').filter(l => l.trim().length > 0);
      if (lines.length === 0) return;

      const lastLine = lines[lines.length - 1];
      // Format: ROM:sfiii3nr1|P1:5|P2:2
      const match = lastLine.match(/ROM:([^|]+)\|P1:([^|]+)\|P2:([^|]+)/);
      if (match) {
        const [, gameId, p1, p2] = match;
        setSyncState(prev => {
          if (prev.gameId === gameId && prev.p1CharId === p1 && prev.p2CharId === p2) return prev;
          return {
            ...prev,
            gameId,
            p1CharId: p1 === '-1' ? null : p1,
            p2CharId: p2 === '-1' ? null : p2,
          };
        });
      }
    } catch (e: any) {
      // It's possible the file doesn't exist yet, just ignore NotFoundError
      if (e.name !== 'NotFoundError') {
        console.error('Error polling Fightcade log:', e);
      }
    }
  }, [dirHandle]);

  useEffect(() => {
    if (!dirHandle) return;

    // Poll every 1 second
    const interval = setInterval(pollLogFile, 1000);
    return () => clearInterval(interval);
  }, [dirHandle, pollLogFile]);

  return {
    syncState,
    connect,
    disconnect,
  };
}
