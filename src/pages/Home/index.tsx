import { useState } from "react";
import { AddNewTask } from "../../containers/AddNewTask";
import { Header } from "../../containers/Header";
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
        onAddTask={(title) => setTasks([...tasks, createTask(title)])}
        />
      </div>
      {tasks.map((task) => (
        <div key={task.id} className={styles.task}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => {}}
          />
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  )
}
