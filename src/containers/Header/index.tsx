
import Logo from '../../components/Logo';
import styles from './styles.module.css';
export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}><Logo/></h1>
    </header>
  )
}
