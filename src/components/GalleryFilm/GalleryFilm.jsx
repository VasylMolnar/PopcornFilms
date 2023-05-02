import React from 'react';
import { Carousel } from 'antd';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  width: '300px',
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // enable autoplay
  autoplaySpeed: 2000, // set autoplay interval in milliseconds
};

const GalleryFilm = () => {
  return (
    <section className="section galleryFilm">
      <h1 className="title">Галерея</h1>
      <Carousel {...settings}>
        <div>
          <img src={require('../../img/test/images-1.jpg')} alt="" className="card_img" />
        </div>
        <div>
          <img src={require('../../img/test/images-2.jpg')} alt="" className="card_img" />
        </div>
        <div>
          <img src={require('../../img/test/images-3.jpg')} alt="" className="card_img" />
        </div>
        <div>
          <img src={require('../../img/test/images.jpg')} alt="" className="card_img" />
        </div>
      </Carousel>
    </section>
  );
};

export default GalleryFilm;
