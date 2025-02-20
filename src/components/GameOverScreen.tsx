import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface GameOverScreenProps {
  score: number;
}

export default function GameOverScreen({ score }: GameOverScreenProps) {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h4" color="error">
        Game Over!
      </Typography>
      <Typography variant="h6">Score: {score}</Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }} onClick={() => navigate('/game')}>
        Restart
      </Button>
    </Container>
  );
}
