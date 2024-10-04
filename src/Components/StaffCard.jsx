import './StaffCard.css'
import image from '../Images/ceo.jpg'
import { Box } from '@mui/material'
const StaffCard = () => {
  return (
    
    <div className='container'>
        <div className="image-container">
            <img src={image} alt="image" style={{width:'100%',height:'100%'}} />
        </div>
        <h3 className="name">Ryan Dazzy</h3>
        <h5 className="post">VP Product Marketing</h5>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="button">Learn more</div>
    </div>
  )
}

export default StaffCard