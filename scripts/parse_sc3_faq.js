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
const charactersData = {};

const charRegex = /^\s*FAQ\/Move List\s*\/\s*[\da-z]+\.\s*(.+)$/i;
const categoryRegex = /^\|\s*([^|]+?)\s*\|$/;
const moveRegex = /^([^:]+):\s+(.*?)\s+\|\s*(.*)$/;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i].trimEnd();
  
  // Check for character header
  const charMatch = line.match(charRegex);
  if (charMatch) {
    currentCharacter = charMatch[1].trim();
    charactersData[currentCharacter] = {
      name: currentCharacter,
      character: currentCharacter,
      game: "SoulCalibur III",
      movesList: []
    };
    currentCategory = null;
    continue;
  }
  
  // Check for category header
  if (line.startsWith('| ') && line.endsWith(' |')) {
    const catMatch = line.match(categoryRegex);
    if (catMatch) {
      currentCategory = catMatch[1].trim();
    }
    continue;
  }
  
  // Check for move
  if (currentCharacter && currentCategory && line.includes('|')) {
    // Check for multiline move
    if (line.endsWith('|') && !line.includes(':')) {
       // Might be continuation, ignore for now to keep simple
       continue;
    }
    
    // Handle split lines like:
    // Nunchaku Slap To Branding Nunchaku ~ Left Inner:   |
    //      4AB[4]                                        | HMMMMM ST
    if (line.endsWith('|') && line.includes(':')) {
      const namePart = line.split(':')[0].trim();
      const nextLine = lines[i+1] ? lines[i+1].trimEnd() : '';
      if (nextLine && nextLine.includes('|')) {
        const parts = nextLine.split('|');
        const inputPart = parts[0].trim();
        const propPart = parts[1] ? parts[1].trim() : '';
        charactersData[currentCharacter].movesList.push({
          name: namePart,
          input: inputPart,
          type: currentCategory,
          properties: propPart.split(' ')
        });
        i++; // skip next line
        continue;
      }
    }
    
    // Standard move line
    const mMatch = line.match(moveRegex);
    if (mMatch) {
      const name = mMatch[1].trim();
      const input = mMatch[2].trim();
      const props = mMatch[3].trim().split(' ');
      
      charactersData[currentCharacter].movesList.push({
        name: name,
        input: input,
        type: currentCategory,
        properties: props
      });
    }
  }
}

// Output files
const outDir = 'C:\\Users\\hotgh\\Downloads\\gg\\public\\data\\soulcalibur-iii';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

Object.keys(charactersData).forEach(charName => {
  const data = charactersData[charName];
  if (data.movesList.length > 0) {
    const filename = charName.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.json';
    fs.writeFileSync(path.join(outDir, filename), JSON.stringify(data, null, 2));
    console.log(`Wrote ${filename} with ${data.movesList.length} moves.`);
  }
});
