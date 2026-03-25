import type { NextPage } from 'next'
import { HeadComponent as Head } from '../components/Head'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ContactSection } from '../components/ContactSection'
import { FooterNew } from '../components/FooterNew'

const Home: NextPage = () => {
  return (
    <>
      <Head
        title='Kaique Freitas - Desenvolvedor Full-Stack'
        description='Portfólio de Kaique Freitas - Desenvolvedor Full-Stack especializado em React, Next.js, Node.js e TypeScript.'
      />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <FooterNew />
    </>
  )
}

export default Home
