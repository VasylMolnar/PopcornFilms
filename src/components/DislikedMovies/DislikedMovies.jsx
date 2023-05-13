import React from 'react';
import { useGetSelectedFavoriteQuery } from '../../features/selectedMovies/selectedMoviesApiSlice';
import { Report, Loading } from 'notiflix';
import { CardStatus } from '../CardStatus/CardStatus';

const DislikedMovies = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetSelectedFavoriteQuery({
    status: 'DISLIKED',
  });

  return (
    <>
      {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
      {error && (Report.failure('Error', `${error.data}`), Loading.remove())}

      {isSuccess &&
        data?.map(item => (
          <CardStatus id={item.apiTitleId} key={item.key} status="DISLIKED" />
        ))}
    </>
  );
};

export default DislikedMovies;
