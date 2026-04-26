# Data Pipeline

How fighting game move data gets from external sources into the app.

## Overview

```
Source (wiki/FAQ/in-game) → Python scraper → raw JSON → approval UI → character JSON → app
```

## 1. Scraping

Python scripts in `scripts/scrapers/` pull raw data from community wikis.

| Source | Focus | Script Pattern |
|--------|-------|----------------|
| SuperCombo | Classic 2D (SF, CvS, SNK) | `scrape_supercombo_api.py` |
| Dustloop | Anime fighters (GG, BB, DBFZ) | `scrape_dustloop_*.cjs` |
| In-game trials | Modern titles (SF6, T8, MK1) | Manual transcription |

**SuperCombo caveat:** Cloudflare-protected. Standard scraping requires Playwright with `headless=False`. Alternatively, direct raw Wikitext fetching (`scripts/repair_mvc.py`) can bypass some protection by hitting the `api.php` endpoints directly and dumping to `wiki/raw/supercombo_dump/` before parsing.

## 2. Staging

Scraped data lands in `public/data/staging_quarantine.json` — a flat array of move objects tagged with `gameId` and `characterId`. This is a holding pen, not production data.

A secondary `public/data/graveyard.json` holds rejected/duplicate entries.

## 3. Approval

The **Combo Approval System** is a separate Vite entry point (`approval.html` → `src/approval.tsx`).

- Reads staged data via `import.meta.glob`
- Displays combos for hand-curation (approve/reject/edit)
- Exports approved combos to the character's production JSON

Normal users cannot access it — requires explicit URL navigation.

## 4. Character JSON Schema

Each character file lives at `public/data/{gameId}/{characterId}.json`:

```json
{
  "character": "Ken",
  "movesList": [
    {
      "id": "shoryuken",
      "name": "Shoryuken",
      "type": "Special Moves",
      "inputs": ["forward", "down", "down-forward", "P"],
      "damage": "120",
      "notes": "Invincible on startup"
    }
  ]
}
```

Key fields:
- `type` must match one of the game's `tabs` array in `games.ts`
- `inputs` is a string array tokenized by `GlyphSequence.tsx`
- `id` is auto-generated from the move name (slugified)

## 5. Registry (`games.ts`)

Every game must be registered in `src/games.ts` with:
- `id` — URL-safe slug matching the `public/data/` directory name
- `characters[]` — array of `{ id, name, moveCount }`
- `tabs[]` — ordered list of move categories
- `mameRomset` — (optional) for Fightcade sync matching

## 6. Reporting

`scripts/master_report.py` crawls `games.ts` and `public/data/` to generate coverage reports (move counts, missing characters, underpopulated entries).

## Gotchas

- **UTF-8 BOM Corruption** — JSON exports from wikis or game engines often carry a hidden Byte Order Mark (`U+FEFF`). This causes `JSON.parse()` to throw hard syntax errors in the app, resulting in "Data not found" UI states. Run `node scripts/strip_bom.js` to recursively purge BOMs from the workspace.
- **Never regex-inject into `games.ts`** — use `scripts/safe_inject.py` which splits at game object boundaries to prevent cross-game contamination.
- **3D fighters** (Tekken, VF, DOA) have stance systems that don't fit cleanly into the flat `inputs[]` array. Future work needed.
- **MK1 Kameo combos** should be flagged with `"is_kameo": true` during scraping, not discarded.
