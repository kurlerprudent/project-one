import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { blue } from '@mui/material/colors';

const SchoolDropdown = () => {
  const [school, setSchool] = useState('');

  const handleChange = (event) => {
    setSchool(event.target.value);
  };

  const handleReset = () => {
    setSchool('');
  };

  const handleCheck = () => {
    if (school) {
      alert(`You selected: ${school}`);
    } else {
      alert('Please select a school.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       width:'100%',
        backgroundColor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Typography sx={{color:blue[400]}} variant="h4" component="h1" gutterBottom>
        For Assistance
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please select your choice school to get the contact of your admin.
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="school-select-label">Select A School</InputLabel>
        <Select
          labelId="school-select-label"
          id="school-select"
          value={school}
          label="Select A School"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="CYO Technical Vocational Institute, Sovie">CYO Technical Vocational Institute, Sovie</MenuItem>
          <MenuItem value="Volo Community Senior High School">Volo Community Senior High School</MenuItem>
          <MenuItem value="Sovie Senior High School">Sovie Senior High School</MenuItem>
          <MenuItem value="St. Daniel Comboni Technical/Vocational Institute, Liati">St. Daniel Comboni Technical/Vocational Institute, Liati</MenuItem>
          <MenuItem value="Volta Technical Institute, Matse">Volta Technical Institute, Matse</MenuItem>
          <MenuItem value="Bishop Herman College, Kpando">Bishop Herman College, Kpando</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleCheck}>
          Check
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default SchoolDropdown;
