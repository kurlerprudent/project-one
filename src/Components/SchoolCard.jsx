
import { Card, CardContent, CardMedia, Typography, Button, Box, Divider } from '@mui/material';



const SchoolCard = ({imageName,schoolName,schoolType,schoolInfo}) => {


  return (
    <Card sx={{ minWidth: 200,maxWidth:300 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageName}
        alt="Business Consulting"
        
      />
      <CardContent>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mb:3}}>
            <Typography variant='p'>SHS</Typography>
            <Typography variant='p'>{schoolType}</Typography>
        </Box>
        <Typography gutterBottom variant="h6" component="div">
          {schoolName}
        </Typography>
        <Divider sx={{borderWidth:1,my:2}}/>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {schoolInfo.legnth > 16 ? `${schoolInfo.slice(0,20)}...`:schoolInfo}
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2, mt:3}}>
        <Button variant="contained" color="primary">
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default SchoolCard;
