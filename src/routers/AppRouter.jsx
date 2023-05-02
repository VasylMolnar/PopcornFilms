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
// import UsersList from '../pages/Users/UsersList';

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

        {/*CURRENT FILM*/}
        <Route path="film">
          <Route path=":id" element={<CurrentFilm />} />
        </Route>

        {/* private routes */}
        {/*USER*/}
        <Route path="userPage">
          {/* User routes */}
          <Route index element={<UserPage />} />

          {/* Admin routes  ******************************** verify if Admin*/}
          {/* <Route path="userList">
            <Route index element={<UsersList />} />
            <Route path=":id" ex element={<UsersList />} />
          </Route> */}
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
