import React from 'react';
import FilmCard from '../FilmCard/FilmCard';
import { useGetSerialsQuery } from '../../features/films/filmsApiSlice.js';
import { Report, Loading } from 'notiflix';

const TopSerials = () => {
  //fetch topFilm from server
  const { data, isLoading, isSuccess, isError, error } = useGetSerialsQuery();

  return (
    <section className="section topFilms">
      <h1 className="title">Топ серіалів</h1>

      {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
      {error && (Report.failure('Error', `${error.data}`), Loading.remove())}

      <div className="content">
        {isSuccess &&
          !isError &&
          data.results.map((item, index) => (
            <FilmCard item={item} key={index} info={'tv'} />
          ))}
      </div>
    </section>
  );
};

export default TopSerials;
