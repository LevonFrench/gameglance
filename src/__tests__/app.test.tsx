import { render, screen } from '@testing-library/react';
import App from '../App';
import { expect, it, describe, vi } from 'vitest';

// No longer mocking GameSelectView to ensure we catch mapping errors over SUPPORTED_GAMES

describe('App Smoke Test', () => {
  it('renders the game select view by default without crashing on malformed game definition arrays', () => {
    render(<App />);
    expect(screen.getByText(/SELECT GAME/i)).toBeInTheDocument();
  });
});

