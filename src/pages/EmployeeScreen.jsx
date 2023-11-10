import { useEffect, useState } from "react";

import FilterBox from "../components/employee/FilterBox";
import JobDescSidePanel from "../components/employee/JobDescSidePanel";
import JobsList from "../components/employee/JobsList";
import MyNavbar from "../components/common/MyNavbar";

import styles from "./styles/EmployeeScreen.module.css";
import { useUser } from "../context/userContext";

const currentState = "EMPLOYEE";

const jobItems = [
  {
    jobName: "Junior Web Dev",
    company: "MS",
    location: "Cape Town",
    locationType: "On-site",
    jobIcon: "https://assets.stickpng.com/images/58480fd7cef1014c0b5e4943.png",
    salary: "20000 a month",
    description: "A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>"
  },
  {
    jobName: "Senior Web Dev",
    company: "Netflix",
    location: "WFH",
    locationType: "Remote",
    jobIcon: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
    salary: "20000 a month",
    description: "A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>"
  },
  {
    jobName: "Intern",
    company: "VIT",
    location: "Vellore",
    locationType: "On-site",
    jobIcon: "https://findlogovector.com/wp-content/uploads/2022/05/vellore-institute-of-technology-vit-logo-vector-2022.png",
    salary: "20000 a month",
    description: "A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    salary: "20000 a month",
    description: "A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>",
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png", salary: "20000 a month",
    description: "A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png", salary: "20000 a month",
    description: "A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png", salary: "20000 a month",
    description: "A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png", salary: "20000 a month",
    description: "A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png", salary: "20000 a month",
    description: "A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png", salary: "20000 a month",
    description: "A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>A B C D<br>"
  },
];


const EmployeeScreen = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobItems, setFilteredJobItems] = useState(jobItems);
  const userProvider = useUser();


  const searchUpdates = (searchKey) => {
    console.log("in employee screen : " + searchKey);
    setFilteredJobItems(jobItems.filter((job) => job.jobName.toLowerCase().includes(searchKey)));
    console.log(filteredJobItems);
  }

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    console.log(storedUserData);
    if (storedUserData) {
      userProvider.setUserData(JSON.parse(storedUserData));
    }
  }, []);


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