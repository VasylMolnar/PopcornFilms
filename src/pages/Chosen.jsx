import React from 'react';
import FavoriteMovies from '../components/FavoriteMovies/FavoriteMovies';
import { selectCurrentToken } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import DislikedMovies from '../components/DislikedMovies/DislikedMovies';
import WatchLaterMovie from '../components/WatchLaterMovie/WatchLaterMovie';
import WatchedMovies from '../components/WatchedMovies/WatchedMovies';

const Chosen = () => {
  //check if user LogIn
  const isAuth = useSelector(selectCurrentToken);

  return (
    <main className="section topFilms">
      <div className="container">
        {!isAuth ? (
          <div style={{ textAlign: 'center' }}>
            <h1 className="title" style={{ color: 'red' }}>
              Увійдіть до свого облікового запису щоб побачити обрані фільми.
            </h1>
          </div>
        ) : (
          <>
            <p className="title">Улюблені фільми</p>
            <div className="content">
              <FavoriteMovies />
            </div>

            <p className="title">Фільми які не сподобались</p>
            <div className="content">
              <DislikedMovies />
            </div>

            <p className="title">Переглянути пізніше</p>
            <div className="content">
              <WatchLaterMovie />
            </div>

            <p className="title">Переглянуто</p>
            <div className="content">
              <WatchedMovies />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Chosen;
