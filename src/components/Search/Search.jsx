import { useState, React } from 'react';
import Input from '../UI/Input/Input';
import { debounce } from 'lodash';
import { FcSearch } from 'react-icons/fc';
import { useGetSearchMoviesQuery } from '../../features/films/filmsApiSlice';
import { Report, Loading } from 'notiflix';
import { useParams, useLocation, useNavigate } from 'react-router';
import FilmCard from '../FilmCard/FilmCard';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const [search, setSearch] = useState('');

  const { data, isLoading, isSuccess, isError, error } = useGetSearchMoviesQuery({
    info: name || 'movie',
    query: search,
  });

  return (
    <>
      <form
        className="search"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="search_content">
          <Input
            className="input"
            type="text"
            placeholder="Пошук"
            onChange={debounce(e => {
              setSearch(e.target.value);
            }, 300)}
          />

          <button className="btn btn-danger">
            <FcSearch className="icon" />
          </button>
        </div>
      </form>

      <div className="content" style={{ marginTop: '30px' }}>
        {data?.results?.map((item, index) => (
          <FilmCard item={item} key={index} info={name} />
        ))}
      </div>
    </>
  );
};

export default Search;
