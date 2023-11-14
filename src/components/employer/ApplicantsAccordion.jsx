import React from 'react'
import styles from './styles/ApplicantsAccordion.module.css'
import { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, LinearProgress } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ApplicantsAccordion = (props) => {
    const navigate = useNavigate();
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [jobApplicants, setJobApplicants] = useState(null);
    const [filteredJobApplicants, setFilteredJobApplicants] = useState(jobApplicants);
    const [selectedTab, setSelectedTab] = useState("ALL");

    const closePopup = () => {
        setPopupVisible(false);
    };

    const renderAll = () => {
        setFilteredJobApplicants(jobApplicants);
        setSelectedTab("ALL");
    };
    const renderAccepted = () => {
        setFilteredJobApplicants(jobApplicants.filter((applicant) => applicant.status === "A"));
        setSelectedTab("ACCEPTED");
    };
    const renderRejected = () => {
        setFilteredJobApplicants(jobApplicants.filter((applicant) => applicant.status === "R"));
        setSelectedTab("REJECTED");
    };

    useEffect(() => {
        if (isExpanded && !filteredJobApplicants) {
            console.log("axios works")
            axios.get("http://localhost:3001/get_employee_job_applications", { params: { ofPatricularJob: true, jobId: props.jobId } })
                .then((res) => {
                    console.log(res)
                    setJobApplicants(res.data);
                    setFilteredJobApplicants(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    alert(err);
                })
        }
    }, [isExpanded])

    return (
        <Accordion expanded={isExpanded} onChange={(event, expanded) => setIsExpanded(expanded)}>
            <AccordionSummary expandIcon={<ExpandMore fontSize="large" />}>
                Applications
            </AccordionSummary>
            <AccordionDetails >
                {!filteredJobApplicants ? <LinearProgress /> :
                    <div
                        className={styles.containerStyle2}
                        style={{ justifyContent: "space-around" }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    marginBottom: "10px",
                                }}
                            >
                                <button
                                    className={styles.button23 + " " + (selectedTab === "ALL" ? styles.buttonSelected : "")}
                                    role="button"
                                    onClick={renderAll}
                                >
                                    All
                                </button>
                                <button
                                    className={styles.button24 + " " + (selectedTab === "ACCEPTED" ? styles.buttonSelected : "")}
                                    role="button"
                                    onClick={renderAccepted}
                                >
                                    Accepted
                                </button>
                                <button
                                    className={styles.button25 + " " + (selectedTab === "REJECTED" ? styles.buttonSelected : "")}
                                    role="button"
                                    onClick={renderRejected}
                                >
                                    Rejected
                                </button>
                            </div>
                            <div className={styles.list}>
                                <table className={styles.table}>
                                    <tr>
                                        <td colSpan={7}>
                                            <hr style={{ paddingTop: '0px', marginTop: '0px' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Applicants Name</th>
                                        <th>Applied Date</th>
                                        <th>View</th>
                                    </tr>
                                    <tr>
                                        <td colSpan={7}>
                                            <hr />
                                        </td>
                                    </tr>
                                    {
                                        filteredJobApplicants.map((e, ind) => {
                                            console.log(e);
                                            return (
                                                // <a href="" className={styles.applicationLink}>
                                                <tr className={styles.tableRows} >
                                                    <td>{e.name}</td>
                                                    <td>{e.applicationDateTime}</td>
                                                    <td>
                                                        <ul style={{margin:"10px 0"}}>
                                                            <li>
                                                                <a href={e.resumeLink}>Resume</a>
                                                            </li>
                                                            <li>
                                                                <a href=""
                                                                    onClick={() => navigate("/applications-in-a-job", { state: { application: e } })}>
                                                                    Application
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                // </a>
                                            );
                                        })}
                                </table>
                                {isPopupVisible && (
                                    <div className={styles.popupcard}>
                                        <div className={styles.popupcontent}>
                                            <h2>{popupMessage}</h2>
                                            <button className="btn btn-primary" onClick={closePopup}>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div >
                        </div>
                    </div>}
            </AccordionDetails>
        </Accordion>

    )

    // return(
    //     <>
    //     </>
    // )
}
export default ApplicantsAccordion;
