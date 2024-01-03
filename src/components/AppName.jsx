import styles from "./AppName.module.css";
import { GrTasks } from "react-icons/gr";
function AppName() {
  return (
    <h1 className={styles.todoHeading}>
     TO DO App <GrTasks />
    </h1>
  );
}

export default AppName;
