import { Footer } from '../../components/Footer'
import { HeadComponent as Head } from '../../components/Head'
import { Header } from '../../components/Header'

import styles from '../../../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head title='Kaique Freitas - Contato' description='Página de contato - Kaique Freitas' />
      <main className={styles.main}>
        <Header title='Contato' />
      </main>
      <Footer />
    </div>
  )
}
