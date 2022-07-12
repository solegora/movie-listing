import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import  AddFavourite from '../Components/AddFavourite';
import RemoveFavourites from '../Components/RemoveFavourites';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/system/Unstable_Grid/Grid'; 

const ExpandMore = styled((props) => {

    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const MovieList = (props, favourites,movies) => {


 const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
        setExpanded(!expanded);
  };

  return (
<>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {props.movies.map((movie, index) => (

    <Grid item xs={3} key={index}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Movies">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={movie.Title}
        subheader={movie.Year}
      />
      <CardMedia
        component="img"
        height="194"
        image={movie.Poster}
        alt="Poster"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {movie.Plot}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          {favourites ?     
            <IconButton aria-label="add to favorites" onClick={() => props.handleFavouritesClick(movie)}>
          <AddFavourite  favourites={props.favourites}/>
          </IconButton> :  
           <IconButton aria-label="add to favorites" onClick={() => props.removeFavouriteMovie(favourites)}>
          <RemoveFavourites  favourites={props.favourites}/>
          </IconButton>}
   
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          key={index}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Actors:</Typography>
          <Typography paragraph>
          {movie.Director}
          </Typography>
    
       
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
   ))}
</Grid>
   </>
 );
}
export default MovieList;