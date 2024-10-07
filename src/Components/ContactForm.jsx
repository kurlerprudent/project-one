import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { blue } from '@mui/material/colors';

const ContactForm = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography sx={{color:blue[600]}} variant="h4" align="center" gutterBottom>
          Contact Form
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Enter your name"
            margin="normal"
            variant="outlined"
        
          />
          <TextField
            fullWidth
            label="Enter email"
            margin="normal"
            variant="outlined"
            
          />
          <TextField
            fullWidth
            label="Your phone"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Subject"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Message goes here"
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />
          <Box  textAlign="center" sx={{ mt: 2 }}>
            <Button disableRipple variant="contained" sx={{width:200,bgcolor:blue[800]}}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;
