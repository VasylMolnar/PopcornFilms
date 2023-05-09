import React from 'react';
import { Carousel } from 'antd';
import { useGetGalleryDetailsQuery } from '../../features/films/filmsApiSlice';

const settings = {
  width: '300px',
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // enable autoplay
  autoplaySpeed: 2000, // set autoplay interval in milliseconds
};

const GalleryFilm = ({ id, name }) => {
  const { data, isLoading, isSuccess, isError, error } = useGetGalleryDetailsQuery({
    movieId: id,
    info: name,
  });

  return (
    <section className="section galleryFilm">
      <h1 className="title">Галерея</h1>
      <Carousel {...settings}>
        {isSuccess &&
          !isError &&
          data.backdrops.map((item, index) => (
            <div key={index}>
              <img
                key={item.file_path}
                src={`https://image.tmdb.org/t/p/w300${item.file_path}`}
                alt={item.file_path}
                className="card_img"
              />
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default GalleryFilm;
