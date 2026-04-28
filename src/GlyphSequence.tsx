import React from 'react';
import { getGlyphLabel, getGlyphColor } from './glyphMap';
import type { ControllerType } from './glyphMap';
import { useTheme } from './useTheme';

interface GlyphSequenceProps {
  inputs: string[];
  controller: ControllerType;
  large?: boolean;
  notationSystem?: 'numpad' | 'traditional' | 'mk' | 'tekken';
  isCombo?: boolean;
}

const DIRECTION_ROTATIONS: Record<string, string> = {
  '→': '0', '↘': '45', '↓': '90', '↙': '135',
  '←': '180', '↖': '225', '↑': '270', '↗': '315',
};



const tokenizeMKInputs = (inputs: string[], isCombo: boolean = false): string[] => {
  const result: string[] = [];
  
  for (const raw of inputs) {
    if (['360', '720', '[Cancel]'].includes(raw)) {
      result.push(raw);
      continue;
    }

    let skipNextSpace = false;
    const tokens = raw.replace(/,/g, ' ').replace(/\+/g, ' + ').split(/(\+| |~|\[Cancel\]|-|\/|>)/g).filter(Boolean);
    
    for (let i = 0; i < tokens.length; i++) {
      let t = tokens[i];
      if (t === ' ') { 
        if (skipNextSpace) { skipNextSpace = false; continue; }
        if (isCombo) { result.push('[Cancel]'); }
        continue; 
      }
      
      if (t.toUpperCase() === 'ANY') { skipNextSpace = true; }
      if (t === '-') { continue; }
      if (t === '~' || t === '>' || t === ',') { result.push('[Cancel]'); continue; }
      if (t === '/') { result.push('or'); continue; }
      if (t === '+') { result.push('+'); continue; }
      if (t === '[Cancel]') { result.push(t); continue; }

      let prefix = '';
      if (t.startsWith('j.')) { prefix = 'j.'; t = t.substring(2); }
      else if (t.startsWith('en.j.')) { prefix = 'en.j.'; t = t.substring(5); }
      else if (t.startsWith('en.')) { prefix = 'en.'; t = t.substring(3); }
      else if (t.toLowerCase().startsWith('air')) { prefix = 'j.'; t = t.substring(3).trim(); }
      
      if (prefix) result.push(prefix);
      if (!t) continue;

      const normT = t.toUpperCase();
      
      const dirMap: Record<string, string> = {
        'D': 'down', 'F': 'forward', 'B': 'back', 'U': 'up',
        'DF': 'down-forward', 'DB': 'down-back', 'UF': 'up-forward', 'UB': 'up-back',
        'DOWN': 'down', 'FORWARD': 'forward', 'BACK': 'back', 'UP': 'up',
        'DOWN-FORWARD': 'down-forward', 'DOWN-BACK': 'down-back'
      };
      
      if (dirMap[normT]) {
        result.push(dirMap[normT]);
        continue;
      }
      
      if (['1', '2', '3', '4', 'BL', 'KAMEO', 'FS', 'TH', 'EN'].includes(normT)) {
        result.push(normT);
        continue;
      }
      
      const match = normT.match(/^(DF|DB|UF|UB|D|F|B|U)?(BL|KAMEO|FS|TH|EN|1|2|3|4)?$/);
      if (match && (match[1] || match[2])) {
        if (match[1]) result.push(dirMap[match[1]]);
        if (match[2]) result.push(match[2]);
        continue;
      }
      
      result.push(t);
    }
  }
  return result;
};

