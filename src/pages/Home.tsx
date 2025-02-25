import { useState, useEffect } from 'react';
import { Container } from '@mui/material';

import Loading from '@/components/parts/Loading';
import QuestionDisplay from '@/components/displays/QuestionDisplay';
import GameOverScreen from '@/components/displays/GameOverDisplay';

interface QuestionData {
  words: string[];
  audioUrl: string;
  correctIndex: number;
}

export default function Home(): JSX.Element {
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [question, setQuestion] = useState<QuestionData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const API_URL = import.meta.env.DEV ? 'http://localhost:3001/word/random' : '/sample.json';

  const fetchQuestion = async (): Promise<void> => {
    try {
      const res = await fetch(API_URL);
      const data: QuestionData = await res.json();
      setQuestion(data);
    } catch (err) {
      setError('Error fetching question');
      console.error('Error fetching question:', err);
    }
  };

  useEffect(() => {
    fetchQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = (selectedIndex: number): void => {
    if (!question) return;
    if (selectedIndex === question.correctIndex) {
      setScore((prev: number) => prev + 1);
      fetchQuestion();
    } else {
      setGameOver(true);
    }
  };

  const containerStyle = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  if (error) {
    return (
      <Container sx={containerStyle}>
        <p>{error}</p>
      </Container>
    );
  }

  if (!question) {
    return (
      <Container sx={containerStyle}>
        <Loading />
      </Container>
    );
  }

  return (
    <Container id="game-container" sx={containerStyle}>
      {gameOver ? (
        <GameOverScreen score={score} />
      ) : (
        <QuestionDisplay audioUrl={question.audioUrl} words={question.words} score={score} onAnswer={handleAnswer} />
      )}
    </Container>
  );
}
