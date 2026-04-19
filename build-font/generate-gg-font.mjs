import opentype from 'opentype.js';
import { writeFileSync } from 'fs';

// ── Font metrics ─────────────────────────────────────────────────
const UPM   = 1000;
const ASC   = 800;
const DESC  = -200;
const CAP   = 700;   // cap height
const SW    = 95;    // stroke weight
const W     = 480;   // standard char width
const ADV   = 540;   // advance width (char + spacing)
const CUT   = 70;    // angular cut size on terminals

// Helper: create a basic rectangular block (for building letters)
function rect(p, x, y, w, h) {
  p.moveTo(x, y);
  p.lineTo(x + w, y);
  p.lineTo(x + w, y + h);
  p.lineTo(x, y + h);
  p.close();
}

// Helper: parallelogram (sheared rectangle for italic cuts)
function para(p, x, y, w, h, shearX) {
  p.moveTo(x + shearX, y);
  p.lineTo(x + w + shearX, y);
  p.lineTo(x + w, y + h);
  p.lineTo(x, y + h);
  p.close();
}

// ── Character path definitions ──────────────────────────────────
// Font coords: Y=0 is baseline, Y=700 is cap height, Y goes UP
// All paths drawn clockwise for fills

function charA(p) {
  // Outer triangle
  p.moveTo(0, 0);
  p.lineTo(W/2 - SW/2, CAP);
  p.lineTo(W/2 + SW/2, CAP);
  p.lineTo(W, 0);
  p.lineTo(W - SW, 0);
  p.lineTo(W/2 + SW/4, CAP - SW*2);
  p.lineTo(W/2 - SW/4, CAP - SW*2);
  p.lineTo(SW, 0);
  p.close();
  // Crossbar
  const cbY = CAP * 0.35;
  const lx1 = (cbY / CAP) * (W/2 - SW/2);
  const lx2 = W - lx1;
  rect(p, lx1 + 10, cbY, lx2 - lx1 - 20, SW);
}

function charB(p) {
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Top bar
  rect(p, SW, CAP - SW, W - SW - CUT, SW);
  // Top-right diagonal cut
  p.moveTo(W - CUT, CAP);
  p.lineTo(W, CAP - CUT);
  p.lineTo(W, CAP - SW);
  p.lineTo(W - CUT, CAP - SW);
  p.close();
  // Right upper stem
  rect(p, W - SW, CAP/2 + SW/2, SW, CAP/2 - SW - CUT);
  // Middle bar
  rect(p, SW, CAP/2 - SW/2, W - SW*2, SW);
  // Bottom right stem
  rect(p, W - SW, SW, SW, CAP/2 - SW);
  // Bottom bar
  rect(p, SW, 0, W - SW - CUT, SW);
  // Bottom-right diagonal cut
  p.moveTo(W - CUT, SW);
  p.lineTo(W, SW);
  p.lineTo(W, 0);
  p.lineTo(W - CUT, 0);
  p.close();
}

function charC(p) {
  // Top bar
  rect(p, SW, CAP - SW, W - SW, SW);
  // Left stem
  rect(p, 0, SW, SW, CAP - SW*2);
  // Top-left join
  rect(p, 0, CAP - SW, SW, SW);
  // Bottom bar
  rect(p, SW, 0, W - SW, SW);
  // Bottom-left join
  rect(p, 0, 0, SW, SW);
}

function charD(p) {
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Top bar
  rect(p, SW, CAP - SW, W - SW*2, SW);
  // Right stem
  rect(p, W - SW, SW, SW, CAP - SW*2);
  // Bottom bar
  rect(p, SW, 0, W - SW*2, SW);
  // Top-right corner cut
  p.moveTo(W - SW, CAP - SW);
  p.lineTo(W, CAP - CUT);
  p.lineTo(W, CAP - SW);
  p.close();
  p.moveTo(W - CUT, CAP);
  p.lineTo(W, CAP - CUT);
  p.lineTo(W - SW, CAP - SW);
  p.lineTo(W - CUT, CAP - SW);
  p.close();
  // Bottom-right corner cut
  p.moveTo(W - SW, SW);
  p.lineTo(W, CUT);
  p.lineTo(W, SW);
  p.close();
}

function charE(p) {
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Top bar with angular cut
  rect(p, SW, CAP - SW, W - SW, SW);
  // Middle bar
  rect(p, SW, CAP/2 - SW/2, W*0.7 - SW, SW);
  // Bottom bar
  rect(p, SW, 0, W - SW, SW);
}

