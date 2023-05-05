import React from 'react';
import FavoriteMovies from '../components/FavoriteMovies/FavoriteMovies';
import { selectCurrentToken } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';

const Chosen = () => {
  //check if user LogIn
  const isAuth = useSelector(selectCurrentToken);

  const a = [1, 2, 3, 4, 5, 6, 7]; //test only

  //if not films display AUTH if you want see favorite films

  return (
    <main className="section chosen">
      <div className="container">
        {!isAuth ? (
          <div style={{ textAlign: 'center' }}>
            <h1 className="title" style={{ color: 'red' }}>
              Увійдіть до свого облікового запису щоб побачити обрані фільми.
            </h1>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </main>
  );
};

export default Chosen;
