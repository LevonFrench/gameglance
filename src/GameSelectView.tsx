import React, { useState, useEffect, useRef } from 'react';
import type { GameDefinition } from './types';
import { SUPPORTED_GAMES } from './games';
import { useTheme } from './ThemeContext';
import { AmbientMesh } from './AmbientMesh';

interface Props {
  onSelectGame: (game: GameDefinition) => void;
  disableInitialAnimation?: boolean;
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
          padding: '0.6rem 1.25rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid',
          borderColor: isOpen ? 'var(--accent-indigo)' : 'var(--border-subtle)',
          background: 'var(--bg-glass)',
          color: 'var(--text-primary)',
          fontSize: '0.9rem',
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
        <span>{labelExtractor(value)}</span>
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

  const matches = (value ? games.filter((g: GameDefinition) => g.name.toLowerCase().includes(value.toLowerCase())) : games).sort((a: GameDefinition, b: GameDefinition) => a.name.localeCompare(b.name));

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
            padding: '0.6rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid',
            borderColor: isOpen ? 'var(--accent-indigo)' : 'var(--border-subtle)',
            background: 'var(--bg-glass)',
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
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

export const GameSelectView: React.FC<Props> = ({ onSelectGame, disableInitialAnimation }) => {
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
  const [developerFilter, setDeveloperFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'alpha' | 'date'>('date');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showCards, setShowCards] = useState(disableInitialAnimation || false);
  const { theme } = useTheme();
  const cardRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  
  useEffect(() => {
    window.scrollTo(0,0);
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
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>, gameId: string) => {
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
  const filteredAndSortedGames = [...VISIBLE_GAMES]
    .filter(g => developerFilter === 'All' || g.developer === developerFilter)
    .filter(g => searchQuery.trim() === '' || g.name.toLowerCase().includes(searchQuery.toLowerCase()))
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

  const isDark = theme !== 'light';
  const developerCounts = VISIBLE_GAMES.reduce((acc, game) => {
    if (game.developer) {
      acc[game.developer] = (acc[game.developer] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const allDevelopers = [
    'All',
    ...Object.entries(developerCounts)
      .filter(([, count]) => count >= 5)
      .map(([dev]) => dev)
      .sort()
  ];

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
        <div style={{
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--accent-indigo)',
          marginBottom: '0.75rem',
        }}>
          GameGlance
        </div>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 900,
          margin: 0,
          color: isDark ? '#f0f0f8' : '#1a1a2e',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
        }}>
          SELECT GAME
        </h1>

        {/* Controls Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr minmax(250px, 2fr) 1fr',
          gap: '1rem',
          maxWidth: '800px',
          margin: '0 auto',
          alignItems: 'center',
        }}>

          {/* Platform / Developer Pill */}
          <CustomDropdown 
            value={developerFilter}
            options={allDevelopers}
            onChange={(val: string) => {
              setDeveloperFilter(val);
              setShowCards(true);
            }}
            labelExtractor={(v: string) => v === 'All' ? 'Platforms' : v}
          />

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
      </header>

      {/* Game Grid */}
      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
      }}>
        {(showCards ? filteredAndSortedGames : filteredAndSortedGames.filter(g => favorites.includes(g.id))).map((game, index) => {
          const theme = getGameTheme(game);
          const isFavorite = favorites.includes(game.id);
          return (
            <button
              key={game.id}
              id={`game-card-${game.id}`}
              ref={el => { if (el) cardRefs.current.set(game.id, el); }}
              onClick={() => onSelectGame(game)}
              onMouseMove={(e) => handleMouseMove(e, game.id)}
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.25rem 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                minHeight: '110px',
                overflow: 'hidden',
                color: 'var(--text-primary)',
                animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${100 + index * 80}ms both`,
                textAlign: 'center',
                fontFamily: 'inherit',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-8px) scale(1.03)';
                el.style.borderColor = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.15)';
                el.style.boxShadow = `0 24px 64px ${theme.glowColor}, var(--shadow-glow-indigo)`;
                const gradientOverlay = el.querySelector('.gradient-overlay') as HTMLElement;
                if (gradientOverlay) gradientOverlay.style.opacity = isDark ? '0.15' : '0.10';
                const mouseGlow = el.querySelector('.mouse-glow') as HTMLElement;
                if (mouseGlow) mouseGlow.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0) scale(1)';
                el.style.borderColor = 'var(--border-subtle)';
                el.style.boxShadow = 'none';
                const gradientOverlay = el.querySelector('.gradient-overlay') as HTMLElement;
                if (gradientOverlay) gradientOverlay.style.opacity = '0.04';
                const mouseGlow = el.querySelector('.mouse-glow') as HTMLElement;
                if (mouseGlow) mouseGlow.style.opacity = '0';
              }}
            >
              {/* Mouse-reactive glow */}
              <div
                className="mouse-glow"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle 180px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${theme.glowColor}, transparent 70%)`,
                  opacity: 0,
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
                  opacity: 0.04,
                  transition: 'opacity 0.4s ease',
                  borderRadius: 'inherit',
                }}
              />

              {/* Top accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '15%',
                right: '15%',
                height: '3px',
                background: theme.gradient,
                borderRadius: '0 0 3px 3px',
                opacity: 0.5,
              }} />

              {/* Fav button */}
              <button
                className="fav-btn"
                onClick={(e) => toggleFavorite(e, game.id)}
                style={{
                  position: 'absolute',
                  top: '0.9rem',
                  right: '0.9rem',
                  background: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '34px',
                  height: '34px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: isFavorite ? '#ef4444' : 'var(--text-muted)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: 20,
                  opacity: isFavorite ? 1 : 0.6,
                  backdropFilter: 'blur(8px)',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.opacity = isFavorite ? '1' : '0.6';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>

              {/* Game name */}
              <h2 style={{
                margin: 0,
                fontSize: '1.35rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                position: 'relative',
                zIndex: 1,
              }}>
                {game.name}
              </h2>

              {/* Tagline */}
              <div style={{
                marginTop: '0.5rem',
                color: 'var(--text-tertiary)',
                fontSize: '0.85rem',
                fontWeight: 400,
                fontStyle: 'italic',
                position: 'relative',
                zIndex: 1,
              }}>
                {theme.tagline}
              </div>

              {/* Fighter count badge */}
              <div style={{
                marginTop: '0.85rem',
                padding: '0.35rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-badge)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                position: 'relative',
                zIndex: 1,
                backdropFilter: 'blur(6px)',
              }}>
                {game.characters.length} Fighter{game.characters.length !== 1 ? 's' : ''}
              </div>
            </button>
          );
        })}
      </main>

    </div>
  );
};
