import React, { Component } from "react";
import styles from "./styles/CreateJobForm.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.delete('jobIcon');
    formData.append('iconUrl', firebaseImageUrl ? firebaseImageUrl : DEFAULT_IMG);
    formData.append('employer', JSON.stringify(userProvider.user));
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, " : val : ", value);
    // }

    axios.post("http://localhost:3001/post_job", formData)
      .then((res) => {
        console.log(res);
        navigate("/employer");
        alert("Job created!");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });

  }



  return (
    <div className={styles.background_image}>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <h1>Create a Job</h1>

        <br />

        <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px", maxHeight: "50vh" }}>
          <label htmlFor="jobIcon" className={styles.headingColor}>Job/Organiztion Icon:</label>
          <input type="file" name="jobIcon" onChange={handleChange} />
          <span>
            {imageUrl && <button type="button" onClick={handleUpload} style={{ width: "min-content", margin: "5px", padding: "5px 10px", borderRadius: "10px", backgroundColor: "rgb(108,228,242)", color: "rgb(35,36,35)", border: "none" }}>{firebaseImageUrl ? "Uploaded" : "Upload"}</button>}
            {progress !== 0 && <progress value={progress} max="100" />}
          </span>
          {imageUrl && <img src={imageUrl} style={{ objectFit: "contain", maxWidth: "20%" }} alt="Uploaded" />}
        </div>

        <label htmlFor="orgName" className={styles.headingColor}>
          Organization Name:
        </label>
        <input type="text" name="orgName" className={styles.inputDimensions} placeholder="Enter the name of organization." />

        <label htmlFor="role" className={styles.headingColor}>Role</label>
        <input type="text" name="role" id="role" className={styles.inputDimensions} placeholder="Enter the role for the employee." />

        <label htmlFor="locationType" className={styles.headingColor}>Location Type</label>
        <select name="locationType" className={styles.inputDimensions}>
          <option value="" disabled selected hidden>Choose the location type</option>
          <option value="on_site">On Site</option>
          <option value="wfh">Work From Home</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <label htmlFor="location" className={styles.headingColor}>Job Location</label>
        <input type="text" name="location" placeholder="Enter the job location" className={styles.inputDimensions} />

        <label htmlFor="salary" className={styles.headingColor}>Salary</label>
        <input type="text" name="salary" placeholder="Enter the salary of the job." className={styles.inputDimensions} />

        <label htmlFor="roleDescription" className={styles.headingColor}>Job Description</label>
        <textarea name="roleDescription" width="100%" rows="3" placeholder="Write about the job description." className={styles.inputDimensions}></textarea>

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
          Post Job <ArrowForward style={{ marginLeft: "1vw" }} /></button>
      </form>
    </div>
  );
}

export default CreateJobForm;