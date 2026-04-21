/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

const adminApiPlugin = () => ({
  name: 'admin-api',
  configureServer(server: any) {
    server.middlewares.use('/api/save_move', (req: any, res: any) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk: any) => { body += chunk.toString(); });
        req.on('end', () => {
          try {
            const { action, item } = JSON.parse(body);
            // item has { gameId, characterId, move, reason }
            
            // Remove from quarantine
            const quarantinePath = resolve(__dirname, 'public/data/staging_quarantine.json');
            if (fs.existsSync(quarantinePath)) {
              let quarantine = JSON.parse(fs.readFileSync(quarantinePath, 'utf8'));
              quarantine = quarantine.filter((q: any) => !(q.gameId === item.gameId && q.characterId === item.characterId && q.move.name === item.move.name));
              fs.writeFileSync(quarantinePath, JSON.stringify(quarantine, null, 2));
            }
            
            if (action === 'approve') {
              const charPath = resolve(__dirname, `public/data/${item.gameId}/${item.characterId}.json`);
              if (fs.existsSync(charPath)) {
                const charData = JSON.parse(fs.readFileSync(charPath, 'utf8'));
                if (item.listType === 'combos') {
                  if (!charData.combosList) charData.combosList = [];
                  charData.combosList.push(item.move);
                } else {
                  if (!charData.movesList) charData.movesList = [];
                  charData.movesList.push(item.move);
                }
                fs.writeFileSync(charPath, JSON.stringify(charData, null, 2));
              } else {
                throw new Error(`Character file not found: ${charPath}`);
              }
            } else if (action === 'delete') {
              const graveyardPath = resolve(__dirname, 'public/data/graveyard.json');
              let graveyard = [];
              if (fs.existsSync(graveyardPath)) {
                graveyard = JSON.parse(fs.readFileSync(graveyardPath, 'utf8'));
              }
              item.reason = "rejected_in_admin";
              graveyard.push(item);
              fs.writeFileSync(graveyardPath, JSON.stringify(graveyard, null, 2));
            }
            
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (e: any) {
            console.error("Save Move Error:", e);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: e.message }));
          }
        });
      }
    });

    server.middlewares.use('/api/approve_combos', (req: any, res: any) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk: any) => body += chunk.toString());
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            const { gameId, charId, approvedCombos } = data;
            
            // 1. Append to character file
            const charFilePath = resolve(__dirname, `public/data/${gameId}/${charId}.json`);
            if (!fs.existsSync(charFilePath)) {
              throw new Error(`Character file not found: ${gameId}/${charId}`);
            }
            const charData = JSON.parse(fs.readFileSync(charFilePath, 'utf8'));
            if (!charData.combosList) charData.combosList = [];
            
            const newCombos = approvedCombos.map((c: any) => ({
              id: 'combo-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
              name: 'Combo',
              input: c.route,
              damage: c.damage,
              notes: c.notes
            }));
            
            charData.combosList.push(...newCombos);
            fs.writeFileSync(charFilePath, JSON.stringify(charData, null, 2));

            // 2. Remove from scraped file
            const scrapedFilePath = resolve(__dirname, `public/data/scraped_combos/${gameId}/${charId}_supercombo.json`);
            if (fs.existsSync(scrapedFilePath)) {
              const scrapedCombos = JSON.parse(fs.readFileSync(scrapedFilePath, 'utf8'));
              // Remove by route
              const routesToRemove = new Set(approvedCombos.map((c: any) => c.route));
              const filteredScraped = scrapedCombos.filter((c: any) => !routesToRemove.has(c.route));
              fs.writeFileSync(scrapedFilePath, JSON.stringify(filteredScraped, null, 2));
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (e: any) {
            console.error("Approve Combos Error:", e);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: e.message }));
          }
        });
      }
    });
    server.middlewares.use('/api/legacy_staging', (_req: any, res: any) => {
      const stagingDir = resolve(__dirname, 'staging/legacy_raw');
      if (!fs.existsSync(stagingDir)) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({}));
        return;
      }
      
      const games = fs.readdirSync(stagingDir).filter(f => fs.statSync(resolve(stagingDir, f)).isDirectory());
      const result: Record<string, string[]> = {};
      
      games.forEach(game => {
        const charFiles = fs.readdirSync(resolve(stagingDir, game)).filter(f => f.endsWith('.txt'));
        if (charFiles.length > 0) {
          result[game] = charFiles.map(f => f.replace('.txt', ''));
        }
      });
      
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(result));
    });

    server.middlewares.use('/api/legacy_raw_text', (req: any, res: any) => {
      try {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const gameId = url.searchParams.get('gameId');
        const charId = url.searchParams.get('charId');
        
        if (!gameId || !charId) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Missing gameId or charId' }));
          return;
        }
        
        const path = resolve(__dirname, `staging/legacy_raw/${gameId}/${charId}.txt`);
        if (fs.existsSync(path)) {
          const content = fs.readFileSync(path, 'utf8');
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ content }));
        } else {
          res.statusCode = 404;
          res.end(JSON.stringify({ error: 'File not found' }));
        }
      } catch (e: any) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: e.message }));
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), adminApiPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
