import React from 'react';
import { FcDislike, FcLike, FcRating, FcBookmark } from 'react-icons/fc';

const DescriptionFilm = () => {
  return (
    <section className="section description_film">
      <div class="wrapper">
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          className="card_img"
        />
      </div>

      <div className="content">
        <h1 className="title">НАЗВА ФІЛЬМУ(2023)</h1>
        <p>PG 25/04/2023 (US) Сімейний, Фентезі, Бойовик, Пригоди 1h 46m</p>

        <div className="reactions">
          <div className="iconBorder">
            <FcBookmark className="icon" style={{ color: 'green' }} />
          </div>
          <div className="iconBorder">
            <FcLike className="icon" />
          </div>
          <div className="iconBorder">
            <FcDislike className="icon" />
          </div>
          <div className="iconBorder">
            <FcRating className="icon" />
          </div>
        </div>

        <p className="title">Опис</p>
        <p>
          Фільм розповідає історію групи космічних пілотів, які відправляються у міжзоряне
          плавання на пошуки нового дому для людства, оскільки Земля на межі вимирання.
          Пілоти мають здійснити небезпечну подорож через чорну діру і знайти планету, яка
          б могла забезпечити майбутнє людства. У головних ролях знялися Меттью МакКонахі,
          Енн Хетевей, Джессіка Честейн, Майкл Кейн та інші відомі актори. Режисер
          Крістофер Нолан зміг створити вражаючий науково-фантастичний світ та передати
          наочність від зоряного простору, яка залишить у Вас незабутні враження від
          перегляду.
        </p>

        <div className="directors">
          <p>David Lowery Director, Screenplay</p>
          <p>J.M. Barrie Novel</p>
          <p>Toby Halbrooks Screenplay</p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionFilm;
