import React from 'react';
import FilmCard from '../FilmCard/FilmCard';
import { useGetTrendingQuery } from '../../features/films/filmsApiSlice.js';
import { Report, Loading } from 'notiflix';

const TopFilms = () => {
  //fetch topFilm from server

  const { data, isLoading, isSuccess, isError, error } = useGetTrendingQuery();

  if (isSuccess) {
    console.log(data);
  }

  return (
    <section className="section topFilms">
      <h1 className="title">Топ фільмів</h1>
      {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
      {error && (Report.failure('Error', `${error.data}`), Loading.remove())}

      <div className="content">
        {isSuccess &&
          !isError &&
          data.results.map((item, index) => <FilmCard item={item} key={index} />)}
      </div>
    </section>
  );
};

export default TopFilms;
