export function HeroSection() {
  return (
    <section id='hero' className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background orbs */}
      <div className='orb orb-1' />
      <div className='orb orb-2' />

      <div className='relative z-10 text-center px-6 max-w-4xl mx-auto'>
        <div className='animate-fade-in'>
          <p className='text-primary-400 font-mono text-sm md:text-base mb-4 tracking-wider'>
            &lt;Desenvolvedor Full-Stack Pleno /&gt;
          </p>
        </div>

        <h1 className='text-5xl sm:text-6xl lg:text-8xl font-black mb-6 animate-fade-in-up leading-tight'>
          <span className='text-white'>Kaique</span>{' '}
          <span className='gradient-text'>Freitas</span>
        </h1>

        <p
          className='text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up'
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          Especialista em Soluções Web escaláveis e eficientes. Pragmático • Orientado a Resultados • Focado no Cliente
        </p>

        <div
          className='flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in-up'
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <a
            href='#contato'
            className='group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25 hover:-translate-y-0.5'
          >
            Entre em contato
          </a>
          <a
            href='#habilidades'
            className='px-8 py-4 glass glass-hover text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5'
          >
            Ver habilidades
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className='absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in'
          style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
        >
          <div className='w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center'>
            <div className='w-1.5 h-3 bg-primary-400 rounded-full mt-2 animate-bounce' />
          </div>
        </div>
      </div>
    </section>
  )
}
