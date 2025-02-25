import { Container, Typography, Button } from '@mui/material';

interface GameOverScreenProps {
  score: number;
}

export default function GameOverScreen({ score }: GameOverScreenProps) {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h4" color="error" sx={{ mb: 6 }}>
        Game Over!
      </Typography>
      <Typography variant="h6" sx={{ my: 4 }}>
        Score: {score}
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{ my: 1, p: 1.4, minWidth: '160px', bgcolor: 'primary.light', fontSize: '18px' }}
        onClick={() => window.location.reload()}
      >
        Restart
      </Button>
    </Container>
  );
}
