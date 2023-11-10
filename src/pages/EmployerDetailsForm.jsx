import React, { Component } from "react";
import styles from "./styles/EmployeeDetailsForm.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import axios from "axios";

const EmployerDetailsForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  if (location.state == undefined) {
    navigate("/");
  }

  const userProvider = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('userId', userProvider.user._id);
    for (let [key, value] of formData.entries()) {
      console.log(key, " : val : ", value);
    }
    axios.post("http://localhost:3001/post_employer_details", formData)
      .then((res) => {
        console.log(res);
        navigate("/employer");
        alert("Details saved");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.background_image}>
      <form onSubmit={handleSubmit} className={styles.formBox}>
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

          {/* User enters his/her password for their account on jobnest. */}
          <div>
            <label htmlFor="phoneno">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter the Phone Number"
              className={styles.inputDimensions}
            />
          </div>

          {/* User enters his/her confirmed password for their account on jobnest. */}
          <div>
            <label htmlFor="password">Date of Birth</label>
            <input
              type="date"
              name="dob"
              placeholder="Enter the Date of Birth"
              className={styles.inputDimensions}
            />
          </div>

          {/* User enters his/her description for their account on jobnest. */}
          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
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
            name="orgName"
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

          <label htmlFor="officeLocation">Office Location</label>
          <input
            type="text"
            name="officeLocation"
            placeholder="Enter the location of the office."
            className={styles.inputDimensions}
          />

          <label htmlFor="office_email">Organization's Mail</label>
          <input
            type="email"
            name="orgEmail"
            placeholder="Enter the contact email for the organization."
            className={styles.inputDimensions}
          />

          <label htmlFor="office_phone">Organization's Phone No.</label>
          <input
            type="number"
            name="orgPhone"
            placeholder="Enter the contact number of the organization."
            className={styles.inputDimensions}
          />
        </div>
        <button
          className="btn btn-primary mt-4"
          type="submit"
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
      </form>
    </div>
  );
}

export default EmployerDetailsForm;