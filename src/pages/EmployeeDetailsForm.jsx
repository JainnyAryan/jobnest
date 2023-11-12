import React, { useEffect, useState } from "react";
import styles from "./styles/EmployeeDetailsForm.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { CurrencyRupee, LocationOn } from "@mui/icons-material";
import useAuth from "../context/useAuth";
import axios from "axios";
import { UserProvider, useUser } from "../context/userContext";
import { LinearProgress } from "@mui/material";
import secureLocalStorage from "react-secure-storage";

const EmployeeDetailsForm = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const routeProps = useLocation().state;
  const navigate = useNavigate();

  const user = useAuth();
  const userProvider = useUser();
  if (user.isEmployer) {
    navigate("/");
  }
  var jobDetails = null;
  if (routeProps && routeProps.isJobApplication) {
    jobDetails = routeProps.jobDetails;
  }


  useEffect(() => {
    console.log("use effect emp");
    const userFromStorage = JSON.parse(secureLocalStorage.getItem('userData'));
    if (!user) {
      userProvider.setUser(userFromStorage);
    }
    const fetchData = async () => {
      console.log(userFromStorage._id);
      axios.get("http://localhost:3001/get_employee_details", { params: { userId: userFromStorage._id } })
        .then((res) => res.data)
        .then((data) => {
          // console.log(data);
          if (data.status == false) {
            setIsLoaded(true);
            alert(data.message);
          }
          else {
            const employerData = data.data;
            const form = document.getElementById('employeeDetailsForm');
            // console.log(form.elements);
            if (routeProps && routeProps.isJobApplication) {
              form.elements["name"].value = userFromStorage.name;
              form.elements["email"].value = userFromStorage.email;
            }
            for (const inputName in employerData) {
              if (employerData.hasOwnProperty(inputName)) {
                const input = form.elements[inputName];
                if (input) {
                  input.value = employerData[inputName];
                }
              }
            }
            setIsLoaded(true);
          }
        })
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (routeProps && routeProps.isUserDetails) {
      formData.append("userId", userProvider.user._id);
      axios.post("http://localhost:3001/post_employee_details", formData)
        .then((res) => {
          console.log(res);
          navigate("/employee");
          alert("Details saved");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
    else if (routeProps && routeProps.isJobApplication) {
      formData.append("jobDetails", JSON.stringify(jobDetails));
      formData.append("applicantId", userProvider.user._id);
      formData.append("jobId", jobDetails._id);
      formData.append("applicantDetails", JSON.stringify(userProvider.user));
      formData.append("status", "");
      axios.post("http://localhost:3001/create_employee_job_application", formData)
        .then((res) => {
          console.log(res);
          navigate(-1);
          alert(`Application sent for ${jobDetails.role} at ${jobDetails.orgName}`)
        })
        .catch((err) => {
          console.log(err);
          alert(err)
        });
    }
  }

  return (
    <div className={styles.background_image}>
      <div className={styles.formBox}>
        {!isLoaded && <LinearProgress />}
        <form onSubmit={handleSubmit} id="employeeDetailsForm">
          {routeProps && routeProps.isUserDetails &&
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
            if (routeProps && routeProps.isJobApplication) {
              return (
                <div className={styles.jobDetailsHeader}>
                  <img src={jobDetails.iconUrl} style={{ height: "100%", width: "min-content", maxWidth: "40%", objectFit: "contain", borderRadius: "10px" }} alt="" />
                  <div style={{ display: "flex", flexDirection: "column", padding: "0% 7%" }}>
                    <h1>{jobDetails.role}</h1>
                    <h3>{jobDetails.orgName}</h3>
                    <h5 style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><LocationOn style={{ marginRight: "5px" }} /> {jobDetails.location}</h5>
                    <h5 style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><CurrencyRupee style={{ marginRight: "5px" }} /> {jobDetails.salary}</h5>
                  </div>
                </div>
              )
            }
          })()
          }
          {routeProps && routeProps.isSettings &&
            (
              <h1 style={{ marginBottom: "30px" }}>Update your details</h1>
            )
          }

          <h3 className={styles.headingColor}>
            Personal Information:
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            {routeProps && routeProps.isJobApplication &&
              <>
                {/* User enters his/her official name. */}
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="User's Official Name" // Retrive from the backend
                    className={styles.inputDimensions}
                  />
                </div>

                {/* User enters his/her email address */}
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="User's Official Email ID" // Retrive from the backend
                    className={styles.inputDimensions}
                  />
                </div>
              </>
            }

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
                name="collegeName"
                placeholder="Name of your college" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her Stream. */}
            <div>
              <label htmlFor="collegestream">Stream</label>
              <input
                type="text"
                name="collegeStream"
                placeholder="Name of your stream" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div>
              <label htmlFor="cgpa">College CGPA</label>
              <input
                type="number"
                name="cgpa"
                placeholder="Your CGPA in college" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her school name. */}
            <div>
              <label htmlFor="schoolName">School Name (class 12th)</label>
              <input
                type="text"
                name="schoolName"
                placeholder="Name of your school" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her class 12th %. */}
            <div>
              <label htmlFor="intermediatepercent">
                Intermediate Percentage
              </label>
              <input
                type="number"
                name="intermediateSchoolPercentage"
                placeholder="Your intermediate percentage" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her class 10th %. */}
            <div>
              <label htmlFor="highschoolpercent">High School Percentage</label>
              <input
                type="number"
                name="highSchoolPercentage"
                placeholder="Your high school percentage" // Retrive from the backend
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
                name="organisation"
                placeholder="Name of your organization " // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her first company work duration. */}
            <div className="form-group mt-1">
              <label htmlFor="duration1">Work Duration (in months)</label>
              <input
                type="number"
                name="workDuration"
                placeholder="Work Duration (in months)" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her first company role. */}
            <div className="form-group mt-1">
              <label htmlFor="role1">Role</label>
              <input
                type="text"
                name="role"
                placeholder="Your role in the oragnization" // Retrive from the backend
                className={styles.inputDimensions}
              />
            </div>

            {/* User enters his/her role description. */}
            <div>
              <label htmlFor="roledescription1">Role Description</label>
              <br />
              <textarea
                name="roleDescription"
                rows="3"
                placeholder="What was your role in the oraganization?"
                className={styles.inputDimensions}
              ></textarea>
            </div>

            <hr style={{ color: "white" }} />
            <h3 className={styles.headingColor}>
              Awards & Cerifications:
            </h3>
            {/* Awards Won by User */}
            <div>
              <label htmlFor="listawards">Awards</label>
              <br />
              <textarea
                name="awards"
                rows="3"
                placeholder="List down all your awards and achievements. "
                className={styles.inputDimensions}
              ></textarea>
            </div>

            {/* User enters his/her certificates */}
            <div>
              <label htmlFor="certificate">Certifications</label>
              <textarea
                name="certifications"
                rows="3"
                placeholder="List down all the certifications. "
                className={styles.inputDimensions}
              ></textarea>
            </div>
            <hr style={{ color: "white" }} />

            {routeProps && routeProps.isJobApplication &&
              <div>
                <h3 className={styles.headingColor}><>Resume :</></h3>
                <label htmlFor="resumeLink">Resume Link (public link)</label>
                <input type="text" name="resumeLink" id="emp_resume" className={styles.inputDimensions} placeholder="Accessible resume link" />
              </div>
            }

            <button
              className="btn btn-primary mt-4"
              type="submit"
              style={{
                borderRadius: "10px",
                backgroundColor: "rgb(108,228,242)",
                color: "rgb(35,36,35)",
                border: "none",
                margin: "auto",
                width: "30%",
              }}
            >
              {routeProps && routeProps.isUserDetails ? "Save" : routeProps && routeProps.isJobApplication ? "Apply" : routeProps && routeProps.isSettings ? "Update" : ""}
            </button>
          </div>
        </form>
      </div >
    </div >
  );
};

export default EmployeeDetailsForm;
