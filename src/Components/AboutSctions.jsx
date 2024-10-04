import React from 'react'
import './AboutSection.css'
import Navbar from './Navbar'
import { Box, Divider, Typography } from '@mui/material'
import ceo from '../Images/ceo3.jpg'
const AboutSctions = () => {
  return (
    <div>
    <Navbar/>

      <div className="first-container">
        <div className="first-content">
            <Box sx={{mt:10,px:'5%'}}>
                <Typography sx={{fontSize:48,fontWeight:'500',mb:0}}>Message From the CEO</Typography>
                <Typography sx={{mt:0,textAlign:'center'}}>Success Yeboah Wonder [S&S Innovative]</Typography>
            </Box>
            <Divider sx={{color:'white',borderWidth:2}}/>
            <Box sx={{display:'flex',flexDirection:'column',gap:10,px:'5%'}}>
                <Typography>                                        I warmly welcome you to the SHSDesk website. I am very confident that you will find our website useful. We are proud of our continued success as the best platform to make SHS admission simple and easy in Ghana. We can provide your school or organization with the finest web systems to simplify manual processes.
                </Typography>
                <Typography>                                    We provide a higher level of services and solutions to our clients. With the best programmers and experts in system development, S&S Innovative Hub can provide your school or organization with the best web system and services. Send us a message now through our Contact Form or via WhatsApp                                           </Typography>
            </Box>
           
        </div>
        <div className="first-image">
            <img src={ceo} alt="CEO" style={{width:'100%',height:'100%', objectFit:'cover'}}/>
            <div className='blender'>
      
                <div></div>
                
                </div>
        </div>
      </div>

      <div className="second-container">
        <div className='second-section-container'></div>
      <div className="left-info">

                    
<h3 className='title'>Our Mission Is to Empower</h3>
<div className="info">
    <h4 className="number">24</h4>
    <h4 className="text-info">Professional Online Modules</h4>
</div>
<div className="info">
    <h4 className="number">24</h4>
    <h4 className="text-info">Professional Online Modules</h4>
</div>


</div>

<div className="right-info"></div>

      </div>
    </div>
  )
}

export default AboutSctions