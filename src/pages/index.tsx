import type { NextPage } from 'next'

import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeadComponent as Head } from '../components/Head'
import { CardLink } from '../components/CardLink'

const Home: NextPage = () => {
  return (
    <>
      <Head title='Kaique Freitas' description='Kaique Freitas - Desenvolvedor Full-Stack' />
      <Main>
        <Header title='Kaique Freitas' />
        <p className='my-2 text-xl phone:text-2xl lg:text-3xl'>Desenvolvedor Full-Stack</p>

        <div className='flex items-center justify-center flex-wrap max-w-[800px] mt-4 phone:mt-12 lg:mt-16'>
          <CardLink title='Habilidades' href='/habilidades' />

          <CardLink title='Contato (em breve)' href='/contato' />
        </div>
      </Main>

      <Footer absolute />
    </>
  )
}

export default Home
