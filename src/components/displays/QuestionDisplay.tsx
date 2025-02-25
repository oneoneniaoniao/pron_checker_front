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
    <Container maxWidth="sm" sx={{ textAlign: 'center', px: 0 }}>
      <Typography variant="h6" sx={{ mb: 5 }}>
        Score: {score}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
        <AudioPlayer audioUrl={`${AUDIO_URL_BASE}/${audioUrl}`} />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, mb: 4 }}>
        {words.map((word, index) => (
          <Button
            key={index}
            variant="contained"
            size="large"
            sx={{ my: 1, p: 1.4, minWidth: '160px', bgcolor: 'primary.light', fontSize: '18px' }}
            onClick={() => onAnswer(index)}
          >
            {word}
          </Button>
        ))}
      </Box>
    </Container>
  );
}
