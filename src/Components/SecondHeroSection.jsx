import { Box, Typography } from "@mui/material"
import Navbar from "./Navbar"
import { ArrowRight } from "@mui/icons-material"
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

const SecondHeroSection = ({mycolor,pageName,mybackground}) => {
  return (
    <>
    <Box sx={{position:'-webkit-sticky',position:'sticky',marginBottom:10}}>

    
    <Navbar/>
    </Box>
   <Box sx={{width:'1oo%',height:300,backgroundColor:'black',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box sx={{display:'flex',flexDirection:'column',gap:2,color:"white"}}>
                <Typography sx={{fontSize:30}}>{pageName}</Typography>
                <Box sx={{display:'flex',gap:1}}>
                <Link component={RouterLink} to='/' sx={{ textDecoration: 'none', color: 'white' }}>
                 <Typography>Home</Typography>
                </Link>
                <ArrowRight/>
                <Typography>{pageName}</Typography>
                </Box>
               
            </Box>
   </Box>
   </>
  )
}

export default SecondHeroSection