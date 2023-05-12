import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useGetSelectedFavoriteQuery } from '../../features/selectedMovies/selectedMoviesApiSlice';
import { Report, Loading } from 'notiflix';

const FavoriteMovies = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetSelectedFavoriteQuery();

  if (isError) {
    console.log(error);
  }

  return (
    <>
      {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
      {error && (Report.failure('Error', `${error.data}`), Loading.remove())}

      {isSuccess && (
        <Card sx={{ maxWidth: 275 }}>
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
      )}
    </>
  );
};

export default FavoriteMovies;
