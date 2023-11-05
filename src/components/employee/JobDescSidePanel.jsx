import { FindJobDash } from "./FindJobDash";
import styles from "./styles/JobDescSidePanel.module.css";

const JobDescSidePanel = (props) => {
  return (
    <div className={styles.box}>
      {!props.selectedJob &&
        <FindJobDash />}
    </div>
  )
}

export default JobDescSidePanel;