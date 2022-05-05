import { Main } from '../../components/Main'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Container } from '../../components/Container'
import { HeadComponent as Head } from '../../components/Head'


export default function Contact() {
  return (
    <Container>
      <Head title='Kaique Freitas - Contato' description='Página de contato - Kaique Freitas' />
      <Main>
        <Header title='Contato' />
      </Main>
      <Footer />
    </Container>
  )
}
