const tokenizeMKInputs = (inputs) => {
  const result = [];
  
  for (const raw of inputs) {
    if (['360', '720', '[Cancel]'].includes(raw)) {
      result.push(raw);
      continue;
    }

    // Replace typical separators and split
    const tokens = raw.replace(/,/g, ' ').replace(/\+/g, ' + ').split(' ').filter(Boolean);
    
    for (let i = 0; i < tokens.length; i++) {
      let t = tokens[i].toUpperCase();
      
      // If it's explicitly down, forward, back, up, convert them to our internal directional names
      const dirMap = {
        'D': 'down', 'F': 'forward', 'B': 'back', 'U': 'up',
        'DF': 'down-forward', 'DB': 'down-back', 'UF': 'up-forward', 'UB': 'up-back',
        'DOWN': 'down', 'FORWARD': 'forward', 'BACK': 'back', 'UP': 'up'
      };
      
      if (dirMap[t]) {
        result.push(dirMap[t]);
        continue;
      }
      
      if (t === '+') {
        result.push('+');
        continue;
      }
      
      // Digits like 1, 2, 3, 4 are buttons in MK
      // They might be written as 1+2, but we split by + above so they come as '1', '+', '2'
      if (['1', '2', '3', '4', 'BL', 'KAMEO', 'FS', 'TH'].includes(t)) {
        result.push(t);
        continue;
      }
      
      // What if they write df1 ? (no spaces)
      const match = t.match(/^(DF|DB|UF|UB|D|F|B|U)?(BL|KAMEO|FS|TH|1|2|3|4)?$/);
      if (match && (match[1] || match[2])) {
        if (match[1]) result.push(dirMap[match[1]]);
        if (match[2]) result.push(match[2]);
        continue;
      }
      
      // fallback
      result.push(t);
    }
  }
  return result;
}

console.log(tokenizeMKInputs(["d b 1"]));
console.log(tokenizeMKInputs(["d, b, 2"]));
console.log(tokenizeMKInputs(["df2"]));
console.log(tokenizeMKInputs(["b f 4"]));
console.log(tokenizeMKInputs(["1+3"]));
console.log(tokenizeMKInputs(["down forward down down"]));
