// import React from 'react';
import React, { useState, useEffect } from 'react';
import styles from './styles/AppliedJobs.module.css'
import { ArrowUpward, ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const AppliedJobs = (props) => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        setShowScrollButton(scrollY > 200); // Adjust the value based on when you want to show the button
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  const jobItems = props.jobItems;

  return (

    <div>
        
        <div className={styles.listStyle}>
        {jobItems.map((e, index) => (
            
            <div key={index}>
                <Accordion className={styles.cardStyle} style={{padding: "0px 0px"}}>
                    <AccordionSummary
            expandIcon={<ExpandMore />}
            >

                <div style={{display:"flex",alignItems:"center"}}>
                    <img src={e.jobIcon} alt="" className={styles.image}/>
                </div>
                <div style={{width:"100%"}}>
                    <div className={styles.containerStyle}>
                        <h2 style={{color:"rgb(69,77,102)", fontWeight:"bolder", textAlign:"left"}} className={styles.jobName}>{e.jobName}</h2>
                        <h3 style={{color:"rgb(115,118,123)"}} className={styles.salary}>{e.salary}</h3>
                    </div>
                    <div className={styles.containerStyle}>
                        <h5 className={styles.company}>{e.company}</h5>
                        <p style={{color:"rgb(115,118,123)"}} className={styles.location}>{e.location}</p>
                    </div>
                    <div className={styles.containerStyle}>
                        {/* <p className={styles.description}>Click for description</p> */}
                        <h5 className={styles.locationType}>{e.locationType}</h5>
                    </div>
                </div>
                </AccordionSummary>
                <AccordionDetails>
          <p className={styles.description}>
            {e.description}
          </p>
                </AccordionDetails>
                </Accordion>
            </div>
        ))}
        </div>
        {showScrollButton && (
        <button className={styles.scrollToTopButton} onClick={scrollToTop}>
          <ArrowUpward/>
        </button>
      )}

    </div>
  );
};


export default AppliedJobs;
