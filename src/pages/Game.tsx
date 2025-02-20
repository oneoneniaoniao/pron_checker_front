import { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface QuestionData {
  words: string[];
  audioUrl: string;
  correctIndex: number;
}

export default function Game() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [question, setQuestion] = useState<QuestionData | null>(null);

  const apiUrl = import.meta.env.DEV ? 'http://localhost:3001/word/random' : '/sample.json';
  const audioUrlBase = import.meta.env.DEV ? 'http://localhost:3001' : '';

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data: QuestionData) => {
        setQuestion(data);
        console.log(data);
      })
      .catch((err) => {
        console.error('Error fetching question:', err);
      });
  }, [apiUrl]);

  const handleAnswer = (selectedIndex: number) => {
    if (!question) return;
    if (selectedIndex === question.correctIndex) {
      setScore((prev) => prev + 1);
      // 次の問題を取得する処理を追加する場合はここに記述
    } else {
      setGameOver(true);
    }
  };

  if (!question) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h5">Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      {gameOver ? (
        <>
          <Typography variant="h4" color="error">
            Game Over!
          </Typography>
          <Typography variant="h6">Score: {score}</Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }} onClick={() => navigate('/game')}>
            Restart
          </Button>
        </>
      ) : (
        <>
          <audio controls src={audioUrlBase + '/' + question.audioUrl}></audio>
          <Box sx={{ mt: 2 }}>
            {question.words.map((word, index) => (
              <Button key={index} variant="contained" sx={{ m: 1 }} onClick={() => handleAnswer(index)}>
                {word}
              </Button>
            ))}
          </Box>
          <Typography variant="h6">Score: {score}</Typography>
        </>
      )}
    </Container>
  );
}
