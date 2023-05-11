import React from 'react';
import FavoriteMovies from '../components/FavoriteMovies/FavoriteMovies';
import { selectCurrentToken } from '../features/auth/authSlice';
import { useGetAllSelectedQuery } from '../features/selectedMovies/selectedMoviesApiSlice';
import { useSelector } from 'react-redux';
import { Report, Loading } from 'notiflix';

const Chosen = () => {
  //check if user LogIn
  const isAuth = useSelector(selectCurrentToken);

  const { data, isLoading, isSuccess, isError, error } = useGetAllSelectedQuery();

  if (isSuccess) {
    console.log(data);
  }

  return (
    <main className="section chosen">
      <div className="container">
        {/* {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
        {error && (Report.failure('Error', `${error.data}`), Loading.remove())} */}

        {!isAuth ? (
          <div style={{ textAlign: 'center' }}>
            <h1 className="title" style={{ color: 'red' }}>
              Увійдіть до свого облікового запису щоб побачити обрані фільми.
            </h1>
          </div>
        ) : (
          isSuccess && (
            <>
              <div className="favorite_movies">
                <h1 className="title">Вподобанні фільми </h1>

                {/* <div className="content">
                  {data.map((index, item) => (
                    <FavoriteMovies key={index} />
                  ))}
                </div> */}
              </div>

              {/* <div className="view_later">
                <h1 className="title">Переглянути пізніше </h1>

                <div className="content">
                  {data.map((index, item) => (
                    <FavoriteMovies key={index} />
                  ))}
                </div>
              </div> */}
            </>
          )
        )}
      </div>
    </main>
  );
};

export default Chosen;
