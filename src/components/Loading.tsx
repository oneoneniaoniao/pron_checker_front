import { Container, Typography } from '@mui/material';

export default function Loading() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 10 }}>
      <Typography variant="h5">Loading...</Typography>
    </Container>
  );
}
