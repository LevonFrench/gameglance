# GameGlance Wiki — Schema

This document defines the structure, conventions, and workflows for the GameGlance wiki.
It is the LLM's operating manual. The LLM reads this before any wiki operation.

---

## Purpose

GameGlance is a fighting game companion app covering 17+ games with 300+ characters.
This wiki is a persistent, compounding knowledge base that sits between the user and
the raw data. It accumulates cross-references, strategy insights, matchup analysis,
character studies, and meta observations over time — knowledge that no single JSON
move list captures.

---

## Directory Structure

```
wiki/
├── SCHEMA.md                  # this file — conventions and workflows
├── raw/                       # immutable source materials (user-curated)
│   ├── frame-data/            # scraped HTML, PDFs, or articles
│   ├── guides/                # strategy guides, matchup articles
│   ├── patch-notes/           # game update / balance change notes
│   ├── videos/                # transcripts or notes from videos
│   ├── community/             # forum posts, Discord threads, Reddit
│   └── personal/              # user's own match notes, lab sessions
│
├── pages/                     # LLM-generated wiki pages (markdown)
│   ├── index.md               # master catalog of all pages
│   ├── log.md                 # chronological operation log
│   ├── overview.md            # high-level synthesis
│   ├── games/                 # one page per game
│   ├── characters/            # one page per character (cross-game)
│   ├── mechanics/             # game-system concepts
│   ├── matchups/              # character vs character analysis
│   ├── archetypes/            # cross-game archetypes
│   ├── comparisons/           # cross-game analysis
│   ├── meta/                  # tier lists, meta evolution
│   └── journal/               # personal training log pages
```

---

## Page Format

Every wiki page uses YAML frontmatter + markdown body.

### Frontmatter Template

```yaml
---
title: "Page Title"
type: game | character | mechanic | matchup | archetype | comparison | meta | journal | source-summary
tags: [sf6, ken, shoto, frame-data]
games: [sf6, cvs2]              # which games this page relates to
created: 2026-04-15
updated: 2026-04-15
sources: 0                      # number of raw sources referenced
---
```

### Body Conventions

- Use `##` for major sections, `###` for subsections.
- Use wiki-links: `[[page-name]]` (Obsidian-compatible). Link to the filename without extension.
  - Example: `[[ken]]` links to `characters/ken.md`
  - Example: `[[sf6]]` links to `games/sf6.md`
  - Example: `[[drive-system]]` links to `mechanics/drive-system.md`
- When referencing raw data, cite the JSON path: `(data: sf6/ken.json)`.
- When referencing raw sources, cite the file: `(source: raw/guides/sf6-ken-guide.md)`.
- Use tables for frame data comparisons, tier placements, etc.
- Use blockquotes `>` for direct quotes from sources.
- Use `> [!NOTE]` / `> [!WARNING]` for editorial notes and contradictions.

### Naming Conventions

| Category    | Pattern                        | Example                        |
|-------------|--------------------------------|--------------------------------|
| Games       | `{game-id}.md`                 | `sf6.md`, `cotw.md`            |
| Characters  | `{name-slug}.md`               | `ken.md`, `terry-bogard.md`    |
| Mechanics   | `{concept-slug}.md`            | `drive-system.md`, `okizeme.md`|
| Matchups    | `{game}-{char1}-vs-{char2}.md` | `sf6-ken-vs-ryu.md`            |
| Archetypes  | `{archetype-slug}.md`          | `shoto.md`, `grappler.md`     |
| Comparisons | `{topic-slug}.md`              | `shoryuken-across-games.md`    |
| Meta        | `{game}-{topic}.md`            | `sf6-tier-list.md`             |
| Journal     | `{date}-{topic}.md`            | `2026-04-15-lab-session.md`    |

---

## Tag Vocabulary

Use these tags consistently. New tags can be added but should be documented here.

