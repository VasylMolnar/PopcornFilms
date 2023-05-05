import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../features/auth/authSlice';

const RequireAuth = () => {
  const isAuth = useSelector(selectCurrentToken);
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireAuth;
