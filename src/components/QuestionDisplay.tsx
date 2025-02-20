import { Container, Typography, Button, Box } from '@mui/material';

interface QuestionDisplayProps {
  audioUrl: string;
  words: string[];
  score: number;
  onAnswer: (selectedIndex: number) => void;
}

const AUDIO_URL_BASE = import.meta.env.DEV ? 'http://localhost:3001' : '';

export default function QuestionDisplay({ audioUrl, words, score, onAnswer }: QuestionDisplayProps) {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      <audio controls src={`${AUDIO_URL_BASE}/${audioUrl}`}></audio>
      <Box sx={{ mt: 2 }}>
        {words.map((word, index) => (
          <Button key={index} variant="contained" sx={{ m: 1 }} onClick={() => onAnswer(index)}>
            {word}
          </Button>
        ))}
      </Box>
      <Typography variant="h6">Score: {score}</Typography>
    </Container>
  );
}