### Game Tags
`sf6`, `t8`, `mk1`, `cvs2`, `cvs1`, `cotw`, `cfj`, `sfa3`, `sf2`, `darkstalkers`,
`nightwarriors`, `vampiresavior`, `pocketfighter`, `projectjustice`, `plasmasword`,
`cyberbots`, `hypersf2`

### Category Tags
`frame-data`, `strategy`, `matchup`, `combo`, `mechanic`, `tier-list`, `patch-notes`,
`training`, `fundamentals`, `neutral`, `offense`, `defense`, `okizeme`, `anti-air`,
`punish`, `whiff-punish`, `mix-up`, `pressure`, `zoning`

### Archetype Tags
`shoto`, `grappler`, `zoner`, `rushdown`, `puppet`, `stance`, `charge`, `all-rounder`,
`mixup-heavy`, `setplay`

---

## Operations

### 1. Ingest

When the user adds a new source to `wiki/raw/`:

1. **Read** the source document fully.
2. **Discuss** key takeaways with the user.
3. **Write a source summary page** in the appropriate category under `wiki/pages/`.
4. **Update existing pages** that the new source touches:
   - Character pages: new moves, changed frame data, strategy insights
   - Game pages: meta shifts, mechanic clarifications
   - Mechanic pages: deeper understanding, edge cases
   - Matchup pages: new data points
   - Archetype pages: if the source changes how we think about an archetype
5. **Flag contradictions**: If new data conflicts with existing wiki claims, add a
   `> [!WARNING]` note on the affected page with both claims and their sources.
6. **Update `index.md`**: Add any new pages, update summaries if needed.
7. **Append to `log.md`**: Record what was ingested and what pages were touched.

### 2. Query

When the user asks a question:

1. **Read `index.md`** to find relevant pages.
2. **Read relevant pages** to gather context.
3. **Synthesize an answer** with citations to wiki pages and raw sources.
4. **Optionally file the answer** as a new wiki page if it represents durable knowledge
   (a comparison, an analysis, a connection worth preserving). Ask the user.
5. **Append to `log.md`**: Record the query and whether a page was created.

### 3. Lint

When the user asks for a wiki health-check:

1. **Orphan check**: Find pages with no inbound links from other pages.
2. **Contradiction scan**: Look for `[!WARNING]` blocks about conflicting data.
3. **Staleness check**: Find pages not updated in a long time relative to their game's
   patch cadence.
4. **Missing pages**: Find `[[wiki-links]]` that point to pages that don't exist yet.
5. **Coverage gaps**: Check if any games or characters in `games.ts` lack wiki pages.
6. **Cross-reference density**: Flag pages that should link to each other but don't.
7. **Suggest questions**: Based on gaps, suggest questions worth investigating.
8. **Append to `log.md`**: Record the lint pass and findings.

---

## Cross-Referencing Rules

The value of the wiki is in the connections. Follow these rules:

1. **Every character page** must link to all game pages where the character appears.
2. **Every game page** must link to its character pages and mechanic pages.
3. **Every mechanic page** must link to the game(s) it belongs to.
4. **When a move appears across games** (e.g., Shoryuken), note it and link to the
   comparison page.
5. **When characters share traits**, link to the relevant archetype page.
6. **Matchup pages** link to both character pages and the game page.

---

## Relationship to the App

The wiki exists alongside the GameGlance React app:

- **App data** lives in `public/data/{game}/{character}.json` — structured move lists.
- **Wiki pages** live in `wiki/pages/` — synthesis, strategy, cross-references.
- The wiki can reference app data: `(data: sf6/ken.json)`.
- The app data is a *source* for the wiki, but the wiki adds layers of analysis
  that don't belong in the app's data model.

---

## Evolution

This schema will evolve. As the wiki grows, update this document to:
- Add new page types or categories as needed
- Refine tag vocabulary based on usage
- Add new operations (e.g., "compare", "deep-dive", "what-if")
- Document any tooling (search, Dataview queries, scripts)
- Adjust conventions based on what works in practice

The user and LLM co-evolve this document over time.
