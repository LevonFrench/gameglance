import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setThemeState] = useState<'dark'|'light'>(() => {
    return (localStorage.getItem('gg_theme') as 'dark'|'light') || 'dark';
  });

  const setTheme = (t: 'dark'|'light') => {
    setThemeState(t);
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('gg_theme', t);
    window.dispatchEvent(new CustomEvent('themechange', { detail: t }));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const listener = (e: Event) => {
      const customEvent = e as CustomEvent<'dark'|'light'>;
      setThemeState(customEvent.detail);
    };
    window.addEventListener('themechange', listener);
    return () => window.removeEventListener('themechange', listener);
  }, []);

  return { theme, setTheme, isDark: theme === 'dark' };
};
