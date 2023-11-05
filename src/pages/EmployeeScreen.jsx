import { useState } from "react";
import FilterBox from "../components/employee/FilterBox";
import JobDescSidePanel from "../components/employee/JobDescSidePanel";
import JobsList from "../components/employee/JobsList";
import SearchBar from "../components/employee/SearchBar";

import styles from "./styles/EmployeeScreen.module.css";

const jobItems = [
  {
    jobName: "Junior Web Dev",
    company: "MS",
    location: "Cape Town",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "Senior Web Dev",
    company: "Netflix",
    location: "WFH",
    locationType: "Remote",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "Intern",
    company: "VIT",
    location: "Vellore",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
  {
    jobName: "CEO",
    company: "Netflix",
    location: "New York",
    locationType: "On-site",
    jobIcon: "/logo192.png",
    description: "A B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\nA B C D\n"
  },
];


const EmployeeScreen = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className={styles.box}>
      <SearchBar />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <FilterBox />
        <JobsList jobItems={jobItems} selectedJob={selectedJob} onClick={(job) => {setSelectedJob(job)}}/>
        <JobDescSidePanel selectedJob={selectedJob} />
      </div>
    </div>
  )
}

export default EmployeeScreen;