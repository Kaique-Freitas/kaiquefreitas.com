import { Main } from '../../components/Main'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Container } from '../../components/Container'
import { HeadComponent as Head } from '../../components/Head'


export default function Skills() {
  return (
    <Container>
      <Head title='Habilidades - Kaique Freitas' description='Página com principais habilidades' />
      <Main>
        <Header title='Habilidades' />
      </Main>
      <Footer />
    </Container>
  )
}
