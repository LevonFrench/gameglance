import sys
import re

with open('src/GameSelectView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add state
state_injection = """  const [developerFilter, setDeveloperFilter] = useState<string>('All');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState<boolean>(false);"""
content = re.sub(r"const \[developerFilter, setDeveloperFilter\] = useState<string>\('All'\);", state_injection, content)

# 2. Update filteredAndSortedGames
filter_injection = """  const filteredAndSortedGames = [...VISIBLE_GAMES]
    .filter(g => developerFilter === 'All' || g.developer === developerFilter)
    .filter(g => searchQuery.trim() === '' || g.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(g => !showFavoritesOnly || favorites.includes(g.id))"""
content = re.sub(r"const filteredAndSortedGames = \[\.\.\.VISIBLE_GAMES\][\s\S]*?\.filter\(g => searchQuery\.trim\(\) === '' \|\| g\.name\.toLowerCase\(\)\.includes\(searchQuery\.toLowerCase\(\)\)\)", filter_injection, content)

# 3. Replace Controls Container
old_controls = """        {/* Controls Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'min-content 1fr min-content',
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
            labelExtractor={(v: string) => v === 'All' ? 'Platforms' : v === 'Arc System Works' ? 'Arc Sys Works' : v}
          />"""

new_controls = """        {/* Controls Container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '800px',
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
                padding: '0.6rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: isFilterPanelOpen || developerFilter !== 'All' || showFavoritesOnly ? 'var(--accent-indigo)' : 'var(--border-subtle)',
                background: isFilterPanelOpen || developerFilter !== 'All' || showFavoritesOnly ? 'rgba(99, 102, 241, 0.1)' : 'var(--bg-glass)',
                color: isFilterPanelOpen || developerFilter !== 'All' || showFavoritesOnly ? 'var(--accent-indigo)' : 'var(--text-primary)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => { if (!isFilterPanelOpen && developerFilter === 'All' && !showFavoritesOnly) e.currentTarget.style.borderColor = 'var(--accent-indigo)'; }}
              onMouseOut={(e) => { if (!isFilterPanelOpen && developerFilter === 'All' && !showFavoritesOnly) e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              <span>Filters</span>
              {(developerFilter !== 'All' || showFavoritesOnly) && (
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor', marginLeft: '0.25rem' }} />
              )}
            </button>"""

content = content.replace(old_controls, new_controls)

# 4. Inject Filter Panel after Sort Pill
old_sort_end = """            labelExtractor={(v: string) => v === 'date' ? 'Sort: Date' : 'Sort: A-Z'}
          />
        </div>
      </header>"""

new_sort_end = """            labelExtractor={(v: string) => v === 'date' ? 'Sort: Date' : 'Sort: A-Z'}
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

               {/* Developers */}
               <div>
                 <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Developers</div>
                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {allDevelopers.map(dev => (
                      <button
                        key={dev}
                        onClick={() => { setDeveloperFilter(dev); setShowCards(true); }}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid',
                          borderColor: developerFilter === dev ? 'var(--accent-indigo)' : 'var(--border-subtle)',
                          background: developerFilter === dev ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                          color: developerFilter === dev ? 'var(--accent-indigo)' : 'var(--text-primary)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseOver={(e) => { if (developerFilter !== dev) e.currentTarget.style.borderColor = 'var(--accent-indigo)'; }}
                        onMouseOut={(e) => { if (developerFilter !== dev) e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                      >
                        {dev === 'Arc System Works' ? 'Arc Sys Works' : dev}
                      </button>
                    ))}
                 </div>
               </div>
             </div>
          )}
        </div>
      </header>"""

content = content.replace(old_sort_end, new_sort_end)

with open('src/GameSelectView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Patching complete.")
