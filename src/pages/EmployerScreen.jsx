import React, { useEffect } from 'react'
import Navbar2 from '../components/employer/Navbar2'
import NoOfJobs from '../components/employer/NoOfJobs';
import JobsPosted from '../components/employer/JobsPosted';
import MyNavbar from '../components/common/MyNavbar';
import { useUser } from '../context/userContext';
import { useLocation, useNavigate } from 'react-router-dom';


const currentState = "EMPLOYER";


export default function EmployerScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.state == undefined) {
    navigate("/");
  }
  const userProvider = useUser();
  // useEffect(() => {
  //   axios.get("http://localhost:3001/get_jobs")
  //     .then((res) => {
  //       console.log(res.data);
  //       setJobItems(res.data);
  //       setFilteredJobItems(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [])
  return (
    <div >
      <MyNavbar currentState={currentState} />
      <NoOfJobs />
      <JobsPosted />
    </div>
  );
}