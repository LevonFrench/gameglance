const fs = require('fs');
const path = require('path');

// Recursively walk through a directory
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    // Ignore node_modules, .git, and common output dirs
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('dist') && !file.includes('android') && !file.includes('ios')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.json') || file.endsWith('.txt') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
        results.push(file);
      }
    }
  });
  return results;
}

console.log("Scanning workspace for BOM (Byte Order Mark) artifacts...");
const allFiles = walk(path.join(__dirname, '..'));
let fixedCount = 0;

allFiles.forEach(f => {
  try {
    const content = fs.readFileSync(f, 'utf8');
    if (content.charCodeAt(0) === 0xFEFF) {
      fs.writeFileSync(f, content.slice(1), 'utf8');
      console.log(`Fixed BOM in ${f}`);
      fixedCount++;
    }
  } catch(e) {
    console.error(`Failed to process ${f}: ${e.message}`);
  }
});

console.log(`\nScan complete. Fixed BOMs in ${fixedCount} files.`);
