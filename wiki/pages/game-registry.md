# Game Registry

The game registry (`src/games.ts`) is the master list of all supported games.

## Structure

Each game is a `GameDefinition` object:

```typescript
{
  id: 'street-fighter-6',          // URL-safe slug, matches public/data/ dir
  mameRomset: 'sf6',               // For Fightcade sync (optional)
  name: 'Street Fighter 6',        // Display name
  tagline: 'World Tour',           // Subtitle (optional)
  developer: 'Capcom',             // Optional developer info
  releaseYear: 2023,               // For date sorting
  platform: 'PS4, PS5, PC, Xbox',  // Platform icons
  rosterCount: 25,                 // Total character count
  tags: ['Modern', '2D'],          // Optional metadata
  characters: [
    { id: 'ryu', name: 'Ryu', moveCount: 45 }
  ],
  systemMechanics: [
    { name: 'Drive System', description: 'Governs Drive Impact, Drive Rush, Drive Reversal, and Drive Parry.' }
  ],
  tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']
}
```

## Dynamic Categories

The Game Select screen no longer relies purely on hardcoded filter buttons. It now dynamically computes categories (like `Street Fighter`, `Guilty Gear`, `Mortal Kombat`, etc.) based on game names, prefixes, and tags using the `computeGameCategories` logic in `GameSelectView.tsx`.

## Adding a New Game

1. Create directory: `public/data/{game-id}/`
2. Add `_roster.json` with character list (for Fightcade sync)
3. Add character JSON files: `public/data/{game-id}/{character-id}.json`
4. Add game definition to `src/games.ts`
5. Verify build: `npm run build`

## Character ID Convention

- Lowercase, hyphenated: `ryu`, `chun-li`, `m-bison`, `evil-ryu`
- Must match the JSON filename in `public/data/`
- Must match the `id` field in the `characters[]` array

## Tab Categories

The `tabs` array defines which move type categories appear in the move list view. Common patterns:

| Game Style | Typical Tabs |
|------------|-------------|
| Capcom 2D | Special Moves, Super Arts, Throws, Unique Attacks, Normal Moves, Common Moves |
| SNK | Special Moves, Super Arts, Throws, Unique Attacks, Normal Moves, Common Moves |
| Anime | Special Moves, Super Combos, Finishers, Unique Attacks, Normal Moves, Throws, Common Moves |
| 3D | Same as above but may include stance-specific categories |

Each move's `type` field in its character JSON must exactly match one of these tab strings.

## Visibility

All games in `games.ts` are visible in the app by default. Games with `isDraft: true` are hidden from the game select grid. Remove the flag or the entry entirely to control visibility.

## Current Scale

~200+ games registered, spanning arcade classics to modern titles. The file is ~297KB (including inline system mechanics) — the single largest contributor to the main JS bundle.
