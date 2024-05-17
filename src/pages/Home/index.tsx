import { AddNewTask } from "../../containers/AddNewTask"
import { Header } from "../../containers/Header"
import styles from './styles.module.css'

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <AddNewTask />
    </div>
  )
}
