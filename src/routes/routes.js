import React from "react";
import { Routes, Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import EmployeeScreen from "../pages/EmployeeScreen";
import EmployerScreen from "../pages/EmployerScreen";
import SignupPage from "../pages/SignupPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />}/>
        <Route path="/employer" element={<EmployerScreen />} />
        <Route path="/employee" element={<EmployeeScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;