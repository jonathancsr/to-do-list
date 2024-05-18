import { useState } from "react";
import { AddNewTask } from "../../containers/AddNewTask";
import { Header } from "../../containers/Header";
import { TasksContainer } from "../../containers/TasksContainer";
import { Task } from '../../types';
import styles from './styles.module.css';
import { createTask } from "./utils";

export const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.addNewTask}>
        <AddNewTask
        onAddTask={(title) => setTasks(createTask(title, tasks))}
        />
      </div>
      <TasksContainer tasks={tasks}/>
    </div>
  )
}
