import React from 'react';
import { Carousel } from 'antd';
import { useGetMovieCreditsQuery } from '../../features/films/filmsApiSlice';

const settings = {
  width: '300px',
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // enable autoplay
  autoplaySpeed: 2000, // set autoplay interval in milliseconds
};

const ActorList = ({ id, name }) => {
  const { data, isLoading, isSuccess, isError, error } = useGetMovieCreditsQuery({
    movieId: id,
    info: name,
  });

  return (
    <section className="section galleryFilm">
      <h1 className="title">Актори</h1>
      <Carousel {...settings}>
        {isSuccess &&
          !isError &&
          data.cast.map((item, index) => (
            <div className="content" key={index}>
              <img
                key={item.profile_path}
                src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                alt={item.profile_path}
              />

              <div className="descriptions">
                <p>{item.original_name}</p>
                <p>У фільмі: {item.character}</p>
                <p>Підписники: {item.popularity}</p>
              </div>
            </div>
          ))}
      </Carousel>
    </section>
  );
};

export default ActorList;
