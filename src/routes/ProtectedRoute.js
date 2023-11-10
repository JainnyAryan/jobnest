import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("userData");
  const isAuth = user != null;

  return isAuth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;