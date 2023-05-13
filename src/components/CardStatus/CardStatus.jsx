import React from 'react';
import { useGetMovieByIdQuery } from '../../features/films/filmsApiSlice';
import FilmCard from '../FilmCard/FilmCard';
import { Report, Loading } from 'notiflix';

export const CardStatus = ({ id, status }) => {
  const { data, isLoading, isSuccess, isError, error } = useGetMovieByIdQuery({
    movieId: id,
    info: 'movie' || 'tv',
  });

  return (
    <>
      {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
      {error && (Report.failure('Error', `${error.data}`), Loading.remove())}

      {isSuccess && <FilmCard item={data} info="movie" status={status} />}
    </>
  );
};
