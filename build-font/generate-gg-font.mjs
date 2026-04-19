/**
 * GameGlance Icon Font Generator
 * ──────────────────────────────
 * Converts the GlyphSequence visual system into a real TTF font.
 *
 * Each glyph is drawn with opentype.js Path primitives and assigned
 * to Unicode Private Use Area codepoints (U+E000 – U+E0FF).
 *
 * Run:  node generate-gg-font.mjs
 * Out:  ./GameGlance.ttf  +  ./glyph-table.json (codepoint map)
 */

import opentype from 'opentype.js';
import { writeFileSync } from 'fs';

const UNITS = 1000;   // unitsPerEm
const ASC   = 800;
const DESC  = -200;
const SIZE  = 900;    // bounding box for most glyphs
const PAD   = 50;     // centering offset  (1000 - 900) / 2
const CX    = 500;    // center x
const CY    = 400;    // center y  (baseline-relative: 0 = baseline, 800 = ascender)
const R     = 420;    // radius for circles

// ── Helpers ──────────────────────────────────────────────────────────

function circlePath(path, cx, cy, r, clockwise = true) {
  // Approximate circle with 4 cubic Bézier curves
  const k = 0.5522847498;  // magic number for cubic circle approx
  const dx = r * k;
  const dy = r * k;

  if (clockwise) {
    path.moveTo(cx, cy - r);
    path.curveTo(cx + dx, cy - r, cx + r, cy - dy, cx + r, cy);
    path.curveTo(cx + r, cy + dy, cx + dx, cy + r, cx, cy + r);
    path.curveTo(cx - dx, cy + r, cx - r, cy + dy, cx - r, cy);
    path.curveTo(cx - r, cy - dy, cx - dx, cy - r, cx, cy - r);
  } else {
    path.moveTo(cx, cy - r);
    path.curveTo(cx - dx, cy - r, cx - r, cy - dy, cx - r, cy);
    path.curveTo(cx - r, cy + dy, cx - dx, cy + r, cx, cy + r);
    path.curveTo(cx + dx, cy + r, cx + r, cy + dy, cx + r, cy);
    path.curveTo(cx + r, cy - dy, cx + dx, cy - r, cx, cy - r);
  }
  path.close();
}

function roundedRect(path, x, y, w, h, radius) {
  const r = Math.min(radius, w / 2, h / 2);
  path.moveTo(x + r, y);
  path.lineTo(x + w - r, y);
  path.curveTo(x + w, y, x + w, y + r, x + w, y + r);
  path.lineTo(x + w, y + h - r);
  path.curveTo(x + w, y + h, x + w - r, y + h, x + w - r, y + h);
  path.lineTo(x + r, y + h);
  path.curveTo(x, y + h, x, y + h - r, x, y + h - r);
  path.lineTo(x, y + r);
  path.curveTo(x, y, x + r, y, x + r, y);
  path.close();
}

// Draw text letters inside a button using simple geometric paths
// This is a simplified monoline approach for the font glyphs
function addLetterPaths(path, text, cx, cy, textSize) {
  const letterWidth = textSize * 0.6;
  const totalWidth = text.length * letterWidth + (text.length - 1) * (letterWidth * 0.15);
  let startX = cx - totalWidth / 2;

  for (const ch of text) {
    const lx = startX;
    const ly = cy - textSize / 2;
    const lw = letterWidth;
    const lh = textSize;
    const sw = textSize * 0.12; // stroke width

    drawLetter(path, ch, lx, ly, lw, lh, sw);
    startX += letterWidth + letterWidth * 0.15;
  }
}

