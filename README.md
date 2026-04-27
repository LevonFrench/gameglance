<div align="center">
  <h1>GameGlance</h1>
  <p><strong>The definitive second-screen companion for the Fighting Game Community.</strong></p>
  <p>
    <a href="https://gameglance.vercel.app"><b>Live App</b></a> ·
    <a href="https://github.com/LevonFrench/gameglance"><b>GitHub</b></a> ·
    <a href="https://ko-fi.com/gameglanceapp"><b>Support on Ko-fi</b></a> ·
    <a href="https://discord.gg/u9htMX39"><b>Discord</b></a>
  </p>
</div>

---

**GameGlance** is a high-fidelity, offline-first Progressive Web App (PWA) designed to sit on your phone or tablet while you lab in training mode. Forget scrolling through massive, unoptimized wikis or clunky in-game menus. GameGlance provides instant access to move lists, frame data, and system mechanics for **225 fighting games** with hardware-accurate controller glyphs.

## 🌟 Why GameGlance?

- **Zero-Friction Lab Sessions:** Pin specific combos or setups to your "Practice Playlist" and keep them visible on your second screen. No more pausing the game.
- **Universal Input Translator:** Never read a numpad string (`236+P`) and wonder what button that is on your controller. GameGlance dynamically translates notation to authentic **PlayStation, Xbox, Arcade, SNES, Genesis, or NeoGeo** button glyphs in real-time.
- **Lightning Fast & Offline Ready:** Built as a PWA. Install it to your home screen once, and it caches the data for instant, offline access at tournaments where cell service is notoriously terrible.
- **Massive Database:** From modern juggernauts like *Street Fighter 6*, *Tekken 8*, and *Fatal Fury: City of the Wolves*, to esoteric arcade classics and everything in between.

## ✨ Core Features

* 🎮 **Dynamic Controller Mapping**: Toggle between input styles instantly. Playing an SNK game? It renders `A B C D`. Playing Tekken? It renders `1 2 3 4`. Using a DualSense? It maps everything to Cross, Circle, Square, and Triangle.
* 📚 **System Mechanics Sandbox**: Every game features a dedicated breakdown of its unique mechanics (Roman Cancels, Heat System, Combo Breakers, V-Shift).
* 🎬 **GSAP Cinematic Scrollytelling**: Built-in promotional and presentation suites (check out `?promo=true` for our automated GSAP trailer loop).
* 🔄 **Fightcade Auto-Sync**: Automatically detects your active Fightcade session and jumps straight to the character you are currently playing.
* 🌓 **Premium Themes**: Lab-optimized Dark Mode to reduce eye strain during late-night practice, alongside a crisp Light Mode.

## 📊 The Registry (By the Numbers)

| Metric | Coverage |
|--------|----------|
| **Supported Games** | 225 Titles |
| **System Mechanics** | 100% Coverage |
| **Character JSONs** | 4,400+ Individual Roster Files |
| **Data Pipelines** | Integrated scrapers for SuperCombo, Dustloop, & Mizuumi |

## 🛠️ Technology Stack

GameGlance is engineered for extreme performance and portability.

- **Frontend Core**: React 19 + TypeScript
- **Build Tooling**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Glassmorphism UI, Responsive Design)
- **Animation**: GSAP (GreenSock) for cinematic sequences & micro-interactions
- **Data Architecture**: Statically generated JSON files (lazy-loaded for zero initial payload bloat)
- **Deployment**: Vercel

## 🚀 Local Development

Want to contribute or run your own local instance?

```bash
# Clone the repository
git clone https://github.com/LevonFrench/gameglance.git

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. 

### Data Scrapers (Python)
The `scripts/` directory houses our custom Python pipelines used to ingest combo tables and frame data from community wikis. These are strictly development tools used to generate the static `public/data/` JSONs and are not bundled in the production app.

## 🥊 Input Notation Systems

GameGlance parses and translates multiple FGC notation dialects under the hood:

- `numpad` (Anime / Modern 2D) 👉 `236P`
- `traditional` (Capcom Classic) 👉 `QCF+P`
- `tekken` (3D Fighters) 👉 `d/f+2`
- `mk` (NetherRealm) 👉 `B, F, 1`
- `smash` (Platform Fighters) 👉 `Fair`, `Nair`

---
<div align="center">
  <sub><b>Built by and for the FGC. Ready to Fight.</b></sub>
</div>
