import React from 'react';
import { getGlyphLabel, getGlyphColor } from './glyphMap';
import type { ControllerType } from './glyphMap';
import { useTheme } from './useTheme';

interface GlyphSequenceProps {
  inputs: string[];
  controller: ControllerType;
  large?: boolean;
  notationSystem?: 'numpad' | 'traditional' | 'mk';
  isCombo?: boolean;
}

const DIRECTION_ROTATIONS: Record<string, string> = {
  '→': '0', '↘': '45', '↓': '90', '↙': '135',
  '←': '180', '↖': '225', '↑': '270', '↗': '315',
};

const NUMPAD_MAP: Record<string, string> = {
  '1': 'down-back', '2': 'down', '3': 'down-forward',
  '4': 'back', '5': 'neutral', '6': 'forward', '7': 'up-back',
  '8': 'up', '9': 'up-forward'
};

const tokenizeInputs = (inputs: string[], notationSystem: string = 'traditional', isCombo: boolean = false): string[] => {
  const result: string[] = [];

  const REVERSE_NUMPAD_MAP: Record<string, string> = {
    'down-back': '1', 'down': '2', 'down-forward': '3',
    'back': '4', 'neutral': '5', 'forward': '6',
    'up-back': '7', 'up': '8', 'up-forward': '9',
    '↙': '1', '↓': '2', '↘': '3',
    '←': '4', '→': '6',
    '↖': '7', '↑': '8', '↗': '9'
  };

  const isDirectionWord = (w: string) => ['neutral', 'down', 'forward', 'back', 'up', 'down-forward', 'down-back', 'up-forward', 'up-back', '↙', '↓', '↘', '←', '→', '↖', '↑', '↗'].includes(w);

  for (const raw of inputs) {
    if (['360', '720', '[Cancel]'].includes(raw)) {
      result.push(raw);
      continue;
    }

    if (isDirectionWord(raw)) {
      if (raw === 'neutral') continue;
      if (notationSystem === 'numpad') {
        result.push(REVERSE_NUMPAD_MAP[raw] || raw);
      } else {
        result.push(raw);
      }
      continue;
    }

    let skipNextSpace = false;
    const tokens = raw.split(/(\+| |,|~|\[Cancel\]|-|\/|>)/g).filter(Boolean);
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if (t === ' ') { 
        if (skipNextSpace) {
          skipNextSpace = false;
          continue;
        }
        if (isCombo) {
          result.push('[Cancel]');
        }
        continue; 
      }
      
      // If the current token is ANY, skip the next space so ANY P stays together on the same line
      if (t.toUpperCase() === 'ANY') {
        skipNextSpace = true;
      }

      if (t === '-') { continue; } // Ignore hyphens
      if (t === ',') { result.push('[Cancel]'); continue; }
      if (t === '~') { result.push('[Cancel]'); continue; }
      if (t === '>') { result.push('[Cancel]'); continue; }
      if (t === '/') { result.push('or'); continue; }
      if (t === '+') { result.push('+'); continue; }
      if (t === '[Cancel]') { result.push(t); continue; }
      if (t === '5') { continue; } // Skip standalone 5

      if (isDirectionWord(t)) {
        if (t === 'neutral') continue;
        if (notationSystem === 'numpad') result.push(REVERSE_NUMPAD_MAP[t] || t);
        else result.push(t);
        continue;
      }

      const specMatch = t.match(/^(.*?)(360|720)([a-zA-Z]*)$/);
      if (specMatch) {
        if (specMatch[1]) result.push(specMatch[1]);
        result.push(specMatch[2]);
        if (specMatch[3]) result.push(specMatch[3]);
        continue;
      }

      let processingT = t;
      let prefix = '';
      if (processingT === 'jc' || processingT === 'IAD') {
        result.push(processingT);
        continue;
      }
      if (processingT.startsWith('en.j.')) { prefix = 'en.j.'; processingT = processingT.substring(5); }
      else if (processingT.startsWith('btj.')) { prefix = 'btj.'; processingT = processingT.substring(4); }
      else if (processingT.startsWith('dj.')) { prefix = 'dj.'; processingT = processingT.substring(3); }
      else if (processingT.startsWith('cr.')) { prefix = 'cr.'; processingT = processingT.substring(3); }
      else if (processingT.startsWith('st.')) { prefix = 'st.'; processingT = processingT.substring(3); }
      else if (processingT.startsWith('en.')) { prefix = 'en.'; processingT = processingT.substring(3); }
      else if (processingT.startsWith('wf.')) { prefix = 'wf.'; processingT = processingT.substring(3); }
      else if (processingT.startsWith('rc.')) { prefix = 'rc.'; processingT = processingT.substring(3); }
      else if (processingT.startsWith('rf.')) { prefix = 'rf.'; processingT = processingT.substring(3); }
      else if (processingT.startsWith('bt.')) { prefix = 'bt.'; processingT = processingT.substring(3); }
      else if (processingT.startsWith('j.')) { prefix = 'j.'; processingT = processingT.substring(2); }
      else if (processingT.startsWith('c.')) { prefix = 'c.'; processingT = processingT.substring(2); }
      else if (processingT.startsWith('f.')) { prefix = 'f.'; processingT = processingT.substring(2); }
      else if (processingT.startsWith('r.')) { prefix = 'r.'; processingT = processingT.substring(2); }
      else if (processingT.startsWith('w.')) { prefix = 'w.'; processingT = processingT.substring(2); }

      const cleanT = processingT.replace(/\[|\]/g, ''); // Remove charge brackets for parsing

      const match = cleanT.match(/^([a-zA-Z.+]*?)([1-9]+)([a-zA-Z]*)$/);
      if (match) {
        if (prefix) result.push(prefix);
        if (match[1]) result.push(match[1]);

        for (const digit of match[2]) {
          if (digit === '5') continue; // Filter out 5 from numpad sequences like 656 or 5P
          if (notationSystem === 'numpad') {
            result.push(digit);
          } else {
            if (NUMPAD_MAP[digit]) result.push(NUMPAD_MAP[digit]);
            else result.push(digit);
          }
        }

        if (match[3]) {
          const buttonMatches = match[3].match(/(SD|DR|SP|IAD|V|LP|MP|HP|LK|MK|HK|PP|KK|PPP|KKK|P|K|S|H|D|L|M|A1|A2|A|B|C)/gi);
          if (buttonMatches && buttonMatches.join('') === match[3]) {
            result.push(...buttonMatches.map(b => b.toUpperCase()));
          } else {
            result.push(match[3]);
          }
        }
      } else {
        // No numbers, just text like LPLK
        if (prefix) result.push(prefix);
        const buttonMatches = cleanT.match(/(SD|DR|SP|IAD|V|LP|MP|HP|LK|MK|HK|PP|KK|PPP|KKK|P|K|S|H|D|L|M|A1|A2|A|B|C)/gi);
        if (buttonMatches && buttonMatches.join('') === cleanT) {
          result.push(...buttonMatches.map(b => b.toUpperCase()));
        } else {
          result.push(processingT);
        }
      }
    }
  }
  return result;
};

