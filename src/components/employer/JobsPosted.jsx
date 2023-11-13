import React, { useEffect } from "react";
import styles from "./styles/JobsPosted.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
} from "@mui/material";
import {
  ArrowUpward,
  CurrencyRupee,
  ExpandMore,
  LocationOn,
} from "@mui/icons-material";
import ApplicantsAccordion from "./ApplicantsAccordion";




export default function JobsPosted(props) {
  const [jobs, setJobs] = useState(null);
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowScrollButton(scrollY > 100); // Adjust the value based on when you want to show the button
  };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => { // Clean up the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    setJobs(props.jobs);
  }, [props.jobs]);


  return (
    <center>
      {!jobs ? <LinearProgress /> :
        <div className={styles.listStyle}>
          {jobs.map((job, index) => {
            // console.log(job);
            return (
              <Accordion className={styles.cardStyle}>
                <AccordionSummary expandIcon={<ExpandMore fontSize="large" />}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={job.iconUrl}
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
                        {job.role}
                      </h2>
                      <h3
                        style={{ color: "rgb(115,118,123)" }}
                        className={styles.salary}
                      >
                        <CurrencyRupee />
                        {job.salary}
                      </h3>
                    </div>
                    <div className={styles.containerStyle}>
                      <h5 className={styles.company}>{job.orgName}</h5>
                    </div>
                    <div className={styles.containerStyle}>
                      <h5 className={styles.locationType}>
                        {job.locationType}
                      </h5>
                      <p
                        style={{ color: "rgb(115,118,123)", margin: "0" }}
                        className={styles.location}
                      >
                        <LocationOn />
                        {job.location}
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
                        {job.roleDescription.split("\n").map((line) => (
                          <React.Fragment>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </AccordionDetails>
                  </Accordion>
                  <br />
                  <ApplicantsAccordion jobId={job._id} />
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>}
      {showScrollButton && (
        <button className={styles.scrollToTopButton} onClick={scrollToTop}>
          <ArrowUpward />
        </button>
      )}
    </center>
  );
}
