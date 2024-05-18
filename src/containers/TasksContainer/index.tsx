import { TaskCounter } from "../../components/TaskCounter";
import { Task } from "../../types";
import styles from './styles.module.css';

type TasksContainerProps = {
  tasks: Task[];
}

export const TasksContainer = ({ tasks }: TasksContainerProps) => {
  return (
    <>
      <div className={styles.header}>

      <TaskCounter
        completedTasks={2}
        numberOfTasks={3}
        />
        </div>
      {tasks.map((task) => (
        <div key={task.id} >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => { }}
          />
          <p>{task.title}</p>
        </div>
      ))}
    </>
  )
}