function charF(p) {
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Top bar
  rect(p, SW, CAP - SW, W - SW, SW);
  // Middle bar
  rect(p, SW, CAP/2 - SW/2, W*0.7 - SW, SW);
}

function charG(p) {
  // Top bar
  rect(p, SW, CAP - SW, W - SW, SW);
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Bottom bar
  rect(p, SW, 0, W - SW, SW);
  // Right lower stem
  rect(p, W - SW, SW, SW, CAP/2 - SW/2);
  // Inward bar
  rect(p, W*0.45, CAP/2 - SW/2, W*0.55 - SW, SW);
}

function charH(p) {
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Right stem
  rect(p, W - SW, 0, SW, CAP);
  // Middle bar
  rect(p, SW, CAP/2 - SW/2, W - SW*2, SW);
}

function charI(p) {
  const iw = SW + 60;
  const cx = iw / 2;
  // Stem
  rect(p, cx - SW/2, SW, SW, CAP - SW*2);
  // Top bar
  rect(p, 0, CAP - SW, iw, SW);
  // Bottom bar
  rect(p, 0, 0, iw, SW);
}

function charJ(p) {
  // Right stem
  rect(p, W - SW, SW, SW, CAP - SW);
  // Top bar (serify)
  rect(p, W*0.3, CAP - SW, W*0.7, SW);
  // Bottom curve → left
  rect(p, SW, 0, W - SW*2, SW);
  // Left lower stub
  rect(p, 0, 0, SW, CAP * 0.25);
}

function charK(p) {
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Upper diagonal
  const mid = CAP / 2;
  p.moveTo(SW, mid + SW);
  p.lineTo(SW, mid);
  p.lineTo(W, CAP);
  p.lineTo(W - SW - 10, CAP);
  p.close();
  // Lower diagonal
  p.moveTo(SW, mid);
  p.lineTo(SW, mid - SW);
  p.lineTo(W - SW - 10, 0);
  p.lineTo(W, 0);
  p.close();
}

function charL(p) {
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Bottom bar with angular cut
  rect(p, SW, 0, W - SW, SW);
}

function charM(p) {
  const mw = W + 80;
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Right stem
  rect(p, mw - SW, 0, SW, CAP);
  // Top bar
  rect(p, 0, CAP - SW, mw, SW);
  // Center V
  const cx = mw / 2;
  const vBot = CAP * 0.4;
  p.moveTo(cx - SW/2, vBot);
  p.lineTo(SW, CAP - SW);
  p.lineTo(SW*2, CAP - SW);
  p.lineTo(cx + SW/2, vBot);
  p.close();
  p.moveTo(cx - SW/2, vBot);
  p.lineTo(cx + SW/2, vBot);
  p.lineTo(mw - SW*2, CAP - SW);
  p.lineTo(mw - SW, CAP - SW);
  p.close();
}

function charN(p) {
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Right stem
  rect(p, W - SW, 0, SW, CAP);
  // Diagonal
  p.moveTo(0, CAP);
  p.lineTo(SW, CAP);
  p.lineTo(W, 0);
  p.lineTo(W - SW, 0);
  p.close();
}

function charO(p) {
  // Outer box
  rect(p, 0, 0, W, CAP);
  // Inner cutout (counter-clockwise for hole in TTF)
  p.moveTo(SW, SW);
  p.lineTo(SW, CAP - SW);
  p.lineTo(W - SW, CAP - SW);
  p.lineTo(W - SW, SW);
  p.close();
}

function charP(p) {
  // Left stem
  rect(p, 0, 0, SW, CAP);
  // Top bar
  rect(p, SW, CAP - SW, W - SW, SW);
  // Right upper stem
  rect(p, W - SW, CAP/2, SW, CAP/2 - SW);
  // Middle bar
  rect(p, SW, CAP/2 - SW/2, W - SW*2, SW);
}

function charQ(p) {
  // Same as O
  rect(p, 0, 0, W, CAP);
  p.moveTo(SW, SW);
  p.lineTo(SW, CAP - SW);
  p.lineTo(W - SW, CAP - SW);
  p.lineTo(W - SW, SW);
  p.close();
  // Tail
  p.moveTo(W*0.5, SW*2);
  p.lineTo(W*0.5 + SW, SW*2);
  p.lineTo(W + CUT, -CUT);
  p.lineTo(W, -CUT);
  p.close();
}

