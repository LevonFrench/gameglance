const fs = require('fs');
const filepath = 'src/MoveListView.tsx';
let content = fs.readFileSync(filepath, 'utf8');

// Find renderMoveCard definition
const fnStartStr = '                      const renderMoveCard = (move: Move, idx: number, depth: number = 0, isLastChild: boolean = false) => {';
const fnEndStr = '                      };';

const fnStartIndex = content.indexOf(fnStartStr);
if (fnStartIndex === -1) {
  console.log('Could not find renderMoveCard start');
  process.exit(1);
}

// Find the end of renderMoveCard
let currentIndex = fnStartIndex;
let braceCount = 0;
let foundEnd = false;
let fnEndIndex = -1;

for (let i = fnStartIndex; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      fnEndIndex = i + 1; // include the '}'
      foundEnd = true;
      break;
    }
  }
}

// Ensure we capture the trailing semi-colon if it exists
if (content[fnEndIndex] === ';') {
  fnEndIndex++;
}

const renderFn = content.substring(fnStartIndex, fnEndIndex).trim();

// Remove it from the original location
content = content.substring(0, fnStartIndex) + content.substring(fnEndIndex);

// Find the section return
const sectionReturnStr = '              return (\n                <section';
const sectionReturnIndex = content.indexOf(sectionReturnStr);

// Inject renderFn right above the section return
content = content.substring(0, sectionReturnIndex) + renderFn + '\n\n' + content.substring(sectionReturnIndex);

// Now replace topLevelMoves.map with noStanceGroup.map
content = content.replace('{topLevelMoves.map((topMove, topIdx) => {', '{noStanceGroup.map((topMove, topIdx) => {');

// Now inject the stanceGroups loop at the end of the grid
const gridEndStr =                         return (
                          <div key={topMove.id} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            {renderMoveCard(topMove, topIdx, 0, false)}
                          </div>
                        );
                    })}
                  </div>
                  )};

const stanceInjection = \                        return (
                          <div key={topMove.id} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            {renderMoveCard(topMove, topIdx, 0, false)}
                          </div>
                        );
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
                          \
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
                  ))}\;

content = content.replace(gridEndStr, stanceInjection);

fs.writeFileSync(filepath, content, 'utf8');
console.log('Success!');
