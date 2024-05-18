import styles from './styles.module.css';

type TaskCounterProps = {
  numberOfTasks: number;
  completedTasks: number;
}

const StyledNumber = ({ number }: { number: number }) => {
  return (
    <div className={styles.number}>{number}</div>
  )
}

export const TaskCounter = ({ numberOfTasks = 0, completedTasks = 0 }: TaskCounterProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.color1}>Created Tasks <StyledNumber number={numberOfTasks} /></p>
      <p className={styles.color2}>Completed <StyledNumber number={completedTasks} /></p>
    </div>
  )
}
