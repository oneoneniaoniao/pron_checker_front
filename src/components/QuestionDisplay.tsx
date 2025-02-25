import { Container, Typography, Button, Box } from '@mui/material';

import AudioPlayer from '@/components/parts/AudioPlayer';

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
      <Typography variant="h6" sx={{ my: 4 }}>
        Score: {score}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <AudioPlayer audioUrl={`${AUDIO_URL_BASE}/${audioUrl}`} />
      </Box>
      <Box sx={{ mt: 2 }}>
        {words.map((word, index) => (
          <Button key={index} variant="contained" sx={{ m: 1 }} onClick={() => onAnswer(index)}>
            {word}
          </Button>
        ))}
      </Box>
    </Container>
  );
}
