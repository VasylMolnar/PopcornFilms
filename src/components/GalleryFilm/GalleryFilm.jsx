import React from 'react';
import { Carousel } from 'antd';
import { useGetGalleryDetailsQuery } from '../../features/films/filmsApiSlice';
import { Report, Loading } from 'notiflix';

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

  if (isSuccess) {
    console.log(data);
  }

  return (
    <section className="section galleryFilm">
      <h1 className="title">Галерея</h1>
      <Carousel {...settings}>
        {isSuccess &&
          !isError &&
          data.backdrops.map((item, index) => (
            <div>
              <img
                key={item.file_path}
                src={`https://image.tmdb.org/t/p/w500${item.file_path}`}
                alt={item.file_path}
              />
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default GalleryFilm;
{
  /* <div>
          <img src={require('../../img/test/images-1.jpg')} alt="" className="card_img" />
        </div>
        <div>
          <img src={require('../../img/test/images-2.jpg')} alt="" className="card_img" />
        </div>
        <div>
          <img src={require('../../img/test/images-3.jpg')} alt="" className="card_img" />
        </div> */
}
