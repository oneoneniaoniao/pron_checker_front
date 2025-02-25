import { render, screen, fireEvent } from '@testing-library/react';
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';

import AudioPlayer from '@/components/parts/AudioPlayer';

describe('AudioPlayer', () => {
  beforeEach(() => {
    vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve());
    vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the audio element and triggers play on button click', async () => {
    render(<AudioPlayer audioUrl="test-audio.mp3" />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });
});
