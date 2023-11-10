import { useEffect, useState } from "react";

import FilterBox from "../components/employee/FilterBox";
import JobDescSidePanel from "../components/employee/JobDescSidePanel";
import JobsList from "../components/employee/JobsList";
import MyNavbar from "../components/common/MyNavbar";

import styles from "./styles/EmployeeScreen.module.css";
import { useUser } from "../context/userContext";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const currentState = "EMPLOYEE";

const EmployeeScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.state == undefined) {
    navigate("/");
  }


  const [jobItems, setJobItems] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobItems, setFilteredJobItems] = useState(jobItems);
  const userProvider = useUser();


  const searchUpdates = (searchKey) => {
    setFilteredJobItems(jobItems.filter((job) => job.role.toLowerCase().includes(searchKey.toLowerCase())));
  }

  useEffect(() => {
    axios.get("http://localhost:3001/get_jobs")
      .then((res) => {
        console.log("rebuilt");
        if (!filteredJobItems) {
          setJobItems(res.data);
          setFilteredJobItems(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [])


  return (
    <div className={styles.box}>
      <MyNavbar currentState={currentState} searchUpdates={(val) => searchUpdates(val)} />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <FilterBox />
        <JobsList jobItems={filteredJobItems} selectedJob={selectedJob} onClick={(job) => setSelectedJob(job)} />
        <JobDescSidePanel selectedJob={selectedJob} />
      </div>
    </div>
  )
}

export default EmployeeScreen;