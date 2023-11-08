import React, { Component } from "react";
import styles from "./styles/CreateJobForm.module.css";
export default class CreateJobForm extends Component {
  render() {
    return (
      <div className={styles.background_image}>
        <div className={styles.formBox}>
          <div
            className="card-body"
            style={{ fontFamily: "Signika Negative, Arial, sans-serif" }}
          >
            <img
              src="/LOGO_transparent.png"
              alt="LOGO-transparent"
              border="0"
              width={"50%"}
              style={{
                borderTopRightRadius: "20px",
                padding: "2%",
                marginLeft: "25%",
              }}
            />
            <p style={{ textAlign: "center" }}>
              Kindly enter the details of the job.
            </p>
            <div>
                <label htmlFor="company_name" className={styles.headingColor}>
                    Organization Name:
                </label>
                <input type="text" name="company_name" id="company_name" className={styles.inputDimensions} placeholder="Enter the name of organization."/>

                <label htmlFor="role" className={styles.headingColor}>Role</label>
                <input type="text" name="role" id="role" className={styles.inputDimensions} placeholder="Enter the role for the employee."/>

                <label htmlFor="loc_type" className={styles.headingColor}>Location Type</label>
                <select name="loc_type" id="loc_type" className={styles.inputDimensions}>
                    <option value="" disabled selected>Choose the job location type.</option>
                    <option value="on_site">On Site</option>
                    <option value="wfh">Work From Home</option>
                    <option value="hybrid">Hybrid</option>
                </select>

                <label htmlFor="location" className={styles.headingColor}>Job Location</label>
                <input type="text" name="location" id="location" placeholder="Enter the job location" className={styles.inputDimensions}/>

                <label htmlFor="salary" className={styles.headingColor}>Salary</label>
                <input type="number" name="salary" id="salary" placeholder="Enter the salary of the job." className={styles.inputDimensions} />

                <label htmlFor="job_desc" className={styles.headingColor}>Job Description</label>
                <textarea name="job_desc" id="job_desc" width="100%" rows="3" placeholder="Write about the job description." className={styles.inputDimensions}></textarea>

                <button 
                className="btn btn-primary mt-4"
                style={{
                borderRadius: "10px",
                backgroundColor: "rgb(108,228,242)",
                color: "rgb(35,36,35)",
                border: "none",
                margin: "auto",
                marginLeft: "35%",
                width: "30%",
                
              }}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
