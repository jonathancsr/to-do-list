import { Button } from "../../components/Button"
import { TextInput } from "../../components/TextInput"
import Plus from "../../components/icons/Plus"
import styles from './styles.module.css'

type AddNewTaskProps = {
  onAddTask: (title: string) => void
}

export const AddNewTask = ({ onAddTask }: AddNewTaskProps) => {
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskInput = e.currentTarget?.task?.value;
    onAddTask(taskInput);
    e.currentTarget.reset();
  }

  return (
    <form className={styles.container} onSubmit={handleAddTask}>
      <TextInput
        id="name"
        name="task"
        placeholder="Add new task..."
      />
      <Button
        type="submit"
        label="Create"
        rightIcon={<Plus />}
      />
    </form>
  )
}
