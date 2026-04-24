import React, { useEffect, useState } from 'react';
import { getGlyphLabel, getGlyphColor } from './glyphMap';
import type { ControllerType } from './glyphMap';

const INPUTS = ['LP', 'MP', 'HP', 'LK', 'MK', 'HK', 'up', 'down', 'forward', 'back', 'up-forward', 'P', 'K', 'A', 'B', 'C', 'D', 'BL', 'EN'];
const CONTROLLERS: ControllerType[] = ['playstation', 'xbox', 'arcade', 'switch', 'mk', 'snes', 'neogeo'];

interface Column {
  id: number;
  left: number;
  duration: number;
  delay: number;
  glyphs: { label: string; color: string }[];
}

export const GlyphRain: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  useEffect(() => {
    const handleResize = () => {
      // 1 column every ~50px to space them out properly
      const colCount = Math.floor(window.innerWidth / 50);
      const newCols: Column[] = [];

      for (let i = 0; i < colCount; i++) {
        const glyphCount = 20 + Math.floor(Math.random() * 20); // 20 to 40 glyphs in a single falling column
        const glyphs = [];
        for (let j = 0; j < glyphCount; j++) {
          const input = INPUTS[Math.floor(Math.random() * INPUTS.length)];
          const controller = CONTROLLERS[Math.floor(Math.random() * CONTROLLERS.length)];
          const label = getGlyphLabel(input, controller);
          const color = getGlyphColor(input, controller);
          glyphs.push({ label, color });
        }

        newCols.push({
          id: i,
          left: (window.innerWidth / colCount) * i + (Math.random() * 20 - 10),
          duration: 12 + Math.random() * 20, // 12s to 32s fall time
          delay: Math.random() * -30, // Negative delay so they start scattered mid-fall
          glyphs
        });
      }
      setColumns(newCols);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="glyph-rain-container">
      {columns.map(col => (
        <div 
          key={col.id} 
          className="glyph-column"
          style={{ 
            left: `${col.left}px`, 
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`
          }}
        >
          {col.glyphs.map((g, idx) => {
             // The bottom of the column (idx 0) is brightest, fading out as it goes up the tail
             const opacity = Math.max(0.05, 1 - (idx / col.glyphs.length) * 0.95);
             return (
               <div key={idx} style={{ 
                 color: 'var(--accent-indigo, #a78bfa)', 
                 opacity, 
                 textShadow: idx === 0 ? `0 0 12px rgba(167, 139, 250, 0.8)` : 'none' 
               }}>
                 {g.label}
               </div>
             );
          })}
        </div>
      ))}
      {/* Top and bottom gradient overlays to smoothly blend the rain in and out */}
      <div className="glyph-rain-overlay top-overlay"></div>
      <div className="glyph-rain-overlay bottom-overlay"></div>
    </div>
  );
};
