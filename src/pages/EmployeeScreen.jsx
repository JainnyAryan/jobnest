import FilterBox from "../components/employee/FilterBox";
import { FindJobDash } from "../components/employee/FindJobDash"
import JobDescSidePanel from "../components/employee/JobDescSidePanel";
import JobsList from "../components/employee/JobsList";

const EmployeeScreen = () => {
  return (
    <div>
      <FindJobDash />
      <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
        <FilterBox/>
        <JobsList />
        <JobDescSidePanel/>
      </div>
    </div>
  )
}

export default EmployeeScreen;