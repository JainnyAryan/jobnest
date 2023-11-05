import { MdCurrencyRupee, MdLocationOn, MdLocationPin, MdMoney } from "react-icons/md";
import { FindJobDash } from "./FindJobDash";
import styles from "./styles/JobDescSidePanel.module.css";

const JobDescSidePanel = (props) => {
  const selectedJob = props.selectedJob;
  return (
    <div className={styles.box}>
      {
        !selectedJob &&
        <FindJobDash />
      }
      {
        selectedJob &&
        <div className={styles.panel}>
          <div className={styles.jobDetails}>
            <div className={styles.jobTitle}>{selectedJob.jobName}</div>
            <div className={styles.jobCompany}><u>{selectedJob.company}</u></div>
            <div className={styles.jobLocation}><MdLocationOn style={{ paddingRight: "5px", fontSize: "calc(16px + 1vw)" }} />  {selectedJob.location}</div>
            <div className={styles.jobLocation} ><MdCurrencyRupee style={{ paddingRight: "5px", fontSize: "calc(16px + 1vw)" }} />  {selectedJob.salary}</div>
          </div>
          <button className={styles.applyButton}>Apply</button>
          <p dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
        </div>
      }
    </div>
  )
}

export default JobDescSidePanel;