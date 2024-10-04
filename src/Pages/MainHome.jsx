import React from 'react'
import Home from './Home'
import image1 from '../Images/courses.jpg'
import image2 from '../Images/placemet2.jpg'
import image3 from '../Images/placement.jpg'
import image4 from '../Images/registered.jpg'
import { Box } from '@mui/material'
import AdmissionBox from '../Components/AdmissionBox'
import Cards from '../Components/Card'

const MainHome = () => {
  return (
    <div style={{backgroundColor:'#f8f9fa'}}>
        <Home/>
        <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column'},gap:10,width:'100%',mt:20,justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
        <Cards imageName={image1} title='Our Courses'/>
        <Cards imageName={image2} title='Our Courses'/>
        <Cards imageName={image3} title='Our Courses'/>
        <Cards imageName={image4} title='Our Courses'/>
        </Box>

        <Box>
            <AdmissionBox/>
        </Box>
       
    </div>
  )
}

export default MainHome