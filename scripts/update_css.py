import sys

with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace existing 'genesis' with 'sf2gen'
css = css.replace('[data-card-theme="genesis"]', '[data-card-theme="sf2gen"]')

# Append new 'genesis' theme at the end of the file
new_genesis_theme = """
/* ── Sega Genesis Grid Theme (New) ──────────────────────────── */
[data-card-theme="genesis"] button[id^="game-card-"],
[data-card-theme="genesis"] button[id^="char-card-"],
[data-card-theme="genesis"] div[id^="move-"] {
  background-color: #000000;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: center;
  border: 1px solid #333;
  color: #fff;
  box-shadow: inset 0 0 40px rgba(0,0,0,0.9);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

[data-card-theme="genesis"] button[id^="game-card-"]:hover,
[data-card-theme="genesis"] button[id^="char-card-"]:hover,
[data-card-theme="genesis"] div[id^="move-"]:hover {
  background-color: #111;
  border-color: #666;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.25) 1px, transparent 1px);
  box-shadow: inset 0 0 20px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.5);
  transform: translateY(-2px);
}

[data-card-theme="genesis"] button[id^="game-card-"][data-selected="true"],
[data-card-theme="genesis"] button[id^="char-card-"][data-selected="true"],
[data-card-theme="genesis"] div[id^="move-"][data-selected="true"] {
  background-color: #1a1a1a;
  border-color: #e60012; /* Red accent for selected state */
  box-shadow: inset 0 0 20px rgba(230, 0, 18, 0.2), 0 0 10px rgba(230, 0, 18, 0.3);
}

[data-card-theme="genesis"] .text-muted,
[data-card-theme="genesis"] .text-tertiary {
  color: #a3a3a3 !important;
}

[data-card-theme="genesis"] h2,
[data-card-theme="genesis"] .font-mono {
  color: #ffffff !important;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
}

/* Add a subtle red power-light accent to the top edge */
[data-card-theme="genesis"] button[id^="game-card-"]::before,
[data-card-theme="genesis"] button[id^="char-card-"]::before,
[data-card-theme="genesis"] div[id^="move-"]::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #e60012, transparent);
  opacity: 0.5;
}
"""

css += new_genesis_theme

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("CSS updated successfully")
