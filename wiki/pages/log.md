---
title: "Operation Log"
type: log
created: 2026-04-15
updated: 2026-04-15
---

# Operation Log

Chronological record of all wiki operations. Each entry follows the format:
`## [YYYY-MM-DD] operation | Subject`

Parse with: `grep "^## \[" wiki/pages/log.md | tail -10`

---

## [2026-04-15] init | Wiki Created

**Operation**: Full wiki initialization from existing GameGlance app data.

**What happened**:
- Created wiki infrastructure: SCHEMA.md, index.md, log.md, overview.md
- Auto-generated 17 game pages from `games.ts`
- Auto-generated select character seed pages from JSON move data
- Established page format conventions, tag vocabulary, and cross-referencing rules

**Pages created**: ~25+ (see index.md for full catalog)

**Next steps**: Ingest raw sources to flesh out strategy, matchup, and meta content.

## [2026-04-15] ingest | faqs/sfa_movelists.json

**Operation**: Parsed character move lists for SFA1, SFA2, SFA3 from JSON file.

**What happened**:
- Extracted JSON entries for 10 characters split across 3 games.
- Wrote raw character data to `public/data/sfa1/`, `public/data/sfa2/`, `public/data/sfa3/`.
- Updated existing character wiki pages with references correctly.
- Generated new character pages for Charlie, Cody, Guile, Karin, Rolento, Sakura.
- Generated game pages for SFA1 and SFA2 (`sfa1.md`, `sfa2.md`).

## [2026-04-15] ingest | faqs/capcom_crossover_movelists.json

**Operation**: Parsed character move lists for crossover games from JSON file.

**What happened**:
- Extracted JSON entries for characters across Vampire Savior 2, Vampire Hunter 2, Marvel Super Heroes, X-Men: Children of the Atom, X-Men vs. Street Fighter, Marvel Super Heroes vs. Street Fighter.
- Wrote raw character data to `public/data/` under corresponding game slugs (`vampiresavior2`, `vampirehunter2`, `msh`, `cota`, `xmvsf`, `mshvsf`).
- Generated new game pages and updated existing character core wiki pages (like `ryu.md`, `ken.md`).
- Established base entries for Marvel and X-Men crossover titles in the wiki.

## [2026-04-15] ingest | faqs/sf3_series_movelists.json & faqs/sf_cps2_movelists.json

**Operation**: Parsed character move lists for SF3 series and CPS2 generation SF titles.

**What happened**:
- Extracted JSON entries for characters from SF3: New Generation, SF3: 2nd Impact, SF3: 3rd Strike, Super Street Fighter II, and Hyper Street Fighter II.
- Wrote raw character data to `public/data/` under corresponding game slugs (`sf31`, `sf32i`, `sf33s`, `ssf2`, `hypersf2`).
- Generated new game pages for sf31, sf32i, sf33s, ssf2.
- Updated existing character wiki pages and created new ones (e.g., Alex, Hugo, Urien, Makoto, Q).

## [2026-04-15] lint | Wiki Refresh Architecture Alignment

**Operation**: Refreshed master LLM Wiki structurally to match the new registry data.

**What happened**:
- Relocated nested directories of fetched strategy guides from `faqs/gfaqs` to canonical `wiki/raw/guides/`.
- Programmatically parsed `src/games.ts` matching 1179 fighting games.
- Auto-generated placeholder markdown shell files locally in `wiki/pages/games/` for any missing game page.
- Entirely rebuilt `wiki/pages/index.md` rendering the synchronized table list mapping the 1179 titles.