const tokenizeTekkenInputs = (inputs: string[], isCombo: boolean = false): string[] => {
  const result: string[] = [];
  
  for (const raw of inputs) {
    if (['360', '720', '[Cancel]'].includes(raw)) {
      result.push(raw);
      continue;
    }

    // Protect spaces inside parentheses before replacing spaces and splitting
    const safeRaw = raw.replace(/\([^)]+\)/g, match => match.replace(/ /g, '_'));
    let skipNextSpace = false;
    const tokens = safeRaw.replace(/,/g, ' ').replace(/\+/g, ' + ').split(/(\+| |~|\[Cancel\]|-|>)/g).filter(Boolean);
    
    for (let i = 0; i < tokens.length; i++) {
      let t = tokens[i];
      if (t === ' ') { 
        if (skipNextSpace) { skipNextSpace = false; continue; }
        if (isCombo) { result.push('[Cancel]'); }
        continue; 
      }
      
      if (t === '-') { continue; }
      if (t === '~' || t === '>' || t === ',') { result.push('[Cancel]'); continue; }
      if (t === '+') { result.push('+'); continue; }
      if (t === '[Cancel]') { result.push(t); continue; }

      // Handle generic prefixes ending in a dot (like FC., BT., H.LIB., or (back_to_wall).)
      const dotIdx = t.lastIndexOf('.');
      if (dotIdx !== -1) {
        let prefix = t.substring(0, dotIdx).replace(/_/g, ' '); // Restore spaces in parentheses
        
        // Let's standardise the old hardcoded ones, or just push them as-is
        if (prefix.toLowerCase() === 'fc') prefix = 'FC';
        else if (prefix.toLowerCase() === 'ws') prefix = 'WS';
        else if (prefix.toLowerCase() === 'bt') prefix = 'BT';
        else if (prefix.toLowerCase() === 'j') prefix = 'j.';
        
        result.push(prefix);
        t = t.substring(dotIdx + 1);
      }

      if (!t) continue;

      const normT = t.toLowerCase();
      
      const dirMap: Record<string, string> = {
        'd': 'down', 'f': 'forward', 'b': 'back', 'u': 'up',
        'd/f': 'down-forward', 'df': 'down-forward',
        'd/b': 'down-back', 'db': 'down-back',
        'u/f': 'up-forward', 'uf': 'up-forward',
        'u/b': 'up-back', 'ub': 'up-back',
        'qcf': '236', 'qcb': '214', 'hcf': '41236', 'hcb': '63214'
      };
      
      if (dirMap[normT]) {
        const mapped = dirMap[normT];
        if (mapped.match(/^[1-9]+$/)) {
          for (const d of mapped) result.push(d);
        } else {
          result.push(mapped);
        }
        continue;
      }
      
      if (['1', '2', '3', '4', '1+2', '3+4', 'all', 'p', 'k'].includes(normT)) {
        result.push(normT.toUpperCase());
        continue;
      }
      
      const match = normT.match(/^(d\/f|d\/b|u\/f|u\/b|df|db|uf|ub|d|f|b|u|qcf|qcb)?(1|2|3|4|1\+2|3\+4|p|k)?$/);
      if (match && (match[1] || match[2])) {
        if (match[1]) {
           const m1 = dirMap[match[1]];
           if (m1.match(/^[1-9]+$/)) {
             for (const d of m1) result.push(d);
           } else {
             result.push(m1);
           }
        }
        if (match[2]) result.push(match[2].toUpperCase());
        continue;
      }
      
      result.push(t.replace(/_/g, ' '));
    }
  }
  return result;
};

