import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const MoviePass = ({ user }) => {
  return (
    <>
    <Card sx={{ display: 'flex', maxWidth: 400, margin: 'auto', mt: 4, boxShadow: 3, backgroundColor: 'black', color: 'white' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={user.picture}
        alt={user.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
        <CardContent>
          <Typography component="div" variant="h5">
            {user.name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {user.number}
          </Typography>
        </CardContent>
      </Box>
      
    </Card>
    <Card sx={{ display: 'flex', maxWidth: 400, margin: 'auto', mt: 4, boxShadow: 3, backgroundColor: 'black', color: 'white' }}>
    <CardMedia
      component="img"
      sx={{ width: 151 }}
      image={user.picture}
      alt={user.name}
    />
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
      <CardContent>
        <Typography component="div" variant="h5">
          {user.name}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {user.number}
        </Typography>
      </CardContent>
    </Box>
    
  </Card>
  <Card sx={{ display: 'flex', maxWidth: 400, margin: 'auto', mt: 4, boxShadow: 3, backgroundColor: 'black', color: 'white' }}>
  <CardMedia
    component="img"
    sx={{ width: 151 }}
    image={user.picture}
    alt={user.name}
  />
  <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
    <CardContent>
      <Typography component="div" variant="h5">
        {user.name}
      </Typography>
      <Typography variant="subtitle1" component="div">
        {user.number}
      </Typography>
    </CardContent>
  </Box>
  
</Card></>
  );
};

export default MoviePass;
