import React from 'react';
import { Card } from 'antd';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const FilmCard = ({ item }) => {
  const id = 1;

  return (
    <Link to={`film/${item.id}`}>
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
          <div>
            <Meta title={item.title} />
            <p>Дата релізу: {item.release_date} </p>

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
          >
            Обране
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
