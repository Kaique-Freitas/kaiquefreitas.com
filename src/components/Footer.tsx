export function Footer() {
  return (
    <footer className='w-full py-3 phone:py-6 absolute bottom-0 border-t-[1px]'>
      <a href='https://kaiquefreitas.com' rel='noopener noreferrer' className='flex justify-center phone:text-lg'>
        {new Date().getFullYear()} @ Kaique Freitas
      </a>
    </footer>
  )
}
