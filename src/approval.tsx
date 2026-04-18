import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ApprovalApp } from './ApprovalApp';
import { ThemeProvider } from './ThemeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ApprovalApp />
    </ThemeProvider>
  </StrictMode>
);
