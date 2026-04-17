import sys

with open('src/index.css', 'a', encoding='utf-8') as f:
    f.write("""

/* =========================================
   HARDWARE & CONSOLE THEMES 
   ========================================= */

/* 1. SNES (North American) 
   Two-tone grey, Light Lavender / Dark Purple buttons
*/
[data-card-theme="snes"] button[id^="game-card-"],
[data-card-theme="snes"] button[id^="char-card-"],
[data-card-theme="snes"] div[id^="move-"] {
  background: 
    linear-gradient(to bottom, #d8d8e0 0%, #d8d8e0 60%, #b8b8c0 60%) !important;
  border: 2px solid #a8a8b0 !important;
  border-radius: 12px;
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.8), 0 8px 15px -3px rgba(0,0,0,0.15);
  color: #333 !important;
}

[data-card-theme="snes"] button[id^="game-card-"]::after,
[data-card-theme="snes"] button[id^="char-card-"]::after,
[data-card-theme="snes"] div[id^="move-"]::after {
  content: '';
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 44px;
  height: 44px;
  background-color: #d0d0d8;
  border-radius: 50%;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.2), 0 1px 2px rgba(255,255,255,0.9);
  background-image: 
    radial-gradient(circle at 14px 14px, #a0a0e0 4px, transparent 4px), /* Top-Left / Y / Lavender */
    radial-gradient(circle at 30px 14px, #a0a0e0 4px, transparent 4px), /* Top-Right / X / Lavender */
    radial-gradient(circle at 14px 30px, #503080 4px, transparent 4px), /* Bottom-Left / B / Purple */
    radial-gradient(circle at 30px 30px, #503080 4px, transparent 4px); /* Bottom-Right / A / Purple */
  transform: rotate(-45deg);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
}

[data-card-theme="snes"] button[id^="game-card-"]:hover::after,
[data-card-theme="snes"] button[id^="char-card-"]:hover::after,
[data-card-theme="snes"] div[id^="move-"]:hover::after {
  transform: rotate(-45deg) scale(1.1);
}

[data-card-theme="snes"] .tagline { color: #503080 !important; font-weight: 800; }
[data-card-theme="snes"] h2 { color: #333 !important; }

/* 2. SUPER FAMICOM (sfami)
   Rounded grey, Green/Blue/Yellow/Red
*/
[data-card-theme="sfami"] button[id^="game-card-"],
[data-card-theme="sfami"] button[id^="char-card-"],
[data-card-theme="sfami"] div[id^="move-"] {
  background: 
    linear-gradient(to bottom, #94949a 0%, #94949a 20%, transparent 20%) no-repeat,
    linear-gradient(145deg, #e4e4e8, #cfcfd5) !important;
  border: 2px solid #b0b0ba !important;
  border-radius: 16px;
  box-shadow: inset 0 3px 5px rgba(255,255,255,0.9), inset 0 -2px 5px rgba(0,0,0,0.1);
  color: #2d2d32 !important;
}

[data-card-theme="sfami"] button[id^="game-card-"]::before,
[data-card-theme="sfami"] button[id^="char-card-"]::before,
[data-card-theme="sfami"] div[id^="move-"]::before {
  content: '';
  position: absolute;
  top: -5%;
  left: 15%;
  right: 15%;
  height: 25%;
  background: #7a7a80;
  border-radius: 0 0 16px 16px;
  box-shadow: inset 0 -4px 8px rgba(0,0,0,0.4), 0 2px 2px rgba(255,255,255,0.3);
  z-index: 0;
}

[data-card-theme="sfami"] button[id^="game-card-"]::after,
[data-card-theme="sfami"] button[id^="char-card-"]::after,
[data-card-theme="sfami"] div[id^="move-"]::after {
  content: '';
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 44px;
  height: 44px;
  background-color: #2b2b30;
  border-radius: 50%;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.6), 0 2px 4px rgba(255,255,255,0.8);
  background-image: 
    radial-gradient(circle at 14px 14px, #00a650 4.5px, transparent 4.5px), /* Green */
    radial-gradient(circle at 30px 14px, #00599c 4.5px, transparent 4.5px), /* Blue */
    radial-gradient(circle at 14px 30px, #ffd100 4.5px, transparent 4.5px), /* Yellow */
    radial-gradient(circle at 30px 30px, #e3001b 4.5px, transparent 4.5px); /* Red */
  transform: rotate(-45deg);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
}

[data-card-theme="sfami"] button[id^="game-card-"]:hover::after,
[data-card-theme="sfami"] button[id^="char-card-"]:hover::after,
[data-card-theme="sfami"] div[id^="move-"]:hover::after {
  transform: rotate(-45deg) scale(1.1);
}

[data-card-theme="sfami"] .tagline { color: #e3001b !important; font-weight: 800; }
[data-card-theme="sfami"] h2 { color: #2d2d32 !important; }

/* 3. CPS2 / CPS2CAB (Capcom Arcade)
   Bright Green/Blue industrial board styling, 6-button layout
*/
[data-card-theme="cps2"] button[id^="game-card-"],
[data-card-theme="cps2"] button[id^="char-card-"],
[data-card-theme="cps2"] div[id^="move-"],
[data-card-theme="cps2cab"] button[id^="game-card-"],
[data-card-theme="cps2cab"] button[id^="char-card-"],
[data-card-theme="cps2cab"] div[id^="move-"] {
  background: 
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(145deg, #0f172a, #020617) !important;
  background-size: 10px 10px, 10px 10px, 100% 100%;
  border: 1px solid #1e293b !important;
  color: #f8fafc !important;
  box-shadow: inset 0 0 20px rgba(14, 165, 233, 0.1);
}

[data-card-theme="cps2"] button[id^="game-card-"]::after,
[data-card-theme="cps2cab"] button[id^="game-card-"]::after {
  content: '';
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 35px;
  /* 6 Arcade Buttons: P1, P2, P3 (Red, Yellow, Blue) and K1, K2, K3 */
  background-image: 
    radial-gradient(circle at 10px 10px, #ef4444 4px, transparent 4px),
    radial-gradient(circle at 25px 8px, #eab308 4px, transparent 4px),
    radial-gradient(circle at 40px 10px, #3b82f6 4px, transparent 4px),
    radial-gradient(circle at 10px 25px, #ef4444 4px, transparent 4px),
    radial-gradient(circle at 25px 23px, #eab308 4px, transparent 4px),
    radial-gradient(circle at 40px 25px, #3b82f6 4px, transparent 4px);
  background-color: rgba(255,255,255,0.03);
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  transform: rotate(-5deg);
  transition: transform 0.3s;
}

[data-card-theme="cps2"] button[id^="game-card-"]:hover::after,
[data-card-theme="cps2cab"] button[id^="game-card-"]:hover::after {
  transform: rotate(-5deg) scale(1.1);
}

[data-card-theme="cps2"] .tagline, [data-card-theme="cps2cab"] .tagline { color: #38bdf8 !important; }

/* 4. MVS / MVS CAB / AES (Neo Geo)
   Red / Gold / Black styling, 4-button arc layout
*/
[data-card-theme="mvs"] button[id^="game-card-"],
[data-card-theme="mvs"] button[id^="char-card-"],
[data-card-theme="mvs"] div[id^="move-"],
[data-card-theme="mvscab"] button[id^="game-card-"],
[data-card-theme="mvscab"] button[id^="char-card-"],
[data-card-theme="mvscab"] div[id^="move-"],
[data-card-theme="aes"] button[id^="game-card-"],
[data-card-theme="aes"] button[id^="char-card-"],
[data-card-theme="aes"] div[id^="move-"] {
  background: linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%) !important;
  border: 2px solid #fcd34d !important; /* Gold border */
  border-radius: 8px;
  color: #fff !important;
  box-shadow: inset 0 0 15px rgba(0,0,0,0.5);
}

[data-card-theme="mvs"] button[id^="game-card-"]::after,
[data-card-theme="mvscab"] button[id^="game-card-"]::after,
[data-card-theme="aes"] button[id^="game-card-"]::after {
  content: '';
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 60px;
  height: 35px;
  /* 4 Buttons in an arc: Red, Yellow, Green, Blue */
  background-image: 
    radial-gradient(circle at 10px 20px, #ef4444 5px, transparent 5px), /* A - Red */
    radial-gradient(circle at 25px 12px, #eab308 5px, transparent 5px), /* B - Yellow */
    radial-gradient(circle at 40px 12px, #22c55e 5px, transparent 5px), /* C - Green */
    radial-gradient(circle at 55px 20px, #3b82f6 5px, transparent 5px); /* D - Blue */
  background-color: #111;
  border-radius: 20px;
  border: 1px solid #444;
  transition: transform 0.3s;
}

[data-card-theme="mvs"] button[id^="game-card-"]:hover::after,
[data-card-theme="mvscab"] button[id^="game-card-"]:hover::after,
[data-card-theme="aes"] button[id^="game-card-"]:hover::after {
  transform: scale(1.1);
}

[data-card-theme="mvs"] .tagline, [data-card-theme="mvscab"] .tagline, [data-card-theme="aes"] .tagline { color: #fcd34d !important; font-weight: 800; }
[data-card-theme="mvs"] h2, [data-card-theme="mvscab"] h2, [data-card-theme="aes"] h2 { color: #fff !important; }

/* Ensure z-index layering inside buttons so pseudo-elements don't overlap text */
[data-card-theme] button[id^="game-card-"] > *,
[data-card-theme] button[id^="char-card-"] > *,
[data-card-theme] div[id^="move-"] > * {
  position: relative;
  z-index: 10;
}

""")
    
print("Appended new theme CSS logic to index.css")
