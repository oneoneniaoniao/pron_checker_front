import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h3" gutterBottom>
        Pronunciation Checker
      </Typography>
      <Typography variant="body1">音声を聞いて正しい単語を選びましょう！ 間違えるとゲームオーバーです。</Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: '40px' }} onClick={() => navigate('/game')}>
        Start!
      </Button>
    </Container>
  );
}
