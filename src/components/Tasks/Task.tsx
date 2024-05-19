import { Task as TaskType } from "../../types";
import styles from './styles.module.css';
type TaskProps = {
  task: TaskType;
}
export const Task = ({ task }: TaskProps) => {
  return (
    <div className={styles.container}>
      <p>{task.title}</p>
    </div>
  )
}
