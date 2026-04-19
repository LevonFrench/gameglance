# Wiki Schema

Conventions for the GameGlance wiki.

## Directory Structure

```
wiki/
├── SCHEMA.md              # This file
├── pages/
│   ├── index.md           # Table of contents
│   ├── architecture.md    # App architecture and component map
│   ├── data-pipeline.md   # Source → JSON → app data flow
│   ├── combo-approval.md  # Combo curation system
│   ├── glyph-system.md    # Controller glyph rendering
│   └── game-registry.md   # games.ts structure and conventions
└── data_sourcing/
    └── combo_and_faq_guidelines.md  # External source strategies
```

## Conventions

- **One page per topic.** No mega-docs. Each page should be self-contained.
- **Use markdown tables** for structured data (component lists, controller mappings).
- **Use fenced code blocks** for schemas, file paths, and code examples.
- **Link between pages** using relative markdown links: `[page](page.md)`.
- **Keep pages current.** When you change the app, update the relevant wiki page.

## When to Add a Page

Add a wiki page when:
- A new system or subsystem is added to the app
- A non-obvious architectural decision is made
- A data pipeline step is created or changed
- A convention is established that future contributors need to know

Don't add a page for:
- Individual game or character data (that's `public/data/`)
- Bug fixes or minor tweaks (that's git history)
- Auto-generated reports (those are ephemeral)
