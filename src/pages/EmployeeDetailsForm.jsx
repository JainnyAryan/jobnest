import React from "react";
import styles from "./styles/EmployeeDetailsForm.module.css";
import { useNavigate } from "react-router-dom";

const EmployeeDetailsForm = () => {
  const navigate = useNavigate();
  function onClick() {
    navigate("/employee");
  }

  return (
    <div className={styles.background_image}>
      <div className={styles.formBox}>
        <div
          className="card-body"
          style={{ fontFamily: "Signika Negative, Arial, sans-serif" }}
        >
          <p
            style={{
              textAlign: "center",
            }}
          >
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
            <div className="form-group mt-3">
              <label htmlFor="phoneno">Phone Number</label>
              <input
                type="number"
                id="phoneno"
                placeholder="Enter the Phone Number"
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  textAlign: "left",
                }}
              />
            </div>

            {/* User enters his/her confirmed password for their account on jobnest. */}
            <div className="form-group mt-3">
              <label htmlFor="password">Date of Birth</label>
              <input
                type="date"
                id="dob"
                placeholder="Enter the Date of Birth"
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  textAlign: "left",
                  paddingLeft: "10%",
                }}
              />
            </div>

            {/* User enters his/her description for their account on jobnest. */}
            <div className="form-group mt-3">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  textAlign: "left",
                }}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>

            {/* User enters his/her description for their account on jobnest. */}
            <div className="form-group mt-3">
              <label htmlFor="description">Description</label>
              <br />
              <textarea
                name="description"
                id="description"
                rows="5"
                placeholder="Write about yourself in not more than 200 words."
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  textAlign: "left",
                  width: "100%",
                }}
              ></textarea>
            </div>
            <hr style={{ color: "white" }} />

            <h5 style={{ color: "white" }}>
              <u>
                <strong>Education Qualifications: </strong>
              </u>
            </h5>

            {/* User enters his/her college name. */}
            <div className="form-group mt-1">
              <label htmlFor="collegename">College Name</label>
              <input
                type="text"
                id="collegename"
                placeholder="Name of your college" // Retrive from the backend
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her Stream. */}
            <div className="form-group mt-3">
              <label htmlFor="collegestream">Stream</label>
              <input
                type="text"
                id="collegestream"
                placeholder="Name of your stream" // Retrive from the backend
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div className="form-group mt-3">
              <label htmlFor="cgpa">College CGPA</label>
              <input
                type="number"
                id="name"
                placeholder="Your CGPA in college" // Retrive from the backend
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her school name. */}
            <div className="form-group mt-3">
              <label htmlFor="schoolname">School Name</label>
              <input
                type="text"
                id="schoolname"
                placeholder="Name of your school" // Retrive from the backend
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div className="form-group mt-3">
              <label htmlFor="highschoolpercent">High School Percentage</label>
              <input
                type="number"
                id="highschoolpercent"
                placeholder="Your high school percentage" // Retrive from the backend
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div className="form-group mt-3">
              <label htmlFor="intermediatepercent">
                Intermediate Percentage
              </label>
              <input
                type="number"
                id="intermediatepercent"
                placeholder="Your intermediate percentage" // Retrive from the backend
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>
            <hr style={{ color: "white" }} />

            <h5 style={{ color: "white" }}>
              <u>
                <strong>Job Experience: </strong>
              </u>
            </h5>
            {/* User enters his/her first company name. */}
            <div className="form-group mt-1">
              <label htmlFor="company1">Organization</label>
              <input
                type="text"
                id="company1"
                placeholder="Name of your organization " // Retrive from the backend
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her first company work duration. */}
            <div className="form-group mt-1">
              <label htmlFor="duration1">Duration</label>
              <input
                type="text"
                id="duration1"
                placeholder="Duration" // Retrive from the backend
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her first company role. */}
            <div className="form-group mt-1">
              <label htmlFor="role1">Role</label>
              <input
                type="text"
                id="role"
                placeholder="Your role in the oragnization" // Retrive from the backend
                className={`form-control ${styles.input}`}
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her role description. */}
            <div className="form-group mt-3">
              <label htmlFor="roledescription1">Role Description</label>
              <br />
              <textarea
                name="roledescription1"
                id="roledescription1"
                rows="3"
                placeholder="What was your role in the oraganization?"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  textAlign: "left",
                  width: "100%",
                }}
              ></textarea>
            </div>

            <hr style={{ color: "white" }} />
            <h5 style={{ color: "white" }}>
              <u>
                <strong>Awards & Cerifications: </strong>
              </u>
            </h5>
            {/* Awards Won by User */}
            <div className="form-group mt-3">
              <label htmlFor="listawards">Awards</label>
              <br />
              <textarea
                name="listawards"
                id="listawards"
                rows="3"
                placeholder="List down all your awards and achievements. "
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  textAlign: "left",
                  width: "100%",
                }}
              ></textarea>
            </div>

            {/* User enters his/her certificates */}
            <div className="form-group mt-1">
              <label htmlFor="certificate">Certifications</label>
              <textarea
                name="certificate"
                id="certificate"
                rows="3"
                placeholder="List down all the certifications. "
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  textAlign: "left",
                  width: "100%",
                }}
              ></textarea>
            </div>

            <button
              className="btn btn-primary mt-4"
              style={{ borderRadius: "10px", backgroundColor: "rgb(108,228,242)", color: "rgb(35,36,35)", border: "none", margin: "auto", width: "30%" }}
              onClick={onClick}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsForm;
