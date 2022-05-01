import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kaique Freitas</title>
        <link rel="icon" sizes="32x32" href="favicon.ico" />
        <meta
          name="description"
          content="Kaique Freitas - Desenvolvedor Full-Stack"
        />
        <meta
          name="keywords"
          content="Kaique, Kaique Freitas, Kaique Freitas Dev"
        />
        <meta name="author" content="Kaique Freitas" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kaique Freitas</h1>

        <p className={styles.description}>Desenvolvedor Full-Stack</p>

        <div className={styles.grid}>
          <a href="/habilidades" className={styles.card}>
            <h2>Habilidades (em breve) &rarr;</h2>
          </a>

          <a href="https://api.whatsapp.com/send?phone=5581999184774" className={styles.card}>
            <h2>Contato (em breve) &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://kaiquefreitas.com" rel="noopener noreferrer">
          {new Date().getFullYear()} @ Kaique Freitas
        </a>
      </footer>
    </div>
  );
};

export default Home;
