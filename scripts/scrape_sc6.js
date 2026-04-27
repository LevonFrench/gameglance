import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, '../public/data/soulcalibur-vi');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const characters = [
  "2B", "Amy", "Astaroth", "Azwel", "Cassandra", "Cervantes", "Geralt", 
  "Groh", "Haohmaru", "Hilde", "Hwang", "Inferno", "Ivy", "Kilik", "Maxi", 
  "Mitsurugi", "Nightmare", "Raphael", "Seong_Mi-Na", "Setsuka", 
  "Siegfried", "Sophitia", "Taki", "Talim", "Tira", "Voldo", "Xianghua", 
  "Yoshimitsu", "Zasalamel"
];

const scrapeSC6 = async () => {
  console.log("Starting SC6 Scraper with Playwright...");
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  for (const char of characters) {
    console.log(`Scraping ${char}...`);
    try {
      await page.goto(`https://wiki.supercombo.gg/w/Soulcalibur_VI/${char}/Move_list`, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(3000);

      const moves = await page.evaluate(() => {
        const results = [];
        
        const mapImageToNotation = (img) => {
          if (!img || !img.src) return "";
          const filename = img.src.split('/').pop().split('.')[0].replace('Sc_', '');
          const mapping = {
            'A': 'A', 'B': 'B', 'K': 'K', 'G': 'G',
            '1': '1', '2': '2', '3': '3', '4': '4', '6': '6', '7': '7', '8': '8', '9': '9',
            'a': 'a', 'b': 'b', 'k': 'k', 'g': 'g',
            'H': 'H', 'M': 'M', 'L': 'L', 'SM': 'SM', 'SL': 'SL', 'LH': 'LH'
          };
          return mapping[filename] || filename;
        };

        const extractCellContent = (cell) => {
          if (!cell) return "";
          return Array.from(cell.childNodes).map(node => {
            if (node.nodeType === Node.TEXT_NODE) return node.textContent.trim();
            if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'IMG') return mapImageToNotation(node);
            if (node.nodeType === Node.ELEMENT_NODE) return node.innerText.trim();
            return "";
          }).join('').replace(/\s+/g, ' ').trim();
        };

        let currentCategory = "Moves";
        let currentMoveName = "";

        // The wiki uses headings wrapped in divs. We can just query all relevant elements in document order.
        const elements = document.querySelectorAll('h2, h3, h4, table.wikitable');
        
        elements.forEach(el => {
          if (el.tagName === 'H2') {
            currentCategory = el.innerText.replace('[edit]', '').replace('edit', '').trim();
          } else if (el.tagName === 'H3' || el.tagName === 'H4') {
            currentMoveName = el.innerText.replace('[edit]', '').replace('edit', '').trim();
          } else if (el.tagName === 'TABLE' && el.classList.contains('wikitable')) {
            const rows = Array.from(el.querySelectorAll('tr'));
            if (rows.length >= 3) {
              const inputCell = rows[0].querySelector('th, td');
              if (inputCell) {
                 const moveNameAndInput = extractCellContent(inputCell);
                 const inputStr = moveNameAndInput.split('-Attack Level')[0].split('- Attack Level')[0].trim();
                 
                 const headers = Array.from(rows[1].querySelectorAll('th, td')).map(c => c.innerText.trim());
                 const values = Array.from(rows[2].querySelectorAll('td')).map(c => c.innerText.trim());
                 
                 const frameData = {};
                 headers.forEach((h, i) => { if (h) frameData[h] = values[i] || ""; });
                 
                 const notes = rows.length > 3 ? Array.from(rows).slice(3).map(r => r.innerText.trim()).join(' ') : "";
                 
                 results.push({
                   category: currentCategory,
                   moveName: currentMoveName || inputStr,
                   input: inputStr,
                   frameData,
                   notes
                 });
              }
            }
          }
        });
        return results;
      });

      if (moves && moves.length > 0) {
        const charKey = char.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/\-+/g, '-');
        const charData = {
          name: char.replace('_', ' '),
          character: char.replace('_', ' '),
          game: "SoulCalibur VI",
          movesList: moves.map(m => {
            return {
              name: m.moveName,
              input: m.input,
              type: m.category,
              properties: Object.keys(m.frameData).map(k => `${k}: ${m.frameData[k]}`).concat(m.notes ? [`Notes: ${m.notes}`] : [])
            };
          })
        };
        fs.writeFileSync(path.join(outDir, `${charKey}.json`), JSON.stringify(charData, null, 2));
        console.log(`Saved ${moves.length} moves for ${char}`);
      } else {
        console.log(`No moves found for ${char}`);
      }

    } catch (err) {
      console.error(`Error scraping ${char}: ${err.message}`);
    }
  }

  await browser.close();
};

scrapeSC6();
