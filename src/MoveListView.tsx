import React, { useState, useEffect } from 'react';
import { useArrowNavigation } from './useArrowNavigation';
import type { GameDefinition, CharacterExport, Move } from './types';
import { GlyphSequence } from './GlyphSequence';
import type { ControllerType } from './glyphMap';
import { AmbientMesh } from './AmbientMesh';
import { TopHeader } from './TopHeader';
import { useTheme } from './useTheme';


interface Props {
  game: GameDefinition;
  characterId: string;
  selectedPlaylist: Move[];
  controller: ControllerType;
  notationSystem?: 'numpad' | 'traditional' | 'mk';
  onSetController: (c: ControllerType) => void;
  onToggleMove: (move: Move) => void;
  onLaunchMainScreen: () => void;
  onClearGameGlance?: () => void;
  onBack: () => void;
  onHome: () => void;
}



export const MoveListView: React.FC<Props> = ({ game, characterId, selectedPlaylist, controller, notationSystem, onToggleMove, onLaunchMainScreen, onClearGameGlance, onBack, onHome }) => {
  useArrowNavigation('[id^="move-"]');

  const [characterData, setCharacterData] = useState<CharacterExport | null>(null);
  const [orderedTabs, setOrderedTabs] = useState<string[]>([]);
  const [loadingError, setLoadingError] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const GLOBAL_DEFAULT_SORT = ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves', 'Combos'];
    const stored = localStorage.getItem('fgc_tab_order');
    let pref = GLOBAL_DEFAULT_SORT;
    if (stored) {
      try {
        pref = JSON.parse(stored);
      } catch (err) {
        console.warn('Failed to parse tab preferences', err);
      }
    }
    const combinedTabs = Array.from(new Set([...GLOBAL_DEFAULT_SORT, ...(game.tabs || [])]));
    const sorted = combinedTabs.sort((a,b) => {
      let idxA = pref.indexOf(a);
      let idxB = pref.indexOf(b);
      if (idxA === -1) idxA = 999;
      if (idxB === -1) idxB = 999;
      return idxA - idxB;
    });
    setOrderedTabs(sorted);
  }, [game.tabs]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCharacterData(null);
    setLoadingError('');
    fetch(`/data/${game.id}/${characterId}.json`)
      .then(res => {
        if (!res.ok) throw new Error("File not found");
        return res.json();
      })
      .then(data => {
        // ── FGC Type Analog Map ──────────────────────────────────
        // Every franchise names the same universal concepts differently.
        // This maps them all to the canonical types the tab system uses.
        const TYPE_ALIASES: Record<string, string> = {
          // ── normal: grounded buttons, standing/crouching attacks ──
          'normal moves': 'normal',
          'attack': 'normal',         // DOA
          'light': 'normal',          // DNF Duel
          'medium': 'normal',         // DNF Duel
          'crouching light': 'normal',
          'crouching medium': 'normal',
          'low': 'normal',            // SoulCalibur

          // ── special: motion inputs, unique character tools ──
          'special moves': 'special',
          'special (air ok)': 'special',
          'special (buffable)': 'special',
          'skill': 'special',         // P4A, DNF Duel
          'mp skill': 'special',      // DNF Duel
          'neutral skill': 'special',
          'forward skill': 'special',
          'down skill': 'special',
          'back skill': 'special',
          'aerial skill': 'special',
          'neutral mp skill': 'special',
          'forward mp skill': 'special',
          'down mp skill': 'special',
          'back mp skill': 'special',
          'aerial mp skill': 'special',
          'ability': 'special',       // DNF Duel
          'counter special': 'special',
          'counter': 'special',       // GG
          'sp skill': 'special',      // P4A
          'moon skill': 'special',    // Melty Blood
          'trap': 'special',          // Marvel
          'electric strike': 'special',
          'defensive': 'special',
          'projectile': 'special',    // Marvel
          'armor break': 'special',   // Fighting Vipers
          'beast special': 'special', // Bloody Roar
          'eddie': 'special',         // GG (Zato)
          'special / guard reversal': 'special',
          'special (teleport)': 'special',

          // ── super: meter-burning ultimate attacks ──
          'overdrives': 'super',      // GG Strive
          'overdrive': 'super',       // GG classic
          'overdrive (air ok)': 'super',
          'overdrive (low hp)': 'super',
          'overdrive (max meter)': 'super',
          'super art 1': 'super',     // SF series
          'super art 2': 'super',
          'super art 3': 'super',
          'critical art': 'super',    // SFV/SF6
          'hyper combo': 'super',     // Marvel
          'level 3 hyper combo': 'super',
          'hyper': 'super',           // Marvel/SNK
          'level 1': 'super',         // Marvel/DBFZ
          'level 3': 'super',
          'supers': 'super',          // DBFZ
          'arc drive': 'super',       // Melty Blood
          'last arc': 'super',        // Melty Blood
          'skybound art': 'super',    // GBVSR
          'super skybound art': 'super',
          'wft': 'super',             // SamSho (Weapon Flipping Technique)
          'ssm': 'super',             // SamSho (Super Special Move)
          's.power': 'super',         // Real Bout Fatal Fury
          'p.power': 'super',
          'desperation move': 'super',// Last Blade
          'super desperation move': 'super',
          'dream finish': 'super',    // SNK Heroines
          'ultra 1': 'super',         // SFIV
          'ultra 2': 'super',
          'blast 2': 'super',         // DBZ Tenkaichi
          'ultimate': 'super',        // Psychic Force / DBZ
          'rev art': 'super',         // FFC:otW
          'doki doki': 'super',       // Waku Waku 7
          'hara hara': 'super',
          'ultimate chaos': 'super',  // Chaos Code
          'destruction chaos': 'super',
          'cyber ex': 'super',        // Cyberbots
          'ex move': 'super',         // Darkstalkers
          'ex special': 'super',      // Vampire series
          'beast drive': 'super',     // Bloody Roar
          'hyper beast drive': 'super',
          'fatal attack': 'super',    // Kizuna Encounter
          'critical edge': 'super',   // SoulCalibur
          'plasma strike': 'super',   // Star Gladiator
          'stress shot': 'super',     // Groove on Fight / Matrimelee
          'ippatsu ougi': 'super',    // Matrimelee
          'magic': 'super',           // Golden Axe
          'chi': 'super',             // Tao Feng
          'psychic': 'super',         // Psychic Force
          'super (level 1)': 'super',
          'super (level 2)': 'super',
          'super (low hp)': 'super',
          'install (low hp)': 'super',
          'super move': 'super',      // Fighting Vipers
          'special throw': 'super',   // Bloody Roar (command super grabs)

          // ── unique: command normals, non-special motion attacks ──
          'command normal': 'unique',
          'command_normal': 'unique',

          // ── throw: grabs, command grabs ──
          'command grab': 'throw',    // universal
          'command throw': 'throw',   // GG
          'ground throw': 'throw',

          // ── common: system mechanics, universal tools ──
          'system': 'common',         // GG Strive / Tekken
          'movement': 'common',       // Bloody Roar / DOA
          'wild assault': 'common',
          'dash': 'common',           // DBFZ
          'armor dash': 'common',
          'assist call': 'common',
          'assists': 'common',
          'grab': 'common',
          'beam': 'common',
          'pursuit (on downed opponent)': 'common',

          // ── finisher: post-match / cinematic kills ──
          'fatality': 'finisher',     // MK
          'babality': 'finisher',
          'friendship': 'finisher',
          'stage fatality': 'finisher',
          'no mercy': 'finisher',     // KI
          'death move': 'finisher',   // Weaponlord
          'extinction': 'finisher',   // Primal Rage
          'finisher': 'finisher',     // MK generic

          // ── stance: character-specific modes / transformations ──
          'stance': 'special',        // Tekken/SC/GG (closest analog)
          'special action': 'special',// Virtua Fighter
          'beast': 'special',         // Bloody Roar (beast form)
          'beast move': 'special',    // Bloody Roar

          // ── strings/combos mapped to normal (sequential attacks) ──
          'string': 'normal',         // DOA / Tekken
          'combo': 'normal',          // Tekken
          'move': 'normal',           // generic fallback

          // ── hold: DOA counter system → unique (defensive tech) ──
          'hold': 'unique',           // DOA

          // ── aerial: air-specific attacks ──
          'aerial': 'normal',         // SSB / various

          // ── smash: SSB smash attacks ──
          'smash': 'special',         // SSB

          // ── SoulCalibur specifics ──
          'unblockable': 'special',
          '8wr': 'normal',            // 8-Way Run
          'launcher': 'unique',
          'charge': 'special',

          // ── Tekken specifics ──
          'instant-motion': 'special',
          'deflect': 'special',

          // ── TMNT ──
          'desperation': 'super',

          // ── Remaining franchise-specific aliases ──
          'super moves': 'super',     // Aggressors of Dark Kombat
          'super desperation': 'super',// Art of Fighting
          'super special': 'super',   // Art of Fighting
          'star special': 'super',    // Astra Superstars
          'astral heat': 'super',     // BlazBlue
          'distortion drive': 'super',// BlazBlue
          'drive': 'special',         // BlazBlue
          'super art': 'super',       // Capcom Fighting Jam
          'ultimate art': 'super',    // Capcom Fighting Jam
          'strike': 'normal',         // DOA2 / Marvel
          'blast 1': 'special',       // DBZ Tenkaichi 3
          'special / counter': 'special', // HnK
          'hidden super': 'super',    // Garou
          'instinct': 'super',        // KI 2013
          'shadow': 'special',        // KI 2013
          'anti-air': 'special',      // Marvel vs SF
          'final attack': 'super',    // Pocket Bravery
          'team up': 'super',         // Project Justice
          'boss/special': 'special',  // Red Earth
          'boss': 'special',          // Red Earth
        };

        if (data.movesList) {
          data.movesList = data.movesList.map((m: Record<string, unknown>) => {
            const raw = typeof m.type === 'string' ? m.type.toLowerCase() : String(m.type || 'normal');
            return { ...m, type: TYPE_ALIASES[raw] || raw };
          });
        }
        setCharacterData(data);
      })
      .catch(e => {
        console.error(e);
        setLoadingError(`Could not load data for ${characterId}. Ensure the data ingestion script was run.`);
      });
  }, [game.id, characterId]);

  // Tab → move type mapping (defined before early returns so hooks aren't conditional)
  const isSuperMove = (m: Move) => m.type === 'super' || /\b(super|climax|meteor)\b/i.test(m.name);
  const TAB_FILTER: Record<string, (data: CharacterExport) => Move[]> = {
    'Normal Moves':   (d) => (d.movesList || []).filter(m => m.type === 'normal' && !isSuperMove(m)),
    'Special Moves':  (d) => (d.movesList || []).filter(m => m.type === 'special' && !isSuperMove(m)),
    'Super Arts':     (d) => (d.movesList || []).filter(m => isSuperMove(m)),
    'Super Combos':   (d) => (d.movesList || []).filter(m => isSuperMove(m)),
    'Unique Attacks': (d) => (d.movesList || []).filter(m => m.type === 'unique'),
    'Throws':         (d) => (d.movesList || []).filter(m => m.type === 'throw'),
    'Common Moves':   (d) => (d.movesList || []).filter(m => m.type === 'common'),
    'Moves':          (d) => d.movesList || [],
    'Combos':         (d) => (d.combosList || []).map(c => ({
      id: c.id, name: c.name, type: 'normal' as const, input: c.input, frameData: {},
      damage: c.damage, notes: c.notes
    })),
    'Fatalities':     (d) => (d.movesList || []).filter(m => m.type === 'super'),
    'Finishers':      (d) => (d.movesList || []).filter(m => m.type === 'finisher'),
  };

  // Pre-compute counts per tab (safe with null characterData)
  const tabCounts = React.useMemo(() => {
    if (!characterData) return {} as Record<string, number>;
    const counts: Record<string, number> = {};
    (game.tabs || []).forEach(tab => {
      const fn = TAB_FILTER[tab];
      counts[tab] = fn ? fn(characterData).length : 0;
    });
    return counts;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterData, game.tabs]);

  // Sort empty tabs to the end automatically when data loads
  useEffect(() => {
    if (Object.keys(tabCounts).length === 0) return;
    setOrderedTabs(prev => {
      const nonEmpty = prev.filter(t => (tabCounts[t] || 0) > 0);
      const empty = prev.filter(t => (tabCounts[t] || 0) === 0);
      const mapped = [...nonEmpty, ...empty];
      // Check if order actually needs changing to prevent loops
      if (mapped.some((t, i) => t !== prev[i])) {
        return mapped;
      }
      return prev;
    });
  }, [tabCounts]);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('tab_index', index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, toIndex: number) => {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData('tab_index'), 10);
    if (isNaN(fromIndex) || fromIndex === toIndex) return;
    
    const newTabs = [...orderedTabs];
    const [movedTab] = newTabs.splice(fromIndex, 1);
    newTabs.splice(toIndex, 0, movedTab);
    
    setOrderedTabs(newTabs);
    
    const stored = localStorage.getItem('fgc_tab_order');
    let pref: string[] = [];
    if (stored) { try { pref = JSON.parse(stored); } catch { pref = []; } }
    const newPref = Array.from(new Set([...newTabs, ...pref]));
    localStorage.setItem('fgc_tab_order', JSON.stringify(newPref));
  };

  if (loadingError) {
    return (
      <div style={{
        padding: 'var(--space-xl)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-lg)',
      }}>
        <div style={{
          fontSize: '3rem',
          marginBottom: 'var(--space-md)',
        }}>⚠️</div>
        <h2 style={{ color: 'var(--accent-rose)', fontWeight: 700, fontSize: '1.5rem' }}>Data Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '400px' }}>{loadingError}</p>
        <button
          onClick={onBack}
          style={{
            padding: '0.75rem 2rem',
            background: 'var(--bg-input)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontWeight: 600,
            fontSize: '0.95rem',
            transition: 'all 0.25s ease',
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          ← Go Back
        </button>
      </div>
    );
  }

  if (!characterData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-md)',
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '3px solid var(--border-subtle)',
          borderTopColor: 'var(--accent-indigo)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <div style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
          Loading {characterId} data...
        </div>
      </div>
    );
  }

  const selectedCount = selectedPlaylist.length;
  const effectiveController = game.id === 'tatsunoko-vs-capcom-ultimate-all-stars' ? 'wii' : controller;

  return (
    <div style={{
      minHeight: '100vh',
      padding: 'var(--space-xl)',
      paddingBottom: '120px',
      position: 'relative',
    }}>
      {/* Glowing Ambient Mesh Background */}
      <AmbientMesh 
        colors={isDark 
          ? ['rgba(99, 102, 241, 0.08)', 'rgba(34, 211, 238, 0.08)', 'rgba(245, 158, 11, 0.05)'] 
          : ['rgba(99, 102, 241, 0.15)', 'rgba(34, 211, 238, 0.15)', 'rgba(245, 158, 11, 0.12)']} 
        speed={0.6} 
      />

      {/* Background Character Watermark (Tiled & Angled) */}
      <div style={{
        position: 'fixed',
        inset: '-50%',
        transform: 'rotate(-15deg)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem 4rem',
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 'clamp(4rem, 8vw, 8rem)',
        fontWeight: 900,
        color: isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.025)',
        userSelect: 'none',
        pointerEvents: 'none',
        fontFamily: "'Outfit', sans-serif",
        zIndex: 0,
        overflow: 'hidden',
      }}>
        {Array(60).fill(characterData.character.toUpperCase()).map((text, i) => (
          <span key={i} style={{ whiteSpace: 'nowrap' }}>{text}</span>
        ))}
      </div>

      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-primary)',
        margin: 'calc(-1 * var(--space-xl)) calc(-1 * var(--space-xl)) var(--space-md)',
        padding: 'var(--space-xl) var(--space-xl) var(--space-md)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'background-color 0.4s ease',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Top Header */}
        <TopHeader 
          onBack={onBack}
          onHome={onHome}
          gameName={characterData.game}
          characterName={characterData.character}
          disableInitialAnimation={false}
          selectedCount={selectedCount}
          onLaunchGameGlance={onLaunchMainScreen}
          onClearGameGlance={onClearGameGlance}
          hideGameGlanceControls={true}
        />
        {/* Toolbar: tabs + controller + search */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-md)',
        animation: 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both',
      }}>
        {/* Tabs */}
        <div 
          className="hide-scrollbar"
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            gap: '0.4rem',
            background: 'var(--bg-input)',
            padding: '0.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-subtle)',
            WebkitOverflowScrolling: 'touch',
          }}>
          {orderedTabs.map((tab, idx) => {
            const isEmpty = tabCounts[tab] === 0;
            return (
              <button
                key={tab}
                id={`tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                draggable={!isEmpty}
                onDragStart={(e) => handleDragStart(e, idx)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, idx)}
                onClick={() => {
                  if (!isEmpty) {
                    const section = document.getElementById(`section-${tab.replace(/\s+/g, '-').toLowerCase()}`);
                    if (section) {
                      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 180;
                      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    }
                  }
                }}
                title={isEmpty ? `No ${tab} data available` : `Drag to reorder. Click to jump.`}
                style={{
                  padding: '0.5rem 1.25rem',
                  background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)',
                  border: '1px solid var(--border-medium)',
                  color: isEmpty ? 'var(--text-muted)' : 'var(--text-secondary)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: isEmpty ? 'not-allowed' : 'grab',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                  opacity: isEmpty ? 0.4 : 1,
                  outline: 'none',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  boxShadow: 'var(--shadow-xs)',
                }}
                onMouseOver={e => {
                  if (!isEmpty) {
                    e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,1)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }
                }}
                onMouseOut={e => {
                  if (!isEmpty) {
                    e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
                  }
                }}
                onMouseDown={e => {
                  if (!isEmpty) e.currentTarget.style.cursor = 'grabbing';
                }}
                onMouseUp={e => {
                  if (!isEmpty) e.currentTarget.style.cursor = 'grab';
                }}
              >
                {!isEmpty && (
                  <span style={{
                    opacity: 0.65,
                    color: 'var(--text-tertiary)',
                    fontSize: '1rem',
                    marginRight: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'inherit',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="6" x2="8" y2="6"></line>
                      <line x1="8" y1="12" x2="8" y2="12"></line>
                      <line x1="8" y1="18" x2="8" y2="18"></line>
                      <line x1="16" y1="6" x2="16" y2="6"></line>
                      <line x1="16" y1="12" x2="16" y2="12"></line>
                      <line x1="16" y1="18" x2="16" y2="18"></line>
                    </svg>
                  </span>
                )}
                {tab}
                {isEmpty && (
                  <span style={{
                    position: 'absolute',
                    top: '-1px',
                    right: '-1px',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--text-muted)',
                  }} />
                )}
                {!isEmpty && (
                  <span style={{
                    marginLeft: '0.1rem',
                    fontSize: '0.65rem',
                    opacity: 0.6,
                    fontWeight: 700,
                    background: 'var(--bg-badge)',
                    padding: '0.1rem 0.4rem',
                    borderRadius: 'var(--radius-full)',
                  }}>
                    {tabCounts[tab]}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search + controller */}
        <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
            <span style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-tertiary)',
              fontSize: '0.9rem',
              pointerEvents: 'none',
            }}>🔍</span>
            <input
              id="move-search"
              type="text"
              placeholder="Search moves..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem 0.65rem 2.4rem',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                fontFamily: 'inherit',
                outline: 'none',
                transition: 'all 0.25s ease',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = 'var(--accent-indigo)';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.12)';
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
          </div>

          {selectedCount > 0 && (
            <button
              id="launch-main-screen"
              onClick={onLaunchMainScreen}
              style={{
                background: 'linear-gradient(135deg, var(--accent-indigo), var(--accent-purple))',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '0.45rem 1rem 0.45rem 0.5rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontFamily: 'inherit',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 2px 10px rgba(99, 102, 241, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(99, 102, 241, 0.35)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(99, 102, 241, 0.25)';
              }}
            >
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                color: '#fff',
                padding: '0.1rem 0.5rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 700,
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
              }}>
                {selectedCount}
              </span>
              <span>Launch</span>
              <span style={{ fontSize: '1rem', marginLeft: '-2px' }}>→</span>
            </button>
          )}
        </div>
      </div>
      </div>
      </div>

      {/* Move list */}
      <main style={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}>
        {orderedTabs.every(tab => {
          const list = TAB_FILTER[tab] ? TAB_FILTER[tab](characterData) : (characterData.movesList || []);
          const filtered = searchQuery.trim() ? list.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase())) : list;
          return filtered.length === 0;
        }) ? (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-3xl) var(--space-xl)',
            color: 'var(--text-tertiary)',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>🎯</div>
            <p style={{ fontWeight: 500 }}>
              {searchQuery ? `No moves matching "${searchQuery}"` : `No data available.`}
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {orderedTabs.map(tab => {
              const baseList = TAB_FILTER[tab] ? TAB_FILTER[tab](characterData) : (characterData.movesList || []);
              const displayList = searchQuery.trim() ? baseList.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase())) : baseList;
              
              if (displayList.length === 0) return null;

              // Pre-process displayList to build trees
              const topLevelMoves: Move[] = [];
              const childrenMap = new Map<string, Move[]>();
              
              displayList.forEach(m => {
                if (m.parentMoveId) {
                  if (!childrenMap.has(m.parentMoveId)) childrenMap.set(m.parentMoveId, []);
                  childrenMap.get(m.parentMoveId)!.push(m);
                }
              });

              displayList.forEach(m => {
                if (!m.parentMoveId || !displayList.some(p => p.id === m.parentMoveId)) {
                  topLevelMoves.push(m);
                }
              });

              return (
                <section key={tab} id={`section-${tab.replace(/\s+/g, '-').toLowerCase()}`}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)'}}>{tab}</h2>
                  <div className="move-grid-main" style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
                    gridAutoRows: 'auto',
                    gap: '1rem',
                    width: '100%',
                    maxWidth: '1400px',
                    margin: '0 auto',
                    alignContent: 'flex-start',
                    alignItems: 'stretch'
                  }}>
                    {topLevelMoves.map((topMove, topIdx) => {
                      const renderMoveCard = (move: Move, idx: number, depth: number = 0, isLastChild: boolean = false) => {
                        const isSelected = selectedPlaylist && selectedPlaylist.some(m => m && move && m.id === move.id);
                        const hasChildren = childrenMap.has(move.id) && childrenMap.get(move.id)!.length > 0;
                        const children = childrenMap.get(move.id) || [];

                        return (
                          <React.Fragment key={move.id}>
                            <div style={{ display: 'flex', width: '100%', position: 'relative', flex: 1 }}>
                              {depth > 0 && (
                                <div style={{ 
                                  width: `${depth * 1.5}rem`, 
                                  position: 'relative',
                                  flexShrink: 0
                                }}>
                                  <div style={{
                                    position: 'absolute',
                                    top: '-1rem',
                                    left: `calc(${(depth - 1) * 1.5}rem + 0.75rem)`,
                                    height: 'calc(50% + 1rem)',
                                    width: '2px',
                                    background: 'var(--border-medium)',
                                  }} />
                                  <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: `calc(${(depth - 1) * 1.5}rem + 0.75rem)`,
                                    width: '0.75rem',
                                    height: '2px',
                                    background: 'var(--border-medium)',
                                  }} />
                                  {!isLastChild && (
                                    <div style={{
                                      position: 'absolute',
                                      top: '50%',
                                      left: `calc(${(depth - 1) * 1.5}rem + 0.75rem)`,
                                      height: '100%',
                                      width: '2px',
                                      background: 'var(--border-medium)',
                                    }} />
                                  )}
                                </div>
                              )}

                              <div
                                id={`move-${move.id}`}
                                className="move-card"
                                tabIndex={0}
                                data-selected={isSelected ? 'true' : 'false'}
                                onClick={() => onToggleMove(move)}
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'flex-start',
                                  cursor: 'pointer',
                                  animation: `fadeInUp 0.3s ease ${Math.min(idx * 20, 300)}ms both`,
                                  gap: '0.75rem',
                                  padding: '1.25rem',
                                  position: 'relative',
                                  zIndex: 2,
                                  width: '100%',
                                  background: 'var(--bg-secondary)',
                                  borderRadius: 'var(--radius-lg)',
                                  border: isSelected ? '2px solid var(--accent-indigo)' : '1px solid var(--border-subtle)',
                                }}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                  {tab !== 'Combos' && (() => {
                                    const dlMatch = move.name.match(/\(DL(\d+)\)/);
                                    const cleanName = move.name.replace(/\(DL\d+\)/, '').trim();
                                    const isFollowUp = move.input.includes('~');

                                    return (
                                      <div style={{ paddingRight: '2rem' }}>
                                        <h3 style={{ 
                                          color: 'var(--text-primary)', 
                                          fontWeight: 700, 
                                          fontSize: '1.05rem',
                                          marginBottom: '0.35rem',
                                          lineHeight: 1.3,
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '0.4rem'
                                        }}>
                                          {isFollowUp && (
                                            <span style={{ color: 'var(--text-tertiary)', fontSize: '1.1rem', marginTop: '-2px' }}>↳</span>
                                          )}
                                          {cleanName}
                                        </h3>
                                        {(move.type || dlMatch) && (
                                          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                            {move.type && (
                                              <span style={{ 
                                                fontSize: '0.75rem', 
                                                color: 'var(--text-tertiary)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                fontWeight: 600,
                                                background: 'var(--bg-badge)',
                                                padding: '2px 6px',
                                                borderRadius: '4px'
                                              }}>{move.type}</span>
                                            )}
                                            {dlMatch && (
                                              <span style={{ 
                                                fontSize: '0.75rem', 
                                                color: '#f59e0b',
                                                fontWeight: 700,
                                                background: 'rgba(245, 158, 11, 0.15)',
                                                padding: '2px 6px',
                                                borderRadius: '4px',
                                                border: '1px solid rgba(245, 158, 11, 0.3)'
                                              }}>Drink Lvl {dlMatch[1]}</span>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    );
                                })()}
                                  
                                  {/* Explicit Selection Checkbox */}
                                  <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    border: isSelected ? 'none' : '2px solid var(--border-medium)',
                                    background: isSelected ? 'var(--accent-indigo)' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.2s ease',
                                    boxShadow: isSelected ? '0 0 10px rgba(99, 102, 241, 0.4)' : 'none',
                                    position: 'absolute',
                                    top: '1.25rem',
                                    right: '1.25rem'
                                  }}>
                                    {isSelected && (
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                      </svg>
                                    )}
                                  </div>
                                </div>

                                <div style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '0.75rem',
                                  background: 'rgba(0,0,0,0.4)',
                                  padding: '0.75rem',
                                  borderRadius: '12px',
                                  border: '1px inset rgba(255,255,255,0.05)',
                                  marginTop: 'auto',
                                  marginBottom: 'auto',
                                }}>
                                  <GlyphSequence 
                                    inputs={[move.input]} 
                                    controller={effectiveController} 
                                    notationSystem={notationSystem || game.notationSystem} 
                                    isCombo={move.type?.toLowerCase() === 'combo'}
                                  />
                                  {(move.damage || move.notes) && (
                                    <div style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '0.25rem',
                                      paddingTop: '0.5rem',
                                      borderTop: '1px solid rgba(255,255,255,0.1)',
                                    }}>

                                      {move.notes && (
                                        <div style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                                          {move.notes}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            {hasChildren && (
                              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '1rem', marginTop: '1rem' }}>
                                {children.map((child, cIdx) => 
                                  renderMoveCard(child, topIdx * 100 + cIdx, depth + 1, cIdx === children.length - 1)
                                )}
                              </div>
                            )}
                          </React.Fragment>
                        );
                      };

                        return (
                          <div key={topMove.id} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            {renderMoveCard(topMove, topIdx, 0, false)}
                          </div>
                        );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
      {/* Back to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: selectedCount > 0 ? '100px' : '30px',
            right: '30px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: isDark 
              ? 'linear-gradient(135deg, rgba(20,20,40,0.9), rgba(30,30,55,0.9))'
              : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,245,250,0.95))',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-md)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            zIndex: 90,
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            animation: 'fadeInUp 0.3s ease both',
            backdropFilter: 'blur(12px)',
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            e.currentTarget.style.borderColor = 'var(--accent-indigo)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            e.currentTarget.style.borderColor = 'var(--border-subtle)';
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};
