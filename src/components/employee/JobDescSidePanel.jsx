import { FindJobDash } from "./FindJobDash";
import styles from "./styles/JobDescSidePanel.module.css";

const JobDescSidePanel = () => {
  return (
    <div className={styles.box}>
      <FindJobDash/>
    </div>
  )
}

export default JobDescSidePanel;