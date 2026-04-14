import React from 'react';
import { getGlyphLabel, getGlyphColor } from './glyphMap';
import type { ControllerType } from './glyphMap';
import { useTheme } from './ThemeContext';

interface GlyphSequenceProps {
  inputs: string[];
  controller: ControllerType;
  large?: boolean;
}

const DIRECTION_ROTATIONS: Record<string, string> = {
  '→': '0', '↘': '45', '↓': '90', '↙': '135',
  '←': '180', '↖': '225', '↑': '270', '↗': '315',
};

const NUMPAD_MAP: Record<string, string> = {
  '1': 'down-back', '2': 'down', '3': 'down-forward',
  '4': 'back', '6': 'forward', '7': 'up-back',
  '8': 'up', '9': 'up-forward'
};

const tokenizeInputs = (inputs: string[]): string[] => {
  const result: string[] = [];
  for (const raw of inputs) {
    if (['down', 'forward', 'back', 'up', 'down-forward', 'down-back', 'up-forward', 'up-back', '360', '720', '[Cancel]'].includes(raw)) {
      result.push(raw);
      continue;
    }
    const tokens = raw.split(/(\+| |,|~|\[Cancel\]|-|\/)/g).filter(Boolean);
    for (let t of tokens) {
      if (t === ' ') { result.push('[Cancel]'); continue; }
      if (t === ',') { result.push('[Cancel]'); continue; }
      if (t === '-') { result.push('[Cancel]'); continue; }
      if (t === '~') { result.push('[Cancel]'); continue; }
      if (t === '/') { result.push('or'); continue; }
      if (t === '+') { result.push('+'); continue; }
      if (t === '[Cancel]') { result.push(t); continue; }

      if (/^[1-46-9]+$/.test(t)) {
        for (const digit of t) {
          result.push(NUMPAD_MAP[digit]);
        }
      } else {
        result.push(t);
      }
    }
  }
  return result;
};

const renderDirectionalSVG = (label: string, large: boolean, isDark: boolean) => {
  const deg = DIRECTION_ROTATIONS[label];
  if (deg === undefined) return null;

  const size = large ? 44 : 32;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ transform: `rotate(${deg}deg)` }}>
      <circle cx="12" cy="12" r="10.5" fill={isDark ? '#161625' : '#e8e8f0'} stroke={isDark ? '#2a2a40' : '#c0c0d0'} strokeWidth="1.5" />
      <path
        d="M12 7 L17 12 L12 17"
        fill="none"
        stroke={isDark ? '#e0e0f0' : '#2a2a3e'}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="7" y1="12" x2="16" y2="12"
        stroke={isDark ? '#e0e0f0' : '#2a2a3e'}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const GlyphSequence: React.FC<GlyphSequenceProps> = ({ inputs, controller, large = false }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const expandedInputs = tokenizeInputs(inputs);

  return (
    <div style={{
      display: 'flex',
      gap: large ? '8px' : '5px',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}>
      {expandedInputs.map((input, idx) => {
        // Cancel / link separator
        if (input === '[Cancel]') {
          return (
            <span
              key={idx}
              style={{
                color: 'var(--text-muted)',
                fontWeight: 700,
                fontSize: large ? '1.2rem' : '0.8rem',
                margin: `0 ${large ? '2px' : '1px'}`,
                opacity: 0.6,
              }}
            >
              ›
            </span>
          );
        }

        if (input === '+') {
          return (
            <span
              key={idx}
              style={{
                color: 'var(--text-muted)',
                fontWeight: 800,
                fontSize: large ? '1.5rem' : '1rem',
                margin: `0 ${large ? '4px' : '2px'}`,
              }}
            >
              +
            </span>
          );
        }

        const label = getGlyphLabel(input, controller);
        const iconColor = getGlyphColor(input, controller);

        // Direction
        const svgImage = renderDirectionalSVG(label, large, isDark);
        if (svgImage) {
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              }}
            >
              {svgImage}
            </div>
          );
        }

        // Named multi-char label (like "Spear", "Teleport") — render as text pill
        if (label.length > 2) {
          return (
            <div
              key={idx}
              style={{
                padding: large ? '0.25rem 0.6rem' : '0.15rem 0.4rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-badge)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                fontSize: large ? '0.7rem' : '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {label}
            </div>
          );
        }

        // Attack button glyphs
        const btnSize = large ? 48 : 30;
        const isPlayStation = controller === 'playstation';
        const isArcade = controller === 'arcade';

        if (isArcade) {
          // Custom beautiful Vewlix style Recessed Buttons for arcade
          let bgColor = '#ef4444'; // Red default
          if (['MP', 'MK'].includes(label)) bgColor = '#eab308'; // Yellow
          if (['HP', 'HK'].includes(label)) bgColor = '#3b82f6'; // Blue

          return (
            <div
              key={idx}
              style={{
                width: `${btnSize}px`,
                height: `${btnSize}px`,
                borderRadius: '50%',
                background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${bgColor} 20%, ${bgColor} 80%, #000000 100%)`,
                border: `1.5px solid ${isDark ? '#111' : '#ddd'}`,
                boxShadow: '0 3px 5px rgba(0,0,0,0.6), inset 0 -4px 6px rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: large ? '0.9rem' : '0.65rem',
                fontWeight: 900,
                textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 -1px 0 rgba(0,0,0,0.4)',
                letterSpacing: '-0.05em',
                flexShrink: 0,
              }}
            >
              {label}
            </div>
          );
        }

        return (
          <div
            key={idx}
            style={{
              width: `${btnSize}px`,
              height: `${btnSize}px`,
              backgroundColor: isPlayStation ? (isDark ? '#161625' : '#e0e0ed') : iconColor,
              borderRadius: '50%',
              color: isPlayStation ? iconColor : '#fff',
              fontWeight: 900,
              fontSize: large ? '1.3rem' : '0.75rem',
              boxShadow: `
                0 3px 6px rgba(0,0,0,${isDark ? '0.4' : '0.15'}),
                inset 0 -3px 0 rgba(0,0,0,0.2),
                inset 0 2px 0 rgba(255,255,255,${isDark ? '0.06' : '0.3'}),
                0 0 0 1.5px ${isPlayStation ? iconColor + '25' : 'rgba(0,0,0,0.2)'}
              `,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textShadow: isPlayStation
                ? `0 0 10px ${iconColor}50, 0 1px 3px rgba(0,0,0,0.8)`
                : '0 1px 3px rgba(0,0,0,0.6)',
              flexShrink: 0,
            }}
          >
            <span style={{
              transform: isPlayStation
                ? (['▢', '△', '✕', '◯'].includes(label) ? 'scale(1.4)' : 'scale(1.1)')
                : (label.length > 1 ? 'scale(0.95)' : 'scale(1.2)'),
              display: 'inline-block',
              lineHeight: 1,
              marginTop: isPlayStation && ['▢', '△', '✕', '◯'].includes(label) ? '-2px' : '0',
            }}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
