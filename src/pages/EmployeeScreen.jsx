import { useEffect, useState } from "react";

import FilterBox from "../components/employee/FilterBox";
import JobDescSidePanel from "../components/employee/JobDescSidePanel";
import JobsList from "../components/employee/JobsList";
import MyNavbar from "../components/common/MyNavbar";

import styles from "./styles/EmployeeScreen.module.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
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
  const [filterAndSearchValues, setFilterAndSearchValues] = useState({ searchKey: "", locationValue: "", locationTypeValue: "" });


  const searchUpdates = (searchKey) => {
    setFilterAndSearchValues({ locationValue: filterAndSearchValues.locationValue, searchKey: searchKey, locationTypeValue: filterAndSearchValues.locationTypeValue });
  }

  const locationFilterUpdates = (locationValue) => {
    setFilterAndSearchValues({ locationValue: locationValue, searchKey: filterAndSearchValues.searchKey, locationTypeValue: filterAndSearchValues.locationTypeValue });
  }

  const locationTypeFilterUpdates = (locationTypeValue) => {
    console.log(locationTypeValue);
    setFilterAndSearchValues({ locationValue: filterAndSearchValues.locationValue, searchKey: filterAndSearchValues.searchKey, locationTypeValue: locationTypeValue });
  }

  const applyFilters = () => {
    setSelectedJob(null);
    setFilteredJobItems(jobItems.filter((job) =>
      job.role.toLowerCase().includes(filterAndSearchValues.searchKey.toLowerCase())
      && job.location.toLowerCase().includes(filterAndSearchValues.locationValue.toLowerCase())
      && job.locationType.toLowerCase().includes(filterAndSearchValues.locationTypeValue.toLowerCase())
    ));
  }

  useEffect(() => {
    if (jobItems)
      applyFilters();
  }, [filterAndSearchValues.locationValue, filterAndSearchValues.searchKey, filterAndSearchValues.locationTypeValue]);

  useEffect(() => {
    if (!filteredJobItems) {
      axios.get("https://jobnest-backend.vercel.app/get_jobs")
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
        <MyNavbar locationFilterUpdates={(val) => locationFilterUpdates(val)} locationTypeFilterUpdates={(val) => locationTypeFilterUpdates(val)} isMobileScreen={isMobileScreen} currentState={currentState} searchUpdates={(val) => searchUpdates(val)} />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          {!isMobileScreen && <FilterBox locationFilterUpdates={(val) => locationFilterUpdates(val)} locationTypeFilterUpdates={(val) => locationTypeFilterUpdates(val)} />}
          <JobsList isMobileScreen={isMobileScreen} jobItems={filteredJobItems} selectedJob={selectedJob} onClick={(job) => setSelectedJob(job)} />
          {!isMobileScreen && <JobDescSidePanel selectedJob={selectedJob} />}
        </div>
      </div>
      <MyFooter />
    </>
  )
}

export default EmployeeScreen;