# GameGlance

A second-screen fighting game companion app. Browse move lists, build practice playlists, and drill combos for Street Fighter 6, Tekken 8, Mortal Kombat 1, CvS2, and more.

## Features

- **Multi-game support** — SF6, T8, MK1, CvS2, SFα3, Darkstalkers series, Pocket Fighter, Project Justice, Plasma Sword, and more
- **Controller-aware glyphs** — Switch between PlayStation, Xbox, Switch, and Arcade notation on the fly
- **Practice playlists** — Pick the moves you want to drill, then launch a dedicated practice view
- **Light & dark themes** — Automatic system detection with manual toggle
- **Rotating color palettes** — Each character card gets a unique accent color; multiple built-in palettes (Neon, Pastel, Arcade, Cyberpunk, Monochrome)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Vanilla CSS with CSS custom properties
- Outfit + JetBrains Mono (Google Fonts)

## Project Structure

```
src/
├── App.tsx                  # Router / view controller
├── main.tsx                 # Entry point
├── index.css                # Design system (light/dark tokens, animations)
├── palette.ts               # Rotating color palette system
├── types.ts                 # Shared TypeScript types
├── games.ts                 # Game + character definitions
├── glyphMap.ts              # Controller input → glyph mapping
├── ThemeContext.tsx          # Dark/light theme provider
├── ThemeToggle.tsx           # Theme toggle button
├── GameSelectView.tsx        # Game selection screen
├── CharacterSelectView.tsx   # Character grid
├── MoveListView.tsx          # Move list + playlist builder
├── GameGlanceView.tsx        # Practice mode main screen
└── GlyphSequence.tsx         # Renders input sequences as controller glyphs
public/
└── data/                    # Per-game, per-character JSON move data
```
