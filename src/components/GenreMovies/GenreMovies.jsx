import React from 'react';
import { useGetAllFilmsByGenresQuery } from '../../features/films/filmsApiSlice';
import { Report, Loading } from 'notiflix';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { useAddToSelectedMutation } from '../../features/selectedMovies/selectedMoviesApiSlice';
import { useSelector } from 'react-redux';

const settings = {
  width: '300px',
  infinite: true,
  speed: 500,
  slidesToShow: 3.7,
  slidesToScroll: 1,
  autoplay: true, // enable autoplay
  autoplaySpeed: 2000, // set autoplay interval in milliseconds
};

const GenreMovies = ({ genreId, genre }) => {
  //fn Api
  const { data, isLoading, isSuccess, error } = useGetAllFilmsByGenresQuery({
    genreId,
  });

  const isAuth = useSelector(state => state.auth.accessToken);

  //fn Api
  const [addToList] = useAddToSelectedMutation();

  const addReactions = async (filmApiId, status) => {
    Loading.circle();

    if (isAuth) {
      await addToList({ filmApiId, status })
        .then(data => {
          Loading.remove();
          Report.success('Додано в Обране', '');
        })
        .catch(error => {
          Loading.remove();
          Report.failure(error || 'Помилка', '');
        });
    } else {
      Report.info('Увійдіть до облікового запису', 'Щоб могти зберегти фільм');
    }
  };

  return (
    <div className="section genre_movie">
      {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
      {error && (Report.failure('Error', `${error.data}`), Loading.remove())}
      <p className="title" style={{ marginTop: '0px', padding: '10px' }}>
        {genre}
      </p>
      <Carousel {...settings}>
        {isSuccess &&
          data.results.length > 0 &&
          data.results.map(film => (
            <div className="content" key={film.id}>
              <img
                key={film.poster_path}
                src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                alt={film.poster_path}
              />

              <div className="descriptions">
                <Link to={`/film/${film.id}?name=movie`}>
                  <div>
                    <p>{film.original_title}</p>
                    <p>Дата релізу: {film.release_date || film.first_air_date} </p>
                    <p>Перегляди: {film.popularity} </p>
                    <p>Мова: {film.original_language} </p>
                  </div>
                </Link>

                <button
                  className="btn btn-outline-danger"
                  style={{ width: '100%', borderRadius: '20px' }}
                  onClick={() => addReactions(film.id, 'WATCH_LATER')}
                >
                  Обране
                </button>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default GenreMovies;
