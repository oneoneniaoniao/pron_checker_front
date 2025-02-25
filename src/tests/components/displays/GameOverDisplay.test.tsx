import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import GameOverScreen from '@/components/displays/GameOverDisplay';

describe('GameOverScreen', () => {
  let originalReload: () => void;
  let mockedReload: ReturnType<typeof vi.fn>;

  beforeAll(() => {
    originalReload = window.location.reload;
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...window.location,
        reload: vi.fn(),
      },
    });
    mockedReload = window.location.reload as ReturnType<typeof vi.fn>;
  });
  afterAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...window.location,
        reload: originalReload,
      },
    });
  });

  it('calls window.location.reload when Restart button is clicked', () => {
    render(<GameOverScreen score={10} />);
    const restartButton = screen.getByRole('button', { name: /restart/i });
    fireEvent.click(restartButton);
    expect(mockedReload).toHaveBeenCalled();
  });
});
