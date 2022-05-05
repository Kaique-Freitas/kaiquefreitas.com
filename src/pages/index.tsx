import Link from 'next/link'
import type { NextPage } from 'next'

import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Container } from '../components/Container'
import { HeadComponent as Head } from '../components/Head'

import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Container>
      <Head title='Kaique Freitas' description='Kaique Freitas - Desenvolvedor Full-Stack' />
      <Main>
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
      </Main>

      <Footer />
    </Container>
  )
}

export default Home
