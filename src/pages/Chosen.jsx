import React from 'react';
import FavoriteMovies from '../components/FavoriteMovies/FavoriteMovies';
import { selectCurrentToken } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';

const Chosen = () => {
  //check if user LogIn
  const isAuth = useSelector(selectCurrentToken);

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
            <FavoriteMovies />
          </>
        )}
      </div>
    </main>
  );
};

export default Chosen;
