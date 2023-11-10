import React from 'react';
import styles from './styles/AppliedJobs.module.css'

const AppliedJobs = (props) => {
  const jobItems = props.jobItems;

  return (

    <div>
        <div className={styles.listStyle}>
        {jobItems.map((e, index) => (
            <div key={index} className={styles.cardStyle} >
                <div style={{display:"flex",alignItems:"center"}}>
                    <img src={e.jobIcon} alt="" className={styles.image}/>
                </div>
                <div>
                    <div className={styles.containerStyle}>
                        <h2 style={{color:"rgb(69,77,102)", fontWeight:"bolder", textAlign:"left"}}>{e.jobName}</h2>
                        <h3 style={{color:"rgb(115,118,123)"}}>{e.salary}</h3>
                    </div>
                    <div className={styles.containerStyle}>
                        <h5 style={{color:"rgb(54, 61, 80)", fontWeight:"bold"}}>{e.company}</h5>
                        <p style={{color:"rgb(115,118,123)"}}>{e.location}</p>
                    </div>
                    <div className={styles.containerStyle}>
                        <p style={{textAlign:"left", width:"70%", color:"rgb(115,118,123)"}} className={styles.description}>{e.description}</p>
                        <h5 style={{display:"flex",alignItems:"center", color:"rgb(115,118,123)"}}>{e.locationType}</h5>
                    </div>
                </div>
            </div>
        ))}
        </div>

    </div>
  );
};


export default AppliedJobs;
