import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import QuestionDisplay from '@/components/displays/QuestionDisplay';

describe('QuestionDisplay', () => {
  const props = {
    audioUrl: 'test-audio.mp3',
    words: ['apple', 'banana'],
    score: 7,
    onAnswer: vi.fn(),
  };

  it('renders two word buttons and displays the correct score', () => {
    render(<QuestionDisplay {...props} />);

    // 各回答ボタンは表示テキストが設定されていると仮定
    const appleButton = screen.getByText('apple');
    const bananaButton = screen.getByText('banana');

    expect(appleButton).toBeInTheDocument();
    expect(bananaButton).toBeInTheDocument();
    expect(screen.getByText(`Score: ${props.score}`)).toBeInTheDocument();
  });

  it('calls onAnswer with index 0 when the first word button is clicked', () => {
    render(<QuestionDisplay {...props} />);
    const appleButton = screen.getByText('apple');
    fireEvent.click(appleButton);
    expect(props.onAnswer).toHaveBeenCalledWith(0);
  });

  it('calls onAnswer with index 1 when the second word button is clicked', () => {
    render(<QuestionDisplay {...props} />);
    const bananaButton = screen.getByText('banana');
    fireEvent.click(bananaButton);
    expect(props.onAnswer).toHaveBeenCalledWith(1);
  });
});
