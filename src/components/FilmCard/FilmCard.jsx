import React from 'react';
import { Card } from 'antd';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link, useLocation } from 'react-router-dom';
import {
  useAddToSelectedMutation,
  useDeleteCurrentMutation,
} from '../../features/selectedMovies/selectedMoviesApiSlice';
import { Report, Loading } from 'notiflix';
import { useSelector } from 'react-redux';
const { Meta } = Card;

const FilmCard = ({ item, info, status = '' }) => {
  const path = useLocation();
  const isAuth = useSelector(state => state.auth.accessToken);

  //fn Api
  const [addToList] = useAddToSelectedMutation();
  const [deleteCurrent] = useDeleteCurrentMutation();

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
      Loading.remove();
    }
  };

  const deleteReactions = async (filmApiId, status) => {
    Loading.circle();

    console.log(filmApiId, status);

    await deleteCurrent({ filmApiId, status })
      .then(data => {
        Loading.remove();
        Report.success('Видалено', '');
      })
      .catch(error => {
        Loading.remove();
        Report.failure(error || 'Помилка', '');
      });
  };

  return (
    <div className="content_card">
      <div>
        <Card
          hoverable
          style={{
            width: 270,
            height: 404,
          }}
          cover={
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              className="card_img"
              width="270"
              height="300"
            />
          }
        />
      </div>

      <div className="description">
        <Link to={`/film/${item.id}?name=${info}`}>
          <div>
            <Meta title={item.title || item.name} />
            <p>Дата релізу: {item.release_date || item.first_air_date} </p>

            <p>Перегляди: {item.popularity} </p>
            <p>Мова: {item.original_language} </p>

            <div className="rating">
              <p style={{ margin: 0 }}>Рейтинг: {item.vote_average}</p>
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </div>
          </div>
        </Link>

        <button
          className="btn btn-outline-danger"
          style={{ width: '100%', borderRadius: '20px' }}
          onClick={() => addReactions(item.id, 'WATCH_LATER')}
        >
          Обране
        </button>

        {path.pathname === '/chosen' && (
          <button
            className="btn btn-outline-danger"
            style={{ width: '100%', borderRadius: '20px' }}
            onClick={() => deleteReactions(item.id, status)}
          >
            Видалити
          </button>
        )}
      </div>
    </div>
  );
};

export default FilmCard;
