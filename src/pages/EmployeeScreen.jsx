import { useEffect, useState } from "react";

import FilterBox from "../components/employee/FilterBox";
import JobDescSidePanel from "../components/employee/JobDescSidePanel";
import JobsList from "../components/employee/JobsList";
import MyNavbar from "../components/common/MyNavbar";

import styles from "./styles/EmployeeScreen.module.css";
import { useUser } from "../context/userContext";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import { Filter1, Filter2, FilterAlt, FilterList } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import MyFooter from "../components/common/MyFooter";

const currentState = "EMPLOYEE";

const EmployeeScreen = () => {
  const user = useAuth();
  const navigate = useNavigate();
  if (user.isEmployer) {
    navigate("/");
  }

  const [jobItems, setJobItems] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobItems, setFilteredJobItems] = useState(jobItems);
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 768);


  const searchUpdates = (searchKey) => {
    setFilteredJobItems(jobItems.filter((job) => job.role.toLowerCase().includes(searchKey.toLowerCase())));
  }

  useEffect(() => {
    if (!filteredJobItems) {
      axios.get("http://localhost:3001/get_jobs")
        .then((res) => {
          console.log("rebuilt");
          setJobItems(res.data);
          setFilteredJobItems(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <div className={styles.box}>
        <MyNavbar isMobileScreen={isMobileScreen} currentState={currentState} searchUpdates={(val) => searchUpdates(val)} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          {!isMobileScreen && <FilterBox />}
          <JobsList isMobileScreen={isMobileScreen} jobItems={filteredJobItems} selectedJob={selectedJob} onClick={(job) => setSelectedJob(job)} />
          {!isMobileScreen && <JobDescSidePanel selectedJob={selectedJob} />}
        </div>
      </div>
      <MyFooter/>
    </>
  )
}

export default EmployeeScreen;