function charR(p) {
  // Same as P base
  rect(p, 0, 0, SW, CAP);
  rect(p, SW, CAP - SW, W - SW, SW);
  rect(p, W - SW, CAP/2, SW, CAP/2 - SW);
  rect(p, SW, CAP/2 - SW/2, W - SW*2, SW);
  // Diagonal leg
  p.moveTo(W*0.4, CAP/2 - SW/2);
  p.lineTo(W*0.4 + SW, CAP/2 - SW/2);
  p.lineTo(W, 0);
  p.lineTo(W - SW, 0);
  p.close();
}

function charS(p) {
  const mid = CAP / 2;
  // Top bar
  rect(p, SW, CAP - SW, W - SW, SW);
  // Left upper stem
  rect(p, 0, mid, SW, CAP/2 - SW);
  // Middle bar
  rect(p, 0, mid - SW/2, W, SW);
  // Right lower stem
  rect(p, W - SW, SW, SW, mid - SW);
  // Bottom bar
  rect(p, 0, 0, W - SW, SW);
}

function charT(p) {
  // Top bar full width
  rect(p, 0, CAP - SW, W, SW);
  // Center stem
  rect(p, W/2 - SW/2, 0, SW, CAP - SW);
}

function charU(p) {
  // Left stem
  rect(p, 0, SW, SW, CAP - SW);
  // Right stem
  rect(p, W - SW, SW, SW, CAP - SW);
  // Bottom bar
  rect(p, 0, 0, W, SW);
}

function charV(p) {
  const cx = W / 2;
  // Left diagonal
  p.moveTo(0, CAP);
  p.lineTo(SW, CAP);
  p.lineTo(cx + SW/2, 0);
  p.lineTo(cx - SW/2, 0);
  p.close();
  // Right diagonal
  p.moveTo(W - SW, CAP);
  p.lineTo(W, CAP);
  p.lineTo(cx + SW/2, 0);
  p.lineTo(cx - SW/2, 0);
  p.close();
}

function charW(p) {
  const ww = W + 80;
  const q = ww / 4;
  // Left diagonal
  p.moveTo(0, CAP);
  p.lineTo(SW, CAP);
  p.lineTo(q + SW/2, 0);
  p.lineTo(q - SW/2, 0);
  p.close();
  // Center-left
  p.moveTo(q - SW/2, 0);
  p.lineTo(q + SW/2, 0);
  p.lineTo(ww/2 + SW/2, CAP * 0.6);
  p.lineTo(ww/2 - SW/2, CAP * 0.6);
  p.close();
  // Center-right
  p.moveTo(ww/2 - SW/2, CAP * 0.6);
  p.lineTo(ww/2 + SW/2, CAP * 0.6);
  p.lineTo(q*3 + SW/2, 0);
  p.lineTo(q*3 - SW/2, 0);
  p.close();
  // Right diagonal
  p.moveTo(ww - SW, CAP);
  p.lineTo(ww, CAP);
  p.lineTo(q*3 + SW/2, 0);
  p.lineTo(q*3 - SW/2, 0);
  p.close();
}

function charX(p) {
  const cx = W / 2;
  const mid = CAP / 2;
  // Top-left to center
  p.moveTo(0, CAP);
  p.lineTo(SW, CAP);
  p.lineTo(cx + SW/2, mid + SW/2);
  p.lineTo(cx - SW/2, mid + SW/2);
  p.close();
  // Top-right to center
  p.moveTo(W - SW, CAP);
  p.lineTo(W, CAP);
  p.lineTo(cx + SW/2, mid + SW/2);
  p.lineTo(cx - SW/2, mid + SW/2);
  p.close();
  // Bottom-left from center
  p.moveTo(cx - SW/2, mid - SW/2);
  p.lineTo(cx + SW/2, mid - SW/2);
  p.lineTo(SW, 0);
  p.lineTo(0, 0);
  p.close();
  // Bottom-right from center
  p.moveTo(cx - SW/2, mid - SW/2);
  p.lineTo(cx + SW/2, mid - SW/2);
  p.lineTo(W, 0);
  p.lineTo(W - SW, 0);
  p.close();
}

function charY(p) {
  const cx = W / 2;
  const mid = CAP / 2;
  // Left arm
  p.moveTo(0, CAP);
  p.lineTo(SW, CAP);
  p.lineTo(cx + SW/2, mid + SW/2);
  p.lineTo(cx - SW/2, mid + SW/2);
  p.close();
  // Right arm
  p.moveTo(W - SW, CAP);
  p.lineTo(W, CAP);
  p.lineTo(cx + SW/2, mid + SW/2);
  p.lineTo(cx - SW/2, mid + SW/2);
  p.close();
  // Center stem
  rect(p, cx - SW/2, 0, SW, mid + SW/2);
}