function drawLetter(path, ch, x, y, w, h, sw) {
  // Simple blocky/geometric letter forms suitable for icon font
  // TTF fonts: Y-axis goes UP from baseline, but opentype.js paths are in font coordinates
  // where Y increases upward from baseline (0). We'll draw top-down then flip.
  const mx = x + w / 2;
  const my = y + h / 2;
  const t = y;        // top
  const b = y + h;    // bottom
  const l = x;        // left
  const r = x + w;    // right

  switch (ch.toUpperCase()) {
    case 'L':
      // Vertical bar + horizontal bottom
      path.moveTo(l, t);
      path.lineTo(l + sw, t);
      path.lineTo(l + sw, b - sw);
      path.lineTo(r, b - sw);
      path.lineTo(r, b);
      path.lineTo(l, b);
      path.close();
      break;

    case 'M':
      // Left bar
      path.moveTo(l, t);
      path.lineTo(l + sw, t);
      path.lineTo(l + sw, b);
      path.lineTo(l, b);
      path.close();
      // Right bar
      path.moveTo(r - sw, t);
      path.lineTo(r, t);
      path.lineTo(r, b);
      path.lineTo(r - sw, b);
      path.close();
      // Top bar
      path.moveTo(l, t);
      path.lineTo(r, t);
      path.lineTo(r, t + sw);
      path.lineTo(l, t + sw);
      path.close();
      // V center
      path.moveTo(mx - sw / 2, t + sw);
      path.lineTo(mx + sw / 2, t + sw);
      path.lineTo(mx + sw / 2, my + sw);
      path.lineTo(mx - sw / 2, my + sw);
      path.close();
      break;

    case 'H':
      // Left bar
      path.moveTo(l, t);
      path.lineTo(l + sw, t);
      path.lineTo(l + sw, b);
      path.lineTo(l, b);
      path.close();
      // Right bar
      path.moveTo(r - sw, t);
      path.lineTo(r, t);
      path.lineTo(r, b);
      path.lineTo(r - sw, b);
      path.close();
      // Middle bar
      path.moveTo(l + sw, my - sw / 2);
      path.lineTo(r - sw, my - sw / 2);
      path.lineTo(r - sw, my + sw / 2);
      path.lineTo(l + sw, my + sw / 2);
      path.close();
      break;

    case 'P':
      // Vertical bar
      path.moveTo(l, t);
      path.lineTo(l + sw, t);
      path.lineTo(l + sw, b);
      path.lineTo(l, b);
      path.close();
      // Top bar
      path.moveTo(l + sw, t);
      path.lineTo(r, t);
      path.lineTo(r, t + sw);
      path.lineTo(l + sw, t + sw);
      path.close();
      // Right side of P
      path.moveTo(r - sw, t + sw);
      path.lineTo(r, t + sw);
      path.lineTo(r, my);
      path.lineTo(r - sw, my);
      path.close();
      // Middle bar
      path.moveTo(l + sw, my - sw);
      path.lineTo(r, my - sw);
      path.lineTo(r, my);
      path.lineTo(l + sw, my);
      path.close();
      break;

    case 'K':
      // Vertical bar
      path.moveTo(l, t);
      path.lineTo(l + sw, t);
      path.lineTo(l + sw, b);
      path.lineTo(l, b);
      path.close();
      // Upper diagonal
      path.moveTo(l + sw, my - sw / 2);
      path.lineTo(l + sw + sw, my - sw / 2);
      path.lineTo(r, t);
      path.lineTo(r - sw, t);
      path.close();
      // Lower diagonal
      path.moveTo(l + sw, my + sw / 2);
      path.lineTo(l + sw + sw, my + sw / 2);
      path.lineTo(r, b);
      path.lineTo(r - sw, b);
      path.close();
      break;

    default:
      // Fallback: draw a filled rectangle
      path.moveTo(l, t);
      path.lineTo(r, t);
      path.lineTo(r, b);
      path.lineTo(l, b);
      path.close();
      break;
  }
}

// ── Arrow glyph builder ─────────────────────────────────────────────

function makeArrowPath(angleDeg) {
  const path = new opentype.Path();

  // Background circle (outer, clockwise = filled)
  circlePath(path, CX, CY, R, true);
  // Inner cutout (counter-clockwise = hole)
  circlePath(path, CX, CY, R - 60, false);

  // Arrow pointing RIGHT at 0°, then we rotate
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  // Arrow shape (pointing right, centered on CX,CY)
  const arrowPts = [
    // Shaft
    { x: -200, y: -40 },
    { x: 100,  y: -40 },
    // Head
    { x: 100,  y: -120 },
    { x: 250,  y: 0 },
    { x: 100,  y: 120 },
    { x: 100,  y: 40 },
    { x: -200, y: 40 },
  ];

  const transformed = arrowPts.map(p => ({
    x: CX + p.x * cos - p.y * sin,
    y: CY + p.x * sin + p.y * cos,
  }));

  path.moveTo(transformed[0].x, transformed[0].y);
  for (let i = 1; i < transformed.length; i++) {
    path.lineTo(transformed[i].x, transformed[i].y);
  }
  path.close();

  return path;
}

