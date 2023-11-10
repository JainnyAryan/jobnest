import { useEffect, useState } from "react";

import FilterBox from "../components/employee/FilterBox";
import JobDescSidePanel from "../components/employee/JobDescSidePanel";
import JobsList from "../components/employee/JobsList";
import MyNavbar from "../components/common/MyNavbar";

import styles from "./styles/EmployeeScreen.module.css";
import { useUser } from "../context/userContext";
import axios from "axios";

const currentState = "EMPLOYEE";

const EmployeeScreen = () => {
  const [jobItems, setJobItems] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobItems, setFilteredJobItems] = useState(jobItems);
  const userProvider = useUser();


  const searchUpdates = (searchKey) => {
    console.log("in employee screen : " + searchKey);
    setFilteredJobItems(jobItems.filter((job) => job.role.toLowerCase().includes(searchKey)));
    console.log(filteredJobItems);
  }

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      userProvider.setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/get_jobs")
      .then((res) => {
        console.log(res.data);
        setJobItems(res.data);
        setFilteredJobItems(res.data);
      })
      .catch((err) => console.log(err));
  }, [])


  return (
    <div className={styles.box}>
      <MyNavbar currentState={currentState} searchUpdates={(val) => searchUpdates(val)} />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <FilterBox />
        <JobsList jobItems={filteredJobItems} selectedJob={selectedJob} onClick={(job) => { setSelectedJob(job) }} />
        <JobDescSidePanel selectedJob={selectedJob} />
      </div>
    </div>
  )
}

export default EmployeeScreen;