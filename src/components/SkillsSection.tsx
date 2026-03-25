import { RevealOnScroll } from './RevealOnScroll'

interface SkillGroup {
  title: string
  icon: React.ReactNode
  color: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Front-end',
    color: 'from-blue-500/20 to-indigo-500/20',
    icon: (
      <svg className='w-8 h-8' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
      </svg>
    ),
    skills: ['TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Material UI', 'TailwindCSS', 'Responsividade']
  },
  {
    title: 'Back-end',
    color: 'from-emerald-500/20 to-teal-500/20',
    icon: (
      <svg className='w-8 h-8' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' />
      </svg>
    ),
    skills: ['Node.js', 'MySQL', 'REST APIs', 'AdonisJS', 'Express', 'POO', 'Princípios SOLID', 'Arquitetura MVC']
  },
  {
    title: 'DevOps & Outros',
    color: 'from-purple-500/20 to-pink-500/20',
    icon: (
      <svg className='w-8 h-8' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
        <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
      </svg>
    ),
    skills: ['Linux', 'Docker', 'CI / CD', 'Git', 'Desenvolvimento Ágil', 'Testes Unitários']
  }
]

export function SkillsSection() {
  return (
    <section id='habilidades' className='relative py-24 md:py-32'>
      <div className='section-divider mb-24' />
      <div className='orb orb-3' />

      <div className='max-w-6xl mx-auto px-6'>
        <RevealOnScroll>
          <p className='text-primary-400 font-mono text-sm mb-2'>// habilidades</p>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-16'>
            Minhas <span className='gradient-text'>habilidades</span>
          </h2>
        </RevealOnScroll>

        <div className='grid md:grid-cols-3 gap-6'>
          {skillGroups.map((group, index) => (
            <RevealOnScroll key={group.title} variant='scale' delay={index * 150}>
              <div className='glass card-shine rounded-2xl p-8 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-600/10 group'>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {group.icon}
                </div>

                <h3 className='text-xl font-bold text-white mb-6'>{group.title}</h3>

                <div className='flex flex-wrap gap-2'>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className='skill-tag px-3 py-1.5 text-sm text-gray-300 bg-white/5 rounded-lg border border-white/5 hover:border-primary-500/40 hover:text-primary-400 transition-all duration-300'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
