import Clipboard from '../../assets/icon/Clipboard.svg';
import { Divider } from "../../components/Divider";
import { TaskCounter } from "../../components/TaskCounter";
import { Task } from "../../types";
import { TaskList } from '../TaskList';
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
        <Divider />
      </div>
      {!hasTasks && <div className={styles.emptyList}>
        <img src={Clipboard} />
        <p>You don't have tasks registered yet</p>
        <p>Create tasks and organize your to-do items</p>
      </div>}
      {hasTasks && (
        <div className={styles.tasks}>
          <TaskList tasks={tasks} />
        </div>
      )}
    </>
  )
}
