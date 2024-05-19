import { Task as TaskType } from "../../types";
import Trash from "../icons/Trash";
import styles from './styles.module.css';
type TaskProps = {
  task: TaskType;
}
export const Task = ({ task }: TaskProps) => {
  return (
    <div
    className={styles.container}

    >
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          checked={task.completed}
        />
      </div>
      <p>{task.title}</p>
      <button>
        <Trash />
      </button>
    </div>
  )
}
