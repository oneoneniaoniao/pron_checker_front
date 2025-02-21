import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Loading from '@/components/Loading';
import QuestionDisplay from '@/components/QuestionDisplay';
import GameOverScreen from '@/components/GameOverDisplay';

interface QuestionData {
  words: string[];
  audioUrl: string;
  correctIndex: number;
}

export default function Game() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [question, setQuestion] = useState<QuestionData | null>(null);

  const API_URL = import.meta.env.DEV ? 'http://localhost:3001/word/random' : '/sample.json';

  const fetchQuestion = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data: QuestionData) => {
        setQuestion(data);
        console.log(data);
      })
      .catch((err) => {
        console.error('Error fetching question:', err);
      });
  };

  useEffect(() => {
    fetchQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [API_URL]);

  const handleAnswer = (selectedIndex: number) => {
    if (!question) return;
    if (selectedIndex === question.correctIndex) {
      setScore((prev) => prev + 1);
      fetchQuestion();
    } else {
      setGameOver(true);
    }
  };

  if (!question) {
    return <Loading />;
  }

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      {gameOver ? (
        <GameOverScreen score={score} />
      ) : (
        <QuestionDisplay audioUrl={question.audioUrl} words={question.words} score={score} onAnswer={handleAnswer} />
      )}
    </Container>
  );
}
