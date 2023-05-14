import { useState, React } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';
import { useGetAllFilmsQuery } from '../features/films/filmsApiSlice';
import Search from '../components/Search/Search';
import { Report, Loading } from 'notiflix';
import FilmCard from '../components/FilmCard/FilmCard';

const ChosenList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const [page, setPage] = useState(1);

  const { data, isLoading, isSuccess, isError, error } = useGetAllFilmsQuery({
    info: name,
    page,
  });

  return (
    <main className="section topFilms">
      <div className="container">
        <Search />

        {isLoading ? Loading.dots('Завантаження') : Loading.remove(300)}
        {error && (Report.failure('Нічого незнайдено'), Loading.remove(), navigate('/'))}

        <div className="content" style={{ marginTop: '130px' }}>
          {isSuccess && !isError && (
            <>
              {data.results.map((item, index) => (
                <FilmCard item={item} key={index} info={name} />
              ))}

              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  Loading.dots('Завантаження');
                  setPage(prev => (prev -= 1));
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });

                  setTimeout(() => {
                    Loading.remove();
                  }, 300);
                }}
              >
                Попередня
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  Loading.dots('Завантаження');
                  setPage(prev => (prev += 1));
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });

                  setTimeout(() => {
                    Loading.remove();
                  }, 300);
                }}
              >
                Наступна
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default ChosenList;
