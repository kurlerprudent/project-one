import { AppBar, IconButton, Toolbar, Box } from '@mui/material';  
import React, { useEffect, useState } from 'react';  
import logo from '../Images/logo.png';  
import MenuIcon from '@mui/icons-material/Menu';  
import './Navbar.css';  

const Navbar = () => {  
  const [isScrollDown, setIsScrollDown] = useState(false);  
   
  useEffect(() => {  
    let prevScrollPosition = window.pageYOffset
    const handleScroll = () => {  
        const currentScrollPositionn = window.pageYOffset
      setIsScrollDown(currentScrollPositionn > prevScrollPosition && currentScrollPositionn > 60);  

      prevScrollPosition = currentScrollPositionn;
    };  

    window.addEventListener('scroll', handleScroll);  
    return () => {  
      window.removeEventListener('scroll', handleScroll);  
    };  
  }, []);  

  return (  
    <AppBar sx={{bgcolor:'transparent'}} className={`navbar ${isScrollDown ? 'scrolled' : ''}`}>  
      <Toolbar className="nav-container">  
        <Box component="img" src={logo} alt="logo" sx={{ height: 40 }} />  
        <IconButton edge="end" color="inherit" aria-label="menu">  
          <MenuIcon sx={{ color: 'white', fontSize: 40 }} />  
        </IconButton>  
      </Toolbar>  
    </AppBar>  
  );  
};  

export default Navbar;