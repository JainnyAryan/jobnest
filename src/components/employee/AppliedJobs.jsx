// import React from 'react';
import React, { useState, useEffect } from 'react';
import styles from './styles/AppliedJobs.module.css'
import { ArrowUpward, Cancel, CheckCircle, CurrencyRupee, ExpandMore, HourglassBottom, LocationOn, RampRight, Stop, WrongLocation } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const AppliedJobs = (props) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowScrollButton(scrollY > 100); // Adjust the value based on when you want to show the button
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

    <>

      <div className={styles.listStyle}>
        {jobItems.map((application, index) => {
          const e = JSON.parse(application.jobDetails);
          return (
            <Accordion className={styles.cardStyle}>
              <AccordionSummary expandIcon={<ExpandMore fontSize='large' />}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={e.iconUrl} alt="" className={styles.image} />
                </div>
                <div style={{ width: "100%" }}>
                  <div className={styles.containerStyle}>
                    <h2 style={{ color: "rgb(69,77,102)", fontWeight: "bolder", textAlign: "left" }} className={styles.jobName}>{e.role}</h2>
                    <h3 style={{ color: "rgb(115,118,123)" }} className={styles.salary}><CurrencyRupee />{e.salary}</h3>
                  </div>
                  <div className={styles.containerStyle}>
                    <h5 className={styles.company}>{e.orgName}</h5>
                    <h5 className={styles.status + " " +
                      (application.status === "R" ? styles.rejected :
                        application.status === "A" ? styles.accepted :
                          styles.underReview)}
                    >
                      {application.status === "R" ? (<span className={styles.centerContent}><Cancel /> REJECTED</span>) :
                        application.status === "A" ? (<span className={styles.centerContent}><CheckCircle /> ACCEPTED</span>) :
                          (<span className={styles.centerContent}><HourglassBottom /> Under Review</span>)}
                    </h5>
                  </div>
                  <div className={styles.containerStyle}>
                    <h5 className={styles.locationType}>{e.locationType}</h5>
                    <p style={{ color: "rgb(115,118,123)", margin: "0" }} className={styles.location}><LocationOn />{e.location}</p>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Accordion className={styles.cardStyle2} style={{ width: "100%", padding: "0px 0px", margin: "0px 0px" }}>
                  <AccordionSummary expandIcon={<ExpandMore fontSize='large' />}>
                    Description
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className={styles.description}>
                      {e.roleDescription.split('\n').map((line) => (
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
                  <AccordionSummary expandIcon={<ExpandMore fontSize='large' />}>
                    Application
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={styles.containerStyle2} style={{ justifyContent: "space-around" }}>
                    <div className={styles.applicationDetails}>
        <hr/>
        <h2>Personal Information</h2>
            <div>
              <div className={styles.titles}>Name</div>
              <div>{e.name}</div>
            </div>
            <div>
              <div className={styles.titles}>Email</div>
              <div>{e.email}</div>
            </div>
            <div>
              <div className={styles.titles}>Phone</div>
              <div>{e.phone}</div>
            </div>
            <div>
              <div className={styles.titles}>Date of Birth</div>
              <div>{e.dob}</div>
            </div>
            <div>
              <div className={styles.titles}>Gender</div>
              <div>{e.gender}</div>
            </div>

            <div>
              <div className={styles.titles}>Description</div>
              <div>
                {e.description.split('\n').map((line) => (
                <React.Fragment>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              </div>
            </div>

            <hr />
        
        <h2> Education Details</h2>
            <div>
              <div className={styles.titles}>College Name</div>
              <div>{e.collegeName}</div>
            </div>
            <div>
              <div className={styles.titles}>College Stream</div>
              <div>{e.collegeStream}</div>
            </div>
            <div>
              <div className={styles.titles}>CGPA</div>
              <div>{e.cgpa}</div>
            </div>
            <div>
              <div className={styles.titles}>School Name</div>
              <div>{e.schoolName}</div>
            </div>
            <div>
              <div className={styles.titles}>Intermediate School Percentage</div>
              <div>{e.intermediateSchoolPercentage}</div>
            </div>

            <div>
              <div className={styles.titles}>High School Percentage</div>
              <div>{e.highSchoolPercentage}</div>
            </div>
            <hr />
       <h2>Work Experience</h2>

          <div>
              <div className={styles.titles}>Organisation</div>
              <div>{e.organisation}</div>
            </div>
            <div>
              <div className={styles.titles}>Work Duration</div>
              <div>{e.workDuration}</div>
            </div>
            <div>
              <div className={styles.titles}>Role</div>
              <div>{e.role}</div>
            </div>

            <div>
              <div className={styles.titles}>Role Description</div>
              <div>
                {e.roleDescription.split('\n').map((line) => (
                <React.Fragment>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              </div>
            </div>
            <hr/>
        <h2>Acheivements</h2>
       
            <div>
              <div className={styles.titles}>Awards</div>
              <div>
                {e.awards.split('\n').map((line) => (
                <React.Fragment>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              </div>
            </div>
            <div>
              <div className={styles.titles}>Certifications</div>
              <div>
                {e.certifications.split('\n').map((line) => (
                <React.Fragment>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              </div>
            </div>
            <hr/>
            <h2>Resume</h2>
              <div>
                <div><a href={e.resumeLink}><Feed/>View Resume</a></div>
              </div>
              <hr />
      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </div>
      {showScrollButton && (
        <button className={styles.scrollToTopButton} onClick={scrollToTop}>
          <ArrowUpward />
        </button>
      )}
    </>
  );
};


export default AppliedJobs;
