import React, { Component } from "react";
import styles from "./styles/EmployeeDetailsForm.module.css";

export default class EmployerDetailsForm extends Component {
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
            ></img>
            <p style={{ textAlign: "center" }}>
              <strong>Please fill all the details before proceeding.</strong>
            </p>
            <h5 className={styles.headingColor}>
              <u>
                <strong>Personal Information: </strong>
              </u>
            </h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              {/* User enters his/her official name. */}
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="User's Official Name" // Retrive from the backend
                  className={styles.inputDimensions}
                />
              </div>

              {/* User enters his/her email address */}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="User's Official Email ID" // Retrive from the backend
                  className={styles.inputDimensions}
                />
              </div>

              {/* User enters his/her password for their account on jobnest. */}
              <div>
                <label htmlFor="phoneno">Phone Number</label>
                <input
                  type="number"
                  id="phoneno"
                  placeholder="Enter the Phone Number"
                  className={styles.inputDimensions}
                />
              </div>

              {/* User enters his/her confirmed password for their account on jobnest. */}
              <div>
                <label htmlFor="password">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  placeholder="Enter the Date of Birth"
                  className={styles.inputDimensions}
                />
              </div>

              {/* User enters his/her description for their account on jobnest. */}
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  className={styles.inputDimensions}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>

              {/* User enters his/her description for their account on jobnest. */}
              <div>
                <label htmlFor="description">Description</label>
                <br />
                <textarea
                  name="description"
                  id="description"
                  rows="3"
                  placeholder="Write about yourself in not more than 200 words."
                  className={styles.inputDimensions}
                ></textarea>
              </div>
              <hr style={{ color: "white" }} />
            </div>

            <h5 className={styles.headingColor}>
              <u>
                <strong>Corporate Information: </strong>
              </u>
            </h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <label htmlFor="org_name">Organization Name</label>
              <input
                type="text"
                name="org_name"
                id="org_name"
                placeholder="Enter the name of the organization."
                className={styles.inputDimensions}
              />

              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                name="designation"
                id="designation"
                placeholder="Enter your designation in the comapany."
                className={styles.inputDimensions}
              />

              <label htmlFor="office_loc">Office Location</label>
              <input
                type="text"
                name="office_loc"
                id="office_loc"
                placeholder="Enter the location of the office."
                className={styles.inputDimensions}
              />

              <label htmlFor="office_email">Organization's Mail</label>
              <input
                type="email"
                name="office_email"
                id="office_email"
                placeholder="Enter the contact email for the organization."
                className={styles.inputDimensions}
              />

              <label htmlFor="office_phone">Organization's Phone No.</label>
              <input
                type="number"
                name="office_phone"
                id="office_phone"
                placeholder="Enter the contact number of the organization."
                className={styles.inputDimensions}
              />
            </div>
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
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}
