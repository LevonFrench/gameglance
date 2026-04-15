# Raw Sources

This directory contains your curated collection of source materials.
The LLM reads from this directory but **never modifies** it. These are your sources of truth.

## How to Add Sources

1. Save the source file (markdown, HTML, PDF, text) into the appropriate subdirectory.
2. Tell the LLM to ingest it: *"Ingest raw/guides/my-new-article.md"*
3. The LLM will read it, discuss key takeaways, and update the wiki.

## Subdirectories

| Directory       | What Goes Here                                          |
|-----------------|---------------------------------------------------------|
| `frame-data/`   | Scraped frame data pages, data tables, spreadsheets     |
| `guides/`       | Strategy guides, character guides, matchup articles     |
| `patch-notes/`  | Official patch notes, balance change announcements      |
| `videos/`       | Transcripts or notes from tutorial/analysis videos      |
| `community/`    | Forum posts, Discord threads, Reddit discussions        |
| `personal/`     | Your own match notes, lab sessions, observations        |

## Tips

- **Obsidian Web Clipper** is great for converting web articles to markdown.
- Name files descriptively: `sf6-ken-season2-changes.md`, not `source1.md`.
- Include the date and original URL in the file when possible.
- Images: save them alongside the source or in a shared `assets/` folder.