function charZ(p) {
  // Top bar
  rect(p, 0, CAP - SW, W, SW);
  // Diagonal
  p.moveTo(0, 0);
  p.lineTo(0, SW);
  p.lineTo(W - SW, CAP - SW);
  p.lineTo(W, CAP - SW);
  p.close();
  // Bottom bar
  rect(p, 0, 0, W, SW);
}

// ── Digits ──────────────────────────────────────────────────────
function digit0(p) { charO(p); }

function digit1(p) {
  const iw = SW + 40;
  rect(p, (W - iw)/2, 0, iw, CAP);
  // Base bar
  rect(p, W*0.15, 0, W*0.7, SW);
}

function digit2(p) {
  rect(p, 0, CAP - SW, W, SW);
  rect(p, W - SW, CAP/2, SW, CAP/2 - SW);
  rect(p, 0, CAP/2 - SW/2, W, SW);
  rect(p, 0, SW, SW, CAP/2 - SW);
  rect(p, 0, 0, W, SW);
}

function digit3(p) {
  rect(p, 0, CAP - SW, W, SW);
  rect(p, W - SW, CAP/2 + SW/2, SW, CAP/2 - SW*1.5);
  rect(p, W*0.3, CAP/2 - SW/2, W*0.7, SW);
  rect(p, W - SW, SW, SW, CAP/2 - SW*1.5);
  rect(p, 0, 0, W, SW);
}

function digit4(p) {
  rect(p, 0, CAP/2, SW, CAP/2);
  rect(p, 0, CAP/2 - SW/2, W, SW);
  rect(p, W - SW, 0, SW, CAP);
}

function digit5(p) { charS(p); }

function digit6(p) {
  rect(p, 0, CAP - SW, W, SW);
  rect(p, 0, SW, SW, CAP - SW*2);
  rect(p, 0, CAP/2 - SW/2, W, SW);
  rect(p, W - SW, SW, SW, CAP/2 - SW);
  rect(p, 0, 0, W, SW);
}

function digit7(p) {
  rect(p, 0, CAP - SW, W, SW);
  // Diagonal stem
  p.moveTo(W - SW, CAP - SW);
  p.lineTo(W, CAP - SW);
  p.lineTo(W*0.35, 0);
  p.lineTo(W*0.35 - SW, 0);
  p.close();
}

function digit8(p) {
  rect(p, 0, 0, W, CAP);
  // Top hole
  p.moveTo(SW, CAP/2 + SW/2);
  p.lineTo(SW, CAP - SW);
  p.lineTo(W - SW, CAP - SW);
  p.lineTo(W - SW, CAP/2 + SW/2);
  p.close();
  // Bottom hole
  p.moveTo(SW, SW);
  p.lineTo(SW, CAP/2 - SW/2);
  p.lineTo(W - SW, CAP/2 - SW/2);
  p.lineTo(W - SW, SW);
  p.close();
}

function digit9(p) {
  rect(p, 0, CAP - SW, W, SW);
  rect(p, 0, CAP/2, SW, CAP/2 - SW);
  rect(p, 0, CAP/2 - SW/2, W, SW);
  rect(p, W - SW, SW, SW, CAP - SW*2);
  rect(p, 0, 0, W, SW);
}

// ── Punctuation ─────────────────────────────────────────────────
function charSpace() { /* empty */ }

function charPeriod(p) {
  rect(p, W/2 - SW/2, 0, SW, SW);
}

function charComma(p) {
  p.moveTo(W/2 - SW/2, SW);
  p.lineTo(W/2 + SW/2, SW);
  p.lineTo(W/2 + SW/2, 0);
  p.lineTo(W/2 - SW/2 - 15, -SW);
  p.lineTo(W/2 - SW/2, -SW + 15);
  p.close();
}

function charExcl(p) {
  rect(p, W/2 - SW/2, SW*2, SW, CAP - SW*2);
  rect(p, W/2 - SW/2, 0, SW, SW);
}

function charHyphen(p) {
  rect(p, W*0.15, CAP/2 - SW/2, W*0.7, SW);
}

function charColon(p) {
  rect(p, W/2 - SW/2, CAP*0.55, SW, SW);
  rect(p, W/2 - SW/2, CAP*0.15, SW, SW);
}

function charGT(p) {
  const mid = CAP/2;
  p.moveTo(0, CAP - CUT);
  p.lineTo(SW, CAP - CUT);
  p.lineTo(W, mid + SW/2);
  p.lineTo(W, mid - SW/2);
  p.lineTo(SW, CUT);
  p.lineTo(0, CUT);
  p.lineTo(W - SW*2, mid);
  p.close();
}

