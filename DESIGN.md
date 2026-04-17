# Design System — GameGlance

## Product Context
- **What this is:** A high-speed, highly-stylized second-screen companion app for fighting games (like a Pokedex for moves).
- **Who it's for:** Fighting game players (FGC) who need to look up moves, practice playlists, and discover meta tech while holding an arcade stick or controller.
- **Space/industry:** Esports utilities, companion apps (peers: FAT, OP.GG, Dustloop).
- **Project type:** Specialized web app / mobile-friendly dashboard.

## Aesthetic Direction
- **Direction:** Precision Utility / Arcade Modern — Fast, data-dense, and highly structured, but wrapped in a premium, nostalgic hardware shell.
- **Decoration level:** Minimal — The controller glyphs, directional inputs, and authentic hardware colors *are* the decoration. The UI itself stays out of the way.
- **Mood:** Focused, authentic, and undeniably "fighting game." Like a premium arcade cabinet operating system.

## Typography
- **Display/Hero:** `Outfit` (Bold/Black) — Clean, modern, highly legible on both massive displays (Stadium mode) and tight mobile headers.
- **Data/Inputs:** `JetBrains Mono` (Bold) — Monospaced precision for technical data. Essential for ensuring combo notations align perfectly.
- **Body/UI:** `Inter` (Medium/SemiBold) — Maximum density and neutral legibility for small phone screens and list items.

## Color
- **Approach:** Hardware-Semantic on a Dark Slate Base. Instead of using generic primary/secondary colors, interaction colors are directly tied to the native console/arcade cabinet being played.
- **Base/Surfaces:**
  - Background: `#121218` (Deep Slate)
  - Cards: `rgba(22, 22, 34, 0.75)` (Glassmorphism over Slate)
  - Borders: `rgba(255, 255, 255, 0.08)`
- **Accents (Hardware Examples):**
  - **SNES/SFC:** Purple (`#8162b7` / `#b9a3e3`), SFC Yellow (`#ffcc00`)
  - **Neo Geo MVS:** Red (`#ff003c`), Blue (`#0066ff`)
  - **Sega Genesis:** Red (`#d92b38`), Black (`#222`)

## Layout & Spacing
- **Layout Approach:** Mobile-First App Grid with sticky navigation headers (Home, Back, Game Name, Char Name).
- **Move Discovery:** Fast, swipeable filter chips (e.g., "All Moves", "Top Meta", "S-Tier Anti-Air") for sorting moves without friction. *Note: Combo/difficulty filters are deferred until later phases.*
- **Notation Toggles:** Global/local toggles to switch between Numpad Notation (e.g., `236P`) and Directional Arrows (e.g., `↓↘→P`).
- **Base Unit:** Compact but Tappable. 
- **Density:** Tight enough to fit multiple moves on a mobile screen, but every interactive element strictly enforces a minimum **48x48dp touch target** to prevent misclicks on touch screens.

## Motion
- **Approach:** Minimal-Functional.
- **Details:** Only transitions that aid comprehension (e.g., quick `fadeInUp` for list items, or smooth hardware-accelerated drawer slides). No gratuitous, slow animations. Performance and snappiness are the priority.

## Safe Choices vs. Creative Risks
- **SAFE:** Dark mode default (prevents eye strain between matches), Inter body text, and standard top-app-bar navigation structure (Home/Back/Title) for immediate familiarity.
- **RISK 1: Opinionated Discovery:** Filtering by Tier Lists and Meta applications rather than just alphabetical lists. Shifts the app from a passive wiki to an active coaching tool.
- **RISK 2: Aggressive Visual Notation:** Bypassing text descriptions entirely in favor of highly-styled, hardware-authentic visual glyphs and toggleable arrows/numpads. Faster visual parsing mid-match.
