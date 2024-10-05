import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const AdmissionForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:'90%',
        backgroundColor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Typography sx={{textAlign:'center',width:'100%',color:blue[400]}} variant="h4" component="h2" gutterBottom>
        Online SHS Admission
      </Typography>
      <Typography variant="body1" gutterBottom>
        Provide your JHS index number below
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: '100%',
          maxWidth: 400,
          backgroundColor: '#fff',
          padding: 3,
          borderRadius: 1,
          boxShadow: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          label="Enter JHS index number"
          placeholder="Eg. 100000000023"
          variant="outlined"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button variant="contained" color="primary">
            Check
          </Button>
          <Button variant="outlined" color="secondary">
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdmissionForm;
