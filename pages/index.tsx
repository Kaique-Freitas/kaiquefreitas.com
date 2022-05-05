import type { NextPage } from 'next'
import Link from 'next/link'
import { Footer } from '../components/Footer'
import { HeadComponent as Head } from '../components/Head'
import { Header } from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head title='Kaique Freitas' description='Kaique Freitas - Desenvolvedor Full-Stack' />
      <main className={styles.main}>
        <Header title='Kaique Freitas' />
        <p className={styles.description}>Desenvolvedor Full-Stack</p>

        <div className={styles.grid}>
          <Link href='/habilidades'>
            <a className={styles.card}>
              <h2>Habilidades (em breve) &rarr;</h2>
            </a>
          </Link>

          <Link href='/contato'>
            <a className={styles.card}>
              <h2>Contato (em breve) &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
