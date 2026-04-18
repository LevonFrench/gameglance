---
title: "Combo Approval System"
type: concept
tags: [architecture, pipeline, combo]
created: 2026-04-17
updated: 2026-04-17
sources: 0
---

# Combo Approval System

The **Combo Approval System** is an internal pipeline tool built to manage and curate raw fighting game combos scraped from the web (like SuperCombo and other sources) before they are fully ingested into the `GameGlance` public data model.

## Architecture

To prevent polluting the main React application (`src/App.tsx`) with unfinished helper tools or secret entry points, the Approval System is structured as a **completely isolated Vite sub-application**.

- **Entry Point:** `approval.html`
- **React Root:** `src/approval.tsx`
- **Component:** `src/ApprovalApp.tsx`

Normal users cannot access this tool. It must be explicitly navigated to via the URL (e.g., `http://localhost:5173/approval.html`).

## Pipeline Workflow

1. **Scraping Data:**
   Python scrapers (located in `scripts/scrapers/`) pull raw combo strings, damages, and notes from wikis.
   These files are dumped into `public/data/scraped_combos/[game_id]/[character]_supercombo.json`.
   *Note: This data structure is distinct from the primary GameGlance `Move` schema.*

2. **Curation (The Approval App):**
   A helper opens `approval.html`.
   Vite dynamically detects (`import.meta.glob`) which games and characters have `.json` files waiting in the `scraped_combos` directory.
   The helper scrolls through the combos, checks off the "good" ones, and clicks **Export Approved**.
   This generates a clean `[character]_approved_combos.json` file on their local machine.

3. **Ingestion:**
   The curated `approved_combos.json` files are sent back to the core maintainer to be injected into the master character JSON definitions in `public/data/[game_id]/[character].json`.