const tokenizeStandardInputs = (inputs: string[], notationSystem: string = 'traditional', isCombo: boolean = false): string[] => {
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
      
      if (t.toUpperCase() === 'ANY') {
        skipNextSpace = true;
      }

      if (t === '-') { continue; }
      if (t === ',') { result.push('[Cancel]'); continue; }
      if (t === '~') { result.push('[Cancel]'); continue; }
      if (t === '>') { result.push('[Cancel]'); continue; }
      if (t === '/') { result.push('or'); continue; }
      if (t === '+') { result.push('+'); continue; }
      if (t === '[Cancel]') { result.push(t); continue; }
      if (t === '5') { continue; }

      if (isDirectionWord(t)) {
        if (t === 'neutral') continue;
        if (notationSystem === 'numpad') result.push(REVERSE_NUMPAD_MAP[t] || t);
        else result.push(t);
        continue;
      }

      const dirMap: Record<string, string> = {
        'QCF': '236', 'QCB': '214', 'HCF': '41236', 'HCB': '63214', 'DP': '623', 'RDP': '421'
      };
      const upperT = t.toUpperCase();
      if (dirMap[upperT]) {
        const mapped = dirMap[upperT];
        if (notationSystem === 'numpad') {
          for (const d of mapped) result.push(d);
        } else {
          result.push(upperT);
        }
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

      const cleanT = processingT.replace(/\[|\]/g, ''); 
      const match = processingT.match(/^([a-zA-Z.+]*?)([[\]1-9]+)([[\]a-zA-Z]*)$/);
      if (match) {
        if (prefix) result.push(prefix);
        if (match[1]) result.push(match[1]);

        let pushedDirection = false;
        let inBracket = false;
        for (const char of match[2]) {
          if (char === '[') { inBracket = true; continue; }
          if (char === ']') { inBracket = false; continue; }
          
          if (char === '5') continue;
          pushedDirection = true;
          
          let dir = char;
          if (notationSystem !== 'numpad') {
            const NUMPAD_MAP: Record<string, string> = {
              '1': 'down-back', '2': 'down', '3': 'down-forward',
              '4': 'back', '5': 'neutral', '6': 'forward', '7': 'up-back',
              '8': 'up', '9': 'up-forward'
            };
            if (NUMPAD_MAP[char]) dir = NUMPAD_MAP[char];
          }
          
          if (inBracket) result.push(`[${dir}]`);
          else result.push(dir);
        }

        if (match[3]) {
          if (pushedDirection) {
            result.push('+');
          }
          const isBtnBracketed = match[3].includes(']') || inBracket;
          const cleanBtnStr = match[3].replace(/\]/g, '');
          const buttonMatches = cleanBtnStr.match(/(SD|DR|SP|IAD|V|LP|MP|HP|LK|MK|HK|P|K|S|H|D|L|M|A1|A2|A|B|C)/gi);
          if (buttonMatches && buttonMatches.join('') === cleanBtnStr) {
            const btns = buttonMatches.map(b => b.toUpperCase());
            for (let j = 0; j < btns.length; j++) {
              if (j > 0) result.push('+');
              result.push(isBtnBracketed ? `[${btns[j]}]` : btns[j]);
            }
          } else {
            result.push(match[3]);
          }
        }
      } else {
        if (prefix) result.push(prefix);
        const buttonMatches = cleanT.match(/(SD|DR|SP|IAD|V|LP|MP|HP|LK|MK|HK|P|K|S|H|D|L|M|A1|A2|A|B|C)/gi);
        if (buttonMatches && buttonMatches.join('') === cleanT) {
          const isBracketed = processingT.startsWith('[') && processingT.endsWith(']');
          const btns = buttonMatches.map(b => b.toUpperCase());
          for (let j = 0; j < btns.length; j++) {
            if (j > 0) result.push('+');
            result.push(isBracketed ? `[${btns[j]}]` : btns[j]);
          }
        } else {
          result.push(processingT);
        }
      }
    }
  }
  return result;
};

