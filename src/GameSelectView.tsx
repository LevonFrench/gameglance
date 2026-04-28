import React, { useState, useEffect, useRef } from 'react';
import { useArrowNavigation } from './useArrowNavigation';
import type { GameDefinition } from './types';
import { SUPPORTED_GAMES } from './games';
import { AmbientMesh } from './AmbientMesh';
import { useTheme } from './useTheme';
import { GameInfoCard } from './GameInfoCard';
import type { ControllerType } from './glyphMap';

interface Props {
  onSelectGame: (game: GameDefinition) => void;
  disableInitialAnimation?: boolean;
  controller?: ControllerType;
  notationOverride?: string;
  initialExpandedId?: string | null;
}

const GAME_THEMES: Record<string, { gradient: string; icon: string; tagline: string; glowColor: string }> = {
  'marvel-vs-capcom-2': { gradient: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)', icon: '🦸', tagline: 'Take You For A Ride', glowColor: 'rgba(79, 70, 229, 0.25)' },
  'street-fighter-6': { gradient: 'linear-gradient(135deg, #e8363c 0%, #fbbf24 100%)', icon: '🥊', tagline: 'World Warriors Await', glowColor: 'rgba(232, 54, 60, 0.25)' },
  'street-fighter-ii': { gradient: 'linear-gradient(135deg, #1d4ed8 0%, #ef4444 100%)', icon: '🥋', tagline: 'The Grand Master Challenge', glowColor: 'rgba(29, 78, 216, 0.25)' },
  'capcom-vs-snk-2': { gradient: 'linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)', icon: '⚔️', tagline: 'Mark of the Millennium', glowColor: 'rgba(251, 191, 36, 0.25)' },
  'capcom-fighting-jam': { gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)', icon: '🌟', tagline: 'Worlds Collide', glowColor: 'rgba(139, 92, 246, 0.25)' },
  'darkstalkers-the-night-warriors': { gradient: 'linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%)', icon: '🦇', tagline: 'The Night Warriors', glowColor: 'rgba(76, 29, 149, 0.25)' },
  'street-fighter-alpha-3': { gradient: 'linear-gradient(135deg, #14b8a6 0%, #0369a1 100%)', icon: '🔥', tagline: 'Go For Broke!', glowColor: 'rgba(20, 184, 166, 0.25)' },
};

