import React from 'react'
import styles from './styles/applicants.module.css'

const Applicants = (props) => {
  const applicants = props.applicants;
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
            {applicants.map((e)=>{
                return(
                        <tr className={styles.tableRows}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.location}</td>
                            <td>{e.date}</td>
                            <td>{e.resume}</td>
                            <td><button className='btn btn-success' name="AcceptReject">Accept</button></td>
                            <td><button className='btn btn-danger' name="AcceptReject">Reject</button></td>
                        </tr>
                );
            })}
        </table>
    </div>
  )
}
export default Applicants
