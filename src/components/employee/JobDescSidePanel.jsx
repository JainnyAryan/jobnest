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
        <div>
          <p>{selectedJob.jobName}</p>
        </div>
      }
    </div>
  )
}

export default JobDescSidePanel;