import React from "react";
import styles from "../pages/styles/EmployeeDetailsForm.module.css";
import { useNavigate } from "react-router-dom";

const EmployeeDetailsForm = () => {
    const navigate = useNavigate();
    function onClick() {
          navigate("/employee");
      };

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
          background: "white",
          width: "40%",
          borderRadius: "5px",
          margin: "4%",
          borderColor: "",
          boxShadow: "1px 1px 20px #e9ecef",
          marginLeft: "30%",
        }}
      >
        <div
          className="card-body"
          style={{ fontFamily: "Signika Negative, Arial, sans-serif" }}
        >
          <img
            src="/logo_black.png"
            alt="LOGO-transparent"
            border="0"
            width={"50%"}
            style={{ marginLeft: "25%", marginTop: "5%" }}
          ></img>
          <br />
          <br />

          <p
            style={{
              textAlign: "center",
            }}
          >
            <strong>Please fill all the details before proceeding.</strong>
          </p>
          <h5>
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
                <strong>Name</strong>
              </label>
              <input
                type="text"
                id="name"
                placeholder="User's Official Name" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her email address */}
            <div className="form-group mt-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="text"
                id="email"
                placeholder="User's Official Email ID" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her password for their account on jobnest. */}
            <div className="form-group mt-3">
              <label htmlFor="phoneno">
                <strong>Phone Number</strong>
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
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her confirmed password for their account on jobnest. */}
            <div className="form-group mt-3">
              <label htmlFor="password">
                <strong>Date of Birth </strong>
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
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her description for their account on jobnest. */}
            <div className="form-group mt-3">
              <label htmlFor="gender">
                <strong>Gender </strong>
              </label>
              <select
                name="gender"
                id="gender"
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  textAlign: "left",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
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
                <strong>Description</strong>
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
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              ></textarea>
            </div>
            <hr />

            <h5>
              <u>
                <strong>Education Qualifications: </strong>
              </u>
            </h5>

            {/* User enters his/her college name. */}
            <div className="form-group mt-1">
              <label htmlFor="collegename">
                <strong>College Name </strong>
              </label>
              <input
                type="text"
                id="collegename"
                placeholder="Name of your college" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her Stream. */}
            <div className="form-group mt-3">
              <label htmlFor="collegestream">
                <strong>Stream </strong>
              </label>
              <input
                type="text"
                id="collegestream"
                placeholder="Name of your stream" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div className="form-group mt-3">
              <label htmlFor="cgpa">
                <strong>College CGPA</strong>
              </label>
              <input
                type="number"
                id="name"
                placeholder="Your CGPA in college" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her school name. */}
            <div className="form-group mt-3">
              <label htmlFor="schoolname">
                <strong>School Name </strong>
              </label>
              <input
                type="text"
                id="schoolname"
                placeholder="Name of your school" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div className="form-group mt-3">
              <label htmlFor="highschoolpercent">
                <strong>High School Percentage</strong>
              </label>
              <input
                type="number"
                id="highschoolpercent"
                placeholder="Your high school percentage" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her college cgpa. */}
            <div className="form-group mt-3">
              <label htmlFor="intermediatepercent">
                <strong>Intermediate Percentage</strong>
              </label>
              <input
                type="number"
                id="intermediatepercent"
                placeholder="Your intermediate percentage" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>
            <hr />

            <h5>
              <u>
                <strong>Job Experience: </strong>
              </u>
            </h5>
            {/* User enters his/her first company name. */}
            <div className="form-group mt-1">
              <label htmlFor="company1">
                <strong>Organization </strong>
              </label>
              <input
                type="text"
                id="company1"
                placeholder="Name of your organization " // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her first company work duration. */}
            <div className="form-group mt-1">
              <label htmlFor="duration1">
                <strong>Duration </strong>
              </label>
              <input
                type="text"
                id="duration1"
                placeholder="Duration" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her first company role. */}
            <div className="form-group mt-1">
              <label htmlFor="role1">
                <strong>Role </strong>
              </label>
              <input
                type="text"
                id="role"
                placeholder="Your role in the oragnization" // Retrive from the backend
                className="form-control"
                style={{
                  borderRadius: "8px",
                  border: "2px solid grey",
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              />
            </div>

            {/* User enters his/her role description. */}
            <div className="form-group mt-3">
              <label htmlFor="roledescription1">
                <strong>Role Description</strong>
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
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              ></textarea>
            </div>

            <hr />
            <h5>
              <u>
                <strong>Awards & Cerifications: </strong>
              </u>
            </h5>
            {/* Awards Won by User */}
            <div className="form-group mt-3">
              <label htmlFor="listawards">
                <strong>Awards</strong>
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
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
                }}
              ></textarea>
            </div>

            {/* User enters his/her certificates */}
            <div className="form-group mt-1">
              <label htmlFor="certificate">
                <strong>Certifications </strong>
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
                  background:
                    "linear-gradient(to left, #48cae4, #61d0e7, #75d6ea, #87dbed, #98e1f0, #a2e4f2, #abe7f3, #b4eaf5, #baecf6, #bfedf7, #c5eff7, #caf0f8)",
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

