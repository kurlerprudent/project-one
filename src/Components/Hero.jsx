import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import hero from '../Images/heroS1.jpg';
import Navbar from './Navbar'
import { blue, grey } from '@mui/material/colors';
import Arrow from './Arrow';
import './Hero.css'

const Hero = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Box
        sx={{
          
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h3" component="h3" sx={{ marginBottom: '1rem',fontSize:{md:80,sm:50},fontWeight:'800', transition:'0.4s ease',':hover':{color:'transparent',WebkitTextStroke:'2px white',cursor:'pointer'} }}>
          WELCOME TO SHSDesk
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: '2rem',fontSize:{md:24,xs:16},textAlign:'center',color:grey[300],fontWeight:'700' }}>
          This is your number one web application to make your Senior High School admission easy and safe
        </Typography>
        <Button sx={{color:'white',paddingX:10,py:1,fontWeight:'700',fontSize:20,mt:7,backgroundColor:blue[600]}} disableRipple variant="contained">
          Explore
        </Button>
      </Box>

     

      <Box
      sx={{
        position:'absolute',top:0,left:0,width:'100%',height:'auto',bgcolor:'transparent'
        
      }}
      >
        <Navbar/>
      </Box>
    </Box>
  );
};

export default Hero;
