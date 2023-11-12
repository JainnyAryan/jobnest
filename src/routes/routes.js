import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Switch,
  BrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useUser } from "../context/userContext";

import ProtectedRoute from "./ProtectedRoute";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import EmployeeScreen from "../pages/EmployeeScreen";
import EmployerScreen from "../pages/EmployerScreen";
import SignupPage from "../pages/SignupPage";
import EmployeeDetailsForm from "../pages/EmployeeDetailsForm";
import EmployerDetailsForm from "../pages/EmployerDetailsForm";
import CreateJobForm from "../pages/CreateJobForm";
import ViewJobApplications from "../pages/ViewJobApplications";
import ApplicantsScreen from "../pages/ApplicantsScreen";
import secureLocalStorage from "react-secure-storage";

function AppRoutes() {
  const userProvider = useUser();
  var user = secureLocalStorage.getItem("userData");
  user = user ? JSON.parse(user) : null;
  useEffect(() => {
    if (user) {
      userProvider.setUserData(user);
    }
  }, []);

  const homeElement = !user ? (
    <LandingPage />
  ) : user.isEmployer ? (
    <EmployerScreen />
  ) : (
    <EmployeeScreen />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={homeElement} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route
          path="/employer"
          element={
            <ProtectedRoute>
              <EmployerScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee"
          element={
            <ProtectedRoute>
              <EmployeeScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fill-employee-details"
          element={
            <ProtectedRoute>
              <EmployeeDetailsForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fill-employer-details"
          element={
            <ProtectedRoute>
              <EmployerDetailsForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/applicants"
          element={
            <ProtectedRoute>
              <ApplicantsScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employer-create-job"
          element={
            <ProtectedRoute>
              <CreateJobForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs-applied"
          element={
            <ProtectedRoute>
              <ViewJobApplications />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
