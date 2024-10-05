import { Box ,Typography} from "@mui/material"
import Navbar from "../Components/Navbar"
import SchoolCard from "../Components/SchoolCard"

const Schools = () => {
  return (

    <Box sx={{width:'100%'}}>

   <Box sx={{width:'100%',mt:10}}>
      <Box sx={{ mt: 4, mb: 4, width:'100%',bgcolor: '#212223', p:3 ,color:'white',height:100,display:'flex',flexDirection:'column',alignmentBaseline:'center',justifyContent:'center'}}>
        <Typography variant="h4" align="center" gutterBottom mb={0}>
          Find your school here
        </Typography>
        <Typography variant="h6" align="center" sx={{fontSize:{xs:20}}}>
          Learn more about your school
        </Typography>
      </Box>

      <Box sx={{width:'100%',display:'flex',gap:2,flexWrap:'wrap',px:{md:'2%',xs:0},justifyContent:{xs:'center'}}}>

        <SchoolCard/>
        <SchoolCard/>
        <SchoolCard/>
        <SchoolCard/>
        <SchoolCard/>

      </Box>
   </Box>
   </Box>
  )
}

export default Schools