import React, { useEffect, useState } from 'react';
import styles from './styles/JobsAppliedByEmployee.module.css';
import AppliedJobs from '../components/employee/AppliedJobs';
import MyNavbar from '../components/common/MyNavbar'
import { useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import secureLocalStorage from 'react-secure-storage';
const JobsAppliedByEmployeeScreen = () => {
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
      axios.get("https://jobnest-backend.vercel.app/get_employee_job_applications", { params: { applicantId: userData._id } })
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
    <div className={styles.box}>
      <MyNavbar />
      <ArrowBack
        className={styles.backIcon}
        onClick={() => navigate(-1)}
        fontSize="large"
      />
      <center>
        {!isLoaded ? <CircularProgress /> :
          <>
            <h1>Applied Jobs</h1>
            <AppliedJobs jobItems={jobItems} />
          </>
        }
      </center>
    </div>

  )
}

export default JobsAppliedByEmployeeScreen;