// ── Build registry ──────────────────────────────────────────────

const CHAR_MAP = {
  'A': { fn: charA, w: W },
  'B': { fn: charB, w: W },
  'C': { fn: charC, w: W },
  'D': { fn: charD, w: W },
  'E': { fn: charE, w: W },
  'F': { fn: charF, w: W },
  'G': { fn: charG, w: W },
  'H': { fn: charH, w: W },
  'I': { fn: charI, w: SW + 60, adv: SW + 120 },
  'J': { fn: charJ, w: W },
  'K': { fn: charK, w: W },
  'L': { fn: charL, w: W },
  'M': { fn: charM, w: W + 80, adv: W + 140 },
  'N': { fn: charN, w: W },
  'O': { fn: charO, w: W },
  'P': { fn: charP, w: W },
  'Q': { fn: charQ, w: W },
  'R': { fn: charR, w: W },
  'S': { fn: charS, w: W },
  'T': { fn: charT, w: W },
  'U': { fn: charU, w: W },
  'V': { fn: charV, w: W },
  'W': { fn: charW, w: W + 80, adv: W + 140 },
  'X': { fn: charX, w: W },
  'Y': { fn: charY, w: W },
  'Z': { fn: charZ, w: W },
  '0': { fn: digit0, w: W },
  '1': { fn: digit1, w: W },
  '2': { fn: digit2, w: W },
  '3': { fn: digit3, w: W },
  '4': { fn: digit4, w: W },
  '5': { fn: digit5, w: W },
  '6': { fn: digit6, w: W },
  '7': { fn: digit7, w: W },
  '8': { fn: digit8, w: W },
  '9': { fn: digit9, w: W },
  ' ': { fn: charSpace, w: 0, adv: 250 },
  '.': { fn: charPeriod, w: W, adv: SW + 120 },
  ',': { fn: charComma, w: W, adv: SW + 120 },
  '!': { fn: charExcl, w: W, adv: SW + 120 },
  '-': { fn: charHyphen, w: W },
  ':': { fn: charColon, w: W, adv: SW + 120 },
  '>': { fn: charGT, w: W },
};

// ── Build font ──────────────────────────────────────────────────

function buildFont() {
  const glyphs = [];

  // .notdef
  const notdefPath = new opentype.Path();
  rect(notdefPath, 50, 0, 400, 700);
  notdefPath.moveTo(100, 50);
  notdefPath.lineTo(100, 650);
  notdefPath.lineTo(400, 650);
  notdefPath.lineTo(400, 50);
  notdefPath.close();

  glyphs.push(new opentype.Glyph({
    name: '.notdef',
    unicode: 0,
    advanceWidth: 500,
    path: notdefPath,
  }));

  for (const [char, def] of Object.entries(CHAR_MAP)) {
    const path = new opentype.Path();
    def.fn(path);

    const unicode = char.codePointAt(0);
    const adv = def.adv || (def.w + 60);

    glyphs.push(new opentype.Glyph({
      name: char === ' ' ? 'space' : `uni${unicode.toString(16).toUpperCase().padStart(4, '0')}`,
      unicode,
      advanceWidth: adv,
      path,
    }));

    // Also add lowercase mapping (same glyph)
    if (char >= 'A' && char <= 'Z') {
      const lcPath = new opentype.Path();
      def.fn(lcPath);
      const lcUnicode = char.toLowerCase().codePointAt(0);
      glyphs.push(new opentype.Glyph({
        name: `uni${lcUnicode.toString(16).toUpperCase().padStart(4, '0')}`,
        unicode: lcUnicode,
        advanceWidth: adv,
        path: lcPath,
      }));
    }
  }

  const font = new opentype.Font({
    familyName: 'MetalGearSolid',
    styleName: 'Regular',
    unitsPerEm: UPM,
    ascender: ASC,
    descender: DESC,
    glyphs,
  });

  const outPath = './MetalGearSolid.ttf';
  const buffer = Buffer.from(font.toArrayBuffer());
  writeFileSync(outPath, buffer);
  console.log(`✓ ${outPath} — ${buffer.length} bytes, ${glyphs.length} glyphs`);

  // Summary
  console.log('\nGlyphs:');
  for (const [char] of Object.entries(CHAR_MAP)) {
    if (char === ' ') continue;
    process.stdout.write(`  ${char}`);
  }
  console.log('\n  + lowercase a-z mapped to same forms');
  console.log('\nDone!');
}

buildFont();
