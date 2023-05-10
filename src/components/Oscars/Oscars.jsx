import React from 'react';
import { useGetOscarsQuery } from '../../features/films/filmsApiSlice.js';
import { Report, Loading } from 'notiflix';
import ActorList from '../ActorList/ActorList';

const Oscars = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetOscarsQuery();

  const randomYear = () => {
    var currentYear = new Date().getFullYear();
    var minYear = 2000;
    return Math.floor(Math.random() * (currentYear - minYear + 1)) + minYear;
  };

  return (
    <section className="topFilms">
      {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
      {error && (Report.failure('Error', `${error.data}`), Loading.remove())}

      {isSuccess &&
        !isError &&
        data.results.map((item, index) => (
          <ActorList id={item.id} key={index} name={'movie'} year={randomYear()} />
        ))}
    </section>
  );
};

export default Oscars;