// ── Button glyph builder ────────────────────────────────────────────

function makeButtonPath(label) {
  const path = new opentype.Path();

  // Outer circle (filled)
  circlePath(path, CX, CY, R, true);
  // Inner cutout to make ring
  circlePath(path, CX, CY, R - 50, false);

  // Fill center disk
  circlePath(path, CX, CY, R - 80, true);

  // Add text label
  const textSize = label.length > 2 ? 200 : (label.length > 1 ? 280 : 350);
  addLetterPaths(path, label, CX, CY, textSize);

  return path;
}

// ── Special glyphs ──────────────────────────────────────────────────

function makeCircle360Path() {
  const path = new opentype.Path();

  // Circular arrow (open ring with arrowhead)
  // Outer ring
  const outerR = R;
  const innerR = R - 80;

  // Draw ~300° arc (leaving a gap for the arrowhead)
  // Using circle minus a wedge
  circlePath(path, CX, CY, outerR, true);
  circlePath(path, CX, CY, innerR, false);

  // Small arrowhead at the top of the ring
  const arrowPts = [
    { x: CX + 80, y: CY - outerR + 40 },
    { x: CX + 80, y: CY - outerR - 60 },
    { x: CX - 60, y: CY - outerR - 10 },
  ];
  path.moveTo(arrowPts[0].x, arrowPts[0].y);
  path.lineTo(arrowPts[1].x, arrowPts[1].y);
  path.lineTo(arrowPts[2].x, arrowPts[2].y);
  path.close();

  return path;
}

function makeCancelPath() {
  const path = new opentype.Path();

  // Chevron: ›
  const sw = 60;
  const pts = [
    { x: CX - 60, y: CY - 200 },
    { x: CX + 100, y: CY },
    { x: CX - 60, y: CY + 200 },
    { x: CX - 60 - sw, y: CY + 200 - sw },
    { x: CX + 100 - sw * 2, y: CY },
    { x: CX - 60 - sw, y: CY - 200 + sw },
  ];

  path.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) path.lineTo(pts[i].x, pts[i].y);
  path.close();

  return path;
}

function makePlusPath() {
  const path = new opentype.Path();
  const half = 180;
  const thick = 60;

  // Horizontal bar
  path.moveTo(CX - half, CY - thick);
  path.lineTo(CX + half, CY - thick);
  path.lineTo(CX + half, CY + thick);
  path.lineTo(CX - half, CY + thick);
  path.close();

  // Vertical bar
  path.moveTo(CX - thick, CY - half);
  path.lineTo(CX + thick, CY - half);
  path.lineTo(CX + thick, CY + half);
  path.lineTo(CX - thick, CY + half);
  path.close();

  return path;
}

function makePillPath(label) {
  const path = new opentype.Path();
  const pillW = Math.max(600, label.length * 200 + 120);
  const pillH = 500;
  const pillX = CX - pillW / 2;
  const pillY = CY - pillH / 2;

  roundedRect(path, pillX, pillY, pillW, pillH, pillH / 2);

  // Add text
  const textSize = Math.min(280, 600 / label.length);
  addLetterPaths(path, label, CX, CY, textSize);

  return path;
}

function makeNeutralPath() {
  const path = new opentype.Path();

  // Circle background
  circlePath(path, CX, CY, R, true);
  circlePath(path, CX, CY, R - 60, false);

  // Star shape in center (5-pointed)
  const outerStar = 180;
  const innerStar = 80;
  const starPts = [];
  for (let i = 0; i < 10; i++) {
    const angle = (i * 36 - 90) * Math.PI / 180;
    const rad = i % 2 === 0 ? outerStar : innerStar;
    starPts.push({
      x: CX + rad * Math.cos(angle),
      y: CY + rad * Math.sin(angle),
    });
  }

  path.moveTo(starPts[0].x, starPts[0].y);
  for (let i = 1; i < starPts.length; i++) {
    path.lineTo(starPts[i].x, starPts[i].y);
  }
  path.close();

  return path;
}

