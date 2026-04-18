# Data Sourcing & Ingestion Guidelines
*For Game Systems, FAQs, and Combos*

When scraping or manually transcribing data for GameGlance, we utilize three major community wikis alongside internal game resources to populate the `system.json` and character-specific `combosList`.

## Data Sources

### 1. In-Game Trials (Primary Source)
- **Target Games**: Modern fighters with built-in combo trials (Tekken 8, SF6, DBFZ, MK1, Strive).
- **Data Extracted**: Official combo routes and difficulty/tier mapping (e.g., "Intermediate 3").
- **Priority**: Always ingest these first. They provide a canonical baseline of what the developers expect players to know before layering in community-optimized max-damage routes.

### 2. SuperCombo (Classic 2D Focus)
- **Target Games**: Street Fighter (Classic), Capcom Vs. series, SNK classics.
- **Data Extracted**: 
  - **Mechanics**: Isms (SFA3), Grooves (CvS2), system-level quirks (e.g., Roll cancels).
  - **Combos**: Look for "Bread and Butter" (BnB) sections. Avoid highly situational corner-only resets unless noted.

### 3. Dustloop (Anime & Airdashers)
- **Target Games**: Guilty Gear, BlazBlue, Under Night, Melty Blood, DBFZ.
- **Data Extracted**:
  - **Mechanics**: Roman Cancels, Burst, Tension/Heat systems.
  - **Combos**: Dustloop combo routing is heavily structured using Numpad Notation. Look for combo tables and extract the route exactly as written.

### 4. FAT - Frame Advantage Tool (Modern Frame Data)
- **Target Games**: SFV, SF6.
- **Data Extracted**:
  - **Mechanics**: Deep, specific frame data quirks and modern SF systems like Drive Impact, Drive Parry, and Punish Counters.
  - **Combos**: FAT usually has highly optimized, mathematically verified punish routes.

## Ingestion Schema: `system.json`

Every supported game must eventually have a `system.json` located in `public/data/<game_id>/system.json` that follows this schema:

```json
{
  "gameId": "street-fighter-6",
  "buttons": [
    { "id": "LP", "name": "Light Punch", "description": "Quickest attack." }
  ],
  "mechanics": [
    {
      "name": "Drive Impact",
      "input": "HP+HK",
      "description": "A powerful strike that absorbs incoming attacks."
    }
  ],
  "faqs": [
    {
      "question": "What is Burnout?",
      "answer": "A state where your Drive Gauge is empty, preventing the use of Drive mechanics and causing chip damage on block."
    }
  ]
}
```

## SuperCombo Scraper Strategies

SuperCombo is heavily protected by Cloudflare. A standard `requests` script will fail with a "Making sure you're not a bot!" challenge.
- **Tools**: Use `playwright` (sync or async) running a full Chromium browser (`headless=False` often bypasses better).
- **DOM Structure**: Combos are stored in `<table class="wikitable">`.
- **Visual Glyphs**: SuperCombo uses images for inputs. You **must** iterate over `td` child nodes and extract `img.alt` tags or use `.textContent` for text nodes to successfully transcribe visual routes into strings (e.g. converting a fist image to 'P').

## Mortal Kombat 1 (MK1) Scraper Strategies

MK1 utilizes a 4-button layout (`1, 2, 3, 4`) and a "Dial-A-Combo" string system, paired with the new **Kameo** assist mechanic.
- **Kameo Combos**: When scraping resources like `mk1kombo.kagewebsite.com`, do NOT discard combos containing Kameo calls (`K`, `R1`, or `Kameo`). Instead, flag them in the scraped JSON (e.g., `"is_kameo": true`). In the future UI, we will display these in a dedicated section categorized by the Kameo character used, below the normal solo combos.
- **Data Source**: Custom scrapers (via Playwright) traversing target sites. Make sure to capture the standard MK notation without converting it.

## Approval Workflow

1. Data is scraped into a raw JSON format array `[{"game": "...", "character": "...", "route": "...", "damage": "..."}]` and saved to `public/data/scraped_combos/<game>/<char>.json`.
2. The ingestion script `scripts/combo_approver.py` is run against the raw file.
3. Every single combo must be hand-approved (`y/n/e`) before it is permanently appended to the character's `combosList` in `public/data/<game>/<char>.json`.
