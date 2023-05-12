import React from 'react';
import { Card } from 'antd';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import { useAddToSelectedMutation } from '../../features/selectedMovies/selectedMoviesApiSlice';
import { Report, Loading } from 'notiflix';
const { Meta } = Card;

const FilmCard = ({ item, info }) => {
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
    <div className="content_card">
      <Link to={`/film/${item.id}?name=${info}`}>
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
      </Link>
      <div className="description">
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

        <button
          className="btn btn-outline-danger"
          style={{ width: '100%', borderRadius: '20px' }}
          onClick={() => addReactions(item.id, 'WATCH_LATER')}
        >
          Обране
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
