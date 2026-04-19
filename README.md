<div align="center">
  <img src="https://via.placeholder.com/150" alt="GameGlance Logo" width="120" height="120" />
  <h1>GameGlance</h1>
  <p><strong>A highly-stylized, second-screen fighting game companion app.</strong></p>
</div>

Browse move lists, build practice playlists, and drill combos for iconic fighting games across fighting game history—from *Street Fighter 6*, *Guilty Gear -Strive-*, and *Dragon Ball FighterZ* to *Marvel vs. Capcom 2*, *Darkstalkers*, and *Tatsunoko vs. Capcom*. 

GameGlance is designed with a heavy focus on **hardware authenticity**, featuring themes, styling, and controller glyphs matching classic arcade cabinets and home consoles.

---

## ✨ Features

- **Massive Game Roster** — Support for modern titans (SF6, T8, MK1) and classic legends (CvS2, SFα3, Pocket Fighter, Project Justice, Plasma Sword, and more).
- **Hardware-Authentic Styling** — A premium, glassmorphic UI that maps exact console palettes (SNES, Super Famicom, Sega Genesis) and arcade cabinet setups (CPS2, Neo Geo MVS) directly to the interface.
- **Dynamic Controller Glyphs** — The input glyphs automatically adapt to the game's native hardware (e.g., Neo Geo 4-button arc, Capcom 6-button layout) while letting you seamlessly switch to PlayStation, Xbox, or Switch notation.
- **Practice Playlists** — Pick the specific moves or combos you want to drill, isolate them in a dedicated practice view, and keep them on your second screen.
- **Developer & Favorites Filtering** — A highly responsive drawer system allows you to instantly slice the game roster by developer (Capcom, SNK, Arc System Works) or filter down to your personal favorites.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Vanilla CSS (Custom Properties, Glassmorphism, CSS Pseudo-Elements for hardware rendering)
- **Typography**: Outfit + JetBrains Mono (Google Fonts)
- **Data**: Static JSON-driven move lists for ultra-fast loading

## 📁 Architecture Highlights

*   **`index.css`**: The core design system. Houses all custom themes (`.theme-snes`, `.theme-cps2`, `.theme-mvs`, etc.) using advanced gradients and box-shadows to recreate physical hardware aesthetics.
*   **`src/glyphMap.ts`**: The engine behind the controller-aware glyphs. Translates generic inputs (LP, MP, HK) into hardware-specific buttons (PlayStation 'X', Genesis 'A', SNES Purple 'Y', etc.).
*   **`src/GameGlanceView.tsx`**: The main practice mode screen, designed for maximum legibility on a second monitor while you have your hands on a fight stick.

---

<div align="center">
  <sub>Built for the FGC. Ready to Fight.</sub>
</div>
