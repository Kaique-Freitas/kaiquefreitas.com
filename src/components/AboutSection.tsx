import { RevealOnScroll } from './RevealOnScroll'

const stats = [
  { value: 'Full-Stack', label: 'Desenvolvedor' },
  { value: 'React', label: 'Especialista' },
  { value: 'Node.js', label: 'Back-end' },
  { value: 'TypeScript', label: 'Linguagem Principal' }
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
                Sou um desenvolvedor Full-Stack apaixonado por criar soluções digitais
                que fazem a diferença. Com experiência em tecnologias modernas como
                React, Next.js, Node.js e TypeScript, busco sempre entregar código limpo
                e interfaces elegantes.
              </p>
              <p className='text-gray-400 text-lg leading-relaxed'>
                Minha abordagem combina design centrado no usuário com arquitetura
                sólida de software, seguindo princípios SOLID e boas práticas de
                desenvolvimento ágil.
              </p>
              <div className='flex flex-wrap gap-3 pt-4'>
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Docker', 'MySQL'].map((tech) => (
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
