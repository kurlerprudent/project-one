import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Divider } from '@mui/material';
import image1 from '../Images/presec.jpg'
const SchoolCard = () => {
  return (
    <Card sx={{ minWidth: 330 }}>
      <CardMedia
        component="img"
        height="140"
        image={image1}
        alt="Business Consulting"
        
      />
      <CardContent>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mb:3}}>
            <Typography variant='p'>SHS</Typography>
            <Typography variant='p'>Day/Boarding</Typography>
        </Box>
        <Typography gutterBottom variant="h6" component="div">
          School Name
        </Typography>
        <Divider sx={{borderWidth:1,my:2}}/>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            School Information
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2, mt:3}}>
        <Button variant="contained" color="primary">
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default SchoolCard;