function makeModifierPillPath(label) {
  const path = new opentype.Path();
  const pillW = 700;
  const pillH = 380;
  const pillX = CX - pillW / 2;
  const pillY = CY - pillH / 2;

  // Outer pill
  roundedRect(path, pillX, pillY, pillW, pillH, 60);
  // Inner cutout
  roundedRect(path, pillX + 30, pillY + 30, pillW - 60, pillH - 60, 40);

  // Text
  const textSize = 180;
  addLetterPaths(path, label, CX, CY, textSize);

  return path;
}

// ── Glyph Registry ──────────────────────────────────────────────────

const GLYPH_DEFS = [
  // Directional arrows (0° = right, going clockwise)
  { name: 'gg-forward',       unicode: 0xE000, label: '→',  builder: () => makeArrowPath(0) },
  { name: 'gg-down-forward',  unicode: 0xE001, label: '↘',  builder: () => makeArrowPath(45) },
  { name: 'gg-down',          unicode: 0xE002, label: '↓',  builder: () => makeArrowPath(90) },
  { name: 'gg-down-back',     unicode: 0xE003, label: '↙',  builder: () => makeArrowPath(135) },
  { name: 'gg-back',          unicode: 0xE004, label: '←',  builder: () => makeArrowPath(180) },
  { name: 'gg-up-back',       unicode: 0xE005, label: '↖',  builder: () => makeArrowPath(225) },
  { name: 'gg-up',            unicode: 0xE006, label: '↑',  builder: () => makeArrowPath(270) },
  { name: 'gg-up-forward',    unicode: 0xE007, label: '↗',  builder: () => makeArrowPath(315) },
  { name: 'gg-neutral',       unicode: 0xE008, label: 'N',  builder: () => makeNeutralPath() },

  // Attack buttons
  { name: 'gg-lp',  unicode: 0xE010, label: 'LP',  builder: () => makeButtonPath('LP') },
  { name: 'gg-mp',  unicode: 0xE011, label: 'MP',  builder: () => makeButtonPath('MP') },
  { name: 'gg-hp',  unicode: 0xE012, label: 'HP',  builder: () => makeButtonPath('HP') },
  { name: 'gg-lk',  unicode: 0xE013, label: 'LK',  builder: () => makeButtonPath('LK') },
  { name: 'gg-mk',  unicode: 0xE014, label: 'MK',  builder: () => makeButtonPath('MK') },
  { name: 'gg-hk',  unicode: 0xE015, label: 'HK',  builder: () => makeButtonPath('HK') },

  // Generic / Any
  { name: 'gg-p',   unicode: 0xE016, label: 'P',   builder: () => makeButtonPath('P') },
  { name: 'gg-k',   unicode: 0xE017, label: 'K',   builder: () => makeButtonPath('K') },

  // Macros
  { name: 'gg-pp',   unicode: 0xE018, label: 'PP',   builder: () => makeButtonPath('PP') },
  { name: 'gg-kk',   unicode: 0xE019, label: 'KK',   builder: () => makeButtonPath('KK') },
  { name: 'gg-ppp',  unicode: 0xE01A, label: 'PPP',  builder: () => makePillPath('PPP') },
  { name: 'gg-kkk',  unicode: 0xE01B, label: 'KKK',  builder: () => makePillPath('KKK') },

  // MK-style buttons
  { name: 'gg-1',   unicode: 0xE020, label: '1',   builder: () => makeButtonPath('1') },
  { name: 'gg-2',   unicode: 0xE021, label: '2',   builder: () => makeButtonPath('2') },
  { name: 'gg-3',   unicode: 0xE022, label: '3',   builder: () => makeButtonPath('3') },
  { name: 'gg-4',   unicode: 0xE023, label: '4',   builder: () => makeButtonPath('4') },
  { name: 'gg-bl',  unicode: 0xE024, label: 'BL',  builder: () => makeButtonPath('BL') },
  { name: 'gg-en',  unicode: 0xE025, label: 'EN',  builder: () => makeButtonPath('EN') },

  // Anime fighters
  { name: 'gg-l',   unicode: 0xE030, label: 'L',   builder: () => makeButtonPath('L') },
  { name: 'gg-m',   unicode: 0xE031, label: 'M',   builder: () => makeButtonPath('M') },
  { name: 'gg-h',   unicode: 0xE032, label: 'H',   builder: () => makeButtonPath('H') },
  { name: 'gg-s',   unicode: 0xE033, label: 'S',   builder: () => makeButtonPath('S') },
  { name: 'gg-d',   unicode: 0xE034, label: 'D',   builder: () => makeButtonPath('D') },

  // Separators / special
  { name: 'gg-cancel',  unicode: 0xE040, label: '›',  builder: () => makeCancelPath() },
  { name: 'gg-plus',    unicode: 0xE041, label: '+',  builder: () => makePlusPath() },
  { name: 'gg-360',     unicode: 0xE042, label: '↻',  builder: () => makeCircle360Path() },
  { name: 'gg-720',     unicode: 0xE043, label: '↻↻', builder: () => makeCircle360Path() }, // Same visual, semantic diff

  // Stance / modifier pills
  { name: 'gg-jump',    unicode: 0xE050, label: 'j.',   builder: () => makeModifierPillPath('j.') },
  { name: 'gg-crouch',  unicode: 0xE051, label: 'cr.',  builder: () => makeModifierPillPath('cr.') },
  { name: 'gg-stand',   unicode: 0xE052, label: 'st.',  builder: () => makeModifierPillPath('st.') },
];

