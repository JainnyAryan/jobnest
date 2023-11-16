import React, { useEffect, useState } from "react";
import { MdCurrencyRupee, MdLocationOn } from "react-icons/md";
import { FindJobDash } from "./FindJobDash";
import { useNavigate } from "react-router-dom";
import styles from "./styles/JobDescSidePanel.module.css";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useUser } from "../../context/userContext";
import secureLocalStorage from "react-secure-storage";

const JobDescSidePanel = (props) => {
  const navigate = useNavigate();
  const isMobileScreen = props.isMobileScreen;
  const selectedJob = !isMobileScreen ? props.selectedJob : props.expandedJob;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const onSelectJob = () => {
    navigate('/fill-employee-details', { state: { isJobApplication: true, jobDetails: selectedJob } });
  }

  useEffect(() => {
    const checkIfApplied = () => {
      const stored = secureLocalStorage.getItem('userData');
      const userData = JSON.parse(stored);
      axios.get("http://localhost:3001/check_job_applied", { params: { userId: userData._id, jobId: selectedJob._id } })
        .then((res) => {
          console.log(res.data);
          setIsApplied(res.data.jobApplied);
        })
        .then((_) => setIsLoaded(true))
        .catch((err) => {
          console.log(err);
          setIsLoaded(true);
        });
    }
    if (selectedJob && !isMobileScreen) {
      setIsLoaded(false);
      console.log("...checking if applied");
      checkIfApplied();
    }
  }, [selectedJob]);

  useEffect(() => {
    const checkIfApplied = () => {
      const stored = secureLocalStorage.getItem('userData');
      const userData = JSON.parse(stored);
      axios.get("http://localhost:3001/check_job_applied", { params: { userId: userData._id, jobId: selectedJob._id } })
        .then((res) => {
          console.log(res.data);
          setIsApplied(res.data.jobApplied);
        })
        .then((_) => setIsLoaded(true))
        .catch((err) => {
          console.log(err);
          setIsLoaded(true);
        });
    }
    if (isMobileScreen) {
      setIsLoaded(false);
      checkIfApplied();
    }
  }, []);

  return (
    <div className={styles.box}>
      {
        !selectedJob && !isMobileScreen &&
        <FindJobDash />
      }
      {!isLoaded && (isMobileScreen || selectedJob) ? <div className={styles.loadingSpinner}><CircularProgress /></div> :
        (isMobileScreen || selectedJob) &&
        <div className={styles.panel}>
          <div className={styles.jobDetails}>
            <div className={styles.jobTitle}>{selectedJob.role}</div>
            <div className={styles.jobCompany}><u>{selectedJob.orgName}</u></div>
            <div className={styles.jobLocation}><MdLocationOn style={{ paddingRight: "5px", fontSize: "calc(16px + 1vw)" }} />  {selectedJob.location}</div>
            <div className={styles.jobLocation} ><MdCurrencyRupee style={{ paddingRight: "5px", fontSize: "calc(16px + 1vw)" }} />  {selectedJob.salary}</div>
          </div>
          <button className={styles.applyButton} disabled={isApplied} onClick={onSelectJob}>{isApplied ? "Applied" : "Apply"}</button>
          <p>

            {selectedJob.roleDescription.split('\n').map((line) => (
              <React.Fragment>
                {line}
                <br />
              </React.Fragment>
            ))}

          </p>
        </div>
      }
    </div >
  )
}

export default JobDescSidePanel;