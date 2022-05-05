import React from 'react'
import styles from './styles/Main.module.css'

export function Main({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>
}
