import React from "react";
import { Navigate, Route } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const ProtectedRoute = ({ children }) => {
  const user = secureLocalStorage.getItem("userData");
  const isAuth = user != null;

  return isAuth ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
