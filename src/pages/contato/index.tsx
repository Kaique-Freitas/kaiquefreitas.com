import { HeadComponent as Head } from '../../components/Head'
import { Navbar } from '../../components/Navbar'
import { ContactSection } from '../../components/ContactSection'
import { FooterNew } from '../../components/FooterNew'

export default function Contact() {
  return (
    <>
      <Head title='Contato - Kaique Freitas' description='Entre em contato com Kaique Freitas' />
      <Navbar />
      <main className='pt-20'>
        <ContactSection />
      </main>
      <FooterNew />
    </>
  )
}
