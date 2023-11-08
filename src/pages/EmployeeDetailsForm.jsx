import React from "react";
import styles from "./styles/EmployeeDetailsForm.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { CurrencyRupee, LocationOn } from "@mui/icons-material";

const EmployeeDetailsForm = (props) => {
  const routeProps = useLocation().state;
  const navigate = useNavigate();

  return (
    <div className={styles.background_image}>
      <div className={styles.formBox}>
        <div
          className="card-body"
        >
          {routeProps.isUserApplication &&
            <>
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
              <p
                style={{
                  textAlign: "center",
                }}
              >
                <strong>Please fill all the details before proceeding.</strong>
              </p>
            </>
          }
          {(() => {
            if (routeProps.isJobApplication) {
              const jobDetails = routeProps.jobDetails;
              return (
                <div className={styles.jobDetailsHeader}>
                  <img src={jobDetails.jobIcon} style={{ height: "100%", width: "min-content", maxWidth:"40%", objectFit: "contain", borderRadius:"10px" }} alt="" />
                  <div style={{ display: "flex", flexDirection: "column", padding: "0% 7%" }}>
                    <h1>{jobDetails.jobName}</h1>
                    <h3>{jobDetails.company}</h3>
                    <h5 style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><LocationOn style={{ marginRight: "5px" }} /> {jobDetails.location}</h5>
                    <h5 style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><CurrencyRupee style={{ marginRight: "5px" }} /> {jobDetails.salary}</h5>
                  </div>
                </div>
              )
            }
          })()
          }
          {routeProps.isEmployeeSettings && (
            <h1 style={{ marginBottom: "30px" }}>Update your details</h1>
          )
          }

          <h3 className={styles.headingColor}>
            <>Personal Information: </>
          </h3>
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
                rows="5"
                placeholder="Write about yourself in not more than 200 words."
                className={styles.inputDimensions}
              ></textarea>
            </div>
            <hr style={{ color: "white" }} />

            <h3 className={styles.headingColor}>

              <>Education Qualifications: </>

            </h3>

            {/* User enters his/her college name. */}
            <div>
              <label htmlFor="collegename">College Name</label>
              <input
                type="text"
                id="collegename"
                placeholder="Name of your college" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her Stream. */}
            <div>
              <label htmlFor="collegestream">Stream</label>
              <input
                type="text"
                id="collegestream"
                placeholder="Name of your stream" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div>
              <label htmlFor="cgpa">College CGPA</label>
              <input
                type="number"
                id="name"
                placeholder="Your CGPA in college" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her school name. */}
            <div>
              <label htmlFor="schoolname">School Name</label>
              <input
                type="text"
                id="schoolname"
                placeholder="Name of your school" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div>
              <label htmlFor="highschoolpercent">High School Percentage</label>
              <input
                type="number"
                id="highschoolpercent"
                placeholder="Your high school percentage" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div>
              <label htmlFor="intermediatepercent">
                Intermediate Percentage
              </label>
              <input
                type="number"
                id="intermediatepercent"
                placeholder="Your intermediate percentage" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>
            <hr style={{ color: "white" }} />

            <h3 className={styles.headingColor}>

              <>Job Experience: </>

            </h3>
            {/* User enters his/her first company name. */}
            <div className="form-group mt-1">
              <label htmlFor="company1">Organization</label>
              <input
                type="text"
                id="company1"
                placeholder="Name of your organization " // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her first company work duration. */}
            <div className="form-group mt-1">
              <label htmlFor="duration1">Duration</label>
              <input
                type="text"
                id="duration1"
                placeholder="Duration" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her first company role. */}
            <div className="form-group mt-1">
              <label htmlFor="role1">Role</label>
              <input
                type="text"
                id="role"
                placeholder="Your role in the oragnization" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her role description. */}
            <div>
              <label htmlFor="roledescription1">Role Description</label>
              <br />
              <textarea
                name="roledescription1"
                id="roledescription1"
                rows="3"
                placeholder="What was your role in the oraganization?"
                className={styles.inputDimensions}
              ></textarea>
            </div>

            <hr style={{ color: "white" }} />
            <h3 className={styles.headingColor}>

              <>Awards & Cerifications: </>

            </h3>
            {/* Awards Won by User */}
            <div>
              <label htmlFor="listawards">Awards</label>
              <br />
              <textarea
                name="listawards"
                id="listawards"
                rows="3"
                placeholder="List down all your awards and achievements. "
                className={styles.inputDimensions}
              ></textarea>
            </div>

            {/* User enters his/her certificates */}
            <div>
              <label htmlFor="certificate">Certifications</label>
              <textarea
                name="certificate"
                id="certificate"
                rows="3"
                placeholder="List down all the certifications. "
                className={styles.inputDimensions}
              ></textarea>
            </div>
            <hr style={{ color: "white" }} />

            <div>
              <h3 className={styles.headingColor}><>Upload Your Resume:</></h3>
              <input type="file" name="emp_resume" id="emp_resume" />
            </div>

            <button
              className="btn btn-primary mt-4"
              style={{
                borderRadius: "10px",
                backgroundColor: "rgb(108,228,242)",
                color: "rgb(35,36,35)",
                border: "none",
                margin: "auto",
                width: "30%",
              }}
              onClick={() => navigate("/employee")}
            >
              {routeProps.isUserApplication ? "Save" : routeProps.isJobApplication ? "Apply" : routeProps.isEmployeeSettings ? "Update" : ""}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsForm;
