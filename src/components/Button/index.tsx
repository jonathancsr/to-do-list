import { ReactElement } from 'react';
import styles from './styles.module.css';

type ButtonProps = {
  label?: string;
  rightIcon?: ReactElement;
  onClick?: () => void
}
export const Button = ({
  label,
  rightIcon,
  onClick = () => { }
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {label}
      {rightIcon}
    </button>
  )
}
