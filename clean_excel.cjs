const fs = require('fs');
const xlsx = require('xlsx');

const wb = xlsx.readFile('faqs/GameGlance.xlsx');
const sheetMap = {
  'u': 8, 'd': 2, 'l': 4, 'r': 6,
  'ul': 7, 'ur': 9, 'dl': 1, 'dr': 3,
  'uf': 9, 'df': 3, 'ub': 7, 'db': 1,
  'f': 6, 'b': 4,
  'forward': 6, 'back': 4, 'down': 2, 'up': 8
};

function toNumpad(inputStr) {
  if (!inputStr) return '';
  let parts = String(inputStr).split(/[ ,\+]+/); // split on space, comma, +
  let numpad = '';
  let buttons = [];
  
  for (let p of parts) {
      let lower = p.trim().toLowerCase();
      if (!lower) continue;
      if (sheetMap[lower]) {
          numpad += sheetMap[lower];
      } else {
          // not found in map, must be a button like P, K, MK, etc.
          buttons.push(p);
      }
  }
  
  if (numpad.length > 0) {
      if (buttons.length > 0) {
          return numpad + ' + ' + buttons.join(' + ');
      }
      return numpad;
  }
  return String(inputStr);
}

for (let sheetName of wb.SheetNames) {
    if (sheetName === 'Sheet1' || sheetName === 'TSV Import Script') continue;
    let data = xlsx.utils.sheet_to_json(wb.Sheets[sheetName]);
    
    // Group by Character
    let chars = {};
    for (let row of data) {
        if (!row.Character) continue;
        let cName = row.Character;
        if (!chars[cName]) chars[cName] = [];
        chars[cName].push({
            name: row['Move Name'] || 'Unknown Move',
            type: row.Type ? row.Type.toLowerCase() : 'special',
            input: toNumpad(row.Input)
        });
    }
    
    let charArr = [];
    for (let cName in chars) {
        let charObj = { name: cName, special_moves: [], super_arts: [], unique_mechanics: [] };
        
        for (let m of chars[cName]) {
            let moveObj = {
                name: m.name,
                input: m.input
            };
            if (m.type === 'super') charObj.super_arts.push(moveObj);
            else if (m.type === 'unique') charObj.unique_mechanics.push(moveObj);
            else charObj.special_moves.push(moveObj);
        }
        
        charArr.push(charObj);
    }
    
    let finalJson = {
        title: sheetName,
        characters: charArr
    };
    
    fs.writeFileSync('faqs/' + sheetName + '_numpad.json', JSON.stringify(finalJson, null, 2));
}
console.log('Conversion complete!');
