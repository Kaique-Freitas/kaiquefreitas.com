import Link from 'next/link'
import type { NextPage } from 'next'

import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeadComponent as Head } from '../components/Head'

const Home: NextPage = () => {
  return (
    <>
      <Head title='Kaique Freitas' description='Kaique Freitas - Desenvolvedor Full-Stack' />
      <Main>
        <Header title='Kaique Freitas' />
        <p className='my-2 text-xl phone:text-2xl lg:text-3xl'>Desenvolvedor Full-Stack</p>

        <div className='flex items-center justify-center flex-wrap max-w-[800px] mt-4 phone:mt-12 lg:mt-16'>
          <Link href='/habilidades'>
            <a className='m-4 p-6 w-[230px] text-left rounded-lg border-2 hover:text-blue-300 hover:border-blue-300 transition duration-100'>
              <h2 className='phone:text-2xl font-bold'>Habilidades &rarr;</h2>
            </a>
          </Link>

          <Link href='/contato'>
            <a className='m-4 p-6 w-[230px] text-left rounded-lg border-2 hover:text-blue-300 hover:border-blue-300 transition duration-100'>
              <h2 className='phone:text-2xl font-bold'>Contato &rarr;</h2>
            </a>
          </Link>
        </div>
      </Main>

      <Footer />
    </>
  )
}

export default Home
