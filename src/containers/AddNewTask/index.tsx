import { Button } from "../../components/Button"
import { TextInput } from "../../components/TextInput"
import Plus from "../../components/icons/Plus"
import { useTaskContext } from "../../contexts/useTaskContext"
import styles from './styles.module.css'



export const AddNewTask = () => {
  const {addNewTask} = useTaskContext();
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskInput = e.currentTarget?.task?.value;
    addNewTask(taskInput);
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
