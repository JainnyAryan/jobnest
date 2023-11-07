import React from 'react'
import styles from './styles/applicants.module.css'
import { useState, useEffect } from 'react';

const Applicants = (props) => {
    const selectedTab = props.selectedTab;
//   const applicants = props.applicants;

  const [currentApplicants, setCurrentApplicants] = useState(null);


      const [isPopupVisible,setPopupVisible] = useState(false);
      const [popupMessage,setPopupMessage] = useState('');
      
      const closePopup = () => {
          setPopupVisible(false);
      };
  
      const handleAcceptClick = (applicant, ind)=>{
            props.applicants[ind].isAcknowledged = true;

          setPopupMessage('Accepted');
          setPopupVisible(true);
         
      };
  
      const handleRejectClick =(applicant, ind)=>{
        props.applicants[ind].isAcknowledged = true;
          setPopupMessage("Rejected");
          setPopupVisible(true);
      };
  return (
    <div className={styles.list}>
        <table className={styles.table}>
            <tr>
                <td colSpan={7}>
                    <hr style={{paddingTop:'0px', marginTop:'0px'}}/>
                </td>
            </tr>
            <tr>
                <th>Unique Id</th>
                <th>Applicants Name</th>
                <th>Location</th>
                <th>Applied Date</th>
                <th>View</th>
                <th>Accept</th>
                <th>Reject</th>
            </tr>
            <tr>
                <td colSpan={7}>
                    <hr />
                </td>
            </tr>
            {
            props.applicants.map((e, ind)=>{

                return(
                    <>
                    {selectedTab==='ALL' && !e.isAcknowledged&& (<tr className={styles.tableRows}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.location}</td>
                        <td>{e.date}</td>
                        <td>{e.resume}</td>
                        <td><button className='btn btn-success' name="AcceptReject" onClick={() => handleAcceptClick(e, ind)}>Accept</button></td>
                        <td><button className='btn btn-danger' name="AcceptReject" onClick={() => handleRejectClick(e, ind)}>Reject</button></td>
                        </tr>)}

                    {selectedTab ==='ACCEPTED' && e.isAccepted && (<tr className={styles.tableRows}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.location}</td>
                        <td>{e.date}</td>
                        <td>{e.resume}</td>
                        <td><button className='btn btn-success' name="AcceptReject" onClick={() => handleAcceptClick(e, ind)}>Accept</button></td>
                        <td><button className='btn btn-danger' name="AcceptReject" onClick={() => handleRejectClick(e, ind)}>Reject</button></td>
                        </tr>
                    )}
                    {selectedTab ==='REJECTED' && !e.isAccepted && (<tr className={styles.tableRows}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.location}</td>
                        <td>{e.date}</td>
                        <td>{e.resume}</td>
                        <td><button className='btn btn-success' name="AcceptReject" onClick={() => handleAcceptClick(e, ind)}>Accept</button></td>
                        <td><button className='btn btn-danger' name="AcceptReject" onClick={() => handleRejectClick(e, ind)}>Reject</button></td>
                        </tr>
                    )}
                        
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
}
export default Applicants
