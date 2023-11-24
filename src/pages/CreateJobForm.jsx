import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./styles/CreateJobForm.module.css";
import { ArrowForward } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebaseContext";
import axios from "axios";
import { useUser } from "../context/userContext";
import useAuth from "../context/useAuth";

const CreateJobForm = () => {
  const userProvider = useUser();
  const user = useAuth();
  const navigate = useNavigate();

  if (!user.isEmployer) {
    navigate("/");
  }

  const DEFAULT_IMG = "/LOGO.jpeg";

  const { image, progress, imageUrl, firebaseImageUrl, handleChange, handleUpload } = useFirebase();

  const validationSchema = Yup.object({
    orgName: Yup.string().required("Organization Name is required"),
    role: Yup.string().required("Role is required"),
    locationType: Yup.string().required("Location Type is required"),
    location: Yup.string().required("Job Location is required"),
    salary: Yup.string().required("Salary is required"),
    roleDescription: Yup.string().required("Job Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      jobIcon: null,
      orgName: "",
      role: "",
      locationType: "",
      location: "",
      salary: "",
      roleDescription: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("iconUrl", firebaseImageUrl ? firebaseImageUrl : DEFAULT_IMG);
      formData.append("employerId", userProvider.user._id);
      formData.append("employer", JSON.stringify(userProvider.user));
      formData.append("orgName", values.orgName);
      formData.append("role", values.role);
      formData.append("locationType", values.locationType);
      formData.append("location", values.location);
      formData.append("salary", values.salary);
      formData.append("roleDescription", values.roleDescription);

      try {
        const res = await axios.post("https://jobnest-backend.vercel.app/post_job", formData);
        console.log(res);
        navigate("/employer");
        alert("Job created!");
      } catch (err) {
        console.error(err);
        alert(err);
      }
    },
  });

  return (
    <div className={styles.background_image}>
      <form className={styles.formBox} onSubmit={formik.handleSubmit}>
        <h1>Create a Job</h1>

        <br />

        <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", maxHeight: "50vh" }}>
          <label htmlFor="jobIcon" className={styles.headingColor}>Job/Organiztion Icon:</label>
          <input type="file" name="jobIcon" onChange={(event) => { handleChange(event); formik.setFieldValue("jobIcon", event.currentTarget.files[0]); }} />
          <span>
            {imageUrl && <button type="button" onClick={handleUpload} style={{ width: "min-content", margin: "5px", padding: "5px 10px", borderRadius: "10px", backgroundColor: "rgb(108,228,242)", color: "rgb(35,36,35)", border: "none" }}>{firebaseImageUrl ? "Uploaded" : "Upload"}</button>}
            {progress !== 0 && <progress value={progress} max="100" />}
          </span>
          {imageUrl && <img src={imageUrl} style={{ objectFit: "contain", maxWidth: "20%" }} alt="Uploaded" />}
        </div>

        <label htmlFor="orgName" className={styles.headingColor}>
          Organization Name:
        </label>
        <input
          type="text"
          name="orgName"
          className={styles.inputDimensions}
          placeholder="Enter the name of organization."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.orgName}
        />
        {formik.touched.orgName && formik.errors.orgName && <div className={styles.errorText}>{formik.errors.orgName}</div>}

        <label htmlFor="role" className={styles.headingColor}>Role</label>
        <input
          type="text"
          name="role"
          id="role"
          className={styles.inputDimensions}
          placeholder="Enter the role for the employee."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.role}
        />
        {formik.touched.role && formik.errors.role && <div className={styles.errorText}>{formik.errors.role}</div>}

        <label htmlFor="locationType" className={styles.headingColor}>Location Type</label>
        <select
          name="locationType"
          className={styles.inputDimensions}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.locationType}
        >
          <option value="" disabled hidden>Choose the location type</option>
          <option value="On Site">On Site</option>
          <option value="Work From Home">Work From Home</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        {formik.touched.locationType && formik.errors.locationType && <div className={styles.errorText}>{formik.errors.locationType}</div>}

        <label htmlFor="location" className={styles.headingColor}>Job Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter the job location"
          className={styles.inputDimensions}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
        />
        {formik.touched.location && formik.errors.location && <div className={styles.errorText}>{formik.errors.location}</div>}

        <label htmlFor="salary" className={styles.headingColor}>Salary</label>
        <input
          type="text"
          name="salary"
          placeholder="Enter the salary of the job."
          className={styles.inputDimensions}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.salary}
        />
        {formik.touched.salary && formik.errors.salary && <div className={styles.errorText}>{formik.errors.salary}</div>}

        <label htmlFor="roleDescription" className={styles.headingColor}>Job Description</label>
        <textarea
          name="roleDescription"
          width="100%"
          rows="3"
          placeholder="Write about the job description."
          className={styles.inputDimensions}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.roleDescription}
        ></textarea>
        {formik.touched.roleDescription && formik.errors.roleDescription && <div className={styles.errorText}>{formik.errors.roleDescription}</div>}

        <button
          type="submit"
          className="btn btn-primary mt-4"
          style={{
            borderRadius: "10px",
            backgroundColor: "rgb(108,228,242)",
            color: "rgb(35,36,35)",
            border: "none",
            margin: "auto",
            marginLeft: "35%",
            width: "30%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          Post Job <ArrowForward style={{ marginLeft: "1vw" }} />
        </button>
      </form>
    </div>
  );
};

export default CreateJobForm;
