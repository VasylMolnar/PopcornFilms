import React from 'react';
import DescriptionFilm from '../components/DescriptionFilm/DescriptionFilm';
import GalleryFilm from '../components/GalleryFilm/GalleryFilm';
import ActorList from '../components/ActorList/ActorList';

const CurrentFilm = () => {
  return (
    <main className="section currentFilm">
      <div className="container">
        {/*DESCRIPTION*/}
        <DescriptionFilm />

        {/*GALLERY*/}
        <GalleryFilm />

        {/*ACTOR LIST */}
        <ActorList />
      </div>
    </main>
  );
};

export default CurrentFilm;
