import { useEffect } from 'react';

export function useArrowNavigation(selector: string) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) return;

      const activeEl = document.activeElement;
      if (activeEl?.tagName === 'INPUT' || activeEl?.tagName === 'SELECT') return;

      const elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
      if (elements.length === 0) return;

      const currentIndex = elements.indexOf(activeEl as HTMLElement);
      
      if (currentIndex === -1) {
        // If we press an arrow key and nothing is focused, focus the first item
        elements[0].focus();
        e.preventDefault();
        return;
      }

      e.preventDefault();

      let nextIndex = currentIndex;

      if (e.key === 'ArrowRight') {
        nextIndex = Math.min(currentIndex + 1, elements.length - 1);
      } else if (e.key === 'ArrowLeft') {
        nextIndex = Math.max(currentIndex - 1, 0);
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        // Calculate columns dynamically
        const topOfFirst = elements[0].getBoundingClientRect().top;
        let columns = 1;
        for (let i = 1; i < elements.length; i++) {
          if (elements[i].getBoundingClientRect().top === topOfFirst) {
            columns++;
          } else {
            break;
          }
        }
        
        if (e.key === 'ArrowDown') {
          nextIndex = Math.min(currentIndex + columns, elements.length - 1);
        } else {
          nextIndex = Math.max(currentIndex - columns, 0);
        }
      }

      elements[nextIndex].focus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selector]);
}
