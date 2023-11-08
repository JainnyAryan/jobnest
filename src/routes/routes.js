import React from "react";
import { Routes, Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import EmployeeScreen from "../pages/EmployeeScreen";
import EmployerScreen from "../pages/EmployerScreen";
import SignupPage from "../pages/SignupPage";
import EmployeeDetailsForm from "../pages/EmployeeDetailsForm";
import EmployerDetailsForm from "../pages/EmployerDetailsForm";
import AcceptRejectEmployerScreen from "../pages/AcceptRejectEmployerScreen";
import CreateJobForm from "../pages/CreateJobForm";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />}/>
        <Route path="/employer" element={<EmployerScreen />} />
        <Route path="/employee" element={<EmployeeScreen/>} />     
        <Route path="/fill-employee-details" element={<EmployeeDetailsForm/>} />   
        <Route path="/fill-employer-details" element={<EmployerDetailsForm/>} />   
        <Route path="/employee" element={<EmployeeScreen/>} /> 
        <Route path="/applicants" element={<AcceptRejectEmployerScreen/>}/>
        <Route path="employer-create-job" element={<CreateJobForm/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;