import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const loggedIn = sessionStorage.getItem("loggedIn")

  return (
    <>
      {loggedIn === "true" ?
        <Outlet />
        :
        <Navigate to="/login" />
      }
    </>
  )
}

export default ProtectedRoutes;