const renderDirectionalSVG = (label: string, large: boolean, isDark: boolean) => {
  if (label === 'neutral') {
    const size = large ? 44 : 32;
    return (
      <svg width={size} height={size} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10.5" fill={isDark ? '#161625' : '#1a1a2e'} stroke={isDark ? '#2a2a40' : '#2a2a40'} strokeWidth="1.5" />
        <path d="M12 6.5 l1.5 4 h4.5 l-3.5 2.5 l1.5 4.5 l-4 -3 l-4 3 l1.5 -4.5 l-3.5 -2.5 h4.5 z" fill={isDark ? '#e0e0f0' : '#e0e0f0'} />
      </svg>
    );
  }

  const deg = DIRECTION_ROTATIONS[label];
  if (deg === undefined) return null;

  const size = large ? 44 : 32;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${deg}deg)` }}>
      <circle cx="12" cy="12" r="10.5" fill={isDark ? '#161625' : '#1a1a2e'} stroke={isDark ? '#2a2a40' : '#2a2a40'} strokeWidth="1.5" />
      <path
        d="M12 7 L17 12 L12 17"
        fill="none"
        stroke={'#e0e0f0'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="7" y1="12" x2="16" y2="12"
        stroke={'#e0e0f0'}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

const getMacroSubButtons = (macro: string, isSNK: boolean): string[] => {
  const norm = macro.toUpperCase().trim();
  if (['P', 'PUNCH'].includes(norm)) return ['P']; // Render as single P
  if (['PP'].includes(norm)) return isSNK ? ['LP', 'HP'] : ['LP', 'MP'];
  if (['PPP'].includes(norm)) return isSNK ? ['LP', 'HP'] : ['LP', 'MP', 'HP'];

  if (['K', 'KICK'].includes(norm)) return ['K']; // Render as single K
  if (['KK'].includes(norm)) return isSNK ? ['LK', 'HK'] : ['LK', 'MK'];
  if (['KKK'].includes(norm)) return isSNK ? ['LK', 'HK'] : ['LK', 'MK', 'HK'];

  return [];
};

export const GlyphSequence: React.FC<GlyphSequenceProps> = ({ inputs, controller, large = false, notationSystem = 'numpad', isCombo = false }) => {
  const { isDark } = useTheme();

  const expandedInputs = React.useMemo(() => {
    // Tekken uses 1234 for buttons, so we bypass numpad parsing for it.
    const effectiveSystem = controller === 'tekken' ? 'traditional' : notationSystem;
    // We NO LONGER expand macros here. We keep 'PP' as a single token so we can stack it.
    return tokenizeInputs(inputs, effectiveSystem, isCombo);
  }, [inputs, notationSystem, controller, isCombo]);

  const renderSingleGlyph = (input: string, idx: React.Key, styleOverrides: React.CSSProperties = {}) => {
    // Cancel / link separator
    if (input === '[Cancel]') {
      return (
        <div
          key={idx}
          style={{
            flexBasis: '100%',
            height: '0',
            margin: large ? '6px 0' : '4px 0',
          }}
        />
      );
    }

    if (input === '+') {
      return (
        <span
          key={idx}
          style={{
            color: 'var(--text-muted)',
            fontWeight: 800,
            fontSize: large ? '1.5rem' : '1rem',
            margin: `0 ${large ? '4px' : '2px'}`,
            ...styleOverrides
          }}
        >
          +
        </span>
      );
    }

    const prefixMap: Record<string, string> = {
      'j.': 'IN AIR',
      'cr.': 'CROUCH',
      'st.': 'STAND',
      'dj.': 'D. JUMP',
      'en.': 'ENHANCED',
      'en.j.': 'EN. AIR',
      'c.': 'CLOSE',
      'f.': 'FAR',
      'wf.': 'W. FREE',
      'bt.': 'BACKTURN',
      'btj.': 'BT AIR',
      'rc.': 'ROPE (C)',
      'rf.': 'ROPE (F)',
      'r.': 'ROPE',
      'w.': 'WALL',
    };

    if (input in prefixMap) {
      return (
        <div
          key={idx}
          style={{
            color: 'var(--text-tertiary)',
            fontWeight: 800,
            fontSize: large ? '0.65rem' : '0.5rem',
            letterSpacing: '0.05em',
            margin: `0 ${large ? '4px' : '2px'}`,
            padding: '0.1rem 0.3rem',
            border: '1px solid var(--border-subtle)',
            borderRadius: '4px',
            background: 'var(--bg-badge)',
            ...styleOverrides
          }}
        >
          {prefixMap[input]}
        </div>
      );
    }

    // Numpad directions (1-9) rendered as plain text (Intercept BEFORE getGlyphLabel so '2' doesn't become 'MP')
    if (notationSystem === 'numpad' && /^[1-9]$/.test(input) && !['tekken', 'mk'].includes(controller)) {
      return (
        <span
          key={idx}
          style={{
            color: 'var(--text-primary)',
            fontWeight: 800,
            fontSize: large ? '1.5rem' : '1.1rem',
            fontFamily: "'Outfit', sans-serif",
            margin: `0 ${large ? '1px' : '0px'}`,
            ...styleOverrides
          }}
        >
          {input}
        </span>
      );
    }

    const label = getGlyphLabel(input, controller);
    const iconColor = getGlyphColor(input, controller);

    // Direction
    const svgImage = renderDirectionalSVG(label, large, isDark);
    if (svgImage) {
      return (
        <div
          key={idx}
          style={{
            display: 'flex',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            ...styleOverrides
          }}
        >
          {svgImage}
        </div>
      );
    }

    // Named multi-char label (like "Spear", "Teleport") — render as text pill
    if (label.length > 2 && !['ALL', 'TAG'].includes(label)) {
      return (
        <div
          key={idx}
          style={{
            padding: large ? '0.25rem 0.6rem' : '0.15rem 0.4rem',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--bg-badge)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
            fontSize: large ? '0.7rem' : '0.6rem',
            fontWeight: 600,
            letterSpacing: '0.03em',
            fontFamily: "'JetBrains Mono', monospace",
            ...styleOverrides
          }}
        >
          {label}
        </div>
      );
    }


    // Attack button glyphs
    const btnSize = large ? 48 : 30;
    const isPlayStation = controller === 'playstation';
    const isArcade = controller === 'arcade';

    let buttonJSX;

    if (isArcade) {
      // Custom beautiful Vewlix style Recessed Buttons for arcade
      let bgColor = '#ef4444'; // Red default
      if (['MP', 'MK', 'RP'].includes(label)) bgColor = '#eab308'; // Yellow
      if (['HP', 'HK'].includes(label)) bgColor = '#3b82f6'; // Blue

      buttonJSX = (
        <div
          style={{
            width: `${btnSize}px`,
            height: `${btnSize}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${bgColor} 20%, ${bgColor} 80%, #000000 100%)`,
            border: `1.5px solid ${isDark ? '#111' : '#ddd'}`,
            boxShadow: '0 3px 5px rgba(0,0,0,0.6), inset 0 -4px 6px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: large ? '1.2rem' : '0.85rem',
            fontWeight: 900,
            textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 -1px 0 rgba(0,0,0,0.4)',
            letterSpacing: '-0.05em',
            flexShrink: 0,
          }}
        >
          {label}
        </div>
      );
    } else {
      buttonJSX = (
        <div
          style={{
            width: `${btnSize}px`,
            height: `${btnSize}px`,
            backgroundColor: isPlayStation ? (isDark ? '#161625' : '#1a1a2e') : iconColor,
            borderRadius: '50%',
            color: isPlayStation ? iconColor : '#fff',
            fontWeight: 900,
            fontSize: large ? '1.3rem' : '0.75rem',
            boxShadow: `
              0 3px 6px rgba(0,0,0,${isDark ? '0.4' : '0.15'}),
              inset 0 -3px 0 rgba(0,0,0,0.2),
              inset 0 2px 0 rgba(255,255,255,${isDark ? '0.06' : (isPlayStation ? '0.08' : '0.3')}),
              0 0 0 1.5px ${isPlayStation ? iconColor + '25' : 'rgba(0,0,0,0.2)'}
            `,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textShadow: isPlayStation
              ? `0 0 10px ${iconColor}50, 0 1px 3px rgba(0,0,0,0.8)`
              : '0 1px 3px rgba(0,0,0,0.6)',
            flexShrink: 0,
          }}
        >
          <span style={{
            transform: isPlayStation
              ? (['▢', '△', '✕', '◯'].includes(label) ? 'scale(1.4)' : 'scale(1.1)')
              : (label.length > 1 ? 'scale(0.95)' : 'scale(1.2)'),
            display: 'inline-block',
            lineHeight: 1,
            marginTop: isPlayStation && ['▢', '△', '✕', '◯'].includes(label) ? '-2px' : '0',
          }}>
            {label}
          </span>
        </div>
      );
    }

    if (input === 'P' || input === 'K') {
      return (
        <div key={idx} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', ...styleOverrides }}>
          {buttonJSX}
        </div>
      );
    }

    return (
      <div key={idx} style={{ ...styleOverrides }}>
        {buttonJSX}
      </div>
    );
  };

  const lines: string[][] = [];
  let currentLine: string[] = [];
  
  expandedInputs.forEach(input => {
    if (input === '[Cancel]') {
      lines.push(currentLine);
      currentLine = [];
    } else if (input.toLowerCase() === 'or') {
      currentLine.push(input);
      lines.push(currentLine);
      currentLine = [];
    } else {
      currentLine.push(input);
    }
  });
  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: large ? '18px' : '14px',
    }}>
      {lines.map((lineInputs, lineIdx) => {
        // Cap indent to prevent massive diagonal staircases
        const effectiveIndent = Math.min(lineIdx, 6);
        
        return (
          <div key={lineIdx} style={{ 
            display: 'flex', 
            gap: large ? '8px' : '5px', 
            alignItems: 'center', 
            flexWrap: 'wrap',
            paddingLeft: lineIdx > 0 ? `${effectiveIndent * (large ? 24 : 16)}px` : 0
          }}>
            {lineIdx > 0 && (
              <span style={{ color: 'var(--border-medium)', fontSize: large ? '1rem' : '0.8rem', marginRight: '2px' }}>↳</span>
            )}
            
            {lineInputs.map((input, idx) => {
              const norm = input.toUpperCase().trim();
              const subButtons = getMacroSubButtons(norm, controller === 'neogeo');

              if (subButtons.length > 1) {
                const overlap = large ? '-18px' : '-12px';
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                    {subButtons.map((btn, subIdx) => {
                      return renderSingleGlyph(btn, `${idx}-${subIdx}`, {
                        marginLeft: subIdx > 0 ? overlap : '0',
                        zIndex: 10 - subIdx,
                        position: 'relative',
                        filter: subIdx > 0 ? 'brightness(0.7)' : 'none',
                      });
                    })}
                  </div>
                );
              }

              const finalInput = subButtons.length === 1 ? subButtons[0] : input;
              return renderSingleGlyph(finalInput, idx);
            })}
          </div>
        );
      })}
    </div>
  );
};
