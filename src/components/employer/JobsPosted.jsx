import React, { useEffect } from "react";
import styles from "./styles/JobsPosted.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaStopwatch,
  FaMoneyBillAlt,
  FaMapMarkerAlt,
  FaLaptop,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";

export default function JobsPosted() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const userFromStorage = JSON.parse(secureLocalStorage.getItem('userData'));
    console.log(userFromStorage);
    axios.get("http://localhost:3001/get_jobs", { params: { createdBySomeEmployer: true, employerId: userFromStorage._id } })
      .then((res) => {
        console.log(res);
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Some error occured!");
      })
  }, []);

  if (selectedJobIndex !== null) {
    const jobToDelete = jobs[selectedJobIndex];
    const confirmDeletion = window.confirm(
      `Are you sure you want to delete the job: ${jobToDelete.role}?`
    );

    if (confirmDeletion) {
      const updatedJobs = jobs.filter((_, index) => index !== selectedJobIndex);
      setJobs(updatedJobs);
      setSelectedJobIndex(null);
      // Handle job deletion here
      // You can remove the job from the `jobs` array and update the state or make an API call
    } else {
      setSelectedJobIndex(null); // Reset the selected job index
    }
  }

  return (
    <center>
      <div className={styles.allCards}>

        {jobs.map((e, index) => {
          return (
            <div className={styles.jobPosted}>
              <h3>{e.role}</h3>
              <center>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>

                    <div style={{ display: "flex", }}>
                      <IconContext.Provider value={{ color: "", className: "global-class-name", size: "1em", }}>
                        <div>
                          <FaStopwatch />
                        </div>
                      </IconContext.Provider>
                      {e.location}
                    </div>



                    <div style={{ display: "flex" }}>
                      <IconContext.Provider value={{ color: "", className: "global-class-name", size: "1em", }}>
                        <div>
                          <FaMoneyBillAlt />
                        </div>
                      </IconContext.Provider>
                      {e.salary}
                    </div>
                  </div>


                  <div className="" style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center" }}>
                    <div style={{ display: "flex" }}>
                      <IconContext.Provider
                        value={{ color: "", className: "global-class-name", size: "1em", }}>
                        <div>
                          <FaMapMarkerAlt />
                        </div>
                      </IconContext.Provider>
                      {e.time}
                    </div>



                    <div className="" style={{ display: "flex" }}>
                      <IconContext.Provider value={{ color: "", className: "global-class-name", size: "1em", }}>
                        <div>
                          <FaLaptop />
                        </div>
                      </IconContext.Provider>
                      {e.type}
                    </div>
                  </div>
                </div>
              </center>

              <div>
                <button className={styles.buttonEdit} onClick={() => navigate('/employer-create-job')}>Edit Job</button>
                <button className={styles.buttonDelete} onClick={() => setSelectedJobIndex(index)}>Delete Job</button>
                <button className={styles.buttonAll} onClick={() => navigate('/applicants')}>View Applicants</button>
              </div>

            </div>

          );
        })}
      </div>
    </center>
  );
}