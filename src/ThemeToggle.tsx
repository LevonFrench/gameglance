import React from 'react';
import { useTheme } from './ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Current theme: ${theme}`}
      style={{
        background: 'var(--bg-glass)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-secondary)',
        padding: '0.4rem 0.8rem',
        borderRadius: '20px',
        fontSize: '0.8rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      theme: {theme}
    </button>
  );
};
