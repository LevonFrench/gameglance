# GameGlance Data Ingestion Pipeline

The data ingestion system for GameGlance has been overhauled to handle complex schemas, nested arrays, and various edge cases when bringing in legacy movelist documents (such as Word `.docx` or raw JSON payloads).

## 1. Extraction phase
When raw `.docx` files containing JSON payloads are added to the `faqs/` directory, they must be safely extracted.
- **NEVER** use greedy regex or simple text parsing to inject data into the `games.ts` registry directly during extraction.
- The `parse_new_faqs.py` script automatically scans the `faqs/` directory, extracts the JSON block from inside the document, and converts it to a raw `.json` file.
- The original `.docx` file is then moved or deleted, and the new `.json` file is saved to `faqs/old/`.

## 2. Normalization Phase
Legacy movelists often have differing schemas. Some use `moves`, some use `move_list`, and others use different nested structures for `input` vs `inputs`.
- The script `scripts/normalize_extracted_json.py` traverses all character data inside `public/data/*/*.json` and guarantees the standard schema.
- **Canonical Schema:** Every character file MUST contain a `movesList` array. Each move within the array MUST be an object with `name`, `type`, and an `inputs` string array.

## 3. Registry Injection Phase
To prevent registry corruption (e.g., characters from *Samurai Shodown* bleeding into *Battle Monsters* or *Street Fighter*), we strictly adhere to AST parsing or strict bounded regex.
- **DO NOT** use `re.sub()` with non-greedy `.*?` over the entirety of `src/games.ts` to append characters to games. If a game's array is unexpectedly formatted or empty, the regex will jump game boundaries and pollute the registry.
- **Use the dedicated injection tool:** `scripts/safe_inject.py`. This script splits the TypeScript file explicitly at game object boundaries, ensuring characters are ONLY appended to the exact game they belong to.
- For entirely new games, manual registry blocks should be created in `src/games.ts` before injection, or an AST-level generator should be used.

## 4. Reporting Phase
After the registry and payloads are updated, run `python scripts/master_report.py`.
- This script crawls `src/games.ts` using safe bounding blocks.
- It verifies the `movesList` length for every registered character payload.
- It regenerates `unpopulated_characters.md` and `underpopulated_clean.md`, and updates the wiki accordingly.

> **Caution for 3D Games:** 3D fighters (e.g., *Tekken*, *SoulCalibur*) often have complex multi-stance structures or 10-hit combos that push the limits of our standard string array `inputs`. In the future, the ingestion system will need to support nested `stance` arrays or a revised visual grammar for the `movesList` renderer.
