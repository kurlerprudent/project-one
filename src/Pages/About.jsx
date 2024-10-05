import Navbar from "../Components/Navbar"
import AboutSctions from "../Components/AboutSctions"
import { Box } from "@mui/material"
const About = () => {
  return (
   <Box>
       
    <Box
      sx={{
        position:'absolute',top:0,left:0,width:'100%',height:'auto'
        
      }}
      >
        <Navbar/>
      </Box>
      <AboutSctions/>
      </Box>
  )
}

export default About