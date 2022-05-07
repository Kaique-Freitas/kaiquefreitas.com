interface FooterProps {
  absolute?: boolean
  mdAbsolute?: boolean
}

export function Footer({ absolute, mdAbsolute }: FooterProps) {
  return (
    <footer
      className={`w-full py-3 phone:py-6 ${
        absolute ? 'absolute' : mdAbsolute ? 'md:absolute mt-20' : 'mt-20'
      } bottom-0 border-t-[1px]`}
    >
      <a
        href='https://kaiquefreitas.com'
        rel='noopener noreferrer'
        className='flex justify-center phone:text-lg'
      >
        {new Date().getFullYear()} @ Kaique Freitas
      </a>
    </footer>
  )
}
