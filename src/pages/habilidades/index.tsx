import { Footer } from '../../components/Footer'
import { HeadComponent as Head } from '../../components/Head'
import { Header } from '../../components/Header'

import styles from '../../../styles/Home.module.css'

export default function Skills() {
  return (
    <div>
      <Head title='Habilidades - Kaique Freitas' description='Página com principais habilidades' />
      <main className={styles.main}>
        <Header title='Habilidades' />
      </main>
      <Footer />
    </div>
  )
}
