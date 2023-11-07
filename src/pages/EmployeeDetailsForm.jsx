import React from "react";
import styles from "../pages/styles/EmployeeDetailsForm.module.css";
import { useNavigate } from "react-router-dom";

const EmployeeDetailsForm = () => {
  const navigate = useNavigate();
  function onClick() {
    navigate("/employee");
  }

  return (
    <body
      style={{
        backgroundImage: 'url("/blue_bg2.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        margin: "auto",
      }}
    >
      <div
        className="card"
        style={{
          background: "#30343f",
          width: "50%",
          borderRadius: "5px",
          margin: "4%",
          borderColor: "",
          boxShadow: "1px 1px 30px grey",
          marginLeft: "25%",
          color: "#6CE4F3",
        }}
      >
        <div
          className="card-body"
          style={{ fontFamily: "Signika Negative, Arial, sans-serif" }}
        >
          <img
            src="/LOGO_transparent.png"
            alt="LOGO-transparent"
            border="0"
            width={"60%"}
            style={{ marginLeft: "20%", marginTop: "5%" }}
          ></img>
          <br />
          <br />

          <p
            style={{
              textAlign: "center",
            }}
          >
            <strong>Please fill all the details before proceeding.</strong>
          </p >
          <h5 style={{color: "white"}}>
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
            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="User's Official Name" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her email address */}
            <div className="form-group mt-3">
              <label htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="User's Official Email ID" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her password for their account on jobnest. */}
            <div className="form-group mt-3">
              <label htmlFor="phoneno">
                Phone Number
              </label>
              <input
                type="number"
                id="phoneno"
                placeholder="Enter the Phone Number"
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  textAlign: "left",
                }}
              />
            </div>

            {/* User enters his/her confirmed password for their account on jobnest. */}
            <div className="form-group mt-3">
              <label htmlFor="password">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                placeholder="Enter the Date of Birth"
                className="form-control"
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
              <label htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="form-control"
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
              <label htmlFor="description">
                Description
              </label>
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
            <hr style={{color: "white"}}/>

            <h5 style={{color: "white"}}>
              <u>
                <strong>Education Qualifications: </strong>
              </u>
            </h5>

            {/* User enters his/her college name. */}
            <div className="form-group mt-1">
              <label htmlFor="collegename">
                College Name
              </label>
              <input
                type="text"
                id="collegename"
                placeholder="Name of your college" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her Stream. */}
            <div className="form-group mt-3">
              <label htmlFor="collegestream">
                Stream
              </label>
              <input
                type="text"
                id="collegestream"
                placeholder="Name of your stream" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div className="form-group mt-3">
              <label htmlFor="cgpa">
                College CGPA
              </label>
              <input
                type="number"
                id="name"
                placeholder="Your CGPA in college" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her school name. */}
            <div className="form-group mt-3">
              <label htmlFor="schoolname">
                School Name
              </label>
              <input
                type="text"
                id="schoolname"
                placeholder="Name of your school" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div className="form-group mt-3">
              <label htmlFor="highschoolpercent">
                High School Percentage
              </label>
              <input
                type="number"
                id="highschoolpercent"
                placeholder="Your high school percentage" // Retrive from the backend
                className="form-control"
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
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>
            <hr style={{color: "white"}}/>

            <h5 style={{color: "white"}}>
              <u>
                <strong>Job Experience: </strong>
              </u>
            </h5>
            {/* User enters his/her first company name. */}
            <div className="form-group mt-1">
              <label htmlFor="company1">
                Organization
              </label>
              <input
                type="text"
                id="company1"
                placeholder="Name of your organization " // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her first company work duration. */}
            <div className="form-group mt-1">
              <label htmlFor="duration1">
                Duration
              </label>
              <input
                type="text"
                id="duration1"
                placeholder="Duration" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her first company role. */}
            <div className="form-group mt-1">
              <label htmlFor="role1">
                Role
              </label>
              <input
                type="text"
                id="role"
                placeholder="Your role in the oragnization" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                }}
              />
            </div>

            {/* User enters his/her role description. */}
            <div className="form-group mt-3">
              <label htmlFor="roledescription1">
                Role Description
              </label>
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

            <hr style={{color: "white"}} />
            <h5 style={{color: "white"}}>
              <u>
                <strong>Awards & Cerifications: </strong>
              </u>
            </h5>
            {/* Awards Won by User */}
            <div className="form-group mt-3">
              <label htmlFor="listawards">
                Awards
              </label>
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
              <label htmlFor="certificate">
                Certifications
              </label>
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
              style={{ borderRadius: "10px" }}
              onClick={onClick}
            >
              {/* User registers either as an employer or a job seeker. */}
              <strong>Login</strong>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};

export default EmployeeDetailsForm;
