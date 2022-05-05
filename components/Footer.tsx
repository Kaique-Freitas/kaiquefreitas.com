import styles from '../styles/Home.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='https://kaiquefreitas.com' rel='noopener noreferrer'>
        {new Date().getFullYear()} @ Kaique Freitas
      </a>
    </footer>
  )
}
