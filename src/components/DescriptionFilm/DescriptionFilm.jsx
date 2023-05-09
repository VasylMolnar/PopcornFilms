import React from 'react';
import { useGetMovieDetailsQuery } from '../../features/films/filmsApiSlice';
import { Report, Loading } from 'notiflix';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const DescriptionFilm = ({ id, name }) => {
  const { data, isLoading, isSuccess, isError, error } = useGetMovieDetailsQuery({
    movieId: id,
    info: name,
  });

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
                <FavoriteIcon className="icon" />
              </div>
              <div className="iconBorder">
                <ThumbUpIcon className="icon" />
              </div>
              <div className="iconBorder">
                <ThumbDownAltIcon className="icon" />
              </div>
              <div className="iconBorder">
                <BookmarkIcon className="icon" />
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
              {data.spoken_languages.map(language => (
                <p style={{ marginRight: '30px' }}>{language.name}</p>
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
              {data.production_countries.map(countrie => (
                <p style={{ marginRight: '30px' }}>{countrie.name}</p>
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
