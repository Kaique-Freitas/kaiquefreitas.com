interface FooterProps {
  absolute?: boolean
  mdAbsolute?: boolean
}

export function Footer({ absolute, mdAbsolute }: FooterProps) {
  return (
    <footer
      className={`w-full py-3 phone:py-6 ${
        absolute ? 'absolute' : mdAbsolute ? 'md:absolute mt-20' : 'mt-20'
      } bottom-0 border-t-[1px] flex justify-center items-center`}
    >
      <a href='https://kaiquefreitas.com' rel='noopener noreferrer' className='phone:text-lg'>
        {new Date().getFullYear()} @ Kaique Freitas
      </a>
      <a target='_blank' href='https://linkedin.com/in/kaique-freitas' className='ml-5'>
        <svg xmlns='http://www.w3.org/2000/svg' width='34' height='34'>
          <title>LinkedIn</title>
          <g>
            <path
              d='M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z'
              fill='currentColor'
            ></path>
          </g>
        </svg>
      </a>
      <a target='_blank' href='https://github.com/kaique-freitas' className='ml-3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 30 30'
          width='34px'
          height='35px'
        >
          <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z' />
        </svg>
      </a>
    </footer>
  )
}
