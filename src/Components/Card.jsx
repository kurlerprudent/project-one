
import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


const Cards = ({imageName,title,description}) => {
  return (

    <Card id='card-section' sx={{ minWidth: 200,maxWidth:300 }}>
   
      <CardMedia
        component="img"
        height="140"
        image={imageName}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {description}
        </Typography>
      </CardContent>
    
    <CardActions>
      <Button size="small" color="primary">
        Learn more
      </Button>
    </CardActions>
  </Card>
  )
}

export default Cards