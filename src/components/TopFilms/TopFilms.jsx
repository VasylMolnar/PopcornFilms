import React from 'react';
import FilmCard from '../FilmCard/FilmCard';

const TopFilms = () => {
  //fetch topFilm from server
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //this only for test

  return (
    <section className="section topFilms">
      <h1 className="title">Топ фільмів</h1>

      <div className="content">
        {a.map((item, index) => (
          <FilmCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default TopFilms;
