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
                let charData = JSON.parse(fs.readFileSync(charPath, 'utf8'));
                if (!charData.movesList) charData.movesList = [];
                // Add the updated move
                charData.movesList.push(item.move);
                fs.writeFileSync(charPath, JSON.stringify(charData, null, 2));
              }
            } else if (action === 'delete') {
              const graveyardPath = resolve(__dirname, 'public/data/graveyard.json');
              if (fs.existsSync(graveyardPath)) {
                let graveyard = JSON.parse(fs.readFileSync(graveyardPath, 'utf8'));
                item.reason = "rejected_in_admin";
                graveyard.push(item);
                fs.writeFileSync(graveyardPath, JSON.stringify(graveyard, null, 2));
              }
            }
            
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (e: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        });
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
        approval: resolve(__dirname, 'approval.html'),
      },
    },
  },
})
