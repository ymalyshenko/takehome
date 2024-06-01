import { Container, Typography } from '@mui/material';

export default function NoMatch() {
  return (
    <>
      <Container maxWidth="xl" sx={{ padding: 5, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h1">404</Typography>
      </Container>
    </>
  );
}
