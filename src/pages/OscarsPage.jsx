import React from 'react';
import Oscars from '../components/Oscars/Oscars';

const OscarsPage = () => {
  return (
    <main className="section oscars">
      <div className="container">
        {/*Oscars */}
        <p className="title" style={{ textAlign: 'center', padding: '0px' }}>
          Актори які отримали оскар
        </p>
        <Oscars />
      </div>
    </main>
  );
};

export default OscarsPage;
