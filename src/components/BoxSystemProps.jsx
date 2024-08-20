// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Box, FormControl, InputLabel, Input, Button } from '@mui/material';

const BoxSystemProps = ({ handleOnSubmit }) => {
  return (
    <Container>
      <Box component="form" onSubmit={handleOnSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <FormControl sx={{ mb: 2, width: '300px',"& .MuiInput-underline:after": {
      borderBottomColor: "black",
    }, }}>
          <InputLabel htmlFor="roll-number-input" style={{color:"black"}}>Roll Number</InputLabel>
          <Input id="roll-number-input" aria-describedby="roll-number-helper-text" style={{color:"black"}} name='rollNumberInput'/>
        </FormControl>
        
        <FormControl sx={{ mb: 2, width: '300px',"& .MuiInput-underline:after": {
      borderBottomColor: "black",
    }, }}>
          <InputLabel htmlFor="phone-number-input" style={{color:"black"}}>Aadhar Number</InputLabel>
          <Input id="phone-number-input" type="text" aria-describedby="phone-number-helper-text" name='aadharNumberInput' style={{color:"black"}}/>
        </FormControl>
        
        <Button variant="contained" style={{ backgroundColor: "black" }} type="submit">
          Submit
        </Button>
      </Box>
    </Container>
  );
}


BoxSystemProps.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
  };

export default BoxSystemProps;
