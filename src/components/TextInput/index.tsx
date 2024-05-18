import { InputHTMLAttributes, LegacyRef } from 'react';
import styles from './styles.module.css';

type TextInputProps = {
  placeholder?: string
  name?:string;
  ref?: LegacyRef<HTMLInputElement> ;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  placeholder,
  ref,
  type = 'text',
  ...props
}: TextInputProps) => {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className={styles.input}
      {...props}
      />
  )
}
