import React, { useEffect } from "react";
import styles from "./styles/JobsPosted.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApplicantsTable from "./ApplicantsTable";
import {
  FaStopwatch,
  FaMoneyBillAlt,
  FaMapMarkerAlt,
  FaLaptop,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
} from "@mui/material";
import {
  ArrowUpward,
  Cancel,
  CheckCircle,
  CurrencyRupee,
  ExpandMore,
  HourglassBottom,
  LocationOn,
  RampRight,
  Stop,
  WrongLocation,
} from "@mui/icons-material";
// import styles from "./styles/BeautifulButton.module.css"
export default function JobsPosted(props) {
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    setJobs(props.jobs);
  }, [props.jobs]);

  const applicants = [];

  const [selectedTab, setSelectedTab] = useState("ALL");
  const renderAll = () => {
    setSelectedTab("ALL");
  };
  const renderAccepted = () => {
    setSelectedTab("ACCEPTED");
  };
  const renderRejected = () => {
    setSelectedTab("REJECTED");
  };

  const [selectedJobIndex, setSelectedJobIndex] = useState(null);
  const navigate = useNavigate();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowScrollButton(scrollY > 100); // Adjust the value based on when you want to show the button
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  if (selectedJobIndex !== null) {
    const jobToDelete = jobs[selectedJobIndex];
    const confirmDeletion = window.confirm(
      `Are you sure you want to delete the job: ${jobToDelete.role}?`
    );

    if (confirmDeletion) {
      const updatedJobs = jobs.filter((_, index) => index !== selectedJobIndex);
      setJobs(updatedJobs);
      setSelectedJobIndex(null);
    } else {
      setSelectedJobIndex(null); // Reset the selected job index
    }
  }

  return (
    <center>
      {!jobs && <LinearProgress />}
      <div className={styles.listStyle}>
        {jobs.map((application, index) => {
          console.log(application);
          return (
            <Accordion className={styles.cardStyle}>
              <AccordionSummary expandIcon={<ExpandMore fontSize="large" />}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={application.iconUrl}
                    alt=""
                    className={styles.image}
                  />
                </div>
                <div style={{ width: "100%" }}>
                  <div className={styles.containerStyle}>
                    <h2
                      style={{
                        color: "rgb(69,77,102)",
                        fontWeight: "bolder",
                        textAlign: "left",
                      }}
                      className={styles.jobName}
                    >
                      {application.role}
                    </h2>
                    <h3
                      style={{ color: "rgb(115,118,123)" }}
                      className={styles.salary}
                    >
                      <CurrencyRupee />
                      {application.salary}
                    </h3>
                  </div>
                  <div className={styles.containerStyle}>
                    <h5 className={styles.company}>{application.orgName}</h5>
                  </div>
                  <div className={styles.containerStyle}>
                    <h5 className={styles.locationType}>
                      {application.locationType}
                    </h5>
                    <p
                      style={{ color: "rgb(115,118,123)", margin: "0" }}
                      className={styles.location}
                    >
                      <LocationOn />
                      {application.location}
                    </p>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Accordion
                  className={styles.cardStyle2}
                  style={{
                    width: "100%",
                    padding: "0px 0px",
                    margin: "0px 0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore fontSize="large" />}
                  >
                    Description
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className={styles.description}>
                      {application.roleDescription.split("\n").map((line) => (
                        <React.Fragment>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </AccordionDetails>
                </Accordion>
                <br />
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore fontSize="large" />}
                  >
                    Applications
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        marginBottom: "10px",
                      }}
                    >
                      <button
                        className={styles.button23}
                        role="button"
                        onClick={renderAll}
                      >
                        All
                      </button>
                      <button
                        className={styles.button24}
                        role="button"
                        onClick={renderAccepted}
                      >
                        Accepted
                      </button>
                      <button
                        className={styles.button25}
                        role="button"
                        onClick={renderRejected}
                      >
                        Rejected
                      </button>
                    </div>
                    <div
                      className={styles.containerStyle2}
                      style={{ justifyContent: "space-around" }}
                    >
                      <ApplicantsTable
                        applicants={applicants}
                        selectedTab={selectedTab}
                      />
                    </div>
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      {showScrollButton && (
        <button className={styles.scrollToTopButton} onClick={scrollToTop}>
          <ArrowUpward />
        </button>
      )}
    </center>
  );
}
