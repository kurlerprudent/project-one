import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import Counter from './Conter';

const statistics = [
  { icon: <SchoolIcon fontSize="large" sx={{ color: '#1976d2' }} />, label: 'Courses', value: '216' },
  { icon: <PersonIcon fontSize="large" sx={{ color: '#d32f2f' }} />, label: 'Students Admitted', value: '14.3' },
  { icon: <WorkIcon fontSize="large" sx={{ color: '#388e3c' }} />, label: 'Students Placed', value: '29' },
  { icon: <BusinessIcon fontSize="large" sx={{ color: '#fbc02d' }} />, label: 'Registered Schools', value: '59' },
];

const StatisticsDisplay = () => {
  return (
    <Box sx={{ width: '100%', p: 2, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={2} justifyContent="center">
        {statistics.map((stat, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                {stat.icon}
              </Box>
              <Box sx={{display:'flex',width:'100%',justifyContent:'center'}}>
              <Typography variant="h5" component="div" sx={{ color: '#424242'}}>
                <Counter target={parseFloat(stat.value)}/>
              </Typography>
              <Typography variant='h5' sx={{color:'#424242',fontSize:41}}>k+</Typography>
              </Box>
             
              <Typography variant="subtitle1" color="textSecondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatisticsDisplay;
