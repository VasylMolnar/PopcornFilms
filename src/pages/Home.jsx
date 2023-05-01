import { React, useState } from 'react';
import Search from '../components/Search/Search';

const Home = () => {
  //sellect data from server
  const [search, setSearch] = useState('');

  return (
    <main className="section home">
      <div className="container">
        <Search setSearch={setSearch} />

        <h1 className="title">Топ фільмів</h1>
      </div>
    </main>
  );
};

export default Home;
