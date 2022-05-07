interface HeaderProps {
  title: string
}
export function Header({ title }: HeaderProps) {
  return (
    <h1 className='text-center my-14 md:my-[70px] text-4xl phone:text-5xl md:text-[55px] font-bold'>{title}</h1>
  )
}
