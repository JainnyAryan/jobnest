import React from 'react'
import styles from './styles/applicants.module.css'

import { useState, useEffect } from 'react';

const ApplicantsTable = (props) => {
    const selectedTab = props.selectedTab;

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const closePopup = () => {
        setPopupVisible(false);
    };

    useEffect(()=>{
        console.log("ApplicantsTable Render");
    },[])

    return (
        <div className={styles.list}>
            <table className={styles.table}>
                <tr>
                    <td colSpan={7}>
                        <hr style={{ paddingTop: '0px', marginTop: '0px' }} />
                    </td>
                </tr>
                <tr>
                    <th>Unique Id</th>
                    <th>Applicants Name</th>
                    <th>Location</th>
                    <th>Applied Date</th>
                    <th>View</th>
                    {/* <th>Accept</th>
                    <th>Reject</th> */}
                </tr>
                <tr>
                    <td colSpan={7}>
                        <hr />
                    </td>
                </tr>
                {
                    props.applicants.map((e, ind) => {
                        return (
                            <>
                                {selectedTab === 'ALL' && !e.isAcknowledged &&
                                    (
                                        <tr className={styles.tableRows}>
                                            <td>{e.applicantId}</td>
                                            <td>{e.name}</td>
                                            <td>{e.location}</td>
                                            <td>{e.date}</td>
                                            <td>{e.resumeLink}</td>
                                            {/* <td><button className='btn' style={{backgroundColor:"rgb(5, 177, 100)", color: "white"}} name="AcceptReject" onClick={() => handleAcceptClick(e, ind)}>Accept</button></td>
                                            <td><button className='btn' style={{backgroundColor:"rgb(243, 35, 87)", color: "white"}} name="AcceptReject" onClick={() => handleRejectClick(e, ind)}>Reject</button></td> */}
                                        </tr>
                                    )
                                }

                                {selectedTab === 'ACCEPTED' && e.isAccepted && (
                                <tr className={styles.tableRows}>
                                    <td>{e.applicantId}</td>
                                    <td>{e.name}</td>
                                    <td>{e.location}</td>
                                    <td>{e.date}</td>
                                    <td>{e.resumeLink}</td>
                                    {/* <td><button className='btn' style={{backgroundColor:"rgb(5, 177, 100)", color: "white"}} name="AcceptReject" onClick={() => handleAcceptClick(e, ind)}>Accept</button></td>
                                    <td><button className='btn' style={{backgroundColor:"rgb(243, 35, 87)", color: "white"}} name="AcceptReject" onClick={() => handleRejectClick(e, ind)}>Reject</button></td> */}
                                </tr>
                                )}
                                {selectedTab === 'REJECTED' && !e.isAccepted &&( <tr className={styles.tableRows}>
                                    <td>{e.applicantId}</td>
                                    <td>{e.name}</td>
                                    <td>{e.location}</td>
                                    <td>{e.date}</td>
                                    <td>{e.resumeLink}</td>
                                    {/* <td><button className='btn' style={{backgroundColor:"rgb(5, 177, 100)", color: "white"}} name="AcceptReject" onClick={() => handleAcceptClick(e, ind)}>Accept</button></td>
                                    <td><button className='btn' style={{backgroundColor:"rgb(243, 35, 87)", color: "white"}} name="AcceptReject" onClick={() => handleRejectClick(e, ind)}>Reject</button></td> */}
                                </tr>)
                                }
                                

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
        </div>
    )

    // return(
    //     <>
    //     </>
    // )
}
export default ApplicantsTable;
