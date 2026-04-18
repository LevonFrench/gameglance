# Data Health & Junk Report

Deep comparison between `src/games.ts` (Registry) and `public/data/` (File System).

## 1. Untracked Game Folders (0)
*Folders in `public/data/` that are entirely missing from `src/games.ts`.*
> No untracked game folders found.

## 2. Orphaned / Junk JSON Files (1)
*Files in `public/data/` that have no matching character entry in `src/games.ts`.*
- melty-blood-type-lumina---wikipedia/email-rumor-full-roster-of-marvel-vs-capcom-3-fighters-revealed-gmail.json

## 3. Missing JSON Files (22)
*Characters registered in `src/games.ts` but missing their corresponding `.json` file.*
- chaos-code-new-sign-of-catastrophe/hikaru.json
- dragon-ball-z-budokai-tenkaichi-3/early.json
- guilty-gear-xrd--sign-/axl-low.json
- soulcalibur-ii/seong-mi-na.json
- soulcalibur-iii/seong-mi-na.json
- soulcalibur-iii/yun-seong.json
- super-smash-bros-brawl/bowser.json
- super-smash-bros-melee/bowser.json
- super-smash-bros-ultimate/all-previous-banjo-kazooie.json
- super-smash-bros-ultimate/pac-man.json
- super-smash-bros/captain-falcon.json
- tekken-8/alisa.json
- tekken-8/azucena.json
- tekken-8/lars.json
- tekken-8/leo.json
- tmnt-tournament-fighters-genesis/donatello.json
- tmnt-tournament-fighters-genesis/leonardo.json
- tmnt-tournament-fighters-genesis/michelangelo.json
- tmnt-tournament-fighters-genesis/raphael.json
- tmnt-tournament-fighters-snes/leonardo.json
- tmnt-tournament-fighters-snes/michelangelo.json
- tmnt-tournament-fighters-snes/raphael.json

## 4. Malformed JSON / Schema Issues (0)
*Files that either failed to parse or are missing standard schemas like `movesList`.*
> All JSON files are valid and well-formed.

