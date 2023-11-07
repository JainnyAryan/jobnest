import React from 'react'
import Navbar2 from '../components/employer/Navbar2'
import NoOfJobs from '../components/employer/NoOfJobs';
import JobsPosted from '../components/employer/JobsPosted';
import MyNavbar from '../components/common/MyNavbar';


const currentState = "EMPLOYER";


export default function EmployerScreen() {
  return (
    <div >
      <MyNavbar currentState={currentState}/>
      <NoOfJobs />
      <JobsPosted />
    </div>
  );
}