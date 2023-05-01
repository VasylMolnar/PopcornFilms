import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Missing from '../pages/Missing';
import Categories from '../pages/Categories';
import Chosen from '../pages/Chosen';
import Register from '../pages/Register';
import Login from '../pages/Login';

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />

        <Route path="chosen" element={<Chosen />} />

        {/*AUTH*/}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