function getGameTheme(game: GameDefinition) {
  if (GAME_THEMES[game.id]) return GAME_THEMES[game.id];
  
  const name = game.name.toLowerCase();
  
  // Franchises
  if (name.includes('mortal kombat') || name.includes('mk')) return {
    gradient: 'linear-gradient(135deg, #b91c1c 0%, #450a0a 100%)', icon: '🐉', tagline: game.tagline || 'Finish Him!', glowColor: 'rgba(185, 28, 28, 0.25)'
  };
  if (name.includes('guilty gear')) return {
    gradient: 'linear-gradient(135deg, #ea580c 0%, #7c2d12 100%)', icon: '🎸', tagline: game.tagline || 'Heaven or Hell... Duel!', glowColor: 'rgba(234, 88, 12, 0.25)'
  };
  if (name.includes('blazblue')) return {
    gradient: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)', icon: '🌀', tagline: game.tagline || 'The Wheel of Fate is Turning', glowColor: 'rgba(37, 99, 235, 0.25)'
  };
  if (name.includes('tekken')) return {
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)', icon: '⚡', tagline: game.tagline || 'The King of Iron Fist', glowColor: 'rgba(245, 158, 11, 0.25)'
  };
  if (name.includes('virtua fighter')) return {
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)', icon: '🥋', tagline: game.tagline || 'Ten Years Too Early!', glowColor: 'rgba(14, 165, 233, 0.25)'
  };
  if (name.includes('dead or alive')) return {
    gradient: 'linear-gradient(135deg, #db2777 0%, #831843 100%)', icon: '🌸', tagline: game.tagline || 'I am a Fighter', glowColor: 'rgba(219, 39, 119, 0.25)'
  };
  if (name.includes('king of fighters')) return {
    gradient: 'linear-gradient(135deg, #fb923c 0%, #c2410c 100%)', icon: '👑', tagline: game.tagline || 'The Ultimate Match', glowColor: 'rgba(251, 146, 60, 0.25)'
  };
  if (name.includes('fatal fury') || name.includes('garou')) return {
    gradient: 'linear-gradient(135deg, #ef4444 0%, #991b1b 100%)', icon: '🐺', tagline: game.tagline || 'The Legend of the Hungry Wolf', glowColor: 'rgba(239, 68, 68, 0.25)'
  };
  if (name.includes('samurai shodown')) return {
    gradient: 'linear-gradient(135deg, #dc2626 0%, #111827 100%)', icon: '⚔️', tagline: game.tagline || 'Embrace Death', glowColor: 'rgba(220, 38, 38, 0.25)'
  };
  if (name.includes('killer instinct')) return {
    gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', icon: '🩸', tagline: game.tagline || 'C-C-C-Combo Breaker!', glowColor: 'rgba(16, 185, 129, 0.25)'
  };
  if (name.includes('marvel vs capcom') || name.includes('msh') || name.includes('cota') || name.includes('xmvsf')) return {
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #4338ca 100%)', icon: '🦸', tagline: game.tagline || 'Let\'s Go Crazy!', glowColor: 'rgba(139, 92, 246, 0.25)'
  };
  if (name.includes('bloody roar')) return {
    gradient: 'linear-gradient(135deg, #ca8a04 0%, #854d0e 100%)', icon: '🐾', tagline: game.tagline || 'Awaken the Beast', glowColor: 'rgba(202, 138, 4, 0.25)'
  };
  if (name.includes('art of fighting')) return {
    gradient: 'linear-gradient(135deg, #eab308 0%, #a16207 100%)', icon: '👊', tagline: game.tagline || 'The Path of the Warrior', glowColor: 'rgba(234, 179, 8, 0.25)'
  };
  if (name.includes('last blade')) return {
    gradient: 'linear-gradient(135deg, #64748b 0%, #334155 100%)', icon: '🍂', tagline: game.tagline || 'A Romance of Swords', glowColor: 'rgba(100, 116, 139, 0.25)'
  };
  if (name.includes('dragon ball')) return {
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)', icon: '🐉', tagline: game.tagline || 'Sparking!', glowColor: 'rgba(245, 158, 11, 0.25)'
  };
  if (name.includes('vampire') || name.includes('nightwarriors')) return {
    gradient: 'linear-gradient(135deg, #a21caf 0%, #4a044e 100%)', icon: '🦇', tagline: game.tagline || 'Creatures of the Night', glowColor: 'rgba(162, 28, 175, 0.25)'
  };

  // Fallback generation based on hash so game is consistently styled
  let hash = 0;
  for (let i = 0; i < game.id.length; i++) hash = game.id.charCodeAt(i) + ((hash << 5) - hash);
  const hue1 = Math.abs(hash) % 360;
  const hue2 = (hue1 + 40) % 360;
  
  return {
    gradient: `linear-gradient(135deg, hsl(${hue1}, 70%, 50%) 0%, hsl(${hue2}, 80%, 40%) 100%)`,
    icon: '🕹️',
    tagline: game.tagline || 'Ready to Fight',
    glowColor: `hsla(${hue1}, 70%, 50%, 0.25)`
  };
}

interface DropdownProps {
  value: string;
  options: string[];
  onChange: (val: string) => void;
  labelExtractor?: (o: string) => string;
}

const CustomDropdown = ({ value, options, onChange, labelExtractor = (o: string) => o }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={triggerRef} style={{ position: 'relative', width: '100%', zIndex: isOpen ? 100 : 10 }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '0.75rem 1.5rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid',
          borderColor: isOpen ? 'var(--accent-indigo)' : 'var(--border-subtle)',
          background: 'var(--bg-glass)',
          color: 'var(--text-primary)',
          fontSize: '1.05rem',
          fontWeight: 600,
          cursor: 'pointer',
          backdropFilter: 'blur(12px)',
          textAlign: 'center',
          userSelect: 'none',
          transition: 'all 0.3s ease',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        onMouseOver={(e) => { if (!isOpen) e.currentTarget.style.borderColor = 'var(--accent-indigo)'; }}
        onMouseOut={(e) => { if (!isOpen) e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
      >
        <span style={{ whiteSpace: 'nowrap' }}>{labelExtractor(value)}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 0.5rem)',
          left: 0,
          right: 0,
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          maxHeight: '300px',
          overflowY: 'auto',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
          padding: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        }}>
           {options.map((opt: string, i: number) => (
             <div 
               key={i}
               onClick={() => { onChange(opt); setIsOpen(false); }}
               style={{
                 padding: '0.6rem 1rem',
                 cursor: 'pointer',
                 color: value === opt ? 'var(--accent-indigo)' : 'var(--text-secondary)',
                 background: value === opt ? 'var(--bg-input)' : 'transparent',
                 borderRadius: 'var(--radius-md)',
                 transition: 'all 0.2s ease',
                 textAlign: 'center',
                 fontWeight: value === opt ? 700 : 500,
               }}
               onMouseOver={(e) => { e.currentTarget.style.background = 'var(--bg-input)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
               onMouseOut={(e) => { e.currentTarget.style.background = value === opt ? 'var(--bg-input)' : 'transparent'; e.currentTarget.style.color = value === opt ? 'var(--accent-indigo)' : 'var(--text-secondary)'; }}
             >
                {labelExtractor(opt)}
             </div>
           ))}
        </div>
      )}
    </div>
  );
};

