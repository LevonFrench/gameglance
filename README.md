<div align="center">
  <h1>GameGlance</h1>
  <p><strong>Second-screen fighting game companion for the FGC.</strong></p>
  <p>
    <a href="https://gameglance.vercel.app">Live App</a> ·
    <a href="https://github.com/LevonFrench/gameglance">GitHub</a> ·
    <a href="https://ko-fi.com/gameglanceapp">Support on Ko-fi</a> ·
    <a href="https://discord.gg/u9htMX39">Discord Community</a>
  </p>
</div>

Browse move lists, system mechanics, and frame data for **225 fighting games** — from modern titles like *Street Fighter 6*, *Tekken 8*, and *Fatal Fury: City of the Wolves* to arcade classics like *Marvel vs. Capcom 2*, *CvS2*, and *3rd Strike*.

Built as a PWA with hardware-authentic styling: controller glyphs, cabinet palettes, and arcade-era typography. Pin it to your phone or tablet for instant lab access.

---

## ✨ Features

- **225 Game Registry** — Modern (SF6, T8, GGST, MK1, COTW, UNIB2, GBVSR) and classic (3rd Strike, CvS2, Garou, MVC2, SamSho, KOF '98).
- **System Mechanics for Every Game** — Each game has a detailed breakdown of its unique systems (Roman Cancels, Rage Arts, Drive System, Combo Breakers, etc.).
- **Universal Color Aliasing Engine** — Resolves input notations (SNK's `A,B,C,D`, Anime's `P,K,S,H`, Tekken's `1,2,3,4`) to physically accurate colors across any controller.
- **Dynamic Controller Glyphs** — Inputs render as PlayStation, Xbox, Switch, Neo Geo, CPS, Genesis, SNES, Tekken, or generic arcade buttons. Auto-adapts per game or switch manually.
- **Practice Playlists** — Isolate specific moves and keep them on your second screen while you play.
- **Fightcade Sync** — Watches a local log file to auto-navigate to the game and character you're playing in Fightcade.
- **Favorites & Filtering** — Star your games, filter by category (2D, 3D, Anime, Tag, etc.), sort by date or name.
- **Light & Dark Mode** — Premium dark theme for lab sessions plus a clean light mode.
- **PWA Support** — Install as a native app on mobile, tablet, or desktop. Works offline.
- **FGC Search Aliases** — Search "3s" for 3rd Strike, "cvs2" for Capcom vs SNK 2, "strive" for Guilty Gear Strive, and 70+ more.

## 📊 Registry Coverage

| Field | Coverage |
|-------|----------|
| Games | 225 |
| System Mechanics | 225/225 (100%) |
| Notation System | 225/225 (100%) |
| Tags/Categories | 225/225 (100%) |
| Character Data (JSON) | 4,400+ character files |
| Wiki/Resource Links | 130+ |

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Install as PWA

On mobile or desktop, use your browser's "Add to Home Screen" or "Install App" option. The app caches core assets for offline use.

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | Vanilla CSS (Custom Properties, Glassmorphism, Light/Dark) |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Data | Static JSON move lists (lazy-loaded) + inline system mechanics |
| PWA | Web App Manifest + Service Worker |
| Deploy | Vercel |

## 📁 Key Files

| File | Purpose |
|------|---------| 
| `src/games.ts` | Full game registry — IDs, rosters, system mechanics, links, stores, search aliases |
| `src/glyphMap.ts` | Controller-aware input → glyph translation engine |
| `src/GlyphSequence.tsx` | Renders tokenized input sequences as styled SVG/button glyphs |
| `src/GameSelectView.tsx` | Game browser with search, filters, expandable info cards |
| `src/GameInfoCard.tsx` | Expanded game details: system mechanics, external resources, platform availability |
| `src/CharacterSelectView.tsx` | Character grid with favorites and watermark typography |
| `src/MoveListView.tsx` | Tabbed move list with playlist builder |
| `src/GameGlanceView.tsx` | Second-screen practice mode |
| `src/FightcadeSyncView.tsx` | Fightcade integration panel |
| `src/useTheme.ts` | Theme context provider (light/dark) |
| `public/data/<game>/<char>.json` | Per-character move data |

## 📦 Scripts

The `scripts/` directory contains Python utilities for:
- **Data ingestion** — Scraping and normalizing move data from wikis (Dustloop, Mizuumi, SuperCombo)
- **Roster sync** — Verifying `games.ts` character arrays match `public/data/` JSON files
- **Registry auditing** — Release date verification, field coverage analysis

These are development tools and are not part of the production build.

## 🎮 Supported Notation Systems

| System | Used By | Example |
|--------|---------|---------|
| `numpad` | Most 2D fighters | `236P` (quarter circle forward + punch) |
| `classic` | Street Fighter | `QCF+P` |
| `tekken` | Tekken series | `d/f+2` |
| `mk` | Mortal Kombat | `BF1` |
| `nrs` | NRS games (Injustice) | `BF1` |
| `smash` | Smash Bros | `Fair`, `Usmash` |
| `3d` | SoulCalibur, DOA | `6A+B` |

---

<div align="center">
  <sub>Built for the FGC. Ready to Fight.</sub>
</div>
