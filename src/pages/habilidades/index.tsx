import { Main } from '../../components/Main'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeadComponent as Head } from '../../components/Head'

export default function Skills() {
  return (
    <>
      <Head title='Habilidades - Kaique Freitas' description='Página com principais habilidades' />
      <Main>
        <Header title='Habilidades' />
        <div className='flex items-center justify-center flex-wrap max-w-[800px] mt-4 phone:mt-6 lg:mt-16'>
          <div className='m-4 p-6 w-[250px] md:w-[300px] text-left rounded-lg border-2'>
            <h2 className='phone:text-2xl font-semibold'>Front-end</h2>
            <ul className='list-disc list-inside mt-5'>
              <li>Typescript</li>
              <li>React</li>
              <li>NextJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Material UI</li>
              <li>TailwindCSS</li>
              <li>Responsividade</li>
            </ul>
          </div>
          <div className='m-4 p-6 w-[250px] md:w-[300px] text-left rounded-lg border-2'>
            <h2 className='phone:text-2xl font-semibold'>Back-end</h2>
            <ul className='list-disc list-inside mt-5'>
              <li>Node</li>
              <li>MySQL</li>
              <li>Rest API's</li>
              <li>AdonisJS</li>
              <li>Express</li>
              <li>POO</li>a
              <li>Princípios Solid</li>
            </ul>
          </div>
          <div className='m-4 p-6 w-[250px] md:w-[300px] text-left rounded-lg border-2'>
            <h2 className='phone:text-2xl font-semibold'>Outros</h2>
            <ul className='list-disc list-inside mt-5'>
              <li>Linux</li>
              <li>Docker</li>
              <li>CI / CD</li>
              <li>Desenvolvimento ágil</li>
              <li>Testes unitários</li>
            </ul>
          </div>
        </div>
      </Main>
      <Footer mdAbsolute />
    </>
  )
}
