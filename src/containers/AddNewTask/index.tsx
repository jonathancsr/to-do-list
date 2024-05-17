import { Button } from "../../components/Button"
import { TextInput } from "../../components/TextInput"
import Plus from "../../components/icons/Plus"
import styles from './styles.module.css'

export const AddNewTask = () => {
  return (
    <div className={styles.container}>
      <TextInput
        placeholder="Add new task..."
      />
      <Button
        label="Create"
        rightIcon={<Plus/>}
      />
    </div>
  )
}
