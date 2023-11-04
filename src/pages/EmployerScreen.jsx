import React from 'react'
import Navbar2 from '../components/employer/Navbar2'
import { BrowserRouter,HashRouter,Route,Routes,Switch, } from "react-router-dom";
import NoOfJobs from '../components/employer/NoOfJobs';
import JobsPosted from '../components/employer/JobsPosted';
// import Navigation from '../employee/Nav'
// import Navbar from './Navbar'
export default function EmployerScreen() {
  return (
    <div >
   <Navbar2 />
    <NoOfJobs />
    <JobsPosted />
   {/* <Routes>
    <Route path ="/find-work" element={<find-work/>}></Route>
    <Route path ="/applications" element={<student-list/>}></Route>
    <Route path ="/skill" element={<student-list/>}></Route>
   </Routes> */}
    {/* <EmployerPanel />  */}
    </div>
  );
}
