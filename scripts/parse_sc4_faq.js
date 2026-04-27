import fs from 'fs';
import path from 'path';

const inputFile = process.argv[2];
if (!inputFile) {
  console.error("Please provide the path to the text file.");
  process.exit(1);
}

const content = fs.readFileSync(inputFile, 'utf-8');
const lines = content.split('\n');

let currentCharacter = null;
let currentCategory = null;
let currentStarter = null;
const charactersData = {};

// Characters are lines with no indent, not followed by a colon, and usually followed by a blank line or "Natural Combos:"
// Let's explicitly look for Known Characters or lines that don't match other patterns.
const categories = [
  'Natural Combos:',
  'Natural Combos on CH:',
  'Stun/Knockdown Combos:',
  'Juggle Combos:'
];

const validCharacters = ['Algol', 'Amy', 'Astaroth', 'Cassandra', 'Cervantes', 'Hilde', 'Ivy', 'Kilik', 'Lizardman', 'Maxi', 'Mitsurugi', 'Nightmare', 'Raphael', 'Rock', 'Seong Mina', 'Setsuka', 'Siegfried', 'Sophitia', 'Taki', 'Talim', 'The Apprentice', 'Tira', 'Voldo', 'Xianghua', 'Yoshimitsu', 'Yun Seong', 'Zasalamel'];

for (let i = 0; i < lines.length; i++) {
  let line = lines[i].trimEnd();
  
  if (line === '' || line === '--') continue;

  // Check if it's a category
  if (categories.includes(line)) {
    currentCategory = line.replace(':', '');
    currentStarter = null;
    continue;
  }

  // Check if it's a character
  if (validCharacters.includes(line.trim())) {
    currentCharacter = line.trim();
    if (!charactersData[currentCharacter]) {
      charactersData[currentCharacter] = {
        name: currentCharacter,
        character: currentCharacter,
        game: "SoulCalibur IV",
        movesList: []
      };
    }
    currentCategory = null;
    currentStarter = null;
    continue;
  }

  if (currentCharacter && currentCategory) {
    if (currentCategory === 'Natural Combos' || currentCategory === 'Natural Combos on CH') {
      // Format: A,A (22)
      const match = line.match(/^(.+?)\s*\((\d+.*)\)$/);
      if (match) {
        const input = match[1].trim();
        const dmg = match[2].trim();
        charactersData[currentCharacter].movesList.push({
          name: `${currentCategory} - ${input}`,
          input: input,
          type: currentCategory,
          properties: [`Dmg: ${dmg}`]
        });
      }
    } else if (currentCategory === 'Stun/Knockdown Combos' || currentCategory === 'Juggle Combos') {
      // Can be a starter or a followup
      if (line.startsWith('-')) {
        // Followup
        const match = line.match(/^-(.+?)\s*\((\d+.*)\)/);
        if (match && currentStarter) {
          const input = match[1].trim();
          const dmg = match[2].trim();
          charactersData[currentCharacter].movesList.push({
            name: `${currentCategory} Starter: ${currentStarter}`,
            input: `${currentStarter}, ${input}`,
            type: currentCategory,
            properties: [`Dmg: ${dmg}`]
          });
        }
      } else {
        // Starter
        // Make sure it doesn't have (#1, etc) which are notes
        if (!line.startsWith('#')) {
           currentStarter = line.trim();
        }
      }
    }
  }
}

// Output files
const outDir = 'C:\\Users\\hotgh\\Downloads\\gg\\public\\data\\soulcalibur-iv';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

Object.keys(charactersData).forEach(charName => {
  const data = charactersData[charName];
  if (data.movesList.length > 0) {
    const filename = charName.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.json';
    fs.writeFileSync(path.join(outDir, filename), JSON.stringify(data, null, 2));
    console.log(`Wrote ${filename} with ${data.movesList.length} combos.`);
  }
});
