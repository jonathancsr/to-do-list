import styles from './styles.module.css';

type TextInputProps = {
  placeholder?: string
  label?: string;
}

export const TextInput = ({
  placeholder,
  ...props
}: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      {...props}
      />
  )
}
