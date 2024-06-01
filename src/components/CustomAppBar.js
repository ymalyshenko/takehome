import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { IconButton, Typography } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from 'react-router-dom';

export default function CustomAppBar({ showNavigation }) {
  const navigate = useNavigate();

  return (
    <AppBar elevation={0} position="static">
      <Container maxWidth="xl" sx={{ padding: 4, display: 'flex', justifyContent: 'center' }}>
        <Typography>New assessment</Typography>
      </Container>

      {showNavigation ? (
        <IconButton aria-label="delete" sx={{ position: 'absolute', top: '4rem' }} onClick={() => navigate(-1)}>
          <NavigateBeforeIcon />
        </IconButton>
      ) : null}
    </AppBar>
  );
}
