import sys

with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# We want to remove all [data-card-theme="mvs"] blocks and append our new one.
# It's easier to just strip them out using regex.
import re

css = re.sub(r'/\* ── Neo Geo MVS Cartridge Theme.*?(?=/\* ── Neo Geo AES Cartridge Theme)', '', css, flags=re.DOTALL)

# Let's ensure no straggling mvs rules exist
css = re.sub(r'\[data-card-theme="mvs"\].*?}', '', css, flags=re.DOTALL)

mvs_css = """
/* ── Neo Geo MVS Cartridge Theme ───────────────────── */
[data-card-theme="mvs"] button[id^="game-card-"],
[data-card-theme="mvs"] button[id^="char-card-"],
[data-card-theme="mvs"] div[id^="move-"] {
  background-color: #1a1a1a !important;
  border: 1px solid #000 !important;
  border-radius: 4px !important;
  box-shadow: 
    inset 0 2px 4px rgba(255,255,255,0.15),
    inset -4px -4px 8px rgba(0,0,0,0.8),
    0 8px 20px rgba(0,0,0,0.6) !important;
  color: #111 !important;
  position: relative !important;
  overflow: hidden !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
}

[data-card-theme="mvs"] button[id^="game-card-"]:hover,
[data-card-theme="mvs"] button[id^="char-card-"]:hover,
[data-card-theme="mvs"] div[id^="move-"]:hover {
  transform: translateY(-4px) scale(1.02) !important;
  box-shadow: 
    inset 0 2px 4px rgba(255,255,255,0.15),
    inset -4px -4px 8px rgba(0,0,0,0.8),
    0 12px 25px rgba(0,0,0,0.8) !important;
  border-color: #333 !important;
}

/* Ribbed grips heavily on the bottom half */
[data-card-theme="mvs"] button[id^="game-card-"]::before,
[data-card-theme="mvs"] button[id^="char-card-"]::before,
[data-card-theme="mvs"] div[id^="move-"]::before {
  content: '';
  position: absolute;
  top: 55%;
  bottom: 10%;
  left: 5%;
  right: 5%;
  background-image: 
    repeating-linear-gradient(180deg, transparent 0px, transparent 6px, rgba(0,0,0,0.9) 6px, rgba(0,0,0,0.9) 10px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.8;
}

/* White sticker label on top half */
[data-card-theme="mvs"] button[id^="game-card-"]::after,
[data-card-theme="mvs"] button[id^="char-card-"]::after,
[data-card-theme="mvs"] div[id^="move-"]::after {
  content: '';
  position: absolute;
  top: 6%;
  height: 40%;
  left: 3%;
  right: 3%;
  background: #f4f4f4;
  border: 2px solid #000;
  border-radius: 2px;
  box-shadow: inset 0 0 15px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.6);
  pointer-events: none;
  z-index: 0;
}

/* Arrow triangle at the bottom center */
[data-card-theme="mvs"] button[id^="game-card-"] .mvs-arrow,
[data-card-theme="mvs"] button[id^="char-card-"] .mvs-arrow,
[data-card-theme="mvs"] div[id^="move-"] .mvs-arrow {
  content: '▼';
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  color: #d1d5db;
  font-size: 0.8rem;
  z-index: 1;
}

/* Ensure text is readable over the white sticker */
[data-card-theme="mvs"] button[id^="game-card-"] > *,
[data-card-theme="mvs"] button[id^="char-card-"] > *,
[data-card-theme="mvs"] div[id^="move-"] > * {
  z-index: 2;
  position: relative;
  text-shadow: none !important;
}

[data-card-theme="mvs"] h2 {
  font-family: Arial, Helvetica, sans-serif !important;
  font-weight: 900 !important;
  font-style: normal !important;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #000 !important;
  margin: 0 !important;
  margin-top: 1.5rem !important;
  font-size: 1.6rem !important;
  text-align: center;
  width: 100%;
}

[data-card-theme="mvs"] .text-muted,
[data-card-theme="mvs"] .text-tertiary {
  color: #555 !important;
  font-family: Arial, Helvetica, sans-serif !important;
  font-weight: bold;
  font-size: 0.75rem !important;
  position: absolute;
  top: 8%;
  left: 6%;
}

[data-card-theme="mvs"] .gradient-overlay { display: none !important; }

"""

# Insert MVS block back before AES theme
css = css.replace('/* ── Neo Geo AES Cartridge Theme', mvs_css + '\n/* ── Neo Geo AES Cartridge Theme')

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("MVS styling applied!")
