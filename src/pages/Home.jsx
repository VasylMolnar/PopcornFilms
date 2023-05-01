import { React, useState } from 'react';
import Search from '../components/Search/Search';
import TopFilms from '../components/TopFilms/TopFilms';
import TopSerials from '../components/TopSerials/TopSerials';

const Home = () => {
  //sellect data from server
  const [search, setSearch] = useState('');

  return (
    <main className="section home">
      <div className="container">
        <Search setSearch={setSearch} />

        {/* Top Films */}
        <TopFilms />

        {/* Top Serials */}
        <TopSerials />
      </div>
    </main>
  );
};

export default Home;
