import { Box, IconButton, Typography } from "@mui/material"
import SecondHeroSection from "../Components/SecondHeroSection"
import { blue, grey } from "@mui/material/colors"
import { Email, LocationOn, Twitter } from "@mui/icons-material"
import ContactForm from "../Components/ContactForm"
import Navbar from "../Components/Navbar"

const Conatct = () => {
  return (
  <Box>


    <SecondHeroSection pageName='Contact Us' /> 


    <Box boxShadow={2} sx={{width:{md:'90%',lg:'80%',xs:'100%'}, bgcolor:grey[300],mx:{md:'5%',xs:0},display:'flex',flexDirection:'column',p:{lg:10},gap:8}}>

    <Box sx={{width:'100%',display:'flex',flexDirection:'row',gap:3,flexWrap:'wrap',justifyContent:{lg:'space-between',xs:'center'},alignItems:'center',pt:10}}>

    <Box textAlign="center" sx={{display:'flex',flexDirection:'column',gap:2}}>
            <IconButton>
              <Email fontSize="large" />
            </IconButton>
            <Typography variant="h6">Contact us today</Typography>
            <Typography>Phone: +90 987 665 55 44</Typography>
            <Typography>Fax: +90 987 665 55 45</Typography>
            <Typography>Email: info@yoursite.com</Typography>
          </Box>

          <Box textAlign="center" sx={{display:'flex',flexDirection:'column',gap:2}}>
            <IconButton>
              <LocationOn fontSize="large" />
            </IconButton>
            <Typography variant="h6">Visit Our Office</Typography>
            <Typography>PO Box 16122 Collins Street West</Typography>
            <Typography>Victoria 8007 Australia</Typography>
            <Typography>View on Google Map</Typography>
          </Box>

          <Box textAlign="center" sx={{display:'flex',flexDirection:'column',gap:2}}>
            <IconButton>
              <Twitter fontSize="large" />
            </IconButton>
            <Typography variant="h6">Be Social</Typography>
            <Typography>Twitter: @yourhandle</Typography>
            <Typography>Facebook: facebook.com/yourhandle</Typography>
            <Typography>Email Newsletter</Typography>
          </Box>

    </Box>
    <Box sx={{width:'100%',display:'flex',flexDirection:{xs:'column',md:'row'},gap:1}}>
      <Box>
        <ContactForm/>
      </Box>
      <Box></Box>
    </Box>

    </Box>
  </Box>
  )
}

export default Conatct