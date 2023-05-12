import React from 'react';
import { useGetMovieDetailsQuery } from '../../features/films/filmsApiSlice';
import { Report, Loading } from 'notiflix';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CheckIcon from '@mui/icons-material/Check';
import { useAddToSelectedMutation } from '../../features/selectedMovies/selectedMoviesApiSlice';

const DescriptionFilm = ({ id, name }) => {
  const { data, isLoading, isSuccess, isError, error } = useGetMovieDetailsQuery({
    movieId: id,
    info: name,
  });

  //fn Api
  const [addToList] = useAddToSelectedMutation();

  const addReactions = async (filmApiId, status) => {
    Loading.circle();

    await addToList({ filmApiId, status })
      .then(data => {
        Loading.remove();
        Report.success('Додано в Обране', '');
      })
      .catch(error => {
        Loading.remove();
        Report.failure(error || 'Помилка', '');
      });
  };

  return (
    <section className="section description_film">
      {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
      {error && (Report.failure('Error', `${error.data}`), Loading.remove())}

      {isSuccess && !isError && (
        <>
          <div className="wrapper">
            <img
              alt={data.original_title}
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              className="card_img"
            />
          </div>

          <div className="content">
            <h1 className="title">{data.original_title}</h1>
            <p>{data.tagline}</p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <p style={{ marginRight: '30px' }}>
                {' '}
                Тривалість: {data.runtime || '150'} m
              </p>

              <p>Релізе: {data.release_date || data.first_air_date}</p>
            </div>

            <p>Кількість переглядів: {data.revenue || data.popularity}</p>

            <div className="reactions">
              <div className="iconBorder">
                <CheckIcon
                  className="icon"
                  onClick={() => addReactions(data.id, 'WATCHED')}
                />
              </div>
              <div className="iconBorder">
                <ThumbUpIcon
                  className="icon"
                  onClick={() => addReactions(data.id, 'FAVOURITE')}
                />
              </div>
              <div className="iconBorder">
                <ThumbDownAltIcon
                  className="icon"
                  onClick={() => addReactions(data.id, 'DISLIKED')}
                />
              </div>
              <div className="iconBorder">
                <BookmarkIcon
                  className="icon"
                  onClick={() => addReactions(data.id, 'WATCH_LATER')}
                />
              </div>
            </div>

            <p className="title">Мова</p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              {data.spoken_languages.map((language, index) => (
                <p style={{ marginRight: '30px' }} key={index}>
                  {language.name}
                </p>
              ))}
            </div>

            <p className="title">Країна</p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              {data.production_countries.map((countrie, index) => (
                <p style={{ marginRight: '30px' }} key={index}>
                  {countrie.name}
                </p>
              ))}
            </div>

            <p className="title">Опис</p>
            <p>{data.overview}</p>

            <div className="directors">
              <p>David Lowery Director, Screenplay</p>
              <p>J.M. Barrie Novel</p>
              <p>Toby Halbrooks Screenplay</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default DescriptionFilm;
