import { HeadComponent as Head } from '../../components/Head'
import { Navbar } from '../../components/Navbar'
import { SkillsSection } from '../../components/SkillsSection'
import { FooterNew } from '../../components/FooterNew'

export default function Skills() {
  return (
    <>
      <Head title='Habilidades - Kaique Freitas' description='Habilidades de Kaique Freitas - Desenvolvedor Full-Stack' />
      <Navbar />
      <main className='pt-20'>
        <SkillsSection />
      </main>
      <FooterNew />
    </>
  )
}
