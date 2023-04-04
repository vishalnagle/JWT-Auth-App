import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouteAdmin = ({ children }) => {
  let location = useLocation();
  let loggedIn = localStorage.getItem("loggedIn");
  let userType = localStorage.getItem("userType");
  console.log("location", location);

  if (!loggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (loggedIn) {
    return children;
  }
};

export default ProtectedRouteAdmin;
