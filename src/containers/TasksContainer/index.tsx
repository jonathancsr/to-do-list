import Clipboard from '../../assets/icon/Clipboard.svg';
import { Divider } from "../../components/Divider";
import { Task } from '../../components/Task/Task';
import { TaskCounter } from "../../components/TaskCounter";
import { useTaskContext } from '../../contexts/useTaskContext';
import styles from './styles.module.css';

export const TasksContainer = () => {
  const { tasks, completeTask, deleteTask } = useTaskContext();
  const completedTasks = tasks.filter((task) => task.completed).length
  const numberOfTasks = tasks.length
  const hasTasks = numberOfTasks > 0

  const handleCompleteTask = (id: string) => {
    completeTask(id)
  }

  const handleDeleteTask = (id: string) => {
    deleteTask(id)
  }

  return (
    <>
      <div className={styles.header}>
        <TaskCounter
          completedTasks={completedTasks}
          numberOfTasks={numberOfTasks}
        />
        <Divider />
      </div>
      {!hasTasks &&
        (<div className={styles.emptyList}>
          <img src={Clipboard} />
          <p>You don't have tasks registered yet</p>
          <p>Create tasks and organize your to-do items</p>
        </div>)
      }
      {hasTasks && (
        <div className={styles.tasks}>
          {tasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              onComplete={() => handleCompleteTask(task.id)}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
      )}
    </>
  )
}
