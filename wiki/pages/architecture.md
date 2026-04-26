# Architecture

## Tech Stack

- **React 19** + **TypeScript 6** — single-page app, no router
- **Vite 8** — dev server and production bundler
- **Vanilla CSS** — custom properties, glassmorphism, no framework
- **Static JSON** — move data loaded per-character on demand
- **Vercel** — production deployment from `main` branch

## Views

The app uses a single `App.tsx` controller with view state (`game_select` → `char_select` → `move_list`). No React Router — navigation is driven by `useState` and `window.history.pushState` for back button support.

```
App.tsx (controller)
├── LandingView.tsx         — Marketing landing page with standalone dark-theme CSS
├── GameSelectView.tsx      — Game browser with search, dynamic categories, favorites
├── CharacterSelectView.tsx — Character grid for selected game
├── MoveListView.tsx        — Tabbed move list with playlist builder and nested Stance Trees
├── GameGlanceView.tsx      — Second-screen practice mode (playlist playback)
└── Approval*.tsx           — Isolated combo approval tool (approval.html entry)
```

## Shared Components

| Component | File | Purpose |
|-----------|------|---------|
| TopHeader | `TopHeader.tsx` | Sticky breadcrumb nav (Back, Home, Game, Character) |
| BottomHeader | `BottomHeader.tsx` | Fixed footer with glyph/notation selectors |
| GlyphSequence | `GlyphSequence.tsx` | Renders tokenized input arrays as styled button/direction glyphs |
| AmbientMesh | `AmbientMesh.tsx` | Canvas-based animated background blobs |
| ErrorBoundary | `ErrorBoundary.tsx` | Catches render errors, shows recovery UI |
| ThemeContext | `ThemeContext.tsx` | Dark-mode-only theme provider |

## Data Flow

```
games.ts (registry)
    ↓ game selected
fetch(`/data/{gameId}/_roster.json`)
    ↓ character selected  
fetch(`/data/{gameId}/{characterId}.json`)
    ↓ moves loaded
MoveListView renders tabs, GlyphSequence renders inputs
```

## Key Design Decisions

- **`games.ts` is the single source of truth** for the game registry (IDs, rosters, tabs, system mechanics, metadata). It's ~297KB and loaded synchronously. System mechanics (8 per game) are stored inline as `systemMechanics[]` on each `GameDefinition` — no separate fetch needed.
- **Move data is lazy-loaded** per character. Each character's JSON is a separate Vite chunk, fetched only when selected.
- **Glyphs are controller-aware.** `glyphMap.ts` translates generic inputs (LP, MP, HK) into hardware-specific labels per controller type (PlayStation, Xbox, Neo Geo, etc.).
- **No server.** Everything is static. Favorites, playlists, and settings persist via `localStorage`.
- **Marketing Page Theme Decoupling**: The marketing landing page (`LandingView.tsx` / `LandingView.css`) is completely decoupled from global CSS variables (like `--bg-primary`). It uses hardcoded dark hex colors to ensure the cinematic aesthetics render correctly even if the user's OS or browser forces a light theme.
- **Fightcade Sync** uses the File System Access API to poll a local log file (`gg_sync.log`) every second, auto-navigating to the current game/character.
