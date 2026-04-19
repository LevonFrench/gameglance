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
    
    const listener = (e: any) => {
      setThemeState(e.detail);
    };
    window.addEventListener('themechange', listener as EventListener);
    return () => window.removeEventListener('themechange', listener as EventListener);
  }, []);

  return { theme, setTheme, isDark: theme === 'dark' };
};
