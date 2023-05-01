import React from 'react';
import { Card } from 'antd';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const { Meta } = Card;

const FilmCard = () => {
  return (
    <Card
      hoverable
      style={{
        width: 270,
        height: 400,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          className="card_img"
        />
      }
    >
      <div className="description">
        <Meta title="Назва фільму" />

        <div className="rating">
          <p style={{ margin: 0 }}>7.5</p>
          <StarBorderIcon />
        </div>
      </div>

      <button
        className="btn btn-outline-danger"
        style={{ width: '100%', borderRadius: '20px', marginTop: '110px' }}
      >
        Обране
      </button>
    </Card>
  );
};

export default FilmCard;
