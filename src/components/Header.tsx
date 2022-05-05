import styles from '../../styles/Home.module.css'

interface HeaderProps {
  title: string
}
export function Header({ title }: HeaderProps) {
  return <h1 className={styles.title}>{title}</h1>
}
