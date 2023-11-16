// import React from 'react';
import React, { useState, useEffect } from 'react';
import styles from './styles/AppliedJobs.module.css'
import styles2 from '../../pages/styles/EmployerViewApplication.module.css'
import { ArrowUpward, Cancel, CheckCircle, CurrencyRupee, ExpandMore, Feed, HourglassBottom, LocationOn, RampRight, Stop, WrongLocation } from '@mui/icons-material';
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
                      <div className={styles2.applicationDetails} style={{ marginLeft: "0px", textAlign: "left" }}>
                        <h2>Personal Information</h2>
                        <div>
                          <div className={styles2.titles}>Name</div>
                          <div>{application.name}</div>
                        </div>
                        <div>
                          <div className={styles2.titles}>Email</div>
                          <div>{application.email}</div>
                        </div>
                        <div>
                          <div className={styles2.titles}>Phone</div>
                          <div>{application.phone}</div>
                        </div>
                        <div>
                          <div className={styles2.titles}>Date of Birth</div>
                          <div>{application.dob}</div>
                        </div>
                        <div>
                          <div className={styles2.titles}>Gender</div>
                          <div>{application.gender}</div>
                        </div>

                        <div>
                          <div className={styles2.titles}>Description</div>
                          <div>
                            {application.description.split('\n').map((line) => (
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
                          <div className={styles2.titles}>College Name</div>
                          <div>{application.collegeName}</div>
                        </div>
                        <div>
                          <div className={styles2.titles}>College Stream</div>
                          <div>{application.collegeStream}</div>
                        </div>
                        <div>
                          <div className={styles2.titles}>CGPA</div>
                          <div>{application.cgpa}</div>
                        </div>
                        <div>
                          <div className={styles2.titles}>School Name</div>
                          <div>{application.schoolName}</div>
                        </div>
                        <div>
                          <div className={styles2.titles}>Intermediate School Percentage</div>
                          <div>{application.intermediateSchoolPercentage}</div>
                        </div>

                        <div>
                          <div className={styles2.titles}>High School Percentage</div>
                          <div>{application.highSchoolPercentage}</div>
                        </div>
                        <hr />
                        <h2>Work Experience</h2>

                        <div>
                          <div className={styles2.titles}>Organisation</div>
                          <div>{application.organisation}</div>
                        </div>
                        <div>
                          <div className={styles2.titles}>Work Duration</div>
                          <div>{application.workDuration}</div>
                        </div>
                        <div>
                          <div className={styles2.titles}>Role</div>
                          <div>{application.role}</div>
                        </div>

                        <div>
                          <div className={styles2.titles}>Role Description</div>
                          <div>
                            {application.roleDescription.split('\n').map((line) => (
                              <React.Fragment>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                        <hr />
                        <h2>Acheivements</h2>

                        <div>
                          <div className={styles2.titles}>Awards</div>
                          <div>
                            {application.awards.split('\n').map((line) => (
                              <React.Fragment>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className={styles2.titles}>Certifications</div>
                          <div>
                            {application.certifications.split('\n').map((line) => (
                              <React.Fragment>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                        <hr />
                        <h2>Resume</h2>
                        <div>
                          <div><a href={application.resumeLink}><Feed />View Resume</a></div>
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
