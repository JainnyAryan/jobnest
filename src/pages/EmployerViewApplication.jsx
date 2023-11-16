import styles from './styles/EmployerViewApplication.module.css'
import { CircularProgress, LinearProgress, Snackbar } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import ApplicantsAccordion from '../components/employer/ApplicantsAccordion';
import { Feed } from '@mui/icons-material';
const statusValues = {
  "": "Under Review",
  "A": "Accepted",
  "R": "Rejected",
}

export const EmployerViewApplication = () => {
  const routeProps = useLocation().state;
  const [isLoading, setIsLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(routeProps.application.status);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const applicant = routeProps.application;
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarOpen(false);
  };


  const setStatus = (status) => {
    console.log(status);
    setIsLoading(true);
    axios.put('https://jobnest-backend.vercel.app/update_status', { applicationId: routeProps.application._id, status: status })
      .then((res) => {
        setIsLoading(false);
        setSnackBarOpen(true);
      })
      .then((_) => setCurrentStatus(status))
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        alert(err);
      })
  }

  return (
    <div className={styles.box}>
      <center><h1><b>Application Details</b></h1></center>
      <div className={styles.applicationDetails}>
        <hr />
        <h2>Personal Information</h2>
        <div>
          <div className={styles.titles}>Name</div>
          <div>{applicant.name}</div>
        </div>
        <div>
          <div className={styles.titles}>Email</div>
          <div>{applicant.email}</div>
        </div>
        <div>
          <div className={styles.titles}>Phone</div>
          <div>{applicant.phone}</div>
        </div>
        <div>
          <div className={styles.titles}>Date of Birth</div>
          <div>{applicant.dob}</div>
        </div>
        <div>
          <div className={styles.titles}>Gender</div>
          <div>{applicant.gender}</div>
        </div>

        <div>
          <div className={styles.titles}>Description</div>
          <div>
            {applicant.description.split('\n').map((line) => (
              <React.Fragment>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>

        <hr />

        <h2> Education Details</h2>
        <div>
          <div className={styles.titles}>College Name</div>
          <div>{applicant.collegeName}</div>
        </div>
        <div>
          <div className={styles.titles}>College Stream</div>
          <div>{applicant.collegeStream}</div>
        </div>
        <div>
          <div className={styles.titles}>CGPA</div>
          <div>{applicant.cgpa}</div>
        </div>
        <div>
          <div className={styles.titles}>School Name</div>
          <div>{applicant.schoolName}</div>
        </div>
        <div>
          <div className={styles.titles}>Intermediate School Percentage</div>
          <div>{applicant.intermediateSchoolPercentage}</div>
        </div>

        <div>
          <div className={styles.titles}>High School Percentage</div>
          <div>{applicant.highSchoolPercentage}</div>
        </div>
        <hr />
        <h2>Work Experience</h2>

        <div>
          <div className={styles.titles}>Organisation</div>
          <div>{applicant.organisation}</div>
        </div>
        <div>
          <div className={styles.titles}>Work Duration</div>
          <div>{applicant.workDuration}</div>
        </div>
        <div>
          <div className={styles.titles}>Role</div>
          <div>{applicant.role}</div>
        </div>

        <div>
          <div className={styles.titles}>Role Description</div>
          <div>
            {applicant.roleDescription.split('\n').map((line) => (
              <React.Fragment>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
        <hr />
        <h2>Acheivements</h2>

        <div>
          <div className={styles.titles}>Awards</div>
          <div>
            {applicant.awards.split('\n').map((line) => (
              <React.Fragment>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.titles}>Certifications</div>
          <div>
            {applicant.certifications.split('\n').map((line) => (
              <React.Fragment>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
        <hr />
        <h2>Resume</h2>
        <div>
          <div><a href={applicant.resumeLink}><Feed />View Resume</a></div>
        </div>
        <hr />
      </div>

      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        {isLoading && <div style={{ height: "100%", width: "100%" }}><LinearProgress /></div>}
        <p><b>Currently : {statusValues[currentStatus]}</b></p>

        <div className={styles.allButtons}>
          <button onClick={() => setStatus("")} disabled={isLoading} className={`${styles.button9} btn `}>Under Review</button>
          <button onClick={() => setStatus("A")} disabled={isLoading} className={`${styles.button10} btn`}>Accept</button>
          <button onClick={() => setStatus("R")} disabled={isLoading} className={`${styles.button11} btn`}>Reject</button>
          <Snackbar onClose={handleClose} open={snackBarOpen} autoHideDuration={3000} message={`${routeProps.application.name} is now "${statusValues[currentStatus]}"`} />
        </div>

        <br />

      </div>
    </div>

  )
}
