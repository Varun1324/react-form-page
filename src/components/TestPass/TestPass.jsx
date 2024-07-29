// App.jsx
import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import MoviePass from '../MoviePass/MoviePass';

const TestPass = () => {
  const user = {
    name: "John Doe",
    number: "123-456-7890",
    picture: "https://via.placeholder.com/150" // Replace with actual user picture URL
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <MoviePass user={user} />
    </Container>
  );
};

export default TestPass;
