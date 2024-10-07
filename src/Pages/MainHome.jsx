import React from 'react'
import Hero from '../Components/Hero'
import image1 from '../Images/admitted.jpg'
import image2 from '../Images/placemet2.jpg'
import image3 from '../Images/placement.jpg'
import image4 from '../Images/registered.jpg'
import { Box } from '@mui/material'
import Cards from '../Components/Card'
import CheckAdmission from '../Components/CheckAdmission'
import SchoolDropdown from '../Components/SchoolSelect'
import StatisticsDisplay from '../Components/Stats'

const MainHome = () => {
  return (
    <div style={{backgroundColor:'#f8f9fa'}}>
        <Hero/>
        <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},gap:10,width:'100%',mt:20,justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
       <StatisticsDisplay/>
        </Box>

        <Box sx={{display:'flex',gap:5,mt:15,flexDirection:{xs:'column',md:'row'},px:{xs:'2%',md:0}}}>
          <CheckAdmission/>
          <SchoolDropdown/>
        </Box>

      
       
    </div>
  )
}

export default MainHome