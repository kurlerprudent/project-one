import './AdmissionBox.css'
import { Box } from '@mui/material'


const AdmissionBox = () => {
  return (
    <div className='container'>
    <header>
    <h1>Online SHS Admission</h1>
  
</header>

<Box sx={{width:'100%',display:'flex',flexDirection:{xs:'column',lg:'row'},gap:10,justifyContent:{md:'space-around'}}}>
<div className="input-section">
<p>Enter your JHS index number below.</p>
    <input type="text" placeholder="Enter JHS index number [Eg. 010602907224]"/>
    <button className="btn-check">Check</button>
    <button className="btn-reset">Reset</button>
</div>

<div className="assistance-section">
    <h2>Need Assistance?</h2>
    <select>
        <option>Select A School</option>
        
    </select>
    <button className="btn-check">Contact Us</button>
</div>
</Box>
<Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} >
<div className="video-section">
    <h2>How to Register Your Details</h2>
    <p>Watch the video below for guidance on how to register for admission.</p>
    <video style={{width:'80%'}} controls>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>
</Box>
    </div>
  )
}

export default AdmissionBox