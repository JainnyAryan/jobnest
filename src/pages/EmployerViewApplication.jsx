import styles from './styles/EmployerViewApplication.module.css'
import { CircularProgress, LinearProgress, Snackbar } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';


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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarOpen(false);
  };


  const setStatus = (status) => {
    console.log(status);
    setIsLoading(true);
    axios.put('http://localhost:3001/update_status', { applicationId: routeProps.application._id, status: status })
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
      {isLoading && <div style={{ height: "100%", width: "100%" }}><LinearProgress /></div>}
      <div>
        <button onClick={() => setStatus("")} disabled={isLoading}>Under Review</button>
        <button onClick={() => setStatus("A")} disabled={isLoading}>Accept</button>
        <button onClick={() => setStatus("R")} disabled={isLoading}>Reject</button>
        <Snackbar onClose={handleClose} open={snackBarOpen} autoHideDuration={3000} message={`${routeProps.application.name} is now "${statusValues[currentStatus]}"`} />
      </div>
      <p>Currently : {statusValues[currentStatus]}</p>
    </div>
  )
}
