import { AddNewTask } from "../../containers/AddNewTask";
import { Header } from "../../containers/Header";
import { TasksContainer } from "../../containers/TasksContainer";
import styles from './styles.module.css';

export const HomePage = () => {
    return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.addNewTask}>
        <AddNewTask />
      </div>
      <TasksContainer />
    </div>
  )
}
