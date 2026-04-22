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
  developer: 'Capcom',             // Studio / developer
  releaseYear: 2023,               // For date sorting
  platform: 'PS4, PS5, PC, Xbox',  // Platform icons
  rosterCount: 25,                 // Total character count
  notationSystem: 'numpad',        // 'numpad', 'traditional', 'tekken'
  tags: ['Modern', '2D'],          // Metadata for filtering
  searchAliases: ['sf6'],          // Short names for search
  characters: [
    { id: 'ryu', name: 'Ryu', moveCount: 45 }
  ],
  systemMechanics: [
    { name: 'Drive System', description: 'Governs Drive Impact, Drive Rush, Drive Reversal, and Drive Parry.', input: 'DI: HP+HK' }
  ],
  links: [
    { title: 'SuperCombo Wiki', url: 'https://wiki.supercombo.gg/' }
  ],
  stores: [
    { platform: 'Steam', url: 'https://store.steampowered.com/...' }
  ],
  tabs: ['Special Moves', 'Super Arts', 'Throws', 'Unique Attacks', 'Normal Moves', 'Common Moves']
}
```

## Field Coverage (as of April 2026)

| Field | Coverage | Notes |
|-------|----------|-------|
| `developer` | **100%** | All 210 games |
| `systemMechanics` | **100%** | All 210 games |
| `releaseYear` | **97%** | 6 missing |
| `characters` | **99%** | 2 missing |
| `stores` | 25% | Many retro games lack digital stores — deprioritized |
| `searchAliases` | 44% | Only needed for popular games with common abbreviations |

## Dynamic Categories

The Game Select screen dynamically computes categories (Street Fighter, Guilty Gear, Mortal Kombat, etc.) based on game names, prefixes, and tags using the `computeGameCategories` logic in `GameSelectView.tsx`.

## Adding a New Game

1. Create directory: `public/data/{game-id}/`
2. Add character JSON files: `public/data/{game-id}/{character-id}.json`
3. Add game definition to `src/games.ts` with all required fields
4. Run `python scripts/list_drafts.py` to verify health report
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
| Anime (ASW) | Special Moves, Super Combos, Command Throws, Normal Throws, Unique Attacks, Normal Moves, Common Moves |
| 3D (Tekken/SC) | Same as above but may include stance-specific categories |

Each move's `type` field in its character JSON must exactly match one of these tab strings.

## Utility Scripts

| Script | Purpose |
|--------|---------|
| `scripts/list_drafts.py` | Generate full registry health report → `DRAFT_GAMES.md` |
| `scripts/missing_mech.py` | List games missing system mechanics |
| `scripts/missing_dev.py` | List games missing developer field |
| `scripts/audit_sf.py` | Audit all Street Fighter entries |
| `scripts/audit_kof.py` | Audit all KOF entries |
| `scripts/dedup.py` | Remove duplicate game entries |
| `scripts/fix_commas.py` | Fix stray comma corruption in games.ts |
| `scripts/remove_game.py` | Remove a game from registry + filesystem |

## Current Scale

210 games registered, spanning arcade classics to modern titles. The file is ~540KB (including inline system mechanics) — the single largest contributor to the main JS bundle.
