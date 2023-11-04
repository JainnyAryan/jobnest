import React from 'react';
import { Routes, Route, Switch, BrowserRouter } from 'react-router-dom';

import Login from '../components/SignIn/Login';
import Landing from '../components/landingPage/Landing';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;