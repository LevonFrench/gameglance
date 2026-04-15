---
title: "GameGlance Wiki — Overview"
type: overview
tags: [meta]
created: 2026-04-15
updated: 2026-04-15
---

# GameGlance Wiki — Overview

A persistent, compounding knowledge base for fighting games. Built alongside the
[GameGlance](../README.md) companion app.

## Coverage

The wiki currently tracks **multiple games** spanning decades of fighting game history,
from classic 2D fighters to modern 3D titles.

### Expanded Coverage

Following the massive 2024–2026 data ingest, the wiki now includes coverage for over **100+ titles**, spanning major and niche franchises:

- **Street Fighter Series** (SF2, SF3, SF4, SF5, SF6, Alpha, EX)
- **SNK Mainlines** (Fatal Fury, King of Fighters '94–XV, Samurai Shodown, Art of Fighting)
- **Mortal Kombat** (Classic 2D Era, 3D Era, NRS Era up to MK1 2024 Update)
- **3D Fighters** (Tekken, Virtua Fighter, Dead or Alive, Bloody Roar, Toshinden)
- **Anime Fighters** (Guilty Gear, BlazBlue, Persona 4 Arena, Dragon Ball FighterZ, DNF Duel, Granblue)
- **Crossover/Versus** (Marvel vs Capcom series, Capcom vs SNK, Tatsunoko, SVC Chaos)
- **Classics & Gems** (Darkstalkers, Cyberbots, Fighting Vipers, Weaponlord, Waku Waku 7, etc.)

## Cross-Game Characters

Many characters appear across multiple games. The wiki tracks their evolution:

- **Ryu** — SF2, SFα3, SF6, CvS1, CvS2, Pocket Fighter, CFJ
- **Ken** — SF2, SFα3, SF6, CvS2, Pocket Fighter, CFJ, CotW (as guest)
- **Chun-Li** — SF2, SFα3, SF6, CvS1, CvS2, Pocket Fighter, CotW (as guest)
- **Terry Bogard** — CotW, CvS2, CvS1, SF6 (as guest)
- **Morrigan** — Darkstalkers, Night Warriors, Vampire Savior, CvS1, CvS2, Pocket Fighter, CFJ
- **Akuma** — SF2, SFα3, SF6, CvS1, CvS2, CFJ

## State of the Wiki

The wiki was initialized on 2026-04-15 with auto-generated pages from the app's
existing game data. Current state:

- **Game pages**: ✅ All core games have pages with roster and structure info
- **Character pages**: 🟡 Seed pages for key cross-game characters
- **Mechanic pages**: ⬜ Awaiting ingest of strategy sources
- **Matchup pages**: ⬜ Awaiting analysis
- **Archetype pages**: ⬜ Awaiting synthesis
- **Meta pages**: ⬜ Awaiting tier list / meta sources

## How to Grow the Wiki

1. **Drop sources** into `wiki/raw/` and ask the LLM to ingest them
2. **Ask questions** — good answers get filed as new pages
3. **Run lint** periodically to find gaps and contradictions
4. **Log lab sessions** in `wiki/pages/journal/` to track personal progress

See [[../SCHEMA]] for full conventions and workflows.
