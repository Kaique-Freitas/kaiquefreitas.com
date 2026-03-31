import { RevealOnScroll } from './RevealOnScroll'

const stats = [
  { value: 'Mais de 5 anos', label: 'De experiência' },
  { value: 'Pleno', label: 'Full-Stack' },
  { value: 'React.js', label: 'Especialista' },
  { value: 'Node.js', label: 'Back-end' }
]

export function AboutSection() {
  return (
    <section id='sobre' className='relative py-24 md:py-32'>
      <div className='section-divider mb-24' />

      <div className='max-w-6xl mx-auto px-6'>
        <RevealOnScroll>
          <p className='text-primary-400 font-mono text-sm mb-2'>// sobre mim</p>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-12'>
            Quem sou <span className='gradient-text'>eu</span>
          </h2>
        </RevealOnScroll>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <RevealOnScroll variant='left' delay={200}>
            <div className='space-y-6'>
              <p className='text-gray-400 text-lg leading-relaxed'>
                Desenvolvedor Full-Stack Pleno com 4 anos de experiência na criação
                de soluções escaláveis e eficientes. Já desenvolvi bots que integram
                com IA, e-commerces, SaaS para construtoras e sistemas de cashback.
              </p>
              <p className='text-gray-400 text-lg leading-relaxed'>
                Tenho expertise em React.js, Node.js, TypeScript, automação de processos
                e integração de sistemas. Sou pragmático, pronto para ajudar e focado
                na satisfação do cliente.
              </p>
              <div className='flex flex-wrap gap-3 pt-4'>
                {['React.js', 'Node.js', 'TypeScript', 'Next.js', 'IA', 'Docker', 'MySQL', 'Automação'].map((tech) => (
                  <span
                    key={tech}
                    className='skill-tag px-4 py-2 text-sm font-mono text-primary-400 glass rounded-lg cursor-default'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant='right' delay={400}>
            <div className='grid grid-cols-2 gap-4'>
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className='glass glass-hover card-shine rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1'
                >
                  <div className='text-xl md:text-2xl font-bold text-white mb-1'>{stat.value}</div>
                  <div className='text-sm text-gray-500'>{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
