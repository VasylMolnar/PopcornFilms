import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Missing from '../pages/Missing';
import Categories from '../pages/Categories';
import Chosen from '../pages/Chosen';
import Register from '../pages/Register';
import Login from '../pages/Login';
import CurrentFilm from '../pages/CurrentFilm';
import UserPage from '../pages/Users/UserPage';
import RequireAuth from '../components/RequireAuth/RequireAuth';
import ChosenList from '../pages/ChosenList';

const AppRouter = () => {
  return (
    <Routes>
      <Route>
        {/* public routes */}
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />

        {/*AUTH*/}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/*CURRENT FILM*/}
        <Route path="film">
          <Route path=":id" element={<CurrentFilm />} />
        </Route>

        {/* Chosen Film  */}
        <Route path="chosen" element={<Chosen />} />

        {/* Chosen List Films  */}

        <Route path="list" element={<ChosenList />} />

        {/* private routes */}
        <Route element={<RequireAuth />}>
          {/*USER*/}
          <Route path="userPage">
            {/* User routes */}
            <Route index element={<UserPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
