import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const FavoriteMovies = () => {
  return (
    <Card sx={{ maxWidth: 215 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={require('../../img/test/images-1.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            test
          </Typography>
          <Typography variant="body2" color="text.secondary">
            test description test description test description test description
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FavoriteMovies;
