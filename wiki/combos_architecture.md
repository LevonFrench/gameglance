# GameGlance Combo Architecture

Based on researching fighting game notation and successful community execution tools (like the Dev.to fighting game notation builder), this is the foundational roadmap for integrating a interactive Combo Library into GameGlance.

## 1. Storage & Schema Design (Backend/Local JSON)
To maximize flexibility while keeping the data footprint low, user-generated combos or parsed combo strings should be saved as **space-delimitated strings** rather than hardcoded image arrays.

**Example String Signature:**
`c.S - 2HP - 214[MP] - DR - HP - 236LKLK`

- Space (` `) acts as the boundary separator between inputs.
- Hyphen (`-`) explicitly defines an intentional visual gap or "Link" step between moves, rendering as a transition segment or arrow.
- Brackets (`[]`) denotes a held button or charge mechanic natively.

## 2. Frontend Serialization (React/GameGlance View) 
The frontend parses the combo string at render-time.
By invoking `comboString.split(' ')`, we get a structured array of input tokens.

```javascript
// Pseudo Serialization Logic
const serializeCombo = (comboString) => {
    return comboString.split(' ').map(input => {
        switch(input) {
            case '-':
                return <ComboSeparator />;
            case 'DR':
                return <MechanicGlyph type="DriveRush" />;
            default:
                // Hook into our existing game-specific Glyph Mapping array system!
                return <InputGlyph value={input} />;
        }
    });
}
```

## 3. The Combo Builder Interface (Future UI)
To make combos accessible and standardized without users needing to learn text notation, we need a "Combo Builder Interface".
- Users see a grid of the currently selected game's buttons (e.g., LP, MP, HP for SF6, or P, K, S, HS for GGST) plus an interactive Directional Numpad.
- Clicking these buttons appends the logical notation block to their live `inputsString` state array.
- This creates an immediate, highly readable graphical sequence that acts as both a visual guide and a strict standardized data structure.

## 4. Integration with the Glyph System
GameGlance already has the foundation for parsing directions (e.g., `["down", "forward", "P"]` visually maps to the arrows and fist icon). We can unify the combo dictionary by treating Combo tokens exactly like Move inputs, just extended horizontally with links (`-`).
