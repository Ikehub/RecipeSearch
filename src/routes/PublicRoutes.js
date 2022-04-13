import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoutes() {
  const loggedIn = sessionStorage.getItem('loggedIn');

  return (
    <div>
      {loggedIn === 'true'
        ? <Navigate to="/home" />
        : <Outlet />}
    </div>
  );
}

export default PublicRoutes;
