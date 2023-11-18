import React, { useEffect, useState } from "react";
import styles from "./styles/EmployeeDetailsForm.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { CurrencyRupee, LocationOn } from "@mui/icons-material";
import useAuth from "../context/useAuth";
import axios from "axios";
import { UserProvider, useUser } from "../context/userContext";
import { LinearProgress } from "@mui/material";
import secureLocalStorage from "react-secure-storage";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const EmployeeDetailsSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  // Add other validation rules for your fields
  phone: Yup.string().required("Phone number is required"),
  dob: Yup.date().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  description: Yup.string().required("Description is required"),
  collegeName: Yup.string().required("College name is required"),
  collegeStream: Yup.string().required("College stream is required"),
  cgpa: Yup.number().required("CGPA is required"),
  schoolName: Yup.string().required("School name is required"),
  intermediateSchoolPercentage: Yup.number().required("Intermediate percentage is required"),
  highSchoolPercentage: Yup.number().required("High school percentage is required"),
  organisation: Yup.string().required("Organization name is required"),
  workDuration: Yup.number().required("Work duration is required"),
  role: Yup.string().required("Role is required"),
  roleDescription: Yup.string().required("Role description is required"),
  awards: Yup.string().required("Awards are required"),
  certifications: Yup.string().required("Certifications are required"),
  resumeLink: Yup.string().required("Resume link is required"),
});

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
      axios.get("https://jobnest-backend.vercel.app/get_employee_details", { params: { userId: userFromStorage._id } })
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
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
  
    const handleSubmit = async (values) => {
      const formData = new FormData();
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          formData.append(key, values[key]);
        }
      }
      if (routeProps && routeProps.isUserDetails) {
        formData.append("userId", userProvider.user._id);
        try {
          const response = await axios.post("https://jobnest-backend.vercel.app/post_employee_details", formData);
          console.log(response);
          navigate("/employee");
          alert("Details saved");
        } catch (err) {
          console.log(err);
          alert(err);
        }
      } else if (routeProps && routeProps.isSettings) {
        formData.append('userId', userProvider.user._id);
        try {
          const response = await axios.put("https://jobnest-backend.vercel.app/update_employee_details", formData);
          navigate(-1);
          alert("Details updated!");
        } catch (err) {
          console.log(err);
          alert(err);
        }
      } else if (routeProps && routeProps.isJobApplication) {
        var currentdatetime = new Date().toLocaleString();
        formData.append("jobDetails", JSON.stringify(jobDetails));
        formData.append("applicantId", userProvider.user._id);
        formData.append("jobId", jobDetails._id);
        formData.append("applicantDetails", JSON.stringify(userProvider.user));
        formData.append("applicationDateTime", currentdatetime);
        formData.append("status", "");
        try {
          const response = await axios.post("https://jobnest-backend.vercel.app/create_employee_job_application", formData);
          console.log(response);
          navigate(-1);
          alert(`Application sent for ${jobDetails.role} at ${jobDetails.orgName}`)
        } catch (err) {
          console.log(err);
          alert(err)
        }
      }
    }
    return (
      <div className={styles.background_image}>
        <div className={styles.formBox}>
          {!isLoaded && <LinearProgress />}
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
          <Formik
          initialValues={{
            name: '',
            email: '',
            phone:'',
            dob:'',
            gender:'',
            description:'',
            collegeName:'',
            collegeStream:'',
            cgpa:'',
            schoolName:'',
            intermediateSchoolPercentage:'',
            highSchoolPercentage:'',
            organisation:'',
            workDuration:'',
            role:'',
            roleDescription:'',
            awards:'',
            certifications:'',
            resumeLink:'',
          }}
          
          validationSchema={EmployeeDetailsSchema}
          onSubmit={handleSubmit}
        >
          
          <Form id="employeeDetailsForm">
            {/* Your form fields using Field component */}
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" placeholder="User's Official Name" className={styles.inputDimensions} />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" placeholder="User's Official Email ID" className={styles.inputDimensions} />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
            
            <div>
              <label htmlFor="phoneno">Phone Number</label>
              <Field type="text" name="phone" placeholder="Enter the  Phone Number" className={styles.inputDimensions} />
              <ErrorMessage name="phone" component="div" className={styles.error} />
            </div>

            <div>
              <label htmlFor="password">Date of Birth</label>
              <Field type="date" name="dob" placeholder="Enter the  Date of Birth" className={styles.inputDimensions} />
              <ErrorMessage name="dob" component="div" className={styles.error} />
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <Field as="select" name="gender" className={styles.inputDimensions}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </Field>
              <ErrorMessage name="gender" component="div" className={styles.error} />
            </div>
            <div>
  <label htmlFor="description">Description</label>
  <br />
  <Field
    as="textarea"
    name="description"
    id="description"
    rows="5"
    placeholder="Write about yourself in not more than 200 words."
    className={styles.inputDimensions}
  />
  <ErrorMessage name="description" component="div" className={styles.error} />
</div>
            <hr style={{ color: "white" }} />

            <h3 className={styles.headingColor}>

              <>Education Qualifications: </>

            </h3>

            <div>
  <label htmlFor="collegeName">College Name</label>
  <Field
    type="text"
    name="collegeName"
    placeholder="Name of your college"
    className={styles.inputDimensions}
  />
  <ErrorMessage name="collegeName" component="div" className={styles.error} />
</div>
<div>
  <label htmlFor="cgpa">College CGPA</label>
  <Field
    type="number"
    name="cgpa"
    placeholder="Your CGPA in college"
    className={styles.inputDimensions}
  />
  <ErrorMessage name="cgpa" component="div" className={styles.error} />
</div>

<div>
  <label htmlFor="schoolName">School Name (class 12th)</label>
  <Field
    type="text"
    name="schoolName"
    placeholder="Name of your school"
    className={styles.inputDimensions}
  />
  <ErrorMessage name="schoolName" component="div" className={styles.error} />
</div>

<div>
  <label htmlFor="intermediateSchoolPercentage">Intermediate Percentage</label>
  <Field
    type="number"
    name="intermediateSchoolPercentage"
    placeholder="Your intermediate percentage"
    className={styles.inputDimensions}
  />
  <ErrorMessage name="intermediateSchoolPercentage" component="div" className={styles.error} />
</div>

<div>
  <label htmlFor="highSchoolPercentage">High School Percentage</label>
  <Field
    type="number"
    name="highSchoolPercentage"
    placeholder="Your high school percentage"
    className={styles.inputDimensions}
  />
  <ErrorMessage name="highSchoolPercentage" component="div" className={styles.error} />
</div>


           <hr style={{ color: "white" }} />

           <h3 className={styles.headingColor}>

             <>Job Experience: </>

         </h3>
{/* User enters his/her first company name. */}
<div className="form-group mt-1">
  <label htmlFor="organisation">Organization</label>
  <Field
    type="text"
    name="organisation"
    placeholder="Name of your organization"
    className={styles.inputDimensions}
  />
  <ErrorMessage name="organisation" component="div" className={styles.error} />
</div>

{/* User enters his/her first company work duration. */}
<div className="form-group mt-1">
  <label htmlFor="workDuration">Work Duration (in months)</label>
  <Field
    type="number"
    name="workDuration"
    placeholder="Work Duration (in months)"
    className={styles.inputDimensions}
  />
  <ErrorMessage name="workDuration" component="div" className={styles.error} />
</div>
<div className="form-group mt-1">
  <label htmlFor="role">Role</label>
  <Field
    type="text"
    name="role"
    placeholder="Your role in the organization" // Retrieve from the backend
    className={styles.inputDimensions}
  />
  <ErrorMessage name="role" component="div" className={styles.error} />
</div>

<div>
  <label htmlFor="roleDescription">Role Description</label>
  <br />
  <Field
    as="textarea"
    name="roleDescription"
    rows="3"
    placeholder="What was your role in the organization?"
    className={styles.inputDimensions}
  />
  <ErrorMessage name="roleDescription" component="div" className={styles.error} />
</div>
<hr style={{ color: "white" }} />
            <h3 className={styles.headingColor}>
              Awards & Cerifications:
           </h3>
            {/* Awards Won by User */}
            <div>
  <label htmlFor="awards">Awards</label>
  <br />
  <Field
    as="textarea"
    name="awards"
    rows="3"
    placeholder="List down all your awards and achievements."
    className={styles.inputDimensions}
  />
  <ErrorMessage name="awards" component="div" className={styles.error} />
</div>

<div>
  <label htmlFor="certifications">Certifications</label>
  <Field
    as="textarea"
    name="certifications"
    rows="3"
    placeholder="List down all the certifications."
    className={styles.inputDimensions}
  />
  <ErrorMessage name="certifications" component="div" className={styles.error} />
</div>
<hr style={{ color: "white" }} />
{routeProps && routeProps.isJobApplication && (
  <div>
    <h3 className={styles.headingColor}><>Resume :</></h3>
    <label htmlFor="resumeLink">Resume Link (public link)</label>
    <Field
      type="text"
      name="resumeLink"
      id="emp_resume"
      className={styles.inputDimensions}
      placeholder="Accessible resume link"
    />
    <ErrorMessage name="resumeLink" component="div" className={styles.error} />
  </div>
)}
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
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EmployeeDetailsForm