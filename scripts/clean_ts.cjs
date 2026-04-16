const fs = require('fs');

async function main() {
    let ts_content = fs.readFileSync('src/games.ts', 'utf8');
    
    // We can evaluate it by removing export types
    let eval_code = ts_content.replace('import type { GameDefinition } from \'./types\';', '');
    eval_code = eval_code.replace('export const SUPPORTED_GAMES: GameDefinition[] =', 'return');
    eval_code = `(function() { ${eval_code} })()`;
    
    let games = eval(eval_code);
    
    let truth = JSON.parse(fs.readFileSync('scratch/truth_roster.json', 'utf8'));
    function clean_id(name) {
        let cid = name.toLowerCase();
        cid = cid.replace(/[^a-z0-9\s-]/g, '');
        cid = cid.replace(/\s+/g, '-');
        return cid;
    }
    
    let seen = new Set();
    let final_games = [];
    
    for (let g of games) {
        if (seen.has(g.id)) continue;
        if (seen.has(g.name)) continue;
        seen.add(g.id);
        seen.add(g.name);
        
        let truth_game = null;
        for (let tg of Object.keys(truth)) {
            if (g.name.toLowerCase() === tg.toLowerCase()) {
                truth_game = tg; break;
            }
        }
        if (!truth_game) {
            for (let tg of Object.keys(truth)) {
                if (g.name.toLowerCase().includes(tg.toLowerCase()) || tg.toLowerCase().includes(g.name.toLowerCase())) {
                    truth_game = tg; break;
                }
            }
        }
        
        if (truth_game) {
            let t_chars = truth[truth_game];
            let new_chars = [];
            for (let tc of t_chars) {
                new_chars.push({ id: clean_id(tc), name: tc });
                
                // create blank json for missing
                let p = `public/data/${g.id}/${clean_id(tc)}.json`;
                if (!fs.existsSync(`public/data/${g.id}`)) {
                    fs.mkdirSync(`public/data/${g.id}`, { recursive: true });
                }
                if (!fs.existsSync(p)) {
                    fs.writeFileSync(p, JSON.stringify({ character: tc, movesList: [] }, null, 2));
                }
            }
            
            // Delete extra jsons
            for (let old_c of g.characters) {
                if (!t_chars.find(tc => clean_id(tc) === old_c.id)) {
                    let p = `public/data/${g.id}/${old_c.id}.json`;
                    if (fs.existsSync(p)) {
                        fs.unlinkSync(p);
                    }
                }
            }
            
            g.characters = new_chars;
        }
        
        final_games.push(g);
    }
    
    // Sort games alphabetically
    final_games.sort((a,b) => a.name.localeCompare(b.name));
    
    // Write back to ts
    let out = "import type { GameDefinition } from './types';\n\n";
    out += "export const SUPPORTED_GAMES: GameDefinition[] = [\n";
    
    for (let i = 0; i < final_games.length; i++) {
        let g = final_games[i];
        out += `  {\n`;
        out += `    id: '${g.id}',\n`;
        out += `    name: "${g.name}",\n`;
        if (g.developer) out += `    developer: "${g.developer}",\n`;
        if (g.releaseYear) out += `    releaseYear: ${g.releaseYear},\n`;
        if (g.platform) out += `    platform: "${g.platform}",\n`;
        if (g.rosterCount) out += `    rosterCount: ${g.rosterCount},\n`;
        out += `    characters: [\n`;
        for (let j = 0; j < g.characters.length; j++) {
            let c = g.characters[j];
            out += `      { id: '${c.id}', name: '${c.name.replace(/'/g, "\\'")}' }${j < g.characters.length-1 ? ',' : ''}\n`;
        }
        out += `    ],\n`;
        out += `    tabs: ${JSON.stringify(g.tabs || ['Special Moves', 'Super Combos', 'Finishers', 'Unique Attacks', 'Normal Moves', 'Throws', 'Common Moves'])}\n`;
        out += `  }${i < final_games.length-1 ? ',' : ''}\n`;
    }
    out += "];\n";
    
    fs.writeFileSync('src/games.ts', out);
    console.log(`Successfully rewrote src/games.ts with ${final_games.length} deduped games.`);
}

main();