interface AutocompleteProps {
  value: string;
  onChange: (val: string) => void;
  games: GameDefinition[];
  onSelectGame?: (game: GameDefinition) => void;
}

const CustomAutocomplete = ({ value, onChange, games, onSelectGame }: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const matches = (value ? games.filter((g: GameDefinition) => 
    g.name.toLowerCase().includes(value.toLowerCase()) || 
    (g.searchAliases && g.searchAliases.some(alias => alias.toLowerCase().includes(value.toLowerCase())))
  ) : games).sort((a: GameDefinition, b: GameDefinition) => a.name.localeCompare(b.name));

  return (
    <div ref={triggerRef} style={{ position: 'relative', width: '100%', zIndex: isOpen ? 100 : 10 }}>
        <input
          type="text"
          placeholder="Search Games"
          value={value}
          onChange={(e) => {
             onChange(e.target.value);
             setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          style={{
            width: '100%',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid',
            borderColor: isOpen ? 'var(--accent-indigo)' : 'var(--border-subtle)',
            background: 'var(--bg-glass)',
            color: 'var(--text-primary)',
            fontSize: '1.05rem',
            fontWeight: 600,
            outline: 'none',
            backdropFilter: 'blur(12px)',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            boxSizing: 'border-box',
          }}
          onMouseOver={(e) => { if (!isOpen) e.currentTarget.style.borderColor = 'var(--accent-indigo)'; }}
          onMouseOut={(e) => { if (!isOpen) e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
        />
       {isOpen && matches.length > 0 && (
         <div style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: 0,
            right: 0,
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            maxHeight: '300px',
            overflowY: 'auto',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
         }}>
           {matches.map((g: GameDefinition) => (
              <div 
                key={g.id}
                onClick={() => { 
                   onChange(g.name); 
                   setIsOpen(false); 
                   if(onSelectGame) onSelectGame(g);
                }}
                style={{
                   padding: '0.6rem 1rem',
                   cursor: 'pointer',
                   color: 'var(--text-secondary)',
                   borderRadius: 'var(--radius-md)',
                   transition: 'all 0.2s ease',
                   textAlign: 'center',
                   fontWeight: 500,
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--bg-input)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                 {g.name}
              </div>
           ))}
         </div>
       )}
    </div>
  )
}

const PlatformIcons = ({ platformString }: { platformString: string }) => {
  if (!platformString) return null;
  const pStr = platformString.toLowerCase();
  
  const hasArcade = pStr.includes('arcade') || pStr.includes('neogeo') || pStr.includes('mvs') || pStr.includes('cps');
  const hasPS = pStr.includes('ps1') || pStr.includes('ps2') || pStr.includes('ps3') || pStr.includes('ps4') || pStr.includes('ps5') || pStr.includes('playstation') || pStr.includes('vita');
  const hasXbox = pStr.includes('xbox');
  const hasNintendo = pStr.includes('switch') || pStr.includes('snes') || pStr.includes('n64') || pStr.includes('wii') || pStr.includes('gc') || pStr.includes('gamecube') || pStr.includes('sfami');
  const hasSega = pStr.includes('genesis') || pStr.includes('saturn') || pStr.includes('dc') || pStr.includes('dreamcast');
  const hasPC = pStr.includes('pc') || pStr.includes('steam');

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
      {hasArcade && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <title>Arcade</title>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M4 8h16" />
          <circle cx="9" cy="13" r="2" />
          <path d="M14 13h2" />
          <path d="M14 16h2" />
        </svg>
      )}
      {hasPS && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <title>PlayStation</title>
          <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
          <line x1="6" y1="12" x2="10" y2="12" />
          <line x1="8" y1="10" x2="8" y2="14" />
          <circle cx="16" cy="12" r="1" fill="currentColor" />
        </svg>
      )}
      {hasXbox && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <title>Xbox</title>
          <circle cx="12" cy="12" r="10" />
          <path d="M8 8l8 8" />
          <path d="M16 8l-8 8" />
        </svg>
      )}
      {hasNintendo && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <title>Nintendo</title>
          <rect x="2" y="4" width="20" height="16" rx="4" />
          <line x1="12" y1="4" x2="12" y2="20" />
          <circle cx="7" cy="10" r="1" fill="currentColor" />
          <circle cx="17" cy="14" r="1" fill="currentColor" />
        </svg>
      )}
      {hasSega && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <title>Sega</title>
          <ellipse cx="12" cy="12" rx="10" ry="7" />
          <line x1="6" y1="12" x2="10" y2="12" />
          <circle cx="16" cy="12" r="1" fill="currentColor" />
        </svg>
      )}
      {hasPC && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <title>PC</title>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )}
    </div>
  );
};

