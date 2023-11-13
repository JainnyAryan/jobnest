import React from 'react'
import styles from './styles/applicantsAccordion.module.css'
import { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, LinearProgress } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import axios from 'axios';

const ApplicantsAccordion = (props) => {

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [jobApplicants, setJobApplicants] = useState(null);
    const [filteredJobApplicants, setFilteredJobApplicants] = useState(jobApplicants);

    const closePopup = () => {
        setPopupVisible(false);
    };

    const renderAll = () => {
        setFilteredJobApplicants(jobApplicants);
    };
    const renderAccepted = () => {
        setFilteredJobApplicants(jobApplicants.filter((applicant) => applicant.status === "A"));
    };
    const renderRejected = () => {
        setFilteredJobApplicants(jobApplicants.filter((applicant) => applicant.status === "R"));
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
                            <div className={styles.list}>
                                <table className={styles.table}>
                                    <tr>
                                        <td colSpan={7}>
                                            <hr style={{ paddingTop: '0px', marginTop: '0px' }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Applicants Name</th>
                                        <th>Location</th>
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
                                                <>

                                                    <tr className={styles.tableRows}>
                                                        <td>{e.name}</td>
                                                        <td>{e.location}</td>
                                                        <td>{e.date}</td>
                                                        <td>{e.resumeLink}</td>
                                                        {/* <td><button className='btn' style={{backgroundColor:"rgb(5, 177, 100)", color: "white"}} name="AcceptReject" onClick={() => handleAcceptClick(e, ind)}>Accept</button></td>
                                            <td><button className='btn' style={{backgroundColor:"rgb(243, 35, 87)", color: "white"}} name="AcceptReject" onClick={() => handleRejectClick(e, ind)}>Reject</button></td> */}
                                                    </tr>




                                                </>
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
