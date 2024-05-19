import { Task } from "../../components/Tasks/Task"
import { Task as TaskType } from "../../types"
import styles from './styles.module.css'

type TaskListProps = {
  tasks: TaskType[]
}
export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  )
}
