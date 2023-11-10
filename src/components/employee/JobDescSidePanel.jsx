import React from "react";
import { MdCurrencyRupee, MdLocationOn } from "react-icons/md";
import { FindJobDash } from "./FindJobDash";
import { useNavigate } from "react-router-dom";
import styles from "./styles/JobDescSidePanel.module.css";

const JobDescSidePanel = (props) => {
  const selectedJob = props.selectedJob;
  const navigate = useNavigate();
  return (
    <div className={styles.box}>
      {
        !selectedJob &&
        <FindJobDash />
      }
      {
        selectedJob &&
        <div className={styles.panel}>
          <div className={styles.jobDetails}>
            <div className={styles.jobTitle}>{selectedJob.role}</div>
            <div className={styles.jobCompany}><u>{selectedJob.orgName}</u></div>
            <div className={styles.jobLocation}><MdLocationOn style={{ paddingRight: "5px", fontSize: "calc(16px + 1vw)" }} />  {selectedJob.location}</div>
            <div className={styles.jobLocation} ><MdCurrencyRupee style={{ paddingRight: "5px", fontSize: "calc(16px + 1vw)" }} />  {selectedJob.salary}</div>
          </div>
          <button className={styles.applyButton} onClick={() => navigate('/fill-employee-details', { state: { isJobApplication: true, jobDetails: selectedJob } })}>Apply</button>
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