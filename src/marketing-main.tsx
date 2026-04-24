import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LandingView } from './LandingView'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingView onLaunch={() => {
      window.location.href = '/';
    }} />
  </StrictMode>,
)
