import React from 'react'
import Navbar2 from './Navbar2'
import { BrowserRouter,HashRouter,Route,Routes,Switch, } from "react-router-dom";
import NoOfJobs from './NoOfJobs';
// import Navigation from '../employee/Nav'
// import Navbar from './Navbar'
export default function EmployerPanel() {
  return (
    <div >
      <BrowserRouter>
   <Navbar2 />
    <NoOfJobs />
   {/* <Routes>
    <Route path ="/find-work" element={<find-work/>}></Route>
    <Route path ="/applications" element={<student-list/>}></Route>
    <Route path ="/skill" element={<student-list/>}></Route>
   </Routes> */}
   </BrowserRouter>
    {/* <EmployerPanel />  */}
    </div>
  );
}
