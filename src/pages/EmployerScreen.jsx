import React from 'react'
import Navbar2 from '../components/employer/Navbar2'
import { BrowserRouter,HashRouter,Route,Routes,Switch, } from "react-router-dom";
import NoOfJobs from '../components/employer/NoOfJobs';
import JobsPosted from '../components/employer/JobsPosted';

export default function EmployerScreen() {
  return (
    <div >
   <Navbar2 />
    <NoOfJobs />
    <JobsPosted />
    </div>
  );
}