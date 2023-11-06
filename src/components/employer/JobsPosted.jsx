import React from "react";
import styles from "./styles/JobsPosted.module.css";
import {
  FaStopwatch,
  FaMoneyBillAlt,
  FaMapMarkerAlt,
  FaLaptop,
} from "react-icons/fa";
import { IconContext } from "react-icons";

export default function JobsPosted() {
  const jobs = [
    {
      role: "Web Developer",
      time: "Full Time",
      location: "Germany",
      type: "Remote",
      salary: "20000",
    },
    {
      role: "UI UX Developer",
      time: "Full Time",
      location: "Germany",
      type: "Remote",
      salary: "20000",
    },
    {
      role: "SDE",
      time: "Full Time",
      location: "Germany",
      type: "Remote",
      salary: "20000",
    },
    {
      role: "ML Intern",
      time: "Full Time",
      location: "Germany",
      type: "Remote",
      salary: "20000",
    },
    {
      role: "Data Analyst",
      time: "Full Time",
      location: "Germany",
      type: "Remote",
      salary: "20000",
    },
    {
      role: "Bussiness Analyst",
      time: "Full Time",
      location: "Germany",
      type: "Remote",
      salary: "20000",
    },
    {
      role: "Bussiness Analyst",
      time: "Full Time",
      location: "Germany",
      type: "Remote",
      salary: "20000",
    },
  ];

  return (
    <center>
      <div className={styles.allCards}>

        {jobs.map((e) => {
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



                    <div  style={{ display: "flex" }}>
                      <IconContext.Provider value={{ color: "", className: "global-class-name", size: "1em", }}>
                        <div>
                          <FaMoneyBillAlt />
                        </div>
                      </IconContext.Provider>
                      {e.salary}
                    </div>
                  </div>


                  <div className="" style={{ display: "flex", flexDirection: "column", alignItems:"start", justifyContent:"center" }}>
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

              <button className={styles.buttonAll}>View Applicants</button>


            </div>

          );
        })}
      </div>
    </center>
  );
}