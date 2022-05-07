import Link from 'next/link'

interface CardLinkProps {
  title: string
  href: string
}

export function CardLink({ title, href }: CardLinkProps) {
  return (
    <Link href={href}>
      <a className='m-4 p-6 w-[230px] text-left rounded-lg border-2 hover:text-blue-300 hover:border-blue-300 transition duration-100 cursor-pointer'>
        <h2 className='phone:text-2xl font-bold'>{title} &rarr;</h2>
      </a>
    </Link>
  )
}
