import styles from './styles.module.css';

type TaskCounterProps = {
  numberOfTasks: number;
  completedTasks: number;
}

const StyledNumber = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.number}>{children}</div>
  )
}



export const TaskCounter = ({ numberOfTasks = 0, completedTasks = 0 }: TaskCounterProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.color1}>
        Created Tasks
        <StyledNumber>
          {numberOfTasks}
        </StyledNumber>
      </p>
      <p className={styles.color2}>
        Completed
        <StyledNumber>
          {completedTasks} of {numberOfTasks}
        </StyledNumber>
      </p>
    </div>
  )
}
