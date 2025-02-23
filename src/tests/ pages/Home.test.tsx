import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import Home from '@/pages/Home';

const mockQuestion = {
  words: ['correct', 'wrong'],
  audioUrl: 'audio/test.mp3',
  correctIndex: 0,
};

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockQuestion),
    } as unknown as Response)
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Home', () => {
  it('shows Game Over when wrong answer is clicked', async () => {
    render(<Home />);
    await waitFor(() => screen.getByRole('button', { name: /wrong/i }));
    const wrongButton = screen.getByRole('button', { name: /wrong/i });
    fireEvent.click(wrongButton);
    await waitFor(() => {
      expect(screen.getByText(/Game Over!/i)).toBeInTheDocument();
    });
  });

  it('increments score and loads next question when correct answer is clicked', async () => {
    render(<Home />);
    await waitFor(() => screen.getByRole('button', { name: /correct/i }));
    const correctButton = screen.getByRole('button', { name: /correct/i });
    fireEvent.click(correctButton);
    await waitFor(() => {
      expect(screen.getByText(/Score: 1/)).toBeInTheDocument();
    });
  });
});
