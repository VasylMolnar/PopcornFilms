import React from 'react';
import { useParams, useLocation } from 'react-router';
import DescriptionFilm from '../components/DescriptionFilm/DescriptionFilm';
import GalleryFilm from '../components/GalleryFilm/GalleryFilm';
import ActorList from '../components/ActorList/ActorList';
import Comments from '../components/Comments/Comments';

const CurrentFilm = () => {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');

  return (
    <main className="section currentFilm">
      <div className="container">
        {/*DESCRIPTION*/}
        <DescriptionFilm id={id} name={name} />

        {/*GALLERY*/}
        <GalleryFilm id={id} name={name} />

        {/*ACTOR LIST */}
        <ActorList id={id} name={name} />

        {/* Comments */}
        <Comments />
      </div>
    </main>
  );
};

export default CurrentFilm;