const tokenizeInputs = (inputs: string[], notationSystem: string = 'traditional', isCombo: boolean = false): string[] => {
  const processedInputs = inputs.map(raw => {
    return raw
      .replace(/\(InAir\)/gi, 'j.')
      .replace(/\(AirOK\)/gi, ' (Air OK)')
      .replace(/SorH/gi, 'S/H')
      .replace(/PorK/gi, 'P/K')
      .replace(/Tap\s*([a-zA-Z])\s*rapidly/gi, 'Tap $1')
      .replace(/([a-zA-Z])\s*\(\s*Tap repeatedly\s*\)/gi, 'Tap $1')
      .replace(/(?<![A-Za-z])PPP(?![A-Za-z])/gi, 'P+P+P')
      .replace(/(?<![A-Za-z])KKK(?![A-Za-z])/gi, 'K+K+K')
      .replace(/(?<![A-Za-z])PP(?![A-Za-z])/gi, 'P+P')
      .replace(/(?<![A-Za-z])KK(?![A-Za-z])/gi, 'K+K')
      // DNF Duel / Scrape Data cleanup
      .replace(/QCFx2([A-Z])/gi, 'QCFx2+$1')
      .replace(/QCF([A-Z])/gi, 'QCF+$1')
      .replace(/QCB([A-Z])/gi, 'QCB+$1')
      .replace(/HCF([A-Z])/gi, 'HCF+$1')
      .replace(/HCB([A-Z])/gi, 'HCB+$1')
      .replace(/DP([A-Z])/gi, 'DP+$1')
      .replace(/punchcombo-edinto/gi, 'Punch Combo into ')
      .replace(/combo-edinto/gi, 'into ')
      .replace(/PUNCHCOMBO/gi, 'Punch Combo ')
      .replace(/EDINTO/gi, ' into ')
      .replace(/withhcf/gi, 'with HCF')
      .replace(/(A|B|C|D)or(A|B|C|D)/gi, '$1 or $2')
      .replace(/kickorheavykick/gi, 'K or HK')
      .replace(/ORC\.?/gi, ' or C')
      .replace(/KICK:FWB/gi, 'Kick: Fwd B')
      .replace(/([A-Z0-9\/])\(/gi, '$1 (')
      .replace(/punch/gi, 'P')
      .replace(/\(\s*OK\s*\)/gi, '')
      .replace(/\(\s*MAX\s*OK\s*\)/gi, '')
      .replace(/\.$/, '');
  });

  if (notationSystem === 'mk') {
    return tokenizeMKInputs(processedInputs, isCombo);
  }
  if (notationSystem === 'tekken') {
    return tokenizeTekkenInputs(processedInputs, isCombo);
  }
  return tokenizeStandardInputs(processedInputs, notationSystem, isCombo);
};

const renderDirectionalSVG = (label: string, large: boolean, isDark: boolean, isCharge: boolean = false) => {
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

  const bgFill = isCharge ? '#eab308' : (isDark ? '#161625' : '#1a1a2e');
  const bgStroke = isCharge ? '#ca8a04' : (isDark ? '#2a2a40' : '#2a2a40');
  const arrowColor = isCharge ? '#111' : '#e0e0f0';

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${deg}deg)` }}>
      {isCharge && <circle cx="12" cy="12" r="12" fill="#ca8a04" opacity="0.3" />}
      <circle cx="12" cy="12" r="10.5" fill={bgFill} stroke={bgStroke} strokeWidth="1.5" />
      <path
        d="M12 7 L17 12 L12 17"
        fill="none"
        stroke={arrowColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="7" y1="12" x2="16" y2="12"
        stroke={arrowColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

const getMacroSubButtons = (macro: string): string[] => {
  const norm = macro.toUpperCase().trim();
  if (['P', 'PUNCH'].includes(norm)) return ['P']; // Render as single P
  if (['PP'].includes(norm)) return ['PP'];
  if (['PPP'].includes(norm)) return ['PPP'];

  if (['K', 'KICK'].includes(norm)) return ['K']; // Render as single K
  if (['KK'].includes(norm)) return ['KK'];
  if (['KKK'].includes(norm)) return ['KKK'];

  return [macro];
};

export const GlyphSequence: React.FC<GlyphSequenceProps> = ({ inputs, controller, large = false, notationSystem = 'numpad', isCombo = false }) => {
  const { isDark } = useTheme();

  const expandedInputs = React.useMemo(() => {
    // Tekken uses 1234 for buttons, so we bypass numpad parsing for it.
    const effectiveSystem = controller === 'tekken' ? 'traditional' : notationSystem;
    // We NO LONGER expand macros here. We keep 'PP' as a single token so we can stack it.
    const res = tokenizeInputs(inputs, effectiveSystem, isCombo);
    console.log("GLYPH_DEBUG", { inputs, effectiveSystem, res });
    return res;
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

    if (input.toLowerCase() === 'or') {
      return (
        <span
          key={idx}
          style={{
            color: 'var(--text-secondary)',
            fontSize: large ? '0.85rem' : '0.7rem',
            fontWeight: 800,
            margin: `0 ${large ? '4px' : '2px'}`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontStyle: 'italic',
            ...styleOverrides
          }}
        >
          OR
        </span>
      );
    }

    if (input === '+') {
      return (
        <div
          key={idx}
          style={{
            color: 'var(--text-muted)',
            fontWeight: 800,
            fontSize: large ? '1.8rem' : '1.2rem',
            margin: `0 ${large ? '4px' : '2px'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: large ? '48px' : '30px',
            ...styleOverrides
          }}
        >
          +
        </div>
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

    const lowerInput = input.toLowerCase();
    if (lowerInput in prefixMap) {
      return (
        <div
          key={idx}
          style={{
            color: 'var(--text-secondary)',
            fontWeight: 900,
            fontSize: large ? '0.85rem' : '0.65rem',
            letterSpacing: '0.05em',
            margin: `0 ${large ? '6px' : '4px'}`,
            padding: large ? '0.2rem 0.5rem' : '0.15rem 0.4rem',
            border: '1px solid var(--border-subtle)',
            borderRadius: '6px',
            background: 'var(--bg-badge)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            ...styleOverrides
          }}
        >
          {prefixMap[lowerInput]}
        </div>
      );
    }

    let isCharge = false;
    let rawInput = input;
    if ((rawInput.startsWith('[') && rawInput.endsWith(']')) || (rawInput.startsWith('(') && rawInput.endsWith(')'))) {
      isCharge = true;
      rawInput = rawInput.substring(1, rawInput.length - 1);
    }

    // Numpad directions (1-9) rendered as plain text (Intercept BEFORE getGlyphLabel so '2' doesn't become 'MP')
    if (notationSystem === 'numpad' && /^[1-9]$/.test(rawInput) && !['tekken', 'mk'].includes(controller)) {
      return (
        <span
          key={idx}
          style={{
            color: isCharge ? '#eab308' : 'var(--text-primary)',
            fontWeight: 800,
            fontSize: large ? '1.5rem' : '1.1rem',
            fontFamily: "'Outfit', sans-serif",
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: large ? '44px' : '32px',
            height: large ? '44px' : '32px',
            ...styleOverrides
          }}
        >
          {isCharge ? `[${rawInput}]` : rawInput}
        </span>
      );
    }

    const label = getGlyphLabel(rawInput, controller);
    const iconColor = getGlyphColor(rawInput, controller);

    // Direction
    const svgImage = renderDirectionalSVG(label, large, isDark, isCharge);
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
    if (label.length > 2 && !['ALL', 'TAG', '360', '720'].includes(label)) {
      if (label.length > 8) {
        return (
          <span
            key={idx}
            style={{
              color: 'var(--text-secondary)',
              fontSize: large ? '0.75rem' : '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              margin: '0 4px',
              fontFamily: "'Inter', sans-serif",
              ...styleOverrides
            }}
          >
            {rawInput}
          </span>
        );
      }
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

      if (['HP', 'HK'].includes(label)) bgColor = '#3b82f6'; // Blue

      const isLongText = label.length >= 3;
      const isGrapplerMotion = label === '360' || label === '720';
      const computedWidth = isGrapplerMotion ? btnSize + 28 : (isLongText ? btnSize + 16 : btnSize);
      const computedRadius = isLongText ? '16px' : '50%';
      const computedFontSize = large 
        ? (isGrapplerMotion ? '1.15rem' : (isLongText ? '1rem' : '1.2rem')) 
        : (isGrapplerMotion ? '0.85rem' : (isLongText ? '0.65rem' : '0.85rem'));

      buttonJSX = (
        <div
          style={{
            width: `${computedWidth}px`,
            height: `${btnSize}px`,
            borderRadius: computedRadius,
            background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${bgColor} 20%, ${bgColor} 80%, #000000 100%)`,
            border: `1.5px solid ${isDark ? '#111' : '#ddd'}`,
            boxShadow: isGrapplerMotion ? '0 0 15px rgba(245, 158, 11, 0.4), inset 0 -4px 6px rgba(0,0,0,0.5)' : '0 3px 5px rgba(0,0,0,0.6), inset 0 -4px 6px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: computedFontSize,
            fontWeight: 900,
            textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 -1px 0 rgba(0,0,0,0.4)',
            letterSpacing: isGrapplerMotion ? '1px' : (isLongText ? '0' : '-0.05em'),
            flexShrink: 0,
          }}
        >
          {label}
        </div>
      );
    } else {
      const isLightBg = iconColor === '#e2e8f0';
      const isLongText = label.length >= 3;
      const isGrapplerMotion = label === '360' || label === '720';
      const computedWidth = isGrapplerMotion ? btnSize + 28 : (isLongText ? btnSize + 16 : btnSize);
      const computedRadius = isLongText ? '16px' : '50%';
      const computedFontSize = large 
        ? (isGrapplerMotion ? '1.1rem' : (isLongText ? '0.9rem' : '1.3rem')) 
        : (isGrapplerMotion ? '0.8rem' : (isLongText ? '0.6rem' : '0.75rem'));

      buttonJSX = (
        <div
          style={{
            width: `${computedWidth}px`,
            height: `${btnSize}px`,
            backgroundColor: isPlayStation ? (isDark ? '#161625' : '#1a1a2e') : iconColor,
            borderRadius: computedRadius,
            color: isPlayStation ? iconColor : (isLightBg ? '#1e293b' : '#fff'),
            fontWeight: 900,
            fontSize: computedFontSize,
            boxShadow: `
              ${isGrapplerMotion ? '0 0 15px rgba(245, 158, 11, 0.5)' : `0 3px 6px rgba(0,0,0,${isDark ? '0.4' : '0.15'})`},
              inset 0 -3px 0 rgba(0,0,0,0.2),
              inset 0 2px 0 rgba(255,255,255,${isDark ? '0.06' : (isPlayStation ? '0.08' : '0.3')}),
              0 0 0 1.5px ${isPlayStation ? iconColor + '25' : 'rgba(0,0,0,0.2)'}
            `,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textShadow: isPlayStation
              ? `0 0 10px ${iconColor}50, 0 1px 3px rgba(0,0,0,0.8)`
              : (isLightBg ? 'none' : '0 1px 3px rgba(0,0,0,0.6)'),
            letterSpacing: isGrapplerMotion ? '1px' : '0',
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

    const wrappedButtonJSX = isCharge ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <span style={{ fontSize: large ? '1.5rem' : '1.1rem', fontWeight: 900, color: '#eab308', fontFamily: "'Outfit', sans-serif" }}>[</span>
        {buttonJSX}
        <span style={{ fontSize: large ? '1.5rem' : '1.1rem', fontWeight: 900, color: '#eab308', fontFamily: "'Outfit', sans-serif" }}>]</span>
      </div>
    ) : buttonJSX;

    if (rawInput === 'P' || rawInput === 'K') {
      return (
        <div key={idx} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', ...styleOverrides }}>
          {wrappedButtonJSX}
        </div>
      );
    }

    return (
      <div key={idx} style={{ ...styleOverrides }}>
        {wrappedButtonJSX}
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
              <svg 
                width={large ? "18" : "14"} 
                height={large ? "18" : "14"} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--text-muted)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ flexShrink: 0, marginRight: '4px' }}
              >
                <path d="M5 4v10a2 2 0 0 0 2 2h13" />
                <path d="m16 12 4 4-4 4" />
              </svg>
            )}
            
            {lineInputs.map((input, idx) => {
              const norm = input.toUpperCase().trim();
              const subButtons = getMacroSubButtons(norm);

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
