# Glyph System

The glyph system translates generic fighting game inputs into controller-specific visual representations.

## How It Works

```
Move JSON: inputs: ["down", "down-forward", "forward", "HP"]
                          ↓
         GlyphSequence.tsx tokenizes the array
                          ↓
         glyphMap.ts maps tokens to controller labels
                          ↓
         Rendered as SVG arrows + styled button circles
```

## Controller Types

Defined in `src/glyphMap.ts` as `ControllerType`:

| Controller | Label Style | Example: HP |
|------------|------------|-------------|
| `playstation` | PS symbols | △ |
| `xbox` | Xbox letters | Y |
| `switch` | Switch letters | X |
| `arcade` | Generic 6-button | HP |
| `cps` | Capcom CPS layout | Fierce |
| `neogeo` | Neo Geo 4-button | C |
| `genesis` | Sega Genesis | Z |
| `snes` | SNES (NA) | R |
| `sfami` | Super Famicom | R |
| `wii` | Wii | 2 |
| `mk` | Mortal Kombat | 2 |
| `tekken` | Tekken | 1 |

## Notation Systems

Users can choose between notation systems via the bottom header:

| System | Example | When to use |
|--------|---------|-------------|
| `auto` | Game-specific default | Default |
| `numpad` | `236P` | FGC standard for 2D games |
| `traditional` | `↓↘→P` | Visual arrow notation |

## Tokenization

`GlyphSequence.tsx` handles tokenization of raw input arrays:

- Direction words (`down`, `forward`, `down-forward`) → SVG directional arrows
- Numpad digits (`2`, `3`, `6`) → rendered as styled numbers or converted to arrows
- Button tokens (`LP`, `MP`, `HP`, `LK`, `MK`, `HK`) → colored button circles
- Macros (`PP`, `KK`, `PPP`, `KKK`) → stacked overlapping button glyphs
- Separators (`,`, `-`, `~`, ` `) → `›` link arrows
- Prefixes (`j.`, `cr.`, `st.`) → small labeled pills (IN AIR, CROUCH, STAND)
- Special tokens (`360`, `720`, `[Cancel]`) → rendered as-is

## Rendering Styles

- **Directions**: SVG circles with rotated arrow paths
- **Arcade buttons**: Recessed 3D buttons with radial gradients (red/yellow/blue)
- **PlayStation**: Dark circles with colored PS symbols (glow effect)
- **Other controllers**: Colored circle with text label
- **"Any" buttons** (P, K alone): Button with "ANY" label above
