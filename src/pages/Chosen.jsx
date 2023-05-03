import React from 'react';
import FavoriteMovies from '../components/FavoriteMovies/FavoriteMovies';

const Chosen = () => {
  const a = [1, 2, 3, 4, 5, 6, 7]; //test only

  //if not films display AUTH if you want see favorite films

  return (
    <main className="section chosen">
      <div className="container">
        <div className="favorite_movies">
          <h1 className="title">Вподобанні фільми </h1>

          <div className="content">
            {a.map((index, item) => (
              <FavoriteMovies key={index} />
            ))}
          </div>
        </div>

        <div className="view_later">
          <h1 className="title">Переглянути пізніше </h1>

          <div className="content">
            {a.map((index, item) => (
              <FavoriteMovies key={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chosen;
