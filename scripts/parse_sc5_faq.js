import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Input and Output Setup
const inputFile = process.argv[2] || path.join(__dirname, '../public/data/raw/sc5_faq.txt');
const outDir = path.join(__dirname, '../public/data/soulcalibur-v');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const fileContent = fs.readFileSync(inputFile, 'utf-8');
const lines = fileContent.split('\n');

const charactersData = {};

let currentCharacter = null;
let currentCategory = null;
let inTable = false;

// Regex for category headers like: "- Alpha Patroklos Horizontals"
// Some names have spaces, some have dots (Z.W.E.I.), some are just one word.
const categoryHeaderRegex = /^\-\s+(.+?)\s+(Horizontals|Verticals|Kicks|Simultaneous Press Moves|8\-Way Run Moves|Throws|Special Stances|Edge Attacks|Sample Combos)$/i;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].replace(/\r$/, '');
  
  if (line.trim() === '') {
    inTable = false;
    continue;
  }

  // Check for category header
  const categoryMatch = line.match(categoryHeaderRegex);
  if (categoryMatch) {
    currentCharacter = categoryMatch[1].trim();
    currentCategory = categoryMatch[2].trim();
    
    // Normalize character name for filename/key
    const charKey = currentCharacter.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/\-+/g, '-');
    
    if (!charactersData[charKey]) {
      charactersData[charKey] = {
        name: currentCharacter,
        character: currentCharacter,
        game: "SoulCalibur V",
        movesList: []
      };
    }
    inTable = false;
    continue;
  }

  // Check for table header
  if (line.includes('Name') && line.includes('Input') && line.includes('Hit')) {
    inTable = true;
    continue;
  }

  // Parse table row
  if (inTable && currentCharacter) {
    // A row looks like: Petal Slash                   | AA        | HH   |
    const parts = line.split('|');
    if (parts.length >= 3) {
      const moveName = parts[0].trim();
      const input = parts[1].trim();
      const hit = parts[2].trim();
      const other = parts.length > 3 ? parts[3].trim() : '';

      const properties = [];
      if (hit) properties.push(`Hit: ${hit}`);
      if (other) properties.push(`Other: ${other}`);

      const charKey = currentCharacter.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/\-+/g, '-');
      
      charactersData[charKey].movesList.push({
        name: moveName,
        input: input,
        type: currentCategory,
        properties: properties
      });
    } else {
      // If the row doesn't have pipes but we're in a table, might be a multi-line move name or comment
      // We will skip for now.
    }
  }
}

// Write JSON files
for (const [charKey, charData] of Object.entries(charactersData)) {
  const outputPath = path.join(outDir, `${charKey}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(charData, null, 2), 'utf-8');
  console.log(`Wrote ${charKey}.json with ${charData.movesList.length} moves.`);
}
