import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{mt:10,  backgroundColor: '#333', color: '#fff', p: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam itaque unde facere repellendus, odio excepturi.
          </Typography>
          <Typography variant="body2">
            +1 291 3912 329
          </Typography>
          <Typography variant="body2">
            info@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Latest News
          </Typography>
          <Typography variant="body2" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facere unde omnis veniam porro excepturi.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Post
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Box component="img" src="https://via.placeholder.com/60" alt="Instagram 1" />
            <Box component="img" src="https://via.placeholder.com/60" alt="Instagram 2" />
            <Box component="img" src="https://via.placeholder.com/60" alt="Instagram 3" />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4,flexDirection:{xs:'column-reverse',md:'row'} }}>
        <Box>
          <Link href="#" color="inherit" sx={{ mr: 2 }}>
            Home
          </Link>
          <Link href="#" color="inherit" sx={{ mr: 2 }}>
            About
          </Link>
          <Link href="#" color="inherit" sx={{ mr: 2 }}>
            Schools
          </Link>
          <Link href="#" color="inherit" sx={{ mr: 2 }}>
            Contact
          </Link>
          <Link href="#" color="inherit" sx={{ mr: 2 }}>
            Student Menu
          </Link>
         
        </Box>
        <Box>
          <IconButton href="#" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton href="#" color="inherit">
            <Twitter />
          </IconButton>
          <IconButton href="#" color="inherit">
            <Instagram />
          </IconButton>
        </Box>
      </Box>
      <Typography mt={4} sx={{textAlign:'center'}}>© Copyright 2024 www.shsdesk.com</Typography>
    </Box>
  );
};

export default Footer;
