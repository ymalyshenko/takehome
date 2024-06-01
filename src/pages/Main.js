import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import CustomAppBar from '../components/CustomAppBar';
import { Container } from '@mui/material';

export default function Main() {
  const navigate = useNavigate();
  const { questionId } = useParams();

  useEffect(() => {
    !questionId && navigate('./1');
  }, []);

  return (
    <Container maxWidth="xl" sx={{ padding: '1rem', height: '100vh' }}>
      <CustomAppBar showNavigation={questionId !== '1'} />

      <Outlet />
    </Container>
  );
}
