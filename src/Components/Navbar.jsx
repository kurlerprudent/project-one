import { AppBar, IconButton, Toolbar, Box } from '@mui/material';  
import React, { useEffect, useState } from 'react';  
import logo from '../Images/logo.png';  
import MenuIcon from '@mui/icons-material/Menu';  
import './Navbar.css';  
import { Close } from '@mui/icons-material';

const Navbar = () => {  
  const [isScrollDown, setIsScrollDown] = useState(false);  
  const [isOpen, setisOpen] = useState(false) ;

  const handleClick = ()=>{
    setisOpen(!isOpen)
  }

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
    <>
    <AppBar sx={{bgcolor:'transparent'}} className={`navbar ${isScrollDown ? 'scrolled' : ''}`}>  
      <Toolbar className="nav-container">  
        <div className='logo'>
        <Box  component="img" src={logo} alt="logo" sx={{ height: 40 }} /> 
        </div>
         

         <div className='nav-links'>
            <ul className='links'>
                <li className="link">Home</li>
                <li className="link">About</li>
                <li className="link">Schools</li>
                <li className="link">Contact</li>
                <li className="link">Student Menu</li>
            </ul>
         </div>
      </Toolbar> 
   
      <div className='menu-icon'>
      <IconButton  onClick={handleClick} edge="end" color="inherit" aria-label="menu"> 
        {
            isOpen ? (<div className="mobile-nav">
                <Close sx={{color:'white', position:'absolute',top:5,right:10,fontSize:40}}/>
                <div className='mobile-nav-links'>
                    <ul>
                        <li className="link">Home</li>
                        <li className="link">About</li>
                        <li className="link">Schools</li>
                        <li className="link">Contact</li>
                        <li className="link">Student Menu</li>
                    </ul>
                </div>
            </div>) : ( <MenuIcon sx={{ color: 'white', fontSize: 40 }} />  )
        } 
         
        </IconButton> 
      </div>
    </AppBar>  
    
    </>
  );  
};  

export default Navbar;