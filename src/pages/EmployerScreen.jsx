import React, { useState, useEffect } from "react";
import JobsPosted from "../components/employer/JobsPosted";
import MyNavbar from "../components/common/MyNavbar";
import { useUser } from "../context/userContext";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";

import styles from "./styles/EmployerScreen.module.css";
import { faL } from "@fortawesome/free-solid-svg-icons";
import MyFooter from "../components/common/MyFooter";

const currentState = "EMPLOYER";

export default function EmployerScreen() {
  const userProvider = useUser();
  const user = useAuth();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [isSending, setIsSending] = useState(false);

  if (!user.isEmployer) {
    navigate("/");
  }

  useEffect(() => {
    const userFromStorage = JSON.parse(secureLocalStorage.getItem("userData"));
    console.log(userFromStorage);
    axios
      .get("https://jobnest-backend.vercel.app/get_jobs", {
        params: {
          createdBySomeEmployer: true,
          employerId: userFromStorage._id,
        },
      })
      .then((res) => {
        // console.log(res);
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Some error occured!");
      });
  }, [isSending]);

  return (
    <>
      <div className={styles.box}>
        <MyNavbar currentState={currentState} />
        <JobsPosted jobs={jobs} isSending={isSending} setIsSending={setIsSending} />
      </div>
      <MyFooter />
    </>
  );
}
