import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const loggedIn = sessionStorage.getItem('loggedIn');

  return (
    <div>
      {loggedIn === 'true'
        ? <Outlet />
        : <Navigate to="/landing" />}
    </div>
  );
}

export default ProtectedRoutes;
