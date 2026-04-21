import re

filepath = 'src/MoveListView.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract renderMoveCard
# We find where it starts: const renderMoveCard = (move: Move, idx: number, depth: number = 0, isLastChild: boolean = false) => {
# And where it ends: }; followed by eturn ( inside the map.

start_idx = content.find('const renderMoveCard =')
end_idx = content.find('return (', start_idx)

# Extract the function string
render_fn = content[start_idx:end_idx].strip()
# Remove it from the map block
content = content[:start_idx] + content[end_idx:]

# 2. Inject it before the return of the section
section_return_idx = content.find('return (\n                <section key={tab}')
content = content[:section_return_idx] + render_fn + '\n\n              ' + content[section_return_idx:]

# 3. Change topLevelMoves.map to noStanceGroup.map
content = content.replace('{topLevelMoves.map((topMove, topIdx) => {', '{noStanceGroup.map((topMove, topIdx) => {')

# 4. Inject the stance groups at the end of the section
end_of_grid = '''                        );
                    })}
                  </div>
                  )}'''

stance_injection = '''                        );
                    })}
                  </div>
                  )}
                  
                  {Array.from(stanceGroups.entries()).map(([prefix, moves]) => (
                    <div key={prefix} style={{ marginTop: noStanceGroup.length > 0 ? '3rem' : '1rem' }}>
                      <h3 style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: 600, 
                        color: 'var(--text-secondary)', 
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{ 
                          background: 'var(--bg-badge)', 
                          padding: '4px 12px', 
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-primary)'
                        }}>
                          {prefix}
                        </span>
                        Stance
                      </h3>
                      <div className="move-grid-main" style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
                        gridAutoRows: 'auto',
                        gap: '1rem',
                        width: '100%',
                        maxWidth: '1400px',
                        margin: '0 auto',
                        position: 'relative',
                        zIndex: 1,
                      }}>
                        {moves.map((topMove, topIdx) => (
                          <div key={topMove.id} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            {renderMoveCard(topMove, topIdx, 0, false)}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}'''

content = content.replace(end_of_grid, stance_injection)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Stances refactored!")
