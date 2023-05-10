import React from 'react';
import { useGetCategoriesMoviesQuery } from '../features/films/filmsApiSlice';
import { Report, Loading } from 'notiflix';
import Search from '../components/Search/Search';
import GenreMovies from '../components/GenreMovies/GenreMovies';

const Categories = () => {
  const { data, isLoading, isSuccess, error } = useGetCategoriesMoviesQuery();

  // if (isSuccess) {
  //   console.log(data);
  // }

  return (
    <main className="section categories">
      <div className="container">
        <Search />

        {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
        {error && (Report.failure('Error', `${error.data}`), Loading.remove())}

        {isSuccess &&
          data.genres.length > 0 &&
          data.genres.map(genre => <GenreMovies genreId={genre.id} genre={genre.name} />)}
      </div>
    </main>
  );
};

export default Categories;
