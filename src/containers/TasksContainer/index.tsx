import { Divider } from "../../components/Divider";
import { TaskCounter } from "../../components/TaskCounter";
import { Task } from "../../types";
import styles from './styles.module.css';

type TasksContainerProps = {
  tasks: Task[];
}

export const TasksContainer = ({ tasks }: TasksContainerProps) => {
  const completedTasks = tasks.filter((task) => task.completed).length
  const numberOfTasks = tasks.length
  const hasTasks = numberOfTasks > 0


  return (
    <>
      <div className={styles.header}>
        <TaskCounter
          completedTasks={completedTasks}
          numberOfTasks={numberOfTasks}
        />
      <Divider/>
      </div>
      {hasTasks && tasks.map((task) => (
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
