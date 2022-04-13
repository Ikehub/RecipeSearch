import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes() {
  const loggedIn = sessionStorage.getItem("loggedIn")

  return (
    <>
      {loggedIn === "true" ?
        <Navigate to="/home" />
        :
        <Outlet />
      }
    </>
  )
}

export default PublicRoutes;