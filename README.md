<div align="center">
  <h1>GameGlance</h1>
  <p><strong>A second-screen fighting game companion app for the FGC.</strong></p>
</div>

Browse move lists, build practice playlists, and drill combos for fighting games across history — from *Street Fighter 6* and *Tekken 8* to *Marvel vs. Capcom 2*, *CvS2*, and *Darkstalkers*.

Built with hardware-authentic styling: controller glyphs, cabinet palettes, and arcade-era typography.

---

## ✨ Features

- **200+ Game Registry** — Modern titles (SF6, T8, GGST, MK1, DNF Duel) and classics (3rd Strike, CvS2, SFα3, Garou, Pocket Fighter, Project Justice, Plasma Sword).
- **Dynamic Controller Glyphs** — Inputs render as PlayStation, Xbox, Switch, Neo Geo, CPS, Genesis, SNES, or generic arcade buttons. Auto-adapts per game or lets you switch manually.
- **Practice Playlists** — Isolate specific moves or combos and keep them on your second screen while you play.
- **Fightcade Sync** — Watches a local log file to auto-navigate to the game and character you're playing in Fightcade.
- **Favorites & Filtering** — Star your games, filter by developer, sort by date or name.
- **Dark Mode Only** — One premium dark theme, tuned for low-light lab sessions.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 19 + TypeScript 6 |
| Build | Vite 8 |
| Styling | Vanilla CSS (Custom Properties, Glassmorphism) |
| Fonts | Outfit + JetBrains Mono (Google Fonts) |
| Data | Static JSON move lists per character, lazy-loaded |
| Deploy | Vercel |

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/games.ts` | Full game registry (IDs, rosters, metadata) |
| `src/glyphMap.ts` | Controller-aware input → glyph translation |
| `src/GlyphSequence.tsx` | Renders tokenized input sequences as styled SVG/button glyphs |
| `src/GameSelectView.tsx` | Game browser with search, filters, and expandable info cards |
| `src/CharacterSelectView.tsx` | Character grid with favorites and watermark typography |
| `src/MoveListView.tsx` | Tabbed move list with playlist builder |
| `src/GameGlanceView.tsx` | Second-screen practice mode |
| `public/data/<game>/<char>.json` | Per-character move data |

## 📦 Scripts

The `scripts/` directory contains Python and Node utilities for data ingestion, roster management, FAQ parsing, and move normalization. These are development tools, not part of the production app.

---

<div align="center">
  <sub>Built for the FGC. Ready to Fight.</sub>
</div>
