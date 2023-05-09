import { React, useState } from 'react';
import Search from '../components/Search/Search';
import TopFilms from '../components/TopFilms/TopFilms';
import TopSerials from '../components/TopSerials/TopSerials';
import TopComing from '../components/TopComing/TopComing';
import { Link } from 'react-router-dom';

const Home = () => {
  //sellect data from server

  return (
    <main className="section home">
      <div className="container">
        <Search />

        {/* Top Films */}
        <TopFilms />
        <Link to="list?name=movie">
          <button className="btn btn-outline-danger" style={{ width: '100%' }}>
            Переглянути весь список
          </button>
        </Link>

        {/* Top Serials */}
        <TopSerials />
        <Link to="list?name=tv">
          <button className="btn btn-outline-danger" style={{ width: '100%' }}>
            Переглянути весь список
          </button>
        </Link>

        {/*Coming Soon*/}
        <TopComing />
      </div>
    </main>
  );
};

export default Home;
