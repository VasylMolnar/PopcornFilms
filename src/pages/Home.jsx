import { React, useState } from 'react';
import Search from '../components/Search/Search';

const Home = () => {
  //sellect data from server

  return (
    <main className="section home">
      <div className="container">
        <Search />

        <h1> Home</h1>
      </div>
    </main>
  );
};

export default Home;
