import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import QuestionDisplay from '@/components/QuestionDisplay';

describe('QuestionDisplay', () => {
  const props = {
    audioUrl: 'test-audio.mp3',
    words: ['apple', 'banana'],
    score: 7,
    onAnswer: vi.fn(),
  };

  it('renders two word buttons and displays the correct score', () => {
    render(<QuestionDisplay {...props} />);

    // 単語ボタンが 2 つレンダリングされることを検証します。
    const wordButtons = screen.getAllByRole('button');
    expect(wordButtons).toHaveLength(props.words.length);

    expect(screen.getByText(`Score: ${props.score}`)).toBeInTheDocument();
  });

  it('calls onAnswer with index 0 when the first word button is clicked', () => {
    render(<QuestionDisplay {...props} />);

    const wordButtons = screen.getAllByRole('button');
    fireEvent.click(wordButtons[0]);
    expect(props.onAnswer).toHaveBeenCalledWith(0);
  });

  it('calls onAnswer with index 1 when the second word button is clicked', () => {
    render(<QuestionDisplay {...props} />);

    const wordButtons = screen.getAllByRole('button');
    fireEvent.click(wordButtons[1]);
    expect(props.onAnswer).toHaveBeenCalledWith(1);
  });
});
