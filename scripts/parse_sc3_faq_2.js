import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = process.argv[2] || path.join(__dirname, '../public/data/raw/sc3_faq_2.txt');
const outDir = path.join(__dirname, '../public/data/soulcalibur-iii');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const fileContent = fs.readFileSync(inputFile, 'utf-8');
const lines = fileContent.split('\n').map(l => l.replace(/\r$/, ''));

const charactersData = {};
let currentCharacter = null;
let currentCategory = null;

const charHeaderRegex = /^\*\-+(?:\[sp\d+\])?\-+\*$/;
const categoryHeaderRegex = /^\-+$/;
const knownCategories = ["HORIZONTAL", "VERTICAL", "KICK", "SIMULTANEOUS", "8-WAY RUN", "THROW", "MISCELLANEOUS", "SIGNATURE"];

let isNextLineCharName = false;
let isNextLineCategoryName = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].replace(/\r$/, '');

  if (charHeaderRegex.test(line)) {
    if (lines[i-1] && lines[i-1].startsWith('|') && lines[i-1].endsWith('|')) {
      const charNameMatch = lines[i-1].match(/\|\s+(.+?)\s+\|/);
      if (charNameMatch && !charNameMatch[1].includes('STORY') && !charNameMatch[1].includes('CONTROL') && !charNameMatch[1].includes('TECHNIQUES')) {
         currentCharacter = charNameMatch[1].trim();
         const charKey = currentCharacter.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/\-+/g, '-');
         if (!charactersData[charKey]) {
            charactersData[charKey] = {
              name: currentCharacter,
              character: currentCharacter,
              game: "SoulCalibur III",
              movesList: []
            };
         }
         currentCategory = null;
      }
    }
    continue;
  }

  if (categoryHeaderRegex.test(line)) {
    if (lines[i+1] && knownCategories.includes(lines[i+1].trim())) {
       currentCategory = lines[i+1].trim();
       i += 2; // skip the category name and the next line of dashes
       continue;
    }
  }

  // Parse moves if we have a character and a category
  if (currentCharacter && currentCategory) {
    if (line.trim() === '' || line.startsWith('------') || line.includes('COST =')) {
      continue;
    }
    
    // We are expecting MoveName    Input    Properties
    // Using regex to split by 2 or more spaces
    const parts = line.split(/\s{2,}/).filter(p => p.trim() !== '');
    
    if (parts.length >= 2) {
      const moveName = parts[0].trim();
      const input = parts[1].trim();
      const properties = parts.length > 2 ? [parts[2].trim()] : [];

      const charKey = currentCharacter.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/\-+/g, '-');
      charactersData[charKey].movesList.push({
        name: moveName,
        input: input,
        type: currentCategory,
        properties: properties
      });
    }
  }
}

for (const [charKey, charData] of Object.entries(charactersData)) {
  const outputPath = path.join(outDir, `${charKey}.json`);
  // Only write if we actually have a good chunk of moves, or it doesn't exist
  if (charData.movesList.length > 10) {
    fs.writeFileSync(outputPath, JSON.stringify(charData, null, 2), 'utf-8');
    console.log(`Wrote ${charKey}.json with ${charData.movesList.length} moves from sc3_faq_2.`);
  }
}
