const fs = require('fs');
const path = require('path');

const filePath = 'src/GlyphSequence.tsx';
const content = fs.readFileSync(filePath, 'utf-8');

const startIdx = content.indexOf('const tokenizeInputs = ');
const endIdx = content.indexOf('const renderDirectionalSVG =');

if (startIdx === -1 || endIdx === -1) {
    console.error("Could not find bounds");
    process.exit(1);
}

const before = content.substring(0, startIdx);
const after = content.substring(endIdx);

const newLogic = \
const tokenizeMKInputs = (inputs: string[], isCombo: boolean = false): string[] => {
  const result: string[] = [];
  
  for (const raw of inputs) {
    if (['360', '720', '[Cancel]'].includes(raw)) {
      result.push(raw);
      continue;
    }

    let skipNextSpace = false;
    const tokens = raw.replace(/,/g, ' ').replace(/\\+/g, ' + ').split(/(\\+| |~|\\[Cancel\\]|-|\\/|>)/g).filter(Boolean);
    
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

    let skipNextSpace = false;
    const tokens = raw.replace(/,/g, ' ').replace(/\\+/g, ' + ').split(/(\\+| |~|\\[Cancel\\]|-|>)/g).filter(Boolean);
    
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

      let prefix = '';
      if (t.startsWith('j.')) { prefix = 'j.'; t = t.substring(2); }
      else if (t.startsWith('fc')) { prefix = 'cr.'; t = t.substring(2); }
      else if (t.startsWith('ws')) { prefix = 'st.'; t = t.substring(2); }

      if (prefix) result.push(prefix);
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
      
      const match = normT.match(/^(d\\/f|d\\/b|u\\/f|u\\/b|df|db|uf|ub|d|f|b|u|qcf|qcb)?(1|2|3|4|1\\+2|3\\+4|p|k)?$/);
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
      
      result.push(t);
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
    '?': '1', '?': '2', '?': '3',
    '?': '4', '?': '6',
    '?': '7', '?': '8', '?': '9'
  };

  const isDirectionWord = (w: string) => ['neutral', 'down', 'forward', 'back', 'up', 'down-forward', 'down-back', 'up-forward', 'up-back', '?', '?', '?', '?', '?', '?', '?', '?'].includes(w);

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
    const tokens = raw.split(/(\\+| |,|~|\\[Cancel\\]|-|\\/|>)/g).filter(Boolean);
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

      const cleanT = processingT.replace(/\\[|\\]/g, ''); // Remove charge brackets for parsing

      const match = cleanT.match(/^([a-zA-Z.+]*?)([1-9]+)([a-zA-Z]*)$/);
      if (match) {
        if (prefix) result.push(prefix);
        if (match[1]) result.push(match[1]);

        for (const digit of match[2]) {
          if (digit === '5') continue; // Filter out 5 from numpad sequences like 656 or 5P
          if (notationSystem === 'numpad') {
            result.push(digit);
          } else {
            const NUMPAD_MAP: Record<string, string> = {
              '1': 'down-back', '2': 'down', '3': 'down-forward',
              '4': 'back', '5': 'neutral', '6': 'forward', '7': 'up-back',
              '8': 'up', '9': 'up-forward'
            };
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

const tokenizeInputs = (inputs: string[], notationSystem: string = 'traditional', isCombo: boolean = false, controller?: string): string[] => {
  if (notationSystem === 'mk') {
    return tokenizeMKInputs(inputs, isCombo);
  }
  if (notationSystem === 'tekken') {
    return tokenizeTekkenInputs(inputs, isCombo);
  }
  return tokenizeStandardInputs(inputs, notationSystem, isCombo);
};
\

fs.writeFileSync(filePath, before + newLogic + '\\n' + after, 'utf-8');
console.log('Successfully patched GlyphSequence.tsx');