// ── Build the font ──────────────────────────────────────────────────

function buildFont() {
  const glyphs = [];

  // Required .notdef glyph
  const notdefPath = new opentype.Path();
  roundedRect(notdefPath, 100, 0, 800, 800, 40);
  roundedRect(notdefPath, 150, 50, 700, 700, 20); // inner cutout

  glyphs.push(new opentype.Glyph({
    name: '.notdef',
    unicode: 0,
    advanceWidth: UNITS,
    path: notdefPath,
  }));

  // Build each glyph
  const codepointTable = {};

  for (const def of GLYPH_DEFS) {
    const path = def.builder();

    glyphs.push(new opentype.Glyph({
      name: def.name,
      unicode: def.unicode,
      advanceWidth: UNITS,
      path,
    }));

    codepointTable[def.name] = {
      unicode: `U+${def.unicode.toString(16).toUpperCase().padStart(4, '0')}`,
      char: String.fromCodePoint(def.unicode),
      label: def.label,
    };
  }

  const font = new opentype.Font({
    familyName: 'GameGlance',
    styleName: 'Regular',
    unitsPerEm: UNITS,
    ascender: ASC,
    descender: DESC,
    glyphs,
  });

  // Write .ttf
  const buffer = Buffer.from(font.toArrayBuffer());
  writeFileSync('./GameGlance.ttf', buffer);
  console.log('✓ GameGlance.ttf written (%d bytes, %d glyphs)', buffer.length, glyphs.length);

  // Write codepoint table
  writeFileSync('./glyph-table.json', JSON.stringify(codepointTable, null, 2));
  console.log('✓ glyph-table.json written');

  // Print summary
  console.log('\n┌─────────────────────────────────────────┐');
  console.log('│         GameGlance Font Summary          │');
  console.log('├──────────────┬──────────┬────────────────┤');
  console.log('│ Name         │ Unicode  │ Label          │');
  console.log('├──────────────┼──────────┼────────────────┤');
  for (const [name, info] of Object.entries(codepointTable)) {
    console.log(
      '│ %s │ %s │ %s │',
      name.padEnd(12),
      info.unicode.padEnd(8),
      info.label.padEnd(14),
    );
  }
  console.log('└──────────────┴──────────┴────────────────┘');
}

buildFont();
