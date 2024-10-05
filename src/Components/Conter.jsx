import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const Counter = ({ target }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 10000; // duration in milliseconds
    const incrementTime = 30; // time between increments in milliseconds

    const increment = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setNumber(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <Typography variant="h3" component="div">
      {number}
    </Typography>
  );
};

export default Counter