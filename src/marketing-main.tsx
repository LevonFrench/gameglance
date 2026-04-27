import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from "@sentry/react";
import './index.css'
import { LandingView } from './LandingView'

import { PromoTrailerView } from './PromoTrailerView'

Sentry.init({
  dsn: "https://9063c32b9eda7280ab27fcdb6a777f8c@o4511275909054464.ingest.us.sentry.io/4511275922292736",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  sendDefaultPii: true
});

const isPromo = window.location.search.includes('promo=true');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isPromo ? (
      <PromoTrailerView />
    ) : (
      <LandingView onLaunch={() => {
        window.location.href = '/';
      }} />
    )}
  </StrictMode>,
)
