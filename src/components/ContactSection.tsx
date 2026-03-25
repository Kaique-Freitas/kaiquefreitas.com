import { RevealOnScroll } from './RevealOnScroll'

const contacts = [
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=5581999184774',
    color: 'hover:border-green-500/50 hover:shadow-green-500/10',
    iconColor: 'text-green-400 group-hover:text-green-300',
    icon: (
      <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
        <path d='M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z' />
      </svg>
    )
  },
  {
    label: 'Telegram',
    href: 'https://t.me/kaiquefreitas_dev',
    color: 'hover:border-blue-400/50 hover:shadow-blue-400/10',
    iconColor: 'text-blue-400 group-hover:text-blue-300',
    icon: (
      <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
        <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
      </svg>
    )
  },
  {
    label: 'Email',
    href: 'mailto:email@kaiquefreitas.com',
    color: 'hover:border-red-400/50 hover:shadow-red-400/10',
    iconColor: 'text-red-400 group-hover:text-red-300',
    icon: (
      <svg className='w-7 h-7' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kaique-freitas',
    color: 'hover:border-blue-600/50 hover:shadow-blue-600/10',
    iconColor: 'text-blue-500 group-hover:text-blue-400',
    icon: (
      <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    )
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kaique-freitas',
    color: 'hover:border-gray-400/50 hover:shadow-gray-400/10',
    iconColor: 'text-gray-400 group-hover:text-gray-300',
    icon: (
      <svg className='w-7 h-7' viewBox='0 0 24 24' fill='currentColor'>
        <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
      </svg>
    )
  }
]

export function ContactSection() {
  return (
    <section id='contato' className='relative py-24 md:py-32'>
      <div className='section-divider mb-24' />

      <div className='max-w-4xl mx-auto px-6 text-center'>
        <RevealOnScroll>
          <p className='text-primary-400 font-mono text-sm mb-2'>// contato</p>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Vamos <span className='gradient-text'>conversar</span>?
          </h2>
          <p className='text-gray-400 text-lg max-w-xl mx-auto mb-16'>
            Estou sempre aberto a novos projetos e oportunidades.
            Entre em contato por qualquer um dos canais abaixo.
          </p>
        </RevealOnScroll>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto'>
          {contacts.map((contact, i) => (
            <RevealOnScroll key={contact.label} variant='scale' delay={i * 100}>
              <a
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                rel='noopener noreferrer'
                className={`group glass card-shine rounded-xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${contact.color}`}
              >
                <span className={`${contact.iconColor} transition-colors duration-300`}>
                  {contact.icon}
                </span>
                <span className='text-gray-300 font-medium group-hover:text-white transition-colors'>
                  {contact.label}
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
