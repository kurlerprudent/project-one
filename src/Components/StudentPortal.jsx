import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { blue } from '@mui/material/colors';

const StudentPortal = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8, p: 4, backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: 3 }}>
      <Typography sx={{color:blue[300]}} variant="h4" component="h1" gutterBottom align="center">
        Student Portal
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        This is the SHSDesk students portal. You can access your admission details using the admission button below.
      </Typography>
      <Box component="form" sx={{ mt: 4 }}>
        <TextField
          fullWidth
          label="Your JHS index number"
          placeholder="Enter your JHS index number"
          variant="outlined"
          margin="normal"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Admission Documents
        </Button>
      </Box>
    </Container>
  );
};

export default StudentPortal;
