import { React, useState } from 'react';
import Search from '../components/Search/Search';
import TopFilms from '../components/TopFilms/TopFilms';
import TopSerials from '../components/TopSerials/TopSerials';
import TopComing from '../components/TopComing/TopComing';

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

        {/*Coming Soon*/}
        <TopComing />
      </div>
    </main>
  );
};

export default Home;
