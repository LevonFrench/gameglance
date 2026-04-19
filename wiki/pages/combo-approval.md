# Combo Approval System

The Combo Approval System is an internal tool for curating scraped combo data before it enters the production app.

## Architecture

It's a **separate Vite entry point**, completely isolated from the main app:

| File | Purpose |
|------|---------|
| `approval.html` | HTML entry point |
| `src/approval.tsx` | React root |
| `src/ApprovalApp.tsx` | Router between game/char/combo views |
| `src/ApprovalGameSelectView.tsx` | Pick a game with staged data |
| `src/ApprovalCharSelectView.tsx` | Pick a character |
| `src/ApprovalComboListView.tsx` | Review and approve/reject combos |

Access: `http://localhost:5173/approval.html` — not linked from the main app.

## Workflow

1. **Scrape** → Python scripts dump raw combos to `public/data/scraped_combos/{game}/{char}_supercombo.json`
2. **Review** → Open approval UI, scroll through combos, approve/reject each one
3. **Export** → Approved combos exported as clean JSON for injection into character data files
4. **Inject** → Approved data merged into `public/data/{game}/{char}.json`

## Data Flow

```
scraped_combos/*.json → ApprovalComboListView → approved_combos.json → character.json
```

Staged but unapproved data also lives in `public/data/staging_quarantine.json`. Rejected data goes to `public/data/graveyard.json`.
