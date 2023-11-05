import { useState } from "react";
import FilterBox from "../components/employee/FilterBox";
import JobDescSidePanel from "../components/employee/JobDescSidePanel";
import JobsList from "../components/employee/JobsList";
import SearchBar from "../components/employee/SearchBar";

const EmployeeScreen = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div>
      <SearchBar />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <FilterBox />
        <JobsList />
        <JobDescSidePanel />
      </div>
    </div>
  )
}

export default EmployeeScreen;