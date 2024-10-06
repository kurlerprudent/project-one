import './StaffCard.css'
import { Box,Button,Divider,Typography } from '@mui/material'
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { blue, grey } from '@mui/material/colors';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:{md:'20%',xs:'70%'},
    height:'80vh',
    bgcolor: blue[200],
    border: '1px solid #050',
    boxShadow: 10,
    borderRadius:5,
    p: 4,
  };


const StaffCard = ({name,title,desc,imageName}) => {

      const [open, setOpen] = useState(false)
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
  return (
    
    <Box border={0.5} borderColor={grey[300]} boxShadow={2} className='container'>
        <div className="image-container">
            <img src={imageName} alt="image" style={{width:'100%',height:'100%'}} />
        </div>
        <h3 className="name">{name}</h3>
        <h5 className="post">{title}</h5>
        <p className="desc">{desc.length > 29 ? `${desc.slice(0, 30)}...` : desc}</p>

       <Button onClick={handleOpen}>Learn more</Button>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{width:'100%',height:'50%'}}>
                <img style={{width:'100%',height:'100%',objectFit:'cover'}} src={imageName} alt="image" />
            </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
            <br />
            {title}
          </Typography>
          <Divider sx={{my:2,borderWidth:1}} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {desc}
          </Typography>
          <Button sx={{mt:6,justifySelf:'center'}} onClick={handleClose} variant='outlined'>Cancel</Button>
        </Box>
       
      </Modal>
      </Box>
  )
}

export default StaffCard