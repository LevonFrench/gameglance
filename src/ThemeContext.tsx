import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export const ALL_THEMES = ['dark', 'light', 'tournament', 'arcade', 'cyberpunk', 'blood'] as const;
export type Theme = typeof ALL_THEMES[number];

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('gg_theme');
    if (ALL_THEMES.includes(stored as Theme)) return stored as Theme;
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gg_theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const nextIndex = (ALL_THEMES.indexOf(prev) + 1) % ALL_THEMES.length;
      return ALL_THEMES[nextIndex];
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
