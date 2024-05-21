import { Task as TaskType } from "../../types";
import Trash from "../icons/Trash";
import styles from './styles.module.css';
type TaskProps = {
  task: TaskType;
  onDelete: () => void;
  onComplete: () => void;
}
export const Task = ({ task, onComplete, onDelete }: TaskProps) => {
  return (
    <div
      className={styles.container}
    >
      <div className={styles.label} onClick={onComplete}>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            checked={task.completed}
          />
        </div>
        <p>{task.title}</p>
      </div>
      <button onClick={onDelete}>
        <Trash />
      </button>
    </div>
  )
}