export const GameSelectView: React.FC<Props> = ({ 
  onSelectGame, 
  disableInitialAnimation = false,
  controller,
  notationOverride = 'auto',
  initialExpandedId
}) => {
  useArrowNavigation('[id^="game-card-"]');

  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedFavs = localStorage.getItem('fgc_game_favorites');
    if (storedFavs) {
      try {
        return JSON.parse(storedFavs);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'alpha' | 'date'>('date');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tagFilter, setTagFilter] = useState<string>('All');
  const [showCards, setShowCards] = useState(disableInitialAnimation || false);
  const [expandedGameId, setExpandedGameId] = useState<string | null>(initialExpandedId || null);
  const [isGlitching, setIsGlitching] = useState(false);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const startGlitchCycle = () => {
      setIsGlitching(true);
      timeoutId = setTimeout(() => {
        setIsGlitching(false);
        const randomWait = Math.random() * (11000 - 3000) + 3000;
        timeoutId = setTimeout(startGlitchCycle, randomWait);
      }, 4000);
    };

    timeoutId = setTimeout(startGlitchCycle, 7000);

    return () => clearTimeout(timeoutId);
  }, []);

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newFavs = favorites.includes(id) 
      ? favorites.filter(fav => fav !== id) 
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('fgc_game_favorites', JSON.stringify(newFavs));
  };

  // Mouse-reactive gradient glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, gameId: string) => {
    const el = cardRefs.current.get(gameId);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mouse-x', `${x}%`);
    el.style.setProperty('--mouse-y', `${y}%`);
  };
  
  const VISIBLE_GAMES = SUPPORTED_GAMES.filter(g => !g.isDraft);
  
  // Sort favorites first, then apply selected sort order
  const computeGameCategories = (game: typeof VISIBLE_GAMES[0]): string[] => {
    const cats: string[] = [...(game.tags || [])];
    
    const devMap: Record<string, string> = {
      'Arc System Works': 'ARC',
      'NetherRealm Studios': 'NRS',
      'Hudson Soft': 'Hudson',
      'Capcom': 'Capcom',
      'SNK': 'SNK',
      'Sega': 'Sega',
      'Tecmo': 'Tecmo'
    };
    if (game.developer && devMap[game.developer]) {
       cats.push(devMap[game.developer]);
    }

    const franchises = [
      { key: 'street-fighter', tag: 'SF' },
      { key: 'king-of-fighters', tag: 'KOF' },
      { key: 'samurai-shodown', tag: 'SamSho' },
      { key: 'soulcalibur', tag: 'SoulCal' },
      { key: 'guilty-gear', tag: 'GGEAR' },
      { key: 'marvel-vs-capcom', tag: 'Vs.' },
      { key: 'tekken', tag: 'Tekken' },
      { key: 'mortal-kombat', tag: 'MK' },
      { key: 'virtua-fighter', tag: 'VF' },
      { key: 'vampire', tag: 'Darkstalkers' },
      { key: 'darkstalkers', tag: 'Darkstalkers' },
    ];
    
    for (const f of franchises) {
      if (game.id.includes(f.key)) {
         cats.push(f.tag);
         break;
      }
    }
    
    return Array.from(new Set(cats));
  };

    const filteredAndSortedGames = [...VISIBLE_GAMES]
    .filter(g => tagFilter === 'All' || computeGameCategories(g).includes(tagFilter))
    .filter(g => searchQuery.trim() === '' || 
                 g.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                 (g.searchAliases && g.searchAliases.some(alias => alias.toLowerCase().includes(searchQuery.toLowerCase()))))
    .filter(g => !showFavoritesOnly || favorites.includes(g.id))
    .sort((a, b) => {
      const aFav = favorites.includes(a.id);
      const bFav = favorites.includes(b.id);
      if (aFav && !bFav) return -1;
      if (!aFav && bFav) return 1;
      
      if (sortBy === 'date') {
        const yearA = a.releaseYear || 1998;
        const yearB = b.releaseYear || 1998;
        if (yearA !== yearB) return yearB - yearA;
      }
      return a.name.localeCompare(b.name);
    });

  const { isDark } = useTheme();
  const tagCounts = VISIBLE_GAMES.reduce((acc, game) => {
    const cats = computeGameCategories(game);
    cats.forEach(t => {
      acc[t] = (acc[t] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const allTags = [
    'All',
    ...Object.keys(tagCounts).sort()
  ];

  
  const expandedGame = React.useMemo(() => {
    return filteredAndSortedGames.find(g => g.id === expandedGameId) || 
           filteredAndSortedGames.filter(g => favorites.includes(g.id)).find(g => g.id === expandedGameId);
  }, [expandedGameId, filteredAndSortedGames, favorites]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: (showCards || favorites.length > 0) ? 'flex-start' : 'center',
      padding: '0 2rem 2rem 2rem',
      position: 'relative',
      transition: 'justify-content 0.4s ease',
    }}>
      {/* Glowing Ambient Mesh Background */}
      <AmbientMesh 
        colors={isDark 
          ? ['rgba(99, 102, 241, 0.15)', 'rgba(168, 85, 247, 0.12)', 'rgba(236, 72, 153, 0.1)'] 
          : ['rgba(99, 102, 241, 0.20)', 'rgba(168, 85, 247, 0.18)', 'rgba(236, 72, 153, 0.15)']} 
        speed={1.0} 
      />



      <header style={{
        textAlign: 'center',
        marginBottom: '3rem',
        animation: disableInitialAnimation ? 'none' : 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-primary)',
        padding: '2rem 1rem 1rem 1rem',
        width: '100vw',
        borderBottom: (showCards || favorites.length > 0) ? '1px solid var(--border-subtle)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <a href="/gameglance.html" target="_blank" rel="noopener noreferrer" style={{ 
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          letterSpacing: '0.3em',
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          color: 'var(--accent-indigo)',
          marginBottom: '1rem',
          textDecoration: 'none',
          display: 'block',
        }}>
          GameGlance
        </a>
        <h1 
          className={`glitch ${isGlitching ? "glitching " : ""}`}
          data-text="-> SELECT GAME <-"
          onClick={() => { setShowCards(true); setExpandedGameId(null); }}
          style={{
          fontSize: 'max(2rem, 3.5vw)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          margin: 0,
          textTransform: 'uppercase',
          color: 'var(--text-primary)',
          position: 'relative',
          display: 'inline-block',
          marginBottom: '1.5rem',
          cursor: 'pointer',
        }}>
          -&gt; SELECT GAME &lt;-
        </h1>

        {/* Controls Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'min-content 1fr min-content',
            gap: '1rem',
            alignItems: 'center',
          }}>
            {/* New Filter Button */}
            <button 
              onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: isFilterPanelOpen || tagFilter !== 'All' || showFavoritesOnly ? 'var(--accent-indigo)' : 'var(--border-subtle)',
                background: isFilterPanelOpen || tagFilter !== 'All' || showFavoritesOnly ? 'rgba(99, 102, 241, 0.1)' : 'var(--bg-glass)',
                color: isFilterPanelOpen || tagFilter !== 'All' || showFavoritesOnly ? 'var(--accent-indigo)' : 'var(--text-primary)',
                fontSize: '1.05rem',
                fontWeight: 600,
                cursor: 'pointer',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              <span>Filters</span>
              {(tagFilter !== 'All' || showFavoritesOnly) && (
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor', marginLeft: '0.25rem' }} />
              )}
            </button>

          {/* Search Pill */}
          <CustomAutocomplete 
            value={searchQuery}
            onChange={(val: string) => {
              setSearchQuery(val);
              setShowCards(true);
            }}
            games={VISIBLE_GAMES}
            onSelectGame={onSelectGame}
          />

          {/* Sort Pill */}
          <CustomDropdown 
            value={sortBy}
            options={['date', 'alpha']}
            onChange={(val: string) => {
              setSortBy(val as 'date' | 'alpha');
              setShowCards(true);
            }}
            labelExtractor={(v: string) => v === 'date' ? 'Sort: Date' : 'Sort: A-Z'}
          />
          </div>

          {/* Expanded Filter Panel */}
          {isFilterPanelOpen && (
             <div style={{
               background: 'var(--bg-glass)',
               backdropFilter: 'blur(12px)',
               border: '1px solid var(--border-subtle)',
               borderRadius: 'var(--radius-lg)',
               padding: '1.5rem',
               animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
               display: 'flex',
               flexDirection: 'column',
               gap: '1.5rem',
               textAlign: 'left',
             }}>
               {/* Favorites Toggle */}
               <div>
                 <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Library</div>
                 <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      onClick={() => { setShowFavoritesOnly(!showFavoritesOnly); setShowCards(true); }}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid',
                        borderColor: showFavoritesOnly ? 'var(--accent-indigo)' : 'var(--border-subtle)',
                        background: showFavoritesOnly ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                        color: showFavoritesOnly ? 'var(--accent-indigo)' : 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseOver={(e) => { if (!showFavoritesOnly) e.currentTarget.style.borderColor = 'var(--accent-indigo)'; }}
                      onMouseOut={(e) => { if (!showFavoritesOnly) e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={showFavoritesOnly ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      Favorites Only
                    </button>
                 </div>
               </div>

               {/* Unified Categories */}
               <div>
                 <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Categories</div>
                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {allTags.map(tag => {
                      const isActive = tagFilter === tag;
                      return (
                        <button
                          key={tag}
                          onClick={() => { setTagFilter(tag); setShowCards(true); }}
                          style={{
                            padding: '0.5rem 1.15rem',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid',
                            borderColor: isActive ? 'var(--accent-indigo)' : 'var(--border-subtle)',
                            background: isActive ? 'rgba(99, 102, 241, 0.1)' : 'var(--bg-glass)',
                            color: isActive ? 'var(--accent-indigo)' : 'var(--text-primary)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            backdropFilter: 'blur(12px)',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseOver={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'var(--accent-indigo)'; }}
                          onMouseOut={(e) => { if (!isActive) e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                        >
                          {tag}
                        </button>
                      );
                    })}
                 </div>
               </div>
             </div>
          )}
        </div>
      </header>

      {/* Game Grid */}
      
      {/* Top Expansion Area */}
      {expandedGameId && expandedGame && (
        <div style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto 2rem auto',
          background: isDark ? 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(20,20,30,0.8) 100%)' : 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(255,255,255,0.9) 100%)',
          border: '1px solid var(--border-medium)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          borderRadius: 'var(--radius-xl)',
          padding: '4rem 2rem 2rem 2rem',
          position: 'relative',
          overflow: 'hidden',
          animation: 'slideDownFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}>
           <div style={{
             position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
             background: getGameTheme(expandedGame).gradient, opacity: 0.8,
           }} />
           
           <button
             onClick={() => setExpandedGameId(null)}
             style={{
               position: 'absolute',
               top: '1rem',
               right: '1rem',
               background: 'var(--bg-glass)',
               border: '1px solid var(--border-subtle)',
               borderRadius: '50%',
               width: '32px',
               height: '32px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               cursor: 'pointer',
               color: 'var(--text-secondary)',
               transition: 'all 0.25s',
               zIndex: 10,
               backdropFilter: 'blur(4px)',
             }}
             onMouseOver={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)'; }}
             onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
           >
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <line x1="18" y1="6" x2="6" y2="18"></line>
               <line x1="6" y1="6" x2="18" y2="18"></line>
             </svg>
           </button>
           
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', width: '100%', position: 'relative', zIndex: 1, marginBottom: '2rem' }}>
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: 900,
                color: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.05)',
                whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none',
                fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.03em', zIndex: 0,
                mixBlendMode: isDark ? 'overlay' : 'multiply'
              }}>
                {expandedGame.name.toUpperCase()}
              </div>

              <h2 style={{ 
                margin: 0, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900,
                color: 'var(--text-primary)', position: 'relative', zIndex: 1,
                letterSpacing: '-0.02em', fontFamily: "'Outfit', sans-serif",
                textShadow: isDark ? '0 4px 12px rgba(0,0,0,0.5)' : 'none'
              }}>
                {expandedGame.name}
              </h2>
              
              <div style={{ 
                display: 'flex', gap: 'var(--space-sm)', color: 'var(--text-secondary)',
                fontSize: '0.95rem', position: 'relative', zIndex: 1, fontWeight: 600,
                letterSpacing: '0.03em', textTransform: 'uppercase', flexWrap: 'wrap',
                justifyContent: 'center', alignItems: 'center'
              }}>
                <span>Roster: {expandedGame.rosterCount || expandedGame.characters?.length || 0}</span>
                <span style={{ opacity: 0.5 }}>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  Platforms: <PlatformIcons platformString={expandedGame.platform || 'Arcade'} />
                </span>
                <span style={{ opacity: 0.5 }}>•</span>
                {expandedGame.developer && <span style={{ color: `hsl(${Math.abs(Array.from(expandedGame.id).reduce((hash, char) => char.charCodeAt(0) + ((hash << 5) - hash), 0)) % 360}, 70%, 60%)` }}>{expandedGame.developer}</span>}
                {expandedGame.developer && expandedGame.releaseYear && <span style={{ opacity: 0.5 }}>•</span>}
                {expandedGame.releaseYear && <span>{expandedGame.releaseYear}</span>}

                {expandedGame.tagline && (
                  <>
                    <span style={{ opacity: 0.5, margin: '0 0.25rem' }}>|</span>
                    <span style={{ color: 'var(--text-tertiary)', fontStyle: 'italic', textTransform: 'none' }}>
                      "{expandedGame.tagline}"
                    </span>
                  </>
                )}

                {expandedGame.tags && expandedGame.tags.length > 0 && (
                  <>
                    <span style={{ opacity: 0.5, margin: '0 0.25rem' }}>|</span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {expandedGame.tags.map(tag => (
                        <span key={tag} style={{
                          background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                          padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem',
                          color: 'var(--text-primary)', border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                          backdropFilter: 'blur(4px)'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
           </div>
           
           <div style={{ animation: 'fadeInUp 0.4s ease-out 0.1s both' }}>
              <GameInfoCard game={expandedGame} controller={controller} notationOverride={notationOverride} />
           </div>
        </div>
      )}

<main className="game-grid-main" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gridAutoRows: 'minmax(160px, auto)',
        gap: 'calc(1.5rem * var(--spacing-scale, 1))',
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
      }}>
        {(showCards ? filteredAndSortedGames : filteredAndSortedGames.filter(g => favorites.includes(g.id))).map((game, index) => {
          const theme = getGameTheme(game);
          const isFavorite = favorites.includes(game.id);
          const isActive = expandedGameId === game.id;
          
          return (
            <div
              key={game.id}
              id={`game-container-${game.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                animation: disableInitialAnimation ? 'none' : `fadeInUp 0.3s ease-out ${index * 30}ms both`,
              }}
            >
              <div
                id={`game-card-${game.id}`}
                ref={el => { if (el) cardRefs.current.set(game.id, el); }}
                onClick={() => onSelectGame(game)}
                onMouseMove={(e) => handleMouseMove(e, game.id)}
                role="button"
                tabIndex={0}
                style={{
                  position: 'relative',
                  background: isActive ? (isDark ? 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(20,20,30,0.9) 100%)' : 'var(--bg-card)') : 'var(--bg-card)',
                  border: isActive ? `1px solid ${theme.glowColor}` : '1px solid var(--border-medium)',
                  boxShadow: isActive ? `0 0 15px ${theme.glowColor}40` : '0 4px 12px rgba(0,0,0,0.1)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                  minHeight: '110px',
                  flex: 1,
                  overflow: 'hidden',
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                  fontFamily: 'inherit',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  transform: isActive ? 'translateY(-2px)' : 'none',
                }}
                onMouseOver={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget;
                    el.style.borderColor = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(99,102,241,0.4)';
                    el.style.boxShadow = `0 0 20px ${theme.glowColor}, 0 0 40px ${theme.glowColor}, var(--shadow-glow-indigo)`;
                    const gradientOverlay = el.querySelector('.gradient-overlay') as HTMLElement;
                    if (gradientOverlay) gradientOverlay.style.opacity = isDark ? '0.15' : '0.10';
                    const mouseGlow = el.querySelector('.mouse-glow') as HTMLElement;
                    if (mouseGlow) mouseGlow.style.opacity = '1';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive) {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--border-medium)';
                    el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    const gradientOverlay = el.querySelector('.gradient-overlay') as HTMLElement;
                    if (gradientOverlay) gradientOverlay.style.opacity = '0.04';
                    const mouseGlow = el.querySelector('.mouse-glow') as HTMLElement;
                    if (mouseGlow) mouseGlow.style.opacity = '0';
                  }
                }}
              >
                {/* Mouse-reactive glow */}
                <div
                  className="mouse-glow"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${theme.glowColor}, transparent 70%)`,
                    opacity: isActive ? 0.3 : 0,
                    transition: 'opacity 0.4s ease',
                    borderRadius: 'inherit',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }}
                />

                {/* Gradient overlay behind content */}
                <div
                  className="gradient-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: theme.gradient,
                    opacity: isActive ? (isDark ? 0.15 : 0.1) : 0.04,
                    transition: 'opacity 0.4s ease',
                    borderRadius: 'inherit',
                  }}
                />

                {/* Top accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: theme.gradient,
                  opacity: isActive ? 1 : 0.8,
                }} />

                {/* Fav button - Top Right */}
                <button
                  className="fav-btn"
                  onClick={(e) => toggleFavorite(e, game.id)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: isFavorite ? '#ef4444' : 'var(--text-secondary)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 2,
                    padding: 0,
                    backdropFilter: 'blur(4px)',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.15)';
                    e.currentTarget.style.color = '#ef4444';
                    e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.color = isFavorite ? '#ef4444' : 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </button>

                {/* Tiled Watermark */}
                <div style={{
                  position: 'absolute',
                  inset: '-50%',
                  transform: 'rotate(-15deg)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0 1.5rem',
                  alignContent: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'rgba(255, 255, 255, 0.02)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  zIndex: 0,
                }}>
                  {Array.from({ length: 12 }, (_, i) => (
                    <span key={i} style={{ whiteSpace: 'nowrap' }}>{game.name.toUpperCase()}</span>
                  ))}
                </div>
                <h2 style={{
                  margin: 0,
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  zIndex: 1,
                  paddingRight: '2rem',
                }}>
                  {game.name.split(': ').map((part, i, arr) => (
                    <React.Fragment key={i}>
                      <span style={{ display: 'inline-block' }}>
                        {part}{i < arr.length - 1 ? ':' : ''}
                      </span>
                      {i < arr.length - 1 ? ' ' : ''}
                    </React.Fragment>
                  ))}
                </h2>

                <div style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.3rem 0.7rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-badge)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      {game.rosterCount || game.characters?.length || 0}
                    </div>
                    {game.platform && <PlatformIcons platformString={game.platform} />}
                  </div>
                </div>

                {/* Info button - Bottom Right */}
                <button
                  className="info-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    const isExpanding = expandedGameId !== game.id;
                    setExpandedGameId(isExpanding ? game.id : null);
                    if (isExpanding) {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 50);
                    }
                  }}
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: isActive ? 'var(--accent-indigo)' : 'var(--bg-glass)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: isActive ? '#fff' : 'var(--text-secondary)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    width: '32px',
                    height: '32px',
                    padding: 0,
                    borderRadius: '50%',
                    zIndex: 2,
                    backdropFilter: 'blur(4px)',
                  }}
                  onMouseOver={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.boxShadow = '0 0 12px rgba(99, 102, 241, 0.4)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                    }
                  }}
                  onMouseOut={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    }
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {isActive ? (
                      <>
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </>
                    ) : (
                      <>
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>
          );
        })}

      </main>

    </div>
  );
};
