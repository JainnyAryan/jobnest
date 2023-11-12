import React, { useEffect, useState } from 'react';
import styles from './styles/ViewJobApplications.module.css';
import AppliedJobs from '../components/employee/AppliedJobs';
import MyNavbar from '../components/common/MyNavbar'
import { useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import secureLocalStorage from 'react-secure-storage';
const ViewJobApplications = () => {
  const user = useAuth();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  if (user.isEmployer) {
    navigate("/");
  }

  const [jobItems, setJobItems] = useState(null);

  useEffect(() => {
    const setAppliedJobs = () => {
      const stored = secureLocalStorage.getItem('userData');
      const userData = JSON.parse(stored);
      axios.get("http://localhost:3001/get_employee_job_applications", { params: { applicantId: userData._id } })
        .then((res) => {
          console.log(res.data);
          setJobItems(res.data);
        })
        .then((_) => setIsLoaded(true))
        .catch((err) => {
          console.log(err);
          setIsLoaded(true);
        });
    }

    setIsLoaded(false);
    setAppliedJobs();

  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <MyNavbar />
      <ArrowBack
        className={styles.backIcon}
        onClick={() => navigate(-1)}
        fontSize="large"
      />
      <center>
        {!isLoaded ? <CircularProgress /> :
          <>
            <h1 style={{ margin: "20px" }}>Applied Jobs</h1>
            <AppliedJobs jobItems={jobItems} />
          </>
        }
      </center>
    </div>

  )
}

export default ViewJobApplications
